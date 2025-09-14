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
    id: 5,
    name: "Danniella dos Santos Silva",
    role: "Membra da equipe de Programação",
    bio: "20 anos, técnica em eletroeletrônica, atualmente em formação na área de back-end.",
    avatar: "/images/daniella.png",
    age: 20,
    social: {
      linkedin: "https://linkedin.com/in/danniella-santos-b95437298",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Isabella Ouverney",
    role: "Coordenadora de Projetos & R&S",
    bio: "Técnica em Mecânica e graduanda em Engenharia de Produção e Administração.",
    avatar: "/images/isabella.png",
    age: 22,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 8,
    name: "Lívia Galhardo de Oliveira Barros",
    role: "Vice-coordenadora do Discord e da Programação",
    bio: "17 anos, estudante do Ensino Médio, aspirante à neurociência e autora de artigos.",
    avatar: "/images/livia.png",
    age: 17,
    social: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/l%C3%ADvia-galhardo-de-oliveira-barros-603317216/",
    },
  },
  {
    id: 10,
    name: "Laura Passos de Oliveira",
    role: "Membra da equipe de Design",
    bio: "16 anos, estudante do 2º ano do Ensino Médio com experiência em criação de trabalhos escolares.",
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
    name: "Samilly",
    role: "Coordenadora de Oportunidades",
    bio: "Finalizando a graduação em Engenharia de Software. Atualmente, se dedicando a projetos e a concluir a graduação.",
    avatar: "/placeholder.svg?height=400&width=400&text=SA",
    age: 23,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 13,
    name: "Anna Elisa Viana Brasileiro",
    role: "Membra da equipe de Programação",
    bio: "24 anos, formada em Física e Pedagogia. Professora e mestranda em reatores nucleares. Participou de projetos em astronomia, ensino de física e fusão nuclear.",
    avatar: "/placeholder.svg?height=400&width=400&text=AE",
    age: 24,
    social: {
      linkedin: "https://www.linkedin.com/in/aevianabr/",
      github: "#",
    },
  },
  {
    id: 14,
    name: "Deise Ellen Santos de Oliveira",
    role: "Membra da equipe de Recrutamento & Seleção",
    bio: "Estudante de administração, com interesse em inovação e finanças.",
    avatar: "/placeholder.svg?height=400&width=400&text=DE",
    age: 22,
    social: {
      linkedin: "https://www.linkedin.com/in/deise-oliveira-067aaa200/",
      github: "#",
    },
  },
  {
    id: 15,
    name: "Giovanna Lima Garcia",
    role: "Membra da equipe de Recrutamento & Seleção",
    bio: "Técnica em administração e atualmente cursando Ciência da Computação, com foco em programação em Python e desenvolvimento de aplicações web.",
    avatar: "/placeholder.svg?height=400&width=400&text=GL",
    age: 20,
    social: {
      linkedin: "https://www.linkedin.com/in/giovanna-garcia-356682350",
      github: "#",
    },
  },
  {
    id: 16,
    name: "Emanuele Bellarosa",
    role: "Membra da equipe de Projetos",
    bio: "18 anos, cursando Ciência da Computação na UNESP. Sempre gostou de ciências e resolveu se desafiar na área tech. Nas horas vagas, gosta de ler.",
    avatar: "/placeholder.svg?height=400&width=400&text=EB",
    age: 18,
    social: {
      linkedin: "https://www.linkedin.com/in/emanuele-bellarosa-748098329",
      github: "#",
    },
  },
  {
    id: 17,
    name: "Julia Caldart Bulla",
    role: "Membra da equipe de Projetos",
    bio: "19 anos, futura estudante de Ciência da Computação na UCS, secretária e responsável pelo marketing em uma escola. Participou de programas como Aspire Leaders Program, LALA e bootcamp do Santander.",
    avatar: "/placeholder.svg?height=400&width=400&text=JC",
    age: 19,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 18,
    name: "Fernanda Aparecida de Toledo",
    role: "Membra da equipe de Projetos",
    bio: "Professora de Ciências e Biologia há 18 anos, formada em TI e com experiência em programação e projetos ágeis. Mãe de três meninas.",
    avatar: "/placeholder.svg?height=400&width=400&text=FA",
    age: 40,
    social: {
      linkedin: "https://www.linkedin.com/in/fernanda-aparecida-de-toledo-tecnologia-da-informacao/",
      github: "#",
    },
  },
  {
    id: 19,
    name: "Laura Camargo da Silva",
    role: "Membra da equipe de T&D",
    bio: "18 anos, técnica em TI, cursando Análise e Desenvolvimento de Sistemas.",
    avatar: "/placeholder.svg?height=400&width=400&text=LC",
    age: 18,
    social: {
      linkedin: "https://www.linkedin.com/in/lauracammargo/",
      github: "#",
    },
  },
  {
    id: 20,
    name: "Giovana Arantes Nunes",
    role: "Membra da equipe de Design",
    bio: "16 anos, designer voluntária em dois projetos e estudante do 2º ano do Ensino Médio.",
    avatar: "/placeholder.svg?height=400&width=400&text=GA",
    age: 16,
    social: {
      linkedin: "https://www.linkedin.com/in/giovana-arantes-447470332",
      github: "#",
    },
  },
  {
    id: 21,
    name: "Fernanda de Souza Pereira",
    role: "Membra da equipe de Projetos",
    bio: "21 anos, estudante de Engenharia da Computação e técnica em Informática. Atua nas áreas de Cibersegurança e DevSecOps.",
    avatar: "/placeholder.svg?height=400&width=400&text=FS",
    age: 21,
    social: {
      linkedin: "https://www.linkedin.com/in/fernanda-pereira-221207205",
      github: "#",
    },
  },
  {
    id: 22,
    name: "Fabiola",
    role: "Membra da equipe do Discord",
    bio: "Mora nos EUA, onde cursa high school e planeja estudar para ser piloto de voos comerciais. Acredita na importância da representatividade feminina no setor.",
    avatar: "/placeholder.svg?height=400&width=400&text=FA",
    age: 17,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 23,
    name: "Jenifer Osik",
    role: "Membra da equipe de Projetos",
    bio: "Desenvolvedora front-end há cinco anos. Atua com gestão de projetos, design e marketing. Gosta de unir criatividade e tecnologia.",
    avatar: "/placeholder.svg?height=400&width=400&text=JO",
    age: 27,
    social: {
      linkedin: "https://www.linkedin.com/in/jenifer-osik/",
      github: "#",
    },
  },
  {
    id: 24,
    name: "Amanda da Silva Alves",
    role: "Membra da equipe de Design",
    bio: "Estudante do técnico em Química no IFRJ.",
    avatar: "/placeholder.svg?height=400&width=400&text=AS",
    age: 18,
    social: {
      linkedin: "https://www.linkedin.com/in/amanda-alves-abb0aa344",
      github: "#",
    },
  },
  {
    id: 25,
    name: "Thayna Souza de Melo",
    role: "Membra da equipe de Projetos",
    bio: "20 anos, assistente administrativa em empresa de petróleo e cursando Técnico em Desenvolvimento de Sistemas. Interesse em banco de dados.",
    avatar: "/placeholder.svg?height=400&width=400&text=TS",
    age: 20,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 26,
    name: "Maria Eduarda Ferreira Costa",
    role: "Membra da equipe de Eventos e Parcerias",
    bio: "15 anos, alagoana, atua com robótica e pesquisa na escola.",
    avatar: "/placeholder.svg?height=400&width=400&text=ME",
    age: 15,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 27,
    name: "Lara Cavalcanti",
    role: "Membra da equipe de Eventos e Parcerias",
    bio: "16 anos, estudante do 3º ano do Ensino Médio, com interesse em engenharia e programação.",
    avatar: "/placeholder.svg?height=400&width=400&text=LC",
    age: 16,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 28,
    name: "Patricia Campos Oliveira",
    role: "Membra da equipe de T&D",
    bio: "32 anos.",
    avatar: "/placeholder.svg?height=400&width=400&text=PC",
    age: 32,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 29,
    name: "Thays Lira",
    role: "Membra da equipe de T&D",
    bio: "33 anos, Zootecnista, atualmente cursando Análise e Desenvolvimento de Sistemas.",
    avatar: "/placeholder.svg?height=400&width=400&text=TL",
    age: 33,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 30,
    name: "Ana Ester Brito",
    role: "Membra da equipe de Mídias e Design",
    bio: "18 anos, técnica em Química, atua em projetos de pesquisa e extensão voltados à ciência e educação.",
    avatar: "/placeholder.svg?height=400&width=400&text=AE",
    age: 18,
    social: {
      linkedin: "https://www.linkedin.com/in/anaesterlorena",
      github: "#",
    },
  },
  {
    id: 31,
    name: "Iarla",
    role: "Coordenadora de T&D",
    bio: "Coordenadora da equipe de Treinamento e Desenvolvimento.",
    avatar: "/placeholder.svg?height=400&width=400&text=IA",
    age: 25,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 32,
    name: "Emilli Nascimento",
    role: "Membra da equipe de Oportunidades",
    bio: "Membra da equipe de Oportunidades do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=EN",
    age: 22,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 33,
    name: "Ingrid Nambu",
    role: "Membra da equipe de Oportunidades",
    bio: "Membra da equipe de Oportunidades do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=IN",
    age: 20,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 34,
    name: "Letícia Pandolfi",
    role: "Membra da equipe de Oportunidades",
    bio: "Membra da equipe de Oportunidades do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=LP",
    age: 21,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 35,
    name: "Maria Luiza",
    role: "Membra da equipe de Oportunidades",
    bio: "Membra da equipe de Oportunidades do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=ML",
    age: 19,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 36,
    name: "Mariana Vieira",
    role: "Membra da equipe do Discord",
    bio: "Membra da equipe do Discord do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=MV",
    age: 20,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 37,
    name: "Mariane Andrade",
    role: "Membra da equipe do Discord",
    bio: "Membra da equipe do Discord do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=MA",
    age: 22,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 38,
    name: "Beatriz Alves",
    role: "Membra da equipe do Discord",
    bio: "Membra da equipe do Discord do STEM for Women.",
    avatar: "/placeholder.svg?height=400&width=400&text=BA",
    age: 19,
    social: {
      linkedin: "#",
      github: "#",
    },
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
