"use client"

import { useEffect, useState } from "react"
import { MoonStarIcon, SunMediumIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="size-8" aria-hidden />
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {resolvedTheme === "dark" ? (
        <SunMediumIcon className="size-4" />
      ) : (
        <MoonStarIcon className="size-4" />
      )}
    </button>
  )
}
