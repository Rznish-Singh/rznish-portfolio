"use client"

import type { ComponentProps } from "react"
import { CheckIcon, CopyIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

export type CopyButtonProps = ComponentProps<"button"> & {
  text: string | (() => string)
  onCopySuccess?: (text: string) => void
  onCopyError?: (error: Error) => void
}

export function CopyButton({
  className,
  text,
  onClick,
  onCopySuccess,
  onCopyError,
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({ onCopySuccess, onCopyError })

  return (
    <button
      type="button"
      aria-label="Copy"
      className={cn(
        "flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
        className
      )}
      onClick={(e) => {
        copy(text)
        onClick?.(e)
      }}
      {...props}
    >
      {state === "idle" && <CopyIcon className="size-4" />}
      {state === "done" && <CheckIcon className="size-4 text-green-600" />}
      {state === "error" && <XIcon className="size-4 text-red-600" />}
    </button>
  )
}