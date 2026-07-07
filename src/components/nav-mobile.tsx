"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { NavItem } from "@/config/site"

export function NavMobile({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="group flex size-8 flex-col items-center justify-center gap-1"
      >
        <span
          className={`h-0.5 w-4 rounded bg-foreground transition-transform ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-4 rounded bg-foreground transition-transform ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute bottom-10 right-0 flex w-40 flex-col rounded-xl border border-border bg-popover p-1 shadow-md">
          {items.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-1.5 text-sm aria-[current=page]:bg-accent"
              >
                {link.title}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default NavMobile
