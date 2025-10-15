"use client"

import { motion } from "framer-motion"
import { Cpu, MemoryStick, HardDrive } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import vpsConfig from "../../config/sections/vps.json"
import type { VPSConfig } from "../../types/vps"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"

const config = vpsConfig as VPSConfig

export default function VPSPricingSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const { t } = useLanguage()
  const [selectedLocation, setSelectedLocation] = useState(config.locations[0].id)
  const [selectedCPU, setSelectedCPU] = useState(config.planTypes[0].id)
  const [currentPage, setCurrentPage] = useState(1)

  const plansPerPage = 3
  const currentLocation = config.locations.find(loc => loc.id === selectedLocation)
  const availableCPUs = currentLocation?.availableCpus || []
  const currentPlans = config.plans[selectedCPU] || config.plans[config.planTypes[0].id]

  const handleCPUSelection = (cpuId: string) => {
    setSelectedCPU(cpuId)
    setCurrentPage(1)
    const currentLoc = config.locations.find(loc => loc.id === selectedLocation)
    if (currentLoc && !currentLoc.availableCpus.includes(cpuId)) {
      const compatibleLocation = config.locations.find(loc => loc.availableCpus.includes(cpuId))
      if (compatibleLocation) setSelectedLocation(compatibleLocation.id)
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
  const currentPagePlans = currentPlans.slice((currentPage - 1) * plansPerPage, currentPage * plansPerPage)

  return (
    <div className="bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/vps/vps-hero-2.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/40 to-transparent dark:from-[#0a0b0f] dark:via-[#0a0b0f]/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-gray-50/40 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/60 dark:to-[#0a0b0f]/60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-left mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-left gap-2 card-primary px-4 py-1 rounded-tl-2xl rounded-br-2xl mb-4 border border-secondary">
                <span className="icon-text-primary text-sm">{t("vps.badge")}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 orbitron-font">
                {t("vps.title").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="icon-text-primary relative">
                  {t("vps.title").split(" ").slice(-1)[0]}
                </span>
              </h2>
              <p className="text-md text-gray-600 max-w-3xl dark:text-gray-300">{t("vps.description")}</p>
            </div>

            <CurrencySelector selectedCurrency={selectedCurrency} onCurrencyChange={setSelectedCurrency} className="w-full sm:w-64 mt-4 sm:mt-0" />
          </div>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-col lg:flex-row gap-6 justify-left items-left mb-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3.5">{t("vps.step1")}</h3>
            <div className="flex flex-wrap gap-2">
              {config.locations.map(location => {
                const hasAvailableCpus = location.availableCpus.length > 0
                const isSelected = selectedLocation === location.id
                return (
                  <button
                    key={location.id}
                    onClick={() => handleLocationSelection(location.id)}
                    disabled={!hasAvailableCpus}
                    className={`flex items-center gap-3 px-4 py-3 rounded-tl-2xl rounded-br-2xl font-medium transition-all duration-300 ${
                      isSelected
                        ? "button-primary border-primary text-button-primary shadow-lg"
                        : hasAvailableCpus
                        ? "bg-gray-200 dark:bg-gray-800/20 border border-secondary text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700/30"
                        : "bg-gray-100 dark:bg-gray-800/10 border border-gray-300/40 text-gray-400 cursor-not-allowed opacity-50"
                    }`}
                  >
                    <Image src={location.flag || "/placeholder.svg"} alt={location.name} width={24} height={24} />
                    <span className="text-sm font-medium">{location.displayName}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{t("vps.step2")}</h3>
            <div className="flex flex-wrap gap-2">
              {config.planTypes.map(cpu => {
                const isAvailable = availableCPUs.includes(cpu.id)
                const isSelected = selectedCPU === cpu.id
                return (
                  <button
                    key={cpu.id}
                    onClick={() => handleCPUSelection(cpu.id)}
                    disabled={!isAvailable}
                    className={`flex items-center gap-3 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isSelected
                        ? "card-primary text-icon-text-primary shadow-lg"
                        : isAvailable
                        ? "bg-gray-200 dark:bg-gray-800/20 border border-secondary hover:bg-gray-300 dark:hover:bg-gray-700/30"
                        : "bg-gray-100 dark:bg-gray-800/10 border border-gray-300/40 text-gray-400 cursor-not-allowed opacity-50"
                    }`}
                  >
                    <Image src={cpu.image || "/placeholder.svg"} alt={cpu.name} width={32} height={32} />
                    <span className="text-sm font-semibold">{cpu.displayName}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Planes */}
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{t("vps.step3")}</h3>
        {currentPagePlans.map(plan => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card-primary border border-secondary rounded-xl p-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image src={plan.image || "/placeholder.svg"} alt="CPU" width={48} height={48} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
                <div className="spec-box"><Cpu className="spec-icon" />{plan.cpu}</div>
                <div className="spec-box"><MemoryStick className="spec-icon" />{plan.ram}</div>
                <div className="spec-box"><HardDrive className="spec-icon" />{plan.storage}</div>
              </div>

              <div className="text-center sm:text-right">
                <div className="text-lg font-bold text-icon-text-primary">
                  {convertPrice(plan.price)}<span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <a href={plan.orderLink} className="button-primary px-6 py-2 mt-2 inline-block rounded-lg">
                  {t("vps.orderNow")}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- CSS inline --- */}
      <style jsx>{`
        .card-primary {
          background: linear-gradient(180deg, rgba(35, 36, 45, 0.9) 0%, rgba(17, 17, 24, 0.95) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
        }
        .border-secondary {
          border-color: rgba(255, 255, 255, 0.1);
        }
        .icon-text-primary {
          color: #22d3ee;
        }
        .button-primary {
          background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%);
          color: white;
          font-weight: 600;
          border: none;
          transition: all 0.3s ease;
        }
        .button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(59, 130, 246, 0.4);
        }
        .text-button-primary {
          color: #22d3ee;
        }
        .spec-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 14px;
          color: #d1d5db;
        }
        .spec-icon {
          width: 18px;
          height: 18px;
          color: #22d3ee;
        }
        .orbitron-font {
          font-family: "Orbitron", sans-serif;
        }
        .dark .card-primary {
          background: linear-gradient(180deg, rgba(25, 25, 35, 0.9) 0%, rgba(10, 10, 15, 0.95) 100%);
        }
      `}</style>
    </div>
  )
}
