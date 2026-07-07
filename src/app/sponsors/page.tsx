import type { Metadata } from "next"
import { addQueryParams } from "@/lib/url"
import { ArrowUpRightIcon } from "lucide-react"
import { SPONSORSHIP_URL, UTM_PARAMS } from "@/config/site"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { Separator } from "@/components/separator"
import { SponsorItem } from "@/components/sponsor-item"
import { SPONSORS } from "@/data/sponsors/data"
import type { Sponsor, SponsorTier } from "@/data/sponsors/types"
import { SPONSOR_TIERS } from "@/data/sponsors/types"

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Grateful to the sponsors who make this open-source work possible.",
  alternates: { canonical: "/sponsors" },
}

const SPONSORS_BY_TIER = SPONSORS.reduce(
  (acc, sponsor) => {
    ;(acc[sponsor.tier] ??= []).push(sponsor)
    return acc
  },
  {} as Record<SponsorTier, Sponsor[]>
)

export default function SponsorsPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto max-w-3xl px-4">
        <PageHeading className="py-8">
          <PageHeadingTagline>Sponsors</PageHeadingTagline>
          <PageHeadingTitle>Backed by the community.</PageHeadingTitle>
          <PageHeadingDescription>
            Grateful to the sponsors who make this open-source work possible.
          </PageHeadingDescription>
        </PageHeading>

        <Separator className="h-4" />

        {SPONSOR_TIERS.map((tier) => (
          <SponsorsGroup
            key={tier.name}
            title={tier.title}
            sponsors={SPONSORS_BY_TIER[tier.name] ?? []}
          />
        ))}

        <div className="flex justify-center py-6">
          <Link
            href={addQueryParams(SPONSORSHIP_URL, UTM_PARAMS)}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            Sponsor my work
            <ArrowUpRightIcon className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function SponsorsGroup({
  title,
  sponsors,
}: {
  title: string
  sponsors: Sponsor[]
}) {
  if (sponsors.length === 0) return null

  return (
    <div className="border-b border-border py-6">
      <h2 className="mb-4 px-1 text-lg font-semibold">{title}</h2>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sponsors.map((item) => (
          <li key={item.name}>
            <SponsorItem
              href={addQueryParams(item.url, UTM_PARAMS)}
              aria-label={`${item.name} logo`}
              className={cn("[&_svg]:h-6 [&_svg]:w-auto [&_svg]:max-w-[220px]")}
            >
              <item.logo aria-hidden />
            </SponsorItem>
          </li>
        ))}
      </ul>
      </div>
    
  )
}