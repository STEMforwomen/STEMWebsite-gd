"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Footer() {
  const { theme, setTheme } = useTheme()
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    if (theme === "light") {
      setShowEasterEgg(true)
      setTimeout(() => setShowEasterEgg(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-r from-[#b91c77] to-[#3a0f60] border-t border-white/10 text-white relative z-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white mr-2">S</span>
              <h3 className="text-xl font-bold text-white">STEM for Women</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Promovendo a educação em ciência, tecnologia, engenharia e matemática para meninas e mulheres, construindo
              um futuro mais diverso e inclusivo.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-white/80 hover:text-white transition-colors">
                  Sobre o Projeto
                </Link>
              </li>
              <li>
                <Link href="/biblioteca" className="text-white/80 hover:text-white transition-colors">
                  Biblioteca STEM
                </Link>
              </li>
              <li>
                <Link href="/#community" className="text-white/80 hover:text-white transition-colors">
                  Comunidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-white/80 mr-2" />
                <a href="mailto:contato@stemforwomen.org" className="text-white/80 hover:text-white transition-colors">
                  contato@stemforwomen.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} STEM for Women. Todos os direitos reservados.
          </p>

          <div className="flex items-center space-x-4">
            <Link href="/termos" className="text-white/80 text-sm hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-white/80 text-sm hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 text-white/80 hover:text-white transition-colors relative"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}

              {showEasterEgg && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-16 right-0 bg-black text-green-400 font-mono text-xs p-2 rounded-md whitespace-nowrap"
                >
                  Modo hacker ativado! 👩‍💻
                </motion.div>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
