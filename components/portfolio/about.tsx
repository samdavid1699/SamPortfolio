"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionHeading } from "./section-heading"

const skills = [
  { name: "Java", color: "text-gold" },
  { name: "React.js", color: "text-lavender" },
  { name: "Spring Boot", color: "text-orchid" },
  { name: "JavaScript (ES6+)", color: "text-foreground" },
  { name: "Mysql", color: "text-mint" },
  { name: "TypeScript", color: "text-gold" },
  { name: "API", color: "text-lavender" },
  { name: "Tailwind CSS", color: "text-gold" },
  { name: "Docker", color: "text-orchid" },
  { name: "PostgreSQL", color: "text-pink" },
  { name: "AWS", color: "text-lavender" },
  { name: "Git", color: "text-pink" },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
}

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="relative mx-auto max-w-4xl px-6 py-24 lg:px-12">
      <SectionHeading number="01." title="About Me" color="text-lavender" />

      <div ref={ref} className="grid gap-12 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I’m a passionate Full Stack Developer with 2+ years of experience building scalable, secure, 
              and high-performance web applications using Java, Spring Boot, React, and Angular. 
              I specialize in designing microservices-based architectures, 
              developing robust REST APIs, and creating seamless, user-focused frontend experiences.
            </p>

            <p>
            My expertise includes authentication and authorization systems, API performance optimization,
             MySQL database tuning, and event-driven architectures using Kafka. 
             I have hands-on experience delivering production-grade enterprise solutions in Agile environments, ensuring clean code, reliability, and scalability.
            </p>
              <p>
I’m driven by system design, clean architecture, and building technology 
solutions that create measurable business impact across both frontend and backend systems.
            </p>

            <p>
              Here are a few technologies I've been working with recently:
            </p>
          </div>

          <motion.ul
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3"
          >
            {skills.map((skill) => (
              <motion.li
                key={skill.name}
                variants={item}
                className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
              >
                <span className={`text-xs ${skill.color}`}>{">"}</span>
                <span className="transition-colors hover:text-foreground">
                  {skill.name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Profile Photo */}
{/* Profile Photo */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="group relative w-[calc(100%-8px)] mx-auto md:w-full md:mx-0 md:col-span-2"
>
  <div className="relative overflow-hidden rounded-xl md:rounded-2xl">

    {/* Responsive portrait ratio */}
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      <Image
        src="/images/profile.jpg"
        alt="Profile photo"
        fill
        className="object-cover object-center transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        sizes="(max-width: 768px) 100vw, 400px"
        priority
      />

      {/* Lavender overlay */}
      <div className="absolute inset-0 bg-lavender/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
    </div>

    {/* Gradient glow (desktop only) */}
    <div className="hidden md:block absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-lavender via-orchid to-pink opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-70" />
  </div>

  {/* Decorative corner frame (desktop only) */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1 } : {}}
    transition={{ delay: 0.6 }}
    className="hidden md:block absolute -bottom-3 -right-3 rounded-2xl border-2 border-lavender/30 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-orchid/40"
  />
</motion.div>
      </div>
    </section>
  )
}