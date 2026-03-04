"use client"

import { useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  Send,
  Sparkles,
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "shamdavid2345@gmail.com",
    href: "shamdavid2345@gmail.com",
    color: "text-lavender",
    bg: "bg-lavender/10",
    border: "border-lavender/25",
    hoverBorder: "hover:border-lavender/50",
    glow: "hover:shadow-lavender/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: null,
    color: "text-orchid",
    bg: "bg-orchid/10",
    border: "border-orchid/25",
    hoverBorder: "hover:border-orchid/50",
    glow: "hover:shadow-orchid/10",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to opportunities",
    href: null,
    color: "text-mint",
    bg: "bg-mint/10",
    border: "border-mint/25",
    hoverBorder: "hover:border-mint/50",
    glow: "hover:shadow-mint/10",
  },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/samdavid1699", color: "hover:text-lavender hover:border-lavender/50 hover:bg-lavender/10" },
  { icon: Linkedin, label: "LinkedIn", href: "www.linkedin.com/in/samdavid1699", color: "hover:text-orchid hover:border-orchid/50 hover:bg-orchid/10" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-pink hover:border-pink/50 hover:bg-pink/10" },
  { icon: MessageCircle, label: "Discord", href: "#", color: "hover:text-gold hover:border-gold/50 hover:bg-gold/10" },
]

export function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24 lg:px-12">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-float-delayed absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/8 blur-[130px]" />
        <div className="animate-float-slow absolute right-0 bottom-0 h-72 w-72 rounded-full bg-lavender/10 blur-[130px]" />
        <div className="animate-float absolute left-1/3 top-1/2 h-56 w-56 rounded-full bg-orchid/6 blur-[110px]" />
      </div>

      <div ref={ref} className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 font-mono text-gold"
        >
          <Sparkles className="h-4 w-4" />
          <span>{"04. What's Next?"}</span>
          <Sparkles className="h-4 w-4" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-center text-4xl font-bold md:text-5xl"
        >
          <span className="text-gradient">Ping Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground leading-relaxed"
        >
          {
            "Got an exciting project in mind? Looking for a collaborator? Or just want to geek out about tech? My inbox is always open. Drop me a message and let's create something amazing together."
          }
        </motion.p>

        {/* Contact methods cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          {contactMethods.map((method, i) => {
            const Icon = method.icon
            const Wrapper = method.href ? motion.a : motion.div
            const wrapperProps = method.href
              ? { href: method.href, target: "_blank", rel: "noopener noreferrer" }
              : {}
            return (
              <Wrapper
                key={method.label}
                {...(wrapperProps as Record<string, string>)}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`flex flex-col items-center gap-3 rounded-2xl border ${method.border} ${method.bg} p-6 text-center backdrop-blur-sm transition-all duration-300 ${method.hoverBorder} ${method.glow} hover:shadow-xl cursor-pointer`}
              >
                <div className={`rounded-xl ${method.bg} p-3`}>
                  <Icon className={`h-5 w-5 ${method.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{method.label}</p>
                  <p className={`mt-0.5 font-mono text-xs ${method.color}`}>{method.value}</p>
                </div>
              </Wrapper>
            )
          })}
        </motion.div>

        {/* Main content: Form + Social */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-5">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border/60 bg-card/60 p-8 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <Send className="h-4 w-4 text-lavender" />
                Send a message
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {"Fill out the form below and I'll get back to you as soon as possible."}
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="mt-8 flex flex-col items-center gap-4 py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="rounded-full bg-mint/10 p-4"
                    >
                      <CheckCircle2 className="h-10 w-10 text-mint" />
                    </motion.div>
                    <div>
                      <p className="text-lg font-bold text-foreground">Message sent!</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {"Thanks for reaching out. I'll respond soon."}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="mt-6 flex flex-col gap-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-lavender">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Name"
                          className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-lavender/50 focus:outline-none focus:ring-1 focus:ring-lavender/30"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-orchid">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Email@example.com"
                          className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-orchid/50 focus:outline-none focus:ring-1 focus:ring-orchid/30"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-1.5 block font-mono text-xs text-pink">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Let's collaborate on..."
                        className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-pink/50 focus:outline-none focus:ring-1 focus:ring-pink/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-gold">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, idea, or just say hello..."
                        className="w-full resize-none rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lavender via-orchid to-pink px-8 py-3.5 font-mono text-sm font-semibold text-background transition-all hover:shadow-xl hover:shadow-orchid/20 animate-gradient"
                    >
                      <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      Send Message
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right side: social + quick info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {/* Connect with me */}
            <div className="rounded-2xl border border-border/60 bg-card/60 p-8 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <MessageCircle className="h-4 w-4 text-orchid" />
                Connect with me
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {"Find me on social platforms."}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      whileHover={{ y: -3 }}
                      className={`flex items-center gap-2 rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm text-muted-foreground transition-all ${link.color}`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Quick reply CTA */}
            <div className="rounded-2xl border border-lavender/20 bg-gradient-to-br from-lavender/5 via-orchid/5 to-pink/5 p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-foreground">
                {"Prefer email?"}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {"No worries! Click below to open your email client and send me a direct message."}
              </p>
              <motion.a
                href="mailto:shamdavid2345@gmail"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-lavender/40 bg-lavender/10 px-6 py-3 font-mono text-sm text-lavender transition-all hover:bg-lavender/20 hover:border-lavender hover:shadow-lg hover:shadow-lavender/15"
              >
                <Mail className="h-4 w-4" />
                shamdavid2345@gmail
                <ArrowRight className="h-3 w-3" />
              </motion.a>
            </div>

            {/* Fun status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="rounded-2xl border border-mint/20 bg-mint/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-mint" />
                </span>
                <span className="font-mono text-sm text-mint">Currently available</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {"Response time: usually within 24 hours"}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
