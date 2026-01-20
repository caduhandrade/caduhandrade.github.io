import { Hero } from "@/components/portfolio/hero"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { Navigation } from "@/components/portfolio/navigation"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background" id="about">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
