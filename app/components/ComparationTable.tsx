"use client"

import { motion } from "framer-motion"
import { Check, X, Minus, Zap, Shield, HardDrive, Cpu, Clock, Network } from "lucide-react"

export default function ComparationTable() {
  const features = [
    {
      icon: Cpu,
      name: "CPU (Single Core)",
      description: "Potencia de procesamiento dedicada",
      cprot: "Ryzen 9950X 2 vCores dedicated",
      apex: "Ryzen 7950X 2 vCores dedicated",
      bloom: "Ryzen 5950X 2 vCores dedicated"
    },
    {
      icon: HardDrive,
      name: "RAM",
      description: "Memoria de alto rendimiento",
      cprot: "8GB DDR5 4800MHz",
      apex: "8GB DDR5 4800MHz",
      bloom: "8GB DDR4 2666MHz"
    },
    {
      icon: Zap,
      name: "NVMe SSD 5.0",
      description: "Almacenamiento ultrarrápido",
      cprot: true,
      apex: false,
      bloom: false
    },
    {
      icon: HardDrive,
      name: "Hardware Propio",
      description: "Infraestructura propietaria",
      cprot: true,
      apex: true,
      bloom: true
    },
    {
      icon: Shield,
      name: "Protección DDoS",
      description: "Seguridad contra ataques",
      cprot: { type: "xdp", value: "5Tbps+ o 100Gbps AntiDDoS" },
      apex: "Media",
      bloom: "Media"
    },
    {
      icon: Network,
      name: "Puerto de Red",
      description: "Velocidad de conexión",
      cprot: "2 Gbps",
      apex: "1 Gbps",
      bloom: "1 Gbps"
    },
    {
      icon: Zap,
      name: "Rendimiento",
      description: "Desempeño general del servidor",
      cprot: "Alto",
      apex: "Medio",
      bloom: "Bajo"
    },
    {
      icon: Clock,
      name: "Precio",
      description: "Costo mensual del servicio",
      cprot: "€16 / Mes",
      apex: "€23.99 / Mes",
      bloom: "€22 / Mes"
    }
  ]

  const renderValue = (value, isHighlighted = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-6 h-6 text-cyan-400 mx-auto" />
      ) : (
        <X className="w-6 h-6 text-red-400 mx-auto" />
      )
    }
    
    if (value === 'partial') {
      return <Minus className="w-6 h-6 text-yellow-400 mx-auto" />
    }
    
    if (typeof value === 'object' && value.type === 'xdp') {
      return (
        <div className="text-center">
          <p className="text-cyan-400 font-semibold text-sm">XDP</p>
          <p className="text-xs text-gray-400 mt-1">{value.value}</p>
        </div>
      )
    }
    
    if (value === 'Alto') {
      return (
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-cyan-400 font-bold">Alto</span>
          <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
        </div>
      )
    }
    
    return (
      <span className={`${isHighlighted ? 'text-white font-semibold' : 'text-gray-400'}`}>
        {value}
      </span>
    )
  }

  return (
    <motion.div
      className="relative w-full overflow-hidden bg-black py-20 px-4"
      style={{
        backgroundImage: "url('https://cdn.cprot.net/CPROT-LANDING/Banners/title2.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          ¿Por qué CPROT VPS Hosting?
        </h2>

        <p className="text-center text-gray-400 mb-12 text-lg">
          Comparación real entre CPROT y otros proveedores populares
        </p>

        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* HEADERS */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="col-span-1"></div>
              
              {/* CPROT Column - Highlighted */}
              <motion.div 
                className="relative bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-2xl p-6 border-2 border-cyan-400/50 shadow-[0_0_40px_rgba(56,189,248,0.3)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MEJOR VALOR
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">CPROT</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
              </motion.div>
              
              {/* Other Columns */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-gray-300 text-center">Apex Hosting</h3>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-gray-300 text-center">Bloom Host</h3>
              </div>
            </div>

            {/* FEATURES */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="grid grid-cols-4 gap-4 items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {/* Feature Name */}
                    <div className="flex items-center gap-3 px-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{feature.name}</p>
                        <p className="text-gray-500 text-xs">{feature.description}</p>
                      </div>
                    </div>

                    {/* CPROT Value - Highlighted */}
                    <div className="bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 rounded-xl p-4 border border-cyan-400/30 flex items-center justify-center min-h-[70px]">
                      {renderValue(feature.cprot, true)}
                    </div>

                    {/* Apex Value */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center justify-center min-h-[70px]">
                      {renderValue(feature.apex)}
                    </div>

                    {/* Bloom Value */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center justify-center min-h-[70px]">
                      {renderValue(feature.bloom)}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}