"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Filter, Search, X, Clock, Users, Star, ExternalLink, CheckCircle } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

import { resourceItems, type ResourceItem, type AreaType, type ContentType } from "@/lib/resources"

/* ---------- Subáreas e tipos (iguais ao original) ---------- */
const subareas = {
  tecnologia: [
    { id: "desenvolvimento-web", label: "Desenvolvimento Web" },
    { id: "data-science", label: "Data Science" },
    { id: "machine-learning", label: "Machine Learning" },
    { id: "ciberseguranca", label: "Cibersegurança" },
    { id: "ux-ui-design", label: "UX/UI Design" },
  ],
  ciencia: [
    { id: "biologia", label: "Biologia" },
    { id: "fisica", label: "Física" },
    { id: "quimica", label: "Química" },
    { id: "astronomia", label: "Astronomia" },
    { id: "neurociencia", label: "Neurociência" },
    { id: "farmacologia", label: "Farmacologia" },
  ],
  engenharia: [
    { id: "engenharia-civil", label: "Engenharia Civil" },
    { id: "engenharia-mecanica", label: "Engenharia Mecânica" },
    { id: "engenharia-de-software", label: "Engenharia de Software" },
  ],
  matematica: [
    { id: "algebra", label: "Álgebra" },
    { id: "estatistica", label: "Estatística" },
    { id: "calculo", label: "Cálculo" },
    { id: "matematica-discreta", label: "Matemática Discreta" },
    { id: "probabilidade", label: "Probabilidade" },
  ],
}

const contentTypes = [
  { id: "curso", label: "Curso" },
  { id: "livro", label: "Livro" },
  { id: "artigo", label: "Artigo" },
  { id: "evento", label: "Evento" },
  { id: "palestra", label: "Palestra" },
  { id: "oportunidade", label: "Oportunidade" },
]

const getTypeColor = (type: ContentType) => {
  const colors = {
    livro: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    curso: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    artigo: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    evento: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    palestra: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    oportunidade: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  }
  return colors[type]
}

/* ---------- Componente principal ---------- */
export default function BibliotecaPage() {
  const [selectedArea, setSelectedArea] = useState<AreaType>("all")
  const [selectedSubareas, setSelectedSubareas] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredResources, setFilteredResources] = useState<ResourceItem[]>(resourceItems)
  const [expanded, setExpanded] = useState<number | null>(null)

  /* --------- Filtro dinâmico ---------- */
  useEffect(() => {
    let results = resourceItems

    if (selectedArea !== "all") {
      results = results.filter((r) => r.area === selectedArea || r.area === "all")
    }

    if (selectedSubareas.length) {
      results = results.filter((r) => selectedSubareas.includes(r.subarea) || (r.subarea === "all" && r.area === "all"))
    }

    if (selectedTypes.length) {
      results = results.filter((r) => selectedTypes.includes(r.type))
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.longDescription.toLowerCase().includes(q),
      )
    }

    setFilteredResources(results)
  }, [selectedArea, selectedSubareas, selectedTypes, searchQuery])

  /* --------- Helpers ---------- */
  const toggleSubarea = (id: string) =>
    setSelectedSubareas((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]))

  const toggleType = (id: string) =>
    setSelectedTypes((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]))

  const clearFilters = () => {
    setSelectedArea("all")
    setSelectedSubareas([])
    setSelectedTypes([])
    setSearchQuery("")
  }

  return (
    <main className="min-h-screen">
      {/* ---------- HERO ---------- */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Biblioteca STEM</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore nossa coleção gratuita de recursos em ciência, tecnologia, engenharia e matemática.
          </p>
        </div>
      </section>

      {/* ---------- LISTA DE RECURSOS ---------- */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Barra de busca e filtros */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative w-full md:w-2/3">
              <Input
                placeholder="Buscar recursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Filtros
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80">
                {/* Área */}
                <DropdownMenuLabel>Área</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ScrollArea className="h-[250px]">
                  <DropdownMenuGroup className="p-2 space-y-2">
                    {(["all", "ciencia", "tecnologia", "engenharia", "matematica"] as AreaType[]).map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox
                          id={`area-${area}`}
                          checked={selectedArea === area}
                          onCheckedChange={() => {
                            setSelectedArea(area)
                            setSelectedSubareas([])
                          }}
                        />
                        <Label htmlFor={`area-${area}`}>
                          {area === "all"
                            ? "Todas"
                            : area === "ciencia"
                              ? "Ciência"
                              : area === "tecnologia"
                                ? "Tecnologia"
                                : area === "engenharia"
                                  ? "Engenharia"
                                  : "Matemática"}
                        </Label>
                      </div>
                    ))}

                    {/* Subáreas conforme área escolhida */}
                    {selectedArea !== "all" &&
                      subareas[selectedArea].map((s) => (
                        <div key={s.id} className="flex items-center space-x-2 ml-6">
                          <Checkbox
                            id={`subarea-${s.id}`}
                            checked={selectedSubareas.includes(s.id)}
                            onCheckedChange={() => toggleSubarea(s.id)}
                          />
                          <Label htmlFor={`subarea-${s.id}`}>{s.label}</Label>
                        </div>
                      ))}
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator className="my-2" />

                  {/* Tipo de conteúdo */}
                  <DropdownMenuLabel>Tipo de conteúdo</DropdownMenuLabel>
                  <DropdownMenuGroup className="p-2 grid grid-cols-2 gap-2">
                    {contentTypes.map((t) => (
                      <div key={t.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`type-${t.id}`}
                          checked={selectedTypes.includes(t.id)}
                          onCheckedChange={() => toggleType(t.id)}
                        />
                        <Label htmlFor={`type-${t.id}`}>{t.label}</Label>
                      </div>
                    ))}
                  </DropdownMenuGroup>
                </ScrollArea>

                <DropdownMenuSeparator />
                <div className="p-2">
                  <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={clearFilters}>
                    Limpar filtros
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Contagem */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {filteredResources.length} {filteredResources.length === 1 ? "recurso encontrado" : "recursos encontrados"}
          </p>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredResources.map((r) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="border-t-4 border-t-pink-500 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="bg-pink-50 dark:bg-pink-900/20 p-2 rounded-full">{r.icon}</div>
                        <Badge className={getTypeColor(r.type)}>{r.type}</Badge>
                      </div>
                      <CardTitle className="mt-3 text-xl">{r.title}</CardTitle>
                      <CardDescription>{r.description}</CardDescription>
                    </CardHeader>

                    {expanded === r.id && (
                      <CardContent className="text-sm space-y-4">
                        <p>{r.longDescription}</p>

                        {r.details?.duration && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-pink-500" />
                            Duração: {r.details.duration}
                          </div>
                        )}

                        {r.details?.level && (
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-pink-500" />
                            Nível: {r.details.level}
                          </div>
                        )}

                        {r.details?.rating && (
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500" />
                            {r.details.rating} / 5
                          </div>
                        )}

                        {r.details?.features && (
                          <ul className="space-y-1">
                            {r.details.features.map((f) => (
                              <li key={f} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" /> {f}
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    )}

                    <CardFooter className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                        onClick={() => setExpanded(expanded === r.id ? null : r.id)}
                      >
                        {expanded === r.id ? "Ver menos" : "Ver mais"}
                      </Button>
                      <Button size="sm" className="flex-1" onClick={() => window.open(r.link, "_blank")}>
                        Acessar <ExternalLink className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  )
}
