import Link from "next/link"
import type { BlogPost } from "@/data/user"

export function HomeBlogPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="group/post relative flex h-full flex-col overflow-hidden rounded-xl border border-border transition-colors hover:bg-accent">
      <div className="relative overflow-hidden">
        {post.image ? (
          <img
            className="aspect-[1200/630] w-full object-cover grayscale transition-[filter] duration-300 ease-out group-hover/post:grayscale-0"
            src={post.image}
            alt={post.title}
          />
        ) : (
          <GeneratedThumbnail title={post.title} />
        )}
      </div>

      <div className="flex flex-col gap-1 p-4">
        <h3 className="text-base leading-snug font-medium text-balance">
          <Link href={`/projects/${post.slug}`}>
            <span className="absolute inset-0" aria-hidden />
            {post.title}
          </Link>
          {post.isNew && (
            <span className="ml-2 inline-block size-2 -translate-y-px rounded-full bg-blue-500" aria-hidden />
          )}
        </h3>

        <time
          dateTime={new Date(post.date).toISOString()}
          className="text-sm text-muted-foreground"
        >
          {formatDate(post.date)}
        </time>
      </div>
    </div>
  )
}

function GeneratedThumbnail({ title }: { title: string }) {
  return (
    <div className="relative flex aspect-[1200/630] w-full items-center justify-center overflow-hidden bg-[#0a0a0a] p-6 grayscale transition-[filter] duration-300 ease-out group-hover/post:grayscale-0">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 10px)",
        }}
        aria-hidden
      />
      <p className="relative line-clamp-3 text-center font-mono text-sm font-medium tracking-wide text-white/90 uppercase">
        {title}
      </p>
    </div>
  )
}

function formatDate(iso: string) {
  const d = new Date(iso)
  const dd = String(d.getDate()).padStart(2, "0")
  const mm = String(d.getMonth() + 1).padStart(2, "0")
  return `${dd}.${mm}.${d.getFullYear()}`
}