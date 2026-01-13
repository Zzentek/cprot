"use client"

import { motion } from "framer-motion"
import { Server, Cpu, MemoryStick, HardDrive, Wifi, HeartPulse } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import hytaleConfig from "../config/sections/hytale.json"
import type { HytaleConfig } from "../types/hytale"
import { CurrencySelector, useCurrency } from "../components/ui/CurrencySelector"


const config = hytaleConfig as HytaleConfig

export default function HytaleServerSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const [selectedPlanType, setSelectedPlanType] = useState(config.planTypes[0].id)

  const currentPlans = config.plans[selectedPlanType] || config.plans[config.planTypes[0].id]
  return (
    <div className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] xl:min-h-screen overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banners/hytale-4.jpg"
          alt=""
          fill
          priority
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ===== CONTENT CONTAINER ===== */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0 py-12 sm:py-16 md:py-20 lg:py-20">
          <div className="grid grid-cols-1 xl:grid-cols-[230px_1fr] gap-8 sm:gap-10 md:gap-12 xl:gap-20 items-center">

            {/* ===== POSTER (HIDDEN ON MOBILE/TABLET) ===== */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group hidden xl:block"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:ring-blue-500/30 transition-all duration-300">
                <Image
                  src="/banners/hytale-front.avif"
                  alt="Hytale Server Hosting"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="230px"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>

            {/* ===== TEXT CONTENT ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center xl:items-start space-y-5 sm:space-y-6 md:space-y-7 xl:space-y-8 text-center xl:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-blue-500 hover:bg-blue-400 transition-all duration-300 text-black px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Server className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span>{config.header.badge.text}</span>
              </motion.div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-white leading-[1.1] sm:leading-[1.05] tracking-tight orbitron-font">
                Hytale Dedicated Server Hosting
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-200 max-w-lg md:max-w-xl xl:max-w-2xl leading-relaxed">
                {config.header.description}
              </p>

              {/* Features (visible desde tablet en adelante) */}
              <div className="flex flex-wrap justify-center xl:justify-start gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg text-xs sm:text-sm text-white border border-white/10">
                  Ryzen 7900
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg text-xs sm:text-sm text-white border border-white/10">
                  NVMe Storage
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg text-xs sm:text-sm text-white border border-white/10">
                  DDoS Protection
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg text-xs sm:text-sm text-white border border-white/10">
                  Profesional Support
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg text-xs sm:text-sm text-white border border-white/10">
                  Dedicated resources
                </span>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-black font-bold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                aria-label="See Plans from 4.99/ Mo"
              >
                <span className="relative z-10">From 4.99 / Mo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}