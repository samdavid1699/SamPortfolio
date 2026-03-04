import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Contact } from "@/components/portfolio/contact"
import { Socials } from "@/components/portfolio/socials"
import { Footer } from "@/components/portfolio/footer"
import { ParticlesBackground } from "@/components/portfolio/particles"

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <Socials />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
