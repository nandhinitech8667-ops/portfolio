"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypingAnimationProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export function TypingAnimation({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const currentWord = words[currentWordIndex]

  const handleTyping = useCallback(() => {
    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1))
      } else {
        setTimeout(() => setIsDeleting(true), pauseDuration)
        return
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1))
      } else {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }
  }, [displayText, isDeleting, currentWord, currentWordIndex, words.length, pauseDuration])

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    )
    return () => clearTimeout(timeout)
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed])

  return (
    <span className={className}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={displayText}
          className="inline"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-0.5 align-baseline translate-y-[0.15em]"
      />
    </span>
  )
}
