import { cn } from "@/lib/utils"

export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-[var(--separator-height)] w-full border-x border-line",
        className
      )}
    >
      {/* <div
        className="absolute -top-1.25 -left-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      />
      <div
        className="absolute -top-1.25 -right-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      /> */}
    </div>
  )
}