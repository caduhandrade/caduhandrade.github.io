import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Cloud, Database, Brain, Layers, Users } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: <Code2 className="w-5 h-5" />,
    skills: [".NET", "ASP.NET Core", "C#", "REST APIs", "Microservices", "MassTransit"],
  },
  {
    title: "Frontend",
    icon: <Layers className="w-5 h-5" />,
    skills: ["React", "Vue.js", "Angular", "TypeScript", "Micro-frontends"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["Kubernetes", "GCP", "AWS", "Azure", "Docker", "CI/CD"],
  },
  {
    title: "Banco de Dados",
    icon: <Database className="w-5 h-5" />,
    skills: ["SQL Server", "Oracle", "DynamoDB", "PostgreSQL", "RabbitMQ"],
  },
  {
    title: "Inteligência Artificial",
    icon: <Brain className="w-5 h-5" />,
    skills: ["Google ADK", "AI Solutions", "Machine Learning"],
  },
  {
    title: "Liderança",
    icon: <Users className="w-5 h-5" />,
    skills: [
      "Tech Lead",
      "Mentoria",
      "Clean Architecture",
      "Vertical Slice",
      "Agile",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-primary" />
          Tecnologias & Habilidades
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="bg-card border-border hover:border-primary transition-colors group focus-within:ring-2 focus-within:ring-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
