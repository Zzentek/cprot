"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import heroConfig from "../config/sections/hero.json"
import type { HeroConfig } from "../types/hero"
import uiConfig from "../config/sections/ui.json"

const config = heroConfig as HeroConfig;
import { ArrowRight, Server, Shield, Clock, Users } from "lucide-react"
import { FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const generateBlurDataURL = () => {
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxZjI5MzciLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMTE4MjciLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==';
};

export default function HeroSection() {
  const { t } = useLanguage();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(new Set<number>())
  const controls = useAnimation()
  const currentGame = config.hero.games[currentBannerIndex] || config.hero.games[0]
  const partners = config.hero.partners
  
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  }

  const featureBoxVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      rotateX: 15,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
        delay: 0.4 + index * 0.1,
        duration: 0.7,
      },
    }),
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
      },
    },
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 300,
      },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 300,
      },
    },
    tap: { scale: 0.98 },
  }

  const decorativeSvgVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeOut" as const,
      },
    },
  }
  
const HERO_STYLE: "holy" | "linode" | "vultr" | "ovh" = "holy"

const heroStyles = {
  holy: {
    bg: "bg-black",
    glow: "#2563eb",
    titleGradient: "from-blue-400 to-cyan-400",
    button: "bg-blue-600 hover:bg-blue-500",
  },
  linode: {
    bg: "bg-[#0a0f1f]",
    glow: "#00b4ff",
    titleGradient: "from-cyan-400 to-blue-500",
    button: "bg-cyan-600 hover:bg-cyan-500",
  },
  vultr: {
    bg: "bg-[#0b0b0b]",
    glow: "#7c3aed",
    titleGradient: "from-violet-400 to-fuchsia-500",
    button: "bg-violet-600 hover:bg-violet-500",
  },
  ovh: {
    bg: "bg-[#020617]",
    glow: "#38bdf8",
    titleGradient: "from-sky-400 to-blue-600",
    button: "bg-sky-600 hover:bg-sky-500",
  },
}

const activeStyle = heroStyles[HERO_STYLE]

  return (
    <motion.div
      className={`${activeStyle.bg} relative overflow-hidden`}
      variants={containerVariants}
      initial={isMobile ? false : "hidden"}
      animate={isMobile ? false : "visible"}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://cdn.cprot.net/CPROT-LANDING/Banners/asd4.svg"
          alt="CPROT"
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center w-full h-full"
          quality={80}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black dark:from-[#000000] dark:via-[#000000]/90 dark:to-[#000000]/40" />
      </div>
      
      {!isMobile && (
        <motion.div
          className="absolute top-0 right-0 z-0 pointer-events-none w-screen h-screen overflow-hidden"
          variants={decorativeSvgVariants}
          initial="initial"
          animate="animate"
        >
          <svg
            className="absolute left-[25%] top-[-5%] w-[700px] h-[700px]"
            viewBox="0 0 803 808"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_top)">
              <ellipse cx="401.5" cy="404" rx="101.5" ry="104" fill="#066BDF" />
            </g>
            <defs>
              <filter
                id="filter0_f_top"
                x="0"
                y="0"
                width="803"
                height="808"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_top" />
              </filter>
            </defs>
          </svg>
        </motion.div>
      )}
      
      <div className="relative z-0">
        <section className="flex px-4 sm:px-6 lg:px-8 pt-32 sm:pt-52 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid gap-8 md:gap-12 items-center">
              <motion.div
                className="text-center"
                variants={itemVariants}
              >
                <motion.div
                  variants={itemVariants}
                  className="mb-8"
                >
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight orbitron-font"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                      delay: 0.3,
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentGame.displayName}
                        initial={isMobile ? false : { opacity: 0, y: 30, rotateX: 90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: -30, rotateX: -90 }}
                        transition={{
                          duration: 1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          rotateX: { duration: 0 }
                        }}
                        className="block bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent"
                        style={{ perspective: "1000px" }}
                      >
                        {currentGame.displayName}
                        {currentGame.showSuffix && (
                          <span className="text-gray-900 dark:text-white"> {config.hero.title.suffix}</span>
                        )}
                      </motion.span>
                    </AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    >
                      {config.hero.title.prefix}
                    </motion.span>
                  </motion.h1>
                  <motion.p
                    className="text-md sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 120,
                      delay: 0,
                    }}
                  >
                    {config.hero.description}
                  </motion.p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center"
                >
                  <motion.div
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <a
                      href="#catalogo"
                      className={`group ${activeStyle.button} text-white px-4 py-3 rounded-md font-bold text-md transition-all duration-300 flex items-center gap-2`}
                    >
                      <span className="orbitron-font">CATALOGO</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </a>
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div
              className="mt-16 md:mt-24 overflow-hidden relative h-16 sm:h-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="flex gap-24 absolute whitespace-nowrap animate-scroll will-change-transform">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    id="#catalogo"
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 w-[200px] hover:scale-110 transition-transform duration-300"
                  >
                    <a 
                      key={`${partner.name}-${index}`}
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-[200px] hover:scale-110 transition-transform duration-300"
                    >
                      <img
                        src={partner.src}
                        alt={`${partner.name} - Nuestros aliados`}
                        width={128}
                        height={64}
                        className="h-12 sm:h-16 w-24 sm:w-32 object-contain transition-all duration-700"
                        loading="lazy"
                        quality={60}
                        sizes="(max-width: 640px) 96px, 128px"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="texxt">
              <motion.h1
                className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight orbitron-font"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 0.3,
                }}
              >
                NUESTROS PROVEEDORES
              </motion.h1>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}