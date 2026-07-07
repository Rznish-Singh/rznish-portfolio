type PostSection = {
  title: string
  depth: number
  content: string
}

type Post = {
  title: string
  date: string
  sections: PostSection[]
}

export function postToMarkdown(post: Post): string {
  const lines: string[] = [`# ${post.title}`, "", `_${post.date}_`, ""]

  for (const section of post.sections) {
    const hashes = "#".repeat(Math.min(Math.max(section.depth, 2), 6))
    lines.push(`${hashes} ${section.title}`, "", section.content, "")
  }

  return lines.join("\n").trim()
}