"use client"

import { motion } from "framer-motion"
import { TypingAnimation } from "@/components/typing-animation"

const commandLines = [
  { prefix: "visitor@portfolio", cmd: "whoami", delay: 0.3 },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12"
        >
          <div className="rounded-lg border border-border overflow-hidden bg-card/50 backdrop-blur-md">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/50">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <div className="w-3 h-3 rounded-full bg-terminal/40" />
              <span className="ml-3 text-[11px] font-mono text-muted-foreground tracking-wider">
                nandhini@dev ~ portfolio
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-5 md:p-6 font-mono text-sm leading-relaxed">
              {commandLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: line.delay }}
                  className="mb-1"
                >
                  <span className="text-terminal">{line.prefix}</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-primary">~</span>
                  <span className="text-muted-foreground">$ </span>
                  <span className="text-foreground">{line.cmd}</span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-3 text-muted-foreground"
              >
                {">"} Nandhini Sakthivel
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-muted-foreground"
              >
                {">"} Role: Frontend & Full-Stack Developer
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-muted-foreground"
              >
                {">"} Status: Ready to build
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-3"
              >
                <span className="text-terminal">visitor@portfolio</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">~</span>
                <span className="text-muted-foreground">$ </span>
                <span
                  className="inline-block w-[7px] h-[14px] bg-primary ml-0.5 align-baseline translate-y-[2px]"
                  style={{ animation: "terminal-blink 1s step-end infinite" }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Name with glitch */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nandhini
            <br />
            <span className="relative inline-block">
              <span className="text-primary">Sakthivel</span>
              {/* Glitch layers */}
              <span
                className="absolute inset-0 text-terminal opacity-0 hover:opacity-100"
                style={{ animation: "glitch-1 3s ease-in-out infinite" }}
                aria-hidden="true"
              >
                Sakthivel
              </span>
              <span
                className="absolute inset-0 text-destructive opacity-0 hover:opacity-100"
                style={{ animation: "glitch-2 3s ease-in-out infinite" }}
                aria-hidden="true"
              >
                Sakthivel
              </span>
            </span>
          </motion.h1>
        </div>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl font-mono mb-8"
        >
          <span className="text-muted-foreground">{"// "}</span>
          <TypingAnimation
            words={[
              "Frontend Developer",
              "Full-Stack Developer",
              "React Enthusiast",
              "Problem Solver",
            ]}
            className="text-primary"
          />
        </motion.div>

        {/* Objective as a comment block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-mono">
            <span className="text-terminal">{"/**"}</span>
            <br />
            <span className="text-muted-foreground ml-2">
              {"  * "}Motivated Frontend and Full-Stack Developer seeking an
            </span>
            <br />
            <span className="text-muted-foreground ml-2">
              {"  * "}entry-level opportunity to apply strong skills in React,
            </span>
            <br />
            <span className="text-muted-foreground ml-2">
              {"  * "}JavaScript, Python, and web technologies to build
            </span>
            <br />
            <span className="text-muted-foreground ml-2">
              {"  * "}responsive and scalable applications.
            </span>
            <br />
            <span className="text-terminal">{" */"}</span>
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium rounded transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            <span>{">"}</span>
            <span>view_projects</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">_</span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm font-medium rounded transition-all hover:border-primary/50 hover:text-primary"
          >
            <span>{">"}</span>
            <span>contact_me</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">_</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
              scroll
            </span>
            <div className="w-px h-8 bg-border" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
