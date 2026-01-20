import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Phone, MapPin, Globe } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12 flex items-center gap-4 justify-center">
          <span className="w-12 h-px bg-primary" />
          Contato
          <span className="w-12 h-px bg-primary" />
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Vamos trabalhar juntos?
          </h3>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Se você deseja discutir um projeto, uma oportunidade ou apenas bater um
            papo sobre tecnologia, ficarei feliz em conversar.
          </p>

          <div className="space-y-4 mb-8 flex flex-col items-center">
            <a
              href="mailto:carloseduardo.andrade@live.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-2"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span>carloseduardo.andrade@live.com</span>
            </a>

            <a
              href="tel:+5521988347719"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-2"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span>+55 21 98834-7719</span>
            </a>

            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Caxias do Sul, Brasil</span>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <span>Português (Nativo) · Inglês (B1-B2)</span>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a
              href="https://linkedin.com/in/andradecarloseduardo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Conectar no LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
