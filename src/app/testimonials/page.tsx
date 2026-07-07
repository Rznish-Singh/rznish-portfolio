import type { Metadata } from "next"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
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

export const metadata: Metadata = {
  title: "Testimonials",
  alternates: { canonical: "/testimonials" },
}

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <PageHeading>
        <PageHeadingTagline>Testimonials</PageHeadingTagline>
        <PageHeadingTitle>
          Helping brands communicate through design.
        </PageHeadingTitle>
      </PageHeading>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TESTIMONIALS.map((item) => (
          <li key={item.url}>
            <Testimonial className="relative rounded-xl border border-border transition-colors hover:bg-accent">
              <TestimonialQuote>
                <p>{item.quote}</p>
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
          </li>
        ))}
      </ul>
    </div>
  )
}