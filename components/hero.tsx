"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
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
                  whileHover={{
                    scale: 1.2,
                    rotate: char !== " " ? Math.random() * 10 - 5 : 0,
                    color: ["#ffffff", "#ff9bce", "#ffffff"],
                    transition: { duration: 0.3 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <motion.div className="relative mb-12" variants={itemVariants}>
              <motion.p
                className="max-w-xl mx-auto text-xl text-white/90 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                Empoderando mulheres na STEM através de educação acessível, mentoria e comunidade. Juntas, construímos
                um futuro mais inclusivo e inovador!
              </motion.p>
              <motion.div
                className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.div>

            <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
              {/* Botão Seja Voluntária - Redesenhado com animações mais sutis */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-foreground bg-white hover:bg-white/90 hover:text-foreground rounded-full flex items-center group"
                  onClick={() => window.open("https://stem-linktree.vercel.app/processos-seletivos", "_blank")}
                >
                  <motion.div
                    className="mr-2 text-primary"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Heart className="h-5 w-5" />
                  </motion.div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Seja Voluntária</span>
                </Button>
              </motion.div>

              {/* Botão Entrar na Comunidade */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-primary font-medium rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                  onClick={() => window.open("https://discord.gg/ECtMgzF4", "_blank")}
                >
                  <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#b91c77"
                      stroke="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.28a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.28.077.077 0 0 0-.084-.026c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.229 13.229 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                    </svg>
                  </motion.div>
                  <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Entrar na Comunidade
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveDivider position="bottom" />
      </div>
    </section>
  )
}
