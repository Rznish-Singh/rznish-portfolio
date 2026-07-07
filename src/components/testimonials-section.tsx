import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/marquee"
import { Separator } from "@/components/separator"
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/components/testimonials"
import { TESTIMONIALS } from "@/data/testimonials"

const FEATURED = TESTIMONIALS.filter((t) => t.isFeatured)
const REST = TESTIMONIALS.filter((t) => !t.isFeatured)

// Split the remaining testimonials into two marquee rows
const ROW_1 = REST.filter((_, i) => i % 2 === 0)
const ROW_2 = REST.filter((_, i) => i % 2 === 1)

export function Testimonials() {
  return (
    <section>
      <Separator />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight">
           Helping brands communicate through design.
        </h2>

        {/* Pinned/featured row — exactly two full cards, always visible */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURED.map((item) => (
            <TestimonialCard key={item.url} item={item} />
          ))}
        </div>

        {/* Marquee rows underneath, opposite directions, fade-clipped edges */}
        <div className="mt-4 flex flex-col gap-4">
          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent pauseOnHover speed={30}>
              {ROW_1.map((item) => (
                <MarqueeItem key={item.url} className="w-xs">
                  <TestimonialCard item={item} />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>

          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent pauseOnHover direction="right" speed={30}>
              {ROW_2.map((item) => (
                <MarqueeItem key={item.url} className="w-xs">
                  <TestimonialCard item={item} />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/testimonials"
            className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            All builders
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>
      </div>

      <Separator />
    </section>
  )
}

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS)[number] }) {
  return (
    <Testimonial className="relative h-full rounded-xl border border-border bg-background p-0 transition-colors hover:bg-accent">
      <TestimonialQuote className="font-serif text-lg/snug">
        <p className="line-clamp-2">{item.quote}</p>
      </TestimonialQuote>

      <TestimonialAuthor>
        <TestimonialAvatar>
          <TestimonialAvatarImg src={item.authorAvatar} alt={item.authorName} />
          <TestimonialAvatarRing />
        </TestimonialAvatar>

        <TestimonialAuthorName>
          <a href={item.url} target="_blank" rel="noopener">
            <span className="absolute inset-0" aria-hidden />
            {item.authorName}
          </a>
        </TestimonialAuthorName>
        <TestimonialAuthorTagline>{item.authorTagline}</TestimonialAuthorTagline>
      </TestimonialAuthor>
    </Testimonial>
  )
}