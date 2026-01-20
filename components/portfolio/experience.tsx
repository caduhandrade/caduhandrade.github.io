import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    period: "Fev 2025 — Atual",
    title: "Tech Lead / Senior .NET Engineer",
    company: "Globo",
    description:
      "Liderança técnica em squads de sistemas internos de alta escala. Decisões de arquitetura, liderança técnica e evolução contínua de soluções. Desenvolvimento de microserviços em .NET, operação em Kubernetes (GKE), integração entre serviços com mensageria e APIs. Implementação de soluções com IA usando Google ADK, Gemini e Vertex AI.",
    technologies: [".NET", "C#", "Microservices", "Kubernetes", "GCP", "Google ADK", "Gemini", "Vertex AI", "CI/CD"],
  },
  {
    period: "Ago 2024 — Fev 2025",
    title: "Senior .NET Engineer",
    company: "GFT Technologies",
    description:
      "Desenvolvimento de sistemas backend distribuídos com foco em escalabilidade. Arquitetura com Vertical Slice e Clean Architecture, integração assíncrona com RabbitMQ e MassTransit. APIs REST e atuação integrada com times de frontend em micro-frontends React.",
    technologies: [".NET", "C#", "RabbitMQ", "MassTransit", "Vertical Slice", "Clean Architecture", "React"],
  },
  {
    period: "Abr 2024 — Ago 2024",
    title: "Senior Full Stack Engineer",
    company: "Meta",
    description:
      "Desenvolvimento e evolução de sistemas utilizados pela Globo com foco em backend e integrações cloud. APIs em .NET, manutenção de aplicações frontend, integrações com AWS e múltiplos bancos de dados.",
    technologies: [".NET", "C#", "Vue.js", "Angular", "AWS Lambda", "DynamoDB", "MySQL", "Oracle"],
  },
  {
    period: "Fev 2023 — Abr 2024",
    title: "Full Stack Developer",
    company: "Meta",
    description:
      "Desenvolvimento de funcionalidades para sistemas de talentos artísticos. APIs REST, frontend com Vue.js e Angular, integrações com bancos relacionais e não relacionais. CI/CD e ambiente ágil (Scrum).",
    technologies: [".NET", "C#", "Vue.js", "Angular", "AWS", "MySQL", "Oracle", "Dapper", "Entity Framework"],
  },
  {
    period: "Ago 2021 — Fev 2023",
    title: ".NET Developer",
    company: "Linx",
    description:
      "Desenvolvimento de sistemas para varejo com forte atenção a regras fiscais e legislação estadual. ASP.NET, APIs e serviços backend, manutenção de sistemas legados, frontend com Vue.js.",
    technologies: ["C#", "ASP.NET", "Vue.js", "Dapper", "Entity Framework", "Oracle", "SQL Server"],
  },
  {
    period: "Abr 2021 — Ago 2021",
    title: "Full Stack Developer",
    company: "Mercosul Motores Elétricos",
    description:
      "Desenvolvimento e manutenção de sistemas internos. Levantamento de requisitos, sistemas web, manutenção de sistemas desktop legados em Delphi, backend em .NET.",
    technologies: [".NET", "C#", "Delphi", "HTML", "CSS", "JavaScript"],
  },
  {
    period: "Mar 2019 — Jan 2021",
    title: "Systems Analyst",
    company: "Stefanini Brasil",
    description:
      "Análise de sistemas e suporte a ambientes corporativos de grande porte. Análise de requisitos de negócio, gestão de acessos, implantação e suporte a sistemas TOTVS e SAP.",
    technologies: ["TOTVS", "SAP", "Análise de Sistemas"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-primary" />
          Experiência Profissional
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-6 rounded-lg hover:bg-card transition-colors border border-transparent hover:border-border focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:rounded-lg"
            >
              <div className="text-sm text-muted-foreground font-mono" aria-label={`Período: ${exp.period}`}>
                {exp.period}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <span>{exp.title} · {exp.company}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground border-border hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
