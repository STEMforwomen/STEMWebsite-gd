"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Code, Lightbulb, Calculator } from "lucide-react"

const timelineEvents = [
  {
    year: "2020",
    title: "Fundação do Projeto",
    description: "Início das atividades com foco em programação para meninas",
  },
  {
    year: "2021",
    title: "Expansão para STEM",
    description: "Ampliação do escopo para todas as áreas STEM",
  },
  {
    year: "2022",
    title: "Primeira Conferência",
    description: "Realização do primeiro evento nacional",
  },
  {
    year: "2023",
    title: "Parcerias Internacionais",
    description: "Colaboração com organizações globais",
  },
  {
    year: "2024",
    title: "Plataforma de Conteúdo",
    description: "Lançamento da biblioteca digital de recursos",
  },
]

const odsItems = [
  {
    number: 4,
    title: "Educação de Qualidade",
    description: "Garantir educação inclusiva e equitativa de qualidade",
    icon: <BookOpen className="h-8 w-8 text-pink-500" />,
  },
  {
    number: 5,
    title: "Igualdade de Gênero",
    description: "Alcançar a igualdade de gênero e empoderar mulheres e meninas",
    icon: <Lightbulb className="h-8 w-8 text-pink-500" />,
  },
  {
    number: 9,
    title: "Indústria, Inovação e Infraestrutura",
    description: "Construir infraestrutura resiliente e promover a industrialização inclusiva",
    icon: <Code className="h-8 w-8 text-pink-500" />,
  },
  {
    number: 10,
    title: "Redução das Desigualdades",
    description: "Reduzir a desigualdade dentro dos países e entre eles",
    icon: <Calculator className="h-8 w-8 text-pink-500" />,
  },
]

export default function About() {
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
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">Sobre o Projeto</h2>
            <p className="text-lg text-gray-700 mb-8">
              O STEM for Women é uma iniciativa que visa promover a educação gratuita em ciência, tecnologia, engenharia
              e matemática para meninas e mulheres, incentivando a diversidade e inclusão nas áreas STEM.
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-pink-500 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nossa Missão</h3>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg shadow-sm border border-pink-100">
              <p className="text-gray-700 leading-relaxed">
                Acreditamos que a diversidade é fundamental para a inovação. Nossa missão é reduzir a disparidade de
                gênero nas áreas STEM, oferecendo educação de qualidade, mentoria e uma comunidade de apoio para meninas
                e mulheres interessadas em ciência e tecnologia. Trabalhamos para inspirar a próxima geração de líderes
                femininas em STEM.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Objetivos de Desenvolvimento Sustentável
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {odsItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start"
                >
                  <div className="mr-4 bg-pink-50 p-3 rounded-full">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      ODS {item.number}: {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nossa Trajetória</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200 rounded-full"></div>

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
                      <div className="bg-white p-4 rounded-lg shadow-md border border-pink-100">
                        <h4 className="font-bold text-pink-600 mb-1">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </div>
                    </div>

                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-pink-500 rounded-full border-4 border-white shadow-md">
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
  )
}
