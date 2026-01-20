import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Education {
  period: string
  degree: string
  institution: string
}

interface Certification {
  name: string
  issuer: string
}

const education: Education[] = [
  {
    period: "2024 — 2025",
    degree: "Pós-graduação em Arquitetura de Software",
    institution: "Anhanguera Educacional",
  },
  {
    period: "2024 — 2025",
    degree: "Pós-graduação em Inteligência Artificial",
    institution: "Anhanguera Educacional",
  },
  {
    period: "2022 — 2025",
    degree: "Bacharelado em Engenharia de Software",
    institution: "Ampli",
  },
  {
    period: "2018 — 2020",
    degree: "Tecnólogo em Análise de Sistemas",
    institution: "Universidade Cruzeiro do Sul",
  },
  {
    period: "—",
    degree: "Técnico em Telecomunicações",
    institution: "Escola Técnica Sandra Silva",
  },
]

const certifications: Certification[] = [
  { name: "Google Associate Cloud Engineer", issuer: "Google Cloud" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
  { name: "Bootcamp Full Stack Developer", issuer: "—" },
  { name: "ASP.NET MVC Core Specialization", issuer: "—" },
]

export function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-primary" />
              Formação Acadêmica
            </h2>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary transition-colors group"
                >
                  <CardContent className="p-5 flex gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary h-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-mono">
                        {edu.period}
                      </span>
                      <h3 className="font-semibold text-foreground mt-1">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-accent" />
              Certificações
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-accent transition-colors group"
                >
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent h-fit group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground"
                    >
                      Certificado
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
