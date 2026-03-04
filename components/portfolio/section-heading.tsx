"use client"

import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface SectionHeadingProps {
  number: string
  title: string
  color?: string
}

export function SectionHeading({ number, title, color = "text-lavender" }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12 flex items-center gap-3 text-2xl font-bold text-foreground md:text-3xl"
    >
      <span className={`font-mono text-lg md:text-xl ${color}`}>{number}</span>
      {title}
      <span className="ml-4 hidden h-px flex-1 bg-gradient-to-r from-lavender/30 via-orchid/20 to-transparent sm:block" />
    </motion.h2>
  )
}
