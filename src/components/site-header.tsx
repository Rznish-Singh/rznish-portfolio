import Link from "next/link"
import { MAIN_NAV } from "@/config/site"
import { CommandMenu } from "@/components/command-menu"
import { Nav } from "@/components/nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center gap-4 px-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-wide"
        >
          rznish
        </Link>

        <div className="flex-1" />

        <Nav items={MAIN_NAV} className="max-sm:hidden" />

        <div className="flex items-center gap-1">
          <CommandMenu />
          <ThemeToggle />
        </div>
      </div>
      
    </header>
  )
}
