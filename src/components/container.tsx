// components/container.tsx

import { cn } from "@/lib/utils"

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-3xl px-4", className)}
      {...props}
    />
  )
}