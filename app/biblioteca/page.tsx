"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Code,
  Cog,
  Calculator,
  Video,
  Calendar,
  Briefcase,
  ExternalLink,
  Search,
  Filter,
  X,
  Clock,
  Users,
  Star,
  CheckCircle,
  Shield,
} from "lucide-react"
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
import type { JSX } from "react/jsx-runtime"

type ContentType = "livro" | "curso" | "artigo" | "evento" | "palestra" | "oportunidade"
type AreaType = "ciencia" | "tecnologia" | "engenharia" | "matematica" | "all"
type SubAreaType = string

interface ResourceItem {
  id: number
  title: string
  description: string
  longDescription: string
  type: ContentType
  area: AreaType
  subarea: SubAreaType
  link: string
  icon: JSX.Element
  details?: {
    duration?: string
    level?: string
    students?: number
    rating?: number
    features?: string[]
    learnings?: string[]
  }
}

// Expanded resource items with subareas and longer descriptions
const resourceItems: ResourceItem[] = [
  // Tecnologia
  {
    id: 1,
    title: "Introdução à Programação Web",
    description: "Curso básico de HTML, CSS e JavaScript para iniciantes",
    longDescription:
      "Este curso abrangente foi projetado para quem está começando no desenvolvimento web. Você aprenderá os fundamentos de HTML para estruturar conteúdo, CSS para estilização e JavaScript para interatividade. Ao final, será capaz de criar sites responsivos e interativos do zero.",
    type: "curso",
    area: "tecnologia",
    subarea: "desenvolvimento-web",
    link: "#",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "40 horas",
      level: "Iniciante",
      students: 1250,
      rating: 4.8,
      features: ["Certificado de conclusão", "Projetos práticos", "Suporte da comunidade"],
    },
  },
  {
    id: 2,
    title: "Fundamentos de React",
    description: "Aprenda a construir interfaces modernas com React",
    longDescription:
      "Domine a biblioteca React, uma das mais populares para desenvolvimento de interfaces. Este curso cobre componentes, props, estado, hooks, roteamento e integração com APIs. Você construirá aplicações completas e aprenderá as melhores práticas do ecossistema React.",
    type: "curso",
    area: "tecnologia",
    subarea: "desenvolvimento-web",
    link: "#",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "30 horas",
      level: "Intermediário",
      students: 875,
      rating: 4.9,
      features: ["Projetos reais", "Código-fonte completo", "Atualizações constantes"],
    },
  },
  {
    id: 3,
    title: "Python para Data Science",
    description: "Introdução à análise de dados com Python",
    longDescription:
      "Este curso ensina como utilizar Python para análise e visualização de dados. Você aprenderá bibliotecas essenciais como Pandas, NumPy e Matplotlib, técnicas de limpeza e transformação de dados, e como extrair insights valiosos de conjuntos de dados complexos.",
    type: "curso",
    area: "tecnologia",
    subarea: "data-science",
    link: "#",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "45 horas",
      level: "Iniciante a Intermediário",
      students: 2100,
      rating: 4.7,
      features: ["Datasets reais", "Notebooks Jupyter", "Projetos de portfólio"],
    },
  },
  {
    id: 4,
    title: "Introdução ao Machine Learning",
    description: "Conceitos básicos de aprendizado de máquina",
    longDescription:
      "Explore os fundamentos do aprendizado de máquina neste curso introdutório. Você aprenderá sobre algoritmos supervisionados e não supervisionados, validação cruzada, métricas de avaliação e como implementar modelos básicos como regressão linear, árvores de decisão e k-means usando scikit-learn.",
    type: "curso",
    area: "tecnologia",
    subarea: "machine-learning",
    link: "#",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "50 horas",
      level: "Intermediário",
      students: 1580,
      rating: 4.6,
      features: ["Implementações práticas", "Estudos de caso", "Competições de ML"],
    },
  },
  {
    id: 5,
    title: "Fundamentos de Cibersegurança",
    description: "Aprenda os princípios básicos de segurança digital",
    longDescription:
      "Este curso aborda os princípios fundamentais da segurança da informação. Você aprenderá sobre ameaças comuns, vulnerabilidades, criptografia básica, segurança de rede, autenticação e autorização, e como implementar práticas seguras no desenvolvimento de software e na proteção de dados pessoais.",
    type: "curso",
    area: "tecnologia",
    subarea: "ciberseguranca",
    link: "#",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "35 horas",
      level: "Iniciante a Intermediário",
      students: 920,
      rating: 4.5,
      features: ["Laboratórios práticos", "Análise de casos reais", "Ferramentas de segurança"],
    },
  },
  {
    id: 6,
    title: "Design de Interfaces",
    description: "Princípios de UX/UI Design para aplicações web e mobile",
    longDescription:
      "Aprenda a criar interfaces intuitivas e atraentes para web e dispositivos móveis. Este curso cobre princípios de design, psicologia do usuário, wireframing, prototipagem, design systems, e como conduzir pesquisas e testes de usabilidade para criar experiências centradas no usuário.",
    type: "curso",
    area: "tecnologia",
    subarea: "ux-ui-design",
    link: "#",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "40 horas",
      level: "Iniciante",
      students: 1050,
      rating: 4.8,
      features: ["Projetos para portfólio", "Feedback personalizado", "Ferramentas de design"],
    },
  },

  // Ciência
  {
    id: 7,
    title: "Biologia Celular",
    description: "Introdução à estrutura e função das células",
    longDescription:
      "Este livro abrangente explora a estrutura e função das células, a unidade básica da vida. Você aprenderá sobre organelas celulares, membranas, metabolismo, divisão celular, comunicação intercelular e como as células se especializam em diferentes tecidos. Inclui ilustrações detalhadas e exemplos do mundo real.",
    type: "livro",
    area: "ciencia",
    subarea: "biologia",
    link: "#",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      level: "Universitário",
      rating: 4.7,
      features: ["Ilustrações coloridas", "Estudos de caso", "Questões de revisão"],
    },
  },
  {
    id: 8,
    title: "Física Quântica Explicada",
    description: "Série de vídeos sobre física quântica",
    longDescription:
      "Esta série de vídeos desmistifica os conceitos complexos da física quântica de forma acessível. Aborda temas como dualidade onda-partícula, princípio da incerteza, superposição quântica, emaranhamento, e aplicações modernas como computação quântica e criptografia. Inclui animações e experimentos virtuais.",
    type: "curso",
    area: "ciencia",
    subarea: "fisica",
    link: "#",
    icon: <Video className="h-5 w-5" />,
    details: {
      duration: "25 horas",
      level: "Intermediário",
      students: 3200,
      rating: 4.9,
      features: ["Animações 3D", "Simulações interativas", "Entrevistas com especialistas"],
    },
  },
  {
    id: 9,
    title: "Química Orgânica Fundamental",
    description: "Curso introdutório de química orgânica",
    longDescription:
      "Este curso introduz os princípios da química orgânica, focando na estrutura, propriedades e reações de compostos baseados em carbono. Você aprenderá sobre grupos funcionais, estereoquímica, mecanismos de reação, síntese orgânica e aplicações na indústria, medicina e ciência dos materiais.",
    type: "curso",
    area: "ciencia",
    subarea: "quimica",
    link: "#",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "60 horas",
      level: "Universitário",
      students: 1450,
      rating: 4.6,
      features: ["Laboratórios virtuais", "Modelos moleculares 3D", "Exercícios práticos"],
    },
  },
  {
    id: 10,
    title: "Explorando o Universo",
    description: "Introdução à astronomia e astrofísica",
    longDescription:
      "Embarque em uma jornada fascinante pelo cosmos neste curso de astronomia. Explore planetas, estrelas, galáxias, buracos negros e a expansão do universo. Aprenda sobre as mais recentes descobertas astronômicas, instrumentos de observação e as teorias que explicam a origem e evolução do universo.",
    type: "curso",
    area: "ciencia",
    subarea: "astronomia",
    link: "#",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "30 horas",
      level: "Todos os níveis",
      students: 4500,
      rating: 4.9,
      features: ["Imagens de telescópios", "Simulações planetárias", "Observações guiadas"],
    },
  },

  // Engenharia
  {
    id: 11,
    title: "Fundamentos de Estruturas",
    description: "Princípios básicos de engenharia civil",
    longDescription:
      "Este curso apresenta os princípios fundamentais da análise e design de estruturas na engenharia civil. Você aprenderá sobre forças, momentos, equilíbrio estático, análise de treliças e vigas, propriedades dos materiais, e como projetar estruturas seguras e eficientes que resistam a cargas e condições ambientais.",
    type: "curso",
    area: "engenharia",
    subarea: "engenharia-civil",
    link: "#",
    icon: <Cog className="h-5 w-5" />,
    details: {
      duration: "55 horas",
      level: "Universitário",
      students: 870,
      rating: 4.5,
      features: ["Simulações estruturais", "Estudos de caso reais", "Projetos práticos"],
    },
  },
  {
    id: 12,
    title: "Mecânica dos Fluidos",
    description: "Curso introdutório de engenharia mecânica",
    longDescription:
      "Explore os princípios da mecânica dos fluidos, essenciais para engenharia mecânica, civil e química. Este curso cobre estática e dinâmica dos fluidos, equações de conservação, análise dimensional, escoamento em tubulações, camada limite, e aplicações práticas em sistemas hidráulicos, aerodinâmica e design de turbinas.",
    type: "curso",
    area: "engenharia",
    subarea: "engenharia-mecanica",
    link: "#",
    icon: <Cog className="h-5 w-5" />,
    details: {
      duration: "50 horas",
      level: "Intermediário",
      students: 760,
      rating: 4.6,
      features: ["Experimentos virtuais", "Simulações CFD", "Problemas do mundo real"],
    },
  },
  {
    id: 13,
    title: "Arquitetura de Software",
    description: "Princípios e padrões de design de software",
    longDescription:
      "Este livro abrangente explora os fundamentos da arquitetura de software e padrões de design. Você aprenderá sobre estilos arquiteturais, qualidade de software, escalabilidade, manutenibilidade, padrões de design comuns, microserviços, arquiteturas orientadas a eventos, e como tomar decisões arquiteturais para sistemas complexos.",
    type: "livro",
    area: "engenharia",
    subarea: "engenharia-de-software",
    link: "#",
    icon: <Cog className="h-5 w-5" />,
    details: {
      level: "Avançado",
      rating: 4.8,
      features: ["Estudos de caso detalhados", "Diagramas UML", "Exemplos de código"],
    },
  },

  // Matemática
  {
    id: 14,
    title: "Álgebra Linear",
    description: "Fundamentos de álgebra linear para ciência e engenharia",
    longDescription:
      "Este curso aborda os conceitos fundamentais da álgebra linear e suas aplicações. Você estudará vetores, espaços vetoriais, transformações lineares, sistemas de equações lineares, autovalores e autovetores, e aplicações em computação gráfica, aprendizado de máquina, física e engenharia.",
    type: "curso",
    area: "matematica",
    subarea: "algebra",
    link: "#",
    icon: <Calculator className="h-5 w-5" />,
    details: {
      duration: "45 horas",
      level: "Universitário",
      students: 2300,
      rating: 4.7,
      features: ["Visualizações interativas", "Exercícios resolvidos", "Aplicações práticas"],
    },
  },
  {
    id: 15,
    title: "Estatística Aplicada",
    description: "Métodos estatísticos para análise de dados",
    longDescription:
      "Aprenda a aplicar métodos estatísticos para extrair insights significativos de dados. Este curso cobre estatística descritiva, probabilidade, distribuições, inferência estatística, testes de hipóteses, regressão, análise de variância, e como interpretar resultados estatísticos para tomada de decisões baseadas em dados.",
    type: "curso",
    area: "matematica",
    subarea: "estatistica",
    link: "#",
    icon: <Calculator className="h-5 w-5" />,
    details: {
      duration: "40 horas",
      level: "Intermediário",
      students: 1850,
      rating: 4.6,
      features: ["Análises com R e Python", "Datasets reais", "Interpretação de resultados"],
    },
  },
  {
    id: 16,
    title: "Cálculo Diferencial e Integral",
    description: "Curso introdutório de cálculo",
    longDescription:
      "Este curso abrangente introduz os fundamentos do cálculo diferencial e integral. Você aprenderá sobre limites, derivadas, integrais, teorema fundamental do cálculo, séries, equações diferenciais básicas e aplicações em física, engenharia, economia e outras ciências. Inclui visualizações e exemplos do mundo real.",
    type: "curso",
    area: "matematica",
    subarea: "calculo",
    link: "#",
    icon: <Calculator className="h-5 w-5" />,
    details: {
      duration: "70 horas",
      level: "Universitário",
      students: 3500,
      rating: 4.8,
      features: ["Gráficos interativos", "Exercícios graduados", "Aplicações interdisciplinares"],
    },
  },
  {
    id: 17,
    title: "Matemática Discreta para Computação",
    description: "Fundamentos matemáticos para ciência da computação",
    longDescription:
      "Este livro explora os conceitos matemáticos essenciais para ciência da computação. Aborda lógica proposicional, teoria dos conjuntos, relações e funções, teoria dos grafos, árvores, indução matemática, combinatória, teoria dos números e criptografia. Essencial para algoritmos, estruturas de dados, inteligência artificial e segurança computacional.",
    type: "livro",
    area: "matematica",
    subarea: "matematica-discreta",
    link: "#",
    icon: <Calculator className="h-5 w-5" />,
    details: {
      level: "Intermediário",
      rating: 4.7,
      features: ["Exemplos de aplicação", "Exercícios resolvidos", "Pseudocódigos"],
    },
  },
  {
    id: 21,
    title: "Fundamentos da Neurociência, Parte 1",
    description: "As propriedades elétricas no neurônio. Por HarvardX.",
    longDescription:
      "Curso que explora a estrutura e a função do Sistema Nervoso, é uma série de três cursos. Neste primeiro curso, será possível aprender como os neurônios utilizam eletricidade para transmitir informações. Você aprenderá sobre as propriedades elétricas dos neurônios, como eles se comunicam e como os sinais elétricos são processados no cérebro.",
    type: "curso",
    area: "ciencia",
    subarea: "neurociencia",
    link: "https://www.edx.org/learn/neuroscience/harvard-university-fundamentals-of-neuroscience-part-1-the-electrical-properties-of-the-neuron",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "5 semanas, 3-5 horas por semana",
      level: "Iniciante",
      students: 628841,
      rating: 4.7,
      features: ["Certificado de conclusão", "Projetos práticos", "Simulações interativas"],
    },
  },
  {
    id: 22,
    title: "Fundamentos da Neurociência, Parte 2",
    description: "Neurônios e Redes. Por HarvardX.",
    longDescription:
      "Descubra como os neurônios trabalham juntos para criar redes complexas dentro do cérebro. Examinamos como os neurônios transmitem sinais uns aos outros e como dinâmicas complexas podem resultar de apenas alguns neurônios dispostos em circuitos simples.",
    type: "curso",
    area: "ciencia",
    subarea: "neurociencia",
    link: "https://www.edx.org/learn/neuroscience/harvard-university-fundamentals-of-neuroscience-part-2-neurons-and-networks",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "6 semanas, 3-5 horas por semana",
      level: "Iniciante",
      students: 119118,
      rating: 4.6,
      features: ["Certificado de conclusão", "Laboratórios virtuais", "Documentários"],
      learnings: [
        "Noções básicas de sinapses",
        "Como os neurônios se comunicam entre si",
        "Como os neurônios interconectados em circuitos neuronais interagem entre si",
        "O papel da neuromodulação no disparo das sinapses",
      ],
    },
  },
  {
    id: 23,
    title: "Fundamentos da Neurociência, Parte 3",
    description: "O Cérebro. Por HarvardX.",
    longDescription:
      "Descubra o que faz seu cérebro funcionar neste terceiro curso da série introdutória em neurociência. Será explorado como os vários subsistemas do cérebro trabalham em conjunto para nos permitir sobreviver e prosperar em um mundo em constante mudança.",
    type: "curso",
    area: "ciencia",
    subarea: "neurociencia",
    link: "https://www.edx.org/learn/neuroscience/harvard-university-fundamentals-of-neuroscience-part-3-the-brain",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "8 semanas, 3-5 horas por semana",
      level: "Iniciante",
      students: 131509,
      rating: 4.9,
      features: ["Certificado de conclusão", "Segmentos interativos", "Documentários"],
      learnings: [
        "Como a percepção sensorial funciona no cérebro",
        "Como funciona a fisiologia da visão, audição, paladar, olfato, tato, controle motor e outros sentidos",
        "Anatomia básica das áreas funcionais do cérebro",
        "O sistema visual do cérebro",
        "Como os subsistemas motores do cérebro executam e coordenam nossos movimentos",
        "Os sistemas cerebrais críticos que nos mantêm vivos",
      ],
    },
  },
  {
    id: 24,
    title: "DelftX: O Hardware de um Computador Quântico",
    description: "Aprenda como um computador quântico pode ser fisicamente construído e controlado",
    longDescription:
      "O objetivo deste curso é ajudá-lo a se atualizar com o progresso atual na transição para a era da informação quântica. Você aprenderá sobre os blocos de construção de um computador quântico e como funcionam os tipos mais promissores de qubits de estado sólido.",
    type: "curso",
    area: "ciencia",
    subarea: "fisica",
    link: "https://www.edx.org/learn/quantum-computing/delft-university-of-technology-the-hardware-of-a-quantum-computer",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "6 semanas, 6-8 horas por semana",
      level: "Intermediário",
      students: 29289,
      rating: 4.5,
      features: ["Certificado de conclusão", "Laboratórios virtuais", "Documentários"],
      learnings: [
        "Uma visão geral dos blocos de construção de um computador quântico",
        "Como funcionam quatro dos tipos mais promissores de qubits de estado sólido: qubits Transmon supercondutores, qubits de spin de silício, qubits centrais NV de diamante e qubits topológicos",
        "Como as portas quânticas, as operações básicas da computação quântica, são executadas em cada uma dessas implementações de qubit",
      ],
    },
  },
  {
    id: 25,
    title: "UChicago: Introdução à Computação Quântica para Todos",
    description: "Introdução intuitiva aos fenômenos da física quântica e algoritmos",
    longDescription:
      "Este primeiro curso aborda os impactos futuros da computação quântica, oferece introduções intuitivas aos fenômenos da física quântica e avança de operações individuais para um algoritmo completo. Projetado para ser acessível a todos com conhecimentos básicos de álgebra.",
    type: "curso",
    area: "ciencia",
    subarea: "fisica",
    link: "https://www.edx.org/learn/quantum-computing/university-of-chicago-introduction-to-quantum-computing-for-everyone",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "5 semanas, 3-5 horas por semana",
      level: "Introdutório",
      students: 23588,
      rating: 4.0,
      features: ["Certificado de conclusão"],
      learnings: [
        "Quais tipos de aplicações podem se beneficiar da computação quântica",
        "Princípios da física quântica e como eles afetam a computação quântica",
        "Representação matemática do estado quântico",
        "Operações quânticas individuais",
        "Operações matemáticas para calcular operações quânticas",
        "Representação de sequências de múltiplas operações",
        "Algoritmo de Deutsch",
      ],
    },
  },
  {
    id: 26,
    title: "DelftX: Física Pré-Universitária",
    description: "Revise os fundamentos da física para interesse pessoal ou acadêmico",
    longDescription:
      "Neste curso, você terá a oportunidade de revisar os fundamentos da física, seja para seu próprio interesse ou para garantir um início tranquilo no primeiro ano do seu bacharelado. Aborda tópicos essenciais como mecânica, eletricidade, magnetismo e ondas.",
    type: "curso",
    area: "ciencia",
    subarea: "fisica",
    link: "https://www.edx.org/learn/physics/delft-university-of-technology-pre-university-physics",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "5 semanas, 6-8 horas por semana",
      level: "Introdutório",
      students: 32997,
      rating: 4.4,
      features: ["Certificado de conclusão"],
      learnings: [
        "Compreensão básica dos seguintes tópicos de física: mecânica, eletricidade e magnetismo e ondas",
        "Aplicação desse conhecimento em vários contextos de engenharia",
        "Introdução à abordagem acadêmica da física",
        "Engenharia Aeroespacial",
        "Física Aplicada",
        "Engenharia Elétrica",
        "Engenharia Mecânica",
      ],
    },
  },
  {
    id: 27,
    title: "StanfordOnline: Mecânica Quântica para Cientistas e Engenheiros 1",
    description: "Introdução substancial à mecânica quântica e sua utilização",
    longDescription:
      "Este curso é uma introdução substancial à mecânica quântica e à sua utilização. Foi projetado especificamente para ser acessível não apenas a físicos, mas também a estudantes e profissionais técnicos de diversas áreas da ciência e engenharia.",
    type: "curso",
    area: "ciencia",
    subarea: "fisica",
    link: "https://www.edx.org/learn/quantum-physics-mechanics/stanford-university-quantum-mechanics-for-scientists-and-engineers-1",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "9 semanas, 5-10 horas por semana",
      level: "Intermediário",
      students: 40143,
      rating: 4.5,
      features: ["Certificado de conclusão"],
      learnings: [
        "Uma compreensão conceitual da mecânica quântica",
        "Conceitos-chave da física",
        "Ideias-chave no uso de ondas mecânicas quânticas",
        "Matemática das ondas mecânicas quânticas",
        "Mecânica quântica de sistemas que mudam no tempo",
        "Medições em mecânica quântica",
        "O princípio da incerteza",
        "O átomo de hidrogênio",
        "Como resolver problemas reais",
      ],
    },
  },
  {
    id: 28,
    title: "DoaneX: Introdução à Farmacologia",
    description: "Explorando o mecanismo de ação de medicamentos farmacêuticos em nível molecular",
    longDescription:
      "Este curso de farmacologia explorará o mecanismo de ação de medicamentos farmacêuticos em nível molecular. Você aprenderá sobre os princípios fundamentais da ação dos medicamentos, o processo de desenvolvimento de medicamentos e as principais classes de medicamentos terapêuticos.",
    type: "curso",
    area: "ciencia",
    subarea: "quimica",
    link: "https://www.edx.org/learn/medicine/doane-university-introduction-to-pharmacology",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "8 semanas, 10-12 horas por semana",
      level: "Introdutório",
      students: 31544,
      rating: 3.8,
      features: ["Certificado de conclusão"],
      learnings: [
        "Princípios fundamentais da ação dos medicamentos, incluindo farmacocinética básica, farmacodinâmica básica e ligação ao receptor",
        "Processo de desenvolvimento de medicamentos, incluindo o envolvimento de agências reguladoras",
        "Principais classes de medicamentos, incluindo usos terapêuticos, mecanismo de ação e vias de administração",
        "Efeitos colaterais comuns associados às principais classes de medicamentos terapêuticos",
        "Como elaborar uma avaliação de um medicamento recentemente aprovado pela FDA",
        "Cálculos de problemas básicos e avançados de dosagem",
        "Responsabilidades dos profissionais de saúde na prescrição e administração de medicamentos",
      ],
    },
  },
  {
    id: 29,
    title: "ANUx: Astrofísica: O Universo Violento",
    description: "Explore os lugares mais mortais do universo, de buracos negros a supernovas",
    longDescription:
      "Explore os lugares mais mortais do universo, de buracos negros a supernovas. Estudaremos estrelas anãs brancas e estrelas de nêutrons, onde as leis alucinantes da mecânica quântica colidem com a relatividade. E examinaremos novas anãs, novas clássicas, supernovas e até hipernovas: as explosões mais violentas do cosmos.",
    type: "curso",
    area: "ciencia",
    subarea: "astronomia",
    link: "https://www.edx.org/learn/astrophysics/australian-national-university-astrophysics-the-violent-universe",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "10 semanas, 2-4 horas por semana",
      level: "Intermediário",
      students: 18000,
      rating: 4.8,
      features: ["Certificado de conclusão"],
      learnings: [
        "Uma compreensão das anãs brancas, novas, supernovas, estrelas de nêutrons e buracos negros",
        "Como os princípios físicos, incluindo a mecânica quântica e a relatividade, ajudam a explicar esses objetos bizarros",
        "Como os astrofísicos modernos investigam esses mistérios",
      ],
    },
  },

  // Eventos e outros
  {
    id: 18,
    title: "Conferência STEM 2025",
    description: "Evento anual sobre inovações em STEM",
    longDescription:
      "A Conferência STEM 2025 reúne especialistas, pesquisadores, educadores e estudantes para discutir as últimas inovações e tendências nas áreas de ciência, tecnologia, engenharia e matemática. O evento inclui palestras inspiradoras, workshops práticos, apresentações de pesquisas, oportunidades de networking e exposições interativas.",
    type: "evento",
    area: "all",
    subarea: "all",
    link: "#",
    icon: <Calendar className="h-5 w-5" />,
    details: {
      duration: "3 dias",
      level: "Todos os níveis",
      students: 5000,
      features: ["Palestrantes renomados", "Workshops práticos", "Certificado de participação"],
    },
  },
  {
    id: 19,
    title: "Workshop de Robótica",
    description: "Workshop prático de robótica para iniciantes",
    longDescription:
      "Este workshop hands-on introduz os fundamentos da robótica para iniciantes. Os participantes aprenderão sobre componentes eletrônicos, sensores, atuadores, programação básica e design mecânico. Durante o evento, você construirá seu próprio robô funcional e participará de desafios divertidos para testar suas criações.",
    type: "palestra",
    area: "engenharia",
    subarea: "engenharia-mecanica",
    link: "#",
    icon: <Cog className="h-5 w-5" />,
    details: {
      duration: "8 horas",
      level: "Iniciante",
      students: 120,
      features: ["Kit de robótica incluso", "Mentoria personalizada", "Competição final"],
    },
  },
  {
    id: 20,
    title: "Estágio em Desenvolvimento Web",
    description: "Oportunidade para estudantes de tecnologia",
    longDescription:
      "Esta oportunidade de estágio oferece experiência prática em desenvolvimento web front-end e back-end. Os estagiários trabalharão em projetos reais usando tecnologias modernas como React, Node.js e bancos de dados SQL/NoSQL. Inclui mentoria de desenvolvedores seniores, participação em todas as fases do ciclo de desenvolvimento e oportunidade de crescimento profissional.",
    type: "oportunidade",
    area: "tecnologia",
    subarea: "desenvolvimento-web",
    link: "#",
    icon: <Briefcase className="h-5 w-5" />,
    details: {
      duration: "6 meses",
      level: "Estudantes universitários",
      features: ["Bolsa competitiva", "Horário flexível", "Possibilidade de efetivação"],
    },
  },
  // Novos recursos adicionados
  {
    id: 30,
    title: "Currículo de Desenvolvimento Full Stack Certificado",
    description: "Caminho abrangente para se tornar um Desenvolvedor Full Stack",
    longDescription:
      "Oferece um caminho abrangente para se tornar um Desenvolvedor Full Stack Certificado, abrangendo todas as tecnologias essenciais necessárias para criar aplicativos web modernos e escaláveis do início ao fim.",
    type: "curso",
    area: "tecnologia",
    subarea: "desenvolvimento-web",
    link: "https://www.freecodecamp.org/learn/full-stack-developer/",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "5 aulas lançadas",
      level: "Iniciante",
      students: 50000,
      rating: 4.8,
      features: ["Certificado de conclusão"],
      learnings: ["HTML", "CSS", "JavaScript", "Bibliotecas Front-End"],
    },
  },
  {
    id: 31,
    title: "Data Science Do Zero Primeiras Regras Com O Python",
    description: "Construa ferramentas e implemente algoritmos à mão para entendê-los melhor",
    longDescription:
      "Neste Livro, será abordado data science do zero. Significa que será construído por você ferramentas e irá implementar algoritmos à mão, com o objetivo de entendê-los melhor.",
    type: "livro",
    area: "tecnologia",
    subarea: "data-science",
    link: "https://archive.org/details/data-science-do-zero-primeiras-regras-com-o-python/page/n23/mode/2up",
    icon: <BookOpen className="h-5 w-5" />,
    details: {
      duration: "442 páginas",
      level: "Iniciante",
      rating: 4.5,
      features: ["Português"],
      learnings: ["Habilidades de hacker", "Conhecimento de estatística e matemática", "Competência Significativa"],
    },
  },
  {
    id: 32,
    title: "Aprendizado de máquina com Python",
    description: "Aplicações práticas usando TensorFlow para construir redes neurais",
    longDescription:
      "Aplicações práticas que podem ser usadas em projetos e trabalhos. Será utilizado a estrutura TensorFlow para construir diversas redes neurais e explorar técnicas mais avançadas, como processamento de linguagem natural e aprendizado por reforço.",
    type: "curso",
    area: "tecnologia",
    subarea: "machine-learning",
    link: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "10 tópicos de estudo",
      level: "Iniciante",
      students: 35000,
      rating: 4.6,
      features: ["Português"],
      learnings: [
        "A diferença entre aprendizado e lista de instruções",
        "Computadores que aprendem são superiores",
        "Como a máquina aprende, dados de treinos e testes",
        "Problemas de classificação e de regressão",
        "Aprendizado supervisionado ou não supervisionado",
        "Como programar machine learning",
        "Como estudar machine learning",
      ],
    },
  },
  {
    id: 33,
    title: "Treinamento de segurança cibernética ofensiva e defensiva",
    description: "Laboratórios práticos para todos os níveis, do iniciante ao hacker experiente",
    longDescription:
      "Acesse mais de 900 laboratórios de treinamento e caminhos de aprendizagem adequados para todos os níveis, do iniciante ao hacker experiente. O TryHackMe torna o aprendizado envolvente, divertido, acessível e econômico.",
    type: "curso",
    area: "tecnologia",
    subarea: "ciberseguranca",
    link: "https://tryhackme.com/",
    icon: <Shield className="h-5 w-5" />,
    details: {
      duration: "14 desafios interativos",
      level: "Iniciante",
      students: 45000,
      rating: 4.9,
      features: [
        "Certificado de conclusão",
        "Aprenda fazendo",
        "Treinamento no mundo real",
        "Aprendizagem guiada para todas as habilidades",
        "Aulas envolventes e divertidas",
      ],
      learnings: [
        "Segurança cibernética 101",
        "Pré-segurança",
        "SOC Nível 1",
        "Testador de Penetração Jr.",
        "Path de Equipe Vermelha",
        "SOC Nível 2",
        "Engenheiro de Segurança",
        "DevSecOps",
        "Defendendo o Azure",
        "Atacando e defendendo a AWS",
      ],
    },
  },
  {
    id: 34,
    title: "HECMontrealX: Design de UX",
    description: "Domine o Design Thinking e o UX Design por meio do design centrado no usuário",
    longDescription:
      "O design da experiência do usuário ajuda a equipe a aprimorar um novo conceito, interações gerais e experiências desejadas antes de avançar para o design da interface do usuário. Este curso ensina a abordagem de Design Centrado no Usuário e como integrar pesquisa UX no processo de design.",
    type: "curso",
    area: "tecnologia",
    subarea: "ux-ui-design",
    link: "https://www.edx.org/learn/ux-design/hec-montreal-ux-design",
    icon: <Code className="h-5 w-5" />,
    details: {
      duration: "6 semanas, 6-9 horas por semana",
      level: "Intermediário",
      students: 34729,
      rating: 4.4,
      features: ["Certificado de conclusão", "Design Thinking", "Experiência do usuário"],
      learnings: [
        "Abordagem de Design Centrado no Usuário (DCU)",
        "Integração da Pesquisa UX no Processo de Design UX",
        "Inovação incremental, radical e disruptiva",
        "Teoria e prática do Design Thinking",
        "Métodos de Ideação Divergente e Convergente",
        "Análise de Resultados de Ideação",
      ],
    },
  },
  {
    id: 35,
    title: "Introdução a Engenharia Civil",
    description: "Curso gratuito com certificado válido no Brasil e material em PDF",
    longDescription:
      "O curso gratuito de Introdução à Engenharia Civil tem 35 horas, certificado válido no Brasil, material em PDF e acesso online 24h. A prova é liberada após tempo mínimo de estudo. Aborda desde a história da engenharia até conceitos fundamentais de estruturas e materiais.",
    type: "curso",
    area: "engenharia",
    subarea: "engenharia-civil",
    link: "https://upcursosgratis.com.br/curso-online-gratis/introducao-a-engenharia-civil",
    icon: <Cog className="h-5 w-5" />,
    details: {
      duration: "35 horas",
      level: "Iniciante",
      rating: 4.5,
      features: ["Certificado de conclusão", "Material em PDF", "Português"],
      learnings: [
        "História da Engenharia",
        "Inovações tecnológicas",
        "Física aplicada para edificações",
        "Principais conceitos de estabilidade estrutural",
        "Breve apresentação dos materiais comumente utilizados nas estruturas",
        "Conceitos de resistência e desempenho físico das estruturas",
        "Concreto armado",
        "Vínculos estruturais",
        "Conceito de estruturas",
        "Noções Básicas de mecânica dos solos e fundações",
      ],
    },
  },
  {
    id: 36,
    title: "IBM: Noções básicas de engenharia de software para todos",
    description: "Construa a base para uma carreira requisitada em Engenharia de Software",
    longDescription:
      "Explore os princípios, processos, arquitetura, ferramentas e stacks fundamentais da engenharia de software. Ouça especialistas em software discutirem o que é preciso para ter sucesso. Este curso oferece uma base sólida para quem deseja iniciar na área de desenvolvimento de software.",
    type: "curso",
    area: "engenharia",
    subarea: "engenharia-de-software",
    link: "https://www.edx.org/learn/software-engineering/ibm-software-engineering-basics-for-everyone",
    icon: <Cog className="h-5 w-5" />,
    details: {
      duration: "6 semanas, 10-14 horas por semana",
      level: "Iniciante",
      students: 33895,
      rating: 4.6,
      features: ["Certificado de conclusão", "Experiência do usuário"],
      learnings: [
        "Explique engenharia de software, ciclo de vida de desenvolvimento de software (SDLC) e ferramentas, tecnologias e pilhas de desenvolvimento de software",
        "Descreva a diferença entre os tipos de linguagens de programação e crie construções básicas de programação, como loops e condições, usando Python",
        "Descreva abordagens para arquitetura e design de aplicativos, padrões e arquiteturas de implantação",
        "Resuma as habilidades necessárias em engenharia de software e descreva as opções de carreira que ela oferece",
      ],
    },
  },
  {
    id: 37,
    title: "DelftX: Álgebra Linear I: Vetores e Equações Lineares",
    description: "Visão geral da álgebra linear em nível de bacharelado",
    longDescription:
      "Este curso se concentra em vetores (tanto da perspectiva algébrica quanto geométrica) e na resolução de equações lineares. Ele ajudará você a atualizar seus conhecimentos, testar suas habilidades e revisar as relações entre os diversos conceitos da álgebra linear.",
    type: "curso",
    area: "matematica",
    subarea: "algebra",
    link: "https://www.edx.org/learn/linear-algebra/delft-university-of-technology-linear-algebra-i-vectors-and-linear-equations",
    icon: <Calculator className="h-5 w-5" />,
    details: {
      duration: "6 semanas, 4-6 horas por semana",
      level: "Intermediário",
      rating: 4.5,
      features: ["Certificado de conclusão"],
      learnings: [
        "Vetores",
        "Equações lineares",
        "Dependência linear",
        "Subespaços lineares",
        "Ortogonalidade",
        "Soluções de mínimos quadrados",
      ],
    },
  },
  {
    id: 38,
    title: "GalileoX: Estatística Aplicada aos Negócios",
    description: "Usa estatística descritiva e inferencial nos negócios",
    longDescription:
      "Este curso on-line traz uma introdução à análise de dados para business intelligence. Aprenderás de ferramentas e técnicas de estatística descritiva e inferencial. Será capaz de analisar dados e gráficos para transformar informações de valor que permitam obter critérios para a tomada de decisões.",
    type: "curso",
    area: "matematica",
    subarea: "estatistica",
    link: "https://www.edx.org/learn/data-analysis/universidad-galileo-estadistica-aplicada-a-los-negocios",
    icon: <Calculator className="h-5 w-5" />,
    details: {
      duration: "5 semanas, 5-6 horas por semana",
      level: "Iniciante",
      students: 31115,
      rating: 4.8,
      features: ["Certificado de conclusão", "Espanhol"],
      learnings: ["Estimadores", "Escalas de medição", "Desvio Padrão", "Intervalos de confiança"],
    },
  },
  {
    id: 39,
    title: "TsinghuaX: Matemática Combinatória",
    description: "Descubra como aplicar princípios de contagem e combinatória",
    longDescription:
      "Este curso é baseado em uma renomada disciplina presencial da Tsinghua, chamada Combinatória, e é ideal para alunos interessados em matemática ou ciência da computação. Aprenda a aplicar princípios de contagem e combinatória para resolver problemas de ciência da computação, análise financeira e do seu dia a dia.",
    type: "curso",
    area: "matematica",
    subarea: "matematica-discreta",
    link: "https://www.edx.org/learn/math/tsinghua-university-combinatorial-mathematics-zu-he-shu-xue",
    icon: <Calculator className="h-5 w-5" />,
    details: {
      duration: "12 semanas, 4-6 horas por semana",
      level: "Introdutório",
      students: 22944,
      rating: 4.8,
      features: ["Certificado de conclusão", "Chinês"],
      learnings: [
        "Princípios de contagem em nossa vida diária",
        "Aplicando matemática à ciência da computação e à análise financeira",
        "A ciência por trás das combinações de itens discretos",
        "Entenda a história da combinatória na vida e na matemática",
      ],
    },
  },
  {
    id: 40,
    title: "HarvardX: Cálculo Aplicado!",
    description: "Aplique ferramentas de cálculo de variável única para criar e analisar modelos matemáticos",
    longDescription:
      "Este curso oferece um complemento exclusivo ao curso de cálculo de variável única. Os tópicos principais incluem a aplicação de derivadas, integrais e equações diferenciais, modelos matemáticos e parâmetros. Aprenda a aplicar o cálculo para resolver problemas do mundo real.",
    type: "curso",
    area: "matematica",
    subarea: "calculo",
    link: "https://www.edx.org/learn/calculus/harvard-university-calculus-applied",
    icon: <Calculator className="h-5 w-5" />,
    details: {
      duration: "10 semanas, 3-6 horas por semana",
      level: "Intermediário",
      students: 173582,
      rating: 4.8,
      features: ["Certificado de conclusão"],
      learnings: [
        "Cálculo aplicado a problemas",
        "Como analisar modelos matemáticos",
        "Apreciação da matemática na solução de problemas no mundo real",
      ],
    },
  },
  {
    id: 41,
    title: "MITx: Probabilidade - A Ciência da Incerteza e dos Dados",
    description: "Aprenda os fundamentos da teoria da probabilidade e suas aplicações em dados",
    longDescription:
      "Este curso aborda os fundamentos da teoria da probabilidade e suas aplicações em ciência de dados, machine learning e análise estatística. Você aprenderá sobre modelos probabilísticos, variáveis aleatórias, distribuições, inferência e processos aleatórios.",
    type: "curso",
    area: "matematica",
    subarea: "probabilidade",
    link: "https://www.edx.org/learn/probability/massachusetts-institute-of-technology-probability-the-science-of-uncertainty-and-data",
    icon: <Calculator className="h-5 w-5" />,
    details: {
      duration: "12 semanas, 4-6 horas por semana",
      level: "Intermediário",
      students: 340674,
      rating: 4.6,
      features: ["Certificado de conclusão"],
      learnings: [
        "A estrutura básica e os elementos dos modelos probabilísticos",
        "Variáveis aleatórias, suas distribuições, médias e variâncias",
        "Cálculos probabilísticos",
        "Métodos de inferência",
        "Leis dos grandes números e suas aplicações",
        "Processos aleatórios",
      ],
    },
  },
]

// Define subareas for each main area
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

export default function BibliotecaPage() {
  const [selectedArea, setSelectedArea] = useState<AreaType>("all")
  const [selectedSubareas, setSelectedSubareas] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredResources, setFilteredResources] = useState<ResourceItem[]>(resourceItems)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  // Apply filters and search
  useEffect(() => {
    let results = resourceItems

    // Filter by area
    if (selectedArea !== "all") {
      results = results.filter((item) => item.area === selectedArea || item.area === "all")
    }

    // Filter by subarea
    if (selectedSubareas.length > 0) {
      results = results.filter(
        (item) => selectedSubareas.includes(item.subarea) || (item.subarea === "all" && item.area === "all"),
      )
    }

    // Filter by content type
    if (selectedTypes.length > 0) {
      results = results.filter((item) => selectedTypes.includes(item.type))
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim()
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.longDescription.toLowerCase().includes(query) ||
          item.area.toLowerCase().includes(query) ||
          item.subarea.toLowerCase().includes(query),
      )
    }

    setFilteredResources(results)
  }, [selectedArea, selectedSubareas, selectedTypes, searchQuery])

  // Toggle subarea selection
  const toggleSubarea = (subareaId: string) => {
    setSelectedSubareas((prev) =>
      prev.includes(subareaId) ? prev.filter((id) => id !== subareaId) : [...prev, subareaId],
    )
  }

  // Toggle content type selection
  const toggleContentType = (typeId: string) => {
    setSelectedTypes((prev) => (prev.includes(typeId) ? prev.filter((id) => id !== typeId) : [...prev, typeId]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedArea("all")
    setSelectedSubareas([])
    setSelectedTypes([])
    setSearchQuery("")
  }

  // Toggle card expansion
  const toggleCardExpansion = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Biblioteca STEM</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore nossa coleção de recursos gratuitos para aprendizado em ciência, tecnologia, engenharia e
              matemática.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <div className="w-full md:w-2/3 relative">
                <Input
                  type="text"
                  placeholder="Buscar recursos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>Filtros</span>
                      {(selectedArea !== "all" || selectedSubareas.length > 0 || selectedTypes.length > 0) && (
                        <Badge className="ml-1 bg-pink-500 hover:bg-pink-600">
                          {selectedArea !== "all" ? 1 : 0 + selectedSubareas.length + selectedTypes.length}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80">
                    <DropdownMenuLabel>Filtrar por área</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <ScrollArea className="h-[300px]">
                      <DropdownMenuGroup className="p-2">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="area-all"
                              checked={selectedArea === "all"}
                              onCheckedChange={() => setSelectedArea("all")}
                            />
                            <Label htmlFor="area-all">Todas as áreas</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="area-ciencia"
                              checked={selectedArea === "ciencia"}
                              onCheckedChange={() => {
                                setSelectedArea("ciencia")
                                setSelectedSubareas([])
                              }}
                            />
                            <Label htmlFor="area-ciencia">Ciência</Label>
                          </div>
                          {selectedArea === "ciencia" &&
                            subareas.ciencia.map((subarea) => (
                              <div key={subarea.id} className="flex items-center space-x-2 ml-6">
                                <Checkbox
                                  id={`subarea-${subarea.id}`}
                                  checked={selectedSubareas.includes(subarea.id)}
                                  onCheckedChange={() => toggleSubarea(subarea.id)}
                                />
                                <Label htmlFor={`subarea-${subarea.id}`}>{subarea.label}</Label>
                              </div>
                            ))}
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="area-tecnologia"
                              checked={selectedArea === "tecnologia"}
                              onCheckedChange={() => {
                                setSelectedArea("tecnologia")
                                setSelectedSubareas([])
                              }}
                            />
                            <Label htmlFor="area-tecnologia">Tecnologia</Label>
                          </div>
                          {selectedArea === "tecnologia" &&
                            subareas.tecnologia.map((subarea) => (
                              <div key={subarea.id} className="flex items-center space-x-2 ml-6">
                                <Checkbox
                                  id={`subarea-${subarea.id}`}
                                  checked={selectedSubareas.includes(subarea.id)}
                                  onCheckedChange={() => toggleSubarea(subarea.id)}
                                />
                                <Label htmlFor={`subarea-${subarea.id}`}>{subarea.label}</Label>
                              </div>
                            ))}
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="area-engenharia"
                              checked={selectedArea === "engenharia"}
                              onCheckedChange={() => {
                                setSelectedArea("engenharia")
                                setSelectedSubareas([])
                              }}
                            />
                            <Label htmlFor="area-engenharia">Engenharia</Label>
                          </div>
                          {selectedArea === "engenharia" &&
                            subareas.engenharia.map((subarea) => (
                              <div key={subarea.id} className="flex items-center space-x-2 ml-6">
                                <Checkbox
                                  id={`subarea-${subarea.id}`}
                                  checked={selectedSubareas.includes(subarea.id)}
                                  onCheckedChange={() => toggleSubarea(subarea.id)}
                                />
                                <Label htmlFor={`subarea-${subarea.id}`}>{subarea.label}</Label>
                              </div>
                            ))}
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="area-matematica"
                              checked={selectedArea === "matematica"}
                              onCheckedChange={() => {
                                setSelectedArea("matematica")
                                setSelectedSubareas([])
                              }}
                            />
                            <Label htmlFor="area-matematica">Matemática</Label>
                          </div>
                          {selectedArea === "matematica" &&
                            subareas.matematica.map((subarea) => (
                              <div key={subarea.id} className="flex items-center space-x-2 ml-6">
                                <Checkbox
                                  id={`subarea-${subarea.id}`}
                                  checked={selectedSubareas.includes(subarea.id)}
                                  onCheckedChange={() => toggleSubarea(subarea.id)}
                                />
                                <Label htmlFor={`subarea-${subarea.id}`}>{subarea.label}</Label>
                              </div>
                            ))}
                        </div>
                      </DropdownMenuGroup>

                      <DropdownMenuSeparator />
                      <DropdownMenuLabel className="pt-2">Tipo de conteúdo</DropdownMenuLabel>
                      <DropdownMenuGroup className="p-2">
                        <div className="grid grid-cols-2 gap-2">
                          {contentTypes.map((type) => (
                            <div key={type.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={`type-${type.id}`}
                                checked={selectedTypes.includes(type.id)}
                                onCheckedChange={() => toggleContentType(type.id)}
                              />
                              <Label htmlFor={`type-${type.id}`}>{type.label}</Label>
                            </div>
                          ))}
                        </div>
                      </DropdownMenuGroup>
                    </ScrollArea>

                    <DropdownMenuSeparator />
                    <div className="p-2">
                      <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
                        Limpar filtros
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {(selectedArea !== "all" || selectedSubareas.length > 0 || selectedTypes.length > 0) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="flex items-center gap-1">
                    <X className="h-4 w-4" />
                    <span>Limpar</span>
                  </Button>
                )}
              </div>
            </div>

            {/* Active filters display */}
            {(selectedArea !== "all" || selectedSubareas.length > 0 || selectedTypes.length > 0) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedArea !== "all" && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <span>
                      Área:{" "}
                      {selectedArea === "ciencia"
                        ? "Ciência"
                        : selectedArea === "tecnologia"
                          ? "Tecnologia"
                          : selectedArea === "engenharia"
                            ? "Engenharia"
                            : "Matemática"}
                    </span>
                    <button onClick={() => setSelectedArea("all")} className="ml-1">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedSubareas.map((subareaId) => {
                  const subareaLabel = Object.values(subareas)
                    .flat()
                    .find((s) => s.id === subareaId)?.label
                  return (
                    <Badge key={subareaId} variant="outline" className="flex items-center gap-1">
                      <span>Subárea: {subareaLabel}</span>
                      <button onClick={() => toggleSubarea(subareaId)} className="ml-1">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )
                })}
                {selectedTypes.map((typeId) => {
                  const typeLabel = contentTypes.find((t) => t.id === typeId)?.label
                  return (
                    <Badge key={typeId} variant="outline" className="flex items-center gap-1">
                      <span>Tipo: {typeLabel}</span>
                      <button onClick={() => toggleContentType(typeId)} className="ml-1">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )
                })}
              </div>
            )}

            {/* Results count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {filteredResources.length}{" "}
                {filteredResources.length === 1 ? "recurso encontrado" : "recursos encontrados"}
              </p>
            </div>

            {/* Resource cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -5 }}
                      className="h-full"
                    >
                      <Card className="h-full border-t-4 border-t-pink-500 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="bg-pink-50 dark:bg-pink-900/20 p-2 rounded-full">{resource.icon}</div>
                            <Badge className={getTypeColor(resource.type as ContentType)}>{resource.type}</Badge>
                          </div>
                          <CardTitle className="mt-3 text-xl">{resource.title}</CardTitle>
                          <CardDescription>{resource.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="pt-0">
                          {expandedCard === resource.id ? (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-sm text-gray-600 dark:text-gray-400"
                            >
                              <p className="mb-4">{resource.longDescription}</p>

                              {resource.details && (
                                <div className="space-y-2 mt-4">
                                  {resource.details.duration && (
                                    <div className="flex items-center gap-2">
                                      <Clock className="h-4 w-4 text-pink-500" />
                                      <span>Duração: {resource.details.duration}</span>
                                    </div>
                                  )}

                                  {resource.details.level && (
                                    <div className="flex items-center gap-2">
                                      <Users className="h-4 w-4 text-pink-500" />
                                      <span>Nível: {resource.details.level}</span>
                                    </div>
                                  )}

                                  {resource.details.students && (
                                    <div className="flex items-center gap-2">
                                      <Users className="h-4 w-4 text-pink-500" />
                                      <span>{resource.details.students.toLocaleString()} participantes</span>
                                    </div>
                                  )}

                                  {resource.details.rating && (
                                    <div className="flex items-center gap-2">
                                      <Star className="h-4 w-4 text-yellow-500" />
                                      <span>{resource.details.rating} / 5.0</span>
                                    </div>
                                  )}

                                  {resource.details.learnings && resource.details.learnings.length > 0 && (
                                    <div className="mt-3">
                                      <p className="font-medium mb-1">Você vai aprender:</p>
                                      <ul className="space-y-1">
                                        {resource.details.learnings.map((learning, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <span className="text-green-500">•</span>
                                            <span>{learning}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {resource.details.features && resource.details.features.length > 0 && (
                                    <div className="mt-3">
                                      <p className="font-medium mb-1">Inclui:</p>
                                      <ul className="space-y-1">
                                        {resource.details.features.map((feature, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                            <span>{feature}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              )}
                            </motion.div>
                          ) : null}
                        </CardContent>

                        <CardFooter className="flex flex-col items-start gap-3">
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">
                              {resource.area === "ciencia"
                                ? "Ciência"
                                : resource.area === "tecnologia"
                                  ? "Tecnologia"
                                  : resource.area === "engenharia"
                                    ? "Engenharia"
                                    : resource.area === "matematica"
                                      ? "Matemática"
                                      : "Geral"}
                            </Badge>
                            {resource.subarea !== "all" && (
                              <Badge variant="outline" className="text-xs">
                                {
                                  Object.values(subareas)
                                    .flat()
                                    .find((s) => s.id === resource.subarea)?.label
                                }
                              </Badge>
                            )}
                          </div>

                          <div className="flex w-full gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              onClick={() => toggleCardExpansion(resource.id)}
                            >
                              {expandedCard === resource.id ? "Ver menos" : "Ver mais"}
                            </Button>

                            <Button
                              variant="default"
                              size="sm"
                              className="flex-1 group"
                              onClick={() => window.open(resource.link, "_blank")}
                            >
                              <span className="mr-1">Acessar</span>
                              <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center">
                    <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                      Nenhum recurso encontrado
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Tente ajustar seus filtros ou termos de busca.
                    </p>
                    <Button variant="outline" onClick={clearFilters}>
                      Limpar filtros
                    </Button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pink-600 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Quer contribuir com a Biblioteca STEM?</h2>
            <p className="text-lg text-white/90 mb-8">
              Se você conhece algum recurso gratuito de qualidade que deveria estar em nossa biblioteca, entre em
              contato conosco. Juntas podemos expandir o acesso ao conhecimento em STEM para mais meninas e mulheres.
            </p>
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-100 hover:text-pink-700">
              Sugerir Recurso
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
