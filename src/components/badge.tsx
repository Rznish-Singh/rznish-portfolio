import { cn } from "@/lib/utils"

export function Badge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted px-2 py-1 font-mono text-xs text-muted-foreground transition-colors",
        className
      )}
      {...props}
    />
  )
}