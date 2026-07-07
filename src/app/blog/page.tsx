import type { Metadata } from "next"
import { BLOG_POSTS } from "@/data/user"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { BlogList } from "@/components/blog-list"
import { Separator } from "@/components/separator"

const title = "Blog"
const description = "Writing about code, design, and everything in between."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto max-w-3xl px-4">
        <PageHeading className="py-8">
          <PageHeadingTagline>Projects</PageHeadingTagline>
          <PageHeadingTitle>
             My Creative Work
          </PageHeadingTitle>
        </PageHeading>

        <Separator className="h-4" />

        <BlogList posts={BLOG_POSTS} />
      </div>
    </div>
  )
}