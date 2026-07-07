import type { JSX } from "react"

export const SPONSOR_TIERS = [
  { name: "platinum", title: "Platinum Sponsors" },
  { name: "gold", title: "Gold Sponsors" },
  { name: "silver", title: "Silver Sponsors" },
  { name: "supporter", title: "Supporters" },
] as const

export type SponsorTier = (typeof SPONSOR_TIERS)[number]["name"]

export type Sponsor = {
  name: string
  url: string
  logo: (props: React.ComponentProps<"svg">) => JSX.Element
  tier: SponsorTier
}