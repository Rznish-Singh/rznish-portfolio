"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip"
import type { TechStackItem as TechStackItemType } from "@/config/tech-stack"

export type Variant = "list" | "grid"

export function TechStackItem({
  index,
  category,
  items,
  variant = "list",
  className,
}: {
  index: number
  category: string
  items: TechStackItemType[]
  variant?: Variant
  className?: string
}) {
  const isGrid = variant === "grid"
  const categoryId = `stack-${category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`

  return (
    <div
      className={cn(
        "grid items-start gap-y-3 py-4 sm:grid-cols-[10rem_1fr]",
        className
      )}
    >
      <div id={categoryId} className="text-sm text-muted-foreground">
        <span className="mr-1.5 font-mono text-muted-foreground/60 select-none" aria-hidden>
          {(index + 1).toString().padStart(2, "0")}
        </span>
        {category}
      </div>

      <ul aria-labelledby={categoryId} className="flex flex-wrap gap-1.5 sm:pl-4">
        {items.map((item) => {
          const content = isGrid ? (
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors select-none [&_svg]:size-5",
                    item.href && "hover:border-foreground/40 hover:bg-accent"
                  )}
                >
                  {item.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>{item.title}</TooltipContent>
            </Tooltip>
          ) : (
            <Badge className={cn(item.href && "hover:bg-accent hover:text-foreground")}>
              {item.icon}
              {item.title}
            </Badge>
          )

          return (
            <li key={item.key} className="flex">
              {item.href ? (
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </Link>
              ) : (
                content
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}