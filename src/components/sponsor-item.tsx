import Link from "next/link"
import { cn } from "@/lib/utils"

type SponsorItemProps = React.ComponentProps<typeof Link>

export function SponsorItem({
  className,
  ...props
}: SponsorItemProps) {
  return (
    <Link
      className={cn(
        "flex h-24 items-center justify-center rounded-xl border border-border p-6 transition-colors hover:bg-accent",
        className
      )}
      target="_blank"
      rel="noopener sponsored"
      {...props}
    />
  )
}