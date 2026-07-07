import { cn } from "@/lib/utils"

export function Tooltip({ children }: { children: React.ReactNode }) {
  return <div className="group/tooltip relative inline-flex">{children}</div>
}

export function TooltipTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function TooltipContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-full left-1/2 z-20 mb-1.5 -translate-x-1/2 rounded-md border border-border bg-popover px-2 py-1 text-xs whitespace-nowrap text-foreground opacity-0 shadow-md transition-opacity group-hover/tooltip:opacity-100",
        className
      )}
    >
      {children}
    </div>
  )
}