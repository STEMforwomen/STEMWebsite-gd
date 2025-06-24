"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Microscope,
  Code,
  Cog,
  Calculator,
  ChevronRight,
  BookOpen,
  ExternalLink,
  Star,
  Clock,
  Users,
  ArrowLeft,
  Target,
  Lightbulb,
} from "lucide-react"

interface Resource {
  title: string
  description: string
  link: string
  type: "free" | "paid"
  platform: string
  duration?: string
  rating?: number
}

interface Level {
  name: string
  theme: string
  whatToLearn: string[]
  resources: Resource[]
}

interface Career {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  roadmap: Level[]
  averageSalary?: string
  jobGrowth?: string
}

interface Area {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
  careers: Career[]
}

const areas: Area[] = [
  {
    id: "ciencia",
    name: "Ciência",
    description: "Explore o mundo através da pesquisa e descoberta",
    icon: <Microscope className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    careers: [
      {
        id: "bioinformatica",
        name: "Bioinformática",
        description: "Combine biologia e computação para analisar dados biológicos",
        icon: <Microscope className="h-6 w-6" />,
        averageSalary: "R$ 8.000 - R$ 15.000",
        jobGrowth: "+25% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos de Biologia e Programação",
            whatToLearn: [
              "Conceitos básicos de biologia molecular",
              "Introdução à programação (Python)",
              "Estatística básica",
              "Bancos de dados biológicos",
            ],
            resources: [
              {
                title: "Curso de Python para Iniciantes",
                description: "Aprenda Python do zero com foco em ciência de dados",
                link: "https://www.youtube.com/watch?v=S9uPNppGsGo",
                type: "free",
                platform: "YouTube",
                duration: "6 horas",
                rating: 4.8,
              },
              {
                title: "Introduction to Biology - MIT",
                description: "Curso introdutório de biologia do MIT",
                link: "https://ocw.mit.edu/courses/biology/",
                type: "free",
                platform: "MIT OpenCourseWare",
                duration: "12 semanas",
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Análise de Dados Biológicos",
            whatToLearn: [
              "Análise de sequências de DNA/RNA",
              "Ferramentas de bioinformática (BLAST, NCBI)",
              "Visualização de dados biológicos",
              "Algoritmos para bioinformática",
            ],
            resources: [
              {
                title: "Bioinformatics Specialization",
                description: "Especialização completa em bioinformática",
                link: "https://www.coursera.org/specializations/bioinformatics",
                type: "paid",
                platform: "Coursera",
                duration: "6 meses",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Pesquisa e Desenvolvimento",
            whatToLearn: [
              "Machine learning para biologia",
              "Genômica e proteômica",
              "Desenvolvimento de ferramentas bioinformáticas",
              "Publicação científica",
            ],
            resources: [
              {
                title: "Advanced Bioinformatics",
                description: "Curso avançado com projetos reais",
                link: "https://www.edx.org/course/bioinformatics",
                type: "free",
                platform: "edX",
                duration: "10 semanas",
              },
            ],
          },
        ],
      },
      {
        id: "neurociencia",
        name: "Neurociência",
        description: "Estude o sistema nervoso e o comportamento humano",
        icon: <Microscope className="h-6 w-6" />,
        averageSalary: "R$ 7.000 - R$ 12.000",
        jobGrowth: "+15% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos do Sistema Nervoso",
            whatToLearn: [
              "Anatomia do sistema nervoso",
              "Fisiologia neuronal",
              "Métodos de pesquisa em neurociência",
              "Psicologia cognitiva básica",
            ],
            resources: [
              {
                title: "Fundamentos da Neurociência - Harvard",
                description: "Série completa sobre neurociência",
                link: "https://www.edx.org/course/fundamentals-of-neuroscience-part-1",
                type: "free",
                platform: "edX",
                duration: "5 semanas",
                rating: 4.7,
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Técnicas e Análise de Dados",
            whatToLearn: [
              "EEG e fMRI",
              "Análise estatística de dados neurais",
              "Programação em MATLAB/Python",
              "Neuroplasticidade",
            ],
            resources: [
              {
                title: "Computational Neuroscience",
                description: "Neurociência computacional aplicada",
                link: "https://www.coursera.org/learn/computational-neuroscience",
                type: "free",
                platform: "Coursera",
                duration: "8 semanas",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Pesquisa Especializada",
            whatToLearn: [
              "Neurociência cognitiva avançada",
              "Desenvolvimento de experimentos",
              "Machine learning para neurociência",
              "Ética em pesquisa",
            ],
            resources: [
              {
                title: "Advanced Neuroscience Research",
                description: "Métodos avançados de pesquisa",
                link: "https://www.futurelearn.com/courses/neuroscience",
                type: "paid",
                platform: "FutureLearn",
                duration: "12 semanas",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "tecnologia",
    name: "Tecnologia",
    description: "Construa o futuro através da inovação digital",
    icon: <Code className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
    careers: [
      {
        id: "cientista-dados",
        name: "Cientista de Dados",
        description: "Transforme dados em insights valiosos para negócios",
        icon: <Code className="h-6 w-6" />,
        averageSalary: "R$ 8.000 - R$ 18.000",
        jobGrowth: "+35% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos de Dados e Programação",
            whatToLearn: [
              "Python para análise de dados",
              "Estatística descritiva",
              "Pandas e NumPy",
              "Visualização com Matplotlib/Seaborn",
            ],
            resources: [
              {
                title: "Python para Data Science - freeCodeCamp",
                description: "Curso completo e gratuito de Python para ciência de dados",
                link: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
                type: "free",
                platform: "freeCodeCamp",
                duration: "300 horas",
                rating: 4.9,
              },
              {
                title: "Estatística para Data Science",
                description: "Fundamentos estatísticos essenciais",
                link: "https://www.youtube.com/playlist?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN",
                type: "free",
                platform: "YouTube",
                duration: "20 horas",
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Machine Learning e Análise Avançada",
            whatToLearn: [
              "Algoritmos de machine learning",
              "Scikit-learn",
              "SQL avançado",
              "Limpeza e preparação de dados",
              "A/B Testing",
            ],
            resources: [
              {
                title: "Machine Learning Course - Andrew Ng",
                description: "O curso mais famoso de ML do mundo",
                link: "https://www.coursera.org/learn/machine-learning",
                type: "free",
                platform: "Coursera",
                duration: "11 semanas",
                rating: 4.9,
              },
              {
                title: "SQL para Data Science",
                description: "Domine SQL para análise de dados",
                link: "https://www.alura.com.br/curso-online-sql-consultas-avancadas",
                type: "paid",
                platform: "Alura",
                duration: "8 horas",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Deep Learning e Especialização",
            whatToLearn: [
              "Deep Learning com TensorFlow/PyTorch",
              "MLOps e deployment de modelos",
              "Big Data (Spark, Hadoop)",
              "Cloud Computing (AWS, GCP)",
              "Storytelling com dados",
            ],
            resources: [
              {
                title: "Deep Learning Specialization",
                description: "Especialização completa em deep learning",
                link: "https://www.coursera.org/specializations/deep-learning",
                type: "paid",
                platform: "Coursera",
                duration: "4 meses",
              },
              {
                title: "MLOps Engineering",
                description: "Aprenda a colocar modelos em produção",
                link: "https://www.udemy.com/course/mlops-course/",
                type: "paid",
                platform: "Udemy",
                duration: "15 horas",
              },
            ],
          },
        ],
      },
      {
        id: "desenvolvedora-web",
        name: "Desenvolvedora Web",
        description: "Crie aplicações web modernas e responsivas",
        icon: <Code className="h-6 w-6" />,
        averageSalary: "R$ 5.000 - R$ 12.000",
        jobGrowth: "+30% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos do Desenvolvimento Web",
            whatToLearn: [
              "HTML5 semântico",
              "CSS3 e Flexbox/Grid",
              "JavaScript básico",
              "Git e GitHub",
              "Responsividade",
            ],
            resources: [
              {
                title: "Responsive Web Design - freeCodeCamp",
                description: "Aprenda HTML e CSS criando projetos reais",
                link: "https://www.freecodecamp.org/learn/responsive-web-design/",
                type: "free",
                platform: "freeCodeCamp",
                duration: "300 horas",
                rating: 4.8,
              },
              {
                title: "JavaScript Algorithms and Data Structures",
                description: "Fundamentos de JavaScript e algoritmos",
                link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
                type: "free",
                platform: "freeCodeCamp",
                duration: "300 horas",
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Frameworks e Ferramentas Modernas",
            whatToLearn: [
              "React.js ou Vue.js",
              "Node.js e Express",
              "Bancos de dados (SQL/NoSQL)",
              "APIs REST",
              "Webpack e ferramentas de build",
            ],
            resources: [
              {
                title: "Front End Development Libraries",
                description: "Aprenda React, Redux e outras bibliotecas",
                link: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
                type: "free",
                platform: "freeCodeCamp",
                duration: "300 horas",
              },
              {
                title: "Node.js Complete Course",
                description: "Backend completo com Node.js",
                link: "https://www.youtube.com/watch?v=RLtyhwFtXQA",
                type: "free",
                platform: "YouTube",
                duration: "8 horas",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Arquitetura e Performance",
            whatToLearn: [
              "Arquitetura de software",
              "Microserviços",
              "DevOps e CI/CD",
              "Testes automatizados",
              "Performance e otimização",
              "Segurança web",
            ],
            resources: [
              {
                title: "Full Stack Web Development",
                description: "Desenvolvimento full stack completo",
                link: "https://fullstackopen.com/en/",
                type: "free",
                platform: "University of Helsinki",
                duration: "200 horas",
              },
              {
                title: "DevOps para Desenvolvedores",
                description: "Aprenda DevOps na prática",
                link: "https://www.alura.com.br/formacao-devops",
                type: "paid",
                platform: "Alura",
                duration: "40 horas",
              },
            ],
          },
        ],
      },
      {
        id: "hacker-etica",
        name: "Hacker Ética (Segurança)",
        description: "Proteja sistemas e dados contra ameaças cibernéticas",
        icon: <Code className="h-6 w-6" />,
        averageSalary: "R$ 8.000 - R$ 20.000",
        jobGrowth: "+40% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos de Segurança",
            whatToLearn: [
              "Redes de computadores",
              "Sistemas operacionais (Linux)",
              "Criptografia básica",
              "Conceitos de segurança da informação",
            ],
            resources: [
              {
                title: "TryHackMe - Complete Beginner",
                description: "Plataforma interativa para aprender hacking ético",
                link: "https://tryhackme.com/path/outline/beginner",
                type: "free",
                platform: "TryHackMe",
                duration: "64 horas",
                rating: 4.9,
              },
              {
                title: "Linux para Hackers",
                description: "Domine Linux para segurança",
                link: "https://www.youtube.com/watch?v=VbEx7B_PTOE",
                type: "free",
                platform: "YouTube",
                duration: "4 horas",
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Técnicas de Penetration Testing",
            whatToLearn: [
              "Ferramentas de pentest (Nmap, Burp Suite)",
              "Vulnerabilidades web (OWASP Top 10)",
              "Análise de malware",
              "Forense digital básica",
            ],
            resources: [
              {
                title: "Penetration Testing Student",
                description: "Curso oficial de pentest",
                link: "https://www.offensive-security.com/pwk-oscp/",
                type: "paid",
                platform: "Offensive Security",
                duration: "90 dias",
              },
              {
                title: "Web Application Security",
                description: "Segurança em aplicações web",
                link: "https://portswigger.net/web-security",
                type: "free",
                platform: "PortSwigger",
                duration: "40 horas",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Especialização e Certificações",
            whatToLearn: [
              "Red Team operations",
              "Threat hunting",
              "Incident response",
              "Certificações (CISSP, CEH, OSCP)",
            ],
            resources: [
              {
                title: "Advanced Penetration Testing",
                description: "Técnicas avançadas de pentest",
                link: "https://www.cybrary.it/course/advanced-penetration-testing/",
                type: "free",
                platform: "Cybrary",
                duration: "20 horas",
              },
            ],
          },
        ],
      },
      {
        id: "desenvolvedora-mobile",
        name: "Desenvolvedora Mobile",
        description: "Desenvolva aplicativos para iOS e Android",
        icon: <Code className="h-6 w-6" />,
        averageSalary: "R$ 6.000 - R$ 14.000",
        jobGrowth: "+25% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos do Desenvolvimento Mobile",
            whatToLearn: [
              "Conceitos de UX/UI mobile",
              "Dart e Flutter ou React Native",
              "Gerenciamento de estado",
              "APIs e consumo de dados",
            ],
            resources: [
              {
                title: "Flutter Course for Beginners",
                description: "Aprenda Flutter do zero",
                link: "https://www.youtube.com/watch?v=1ukSR1GRtMU",
                type: "free",
                platform: "YouTube",
                duration: "37 horas",
                rating: 4.8,
              },
              {
                title: "React Native - The Practical Guide",
                description: "Desenvolvimento mobile com React Native",
                link: "https://www.udemy.com/course/react-native-the-practical-guide/",
                type: "paid",
                platform: "Udemy",
                duration: "32 horas",
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Recursos Nativos e Performance",
            whatToLearn: [
              "Acesso a recursos do dispositivo",
              "Banco de dados local",
              "Notificações push",
              "Otimização de performance",
            ],
            resources: [
              {
                title: "Advanced Flutter Development",
                description: "Flutter avançado com recursos nativos",
                link: "https://www.udemy.com/course/flutter-advanced-course/",
                type: "paid",
                platform: "Udemy",
                duration: "25 horas",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Arquitetura e Publicação",
            whatToLearn: [
              "Arquiteturas avançadas (Clean Architecture)",
              "Testes automatizados",
              "CI/CD para mobile",
              "Publicação nas stores",
            ],
            resources: [
              {
                title: "Mobile DevOps",
                description: "DevOps para aplicações mobile",
                link: "https://docs.microsoft.com/en-us/appcenter/",
                type: "free",
                platform: "Microsoft Learn",
                duration: "15 horas",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "engenharia",
    name: "Engenharia",
    description: "Projete e construa soluções para o mundo real",
    icon: <Cog className="h-8 w-8" />,
    color: "from-green-500 to-teal-500",
    careers: [
      {
        id: "engenharia-software",
        name: "Engenharia de Software",
        description: "Desenvolva sistemas complexos e escaláveis",
        icon: <Cog className="h-6 w-6" />,
        averageSalary: "R$ 7.000 - R$ 16.000",
        jobGrowth: "+30% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos da Engenharia",
            whatToLearn: [
              "Lógica de programação",
              "Estruturas de dados",
              "Algoritmos básicos",
              "Paradigmas de programação",
            ],
            resources: [
              {
                title: "CS50 - Harvard",
                description: "Introdução à ciência da computação",
                link: "https://cs50.harvard.edu/x/",
                type: "free",
                platform: "Harvard",
                duration: "12 semanas",
                rating: 4.9,
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Desenvolvimento de Sistemas",
            whatToLearn: ["Design patterns", "Arquitetura de software", "Bancos de dados", "Metodologias ágeis"],
            resources: [
              {
                title: "Software Engineering Fundamentals",
                description: "Fundamentos da engenharia de software",
                link: "https://www.edx.org/course/software-engineering",
                type: "free",
                platform: "edX",
                duration: "8 semanas",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Sistemas Distribuídos e Liderança",
            whatToLearn: ["Sistemas distribuídos", "Microserviços", "Liderança técnica", "Gestão de projetos"],
            resources: [
              {
                title: "Distributed Systems",
                description: "Sistemas distribuídos na prática",
                link: "https://www.coursera.org/learn/distributed-systems",
                type: "paid",
                platform: "Coursera",
                duration: "6 semanas",
              },
            ],
          },
        ],
      },
      {
        id: "engenharia-dados",
        name: "Engenharia de Dados",
        description: "Construa pipelines e infraestrutura para big data",
        icon: <Cog className="h-6 w-6" />,
        averageSalary: "R$ 9.000 - R$ 18.000",
        jobGrowth: "+35% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos de Dados",
            whatToLearn: ["SQL avançado", "Python para dados", "Conceitos de ETL", "Modelagem de dados"],
            resources: [
              {
                title: "Data Engineering Fundamentals",
                description: "Fundamentos de engenharia de dados",
                link: "https://www.youtube.com/playlist?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN",
                type: "free",
                platform: "YouTube",
                duration: "25 horas",
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Ferramentas e Pipelines",
            whatToLearn: ["Apache Spark", "Apache Airflow", "Docker e Kubernetes", "Cloud platforms (AWS, GCP)"],
            resources: [
              {
                title: "Data Engineering on Google Cloud",
                description: "Engenharia de dados na nuvem",
                link: "https://www.coursera.org/professional-certificates/gcp-data-engineering",
                type: "paid",
                platform: "Coursera",
                duration: "6 meses",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Arquitetura e Otimização",
            whatToLearn: [
              "Data lakes e data warehouses",
              "Stream processing",
              "Otimização de performance",
              "Governança de dados",
            ],
            resources: [
              {
                title: "Advanced Data Engineering",
                description: "Técnicas avançadas de engenharia de dados",
                link: "https://www.udacity.com/course/data-engineer-nanodegree--nd027",
                type: "paid",
                platform: "Udacity",
                duration: "4 meses",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "matematica",
    name: "Matemática",
    description: "Resolva problemas complexos através da análise quantitativa",
    icon: <Calculator className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    careers: [
      {
        id: "matematica-aplicada",
        name: "Matemática Aplicada",
        description: "Aplique conceitos matemáticos para resolver problemas reais",
        icon: <Calculator className="h-6 w-6" />,
        averageSalary: "R$ 6.000 - R$ 12.000",
        jobGrowth: "+20% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos Matemáticos",
            whatToLearn: [
              "Cálculo diferencial e integral",
              "Álgebra linear",
              "Estatística e probabilidade",
              "Programação matemática (Python/R)",
            ],
            resources: [
              {
                title: "Khan Academy - Calculus",
                description: "Cálculo completo e gratuito",
                link: "https://www.khanacademy.org/math/calculus-1",
                type: "free",
                platform: "Khan Academy",
                duration: "150 horas",
                rating: 4.8,
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Métodos Numéricos e Modelagem",
            whatToLearn: ["Métodos numéricos", "Equações diferenciais", "Otimização", "Modelagem matemática"],
            resources: [
              {
                title: "Numerical Methods",
                description: "Métodos numéricos aplicados",
                link: "https://www.coursera.org/learn/numerical-methods",
                type: "free",
                platform: "Coursera",
                duration: "8 semanas",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Pesquisa e Especialização",
            whatToLearn: ["Análise complexa", "Topologia", "Pesquisa operacional", "Publicação científica"],
            resources: [
              {
                title: "Advanced Mathematical Methods",
                description: "Métodos matemáticos avançados",
                link: "https://www.edx.org/course/advanced-mathematics",
                type: "free",
                platform: "edX",
                duration: "12 semanas",
              },
            ],
          },
        ],
      },
      {
        id: "atuaria",
        name: "Atuária",
        description: "Analise riscos e incertezas em seguros e finanças",
        icon: <Calculator className="h-6 w-6" />,
        averageSalary: "R$ 8.000 - R$ 15.000",
        jobGrowth: "+18% até 2030",
        roadmap: [
          {
            name: "Iniciante",
            theme: "Fundamentos Atuariais",
            whatToLearn: [
              "Matemática financeira",
              "Probabilidade e estatística",
              "Teoria do risco",
              "Princípios de seguros",
            ],
            resources: [
              {
                title: "Actuarial Science Fundamentals",
                description: "Fundamentos da ciência atuarial",
                link: "https://www.coursera.org/learn/actuarial-science",
                type: "free",
                platform: "Coursera",
                duration: "6 semanas",
              },
            ],
          },
          {
            name: "Intermediário",
            theme: "Modelagem e Análise",
            whatToLearn: [
              "Modelos de sobrevivência",
              "Teoria da credibilidade",
              "Reservas técnicas",
              "Regulamentação do setor",
            ],
            resources: [
              {
                title: "Risk Management and Insurance",
                description: "Gestão de riscos e seguros",
                link: "https://www.edx.org/course/risk-management",
                type: "free",
                platform: "edX",
                duration: "8 semanas",
              },
            ],
          },
          {
            name: "Avançado",
            theme: "Especialização Profissional",
            whatToLearn: [
              "Solvência II",
              "Modelos estocásticos",
              "Certificações profissionais",
              "Consultoria atuarial",
            ],
            resources: [
              {
                title: "Advanced Actuarial Methods",
                description: "Métodos atuariais avançados",
                link: "https://www.actuaries.org/education/",
                type: "paid",
                platform: "IAA",
                duration: "12 meses",
              },
            ],
          },
        ],
      },
    ],
  },
]

export default function Careers() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<number>(0)

  const handleAreaSelect = (areaId: string) => {
    setSelectedArea(areaId)
    setSelectedCareer(null)
    setSelectedLevel(0)
  }

  const handleCareerSelect = (career: Career) => {
    setSelectedCareer(career)
    setSelectedLevel(0)
  }

  const handleBackToAreas = () => {
    setSelectedArea(null)
    setSelectedCareer(null)
    setSelectedLevel(0)
  }

  const handleBackToCareers = () => {
    setSelectedCareer(null)
    setSelectedLevel(0)
  }

  const selectedAreaData = areas.find((area) => area.id === selectedArea)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="careers">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">🚀 Explore Carreiras em STEM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra seu caminho nas áreas de Ciência, Tecnologia, Engenharia e Matemática. Escolha uma área, explore
            carreiras e siga um roadmap personalizado para seu crescimento profissional.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedArea && (
            <motion.div
              key="areas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {areas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="cursor-pointer group"
                  onClick={() => handleAreaSelect(area.id)}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${area.color}`} />
                    <CardHeader className="text-center p-8">
                      <div
                        className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-r ${area.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {area.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-3">{area.name}</CardTitle>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {area.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <div className="flex items-center justify-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300 group-hover:translate-x-1">
                        <span>Explorar carreiras</span>
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {selectedArea && !selectedCareer && selectedAreaData && (
            <motion.div
              key="careers"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="mb-12">
                <Button
                  variant="ghost"
                  onClick={handleBackToAreas}
                  className="mb-6 text-pink-600 hover:text-pink-700 hover:bg-pink-50 transition-all duration-300 text-base"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Voltar para áreas
                </Button>
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedAreaData.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {selectedAreaData.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">{selectedAreaData.name}</h3>
                    <p className="text-gray-600 text-lg">{selectedAreaData.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedAreaData.careers.map((career, index) => (
                  <motion.div
                    key={career.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="cursor-pointer group"
                    onClick={() => handleCareerSelect(career)}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                      <CardHeader className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedAreaData.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                          >
                            {career.icon}
                          </motion.div>
                          <CardTitle className="text-xl font-bold text-gray-800">{career.name}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                          {career.description}
                        </CardDescription>

                        {career.averageSalary && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="text-green-700 border-green-200 bg-green-50 px-3 py-1"
                              >
                                💰 {career.averageSalary}
                              </Badge>
                            </div>
                            {career.jobGrowth && (
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50 px-3 py-1">
                                  📈 {career.jobGrowth}
                                </Badge>
                              </div>
                            )}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="px-8 pb-8">
                        <div className="flex items-center justify-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300 group-hover:translate-x-1">
                          <span>Ver roadmap</span>
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedCareer && selectedAreaData && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="mb-12">
                <Button
                  variant="ghost"
                  onClick={handleBackToCareers}
                  className="mb-6 text-pink-600 hover:text-pink-700 hover:bg-pink-50 transition-all duration-300 text-base"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Voltar para carreiras
                </Button>
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedAreaData.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {selectedCareer.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">{selectedCareer.name}</h3>
                    <p className="text-gray-600 text-lg">{selectedCareer.description}</p>
                  </div>
                </div>
              </div>

              {/* Level Navigation */}
              <div className="flex flex-wrap gap-3 mb-12 justify-center">
                {selectedCareer.roadmap.map((level, index) => (
                  <Button
                    key={index}
                    variant={selectedLevel === index ? "default" : "outline"}
                    onClick={() => setSelectedLevel(index)}
                    className={`px-6 py-3 text-base font-semibold transition-all duration-300 ${
                      selectedLevel === index
                        ? "bg-pink-600 hover:bg-pink-700 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-50 border-gray-300"
                    }`}
                  >
                    {level.name}
                  </Button>
                ))}
              </div>

              {/* Level Content */}
              <motion.div
                key={selectedLevel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="border-0 shadow-xl bg-white overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedAreaData.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                      >
                        {selectedLevel + 1}
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-bold text-gray-800">
                          Nível {selectedCareer.roadmap[selectedLevel].name}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600 mt-1">
                          {selectedCareer.roadmap[selectedLevel].theme}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    {/* Structured Table Layout */}
                    <div className="overflow-x-auto">
                      <div className="min-w-full">
                        {/* Header */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                          <div className="lg:col-span-1">
                            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                              <Target className="h-6 w-6 text-pink-600" />
                              Tema
                            </h4>
                            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-100">
                              <p className="text-gray-700 font-medium text-lg">
                                {selectedCareer.roadmap[selectedLevel].theme}
                              </p>
                            </div>
                          </div>

                          <div className="lg:col-span-1">
                            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                              <Lightbulb className="h-6 w-6 text-pink-600" />O que aprender
                            </h4>
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                              <ul className="space-y-3">
                                {selectedCareer.roadmap[selectedLevel].whatToLearn.map((item, index) => (
                                  <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="lg:col-span-1">
                            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                              <BookOpen className="h-6 w-6 text-pink-600" />
                              Recursos / Cursos
                            </h4>
                            <div className="space-y-4">
                              {selectedCareer.roadmap[selectedLevel].resources.map((resource, index) => (
                                <Card
                                  key={index}
                                  className="border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50"
                                >
                                  <CardContent className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                          <h5 className="font-bold text-gray-800 text-lg">{resource.title}</h5>
                                          <Badge
                                            variant={resource.type === "free" ? "default" : "secondary"}
                                            className={`text-sm font-semibold ${
                                              resource.type === "free"
                                                ? "bg-green-100 text-green-800 border-green-200"
                                                : "bg-orange-100 text-orange-800 border-orange-200"
                                            }`}
                                          >
                                            {resource.type === "free" ? "Gratuito" : "Pago"}
                                          </Badge>
                                        </div>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                                        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                                          <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border">
                                            <Users className="h-4 w-4" />
                                            {resource.platform}
                                          </span>
                                          {resource.duration && (
                                            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border">
                                              <Clock className="h-4 w-4" />
                                              {resource.duration}
                                            </span>
                                          )}
                                          {resource.rating && (
                                            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border">
                                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                              {resource.rating}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                      <Button
                                        size="lg"
                                        variant="outline"
                                        onClick={() => window.open(resource.link, "_blank")}
                                        className="flex-shrink-0 transition-all duration-300 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-300 hover:scale-105"
                                      >
                                        <ExternalLink className="h-5 w-5" />
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
