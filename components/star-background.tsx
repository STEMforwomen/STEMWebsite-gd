"use client"

import { useEffect, useRef } from "react"

interface StarBackgroundProps {
  className?: string
  showRocket?: boolean
}

export default function StarBackground({ className = "", showRocket = true }: StarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>()
  const rocketRef = useRef<{
    x: number
    y: number
    width: number
    height: number
    speed: number
    active: boolean
    reset: boolean
  } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createStars()

      // Reset rocket position on resize
      if (rocketRef.current) {
        rocketRef.current.x = -100
        rocketRef.current.y = canvas.height + 100
      }
    }

    // Create stars with different properties
    const stars: {
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      pulse: number
      color: string
    }[] = []

    const createStars = () => {
      stars.length = 0
      const starCount = Math.min(Math.floor(window.innerWidth / 10), 150)
      const colors = ["255, 255, 255", "255, 200, 255", "200, 200, 255", "255, 255, 200"]

      for (let i = 0; i < starCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.05 + 0.01,
          pulse: Math.random() * 0.1,
          color: color,
        })
      }
    }

    // Initialize rocket
    const initRocket = () => {
      const rocketWidth = 40
      const rocketHeight = 80

      rocketRef.current = {
        x: -100, // Start off-screen to the left
        y: canvas.height + 100, // Start off-screen at the bottom
        width: rocketWidth,
        height: rocketHeight,
        speed: 3, // Speed of the rocket
        active: true,
        reset: false,
      }
    }

    // Draw rocket function - simple outline of a rocket pointing in the direction of movement
    const drawRocket = (x: number, y: number, width: number, height: number) => {
      ctx.save()

      // Translate to the rocket position
      ctx.translate(x, y)

      // Rotate to point in the direction of movement (diagonal up-right)
      // Girar 90 graus para a esquerda (sentido anti-horário) a partir da rotação original
      ctx.rotate(-Math.PI / 4) // -45 graus (45 graus no sentido anti-horário)

      // Set the stroke style to pink
      ctx.strokeStyle = "rgba(255, 105, 180, 0.9)"
      ctx.lineWidth = 2

      // Draw the rocket body (elongated shape)
      ctx.beginPath()

      // Rocket nose cone (now pointing to the right - direction of movement)
      ctx.moveTo(height / 2, 0)
      ctx.lineTo(height / 4, -width / 4)
      ctx.lineTo(-height / 4, -width / 4)

      // Rocket body
      ctx.lineTo(-height / 3, -width / 6)
      ctx.lineTo(-height / 3, width / 6)

      // Back to the right side
      ctx.lineTo(-height / 4, width / 4)
      ctx.lineTo(height / 4, width / 4)
      ctx.closePath()
      ctx.stroke()

      // Draw the fins
      // Top fin
      ctx.beginPath()
      ctx.moveTo(-height / 4, -width / 6)
      ctx.lineTo(-height / 2, -width / 2)
      ctx.lineTo(-height / 3, -width / 6)
      ctx.stroke()

      // Bottom fin
      ctx.beginPath()
      ctx.moveTo(-height / 4, width / 6)
      ctx.lineTo(-height / 2, width / 2)
      ctx.lineTo(-height / 3, width / 6)
      ctx.stroke()

      // Draw the window/porthole
      ctx.beginPath()
      ctx.arc(height / 6, 0, width / 8, 0, Math.PI * 2)
      ctx.stroke()

      // Draw engine exhaust
      ctx.beginPath()
      ctx.moveTo(-height / 3, -width / 8)
      ctx.lineTo(-height / 2, 0)
      ctx.lineTo(-height / 3, width / 8)
      ctx.stroke()

      ctx.restore()
    }

    // Draw stars with enhanced effects
    const drawStars = (timestamp: number) => {
      // Limpar o canvas sem adicionar gradiente de fundo
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw each star
      stars.forEach((star) => {
        // Twinkle effect
        star.opacity += Math.sin(timestamp * 0.001 * star.speed) * star.pulse
        star.opacity = Math.max(0.2, Math.min(1, star.opacity))

        // Subtle size pulsing
        const pulsedSize = star.size + Math.sin(timestamp * 0.003) * 0.5

        // Draw the star with a glow effect
        ctx.beginPath()
        ctx.arc(star.x, star.y, pulsedSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`
        ctx.fill()

        // Add glow
        ctx.beginPath()
        ctx.arc(star.x, star.y, pulsedSize * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${star.color}, ${star.opacity * 0.2})`
        ctx.fill()

        // Occasional shooting star
        if (Math.random() < 0.0005) {
          const length = Math.random() * 100 + 50
          const angle = Math.random() * Math.PI * 2
          const endX = star.x + Math.cos(angle) * length
          const endY = star.y + Math.sin(angle) * length

          ctx.beginPath()
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(endX, endY)
          ctx.strokeStyle = `rgba(${star.color}, ${star.opacity * 0.7})`
          ctx.lineWidth = star.size / 2
          ctx.stroke()
        }
      })

      // Update and draw rocket
      if (showRocket && rocketRef.current) {
        const rocket = rocketRef.current

        if (rocket.active) {
          // Update position - diagonal movement from bottom-left to top-right
          rocket.x += rocket.speed
          rocket.y -= rocket.speed

          // Check if rocket is off-screen
          if (rocket.x > canvas.width + 200 || rocket.y < -200) {
            // If reset flag is true, reset the rocket position
            if (rocket.reset) {
              rocket.x = -100
              rocket.y = canvas.height + 100
              rocket.reset = false
            } else {
              // Otherwise, mark it for reset after a delay
              rocket.active = false
              setTimeout(() => {
                if (rocketRef.current) {
                  rocketRef.current.active = true
                  rocketRef.current.reset = true
                }
              }, 5000) // Wait 5 seconds before sending another rocket
            }
          }

          // Draw the rocket
          drawRocket(rocket.x, rocket.y, rocket.width, rocket.height)
        }
      }

      animationFrameId.current = requestAnimationFrame(drawStars)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Initialize rocket
    if (showRocket) {
      initRocket()
    }

    animationFrameId.current = requestAnimationFrame(drawStars)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [showRocket])

  return <canvas ref={canvasRef} className={`absolute inset-0 z-0 ${className}`} />
}
