"use client"

import { useState } from "react"
import { AlignJustifyIcon, LayoutGridIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip"
import type { TechStackItem as TechStackItemType } from "@/config/tech-stack"
import { TechStackItem, type Variant } from "./item"

function groupByCategory(items: TechStackItemType[]): Record<string, TechStackItemType[]> {
  const grouped: Record<string, TechStackItemType[]> = {}
  for (const item of items) {
    for (const category of item.categories) {
      ;(grouped[category] ??= []).push(item)
    }
  }
  return grouped
}

function ViewToggle({
  value,
  onChange,
}: {
  value: Variant
  onChange: (value: Variant) => void
}) {
  const options: { value: Variant; label: string; icon: typeof LayoutGridIcon }[] = [
    { value: "list", label: "List view", icon: AlignJustifyIcon },
    { value: "grid", label: "Grid view", icon: LayoutGridIcon },
  ]

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border p-0.5">
      {options.map((option) => {
        const Icon = option.icon
        const isActive = value === option.value

        return (
          <Tooltip key={option.value}>
            <TooltipTrigger>
              <button
                type="button"
                aria-label={option.label}
                aria-pressed={isActive}
                onClick={() => onChange(option.value)}
                className={cn(
                  "flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors",
                  isActive ? "bg-foreground text-background" : "hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="size-3.5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>{option.label}</TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}

export function TechStackView({
  items,
  defaultVariant = "list",
  className,
}: {
  items: TechStackItemType[]
  defaultVariant?: Variant
  className?: string
}) {
  const [variant, setVariant] = useState<Variant>(defaultVariant)
  const grouped = groupByCategory(items)

  return (
    <div className={className}>
      <div className="flex items-center justify-end">
        <ViewToggle value={variant} onChange={setVariant} />
      </div>

      <div className="divide-y divide-border">
        {Object.entries(grouped).map(([category, catItems], index) => (
          <TechStackItem
            key={category}
            index={index}
            category={category}
            items={catItems}
            variant={variant}
          />
        ))}
      </div>
    </div>
  )
}