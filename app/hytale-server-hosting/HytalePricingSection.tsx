"use client"

import { motion } from "framer-motion"
import { Server, Cpu, MemoryStick, HardDrive, Wifi, HeartPulse } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import hytaleConfig from "../config/sections/hytale.json"
import type { HytaleConfig } from "../types/hytale"
import { CurrencySelector, useCurrency } from "../components/ui/CurrencySelector"

const config = hytaleConfig as HytaleConfig

export default function HytalePlansSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const [selectedPlanType, setSelectedPlanType] = useState(config.planTypes[0].id)

  const currentPlans = config.plans[selectedPlanType] || config.plans[config.planTypes[0].id]

  return (
    <section className="bg-gray-50 dark:bg-[#000000] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Currency Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-600/20 px-4 py-2 rounded-full mb-4">
              <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Choose Your Plan
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 orbitron-font">
              Hytale Server{" "}
              <span className="text-blue-600 dark:text-blue-400">Plans</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
              Select the perfect plan for your Hytale server and get started today!
            </p>
          </div>
          <CurrencySelector
            selectedCurrency={selectedCurrency}
            onCurrencyChange={setSelectedCurrency}
            className="w-full sm:w-64"
          />
        </motion.div>

        {/* Plan Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            1. Plan Type
          </h3>
          <div className="flex flex-wrap gap-2">
            {config.planTypes.map((planType) => (
              <button
                key={planType.id}
                onClick={() => setSelectedPlanType(planType.id)}
                className={`flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedPlanType === planType.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-800/40 border border-gray-300 dark:border-blue-600/40 text-gray-700 dark:text-blue-400 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md"
                }`}
              >
                <Image
                  src={planType.image || "/placeholder.svg"}
                  alt={planType.name}
                  width={32}
                  height={32}
                  className="rounded-md object-contain"
                />
                <span className="text-sm font-semibold">{planType.displayName}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plans Grid */}
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
          2. Choose Plan
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden border border-gray-200 dark:border-blue-600/20 hover:border-blue-400 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl"
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  {/* Location Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/flags/usa.webp"
                        alt="USA Flag"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        MIAMI, FL
                      </p>
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {plan.cpuDetail}
                        </span>
                      </div>
                      <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                        {plan.cpu}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <MemoryStick className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {plan.ramDetail}
                        </span>
                      </div>
                      <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                        {plan.ram}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <HardDrive className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {plan.storageDetail}
                        </span>
                      </div>
                      <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                        {plan.storage}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {plan.bandwidthDetail}
                        </span>
                      </div>
                      <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                        {plan.bandwidth}
                      </span>
                    </div>
                  </div>

                  {/* Uptime */}
                  <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <HeartPulse className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {plan.uptime}
                    </span>
                    
                  </div>

                  {/* Price & CTA */}
                  <div className="space-y-4">
                      <div className="sm:text-lg text-xs text-white">
                        EARLY ACCESS: <span className="text-medium line-through dark:text-red-400">{plan.promo}</span> <span className="text-yellow-400">{plan.porcentaje} OFF</span>
                        <br /> <span className="text-3xl font-bold">CODE: HYTALE</span>
                      </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl font-bold orbitron-font text-gray-900 dark:text-white">
                        {convertPrice(plan.price)}
                      </span>
                      <span className="ml-2 text-gray-500 dark:text-gray-400">
                        {plan.period}
                      </span>
                    </div>
                    
                    
                    <a href={plan.orderLink} target="_blank" rel="noopener noreferrer"
                      className="block w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      SELECCIONAR
                      <svg 
                        className="inline-block w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}