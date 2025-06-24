"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface CommandResponse {
  text: string
  isError?: boolean
  isLoading?: boolean
}

const commands: Record<string, string> = {
  help: `Comandos disponíveis:
  - help: Mostra esta ajuda
  - about: Sobre o STEM for Women
  - team: Conheça nosso time
  - library: Acesse nossa biblioteca de recursos
  - join: Como participar da comunidade
  - clear: Limpa o terminal`,
  about: `STEM for Women é uma iniciativa que visa promover a educação gratuita em ciência, tecnologia, engenharia e matemática para meninas e mulheres, incentivando a diversidade e inclusão nas áreas STEM.`,
  team: `Nosso time é composto por mulheres incríveis apaixonadas por STEM e educação. Visite a seção "Nosso Time" para conhecer cada uma delas!`,
  library: `Nossa biblioteca contém recursos gratuitos em diversas áreas STEM. Cursos, livros, artigos, eventos e muito mais. Acesse a seção "Biblioteca STEM" para explorar!`,
  join: `Para participar da comunidade STEM for Women:
  1. Entre no nosso servidor Discord
  2. Siga-nos nas redes sociais
  3. Inscreva-se na nossa newsletter
  4. Participe dos nossos eventos online e presenciais`,
  clear: "clear",
  "": "",
}

export default function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<CommandResponse[]>([
    { text: "Bem-vinda ao Terminal STEM for Women!" },
    { text: "Digite 'help' para ver os comandos disponíveis." },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const handleCommand = () => {
    const trimmedInput = input.trim().toLowerCase()
    setHistory((prev) => [...prev, { text: `$ ${input}` }])

    if (trimmedInput === "clear") {
      setHistory([])
    } else {
      const response = commands[trimmedInput]

      if (response) {
        setHistory((prev) => [...prev, { text: response }])
      } else {
        setHistory((prev) => [
          ...prev,
          {
            text: `Comando não reconhecido: ${trimmedInput}. Digite 'help' para ver os comandos disponíveis.`,
            isError: true,
          },
        ])
      }
    }

    setInput("")

    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, 100)
  }

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <Button onClick={() => setIsOpen(!isOpen)} className="bg-gray-900 hover:bg-gray-800 text-white">
              {isOpen ? "Fechar Terminal" : "Abrir Terminal"}
            </Button>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700">
                  <div className="bg-gray-800 px-4 py-2 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-sm mx-auto">stem-for-women-terminal</div>
                  </div>

                  <div
                    ref={terminalRef}
                    className="p-4 h-80 overflow-y-auto font-mono text-sm text-green-400 bg-gray-900"
                  >
                    {history.map((item, index) => (
                      <div key={index} className={`mb-1 ${item.isError ? "text-red-400" : ""}`}>
                        {item.text}
                      </div>
                    ))}
                    <div className="flex items-center">
                      <span className="mr-2">$</span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleCommand()
                          }
                        }}
                        className="flex-1 bg-transparent outline-none text-green-400"
                        autoFocus
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
