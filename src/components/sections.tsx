import Link from "next/link"
import {
  AWARDS,
 
  BOOKMARKS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  PROJECTS,
  SOCIAL_LINKS,
  TECH_STACK,
  USER,
} from "@/data/user"
import { ArrowRightIcon } from "lucide-react"
import { BLOG_POSTS } from "@/data/user"
import { CopyLinkIcon } from "@/components/copy-link-icon"
import { HomeBlogPostCard } from "@/components/home-blog-post-card"
import { TechStackSection } from "@/components/tech-stack"

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-border py-8">
      <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function ProfileHeader() {
  return (
    <div className="pt-10 pb-6">
      <h1 className="text-2xl font-semibold">{USER.name}</h1>
      <p className="mt-1 text-muted-foreground">{USER.headline}</p>
    </div>
  )
}

export function Overview() {
  return (
    <div className="pb-6">
      <p className="text-sm leading-relaxed text-foreground/90">{USER.bio}</p>
    </div>
  )
}

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 pb-8">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener"
          className="link-underline text-sm text-muted-foreground hover:text-foreground"
        >
          {link.title}
        </a>
      ))}
    </div>
  )
}
export function TechStack() {
  return (
    <Section title="Stack">
      <TechStackSection />
    </Section>
  )
}

export function Experiences() {
  return (
    <Section title="Experience">
      <ul className="flex flex-col gap-6">
        {EXPERIENCES.map((exp) => (
          <li key={exp.role + exp.company}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium">{exp.role}</p>
              <p className="shrink-0 text-xs text-muted-foreground">
                {exp.period}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{exp.company}</p>
            <p className="mt-1 text-sm">{exp.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Education() {
  return (
    <Section title="Education">
      <ul className="flex flex-col gap-4">
        {EDUCATION.map((edu) => (
          <li key={edu.school}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium">{edu.school}</p>
              <p className="shrink-0 text-xs text-muted-foreground">
                {edu.period}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{edu.degree}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// export function Projects() {
//   return (
//     <Section title="Projects">
//       <ul className="flex flex-col gap-4">
//         {PROJECTS.map((project) => (
//           <li key={project.title}>
//             <a
//               href={project.href}
//               target="_blank"
//               rel="noopener"
//               className="link-underline font-medium"
//             >
//               {project.title}
//             </a>
//             <p className="text-sm text-muted-foreground">
//               {project.description}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </Section>
//   )
// }

// export function Awards() {
//   if (AWARDS.length === 0) return null
//   return (
//     <Section title="Awards">
//       <ul className="flex flex-col gap-2">
//         {AWARDS.map((a) => (
//           <li key={a.title} className="flex justify-between text-sm">
//             <span>{a.title}</span>
//             <span className="text-muted-foreground">{a.year}</span>
//           </li>
//         ))}
//       </ul>
//     </Section>
//   )
// }

// export function Certifications() {
//   if (CERTIFICATIONS.length === 0) return null
//   return (
//     <Section title="Certifications">
//       <ul className="flex flex-col gap-2">
//         {CERTIFICATIONS.map((c) => (
//           <li key={c.title} className="flex justify-between text-sm">
//             <span>{c.title}</span>
//             <span className="text-muted-foreground">{c.issuer}</span>
//           </li>
//         ))}
//       </ul>
//     </Section>
//   )
// }

// export function Bookmarks() {
//   return (
//     <Section title="Bookmarks">
//       <ul className="flex flex-col gap-2">
//         {BOOKMARKS.map((b) => (
//           <li key={b.href}>
//             <a
//               href={b.href}
//               target="_blank"
//               rel="noopener"
//               className="link-underline text-sm"
//             >
//               {b.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </Section>
//   )
// }

export function Blog() {
  const recentPosts = BLOG_POSTS.slice(0, 2)

  return (
    <section className="border-t border-border py-8">
      <div className="mb-4 flex items-center gap-1.5">
        <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Projects
        </h2>
        <span className="text-xs text-muted-foreground">
          ({BLOG_POSTS.length})
        </span>
        <CopyLinkIcon href="#blog" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {recentPosts.map((post) => (
          <HomeBlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/blog"
          className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
        >
          All posts
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>
    </section>
  )
}
