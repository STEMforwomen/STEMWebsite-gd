"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Users } from "lucide-react"
import Link from "next/link"
import StarBackground from "@/components/star-background"
import WaveDivider from "@/components/wave-divider"

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const titleChars = "STEM For Women".split("")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#b91c77] to-[#3a0f60]">
      <StarBackground showRocket={true} />

      <div className="container relative z-10 px-4 py-32 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="max-w-3xl">
            {/* Título Animado */}
            <div className="flex justify-center mb-8 overflow-hidden">
              {titleChars.map((char, index) => (
                <motion.span
                  key={index}
                  className="text-5xl md:text-7xl font-bold text-white tracking-tight inline-block"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05 * index,
                    type: "spring",
                    damping: 12,
                  }}
                  whileHover={{ y: -10, scale: 1.1, color: "#fbcfe8" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-pink-100 mb-10 leading-relaxed"
            >
              Empoderando mulheres através da ciência, tecnologia, engenharia e matemática.
            </motion.p>

            {/* Seção de Botões com Links */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Botão Entrar na Comunidade */}
              <Link 
                href="https://discord.gg/Mb4dWJmcyC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-white text-[#3a0f60] hover:bg-pink-100 font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-xl"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Entrar na Comunidade
                </Button>
              </Link>

              {/* Botão Ser Voluntária */}
              <Link 
                href="https://stem-linktree.vercel.app/processos-seletivos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Ser Voluntária
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <WaveDivider />
    </section>
  )
}
