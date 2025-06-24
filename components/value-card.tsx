"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
  color: "pink" | "purple"
}

export default function ValueCard({ icon, title, description, color }: ValueCardProps) {
  const bgColor = color === "pink" ? "bg-pink-100/80 dark:bg-pink-900/20" : "bg-purple-100/80 dark:bg-purple-900/20"

  const iconBgColor = color === "pink" ? "bg-pink-200/80 dark:bg-pink-800/30" : "bg-purple-200/80 dark:bg-purple-800/30"

  const textColor = color === "pink" ? "text-pink-800 dark:text-pink-300" : "text-purple-800 dark:text-purple-300"

  return (
    <motion.div whileHover={{ y: -5 }} className={`rounded-xl p-6 ${bgColor} h-full flex flex-col min-h-[180px]`}>
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
        <div className={textColor}>{icon}</div>
      </div>
      <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 flex-grow">{description}</p>
    </motion.div>
  )
}
