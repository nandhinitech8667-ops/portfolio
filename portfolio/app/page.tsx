"use client"

import { ScrollProgress } from "../components/scroll-progress"
import { ParallaxBackground } from "../components/parallax-background"
import { FloatingIcons } from "../components/floating-icons"
import { JourneyTimeline } from "../components/journey-timeline"
import { MobileNav } from "../components/mobile-nav"
import { HeroSection } from "../components/sections/hero-section"
import { EducationSection } from "../components/sections/education-section"
import { ExperienceSection } from "../components/sections/experience-section"
import { ProjectsSection } from "../components/sections/projects-section"
import { ContactSection } from "../components/sections/contact-section"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ParallaxBackground />
      <FloatingIcons />
      <JourneyTimeline />
      <MobileNav />

      <main className="relative">
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  )
}
