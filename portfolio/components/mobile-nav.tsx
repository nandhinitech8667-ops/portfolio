"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#education", label: "01 Education" },
  { href: "#experience", label: "02 Experience" },
  { href: "#projects", label: "03 Projects" },
  { href: "#contact", label: "04 Contact" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded border border-border bg-card/80 backdrop-blur-md flex items-center justify-center text-foreground"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Menu className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute top-14 right-0 w-52 p-1.5 rounded border border-border bg-card/90 backdrop-blur-md shadow-xl shadow-background/80"
          >
            <nav aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="block px-4 py-2.5 font-mono text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
