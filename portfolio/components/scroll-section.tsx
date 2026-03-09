"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right"
}

export function ScrollSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directionOffset = {
    up: { y: 60, x: 0 },
    left: { y: 0, x: -60 },
    right: { y: 0, x: 60 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: directionOffset[direction].y,
        x: directionOffset[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: directionOffset[direction].y,
              x: directionOffset[direction].x,
            }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
