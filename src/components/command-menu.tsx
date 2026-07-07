"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import {
  CornerDownLeftIcon,
  FileTextIcon,
  HomeIcon,
  MonitorIcon,
  MoonStarIcon,
  NewspaperIcon,
  RssIcon,
  SearchIcon,
  SunMediumIcon,
} from "lucide-react"
import { useTheme } from "next-themes"

type BlogPreview = {
  title: string
  slug: string
}

const PAGE_LINKS = [
  { title: "Home", href: "/", icon: HomeIcon },
  { title: "Blog", href: "/blog", icon: NewspaperIcon },
]

const OTHER_LINKS = [
  { title: "RSS Feed", href: "/rss", icon: RssIcon, newTab: true },
  { title: "llms.txt", href: "/llms.txt", icon: FileTextIcon, newTab: true },
]

export function CommandMenu({ posts = [] }: { posts?: BlogPreview[] }) {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    function down(e: KeyboardEvent) {
      const isTypingField =
        e.target instanceof HTMLElement &&
        (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")

      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !isTypingField)) {
        e.preventDefault()
        setOpen((o) => !o)
      }

      if (e.key === "Escape") {
        setOpen(false)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Lock background scroll while the menu is open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [open])

  const go = useCallback(
    (href: string, newTab?: boolean) => {
      setOpen(false)
      if (newTab) {
        window.open(href, "_blank", "noopener")
      } else {
        router.push(href)
      }
    },
    [router]
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <SearchIcon className="size-4" />
        <span className="hidden sm:inline">Search…</span>
        <span className="ml-1 hidden gap-0.5 sm:flex">
          <kbd className="kbd">⌘</kbd>
          <kbd className="kbd">K</kbd>
        </span>
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] flex items-start justify-center bg-black/40 pt-24"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-popover shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Command label="Command Menu" className="flex flex-col">
                <div className="flex items-center gap-2 border-b border-border px-3">
                  <SearchIcon className="size-4 text-muted-foreground" />
                  <Command.Input
                    autoFocus
                    placeholder="Type a command or search…"
                    className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>

                <Command.List className="max-h-80 overflow-y-auto p-2">
                  <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                    No results found.
                  </Command.Empty>

                  <Command.Group
                    heading="Pages"
                    className="px-2 py-1.5 text-xs font-medium text-muted-foreground [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1"
                  >
                    {PAGE_LINKS.map((link) => (
                      <Command.Item
                        key={link.href}
                        onSelect={() => go(link.href)}
                        className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm data-[selected=true]:bg-accent"
                      >
                        <link.icon className="size-4" />
                        {link.title}
                      </Command.Item>
                    ))}
                  </Command.Group>

                  {posts.length > 0 && (
                    <Command.Group
                      heading="Blog"
                      className="px-2 py-1.5 text-xs font-medium text-muted-foreground [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1"
                    >
                      {posts.map((post) => (
                        <Command.Item
                          key={post.slug}
                          onSelect={() => go(`/blog/${post.slug}`)}
                          className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm data-[selected=true]:bg-accent"
                        >
                          <NewspaperIcon className="size-4" />
                          <span className="line-clamp-1">{post.title}</span>
                        </Command.Item>
                      ))}
                    </Command.Group>
                  )}

                  <Command.Group
                    heading="Theme"
                    className="px-2 py-1.5 text-xs font-medium text-muted-foreground [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1"
                  >
                    <Command.Item
                      onSelect={() => {
                        setTheme("light")
                        setOpen(false)
                      }}
                      className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm data-[selected=true]:bg-accent"
                    >
                      <SunMediumIcon className="size-4" />
                      Light
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        setTheme("dark")
                        setOpen(false)
                      }}
                      className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm data-[selected=true]:bg-accent"
                    >
                      <MoonStarIcon className="size-4" />
                      Dark
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        setTheme("system")
                        setOpen(false)
                      }}
                      className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm data-[selected=true]:bg-accent"
                    >
                      <MonitorIcon className="size-4" />
                      System
                    </Command.Item>
                  </Command.Group>

                  <Command.Group
                    heading="Other"
                    className="px-2 py-1.5 text-xs font-medium text-muted-foreground [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1"
                  >
                    {OTHER_LINKS.map((link) => (
                      <Command.Item
                        key={link.href}
                        onSelect={() => go(link.href, link.newTab)}
                        className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm data-[selected=true]:bg-accent"
                      >
                        <link.icon className="size-4" />
                        {link.title}
                      </Command.Item>
                    ))}
                  </Command.Group>
                </Command.List>

                <div className="flex items-center justify-end gap-2 border-t border-border px-3 py-2 text-xs text-muted-foreground">
                  <span>Go to page</span>
                  <kbd className="kbd">
                    <CornerDownLeftIcon className="size-3" />
                  </kbd>
                </div>
              </Command>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default CommandMenu