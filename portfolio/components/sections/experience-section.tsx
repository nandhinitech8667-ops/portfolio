"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ScrollSection } from "@/components/scroll-section"

const certifications = [
  { title: "Python Certification", issuer: "HackerRank & SkillUp" },
  { title: "Web Development Training", issuer: "TechnoHack" },
  { title: "Machine Learning Workshop", issuer: "NoviTech" },
]

function SkillBar({ label, level, delay }: { label: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-xs text-foreground">{label}</span>
        <span className="font-mono text-[10px] text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.4, 0.25, 1] }}
          style={{
            background: "linear-gradient(90deg, oklch(0.65 0.18 145), oklch(0.8 0.15 75))",
          }}
        />
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <ScrollSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-primary tracking-widest">
              02
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experience
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-20">
            {"// real_world_exposure"}
          </p>
        </ScrollSection>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Internship */}
          <ScrollSection direction="left">
            <div className="relative p-6 md:p-8 rounded-lg border border-border bg-card/30 backdrop-blur-sm">
              {/* Status indicator */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-terminal animate-pulse" />
                <span className="font-mono text-[10px] text-terminal uppercase tracking-widest">
                  Internship
                </span>
              </div>

              <h3
                className="text-xl md:text-2xl font-semibold text-foreground mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Data Analytics Intern
              </h3>
              <p className="text-muted-foreground mb-1">
                Gateway Software Solutions
              </p>
              <span className="inline-block font-mono text-xs text-muted-foreground px-3 py-1 border border-border rounded-full mb-6">
                June 5, 2024 - July 5, 2024
              </span>

              <ul className="flex flex-col gap-3">
                {[
                  "Analyzed real-world datasets and generated reports",
                  "Created data visualizations for business insights",
                  "Gained practical experience in analytics tools and techniques",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-mono text-xs mt-1">{">"}</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                {["Data Analysis", "Visualization", "Reporting", "Analytics"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono text-primary bg-primary/5 border border-primary/10 rounded"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollSection>

          {/* Right: Certifications + Skills */}
          <div className="flex flex-col gap-8">
            <ScrollSection direction="right">
              <div className="p-6 md:p-8 rounded-lg border border-border bg-card/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                    Certifications
                  </span>
                </div>

                <div className="flex flex-col gap-0">
                  {certifications.map((cert, i) => (
                    <div
                      key={cert.title}
                      className="flex items-start gap-4 py-4 border-b border-border last:border-b-0 last:pb-0 first:pt-0"
                    >
                      <span className="font-mono text-xs text-muted-foreground mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-foreground font-medium text-sm">
                          {cert.title}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollSection>

            <ScrollSection direction="right" delay={0.15}>
              <div className="p-6 md:p-8 rounded-lg border border-border bg-card/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                    Skill Proficiency
                  </span>
                </div>

                <SkillBar label="React.js" level={85} delay={0} />
                <SkillBar label="Python" level={80} delay={0.1} />
                <SkillBar label="JavaScript" level={78} delay={0.2} />
                <SkillBar label="MySQL" level={70} delay={0.3} />
                <SkillBar label="Data Analysis" level={65} delay={0.4} />
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>
    </section>
  )
}
