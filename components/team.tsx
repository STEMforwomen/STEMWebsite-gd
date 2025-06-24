"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  avatar: string
  age: number
  social: {
    twitter?: string
    linkedin?: string
    github?: string
    instagram?: string
  }
}

interface TeamIllustrationProps {
  linkedInUrl: string
}

const TeamIllustration = ({ linkedInUrl }: TeamIllustrationProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <div
        className="relative mx-auto max-w-2xl overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/images/team-illustration.png"
          alt="Ilustração da equipe STEM for Women"
          width={800}
          height={600}
          className="rounded-lg"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-t from-pink-600/70 via-pink-600/30 to-transparent flex flex-col items-center justify-end p-6 rounded-lg"
        >
          <p className="text-white font-medium mb-3 text-shadow">Arte por Ana Beatriz Daltro Santos</p>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-pink-600 transition-all duration-300"
            onClick={() => window.open(linkedInUrl, "_blank")}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            Ver perfil da artista
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Riany Mello",
    role: "Fundadora, Coordenadora do Discord & Programação",
    bio: "Estudante de Programação e Inteligência Artificial, autodidata e vestibulanda de Ciência da Computação/Matemática.",
    avatar: "/images/riany.png",
    age: 19,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Giovanna",
    role: "Co-fundadora & Coordenadora de Eventos",
    bio: "Vestibulanda com foco em Ciência de dados com ênfase em desenvolvimento de aplicativos.",
    avatar: "/images/giovanna.png",
    age: 18,
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Fernanda Dantas",
    role: "Membra da Equipe de Eventos",
    bio: "Estudante do 3º ano do ensino médio e vestibulanda de Comunicação - RP (Relações Públicas).",
    avatar: "/images/fernanda.novo.png",
    age: 17,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Marcela Amorim",
    role: "Coordenadora de Gestão de Parcerias",
    bio: "Graduada em Análise e Desenvolvimento de Sistemas (ADS) pela FATEC e especialista em Qualidade de Software.",
    avatar: "/images/marcela.png",
    age: 24,
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "Danniella Santos",
    role: "Programadora",
    bio: "Estudante de Back-End com foco em Tecnologia e Programação",
    avatar: "/images/daniella.png",
    age: 20,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Isabella Ouverney",
    role: "Coordenadora de Gestão de Pessoas & Desenvolvimento Organizacional",
    bio: "Técnica em Mecânica e graduanda em Engenharia de Produção e Administração.",
    avatar: "/images/isabella.png",
    age: 22,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 7,
    name: "Suami Rocha",
    role: "Designer",
    bio: "Formada em Análise e Desenvolvimento de Sistemas e Design Gráfico, com foco em Product Design.",
    avatar: "/images/suami.png",
    age: 26,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 8,
    name: "Lívia Galhardo de Oliveira Barros",
    role: "Programadora",
    bio: "Estudante do 3º ano do Ensino Médio e aspirante a estudante de ciência e tecnologia.",
    avatar: "/images/livia.png",
    age: 17,
    social: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: 9,
    name: "Tâmara Cedraz",
    role: "Estrategista de Melhorias no Discord",
    bio: "Graduada em Terapia Ocupacional, Especialista em Saúde Pública (Saúde da família e Saúde do trabalhador) com interesse em saúde e tecnologia.",
    avatar: "/images/tamita.png",
    age: 28,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 10,
    name: "Laura Passos de Oliveira",
    role: "Auxiliar de Mídias Sociais",
    bio: "Estudante do 2° ano do ensino médio com interesse na área de Saúde - Medicina.",
    avatar: "/images/laura.png",
    age: 16,
    social: {
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 11,
    name: "Romênia",
    role: "Coordenadora de Marketing & Mídias Sociais",
    bio: "+20 anos de mercado de trabalho. Há 5 anos, migrou para área da tecnologia, desenvolvedora frontEnd formada pela reprograma.",
    avatar: "/images/romania-nova.png",
    age: 42,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 12,
    name: "Samilly Beatriz",
    role: "Trainee",
    bio: "Finalizando a graduação em Engenharia de Software. Atualmente, se dedicando a projetos e a concluir a graduação.",
    avatar: "/placeholder.svg?height=400&width=400&text=SB",
    age: 23,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 13,
    name: "Anna Elisa",
    role: "Trainee",
    bio: "Formada em física e pedagogia. Professora em escola estadual, mestranda em engenharia nuclear com ênfase em segurança e especializada em educação inclusa.",
    avatar: "/placeholder.svg?height=400&width=400&text=AE",
    age: 24,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 14,
    name: "Ingrid",
    role: "Trainee",
    bio: "No último semestre de um curso técnico em guia turístico e ingressará na faculdade de desenvolvimento de software no próximo semestre.",
    avatar: "/placeholder.svg?height=400&width=400&text=IN",
    age: 18,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 15,
    name: "Ana Ester",
    role: "Trainee",
    bio: "Carioca, cursando o último ano do ensino médio integrado no IFRJ com técnico em química.",
    avatar: "/placeholder.svg?height=400&width=400&text=AE",
    age: 18,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 16,
    name: "Mharia Eduarda",
    role: "Trainee",
    bio: "Alagoana, cursando o primeiro ano do ensino médio. Participa de pesquisa e robótica na escola, áreas com as quais deseja trabalhar no futuro.",
    avatar: "/placeholder.svg?height=400&width=400&text=ME",
    age: 15,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 17,
    name: "Mandy",
    role: "Trainee",
    bio: "Formada em Administração com pós-graduação em Crédito e MBA em Data Science e Analytics na USP/Esalq. Experiência com Dados em diversas empresas e negócios.",
    avatar: "/placeholder.svg?height=400&width=400&text=MA",
    age: 37,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 18,
    name: "Carine Jesus",
    role: "Trainee",
    bio: "De Salvador, Bahia. Cursando duas faculdades: ADS e Matemática no IFBA. Já participou de outro projeto na área como aluna e agora se junta como voluntária.",
    avatar: "/placeholder.svg?height=400&width=400&text=CJ",
    age: 18,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
]

export default function Team() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  // Definir as equipes
  const teams = {
    programacao: [1, 13, 5, 8], // IDs: Riany, Anna Eliza, Daniela, Livia
    midias: [11, 10, 7, 17, 15], // IDs: Romênia, Laura, Suami, Mandy, Ana Ester
    eventos: [2, 4, 16, 14], // IDs: Giovanna, Marcela, Mharia Eduarda, Ingrid
    oportunidades: [1, 18, 12], // IDs: Riany, Carine, Samilly
  }

  // Filtrar membros com base no filtro selecionado
  const filteredMembers = filter
    ? teamMembers.filter((member) => {
        if (filter === "programacao") return teams.programacao.includes(member.id)
        if (filter === "midias") return teams.midias.includes(member.id)
        if (filter === "eventos") return teams.eventos.includes(member.id)
        if (filter === "oportunidades") return teams.oportunidades.includes(member.id)
        if (filter === "trainee") return member.role.toLowerCase().includes("trainee")
        return true
      })
    : teamMembers

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-pink-600 mb-4"
          >
            Nosso Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"
          >
            Conheça as mulheres incríveis que lideram o STEM for Women e trabalham para inspirar a próxima geração de
            líderes em STEM.
          </motion.p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!filter ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter("programacao")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "programacao" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Equipe de Programação
            </button>
            <button
              onClick={() => setFilter("midias")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "midias" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Mídias Sociais e Design
            </button>
            <button
              onClick={() => setFilter("eventos")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "eventos" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Eventos e Parcerias
            </button>
            <button
              onClick={() => setFilter("oportunidades")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "oportunidades" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Equipe de Oportunidades
            </button>
            <button
              onClick={() => setFilter("trainee")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "trainee" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Trainees
            </button>
          </div>
        </div>

        <TeamIllustration linkedInUrl="https://www.linkedin.com/in/ana-beatriz-daltro-santos-1a3960344/" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (member.id * 0.1) % 0.5 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setActiveId(member.id)}
              onHoverEnd={() => setActiveId(null)}
            >
              <Card className="overflow-hidden border-none shadow-lg h-full">
                <div className="relative">
                  <motion.div
                    className="bg-gradient-to-r from-pink-500 to-purple-600 pt-6 pb-24 px-6 text-white"
                    whileHover={{
                      background: "linear-gradient(to right, #ec4899, #8b5cf6, #ec4899)",
                      backgroundSize: "200% 100%",
                      backgroundPosition: activeId === member.id ? "100% 0%" : "0% 0%",
                    }}
                    transition={{ duration: 1.5 }}
                  >
                    <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                    <CardDescription className="text-pink-100">{member.role}</CardDescription>
                    <CardDescription className="text-pink-100 text-sm mt-1">{member.age} anos</CardDescription>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-16 inset-x-0 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {member.role.toLowerCase().includes("trainee") ? (
                      <div className="h-32 w-32 rounded-full bg-pink-400 flex items-center justify-center border-4 border-white text-white text-3xl font-bold">
                        {member.name
                          .split(" ")
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    ) : (
                      <Avatar className="h-32 w-32 border-4 border-white rounded-full">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-pink-200 text-pink-800 text-xl">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </motion.div>
                </div>
                <CardContent className="pt-20 pb-4 px-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 pb-6">
                  {member.social.twitter && (
                    <motion.a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="h-5 w-5" />
                    </motion.a>
                  )}
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      href={member.social.github}
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
