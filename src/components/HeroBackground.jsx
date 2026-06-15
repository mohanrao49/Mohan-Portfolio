import { useState } from 'react'

const bgColors = [
  { name: 'red', bg: 'bg-[#dc2626]', color: '#dc2626' },
  { name: 'yellow', bg: 'bg-[#f4c400]', color: '#f4c400' },
  { name: 'green', bg: 'bg-[#16a34a]', color: '#16a34a' },
  { name: 'purple', bg: 'bg-[#7c3aed]', color: '#7c3aed' },
  { name: 'magenta', bg: 'bg-[#d946ef]', color: '#d946ef' },
  { name: 'orange', bg: 'bg-[#ea580c]', color: '#ea580c' },
]

export default function HeroBackground() {
  const [activeBg, setActiveBg] = useState(bgColors[1]) // default yellow

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-0 transition-colors duration-700 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: activeBg.color }}
    >
      {/* Large "PORTFOLIO" watermark text behind the image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[22vw] md:text-[18vw] font-black uppercase text-white/20 leading-none tracking-tighter whitespace-nowrap select-none mix-blend-overlay">
          PORTFOLIO
        </h1>
      </div>

      {/* Centered portrait image with frame */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Subtle white rectangular frame behind the image (1px) */}
        <div className="absolute inset-[-20px] md:inset-[-30px] border border-white/40" />

        {/* Portrait image */}
        <div className="relative">
          {/* 
            TODO: Replace this with YOUR photo (PNG with transparent background works best)
            Put your image in public/assets/ and change the src below.
            Example: src="/assets/hero-portrait.png"
          */}
          <img
            src="/assets/hero1.png"
            alt="Mohan Rao Boddu"
            className="w-[55vw] sm:w-[45vw] md:w-[30vw] lg:w-[25vw] max-w-[400px] aspect-[3/4] object-cover"
          />

          {/* Marching ants selection border (blue dashed) */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full">
              <rect
                width="100%"
                height="100%"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                className="marching-ants"
              />
            </svg>
            {/* Corner handles */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#3b82f6] border border-white" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#3b82f6] border border-white" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#3b82f6] border border-white" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#3b82f6] border border-white" />
          </div>

          {/* Blue glow behind selection */}
          <div className="absolute inset-0 shadow-[0_0_25px_rgba(59,130,246,0.15)] pointer-events-none" />
        </div>
      </div>

      {/* Color picker dots at bottom */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 md:gap-4 p-3 md:p-4 pointer-events-auto">
        {bgColors.map((c) => (
          <button
            key={c.name}
            onClick={() => setActiveBg(c)}
            className={`w-6 h-6 md:w-8 md:h-8 rounded-full shadow-md transition-all duration-300 hover:scale-110 ${activeBg.name === c.name
              ? 'scale-110 ring-4 ring-white/60 shadow-[0_0_15px_rgba(255,255,255,0.5)]'
              : 'border-2 border-white/40 hover:border-white'
              }`}
            style={{ backgroundColor: c.color }}
            aria-label={`Change background to ${c.name}`}
          />
        ))}
      </div>
    </div>
  )
}
