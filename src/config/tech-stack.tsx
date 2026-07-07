import {
  SiClaude,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  
  SiPostman,
  SiShadcnui,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si"
import {
  BoxesIcon,
  BugIcon,
  ClipboardCheckIcon,
  CpuIcon,
  DatabaseIcon,
  FilmIcon,
  FlaskConicalIcon,
  ImageIcon,
  LayersIcon,
  LayoutTemplateIcon,
  ListChecksIcon,
  ListTreeIcon,
  PencilRulerIcon,
  RefreshCwIcon,
  RouteIcon,
  SmartphoneIcon,
  TableIcon,
  WifiIcon,
  WorkflowIcon,
} from "lucide-react"

export interface TechStackItem {
  key: string
  title: string
  /** Omit for concepts/skills that don't have a single canonical homepage. */
  href?: string
  /** Brand logo if one exists; otherwise a generic icon representing the concept. */
  icon: React.ReactNode
  categories: string[]
}

// Edit, add, or remove entries here. `categories` controls which group(s)
// an item shows up under — an item can belong to more than one.
export const TECH_STACK: TechStackItem[] = [
  // Programming Languages

  // Frontend
 
  // Workflow & AI
  { categories: ["Workflow & AI"], href: "https://claude.ai", icon: <SiClaude />, key: "claude", title: "Claude" },
  { categories: ["Workflow & AI"], href: "https://gemini.google.com", icon: <SiGooglegemini />, key: "gemini", title: "Gemini" },
  { categories: ["Workflow & AI"], href: "https://git-scm.com", icon: <SiGit />, key: "git", title: "Git" },
  { categories: ["Workflow & AI"], href: "https://github.com", icon: <SiGithub />, key: "github", title: "GitHub" },
  { categories: ["Workflow & AI"], href: "https://www.docker.com", icon: <SiDocker />, key: "docker", title: "Docker" },
  { categories: ["Workflow & AI"], href: "https://vercel.com", icon: <SiVercel />, key: "vercel", title: "Vercel" },

  // Testing & QA
 
  // UI/UX & Design
// UI/UX & Design
  { categories: ["UI/UX & Design"], href: "https://www.figma.com", icon: <SiFigma />, key: "figma", title: "Figma" },
   { categories: ["UI/UX & Design"], icon: <LayoutTemplateIcon />, key: "wireframing", title: "Wireframing" },
  { categories: ["UI/UX & Design"], icon: <LayersIcon />, key: "prototyping", title: "Prototyping" },
  { categories: ["UI/UX & Design"], icon: <SmartphoneIcon />, key: "responsive-design", title: "Responsive Design" },

  // Graphic Design
  // Graphic Design
  { categories: ["Graphic Design"], icon: <PencilRulerIcon />, key: "graphic-design", title: "Graphic Design" },
  { categories: ["Graphic Design"], icon: <ImageIcon />, key: "photo-editing", title: "Photo Editing" },

  // Video Editing
  { categories: ["Video Editing"], icon: <FilmIcon />, key: "video-editing", title: "Video Editing" },

  // Video Editing
   // Computer Science Fundamentals
 ]