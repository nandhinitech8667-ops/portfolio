"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  { id: "education", label: "01 Education" },
  { id: "experience", label: "02 Experience" },
  { id: "projects", label: "03 Projects" },
  { id: "contact", label: "04 Contact" },
]

export function JourneyTimeline() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px" }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1"
      aria-label="Journey timeline"
    >
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-3 py-2"
            aria-current={isActive ? "true" : undefined}
          >
            <div className="relative">
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-primary scale-150"
                    : "bg-border group-hover:bg-muted-foreground"
                }`}
              />
            </div>

            <AnimatePresence>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="font-mono text-[10px] text-primary whitespace-nowrap tracking-wider"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        )
      })}
    </nav>
  )
}
