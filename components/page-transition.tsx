"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        {children}
      </motion.div>
    </motion.div>
  )
}
