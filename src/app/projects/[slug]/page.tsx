import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { SITE_URL, SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { BLOG_POSTS } from "@/data/user"
import { postToMarkdown } from "@/lib/markdown"
import { CopyPageMenu } from "@/components/copy-page-menu"
import { Separator } from "@/components/separator"
import { ShareMenu } from "@/components/share-menu"
import { TOCMinimap } from "@/components/toc-minimap"

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const index = BLOG_POSTS.findIndex((p) => p.slug === slug)
  const post = BLOG_POSTS[index]

  if (!post) notFound()

  const previous = index > 0 ? BLOG_POSTS[index - 1] : null
  const next = index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null

  const tocItems = post.sections.map((s) => ({
    title: s.title,
    url: `#${s.id}`,
    depth: s.depth,
  }))

  const postUrl = `${SITE_URL}/projects/${post.slug}`
  const behanceUrl = "https://www.behance.net/rznish" // swap in your real Behance profile/project URL
  const markdown = postToMarkdown(post)

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div className="mb-6 flex items-center justify-between gap-2">
        <Link
          href="/projects"
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" />
          Projects
        </Link>

        <div className="flex items-center gap-2">
          <CopyPageMenu markdown={markdown} url={postUrl} behanceUrl={behanceUrl} />
          <ShareMenu title={post.title} url={postUrl} />

          <Link
            aria-label="Previous post"
            href={previous ? `/projects/${previous.slug}` : "#"}
            aria-disabled={!previous}
            className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground aria-disabled:pointer-events-none aria-disabled:opacity-40"
          >
            <ChevronLeftIcon className="size-4" />
          </Link>
          <Link
            aria-label="Next post"
            href={next ? `/projects/${next.slug}` : "#"}
            aria-disabled={!next}
            className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground aria-disabled:pointer-events-none aria-disabled:opacity-40"
          >
            <ChevronRightIcon className="size-4" />
          </Link>
        </div>
      </div>

      <div className="flex gap-6">
        <article className="min-w-0 flex-1">
          <h1 className="text-3xl font-semibold tracking-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString()}
          </p>

          <p className="mt-6 text-base leading-relaxed text-foreground/90">
            {post.description}
          </p>

          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-8 scroll-mt-20">
              <h2 className="text-lg font-medium">{section.title}</h2>
              <p className="mt-2 leading-relaxed text-foreground/90">
                {section.content}
              </p>

              {section.image && (
                <img
                  src={section.image}
                  alt={section.imageAlt ?? section.title}
                  className="mt-4 w-full rounded-xl border border-border"
                />
              )}

              {section.video && (
                <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-border">
                  <iframe
                    src={section.video}
                    title={section.title}
                    className="size-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {section.links && section.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.links.map((link) => (
                    <a>
                    
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
                    
                      {link.label}
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>

        <aside className="hidden shrink-0 lg:block">
          <div className="sticky top-20">
            <TOCMinimap items={tocItems} />
          </div>
        </aside>
      </div>

      <Separator className="mt-10" />
    </div>
  )
}