"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone, MapPin, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-20 relative">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
            <Image
              src="/caduandrade.dev/images/profile.jpeg"
              alt="Carlos Eduardo Lopes de Andrade - Tech Lead & Software Architect"
              width={224}
              height={224}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">Caxias do Sul, Brasil</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
            Carlos Eduardo
            <br />
            <span className="text-primary">Lopes de Andrade</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-accent font-medium mb-6">
            Tech Lead & Software Architect
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Tech Lead e Software Architect com forte experiência em{" "}
            <span className="text-foreground font-medium">.NET</span>,{" "}
            <span className="text-foreground font-medium">React</span> e{" "}
            <span className="text-foreground font-medium">arquiteturas cloud-native</span>.
            Especializado em projetar microserviços escaláveis, sistemas baseados em Kubernetes
            e soluções orientadas a IA.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
            >
              <a href="mailto:carloseduardo.andrade@live.com">
                <Mail className="w-4 h-4 mr-2" />
                Entrar em Contato
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border text-foreground hover:bg-secondary hover:text-secondary-foreground bg-transparent text-sm sm:text-base"
            >
              <a
                href="https://linkedin.com/in/andradecarloseduardo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border text-foreground hover:bg-secondary hover:text-secondary-foreground bg-transparent text-sm sm:text-base"
            >
              <a href="tel:+5521988347719">
                <Phone className="w-4 h-4 mr-2" />
                +55 21 98834-7719
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToExperience}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
        aria-label="Scroll para experiência"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  )
}
