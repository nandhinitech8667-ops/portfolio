"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ScrollSection } from "@/components/scroll-section"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Restaurant Management Web App",
    description:
      "Developed a modern responsive restaurant website using React. Implemented dynamic menu listing, cart functionality, and order summary. Designed mobile-first UI for better customer experience. Improved performance and UI responsiveness using reusable components.",
    tags: ["React.js", "CSS", "JavaScript"],
    githubUrl: "#",
    num: "01",
    accent: "oklch(0.8 0.15 75)",
  },
  {
    title: "Single-Approval Platform for Entrepreneurs",
    description:
      "Developed a Single Approval Platform to streamline government approvals for women entrepreneurs, integrating all business approval processes into one unified system. Leveraged Python, MySQL, and AI/ML (OCR, image classification) to automate document verification and enable real-time tracking through workflow automation.",
    tags: ["Python", "MySQL", "AI/ML", "OCR"],
    githubUrl: "#",
    num: "02",
    accent: "oklch(0.65 0.18 145)",
  },
  {
    title: "Textile Sale Forecasting",
    description:
      "Developed a machine learning model to predict textile sales trends. Used Python, Pandas, NumPy, and Scikit-Learn for data analysis. Optimized inventory management to reduced wastage. Automated reports and alerts for real-time decision-making.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    githubUrl: "#",
    num: "03",
    accent: "oklch(0.8 0.15 75)",
  },
]

function ProjectCard({
  project,
  index,
  large,
}: {
  project: (typeof projects)[0]
  index: number
  large?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`group relative rounded-lg border border-border bg-card/30 backdrop-blur-sm overflow-hidden transition-all hover:border-primary/30 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <span
              className="text-3xl md:text-4xl font-bold text-border group-hover:text-primary/20 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {project.num}
            </span>
          </div>
          <a
            href={project.githubUrl}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all group-hover:rotate-45"
            aria-label={`View ${project.title} on GitHub`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <h3
          className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-mono text-foreground/70 bg-secondary rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <ScrollSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-primary tracking-widest">
              03
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Projects
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-20">
            {"// things_i_have_built"}
          </p>
        </ScrollSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProjectCard project={projects[0]} index={0} large />
          <ProjectCard project={projects[1]} index={1} />
          <ProjectCard project={projects[2]} index={2} />
        </div>

        {/* Technical Skills -- terminal style */}
        <ScrollSection delay={0.2}>
          <div className="mt-16 rounded-lg border border-border bg-card/30 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-2.5 border-b border-border bg-secondary/30">
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                skills.config
              </span>
            </div>
            <div className="p-5 md:p-8 font-mono text-sm">
              <div className="text-muted-foreground mb-4">
                <span className="text-terminal">const</span>{" "}
                <span className="text-foreground">skills</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-primary">{"{"}</span>
              </div>

              {[
                { key: "languages", values: ["Java", "Python"] },
                { key: "web", values: ["HTML", "CSS", "React.js"] },
                { key: "database", values: ["MySQL", "Data Analysis", "Data Visualization"] },
                { key: "tools", values: ["Git", "GitHub", "VS Code"] },
              ].map((group) => (
                <div key={group.key} className="ml-4 md:ml-8 mb-3 last:mb-0">
                  <span className="text-primary">{group.key}</span>
                  <span className="text-muted-foreground">: [</span>
                  {group.values.map((v, i) => (
                    <span key={v}>
                      <span className="text-foreground">{`"${v}"`}</span>
                      {i < group.values.length - 1 && (
                        <span className="text-muted-foreground">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-muted-foreground">],</span>
                </div>
              ))}

              <div className="text-primary mt-4">{"}"}</div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  )
}
