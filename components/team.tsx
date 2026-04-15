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
    role: "Fundadora, Coordenadora do Discord & Programacao",
    bio: "Estudante de Programacao e Inteligencia Artificial, autodidata e vestibulanda de Ciencia da Computacao/Matematica.",
    avatar: "/images/riany.png",
    age: 19,
    social: {},
  },
  {
    id: 2,
    name: "Giovanna",
    role: "Co-fundadora & Coordenadora de Eventos",
    bio: "Vestibulanda com foco em Ciencia de dados com enfase em desenvolvimento de aplicativos.",
    avatar: "/images/giovanna.png",
    age: 18,
    social: {},
  },
  {
    id: 5,
    name: "Danniella dos Santos Silva",
    role: "Membra da equipe de Programacao",
    bio: "Tecnica em eletroeletronica, atualmente em formacao na area de back-end.",
    avatar: "/images/daniella-nova.png",
    age: 20,
    social: {
      linkedin: "https://linkedin.com/in/danniella-santos-b95437298",
    },
  },
  {
    id: 6,
    name: "Isabella Ouverney",
    role: "Coordenadora de Projetos & R&S",
    bio: "Tecnica em Mecanica e graduanda em Engenharia de Producao e Administracao.",
    avatar: "/images/isabella.png",
    age: 22,
    social: {},
  },
  {
    id: 8,
    name: "Livia Galhardo de Oliveira Barros",
    role: "Vice-coordenadora do Discord e da Programacao",
    bio: "Cursando o ultimo ano do Ensino Medio, aspirante a neurociencia, escrevendo artigos.",
    avatar: "/images/livia-nova.png",
    age: 17,
    social: {
      linkedin: "https://www.linkedin.com/in/l%C3%ADvia-galhardo-de-oliveira-barros-603317216/",
    },
  },
  {
    id: 10,
    name: "Laura Passos de Oliveira",
    role: "Membra da equipe de Design",
    bio: "Criacao de trabalhos escolares, cursando 2 ano do Ensino Medio.",
    avatar: "/images/laura-passos.png",
    age: 16,
    social: {},
  },
  {
    id: 11,
    name: "Romania",
    role: "Coordenadora de Marketing & Midias Sociais",
    bio: "+20 anos de mercado de trabalho. Ha 5 anos, migrou para area da tecnologia, desenvolvedora frontEnd formada pela reprograma.",
    avatar: "/images/romania-nova.png",
    age: 42,
    social: {},
  },
  {
    id: 12,
    name: "Samilly",
    role: "Coordenadora de Oportunidades",
    bio: "Finalizando a graduacao em Engenharia de Software. Atualmente, se dedicando a projetos e a concluir a graduacao.",
    avatar: "/placeholder.svg?height=400&width=400&text=SA",
    age: 23,
    social: {},
  },
  {
    id: 13,
    name: "Anna Elisa Viana Brasileiro",
    role: "Membra da equipe de Programacao",
    bio: "Professora e mestranda na area de reatores nucleares. Experiencia em aerodesign, apagador quantico, astronomia, ensino de fisica e sistemas de refrigeracao em reatores de fusao.",
    avatar: "/images/anna-elisa.png",
    age: 24,
    social: {
      linkedin: "https://www.linkedin.com/in/aevianabr/",
    },
  },
  {
    id: 14,
    name: "Deise Ellen Santos de Oliveira",
    role: "Membra da equipe de R&S",
    bio: "Estudante de administracao, com interesse em inovacao e financas.",
    avatar: "/images/deise.png",
    age: 23,
    social: {
      linkedin: "https://www.linkedin.com/in/deise-oliveira-067aaa200/",
    },
  },
  {
    id: 15,
    name: "Giovanna Lima Garcia",
    role: "Membra da equipe de R&S",
    bio: "Tecnica em administracao, cursando Ciencia da Computacao, com foco em Python e desenvolvimento web.",
    avatar: "/images/giovana-lima.png",
    age: 18,
    social: {
      linkedin: "https://www.linkedin.com/in/giovanna-garcia-356682350",
    },
  },
  {
    id: 16,
    name: "Emanuele Bellarosa",
    role: "Membra da equipe de Projetos",
    bio: "Curso Ciencia da Computacao na UNESP. Sempre gostei de ciencias e resolvi me desafiar com uma graduacao na area tech. Quando nao estou programando, gosto de ler um bom livro.",
    avatar: "/images/emanuelle.png",
    age: 18,
    social: {
      linkedin: "https://www.linkedin.com/in/emanuele-bellarosa-748098329",
    },
  },
  {
    id: 17,
    name: "Julia Caldart Bulla",
    role: "Membra da equipe de Projetos",
    bio: "Recem formada no ensino medio. Estudante de Ciencias da Computacao, apaixonada por lideranca, projetos de inovacao e programas de desenvolvimento.",
    avatar: "/placeholder.svg?height=400&width=400&text=JC",
    age: 19,
    social: {},
  },
  {
    id: 18,
    name: "Fernanda Aparecida de Toledo",
    role: "Membra da equipe de Projetos",
    bio: "Professora de Ciencias e Biologia, segunda graduacao em TI. Experiencia em programacao e desenvolvimento de projetos ageis.",
    avatar: "/placeholder.svg?height=400&width=400&text=FA",
    age: 40,
    social: {
      linkedin: "https://www.linkedin.com/in/fernanda-aparecida-de-toledo-tecnologia-da-informacao/",
    },
  },
  {
    id: 19,
    name: "Laura Camargo da Silva",
    role: "Membra da equipe de T&D",
    bio: "Tecnica em Tecnologia da Informacao e cursando Analise e Desenvolvimento de Sistemas.",
    avatar: "/placeholder.svg?height=400&width=400&text=LC",
    age: 18,
    social: {
      linkedin: "https://www.linkedin.com/in/lauracammargo/",
    },
  },
  {
    id: 20,
    name: "Giovana Arantes Nunes",
    role: "Membra da equipe de Design",
    bio: "Designer voluntaria em dois projetos, estudante do 2 ano do Ensino Medio.",
    avatar: "/images/giovana-arantes.png",
    age: 16,
    social: {
      linkedin: "https://www.linkedin.com/in/giovana-arantes-447470332",
    },
  },
  {
    id: 21,
    name: "Fernanda de Souza Pereira",
    role: "Membra da equipe de Projetos",
    bio: "Estudante de engenharia da computacao e tecnico em informatica. Aprendendo areas como Ciberseguranca e DevSecOps.",
    avatar: "/placeholder.svg?height=400&width=400&text=FS",
    age: 21,
    social: {
      linkedin: "https://www.linkedin.com/in/fernanda-pereira-221207205",
    },
  },
  {
    id: 22,
    name: "Fabiola",
    role: "Membra da equipe de Discord",
    bio: "Recem-chegada ao USA para High School e faculdade futura. Interesse em aviacao comercial, especialmente por ser um meio predominantemente masculino.",
    avatar: "/placeholder.svg?height=400&width=400&text=FA",
    age: 17,
    social: {},
  },
  {
    id: 23,
    name: "Jenifer Osik",
    role: "Membra da equipe de Projetos",
    bio: "Desenvolvedora front-end ha cinco anos, tambem atua com gestao de projetos, design e marketing.",
    avatar: "/images/jenifer.png",
    age: 27,
    social: {
      linkedin: "https://www.linkedin.com/in/jenifer-osik/",
    },
  },
  {
    id: 24,
    name: "Amanda da Silva Alves",
    role: "Membra da equipe de Design",
    bio: "Atualmente cursando tecnico em Quimica no IFRJ.",
    avatar: "/images/amanda-silva-alves.png",
    age: 18,
    social: {
      linkedin: "https://www.linkedin.com/in/amanda-alves-abb0aa344",
    },
  },
  {
    id: 25,
    name: "Thayna Souza de Melo",
    role: "Membra da equipe de Projetos",
    bio: "Assistente Administrativo Junior e cursando Tecnico em Desenvolvimento de Sistemas. Interesse em tecnologia e bancos de dados.",
    avatar: "/placeholder.svg?height=400&width=400&text=TS",
    age: 20,
    social: {},
  },
  {
    id: 26,
    name: "Mharia Eduarda Ferreira Costa",
    role: "Membra da equipe de Eventos e Parcerias",
    bio: "Trabalha com robotica e pesquisa dentro da escola.",
    avatar: "/images/mharia-eduarda.png",
    age: 15,
    social: {},
  },
  {
    id: 27,
    name: "Lara Cavalcanti",
    role: "Membra da equipe de Eventos e Parcerias",
    bio: "Estudante do terceiro ano do Ensino Medio, interesse em engenharia e programacao.",
    avatar: "/images/lara-cavalcanti.png",
    age: 16,
    social: {},
  },
  {
    id: 28,
    name: "Patricia Campos Oliveira",
    role: "Membra da equipe de T&D",
    bio: "Membra da equipe de Treinamento e Desenvolvimento.",
    avatar: "/images/patricia-campos.png",
    age: 32,
    social: {},
  },
  {
    id: 29,
    name: "Thays Lira",
    role: "Membra da equipe",
    bio: "Zootecnista, cursando Analise e Desenvolvimento de Sistemas.",
    avatar: "/images/thays-lira.png",
    age: 33,
    social: {},
  },
  {
    id: 30,
    name: "Ana Ester Brito",
    role: "Membra da equipe",
    bio: "Tecnica em quimica, participa ativamente de projetos de pesquisa e extensao voltados a ciencia e a educacao.",
    avatar: "/images/ana-ester-brito.png",
    age: 18,
    social: {},
  },
  {
    id: 31,
    name: "Iarla",
    role: "Coordenadora de T&D",
    bio: "Coordenadora da equipe de Treinamento e Desenvolvimento.",
    avatar: "/placeholder.svg?height=400&width=400&text=IA",
    age: 25,
    social: {},
  },
  {
    id: 32,
    name: "Emilli Nascimento",
    role: "Membra da equipe de Oportunidades",
    bio: "Membra da equipe de Oportunidades do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=EN",
    age: 22,
    social: {},
  },
  {
    id: 33,
    name: "Ingrid Nambu",
    role: "Membra da equipe de Oportunidades",
    bio: "Membra da equipe de Oportunidades do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=IN",
    age: 20,
    social: {},
  },
  {
    id: 34,
    name: "Leticia Pandolfi",
    role: "Membra da equipe de Oportunidades",
    bio: "Membra da equipe de Oportunidades do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=LP",
    age: 21,
    social: {},
  },
  {
    id: 35,
    name: "Maria Luiza",
    role: "Membra da equipe de Oportunidades",
    bio: "Membra da equipe de Oportunidades do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=ML",
    age: 19,
    social: {},
  },
  {
    id: 36,
    name: "Mariana Vieira",
    role: "Membra da equipe do Discord",
    bio: "Membra da equipe do Discord do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=MV",
    age: 20,
    social: {},
  },
  {
    id: 37,
    name: "Mariane Andrade",
    role: "Membra da equipe do Discord",
    bio: "Membra da equipe do Discord do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=MA",
    age: 22,
    social: {},
  },
  {
    id: 38,
    name: "Beatriz Alves",
    role: "Membra da equipe do Discord",
    bio: "Membra da equipe do Discord do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=BA",
    age: 19,
    social: {},
  },
]

const exMembers: TeamMember[] = [
  {
    id: 101,
    name: "Suami Rocha",
    role: "Ex-Designer",
    bio: "Formada em Análise e Desenvolvimento de Sistemas e Design Gráfico, com foco em Product Design.",
    avatar: "/images/suami.png",
    age: 26,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 102,
    name: "Tâmara Cedraz",
    role: "Ex-Estrategista de Melhorias no Discord",
    bio: "Graduada em Terapia Ocupacional, Especialista em Saúde Pública (Saúde da família e Saúde do trabalhador) com interesse em saúde e tecnologia.",
    avatar: "/images/tamita.png",
    age: 28,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 103,
    name: "Fernanda Dantas",
    role: "Ex-Membra da Equipe de Eventos",
    bio: "Estudante do 3º ano do ensino médio e vestibulanda de Comunicação - RP (Relações Públicas).",
    avatar: "/images/fernanda.novo.png",
    age: 17,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 104,
    name: "Marcela Amorim",
    role: "Ex-Coordenadora de Gestão de Parcerias",
    bio: "Graduada em Análise e Desenvolvimento de Sistemas (ADS) pela FATEC e especialista em Qualidade de Software.",
    avatar: "/images/marcela.png",
    age: 24,
    social: {
      twitter: "#",
      github: "#",
    },
  },
]

export default function Team() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const [showExMembers, setShowExMembers] = useState(false)

  // Definir as equipes
  const teams = {
    programacao: [1, 5, 8, 13], // Riany, Danniella, Lívia, Anna Elisa
    midias: [11, 10, 20, 24, 30], // Romênia, Laura, Giovana Arantes, Amanda, Ana Ester
    eventos: [2, 26, 27], // Giovanna, Maria Eduarda, Lara
    oportunidades: [12, 32, 33, 34, 35], // Samilly, Emilli, Ingrid, Letícia, Maria Luiza
    projetos: [6, 16, 17, 18, 21, 23, 25], // Isabella, Emanuele, Julia, Fernanda Toledo, Fernanda Pereira, Jenifer, Thayna
    recrutamento: [6, 14, 15], // Isabella, Deise, Giovanna Garcia
    td: [19, 28, 29, 31], // Laura Camargo, Patricia, Thays, Iarla
    discord: [1, 8, 22, 36, 37, 38], // Riany, Lívia, Fabiola, Mariana, Mariane, Beatriz
  }

  // Filtrar membros com base no filtro selecionado
  const filteredMembers = filter
    ? teamMembers.filter((member) => {
        if (filter === "programacao") return teams.programacao.includes(member.id)
        if (filter === "midias") return teams.midias.includes(member.id)
        if (filter === "eventos") return teams.eventos.includes(member.id)
        if (filter === "oportunidades") return teams.oportunidades.includes(member.id)
        if (filter === "projetos") return teams.projetos.includes(member.id)
        if (filter === "recrutamento") return teams.recrutamento.includes(member.id)
        if (filter === "td") return teams.td.includes(member.id)
        if (filter === "discord") return teams.discord.includes(member.id)
        return true
      })
    : teamMembers

  const displayMembers = showExMembers ? exMembers : filteredMembers

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

          {/* Toggle para Ex-membras */}
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowExMembers(!showExMembers)}
              className="px-6 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
            >
              {showExMembers ? "Ver Equipe Atual" : "Ver Ex-Membras"}
            </button>
          </div>

          {/* Filtros */}
          {!showExMembers && (
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
                Programação
              </button>
              <button
                onClick={() => setFilter("midias")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "midias" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Mídias e Design
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
                Oportunidades
              </button>
              <button
                onClick={() => setFilter("projetos")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "projetos" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Projetos
              </button>
              <button
                onClick={() => setFilter("recrutamento")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "recrutamento" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                R&S
              </button>
              <button
                onClick={() => setFilter("td")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "td" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                T&D
              </button>
              <button
                onClick={() => setFilter("discord")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === "discord" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Discord
              </button>
            </div>
          )}
        </div>

        {!showExMembers && (
          <TeamIllustration linkedInUrl="https://www.linkedin.com/in/ana-beatriz-daltro-santos-1a3960344/" />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayMembers.map((member) => (
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
              <Card className={`overflow-hidden border-none shadow-lg h-full ${showExMembers ? "opacity-75" : ""}`}>
                <div className="relative">
                  <motion.div
                    className={`${showExMembers ? "bg-gradient-to-r from-gray-400 to-gray-600" : "bg-gradient-to-r from-pink-500 to-purple-600"} pt-6 pb-24 px-6 text-white`}
                    whileHover={{
                      background: showExMembers
                        ? "linear-gradient(to right, #6b7280, #4b5563, #6b7280)"
                        : "linear-gradient(to right, #ec4899, #8b5cf6, #ec4899)",
                      backgroundSize: "200% 100%",
                      backgroundPosition: activeId === member.id ? "100% 0%" : "0% 0%",
                    }}
                    transition={{ duration: 1.5 }}
                  >
                    <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                    <CardDescription className={`${showExMembers ? "text-gray-100" : "text-pink-100"}`}>
                      {member.role}
                    </CardDescription>
                    <CardDescription className={`${showExMembers ? "text-gray-100" : "text-pink-100"} text-sm mt-1`}>
                      {member.age} anos
                    </CardDescription>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-16 inset-x-0 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Avatar className="h-32 w-32 border-4 border-white rounded-full">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback
                        className={`${showExMembers ? "bg-gray-200 text-gray-800" : "bg-pink-200 text-pink-800"} text-xl`}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>
                <CardContent className="pt-20 pb-4 px-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 pb-6">
                  {member.social.twitter && member.social.twitter !== "#" && (
                    <motion.a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="h-5 w-5" />
                    </motion.a>
                  )}
                  {member.social.linkedin && member.social.linkedin !== "#" && (
                    <motion.a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  )}
                  {member.social.github && member.social.github !== "#" && (
                    <motion.a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
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
