"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionHeading } from "./section-heading"

const ACCENT_COLORS = [
  { text: "text-lavender", bg: "bg-lavender", border: "border-lavender", bgLight: "bg-lavender/10", shadow: "shadow-lavender/10" },
  { text: "text-orchid", bg: "bg-orchid", border: "border-orchid", bgLight: "bg-orchid/10", shadow: "shadow-orchid/10" },
  { text: "text-pink", bg: "bg-pink", border: "border-pink", bgLight: "bg-pink/10", shadow: "shadow-pink/10" },
  { text: "text-gold", bg: "bg-gold", border: "border-gold", bgLight: "bg-gold/10", shadow: "shadow-gold/10" },
]

const jobs = [
  {
    company: "Aura Harks Technology Pvt Ltd",
    title: "Software Engineer",
    url: "#",
    range: "2024 \u2014 Present | Chennai, India",
  
  bullets: [
    "Architected scalable web applications using Java Spring Boot microservices, supporting 100k+ concurrent users with high availability.",
    "Optimized MySQL database queries through strategic indexing and query refinement, achieving 30% faster response times across critical endpoints.",
    "Integrated third-party APIs and payment gateways, expanding platform capabilities and increasing transaction success rates by 25%.",
    "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40% and ensuring zero-downtime releases.",
    "Mentored Many junior developers through code reviews and pair programming, reducing production bugs by 40% and accelerating team velocity."
  ],
  "techs": ["Java", "Spring Boot", "React", "Angular", "Django", "MySQL", "AWS", "Git"],
  },
  {
    company: "Aura Harks Corp",
    title: "Full-Stack Java Developer Intern",
    url: "#",
    range: "Jan 2024 \u2014 Mar 2024 | Chennai, India",
   bullets: [
    "Built and tested full-stack features using Java Spring Boot and React within Agile sprint cycles, delivering components ahead of deadlines.",
    "Contributed to RESTful API development and MySQL database schema design for production-grade client solutions.",
    "Collaborated with senior engineers using Git for version control, participating in code reviews and troubleshooting production issues.",
    "Assisted in AWS cloud deployments and configuration, ensuring seamless application hosting and scalability.",
    "Implemented responsive UI components with Angular, enhancing user experience across multiple devices and browsers."
  ],
  "techs": ["Java", "Spring Boot", "React", "Angular", "MySQL", "AWS", "Git"],
  },
  {
    company: "Madurai Kamaraj University",
    title: "Master of Business Administration",
    url: "#",
    range: "June 2021 \u2014 April 2023 | Madurai, India",
 bullets: [
  "Completed MBA in Human Resource Management with strong knowledge in Talent Acquisition and Performance Management.",
  "Gained practical exposure to recruitment, employee engagement, and HR analytics.",
  "Applied strategic planning and leadership skills to improve organizational efficiency."
],

techs: ["HR Analytics", "Talent Acquisition", "Performance Management", "MS Excel", "Leadership"],
  },
  {
    company: "NPR Arts and Science College",
    title: "Bachelor of Computer Application",
    url: "#",
    range: "June 2016 \u2014 March 2019 | Dindigul, India",
   bullets: [
  "Completed Bachelor of Computer Applications (BCA) with a strong foundation in programming and software development.",
  "Gained hands-on experience in Java, web development, and database management.",
  "Developed academic projects focusing on problem-solving and application design."
],

techs: ["Java", "HTML", "CSS", "JavaScript", "MySQL"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-24 lg:px-12">
      {/* Decorative bg */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-orchid/8 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-lavender/6 blur-[100px]" aria-hidden="true" />

      <SectionHeading number="02." title="My Professional Journey" color="text-orchid" />

      <div ref={ref} className="flex flex-col gap-6 md:flex-row">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative flex overflow-x-auto md:flex-col md:overflow-x-visible"
          role="tablist"
          aria-label="Job tabs"
        >
          {jobs.map((job, i) => {
            const color = ACCENT_COLORS[i % ACCENT_COLORS.length]
            return (
              <button
                key={job.company}
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                className={`relative whitespace-nowrap rounded-lg px-5 py-3 text-left font-mono text-sm transition-all ${
                  activeTab === i
                    ? `${color.text} ${color.bgLight}`
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="active-tab"
                    className={`absolute bottom-0 left-0 h-0.5 w-full md:bottom-auto md:left-0 md:top-0 md:h-full md:w-0.5 rounded-full ${color.bg}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {job.company}
              </button>
            )
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="min-h-[320px] flex-1 py-1 md:pl-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              role="tabpanel"
            >
              <h3 className="text-xl font-medium text-foreground">
                {jobs[activeTab].title}{" "}
                <a
                  href={jobs[activeTab].url}
                  className={`${ACCENT_COLORS[activeTab % ACCENT_COLORS.length].text} transition-colors hover:underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ {jobs[activeTab].company}
                </a>
              </h3>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                {jobs[activeTab].range}
              </p>

              <ul className="mt-6 space-y-4">
                {jobs[activeTab].bullets.map((bullet, bi) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: bi * 0.1 }}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className={`mt-1.5 shrink-0 ${ACCENT_COLORS[activeTab % ACCENT_COLORS.length].text}`}>{">"}</span>
                    {bullet}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {jobs[activeTab].techs.map((tech, ti) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: ti * 0.05 + 0.2 }}
                    className={`rounded-full border px-3 py-1 font-mono text-xs ${ACCENT_COLORS[activeTab % ACCENT_COLORS.length].border} ${ACCENT_COLORS[activeTab % ACCENT_COLORS.length].text} ${ACCENT_COLORS[activeTab % ACCENT_COLORS.length].bgLight}`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
