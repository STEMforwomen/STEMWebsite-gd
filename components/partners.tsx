"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Linkedin, ExternalLink, Calendar, Code, Users, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const partners = [
  {
    id: 1,
    name: "Linux Tips",
    description:
      "Unimos forças com o Linux Tips por meio do projeto Chama as Minas, uma iniciativa que oferece aulas técnicas gratuitas para meninas em diversas áreas da tecnologia.",
    longDescription: [
      "Estamos com vagas abertas para novas turmas, com temas variados e mentoras incríveis disponíveis para apoiar o aprendizado e o desenvolvimento das alunas.",
      "Essa parceria reforça nosso compromisso em criar oportunidades reais de formação técnica e empoderamento feminino em STEM.",
    ],
    logo: "/images/linuxtips.jpeg",
    instagram: "https://instagram.com/linuxtipsbr",
    linkedin: "https://linkedin.com/company/linuxtips",
    website: "https://linuxtips.io",
    highlights: [
      {
        icon: <Code className="h-5 w-5" />,
        title: "Cursos Técnicos",
        description: "Cursos gratuitos em Linux, Docker, Kubernetes e mais",
      },
      {
        icon: <Users className="h-5 w-5" />,
        title: "Mentoria",
        description: "Acesso a mentoras experientes na área de tecnologia",
      },
    ],
    color: "from-red-500 to-pink-600",
  },
 
]

export default function Partners() {
  const [activeTab, setActiveTab] = useState("all")
  const [expandedPartner, setExpandedPartner] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedPartner(expandedPartner === id ? null : id)
  }

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#b91c77] dark:text-pink-400 mb-4">🤝 Nossas Parcerias</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça as organizações que acreditam no nosso trabalho e nos ajudam a expandir o impacto do STEM for Women.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-[#b91c77] rounded-full"></div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className={`bg-gradient-to-r ${partner.color} rounded-t-2xl p-1`}>
                <div className="bg-white dark:bg-gray-800 rounded-t-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Logo Section */}
                    <div className="md:w-1/3 p-6 flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg"
                      >
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                              {partner.name}
                            </h3>
                            <Badge className={`bg-gradient-to-r ${partner.color} text-white`}>Parceiro Oficial</Badge>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">{partner.description}</p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {partner.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg h-full"
                            >
                              <div
                                className={`p-2 rounded-full bg-gradient-to-r ${partner.color} text-white flex-shrink-0`}
                              >
                                {highlight.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200">{highlight.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Expandable content */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: expandedPartner === partner.id ? "auto" : 0,
                            opacity: expandedPartner === partner.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mb-4"
                        >
                          <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                            {partner.longDescription.map((paragraph, idx) => (
                              <p key={idx} className="text-gray-700 dark:text-gray-300 mb-3 last:mb-0">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </motion.div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center justify-between mt-auto">
                          <div className="flex flex-wrap gap-3">
                            <motion.a
                              href={partner.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
                              whileHover={{ scale: 1.1, x: 3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Instagram className="h-5 w-5" />
                              <span className="text-sm">Instagram</span>
                            </motion.a>
                            <motion.a
                              href={partner.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
                              whileHover={{ scale: 1.1, x: 3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              
                              
                            </motion.a>
                          </div>

                          <div className="flex gap-2 mt-4 md:mt-0">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleExpand(partner.id)}
                              className="border-pink-200 text-pink-600 hover:bg-pink-50 dark:border-pink-800/30 dark:text-pink-400 dark:hover:bg-pink-900/20"
                            >
                              {expandedPartner === partner.id ? "Ver menos" : "Ver mais"}
                            </Button>
                            <Button
                              variant="default"
                              size="sm"
                              className="bg-[#b91c77] hover:bg-[#a01868] text-white"
                              onClick={() => window.open(partner.website, "_blank")}
                            >
                              <span>Visitar site</span>
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-3xl mx-auto shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Quer ser nosso parceiro?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Estamos sempre abertos a novas parcerias que possam ampliar o impacto do STEM for Women. Entre em contato
              conosco para discutir como podemos colaborar!
            </p>
                    <a
            href="https://forms.gle/ZFdZigQ19deYQPBf7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#b91c77] hover:bg-[#a01868] text-white px-6 py-3 rounded-md font-medium transition"
          >
            <BookOpen className="h-5 w-5" />
            Seja nosso Parceiro
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
