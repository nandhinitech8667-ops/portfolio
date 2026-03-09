"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.8 0.15 75) 1px, transparent 1px), linear-gradient(90deg, oklch(0.8 0.15 75) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Warm amber glow top-left */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          y: y1,
          background:
            "radial-gradient(circle, oklch(0.8 0.15 75) 0%, transparent 70%)",
        }}
      />

      {/* Cool deep glow bottom-right */}
      <motion.div
        className="absolute top-[50%] -right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          y: y2,
          background:
            "radial-gradient(circle, oklch(0.65 0.18 145) 0%, transparent 70%)",
        }}
      />

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]">
        <div
          className="w-full h-[2px] bg-primary"
          style={{ animation: "scanline 8s linear infinite" }}
        />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
