import Link from "next/link"
import type { BlogPost } from "@/data/user"

export function PostItem({ post }: { post: BlogPost }) {
  return (
    <div className="group/post relative flex h-full flex-col gap-2 p-2 transition-colors hover:bg-accent">
      <div className="relative overflow-hidden rounded-xl">
        {post.image ? (
          <img
            className="aspect-[1200/630] w-full rounded-xl object-cover grayscale transition-[filter] duration-300 ease-out group-hover/post:grayscale-0"
            src={post.image}
            alt={post.title}
          />
        ) : (
          <GeneratedThumbnail title={post.title} />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/15 dark:ring-white/15" />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <h2 className="text-lg leading-snug font-medium text-balance">
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0" aria-hidden />
            {post.title}
          </Link>
          {post.isNew && (
            <span className="ml-2 inline-block size-2 -translate-y-px rounded-full bg-blue-500" aria-hidden />
          )}
        </h2>

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
    <div className="flex aspect-[1200/630] w-full items-center justify-center rounded-xl bg-neutral-950 p-6 grayscale transition-[filter] duration-300 ease-out group-hover/post:grayscale-0">
      <p className="line-clamp-3 text-center font-mono text-sm font-medium text-white/80 uppercase tracking-wide">
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