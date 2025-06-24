"use client"

interface WaveDividerProps {
  position?: "top" | "bottom"
  className?: string
  inverted?: boolean
}

export default function WaveDivider({ position = "bottom", className = "", inverted = false }: WaveDividerProps) {
  return (
    <div
      className={`absolute ${position}-0 left-0 right-0 w-full overflow-hidden leading-0 z-10`}
      style={{
        transform: inverted ? "rotate(180deg)" : "rotate(0deg)",
        height: "80px", // Altura aumentada para garantir cobertura completa
      }}
    >
      <svg
        className="relative block w-[102%] h-full" // Largura aumentada para evitar gaps nas laterais
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ marginLeft: "-1%" }} // Deslocamento para compensar a largura extra
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className={className || "fill-white dark:fill-gray-900"}
        />
      </svg>
    </div>
  )
}
