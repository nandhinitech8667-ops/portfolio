"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const percent = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="h-[2px] origin-left"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg, oklch(0.65 0.18 145), oklch(0.8 0.15 75))",
        }}
        aria-hidden="true"
      />
      <motion.div className="absolute top-1 right-3 font-mono text-[10px] text-primary/50">
        <motion.span>{percent}</motion.span>
      </motion.div>
    </div>
  )
}
