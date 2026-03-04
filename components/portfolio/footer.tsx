"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Code2 } from "lucide-react"

const links = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-lavender" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-orchid" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-pink" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-gold" },
  { icon: Code2, href: "https://codepen.io", label: "CodePen", color: "hover:text-mint" },
]

export function Footer() {
  return (
    <footer className="relative px-6 py-8 text-center">
      <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-lavender/30 to-transparent" />
      {/* Mobile social links */}
      <div className="mt-6 mb-4 flex justify-center gap-5 md:hidden">
        {links.map(({ icon: Icon, href, label, color }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2 }}
            className={`text-muted-foreground transition-colors ${color}`}
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        ))}
      </div>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-muted-foreground transition-colors"
      >
        Designed & Built by <span className="text-gradient">Sam David</span>
      </a>
    </footer>
  )
}
