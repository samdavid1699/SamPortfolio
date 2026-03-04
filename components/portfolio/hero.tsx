"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Sparkles, Code2, Terminal, Braces, Database, Globe } from "lucide-react"

const roles = [
  "Full-Stack Developer",
  "Programmer",
  "Problem Solver",
]

const floatingIcons = [
  { icon: Code2, x: "10%", y: "20%", delay: 0, color: "text-lavender/30", size: "h-6 w-6" },
  { icon: Terminal, x: "85%", y: "15%", delay: 1, color: "text-orchid/25", size: "h-5 w-5" },
  { icon: Braces, x: "75%", y: "70%", delay: 2, color: "text-pink/25", size: "h-7 w-7" },
  { icon: Database, x: "15%", y: "75%", delay: 0.5, color: "text-gold/20", size: "h-5 w-5" },
  { icon: Globe, x: "90%", y: "50%", delay: 1.5, color: "text-mint/20", size: "h-6 w-6" },
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 30 : 60

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.slice(0, displayText.length - 1)
          : currentRole.slice(0, displayText.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="relative flex min-h-screen items-center px-6 pt-20 lg:px-12">
      {/* Lavender gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-float absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-lavender/15 blur-[150px]" />
        <div className="animate-float-delayed absolute top-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-orchid/12 blur-[130px]" />
        <div className="animate-float-slow absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-pink/10 blur-[120px]" />
        <div className="animate-float absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gold/8 blur-[100px]" />
      </div>

      {/* Floating tech icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {floatingIcons.map(({ icon: Icon, x, y, delay, color, size }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              delay: delay + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className={`${size} ${color}`} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-5 flex items-center gap-2 font-mono text-lavender"
        >
          <Sparkles className="h-4 w-4" />
          <span>{"Hi, I'm"}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient text-balance">SAM DAVID</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-3 flex items-center gap-3 text-2xl font-bold text-muted-foreground sm:text-3xl md:text-4xl lg:text-5xl"
        >
          <span className="text-balance">{"I'm a "}</span>
          <span className="relative">
            <span className="text-gradient-warm">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="ml-0.5 inline-block h-[1em] w-[3px] bg-orchid align-middle"
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {
            "I'm a software engineer specializing in building exceptional digital experiences. Currently focused on building accessible, performant, and scalable web applications that make a difference."
          }
        </motion.p>

        {/* Animated stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-6"
        >
          {[
            { value: "2+", label: "Years Exp", color: "text-lavender", border: "border-lavender/25", bg: "bg-lavender/5" },
            { value: "5+", label: "Projects", color: "text-orchid", border: "border-orchid/25", bg: "bg-orchid/5" },
            // { value: "30+", label: "Clients", color: "text-pink", border: "border-pink/25", bg: "bg-pink/5" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`flex items-center gap-3 rounded-xl border ${stat.border} ${stat.bg} px-5 py-3 backdrop-blur-sm`}
            >
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-lavender via-orchid to-pink px-8 py-4 font-mono text-sm font-semibold text-background transition-all hover:shadow-xl hover:shadow-lavender/25"
          >
            <span className="relative z-10">Check out my work</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border border-orchid/50 bg-orchid/10 px-8 py-4 font-mono text-sm text-orchid transition-all hover:bg-orchid/20 hover:border-orchid hover:shadow-lg hover:shadow-orchid/15"
          >
            {"Let's talk"}
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-lavender/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
