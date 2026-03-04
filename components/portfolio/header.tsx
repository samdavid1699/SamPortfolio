"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const ACCENT_COLORS = ["text-lavender", "text-orchid", "text-pink", "text-gold"]
const HOVER_BG = ["bg-lavender/10", "bg-orchid/10", "bg-pink/10", "bg-gold/10"]
const HOVER_BORDER = [
  "hover:border-lavender/40",
  "hover:border-orchid/40",
  "hover:border-pink/40",
  "hover:border-gold/40",
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<string>("")

  const cursorX = useMotionValue(0)
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl shadow-lg shadow-lavender/5 border-b border-lavender/10"
          : "bg-transparent"
      }`}
    >
      {/* Animated gradient line at the top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="h-full w-1/3"
          style={{
            x: smoothX,
            background: "linear-gradient(90deg, transparent, #b48eff, #e879f9, #fb7185, transparent)",
          }}
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo with animated border */}
        <motion.a
          href="#"
          className="relative font-mono text-lg font-bold"
          aria-label="Home"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <motion.span
            className="relative z-10 inline-block rounded-lg border border-transparent px-3 py-1"
            whileHover={{
              borderColor: "rgba(180, 142, 255, 0.4)",
              backgroundColor: "rgba(180, 142, 255, 0.08)",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-gradient">{"Full Stack Software Engineer"}</span>
          </motion.span>
          {/* Spinning ring behind the logo on hover */}
          <motion.div
            className="pointer-events-none absolute -inset-1 rounded-xl border border-lavender/0"
            whileHover={{ borderColor: "rgba(180, 142, 255, 0.2)", rotate: 90 }}
            transition={{ duration: 0.6 }}
          />
        </motion.a>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                <a
                  href={link.href}
                  className={`relative flex items-center gap-1.5 rounded-lg border border-transparent px-3.5 py-2 text-sm transition-all duration-300 ${HOVER_BORDER[i]} ${
                    isActive
                      ? `${ACCENT_COLORS[i]} ${HOVER_BG[i]} border-current/20`
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Hover glow backdrop */}
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.div
                        className={`absolute inset-0 rounded-lg ${HOVER_BG[i]}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        layoutId="nav-hover"
                      />
                    )}
                  </AnimatePresence>

                  <span className={`relative z-10 font-mono text-xs ${ACCENT_COLORS[i]}`}>
                    {`0${i + 1}.`}
                  </span>
                  <span className="relative z-10">{link.name}</span>

                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-current"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </a>
              </motion.li>
            )
          })}

          {/* Resume button */}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="ml-4"
          >
            <motion.a
              href="/images/Samdavid_SD1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center overflow-hidden rounded-lg border border-lavender px-4 py-2 font-mono text-sm text-lavender transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(180, 142, 255, 0.25)" }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Sweep background on hover */}
              <motion.span
                className="absolute inset-0 bg-lavender/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Resume</span>
            </motion.a>
          </motion.li>
        </ul>

        {/* Mobile hamburger */}
        <motion.button
          className="relative text-muted-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2rem) 2rem)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-2xl md:hidden"
          >
            {/* Decorative floating orbs */}
            <div className="absolute top-20 left-10 h-32 w-32 animate-float rounded-full bg-lavender/5 blur-2xl" />
            <div className="absolute bottom-20 right-10 h-40 w-40 animate-float-delayed rounded-full bg-orchid/5 blur-2xl" />

            <button
              className="absolute top-4 right-6 text-muted-foreground"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex flex-col items-center gap-1.5 rounded-xl border border-transparent px-6 py-3 text-lg text-foreground transition-all duration-300 hover:${HOVER_BG[i]} ${HOVER_BORDER[i]}`}
                  >
                    <span className={`font-mono text-sm ${ACCENT_COLORS[i]}`}>
                      {`0${i + 1}.`}
                    </span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <a
                  href="/images/Samdavid_SD1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-block rounded-lg border border-lavender bg-lavender/10 px-8 py-3 font-mono text-sm text-lavender transition-all hover:bg-lavender/20"
                >
                  Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
