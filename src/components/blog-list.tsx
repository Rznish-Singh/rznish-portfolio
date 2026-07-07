"use client"

import { useMemo, useState } from "react"
import type { BlogPost } from "@/data/user"
import { PostList } from "@/components/post-list"
import { PostSearchInput } from "@/components/post-search-input"

function normalize(text: string) {
  return text.toLowerCase().replaceAll(" ", "")
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    if (!query) return posts
    const q = normalize(query)
    return posts.filter(
      (post) =>
        normalize(post.title).includes(q) ||
        normalize(post.description).includes(q)
    )
  }, [posts, query])

  return (
    <>
      <div className="screen-line-top screen-line-bottom p-2">
        <PostSearchInput value={query} onChange={setQuery} />
      </div>

      <PostList posts={filtered} />
    </>
  )
}