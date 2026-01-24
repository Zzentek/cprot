"use client"

import { useState } from "react"
import {
  Zap,
  Shield,
  Cpu,
  Archive,
  Plug,
  HeartPulse
} from "lucide-react"
import showcaseConfig from "@/app/config/sections/showcase.json"

interface ShowcaseCard {
  id: number
  icon: React.ElementType
  title: string
  description: string
  imageDark: string
  imageLight: string
}

const iconMap = {
  Zap,
  Shield,
  Cpu,
  Archive,
  Plug,
  HeartPulse
}

export default function PanelShowcase() {
  const [activeCard, setActiveCard] = useState(0)

  const showcaseCards: ShowcaseCard[] = showcaseConfig.showcase.cards.map(
    (card) => ({
      id: card.id,
      icon: iconMap[card.icon as keyof typeof iconMap],
      title: card.title,
      description: card.description,
      imageDark: card.imageDark,
      imageLight: card.imageLight
    })
  )

  return (
    <div className="bg-gray-50 dark:bg-black relative py-12 px-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-600/20 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-500 dark:text-blue-400 orbitron-font text-sm">
              Minecraft y VPS Panel
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 orbitron-font">
            Acerca de nuestras{" "}
            <span className="text-blue-500">Plataformas</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            Usamos Pterodactyl Panel para Minecraft Server y VirtFusion para VPS
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT: Cards */}
          <div className="flex flex-col gap-4">
            {showcaseCards.map((card, index) => {
              const Icon = card.icon
              const isActive = index === activeCard

              return (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(index)}
                  className={`text-left border rounded-md overflow-hidden transition-colors
                    ${
                      isActive
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-white/10 hover:border-blue-500/60"
                    }
                  `}
                  style={{ backgroundColor: "#0a0a0a" }}
                >
                  <div className="flex justify-between items-start">
                    <div className="p-4">
                      <h3 className="text-white font-semibold mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {card.description}
                      </p>
                    </div>

                    <div className="bg-white/5 w-12 h-12 border-l border-b border-white/10 rounded-tr-md flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* RIGHT: Image */}
          <div
            className="relative border border-white/10 rounded-md overflow-hidden"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="p-6">
              <div className="relative w-full h-[360px] rounded-lg overflow-hidden">
                <img
                  src={showcaseCards[activeCard].imageDark}
                  alt={showcaseCards[activeCard].title}
                  className="w-full h-full object-cover hidden dark:block"
                />
                <img
                  src={showcaseCards[activeCard].imageLight}
                  alt={showcaseCards[activeCard].title}
                  className="w-full h-full object-cover block dark:hidden"
                />
              </div>
            </div>

            <div className="p-6 border-t border-white/10">
              <h3 className="text-white text-xl font-semibold mb-2">
                {showcaseCards[activeCard].title}
              </h3>
              <p className="text-gray-400 text-sm">
                {showcaseCards[activeCard].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
