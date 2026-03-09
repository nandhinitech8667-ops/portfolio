"use client"

import { ScrollSection } from "@/components/scroll-section"

const education = [
  {
    degree: "Bachelor of Engineering - Computer Science Engineering",
    school: "Vivekanandha College of Engineering for Women",
    period: "2021 - 2025",
    description:
      "Studied core computer science subjects including data structures, algorithms, database management, and software engineering. Built multiple full-stack and ML projects during the program.",
    highlights: ["React.js", "Python", "Machine Learning", "MySQL"],
    num: "01",
  },
  
]

export function EducationSection() {
  return (
    <section id="education" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <ScrollSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-primary tracking-widest">
              01
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Education
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-20">
            {"// where_the_journey_began"}
          </p>
        </ScrollSection>

        <div className="flex flex-col gap-0">
          {education.map((item, index) => (
            <ScrollSection key={item.degree} delay={index * 0.12}>
              <div className="group relative grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 py-8 md:py-12 border-b border-border last:border-b-0">
                {/* Number */}
                <div className="hidden md:block">
                  <span
                    className="text-5xl font-bold text-border group-hover:text-primary/30 transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.num}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {item.school}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap px-3 py-1 border border-border rounded-full">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 text-xs font-mono text-primary bg-primary/5 border border-primary/10 rounded"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  )
}
