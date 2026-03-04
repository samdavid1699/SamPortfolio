"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionHeading } from "./section-heading"

const CARD_COLORS = [
  { border: "hover:border-lavender/50", glow: "hover:shadow-lavender/10", tag: "text-lavender", tagBg: "bg-lavender/10 border-lavender/25" },
  { border: "hover:border-orchid/50", glow: "hover:shadow-orchid/10", tag: "text-orchid", tagBg: "bg-orchid/10 border-orchid/25" },
  { border: "hover:border-pink/50", glow: "hover:shadow-pink/10", tag: "text-pink", tagBg: "bg-pink/10 border-pink/25" },
  { border: "hover:border-gold/50", glow: "hover:shadow-gold/10", tag: "text-gold", tagBg: "bg-gold/10 border-gold/25" },
  { border: "hover:border-mint/50", glow: "hover:shadow-mint/10", tag: "text-mint", tagBg: "bg-mint/10 border-mint/25" },
  { border: "hover:border-orchid/50", glow: "hover:shadow-orchid/10", tag: "text-orchid", tagBg: "bg-orchid/10 border-orchid/25" },
]

const featuredProjects = [
  {
  title: "EMPLOYEE ATTENDANCE PORTAL",
description:
  "A full-stack web application for managing and monitoring employee attendance with secure authentication and role-based access control. Features include attendance tracking, admin dashboard, and automated email notifications. Built with a scalable Spring Boot backend, responsive React frontend, and deployed on AWS cloud infrastructure.",
techs: ["React", "Spring Boot", "Spring Security", "MySQL", "AWS (EC2, RDS, S3)"],
    github: "https://github.com/samdavid1699/EMPLOYEE-ATTENDENCE-PORTAL-",
    external: "#",
    color: "lavender",
    image: "/images/project-dashboard.jpg",
  },
  {
    title: "Lottery Management System",
    description:
      "Engineered full-featured lottery platform with Django REST Framework microservices for user management, ticketing, payments, and systematized draws. Integrated Stripe API with webhook handlers for secure transaction processing ensuring PCI compliance. Built AJAX-driven frontend enabling real-time ticket validation.",
    techs: ["Django REST Framework", "Stripe API", "AJAX", "PythonAnywhere", "CI/CD" ],
    github: "#",
    external: "#",
    color: "orchid",
    image: "/images/project-devops.jpg",
  },
  {
   title: "User Management System",
description:
  "A secure and scalable enterprise-grade User Management System built with Spring Boot and React. Features include JWT-based authentication, role-based access control, and real-time user administration through a dynamic dashboard. Powered by MySQL for reliable data management and deployed on AWS (EC2, RDS) to ensure high availability, performance, and cloud scalability.",
techs: ["Java", "Spring Boot", "Spring Security", "React", "MySQL", "AWS (EC2, RDS)"],
    github: "#",
    external: "#",
    color: "pink",
    image: "/images/project-ai.jpg",
  },
]

const FEATURED_COLORS: Record<string, { accent: string; bg: string; border: string; glow: string; overlay: string }> = {
  lavender: { accent: "text-lavender", bg: "bg-lavender/5", border: "border-lavender/25", glow: "shadow-lavender/10", overlay: "from-lavender/30" },
  orchid: { accent: "text-orchid", bg: "bg-orchid/5", border: "border-orchid/25", glow: "shadow-orchid/10", overlay: "from-orchid/30" },
  pink: { accent: "text-pink", bg: "bg-pink/5", border: "border-pink/25", glow: "shadow-pink/10", overlay: "from-pink/30" },
}

const otherProjects = [
  {
    title: "Task Management API",
    description: "RESTful API for task management with authentication, real-time updates, and team collaboration features.",
    techs: ["Spring Boot", "React", "Mysql", "JWT"],
    github: "#",
    external: "#",
  },
  {
    title: "Weather Forecast App",
    description: "A Progressive Web App that provides hyperlocal weather forecasts with interactive radar maps and severe weather alerts.",
    techs: ["React", "PWA", "Mapbox", "OpenWeather"],
    github: "#",
    external: null,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Stripe payments, inventory management, and admin dashboard.",
    techs: ["React.js", "Springboot", "Mysql", "Tailwind"],
    github: "#",
    external: "#",
  },
  {
    title: "User Card Application",
description:
  "A dynamic React-based User Card Application that displays and manages user profiles with interactive UI components. Features include real-time data rendering, reusable components, and responsive design for seamless user experience across devices.",
techs: ["React", "JavaScript", "HTML", "CSS"],
    github: "#",
    external: null,
  },
  {
   title: "Airbus Inventory",
description:
  "A scalable inventory management system designed to streamline aircraft parts tracking and stock control. Built with Spring Boot and Angular, the application provides secure REST APIs, real-time inventory updates, role-based access control, and optimized database management using MySQL. Deployed on AWS to ensure reliability, performance, and cloud scalability.",
techs: ["Java", "Spring Boot", "Angular", "MySQL", "AWS"],
    github: "#",
    external: "#",
  },
  {
 title: "Coffee Shop Management System",
description:
  "A full-stack Coffee Shop Management System built with React and Spring Boot, designed to handle product listings, order management, and customer interactions through secure REST APIs. Integrated with MySQL for efficient data storage and real-time order processing, ensuring a smooth and responsive user experience.",
techs: ["React", "Spring Boot", "Java", "MySQL", "REST API"],
    github: "#",
    external: null,
  },
]

function FeaturedProject({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal()
  const isEven = index % 2 === 0
  const colors = FEATURED_COLORS[project.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative grid items-center gap-4 md:grid-cols-12"
    >
      {/* Project image */}
      <div
        className={`group relative overflow-hidden rounded-2xl md:col-span-7 ${
          isEven ? "md:col-start-1" : "md:col-start-6"
        } md:row-start-1`}
      >
        <a href={project.external || "#"} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            {/* Color overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.overlay} to-transparent mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0`} />
            <div className="absolute inset-0 bg-background/40 transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        </a>
        {/* Glow border */}
        <div className={`absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-br ${colors.overlay} to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-50`} />
      </div>

      {/* Project info */}
      <div
        className={`relative z-10 md:col-span-7 ${
          isEven ? "md:col-start-6 md:text-right" : "md:col-start-1 md:text-left"
        } md:row-start-1`}
      >
        <p className={`font-mono text-sm ${colors.accent}`}>Featured Project</p>
        <h3 className="mt-1 text-2xl font-bold text-foreground">
          {project.title}
        </h3>
        <div className={`mt-5 rounded-2xl border ${colors.border} bg-card/90 p-6 backdrop-blur-sm shadow-xl ${colors.glow}`}>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
        <ul
          className={`mt-4 flex flex-wrap gap-3 font-mono text-sm text-muted-foreground ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.techs.map((tech) => (
            <li key={tech} className="transition-colors hover:text-foreground">{tech}</li>
          ))}
        </ul>
        <div
          className={`mt-4 flex gap-4 ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-foreground transition-colors hover:text-lavender"
            >
              <Github className="h-5 w-5" />
            </motion.a>
          )}
          {project.external && (
            <motion.a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-foreground transition-colors hover:text-lavender"
            >
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const { ref: otherRef, isVisible: otherVisible } = useScrollReveal()

  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-24 lg:px-12">
      {/* Decorative */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-pink/8 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 bottom-1/3 h-72 w-72 rounded-full bg-lavender/6 blur-[120px]" aria-hidden="true" />

      <SectionHeading number="03." title="Things I've Built" color="text-pink" />

      {/* Featured Projects */}
      <div className="space-y-24">
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Other noteworthy projects */}
      <div ref={otherRef} className="mt-24">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={otherVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-foreground"
        >
          Other Noteworthy Projects
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={otherVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mt-1 text-center font-mono text-sm text-lavender"
        >
          <a href="#" className="transition-colors hover:underline">
            view the archive
          </a>
        </motion.p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => {
            const color = CARD_COLORS[i % CARD_COLORS.length]
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={otherVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className={`group flex flex-col rounded-2xl border border-border/60 bg-card/80 p-7 backdrop-blur-sm transition-all duration-300 ${color.border} ${color.glow} hover:shadow-xl`}
              >
                <div className="flex items-center justify-between">
                  <Folder className={`h-10 w-10 ${color.tag}`} />
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        whileHover={{ scale: 1.2 }}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                    {project.external && (
                      <motion.a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        whileHover={{ scale: 1.2 }}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                <h4 className="mt-6 text-lg font-bold text-foreground transition-colors">
                  {project.title}
                </h4>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <li key={tech} className={`rounded-full border px-2.5 py-0.5 font-mono text-xs ${color.tagBg} ${color.tag}`}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
