"use client"

import Careers from "@/components/careers"
import StarBackground from "@/components/star-background"
import WaveDivider from "@/components/wave-divider"

export default function CarreirasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#b91c77] to-[#3a0f60] text-white">
        <StarBackground showRocket={false} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Carreiras em STEM</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Descubra seu caminho profissional nas áreas de Ciência, Tecnologia, Engenharia e Matemática. Explore
              carreiras e siga roadmaps personalizados para seu crescimento.
            </p>
          </div>
        </div>
        <div className="absolute bottom-[-40px] left-0 right-0 z-10">
          <WaveDivider position="bottom" />
        </div>
      </section>

      {/* Careers Component */}
      <Careers className="-mt-10" />
    </main>
  )
}
