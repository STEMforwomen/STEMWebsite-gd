"use client"

import Hero from "@/components/hero"
import Community from "@/components/community"
import LatestNews from "@/components/latest-news"
import Partners from "@/components/partners"
import WaveDivider from "@/components/wave-divider"

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      {/* Banner com fundo rosa */}
      <Hero />

      {/* Últimos Acontecimentos com fundo branco */}
      <div className="relative">
        <LatestNews />

        {/* Onda branca na parte inferior da seção LatestNews (parte superior da Community) */}
        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <WaveDivider position="bottom" className="fill-white dark:fill-gray-900" inverted={true} />
        </div>
      </div>

      {/* Participe da Nossa Comunidade com fundo rosa */}
      <div className="relative">
        <Community />

        {/* Onda na parte inferior da seção Community */}
        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <WaveDivider position="bottom" />
        </div>
      </div>

      {/* Nossos Parceiros com fundo branco */}
      <Partners />
    </main>
  )
}
