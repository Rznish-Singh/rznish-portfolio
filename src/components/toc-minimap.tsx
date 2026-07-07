"use client"

import type { ReactNode, MouseEvent } from "react"
import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

export type TOCItemType = {
  title: ReactNode
  url: string
  depth: number
}

type TOCMinimapProps = {
  items: TOCItemType[]
  className?: string
}

export function TOCMinimap({
  items,
  className,
}: TOCMinimapProps) {
  const itemIds = useMemo(
    () => items.map((item) => item.url.replace("#", "")),
    [items]
  )

  const activeHeading = useActiveHeading(itemIds)

  if (!items.length) return null

  return (
    <div className={cn("group/toc relative ml-auto w-14", className)}>
      {/* Mini map */}
      <div className="flex max-h-[50dvh] flex-col gap-3 overflow-hidden py-3 pl-4 opacity-100 transition-opacity duration-200 group-hover/toc:opacity-0">
        {items.map((item) => (
          <div
            key={item.url}
            data-active={item.url === `#${activeHeading}`}
            className={cn(
              "h-0.5 w-6 shrink-0 rounded-xs bg-muted-foreground/40 transition-colors",
              item.depth === 3 && "ml-2 w-4",
              item.depth === 4 && "ml-4 w-2",
              "data-[active=true]:bg-foreground"
            )}
          />
        ))}
      </div>

      {/* Expanded TOC */}
      <div className="pointer-events-none absolute top-0 right-0 z-10 w-56 origin-top-right rounded-xl border border-border bg-popover p-4 opacity-0 shadow-md transition-opacity duration-200 group-hover/toc:pointer-events-auto group-hover/toc:opacity-100">
        <ul className="flex max-h-[50dvh] flex-col overflow-y-auto text-sm">
          {items.map((item) => (
            <li key={item.url} className="py-1">
              <a
                href={item.url}
                data-active={item.url === `#${activeHeading}`}
                className={cn(
                  "block line-clamp-2 w-full text-muted-foreground transition-colors hover:text-foreground",
                  "data-[active=true]:text-foreground",
                  item.depth === 3 && "pl-3",
                  item.depth === 4 && "pl-6"
                )}
                onClick={(e) => handleItemClick(e, item.url)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function handleItemClick(
  e: MouseEvent<HTMLAnchorElement>,
  url: string
) {
  e.preventDefault()

  history.pushState(null, "", url)

  document.getElementById(url.replace("#", ""))?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

function useActiveHeading(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (!itemIds.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "0% 0% -80% 0%",
        threshold: 0.98,
      }
    )

    itemIds.forEach((id) => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [itemIds])

  return activeId
}