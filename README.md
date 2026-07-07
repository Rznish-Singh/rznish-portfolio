# rznish

A personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## What's included
- Home page with profile, social links, blog, stack, experience, education, projects, awards, certifications, bookmarks
- Simple `/blog` listing and post pages
- Command menu (press `Cmd/Ctrl + K` or click **Search…**) for quick navigation and theme switching
- Light/dark/system theme toggle
- Responsive header + mobile bottom nav
- Custom 404 page

## What was removed from the original template
- Components showcase pages
- Blocks showcase pages
- GitHub contributions graph
- Footer "crafted with care" spinning text animation
- Header brand mark/logo (replaced with a plain "rznish" wordmark)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit your content

All personal info lives in `src/data/user.ts` and site-wide config (nav links, site name, social/source links) in `src/config/site.ts`.
