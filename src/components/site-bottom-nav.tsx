import { MOBILE_NAV } from "@/config/site"
import { CommandMenu } from "@/components/command-menu"
import { NavMobile } from "@/components/nav-mobile"

export function SiteBottomNav() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-fit items-center gap-3 rounded-xl border border-border bg-popover px-3 py-2 shadow-md sm:hidden">
      <CommandMenu />
      <div className="h-6 w-px bg-border" />
      <NavMobile items={MOBILE_NAV} />
    </div>
  )
}
