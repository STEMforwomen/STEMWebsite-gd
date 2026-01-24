"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Lightbulb, MessageSquare, Heart, Users } from "lucide-react"
import Team from "@/components/team"
import StarBackground from "@/components/star-background"
import WaveDivider from "@/components/wave-divider"
import ValueCard from "@/components/value-card"
import WorldMap from "@/components/world-map"
import Image from "next/image"

const timelineEvents = [
  {
    year: "2023",
    title: "Fundação do Projeto",
    description:
      "Nasce o STEM for Women, com o propósito de oferecer educação gratuita em tecnologia para meninas de todo o Brasil. Começamos com muito entusiasmo e o desejo de construir uma comunidade acolhedora, diversa e transformadora.",
  },
  {
    year: "2024",
    title: "Crescimento da Equipe",
    description:
      "O projeto começa a ganhar força e atrai pessoas com o mesmo propósito. Formamos uma equipe com 20 voluntárias engajadas em tornar a tecnologia mais acessível para meninas.",
  },
  {
    year: "Março 2025",
    title: "Início dos Cursos e Mentorias",
    description:
      "Firmamos uma parceria com o Linux Tips e demos início aos primeiros cursos e mentorias para meninas interessadas em programação e outras áreas de STEM.",
  },
  {
    year: "Abril 2025",
    title: "500 Meninas Alcançadas",
    description:
      "Alcançamos 500 meninas na nossa comunidade no Discord! Um marco importante na nossa missão de criar um espaço seguro e motivador para meninas aprenderem, trocarem experiências e se inspirarem.",
  },
]

const odsItems = [
  {
    number: 4,
    title: "Educação de Qualidade",
    description:
      "Garantir educação inclusiva e equitativa de qualidade para promover oportunidades de aprendizagem ao longo da vida para todos. Acreditamos que a educação é a base para melhorar a vida das pessoas e o desenvolvimento sustentável.",
    icon: <BookOpen className="h-8 w-8 text-pink-500" />,
    image: "/images/educacao.png",
  },
  {
    number: 5,
    title: "Igualdade de Gênero",
    description:
      "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas. Trabalhamos para eliminar todas as formas de discriminação e violência contra mulheres e meninas, garantindo sua participação plena e efetiva em todos os níveis de tomada de decisão.",
    icon: <Lightbulb className="h-8 w-8 text-pink-500" />,
    image: "/images/igualdade-de-genero.jpeg",
  },
]

const values = [
  {
    title: "Inclusão",
    description: "STEM deve ser um espaço para todas, independentemente de origem, idade ou condição social.",
    icon: <Users className="h-6 w-6" />,
    color: "purple" as const,
  },
  {
    title: "Educação",
    description:
      "O acesso ao conhecimento transforma vidas, e queremos garantir que mais mulheres tenham essa oportunidade.",
    icon: <BookOpen className="h-6 w-6" />,
    color: "pink" as const,
  },
  {
    title: "Comunidade",
    description:
      "Ninguém cresce sozinha. Criamos uma rede onde mulheres podem se conectar, trocar experiências e se fortalecer juntas.",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "purple" as const,
  },
  {
    title: "Representatividade",
    description: "Queremos que mais mulheres se vejam em posições de liderança, inovação e impacto na área de STEM.",
    icon: <Heart className="h-6 w-6" />,
    color: "pink" as const,
  },
]

export default function SobrePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-[#b91c77] to-[#3a0f60] text-white">
        <StarBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Sobre o STEM for Women</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Conheça nossa história, missão e as pessoas por trás do projeto que está transformando a educação STEM
              para meninas e mulheres.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider position="bottom" />
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900" id="quem-somos">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#b91c77] dark:text-pink-400 mb-4">
                Visões e Valores
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Conheça melhor nosso projeto e os princípios que guiam nossas ações para promover a inclusão de mulheres
                nas áreas STEM.
              </p>
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-[#b91c77] rounded-full"></div>
              </div>
            </motion.div>

            {/* Reorganizado para 2 em cima e 2 embaixo */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              <ValueCard
                icon={values[0].icon}
                title={values[0].title}
                description={values[0].description}
                color={values[0].color}
              />
              <ValueCard
                icon={values[1].icon}
                title={values[1].title}
                description={values[1].description}
                color={values[1].color}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              <ValueCard
                icon={values[2].icon}
                title={values[2].title}
                description={values[2].description}
                color={values[2].color}
              />
              <ValueCard
                icon={values[3].icon}
                title={values[3].title}
                description={values[3].description}
                color={values[3].color}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-20">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                Objetivos de Desenvolvimento Sustentável
              </h3>
              <div className="space-y-8">
                {odsItems.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-48 w-full rounded-lg overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={`ODS ${item.number}: ${item.title}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#b91c77]/70 to-transparent flex items-end p-4">
                            <span className="text-white font-bold text-xl">ODS {item.number}</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-full">{item.icon}</div>
                          <h4 className="font-bold text-xl text-gray-800 dark:text-gray-100">{item.title}</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
                🌟 Nossa Trajetória
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200 dark:bg-pink-800 rounded-full"></div>

                {/* Timeline events */}
                <div className="space-y-12">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-pink-100 dark:border-pink-800/30">
                          <h4 className="font-bold text-[#b91c77] dark:text-pink-400 mb-1">{event.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{event.description}</p>
                        </div>
                      </div>

                      <div className="z-10 flex items-center justify-center w-10 h-10 bg-[#b91c77] rounded-full border-4 border-white dark:border-gray-900 shadow-md">
                        <span className="text-xs font-bold text-white">{event.year}</span>
                      </div>

                      <div className="w-1/2"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <WorldMap />

      <Team />
    </main>
  )
}
