"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Users, Award, Sparkles, ChevronDown, Calendar, Clock, Star, BookOpen, Lightbulb } from "lucide-react"
import StarBackground from "@/components/star-background"
import WaveDivider from "@/components/wave-divider"

interface Participant {
  id: number
  name: string
  role: "mentora" | "aluna"
  area?: string
  photo?: string
  bio?: string
  linkedin?: string
}

interface Edition {
  id: number
  name: string
  year: number
  period: string
  description: string
  stats: {
    mentoras: number
    alunas: number
    horas: number
    projetos: number
  }
  participants: Participant[]
  highlights: string[]
}

const editions: Edition[] = [
  {
    id: 1,
    name: "1ª Edição",
    year: 2024,
    period: "Março - Junho 2024",
    description:
      "Nossa primeira edição foi um marco histórico! Com muito carinho e dedicação, reunimos mentoras experientes e alunas motivadas para uma jornada transformadora de aprendizado em tecnologia.",
    stats: {
      mentoras: 10,
      alunas: 45,
      horas: 120,
      projetos: 15,
    },
    participants: [
      // Mentoras
      {
        id: 1,
        name: "Ana Silva",
        role: "mentora",
        area: "Desenvolvimento Web",
        photo: "/placeholder.svg?height=100&width=100&text=AS",
        bio: "Senior Frontend Developer com 8 anos de experiência",
        linkedin: "#",
      },
      {
        id: 2,
        name: "Carla Santos",
        role: "mentora",
        area: "Data Science",
        photo: "/placeholder.svg?height=100&width=100&text=CS",
        bio: "Data Scientist especializada em Machine Learning",
        linkedin: "#",
      },
      {
        id: 3,
        name: "Fernanda Lima",
        role: "mentora",
        area: "UX/UI Design",
        photo: "/placeholder.svg?height=100&width=100&text=FL",
        bio: "UX Designer com foco em acessibilidade",
        linkedin: "#",
      },
      {
        id: 4,
        name: "Juliana Costa",
        role: "mentora",
        area: "Backend Development",
        photo: "/placeholder.svg?height=100&width=100&text=JC",
        bio: "Backend Engineer especializada em Node.js",
        linkedin: "#",
      },
      {
        id: 5,
        name: "Mariana Oliveira",
        role: "mentora",
        area: "DevOps",
        photo: "/placeholder.svg?height=100&width=100&text=MO",
        bio: "DevOps Engineer com expertise em AWS",
        linkedin: "#",
      },
      {
        id: 6,
        name: "Patricia Rocha",
        role: "mentora",
        area: "Mobile Development",
        photo: "/placeholder.svg?height=100&width=100&text=PR",
        bio: "Mobile Developer especializada em React Native",
        linkedin: "#",
      },
      {
        id: 7,
        name: "Roberta Alves",
        role: "mentora",
        area: "Cybersecurity",
        photo: "/placeholder.svg?height=100&width=100&text=RA",
        bio: "Security Analyst com certificações internacionais",
        linkedin: "#",
      },
      {
        id: 8,
        name: "Sabrina Martins",
        role: "mentora",
        area: "Product Management",
        photo: "/placeholder.svg?height=100&width=100&text=SM",
        bio: "Product Manager com experiência em startups",
        linkedin: "#",
      },
      {
        id: 9,
        name: "Tatiana Ferreira",
        role: "mentora",
        area: "Quality Assurance",
        photo: "/placeholder.svg?height=100&width=100&text=TF",
        bio: "QA Engineer especializada em automação de testes",
        linkedin: "#",
      },
      {
        id: 10,
        name: "Vanessa Souza",
        role: "mentora",
        area: "AI/ML",
        photo: "/placeholder.svg?height=100&width=100&text=VS",
        bio: "AI Researcher com PhD em Machine Learning",
        linkedin: "#",
      },
      // Alunas (algumas de exemplo)
      {
        id: 11,
        name: "Amanda Silva",
        role: "aluna",
        area: "Iniciante em Programação",
        photo: "/placeholder.svg?height=100&width=100&text=AS",
        bio: "Estudante de Ciência da Computação",
      },
      {
        id: 12,
        name: "Beatriz Costa",
        role: "aluna",
        area: "Transição de Carreira",
        photo: "/placeholder.svg?height=100&width=100&text=BC",
        bio: "Migrando da área de Marketing para Tech",
      },
      {
        id: 13,
        name: "Camila Santos",
        role: "aluna",
        area: "Desenvolvimento Web",
        photo: "/placeholder.svg?height=100&width=100&text=CS",
        bio: "Aprendendo React e Node.js",
      },
      {
        id: 14,
        name: "Diana Oliveira",
        role: "aluna",
        area: "Data Science",
        photo: "/placeholder.svg?height=100&width=100&text=DO",
        bio: "Interessada em análise de dados",
      },
      {
        id: 15,
        name: "Eduarda Lima",
        role: "aluna",
        area: "UX Design",
        photo: "/placeholder.svg?height=100&width=100&text=EL",
        bio: "Descobrindo o mundo do design",
      },
      // ... mais 40 alunas
    ],
    highlights: ["Primeira turma de mentoria em tecnologia", "Networking entre mulheres de diferentes áreas"],
  },
  {
    id: 2,
    name: "2ª Edição",
    year: 2025,
    period: "Em breve",
    description:
      "A segunda edição está sendo planejada com muito carinho! Em breve teremos mais informações sobre datas, inscrições e novidades.",
    stats: {
      mentoras: 0,
      alunas: 0,
      horas: 0,
      projetos: 0,
    },
    participants: [],
    highlights: [],
  },
]

export default function ChamaAsMina() {
  const [selectedEdition, setSelectedEdition] = useState<Edition>(editions[0])
  const [showAllParticipants, setShowAllParticipants] = useState(false)

  const mentoras = selectedEdition.participants.filter((p) => p.role === "mentora")
  const alunas = selectedEdition.participants.filter((p) => p.role === "aluna")

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-600 to-purple-900 text-white overflow-hidden">
        <StarBackground showRocket={true} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-8">{"# Chama as Mina"}</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16">
                {
                  "Uma iniciativa que busca empoderar mulheres em STEM através de mentoria, colaboração e formação técnica de qualidade."
                }
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider position="bottom" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre o Projeto</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O "Chama as Mina" é uma iniciativa que busca empoderar mulheres em STEM através de um programa
                estruturado de mentoria e formação técnica. Nossa primeira edição foi realizada com muito sucesso,
                baseada nos pilares de <strong>colaboração</strong>,<strong>acolhimento</strong> e{" "}
                <strong>formação</strong> de qualidade.
                <br />
                Tivemos o prazer de anunciar a parceria com o{" "}
                <a href="https://www.youtube.com/@LinuxTips" target="_blank" rel="noopener noreferrer">
                  Linux Tips
                </a>
                , que acreditou e apoiou nossa causa desde o início!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="text-center h-full border-none shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Colaboração</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Criamos um ambiente onde mentoras e alunas trabalham juntas, compartilhando conhecimentos e
                      experiências.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="text-center h-full border-none shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Acolhimento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Oferecemos um espaço seguro e inclusivo onde todas se sentem à vontade para aprender e crescer.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="text-center h-full border-none shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Formação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Proporcionamos formação técnica de qualidade com conteúdo atualizado e metodologia prática.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Edition Selection */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Selecione uma Edição</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {editions.map((edition) => (
                <Button
                  key={edition.id}
                  variant={selectedEdition.id === edition.id ? "default" : "outline"}
                  onClick={() => setSelectedEdition(edition)}
                  className={`${
                    selectedEdition.id === edition.id ? "bg-pink-600 hover:bg-pink-700" : "hover:bg-pink-50"
                  }`}
                >
                  {edition.name} ({edition.year})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Edition Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={selectedEdition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{selectedEdition.name}</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Badge variant="outline" className="text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedEdition.period}
                  </Badge>
                  {selectedEdition.id === 1 && (
                    <Badge variant="outline" className="text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {selectedEdition.stats.horas} horas de conteúdo
                    </Badge>
                  )}
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{selectedEdition.description}</p>
              </div>

              {selectedEdition.id === 2 ? (
                // Conteúdo "Em breve" para 2ª edição
                <div className="text-center py-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Sparkles className="h-16 w-16 text-pink-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Em Breve!</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Estamos trabalhando nos detalhes da segunda edição do Chama as Mina. Será ainda mais incrível que
                      a primeira!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-pink-50 p-6 rounded-lg">
                        <h4 className="font-bold text-pink-600 mb-2">Mais Mentoras</h4>
                        <p className="text-gray-600 text-sm">Expandindo nossa rede de mentoras especialistas</p>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="font-bold text-purple-600 mb-2">Novas Áreas</h4>
                        <p className="text-gray-600 text-sm">Incluindo mais especialidades em STEM</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-bold text-blue-600 mb-2">Mais Vagas</h4>
                        <p className="text-gray-600 text-sm">Oportunidade para mais mulheres participarem</p>
                      </div>
                    </div>
                    <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                      Quero ser notificada!
                    </Button>
                  </motion.div>
                </div>
              ) : (
                // Conteúdo normal para 1ª edição
                <>
                  {/* Highlights */}
                  {selectedEdition.highlights.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Destaques da Edição</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedEdition.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 bg-pink-50 p-4 rounded-lg"
                          >
                            <Star className="h-5 w-5 text-pink-600 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mentoras Section */}
                  {mentoras.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
                        <Award className="h-8 w-8 text-pink-600" />
                        Nossas Mentoras
                      </h3>
                      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                        Agradecemos às <strong>{mentoras.length} mentoras voluntárias</strong> que dedicaram seu tempo,
                        conhecimento e experiência para tornar este projeto possível.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {mentoras.map((mentora, index) => (
                          <motion.div
                            key={mentora.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                          >
                            <Card className="text-center h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                              <CardHeader className="pb-4">
                                <Avatar className="w-20 h-20 mx-auto mb-4">
                                  <AvatarImage src={mentora.photo || "/placeholder.svg"} alt={mentora.name} />
                                  <AvatarFallback className="bg-pink-100 text-pink-600 text-lg font-bold">
                                    {mentora.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-lg text-gray-800">{mentora.name}</CardTitle>
                                <CardDescription className="text-pink-600 font-medium">{mentora.area}</CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <p className="text-sm text-gray-600 mb-4">{mentora.bio}</p>
                                <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">
                                  <Lightbulb className="w-3 h-3 mr-1" />
                                  Mentora
                                </Badge>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Alunas Section */}
                  {alunas.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
                        <Sparkles className="h-8 w-8 text-purple-600" />
                        Nossas Alunas
                      </h3>
                      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                        Celebramos as <strong>{selectedEdition.stats.alunas} alunas participantes</strong> que se
                        esforçaram e cresceram juntas durante esta jornada transformadora.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {alunas.slice(0, showAllParticipants ? alunas.length : 8).map((aluna, index) => (
                          <motion.div
                            key={aluna.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                          >
                            <Card className="text-center h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                              <CardHeader className="pb-4">
                                <CardTitle className="text-lg text-gray-800">{aluna.name}</CardTitle>
                              </CardHeader>
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      {alunas.length > 8 && (
                        <div className="text-center mt-8">
                          <Button
                            variant="outline"
                            onClick={() => setShowAllParticipants(!showAllParticipants)}
                            className="hover:bg-purple-50"
                          >
                            {showAllParticipants ? "Ver menos" : `Ver todas as ${alunas.length} alunas`}
                            <ChevronDown
                              className={`ml-2 h-4 w-4 transition-transform ${showAllParticipants ? "rotate-180" : ""}`}
                            />
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agradecimentos */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">💝 Agradecimentos Especiais</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nosso reconhecimento às pessoas e equipes que tornaram a primeira edição do Chama as Mina uma realidade
              </p>
            </motion.div>

            {/* Teams Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Left Column - Teams */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-none shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-gray-800">Às Equipes que Tornaram Tudo Possível</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        icon: Heart,
                        color: "from-pink-500 to-rose-500",
                        title: "Equipe de Parcerias",
                        description: "Por conectar o projeto com empresas e organizações",
                      },
                      {
                        icon: Calendar,
                        color: "from-purple-500 to-indigo-500",
                        title: "Organização de Eventos",
                        description: "Por coordenar cada encontro com excelência",
                      },
                      {
                        icon: Sparkles,
                        color: "from-pink-500 to-purple-500",
                        title: "Equipe de Design",
                        description: "Por criar uma identidade visual inspiradora",
                      },
                      {
                        icon: Users,
                        color: "from-purple-500 to-pink-500",
                        title: "Recrutamento e Seleção (R&S)",
                        description: "Por encontrar as participantes ideais",
                      },
                    ].map((team, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-md transition-all duration-300"
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${team.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <team.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">{team.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{team.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Column - Recognition */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full border-none shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-gray-800">Nosso Reconhecimento</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-base">
                      Cada mentora, cada aluna, cada membro da equipe contribuiu para fazer da primeira edição do "Chama
                      as Mina" um sucesso extraordinário. Vocês são a prova de que quando mulheres se unem com um
                      propósito comum, podemos transformar não apenas nossas próprias vidas, mas toda uma comunidade.
                    </p>

                    {/* Quote Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="relative p-6 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 rounded-2xl border-l-4 border-pink-500 shadow-lg"
                    >
                      <div className="absolute top-4 left-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">"</span>
                      </div>
                      <blockquote className="text-gray-700 italic text-lg leading-relaxed pl-8">
                        Juntas somos mais fortes, juntas somos imparáveis, juntas construímos o futuro da tecnologia.
                      </blockquote>
                      <div className="flex items-center gap-2 mt-4 pl-8">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center"
                            >
                              <Heart className="h-4 w-4 text-white" />
                            </div>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 font-medium ml-2">— Equipe STEM for Women</span>
                      </div>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                        <div className="text-2xl font-bold text-pink-600 mb-1">10</div>
                        <div className="text-sm text-gray-600">Mentoras Voluntárias</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600 mb-1">45</div>
                        <div className="text-sm text-gray-600">Alunas Participantes</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <Card className="border-none shadow-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">🌟 Obrigada por Fazer a Diferença!</h3>
                  <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
                    Cada contribuição, por menor que seja, ajuda a construir um futuro mais inclusivo e diverso na
                    tecnologia.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-pink-600 hover:bg-pink-50 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Quero Participar da Próxima Edição
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Editions */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6">🚀 Próximas Edições</h2>
              <p className="text-xl text-white/90 mb-8">
                O sucesso da primeira edição nos motiva a continuar! Estamos planejando novas edições do "Chama as Mina"
                com ainda mais oportunidades, parcerias e impacto.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">2ª Edição</h3>
                  <p className="text-white/80">Em planejamento para 2025</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Mais Áreas</h3>
                  <p className="text-white/80">Expandindo para outras áreas STEM</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Mais Impacto</h3>
                  <p className="text-white/80">Alcançando ainda mais mulheres</p>
                </div>
              </div>
              <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 font-bold">
                Quero Participar da Próxima Edição
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
