"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Star, Zap, Gift, BookOpen, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function Community() {
  const [bubbleAnimation, setBubbleAnimation] = useState(false)

  // Efeito para animar o balão de fala periodicamente
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbleAnimation(true)
      setTimeout(() => setBubbleAnimation(false), 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative py-20 pt-24 bg-gradient-to-br from-[#b91c77] to-[#3a0f60] text-white z-10"
      id="community"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-pink-300 rounded-full"></div>
        <div className="absolute top-[30%] right-[15%] w-32 h-32 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-[20%] left-[25%] w-40 h-40 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-20 h-20 bg-yellow-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Seção Participe da Comunidade - Novo Design */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Participe da Nossa Comunidade</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Junte-se a outras mulheres apaixonadas por STEM e faça parte de uma rede de apoio e aprendizado.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 - Discord */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-[#5865F2]/90 to-[#5865F2]/70 rounded-2xl overflow-hidden shadow-xl group"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="none"
                    >
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.28a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.28.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.229 13.229 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">Servidor Discord</h3>
                  <p className="text-white/80 mb-6 flex-grow">
                    Nosso servidor Discord é o coração da comunidade. Participe de discussões, tire dúvidas e conecte-se
                    com outras mulheres em STEM.
                  </p>

                  <div className="">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-[#5865F2] overflow-hidden">
                          <Image
                            src="/images/discordmembra1.png"
                            alt="Membra Discord"
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-[#5865F2] overflow-hidden">
                          <Image
                            src="/images/discordmembra2.png"
                            alt="Membra Discord"
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-[#5865F2] overflow-hidden">
                          <Image
                            src="/images/discordmembra3.png"
                            alt="Membra Discord"
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <span className="text-white/90 text-sm">+500 membros</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Eventos */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-pink-500/90 to-pink-600/70 rounded-2xl overflow-hidden shadow-xl group"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Star className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">Eventos Exclusivos</h3>
                  <p className="text-white/80 mb-6 flex-grow">Onde aprendemos juntas e sem pressão.</p>

                  <div className="">
                    <div className="bg-white/10 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-white/80" />
                        <span className="text-white font-medium">Clube de Inglês</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        Conversação e prática em um ambiente descontraído e acolhedor.
                      </p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-4 w-4 text-white/80" />
                        <span className="text-white font-medium">Clube de Estudos</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        Grupos de estudo para diferentes áreas STEM, com foco em apoio mútuo.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Recursos */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-purple-500/90 to-purple-600/70 rounded-2xl overflow-hidden shadow-xl group"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Gift className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">Recursos Exclusivos</h3>
                  <p className="text-white/80 mb-6 flex-grow">
                    Acesse materiais de estudo, tutoriais e oportunidades exclusivas para membros da nossa comunidade.
                    Nossos recursos são cuidadosamente selecionados para ajudar no seu desenvolvimento em STEM.
                  </p>

                  <div className="">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">Cursos</span>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">Mentorias</span>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">E-books</span>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">Projetos</span>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">Workshops</span>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">Materiais</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Botão centralizado abaixo dos cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("https://discord.gg/Mb4dWJmcyC", "_blank")}
              >
                <span>Participar da Comunidade</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Seção Seja Voluntária - Com balão de fala estilo quadrinhos */}
          <div className="relative">
            {/* Fundo com padrão de pontos estilo quadrinhos */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Lado esquerdo - Imagem com personagem */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sejavoluntaria-9FTreq3kWcJWfUnsCNm1LKgbyc6Yaq.jpeg"
                      alt="Seja Voluntária"
                      width={400}
                      height={400}
                      className="mx-auto rounded-lg"
                    />

                    {/* Balão de fala estilo quadrinhos */}
                    <motion.div
                      className="absolute -top-10 right-0 md:right-10"
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={
                        bubbleAnimation
                          ? {
                              scale: [0.8, 1.1, 0.9, 1],
                              opacity: 1,
                              rotate: [-2, 2, -1, 0],
                            }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative">
                        {/* Balão de fala */}
                        <svg width="220" height="160" viewBox="0 0 220 160" className="fill-yellow-400">
                          <path
                            d="M210.5,10.5 C210.5,5.25 206.25,1 201,1 L19,1 C13.75,1 9.5,5.25 9.5,10.5 L9.5,119.5 C9.5,124.75 13.75,129 19,129 L59,129 L40,159 L95,129 L201,129 C206.25,129 210.5,124.75 210.5,119.5 L210.5,10.5 Z"
                            stroke="#000"
                            strokeWidth="2"
                          />
                        </svg>

                        {/* Texto dentro do balão */}
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6">
                          <motion.div
                            animate={
                              bubbleAnimation
                                ? {
                                    scale: [1, 1.2, 1],
                                  }
                                : {}
                            }
                          >
                            <h3
                              className="text-black font-extrabold text-xl md:text-2xl text-center"
                              style={{ fontFamily: "comic sans ms, cursive" }}
                            >
                              SEJA VOLUNTÁRIA!
                            </h3>
                          </motion.div>
                          <p
                            className="text-black font-bold text-sm text-center mt-1"
                            style={{ fontFamily: "comic sans ms, cursive" }}
                          >
                            Junte-se à nossa equipe!
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Lado direito - Texto e botão */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Faça a Diferença!</h2>

                    <p className="text-white/90 mb-6">
                      Ser voluntária no STEM for Women é uma oportunidade incrível de:
                    </p>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="bg-pink-500 p-1 rounded-full mt-1">
                          <Zap className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white/90">Desenvolver novas habilidades profissionais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-pink-500 p-1 rounded-full mt-1">
                          <Zap className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white/90">Expandir sua rede de contatos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-pink-500 p-1 rounded-full mt-1">
                          <Zap className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white/90">Impactar positivamente a vida de outras mulheres</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-pink-500 p-1 rounded-full mt-1">
                          <Zap className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white/90">Valorizar seu currículo com experiência real</span>
                      </li>
                    </ul>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 blur-md opacity-70 rounded-full"></div>
                      <Button
                        size="lg"
                        className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold rounded-full w-full shadow-lg border-2 border-black"
                        onClick={() => window.open("https://stem-linktree.vercel.app/processos-seletivos", "_blank")}
                      >
                        <span>Quero ser voluntária!</span>
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
