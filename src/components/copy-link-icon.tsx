"use client"

import { useState } from "react"
import { CheckIcon, LinkIcon } from "lucide-react"

export function CopyLinkIcon({ href }: { href: string }) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      aria-label="Copy link to section"
      onClick={async () => {
        try {
          const url = `${window.location.origin}${window.location.pathname}${href}`
          await navigator.clipboard.writeText(url)
          setCopied(true)
          setTimeout(() => setCopied(false), 1200)
        } catch {
          // ignore
        }
      }}
      className="flex size-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {copied ? <CheckIcon className="size-3.5" /> : <LinkIcon className="size-3.5" />}
    </button>
  )
}