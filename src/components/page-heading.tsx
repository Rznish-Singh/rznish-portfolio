import { cn } from "@/lib/utils"

export function PageHeading({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="page-heading" className={cn(className)} {...props} />
}

export function PageHeadingTagline({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-sm font-medium tracking-wide text-muted-foreground", className)}
      {...props}
    />
  )
}

export function PageHeadingTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("mt-1 text-3xl font-semibold tracking-tight text-balance", className)}
      {...props}
    />
  )
}

export function PageHeadingDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("mt-3 text-base text-muted-foreground text-balance", className)} {...props} />
  )
}