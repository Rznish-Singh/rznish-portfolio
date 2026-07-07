"use client"

import { SearchIcon, XIcon } from "lucide-react"

export function PostSearchInput({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex h-9 items-center gap-2 rounded-lg border border-border px-3">
      <SearchIcon className="size-4 text-muted-foreground" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search project…"
        className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
      {value.length > 0 && (
        <button
          type="button"
          aria-label="Clear"
          onClick={() => onChange("")}
          className="flex size-5 items-center justify-center rounded text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <XIcon className="size-3.5" />
        </button>
      )}
    </div>
  )
}