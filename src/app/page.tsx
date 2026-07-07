import type { Metadata } from "next"
import {
 
  Blog,
  
  Education,
  Experiences,
  Overview,
 
  ProfileHeader,
  SocialLinks,
  TechStack,
} from "@/components/sections"
import { Testimonials } from "@/components/testimonials-section"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <ProfileHeader />
      <Overview />
      <SocialLinks />
       <Testimonials />

      <Blog />
      <TechStack />
      <Experiences />
      <Education />
     
    </div>
  )
}
