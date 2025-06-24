"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Cog, Calculator, FileText, Video, Calendar, Briefcase, Shield } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

type ContentType = "livro" | "curso" | "artigo" | "evento" | "palestra" | "oportunidade"
type AreaType = "ciencia" | "tecnologia" | "engenharia" | "matematica" | "all"

interface ResourceItem {
  id: number
  title: string
  description: string
  type: ContentType
  area: AreaType
  link: string
  icon: JSX.Element
  details?: {
    duration: string
    level: string
    students: number
    rating: number
    features: string[]
  }
}

const resourceItems: ResourceItem[] = [
  {
    id: 1,
    title: "Introdução à Programação",
    description: "Curso básico de programação para iniciantes",
    type: "curso",
    area: "tecnologia",
    link: "#",
    icon: <Code className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Mulheres na Ciência",
    description: "Livro sobre a história das mulheres cientistas",
    type: "livro",
    area: "ciencia",
    link: "#",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Fundamentos de Cálculo",
    description: "Curso introdutório de cálculo diferencial",
    type: "curso",
    area: "matematica",
    link: "#",
    icon: <Calculator className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Conferência STEM 2025",
    description: "Evento anual sobre inovações em STEM",
    type: "evento",
    area: "all",
    link: "#",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "Robótica para Iniciantes",
    description: "Workshop prático de robótica",
    type: "palestra",
    area: "engenharia",
    link: "#",
    icon: <Cog className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "Estágio em Desenvolvimento Web",
    description: "Oportunidade para estudantes de tecnologia",
    type: "oportunidade",
    area: "tecnologia",
    link: "#",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: 7,
    title: "Inteligência Artificial e Ética",
    description: "Artigo sobre os desafios éticos da IA",
    type: "artigo",
    area: "tecnologia",
    link: "#",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: 8,
    title: "Física Quântica Explicada",
    description: "Série de vídeos sobre física quântica",
    type: "curso",
    area: "ciencia",
    link: "#",
    icon: <Video className="h-5 w-5" />,
  },
  {
    id: 9,
    title: "Fundamentos da Neurociência, Parte 1",
    description: "As propriedades elétricas no neurônio. Por HarvardX.",
    type: "curso",
    area: "ciencia",
    link: "https://www.edx.org/learn/neuroscience/harvard-university-fundamentals-of-neuroscience-part-1-the-electrical-properties-of-the-neuron",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "5 semanas, 3-5 horas por semana",
      level: "Iniciante",
      students: 628841,
      rating: 4.7,
      features: ["Certificado de conclusão", "Projetos práticos"],
    },
  },
  {
    id: 10,
    title: "Fundamentos da Neurociência, Parte 2",
    description: "Neurônios e Redes. Por HarvardX.",
    type: "curso",
    area: "ciencia",
    link: "https://www.edx.org/learn/neuroscience/harvard-university-fundamentals-of-neuroscience-part-2-neurons-and-networks",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "6 semanas, 3-5 horas por semana",
      level: "Iniciante",
      students: 119118,
      rating: 4.6,
      features: ["Certificado de conclusão", "Laboratórios virtuais", "Documentários"],
    },
  },
  {
    id: 11,
    title: "Fundamentos da Neurociência, Parte 3",
    description: "O Cérebro. Por HarvardX.",
    type: "curso",
    area: "ciencia",
    link: "https://www.edx.org/learn/neuroscience/harvard-university-fundamentals-of-neuroscience-part-3-the-brain",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "8 semanas, 3-5 horas por semana",
      level: "Iniciante",
      students: 131509,
      rating: 4.9,
      features: ["Certificado de conclusão", "Segmentos interativos", "Documentários"],
    },
  },
  {
    id: 12,
    title: "DelftX: O Hardware de um Computador Quântico",
    description: "Aprenda como um computador quântico pode ser fisicamente construído e controlado",
    type: "curso",
    area: "ciencia",
    link: "https://www.edx.org/learn/quantum-computing/delft-university-of-technology-the-hardware-of-a-quantum-computer",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "6 semanas, 6-8 horas por semana",
      level: "Intermediário",
      students: 29289,
      rating: 4.5,
      features: ["Certificado de conclusão", "Laboratórios virtuais", "Documentários"],
    },
  },
  {
    id: 13,
    title: "UChicago: Introdução à Computação Quântica para Todos",
    description: "Introdução intuitiva aos fenômenos da física quântica e algoritmos",
    type: "curso",
    area: "ciencia",
    link: "https://www.edx.org/learn/quantum-computing/university-of-chicago-introduction-to-quantum-computing-for-everyone",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "5 semanas, 3-5 horas por semana",
      level: "Introdutório",
      students: 23588,
      rating: 4.0,
      features: ["Certificado de conclusão"],
    },
  },
  {
    id: 14,
    title: "DelftX: Física Pré-Universitária",
    description: "Revise os fundamentos da física para interesse pessoal ou acadêmico",
    type: "curso",
    area: "ciencia",
    link: "https://www.edx.org/learn/physics/delft-university-of-technology-pre-university-physics",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "5 semanas, 6-8 horas por semana",
      level: "Introdutório",
      students: 32997,
      rating: 4.4,
      features: ["Certificado de conclusão"],
    },
  },
  {
    id: 15,
    title: "StanfordOnline: Mecânica Quântica para Cientistas e Engenheiros 1",
    description: "Introdução substancial à mecânica quântica e sua utilização",
    type: "curso",
    area: "ciencia",
    link: "https://www.edx.org/learn/quantum-physics-mechanics/stanford-university-quantum-mechanics-for-scientists-and-engineers-1",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "9 semanas, 5-10 horas por semana",
      level: "Intermediário",
      students: 40143,
      rating: 4.5,
      features: ["Certificado de conclusão"],
    },
  },
  {
    id: 16,
    title: "DoaneX: Introdução à Farmacologia",
    description: "Explorando o mecanismo de ação de medicamentos farmacêuticos em nível molecular",
    type: "curso",
    area: "ciencia",
    link: "https://www.edx.org/learn/medicine/doane-university-introduction-to-pharmacology",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "8 semanas, 10-12 horas por semana",
      level: "Introdutório",
      students: 31544,
      rating: 3.8,
      features: ["Certificado de conclusão"],
    },
  },
  {
    id: 17,
    title: "ANUx: Astrofísica: O Universo Violento",
    description: "Explore os lugares mais mortais do universo, de buracos negros a supernovas",
    type: "curso",
    area: "ciencia",
    link: "https://www.edx.org/learn/astrophysics/australian-national-university-astrophysics-the-violent-universe",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "10 semanas, 2-4 horas por semana",
      level: "Intermediário",
      students: 25000,
      rating: 4.8,
      features: ["Certificado de conclusão"],
    },
  },
  {
    id: 18,
    title: "Currículo de Desenvolvimento Full Stack Certificado",
    description: "Caminho abrangente para se tornar um Desenvolvedor Full Stack",
    type: "curso",
    area: "tecnologia",
    link: "https://www.freecodecamp.org/learn/full-stack-developer/",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "5 aulas lançadas",
      level: "Iniciante",
      students: 50000,
      rating: 4.8,
      features: ["Certificado de conclusão", "HTML", "CSS", "JavaScript", "Bibliotecas Front-End"],
    },
  },
  {
    id: 19,
    title: "Data Science Do Zero Primeiras Regras Com O Python",
    description: "Construa ferramentas e implemente algoritmos à mão para entendê-los melhor",
    type: "livro",
    area: "tecnologia",
    link: "https://archive.org/details/data-science-do-zero-primeiras-regras-com-o-python/page/n23/mode/2up",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "442 páginas",
      level: "Iniciante",
      students: 8000,
      rating: 4.5,
      features: ["Habilidades de hacker", "Conhecimento de estatística e matemática", "Competência Significativa"],
    },
  },
  {
    id: 20,
    title: "Aprendizado de máquina com Python",
    description: "Aplicações práticas usando TensorFlow para construir redes neurais",
    type: "curso",
    area: "tecnologia",
    link: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "10 tópicos de estudo",
      level: "Iniciante",
      students: 35000,
      rating: 4.6,
      features: ["Classificação e regressão", "Aprendizado supervisionado e não supervisionado", "TensorFlow"],
    },
  },
  {
    id: 21,
    title: "Treinamento de segurança cibernética ofensiva e defensiva",
    description: "Laboratórios práticos para todos os níveis, do iniciante ao hacker experiente",
    type: "curso",
    area: "tecnologia",
    link: "https://tryhackme.com/",
    icon: <Shield className="h-5 w-5" />,
    details: {
      duration: "14 desafios interativos",
      level: "Iniciante",
      students: 45000,
      rating: 4.9,
      features: ["Certificado de conclusão", "Aprenda fazendo", "Treinamento no mundo real"],
    },
  },
]

const getTypeColor = (type: ContentType) => {
  const colors = {
    livro: "bg-blue-100 text-blue-800",
    curso: "bg-green-100 text-green-800",
    artigo: "bg-yellow-100 text-yellow-800",
    evento: "bg-purple-100 text-purple-800",
    palestra: "bg-orange-100 text-orange-800",
    oportunidade: "bg-pink-100 text-pink-800",
  }
  return colors[type]
}

export default function Library() {
  const [selectedArea, setSelectedArea] = useState<AreaType>("all")
  const [selectedType, setSelectedType] = useState<ContentType | "all">("all")
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCardExpansion = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const filteredResources = resourceItems.filter((item) => {
    const areaMatch = selectedArea === "all" || item.area === selectedArea || item.area === "all"
    const typeMatch = selectedType === "all" || item.type === selectedType
    return areaMatch && typeMatch
  })

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white" id="library">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-purple-800 mb-4"
          >
            Biblioteca STEM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Explore nossa coleção de recursos gratuitos para aprendizado em ciência, tecnologia, engenharia e
            matemática.
          </motion.p>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-500">Filtrar por área:</h3>
                <TabsList className="bg-purple-50">
                  <TabsTrigger
                    value="all"
                    onClick={() => setSelectedArea("all")}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Todas
                  </TabsTrigger>
                  <TabsTrigger
                    value="ciencia"
                    onClick={() => setSelectedArea("ciencia")}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Ciência
                  </TabsTrigger>
                  <TabsTrigger
                    value="tecnologia"
                    onClick={() => setSelectedArea("tecnologia")}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Tecnologia
                  </TabsTrigger>
                  <TabsTrigger
                    value="engenharia"
                    onClick={() => setSelectedArea("engenharia")}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Engenharia
                  </TabsTrigger>
                  <TabsTrigger
                    value="matematica"
                    onClick={() => setSelectedArea("matematica")}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Matemática
                  </TabsTrigger>
                </TabsList>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-500">Filtrar por tipo:</h3>
                <TabsList className="bg-purple-50">
                  <TabsTrigger
                    value="all-types"
                    onClick={() => setSelectedType("all")}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Todos
                  </TabsTrigger>
                  <TabsTrigger
                    value="curso"
                    onClick={() => setSelectedType("curso")}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Cursos
                  </TabsTrigger>
                  <TabsTrigger
                    value="livro"
                    onClick={() => setSelectedType("livro")}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Livros
                  </TabsTrigger>
                  <TabsTrigger
                    value="evento"
                    onClick={() => setSelectedType("evento")}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Eventos
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredResources.map((resource) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -5 }}
                      className="h-full"
                    >
                      <Card className="h-full border-t-4 border-t-pink-500 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="bg-pink-50 p-2 rounded-full">{resource.icon}</div>
                            <Badge className={getTypeColor(resource.type)}>{resource.type}</Badge>
                          </div>
                          <CardTitle className="mt-3 text-xl">{resource.title}</CardTitle>
                          <CardDescription>{resource.description}</CardDescription>

                          {/* Conteúdo expandido */}
                          {expandedCard === resource.id && resource.details && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gray-100"
                            >
                              <div className="space-y-3 text-sm text-gray-600">
                                {resource.id === 9 && (
                                  <p className="font-medium">
                                    Curso que explora a estrutura e a função do Sistema Nervoso, é uma série de três
                                    cursos. Neste primeiro curso, será possível aprender como os neurônios utilizam
                                    eletricidade para transmitir informações.
                                  </p>
                                )}

                                {resource.id === 10 && (
                                  <p className="font-medium">
                                    Descubra como os neurônios trabalham juntos para criar redes complexas dentro do
                                    cérebro. Examinamos como os neurônios transmitem sinais uns aos outros e como
                                    dinâmicas complexas podem resultar de apenas alguns neurônios dispostos em circuitos
                                    simples.
                                  </p>
                                )}

                                {resource.id === 11 && (
                                  <p className="font-medium">
                                    Descubra o que faz seu cérebro funcionar neste terceiro curso da série introdutória
                                    em neurociência. Será explorado como os vários subsistemas do cérebro trabalham em
                                    conjunto para nos permitir sobreviver e prosperar em um mundo em constante mudança.
                                  </p>
                                )}

                                {resource.id === 17 && (
                                  <p className="font-medium">
                                    Explore os lugares mais mortais do universo, de buracos negros a supernovas. Estude
                                    estrelas anãs brancas e estrelas de nêutrons, onde as leis da mecânica quântica
                                    colidem com a relatividade. Examine novas anãs, supernovas e hipernovas: as
                                    explosões mais violentas do cosmos.
                                  </p>
                                )}

                                {resource.id === 18 && (
                                  <p className="font-medium">
                                    Oferece um caminho abrangente para se tornar um Desenvolvedor Full Stack
                                    Certificado, abrangendo todas as tecnologias essenciais necessárias para criar
                                    aplicativos web modernos e escaláveis do início ao fim.
                                  </p>
                                )}

                                {resource.id === 19 && (
                                  <p className="font-medium">
                                    Neste livro, será abordado data science do zero. Significa que será construído por
                                    você ferramentas e irá implementar algoritmos à mão, com o objetivo de entendê-los
                                    melhor.
                                  </p>
                                )}

                                {resource.id === 20 && (
                                  <p className="font-medium">
                                    Aplicações práticas que podem ser usadas em projetos e trabalhos. Será utilizado a
                                    estrutura TensorFlow para construir diversas redes neurais e explorar técnicas mais
                                    avançadas, como processamento de linguagem natural e aprendizado por reforço.
                                  </p>
                                )}

                                {resource.id === 21 && (
                                  <p className="font-medium">
                                    Acesse mais de 900 laboratórios de treinamento e caminhos de aprendizagem adequados
                                    para todos os níveis, do iniciante ao hacker experiente. O TryHackMe torna o
                                    aprendizado envolvente, divertido, acessível e econômico.
                                  </p>
                                )}

                                {resource.details.duration && (
                                  <div className="flex items-start gap-2">
                                    <span className="font-semibold">Duração:</span>
                                    <span>{resource.details.duration}</span>
                                  </div>
                                )}

                                {resource.details.level && (
                                  <div className="flex items-start gap-2">
                                    <span className="font-semibold">Nível:</span>
                                    <span>{resource.details.level}</span>
                                  </div>
                                )}

                                {resource.details.students && (
                                  <div className="flex items-start gap-2">
                                    <span className="font-semibold">Participantes:</span>
                                    <span>{resource.details.students.toLocaleString()} alunos</span>
                                  </div>
                                )}

                                {resource.details.rating && (
                                  <div className="flex items-start gap-2">
                                    <span className="font-semibold">Avaliação média:</span>
                                    <span>⭐ {resource.details.rating} / 5.0</span>
                                  </div>
                                )}

                                {resource.id === 10 && (
                                  <div>
                                    <span className="font-semibold">Você vai aprender:</span>
                                    <ul className="mt-1 space-y-1">
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Noções básicas de sinapses</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Como os neurônios se comunicam entre si</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>
                                          Como os neurônios interconectados em circuitos neuronais interagem entre si
                                        </span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>O papel da neuromodulação no disparo das sinapses</span>
                                      </li>
                                    </ul>
                                  </div>
                                )}

                                {resource.id === 11 && (
                                  <div>
                                    <span className="font-semibold">Você vai aprender:</span>
                                    <ul className="mt-1 space-y-1">
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Como a percepção sensorial funciona no cérebro</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>
                                          Como funciona a fisiologia da visão, audição, paladar, olfato, tato, controle
                                          motor e outros sentidos
                                        </span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Anatomia básica das áreas funcionais do cérebro</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>O sistema visual do cérebro</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>
                                          Como os subsistemas motores do cérebro executam e coordenam nossos movimentos
                                        </span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Os sistemas cerebrais críticos que nos mantêm vivos</span>
                                      </li>
                                    </ul>
                                  </div>
                                )}

                                {resource.id === 17 && (
                                  <div>
                                    <span className="font-semibold">Você vai aprender:</span>
                                    <ul className="mt-1 space-y-1">
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>
                                          Uma compreensão das anãs brancas, novas, supernovas, estrelas de nêutrons e
                                          buracos negros
                                        </span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>
                                          Como os princípios físicos, incluindo a mecânica quântica e a relatividade,
                                          ajudam a explicar esses objetos bizarros
                                        </span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Como os astrofísicos modernos investigam esses mistérios</span>
                                      </li>
                                    </ul>
                                  </div>
                                )}

                                {resource.id === 18 && (
                                  <div>
                                    <span className="font-semibold">Você vai aprender:</span>
                                    <ul className="mt-1 space-y-1">
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>HTML</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>CSS</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>JavaScript</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Bibliotecas Front-End</span>
                                      </li>
                                    </ul>
                                  </div>
                                )}

                                {resource.id === 19 && (
                                  <div>
                                    <span className="font-semibold">Você vai aprender:</span>
                                    <ul className="mt-1 space-y-1">
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Habilidades de hacker</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Conhecimento de estatística e matemática</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Competência Significativa</span>
                                      </li>
                                    </ul>
                                  </div>
                                )}

                                {resource.id === 20 && (
                                  <div>
                                    <span className="font-semibold">Você vai aprender:</span>
                                    <ul className="mt-1 space-y-1">
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>A diferença entre aprendizado e lista de instruções</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Computadores que aprendem são superiores</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Como a máquina aprende, dados de treinos e testes</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Problemas de classificação e de regressão</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Aprendizado supervisionado ou não supervisionado</span>
                                      </li>
                                    </ul>
                                  </div>
                                )}

                                {resource.id === 21 && (
                                  <div>
                                    <span className="font-semibold">Você vai aprender:</span>
                                    <ul className="mt-1 space-y-1">
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Segurança cibernética 101</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Pré-segurança</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>SOC Nível 1</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Testador de Penetração Jr.</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Path de Equipe Vermelha</span>
                                      </li>
                                    </ul>
                                  </div>
                                )}

                                {resource.details.features && resource.details.features.length > 0 && (
                                  <div>
                                    <span className="font-semibold">Inclui:</span>
                                    <ul className="mt-1 space-y-1">
                                      {resource.details.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <span className="text-green-500">✅</span>
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </CardHeader>

                        <CardFooter className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-white text-black hover:bg-gray-100"
                            onClick={() => toggleCardExpansion(resource.id)}
                          >
                            {expandedCard === resource.id ? "Ver menos" : "Ver mais"}
                          </Button>

                          <Button
                            variant="default"
                            size="sm"
                            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white"
                            onClick={() => window.open(resource.link, "_blank")}
                          >
                            Acessar
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
