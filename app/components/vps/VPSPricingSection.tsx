"use client"

import { motion } from "framer-motion"
import { Cpu, MemoryStick, HardDrive, ChevronLeft, ChevronRight, Wifi } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import vpsConfig from "../../config/sections/vps.json"
import type { VPSConfig } from "../../types/vps"
import { useCurrency } from "../ui/CurrencySelector"

const config = vpsConfig as VPSConfig

export default function VPSPricingSection() {
  const { convertPrice } = useCurrency()
  const [selectedLocation, setSelectedLocation] = useState(config.locations[0].id)
  const [selectedCPU, setSelectedCPU] = useState(config.planTypes[0].id)
  const [currentPage, setCurrentPage] = useState(1)
  const plansPerPage = 4
  
  const currentLocation = config.locations.find(loc => loc.id === selectedLocation)
  const availableCPUs = currentLocation?.availableCpus || []
  const currentPlans = config.plans[selectedCPU] || config.plans[config.planTypes[0].id]
  
  const handleCPUSelection = (cpuId: string) => {
    setSelectedCPU(cpuId)
    setCurrentPage(1)
    const currentLoc = config.locations.find(loc => loc.id === selectedLocation)
    if (currentLoc && !currentLoc.availableCpus.includes(cpuId)) {
      const compatibleLocation = config.locations.find(loc => loc.availableCpus.includes(cpuId))
      if (compatibleLocation) {
        setSelectedLocation(compatibleLocation.id)
      }
    }
  }

  const handleLocationSelection = (locationId: string) => {
    setSelectedLocation(locationId)
    const newLocation = config.locations.find(loc => loc.id === locationId)
    if (newLocation && !newLocation.availableCpus.includes(selectedCPU)) {
      if (newLocation.availableCpus.length > 0) {
        setSelectedCPU(newLocation.availableCpus[0])
        setCurrentPage(1)
      }
    }
  }
  
  const totalPages = Math.ceil(currentPlans.length / plansPerPage)
  const startIndex = (currentPage - 1) * plansPerPage
  const endIndex = startIndex + plansPerPage
  const currentPagePlans = currentPlans.slice(startIndex, endIndex)

  const goToPage = (page: number) => setCurrentPage(page)
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))

  return (
    <section className="bg-black relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Location Filter */}
            <div className="flex flex-col">
              <h2 className="text-sm font-medium text-gray-300 mb-3.5">1. Ubicación</h2>
              <div className="flex flex-wrap gap-2">
                {config.locations.map((location) => {
                  const hasAvailableCpus = location.availableCpus.length > 0
                  const isSelected = selectedLocation === location.id
                  
                  return (
                    <button
                      key={location.id}
                      onClick={() => handleLocationSelection(location.id)}
                      disabled={!hasAvailableCpus}
                      aria-label={`Seleccionar ubicación ${location.displayName}`}
                      className={`flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-all duration-300 ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                          : hasAvailableCpus
                          ? "bg-gray-800/20 border border-gray-700 text-gray-200 hover:bg-gray-700/30"
                          : "bg-gray-800/10 border border-gray-800 text-gray-500 cursor-not-allowed opacity-50"
                      }`}
                    >
                      <Image
                        style={{width:"auto", height:"auto"}}
                        src={location.flag || "/placeholder.webp"}
                        alt={`Bandera de ${location.name}`}
                        width={40}
                        height={24}
                        className={`object-cover ${!hasAvailableCpus ? 'opacity-50' : ''}`}
                        loading="lazy"
                      />
                      <span className="text-sm font-medium">{location.displayName}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* CPU Type Filter */}
            <div className="flex flex-col">
              <h2 className="text-sm font-medium text-gray-300 mb-3">2. Tipo de CPU</h2>
              <div className="flex flex-wrap gap-2">
                {config.planTypes.map((cpu) => {
                  const isAvailable = availableCPUs.includes(cpu.id)
                  const isSelected = selectedCPU === cpu.id
                  
                  return (
                    <button
                      key={cpu.id}
                      onClick={() => handleCPUSelection(cpu.id)}
                      disabled={!isAvailable}
                      aria-label={`Seleccionar CPU ${cpu.displayName}`}
                      className={`flex items-center gap-3 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                          : isAvailable
                          ? "bg-gray-800/20 border border-gray-700 text-gray-200 hover:bg-gray-700/30"
                          : "bg-gray-800/10 border border-gray-800 text-gray-500 cursor-not-allowed opacity-50"
                      }`}
                    >
                      <Image
                        src={cpu.image || "/placeholder.svg"}
                        alt={`Logo ${cpu.name}`}
                        width={32}
                        height={32}
                        className={`rounded-md object-contain ${!isAvailable ? 'opacity-50' : ''}`}
                        loading="lazy"
                      />
                      <span className="text-sm font-semibold">{cpu.displayName}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
        
        <h2 className="text-sm font-medium text-gray-300 mb-3">3. Elige tu Plan</h2>

        {/* Pagination Top */}
        {totalPages > 1 && (
          <nav aria-label="Paginación de planes" className="flex items-center justify-center gap-2 mb-6">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              aria-label="Página anterior"
              className="p-2 rounded-lg border border-blue-600/20 bg-gray-900/20 text-blue-400 hover:bg-blue-600/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                aria-label={`Ir a página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "border border-blue-600/20 bg-gray-900/20 text-blue-400 hover:bg-blue-600/10"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              aria-label="Página siguiente"
              className="p-2 rounded-lg border border-blue-600/20 bg-gray-900/20 text-blue-400 hover:bg-blue-600/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}

        {/* VPS Plans */}
        <div className="space-y-2">
          {currentPagePlans.map((plan, index) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="backdrop-blur-xl border border-blue-600/20 hover:border-blue-600 rounded-xl p-4 transition-all duration-600"
              style={{backgroundColor:"#0a0a0a"}}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                {/* Plan Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-md flex-shrink-0">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={`Plan ${plan.name}`}
                      fill
                      sizes="56px"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 flex-1">
                  <div className="border border-blue-400/20 flex items-center justify-between px-3 py-2 rounded-md" style={{backgroundColor:"#0d0d0d"}}>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">{plan.cpuDetail}</span>
                    </div>
                    <span className="text-md font-medium rounded-md px-2 py-1 text-blue-400" style={{backgroundColor:"#201e1e"}}>
                      {plan.cpu}
                    </span>
                  </div>
                  <div className="border border-blue-400/20 flex items-center justify-between px-2 py-2 rounded-md" style={{backgroundColor:"#0d0d0d"}}>
                    <div className="flex items-center gap-2">
                      <MemoryStick className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">{plan.ramDetail}</span>
                    </div>
                    <span className="text-md font-medium rounded-md px-2 py-1 text-blue-400" style={{backgroundColor:"#201e1e"}}>
                      {plan.ram}
                    </span>
                  </div>
                  <div className="border border-blue-400/20 flex items-center justify-between px-3 py-2 rounded-md" style={{backgroundColor:"#0d0d0d"}}>
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">{plan.storageDetail}</span>
                    </div>
                    <span className="text-md font-medium rounded-md px-2 py-1 text-blue-400" style={{backgroundColor:"#201e1e"}}>
                      {plan.storage}
                    </span>
                  </div>
                  <div className="border border-blue-400/20 flex items-center justify-between px-3 py-2 rounded-md" style={{backgroundColor:"#0d0d0d"}}>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">{plan.bandwidthDetail}</span>
                    </div>
                    <span className="text-md font-medium rounded-md px-2 py-1 text-blue-400" style={{backgroundColor:"#201e1e"}}>
                      {plan.bandwidth}
                    </span>
                  </div>
                  <div className="border border-blue-400/20 flex items-center justify-between px-3 py-2 rounded-md" style={{backgroundColor:"#0d0d0d"}}>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">{plan.antiddosDetail}</span>
                    </div>
                    <span className="text-md font-medium rounded-md px-2 py-1 text-blue-400" style={{backgroundColor:"#201e1e"}}>
                      {plan.antiddos}
                    </span>
                  </div>
                  <div className="border border-blue-400/20 flex items-center justify-between px-3 py-2 rounded-md" style={{backgroundColor:"#0d0d0d"}}>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">{plan.uplinkDetail}</span>
                    </div>
                    <span className="text-md font-medium rounded-md px-2 py-1 text-blue-400" style={{backgroundColor:"#201e1e"}}>
                      {plan.uplink}
                    </span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-center sm:text-right">
                    {plan.badge && (
                      <p className="text-sm text-red-400">
                        ANTES <span className="line-through">{plan.badge}</span>
                      </p>
                    )}
                    {plan.oferta && (
                      <p className="text-sm text-yellow-400">AHORRA: {plan.oferta} OFF</p>
                    )}
                    <div className="text-lg font-bold text-blue-400">
                      {convertPrice(plan.price)}
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  <a 
                    href={plan.orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 border border-blue-600/20 hover:border-blue-400/40 no-underline"
                  >
                    Contrata YA
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}