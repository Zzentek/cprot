"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import cprotConfig from "../config/sections/cprot.json"
import type { cprotConfig as CprotConfigType } from "../types/cprot"

const config = cprotConfig as CprotConfigType;
import { ArrowRight, Server, Shield, Clock, Users, Check } from "lucide-react"
import { FiExternalLink } from 'react-icons/fi';

const generateBlurDataURL = () => {
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxZjI5MzciLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMTE4MjciLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==';
};

export default function HeroSection() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(new Set<number>())
  const [preloadedImages, setPreloadedImages] = useState(new Set<number>())
  const controls = useAnimation()
  const currentGame = config.hero.games[currentBannerIndex] || config.hero.games[0]
  const partners = config.hero.partners
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

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
        delay: 0 + index * 0.09,
        duration: 0.1,
      },
    }),
    hover: {
      scale: 1.05,
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
        duration: 0,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <motion.div
      className="bg-gray-50 dark:bg-[#0a0b0f] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://cdn.cprot.net/CPROT-LANDING/Favicon.svg"
          alt="Minecraft banner"
          className="object-fill object-center w-full h-full absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b 
                  from-white via-white/40 to-transparent 
                  dark:from-[#0a0b0f]/50 dark:via-[#0a0b0f]/10 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t 
                  from-white via-white/60 to-white/40 
                  dark:from-[#0a0b0f] dark:via-[#0a0b0f]/90 dark:to-[#0a0b0f]/40" />


        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/40 to-transparent dark:from-[#0a0b0f]/50 dark:via-[#0a0b0f]/10 dark:to-transparent"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/60 to-gray-50/40 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/90 dark:to-[#0a0b0f]/40"
        />
      </div>
      <motion.div
        className="absolute top-0 right-0 z-0 pointer-events-none w-screen h-screen overflow-hidden"
        variants={decorativeSvgVariants}
        initial="initial"
        animate="animate"
      >
        <svg
          className="absolute left-[-10%] top-[-5%] w-[800px] h-[700px]"
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
      <div className="relative z-0">
        <section className="flex items-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-52 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                className="text-left"
                variants={itemVariants}
              >
                <motion.div
                  variants={itemVariants}
                  className="mb-8"
                >
                  <motion.h1
                    className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight orbitron-font"
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
                        initial={{ opacity: 0, y: 30, rotateX: 90 }}
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
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}
