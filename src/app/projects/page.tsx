import type { Metadata } from "next"
import { BLOG_POSTS } from "@/data/user"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { BlogList } from "@/components/blog-list"
import { Separator } from "@/components/separator"

const title = "Projects - My Creative Work"
const description = "Explore my creative projects, showcasing my skills and expertise in design, development, and innovation. From web applications to digital art, discover a diverse portfolio of work that reflects my passion for creativity and problem-solving."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
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