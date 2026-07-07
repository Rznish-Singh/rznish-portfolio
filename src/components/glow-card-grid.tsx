"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export type GlowCardGridProps = React.ComponentPropsWithoutRef<"div"> & {
  cardRadius?: number
  children: React.ReactNode
}

export function GlowCardGrid({ cardRadius = 16, className, style, ...props }: GlowCardGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!gridRef.current) return
      const cards = gridRef.current.querySelectorAll<HTMLElement>("[data-slot='glow-card']")
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
        const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
        card.style.setProperty("--pointer-x", x.toFixed(3))
        card.style.setProperty("--pointer-y", y.toFixed(3))
      })
    }
    document.addEventListener("pointermove", handlePointerMove)
    return () => document.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return (
    <div
      ref={gridRef}
      className={cn("grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3", className)}
      style={{ "--card-radius": `${cardRadius}px`, ...style } as React.CSSProperties}
      {...props}
    />
  )
}

export function GlowCard({
  name,
  handle,
  avatar,
  className,
}: {
  name: string
  handle: string
  avatar: string
  className?: string
}) {
  return (
    <div
      data-slot="glow-card"
      className={cn(
        "relative h-40 w-full overflow-hidden rounded-(--card-radius) border border-border select-none",
        className
      )}
    >
      <div className="z-1 flex size-full flex-col items-center justify-center gap-3">
        <img className="size-14 rounded-full" src={avatar} alt={name} />
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{handle}</p>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-(--card-radius) border-2 border-transparent"
        style={{
          background:
            "radial-gradient(120px circle at calc(50% + var(--pointer-x, 0) * 50%) calc(50% + var(--pointer-y, 0) * 50%), hsl(var(--foreground)/0.12), transparent 70%)",
        }}
      />
    </div>
  )
}