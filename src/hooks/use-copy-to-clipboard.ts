"use client"

import { useCallback, useRef, useState } from "react"

export type CopyState = "idle" | "done" | "error"

export function useCopyToClipboard({
  onCopySuccess,
  onCopyError,
  resetAfter = 1500,
}: {
  onCopySuccess?: (text: string) => void
  onCopyError?: (error: Error) => void
  resetAfter?: number
} = {}) {
  const [state, setState] = useState<CopyState>("idle")
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const copy = useCallback(
    async (value: string | (() => string)) => {
      const text = typeof value === "function" ? value() : value

      try {
        await navigator.clipboard.writeText(text)
        setState("done")
        onCopySuccess?.(text)
      } catch (err) {
        setState("error")
        onCopyError?.(err as Error)
      } finally {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setState("idle"), resetAfter)
      }
    },
    [onCopySuccess, onCopyError, resetAfter]
  )

  return { state, copy }
}