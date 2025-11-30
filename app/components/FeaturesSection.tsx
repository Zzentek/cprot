"use client"

import { motion, useScroll, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Cpu,
  Shield,
  Zap,
  HeartPulse,
  Settings,
  BarChart,
  Cloud,
  Lock,
  Rocket
} from "lucide-react"

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: Cpu,
      title: "Alto rendimiento",
      description: "Opciones especiales de optimización EXTREMA."
    },
    {
      icon: Zap,
      title: "Bajo ping",
      description: "Tenemos las latencias más bajas en México y LATAM."
    },
    {
      icon: Shield,
      title: "Proteccion DDoS",
      description: "Nuestro sistema fué diseñado para proveer 10Tbps y 100Gbps de antiddos y proteger nuestros servicios frente a cualquier ataque."
    },
    {
      icon: HeartPulse,
      title: "Auto Backup",
      description: "Hacemos backups completos de nuestros sistemas diariamente."
    },
    {
      icon: Settings,
      title: "Control total",
      description: "Configura cualquier archivo con nuestro sistema de archivos y SFTP desbloqueado."
    },
    {
      icon: BarChart,
      title: "Recursos escalables",
      description: "Aumenta los recursos o disminuyelos en clicks."
    },
    {
      icon: Cloud,
      title: "Global Network",
      description: "Tenemos acceso a Carriers Tier 1 para ofrecer una baja latencia a nivel GLOBAL."
    }
  ]

  const FeaturedCard = ({ feature, index }: { feature: Feature; index: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const Icon = feature.icon;
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className=" bg-[radial-gradient(50%_50%_at_50%_100%,_rgba(30,121,195,0.15)_0%,_transparent_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_100%,_rgba(30,121,195,0.25)_0%,_transparent_100%),#0a0b0f] backdrop-blur-sm border border-blue-600/30 hover:border-blue-600/60 dark:border-blue-400/40 dark:hover:border-blue-400/60 rounded-md transition-all duration-300 relative col-span-1 md:col-span-2"
      >
        <div className="flex justify-between items-start">
          <div className="flex-1 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold orbitron-font text-gray-900 dark:text-white mb-1 sm:mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{feature.description}</p>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-l border-b border-gray-200 dark:border-white/10 rounded-tr-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </motion.div>
    );
  };

  const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const Icon = feature.icon;
    return (
      <motion.div
        ref={ref}
        key={feature.title}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="bg-black dark:bg-black backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-md hover:bg-gray-50 dark:hover:bg-transparent hover:border-blue-600/40 dark:hover:border-blue-400/40 hover:bg-[radial-gradient(50%_50%_at_50%_100%,_rgba(30,121,195,0.15)_0%,_transparent_100%)] dark:hover:bg-[radial-gradient(50%_50%_at_50%_100%,_rgba(30,121,195,0.25)_0%,_transparent_100%)] hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative"
      >
        <div className="flex justify-between items-start">
          <div className="flex-1 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold orbitron-font text-gray-900 dark:text-white mb-1 sm:mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{feature.description}</p>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-l border-b border-gray-200 dark:border-white/10 rounded-tr-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0a0b0f] relative py-12 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black dark:from-[#000000] dark:via-[#000000]/90 dark:to-[#000000]" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-32 w-72 h-72 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 -right-24 w-56 h-56 bg-blue-400/15 dark:bg-blue-400/10 rounded-full blur-3xl" />
      {/* Content */}
      <div className="relative pt-20  z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-600/20 px-4 py-2 rounded-full mb-4">
            <Rocket className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 text-sm">No te decepcionarás</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 orbitron-font">
            Características <span className="text-blue-600 dark:text-blue-400">Avazadas</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Todo lo que necesitas saber para tu servidor de Minecraft.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Top row - 2 normal cards and 1 featured card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <FeatureCard feature={features[0]} index={0} />
            <FeatureCard feature={features[1]} index={1} />
            <FeaturedCard feature={features[2]} index={2} />
          </div>

          {/* Bottom row - 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {features.slice(3, 7).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
