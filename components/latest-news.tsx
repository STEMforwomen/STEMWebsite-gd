"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Award, Users, Star, Bell, Sparkles, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function LatestNews() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Avança para o próximo slide a cada 5 segundos

    return () => clearInterval(interval) // Limpa o intervalo quando o componente é desmontado
  }, [])

  const news = [
    {
      id: 1,
      title: "Comunidade em Crescimento",
      subtitle: "🎉 Alcançamos 500 meninas na nossa comunidade no Discord!",
      description:
        "Nossa comunidade continua crescendo e já alcançamos a marca de 500 participantes! Agradecemos a todas que fazem parte dessa jornada incrível.",
      image: "/images/discord-community.png", // Atualizar para a nova imagem
      icon: <Users className="h-8 w-8 text-pink-500 dark:text-pink-400" />,
      badge: {
        text: "Novo!",
        icon: <Sparkles className="w-3 h-3 mr-1" />,
        color: "from-pink-500 to-pink-600",
      },
      date: "Abril 2025",
      color: "pink",
    },
    {
      id: 2,
      title: "Nova Parceria",
      subtitle: '🤝 Parceria com o projeto "Chama as Minas" (LinuxTips)',
      description:
        "Agora oferecemos mentorias e cursos gratuitos para alunas da comunidade, incluindo Linux, Docker, Kubernetes e muito mais!",
      image: "/images/linuxtips.jpeg",
      icon: <Award className="h-8 w-8 text-purple-500 dark:text-purple-400" />,
      badge: {
        text: "Destaque",
        icon: <Star className="w-3 h-3 mr-1" />,
        color: "from-purple-500 to-purple-600",
      },
      date: "Março 2025",
      color: "purple",
    },
    {
      id: 3,
      title: "Hackathon STEM",
      subtitle: "💻 Primeiro Hackathon exclusivo para meninas",
      description:
        "Em parceria com o Cientista Aprendiz, realizaremos nosso primeiro hackathon exclusivo para meninas e mulheres interessadas em tecnologia.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZsGThIj2mjkwJJjG0LZ1xf2hMf447o.png",
      icon: <Calendar className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
      badge: {
        text: "Em breve",
        icon: <Bell className="w-3 h-3 mr-1" />,
        color: "from-blue-500 to-blue-600",
      },
      date: "Maio 2025",
      color: "blue",
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === news.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? news.length - 1 : prev - 1))
  }

  const getColorClass = (color) => {
    const colors = {
      pink: "bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-800/30",
      purple:
        "bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/30",
      blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/30",
    }
    return colors[color] || colors.pink
  }

  return (
    <section className="relative py-20 pb-32 bg-white dark:bg-gray-900 overflow-hidden z-10">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-3"
            >
              <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 px-3 py-1 text-sm rounded-full">
                <Bell className="w-3.5 h-3.5 mr-1.5" />
                Novidades
              </Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#b91c77] dark:text-pink-400 mb-4"
            >
              Últimos Acontecimentos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Confira as novidades e conquistas mais recentes da nossa comunidade
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mt-6"
            />
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {news.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="relative bg-white dark:bg-gray-800 overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-1/2 relative">
                          <div className="aspect-[4/3] relative">
                            <Image
                              src={
                                item.image ||
                                `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(item.title) || "/placeholder.svg"}`
                              }
                              alt={item.title}
                              width={800}
                              height={600}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

                            <div className="absolute top-4 left-4">
                              <Badge
                                className={`bg-gradient-to-r ${item.badge.color} text-white px-3 py-1 text-sm rounded-full`}
                              >
                                {item.badge.icon}
                                {item.badge.text}
                              </Badge>
                            </div>

                            <div className="absolute bottom-4 left-4">
                              <div
                                className={`px-3 py-1 rounded-full text-sm font-medium inline-flex items-center ${getColorClass(item.color)}`}
                              >
                                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                {item.date}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="md:w-1/2 p-8 flex flex-col">
                          <div className="mb-6 flex items-start gap-4">
                            <div
                              className={`p-3 rounded-xl ${item.color === "pink" ? "bg-pink-50 dark:bg-pink-900/20" : item.color === "purple" ? "bg-purple-50 dark:bg-purple-900/20" : "bg-blue-50 dark:bg-blue-900/20"}`}
                            >
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{item.subtitle}</p>
                            </div>
                          </div>

                          <div className="mb-8 flex-grow">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {news.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeSlide === index
                      ? "bg-pink-500 w-6"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-pink-300 dark:hover:bg-pink-800"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {news.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * item.id }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <Image
                    src={item.image || `/placeholder.svg?height=300&width=600&text=${encodeURIComponent(item.title)}`}
                    alt={item.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`bg-gradient-to-r ${item.badge.color} text-white px-2 py-0.5 text-xs rounded-full`}
                    >
                      {item.badge.icon}
                      {item.badge.text}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.subtitle}</p>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`p-2 rounded-full ${item.color === "pink" ? "bg-pink-50 dark:bg-pink-900/20" : item.color === "purple" ? "bg-purple-50 dark:bg-purple-900/20" : "bg-blue-50 dark:bg-blue-900/20"}`}
                    >
                      {item.icon}
                    </div>
                    <div
                      className={`px-2 py-0.5 rounded-full text-xs font-medium inline-flex items-center ${getColorClass(item.color)}`}
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.date}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
