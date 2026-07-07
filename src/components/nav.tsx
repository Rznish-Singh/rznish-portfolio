"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/config/site"

export function Nav({
  items,
  className,
}: {
  items: NavItem[]
  className?: string
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-4", className)}>
      {items.map(({ title, href }) => {
        const isActive =
          pathname === href || (href !== "/" && pathname?.startsWith(href))
        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground"
          >
            {title}
          </Link>
        )
      })}
    </nav>
  )
}
