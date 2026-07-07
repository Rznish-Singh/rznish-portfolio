import {
  AcmeLogo,
  HalcyonLogo,
  NorthwindLogo,
  OrbitLogo,
  VercelLogo,
} from "./logos"
import type { Sponsor } from "./types"

export const SPONSORS: Sponsor[] = [
  { name: "Vercel", url: "https://vercel.com", logo: VercelLogo, tier: "platinum" },
  { name: "Acme Co", url: "https://acme.example.com", logo: AcmeLogo, tier: "gold" },
  { name: "Northwind", url: "https://northwind.example.com", logo: NorthwindLogo, tier: "gold" },
  { name: "Orbit", url: "https://orbit.example.com", logo: OrbitLogo, tier: "silver" },
  { name: "Halcyon", url: "https://halcyon.example.com", logo: HalcyonLogo, tier: "supporter" },
]