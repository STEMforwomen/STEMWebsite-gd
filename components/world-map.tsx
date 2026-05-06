"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface Location {
  name: string
  x: number // percentage from left
  y: number // percentage from top
}

const locations: Location[] = [
  { name: "Brasil", x: 38, y: 76 },
  { name: "Portugal", x: 48.2, y: 51 },
  { name: "Estados Unidos", x: 32, y: 52 },
  { name: "Japão", x: 79, y: 53 },
  { name: "Angola", x: 53, y: 75 },
]

export default function WorldMap() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-accent/30 dark:from-background dark:to-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-4">
              Nossa Presença Global
            </h2>
            <p className="text-lg text-foreground/70 dark:text-foreground/70">
              Temos membras espalhadas por diferentes continentes, formando uma comunidade global de mulheres em STEM
            </p>
          </div>

          <div className="bg-card dark:bg-card p-8 rounded-2xl shadow-xl border border-border">
            <div className="relative w-full aspect-[2/1]">
              <Image src="/images/world-map.png" alt="Mapa mundi" fill className="object-contain" priority />

              {/* Location markers */}
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="absolute"
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Pulsing circle effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    style={{ width: "30px", height: "30px", left: "-15px", top: "-15px" }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Main dot */}
                  <div className="relative w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50">
                    {/* Inner glow */}
                    <div className="absolute inset-1 rounded-full bg-primary-foreground/20"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location labels */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-muted/50 to-accent/50 dark:from-secondary/30 dark:to-accent/30 px-4 py-2 rounded-full border border-border"
                >
                  <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                  <span className="text-sm font-medium text-foreground/80 dark:text-foreground/80">
                    {location.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
