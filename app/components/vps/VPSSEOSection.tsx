"use client"

import { motion } from "framer-motion"
import { Server, Zap, Shield, Globe, TrendingUp, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import vpsConfig from "../../config/sections/vpsSEO.json"
import type { VPSConfig } from "../../types/vps"

const config = vpsConfig as VPSConfig

export default function VPSSEOSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/20"
            >
              <Server className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-semibold tracking-wide">
                {config.header.badge.text}
              </span>
            </motion.div>

            {/* H1 Title - SEO Critical */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight orbitron-font"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                {config.header.title.split(' ').slice(0, 3).join(' ')}
              </span>
              <br />
              <span className="text-white">
                {config.header.title.split(' ').slice(3).join(' ')}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              {config.header.description1}
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Zap, text: "Ryzen 7900/9950X", color: "from-yellow-400 to-orange-400" },
                { icon: Shield, text: "Protección DDoS", color: "from-green-400 to-emerald-400" },
                { icon: Globe, text: "Miami & México", color: "from-blue-400 to-cyan-400" },
                { icon: TrendingUp, text: "99.9% Uptime", color: "from-purple-400 to-pink-400" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 group"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} shadow-lg`}>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Ver Planes
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <a href="https://lobby.cprot.net/submitticket.php" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-bold text-white border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hover:scale-105">
                Contactar Soporte
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Setup en 5 minutos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Sin contratos</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Server Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Server Image Container */}
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500  blur-2axl"
              />
              
              {/* Server Image - ESTA ES LA QUE CREARÁS EN CANVA */}
              <div className="relative z-10 overflow-hidden border-none">
                <Image
                  src="/server-vps.png"
                  alt="Servidor VPS AMD Ryzen de alta performance"
                  width={600}
                  height={700}
                  priority
                  quality={90}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg className="w-full h-32 sm:h-40" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#000000"/>
        </svg>
      </div>
    </section>
  )
}