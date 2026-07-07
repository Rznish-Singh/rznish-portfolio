"use client"

import { useEffect, useRef, useState } from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GithubIcon,
} from "lucide-react"
import { buildAIToolLinks } from "@/lib/ai-links"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function CopyPageMenu({
  markdown,
  url,
  behanceUrl,
}: {
  markdown: string
  url: string
  behanceUrl: string
}) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  const ai = buildAIToolLinks(url)

  async function copyMarkdown() {
    try {
      await navigator.clipboard.writeText(markdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore
    }
  }

  function viewAsMarkdown() {
    const blob = new Blob([markdown], { type: "text/markdown" })
    const blobUrl = URL.createObjectURL(blob)
    window.open(blobUrl, "_blank", "noopener")
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative flex">
      <button
        type="button"
        onClick={copyMarkdown}
        className="flex shrink-0 items-center gap-2 rounded-l-md border border-border px-2 py-1.5 text-sm font-medium whitespace-nowrap transition-colors hover:bg-accent sm:px-3"
      >
        {copied ? <CheckIcon className="size-4 shrink-0" /> : <CopyIcon className="size-4 shrink-0" />}
        <span className="hidden sm:inline">{copied ? "Copied!" : "Copy page"}</span>
      </button>
      <button
        type="button"
        aria-label="More copy options"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex shrink-0 items-center rounded-r-md border-y border-r border-border px-1.5 transition-colors hover:bg-accent",
          open && "bg-accent"
        )}
      >
        <ChevronDownIcon className="size-4" />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-20 mt-2 w-56 overflow-hidden rounded-lg border border-border bg-popover p-1 shadow-md">
          <MenuButton icon={<FileTextIcon className="size-4" />} onClick={viewAsMarkdown}>
            View as Markdown
          </MenuButton>

         <MenuLink icon={<ExternalLinkIcon className="size-4" />} href={behanceUrl}>
  Open in Behance
</MenuLink>

          <div className="my-1 h-px bg-border" />

          <MenuLink icon={<ExternalLinkIcon className="size-4" />} href={ai.chatgpt}>
            Open in ChatGPT
          </MenuLink>
          <MenuLink icon={<ExternalLinkIcon className="size-4" />} href={ai.claude}>
            Open in Claude
          </MenuLink>
          <MenuLink icon={<ExternalLinkIcon className="size-4" />} href={ai.cursor}>
            Open in Cursor
          </MenuLink>
          <MenuLink icon={<ExternalLinkIcon className="size-4" />} href={ai.grok}>
            Open in Grok
          </MenuLink>
          <MenuLink icon={<ExternalLinkIcon className="size-4" />} href={ai.scira}>
            Open in Scira AI
          </MenuLink>
        </div>
      )}
    </div>
  )
}

function MenuButton({
  icon,
  children,
  onClick,
}: {
  icon: React.ReactNode
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent"
    >
      {icon}
      {children}
    </button>
  )
}

function MenuLink({
  icon,
  href,
  children,
}: {
  icon: React.ReactNode
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
    >
      {icon}
      {children}
    </Link>
  )
}