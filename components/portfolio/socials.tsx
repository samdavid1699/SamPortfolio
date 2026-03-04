"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Code2 } from "lucide-react"

const links = [
  { icon: Github, href: "https://github.com/samdavid1699", label: "GitHub", color: "hover:text-lavender" },
  { icon: Linkedin, href: "www.linkedin.com/in/samdavid1699", label: "LinkedIn", color: "hover:text-orchid" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-pink" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-gold" },
  { icon: Code2, href: "https://codepen.io", label: "CodePen", color: "hover:text-mint" },
]

export function Socials() {
  return (
    <>
      {/* Left side -- social icons */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed bottom-0 left-6 z-30 hidden flex-col items-center gap-5 after:block after:h-24 after:w-px after:bg-gradient-to-b after:from-lavender/40 after:to-transparent md:flex lg:left-10"
      >
        {links.map(({ icon: Icon, href, label, color }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + i * 0.1 }}
            whileHover={{ y: -3, scale: 1.15 }}
            className={`text-muted-foreground transition-colors ${color}`}
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Right side -- email */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed bottom-0 right-6 z-30 hidden flex-col items-center gap-5 after:block after:h-24 after:w-px after:bg-gradient-to-b after:from-orchid/40 after:to-transparent md:flex lg:right-10"
      >
        <motion.a
          href="mailto:hello@example.com"
          whileHover={{ y: -3 }}
          className="font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-lavender"
          style={{ writingMode: "vertical-rl" }}
        >
          shamdavid2345@gmail
        </motion.a>
      </motion.div>
    </>
  )
}
