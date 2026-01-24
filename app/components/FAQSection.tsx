"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useState } from "react"
import Image from "next/image"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "¿Dan reembolsos?",
    answer: "Ofrecemos una garantía del 100% de reembolso en un periodo de gracia de 72HRs, ligado a terminos y condiciones."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "PayPal, Crypto vía BLOCKHAIN o EXCHANGE (Binance o ByBIT), Tarjetas de crédito y débito (Mastercard o VISA), Transferencias bancarias."
  },
  {
    question: "¿Tienen Proteccion DDoS?",
    answer: "Sí, nuestra capacidad es la gran suma de 10Tbps y 100Gbps."
  },
  {
    question: "¿Qué servicios ofrecen?",
    answer: "Ofrecemos los siguientes: Minecraft Hosting, VPS Hosting, Servidores dedicados, Soporte Profesional, Protección AntiDDoS mediante GRE."
  },
  {
    question: "¿Planes a futuro?",
    answer: "Esperamos en 2026 rentar un QUARTER RACK (ANUAL - BIANUAL) en Miami para ofrecer servidores dedicados y VPS con mejor conectividad internacional."
  },
  {
    question: "¿Servidores propios?",
    answer: "Sí, todos los servidores (VPS / MC HOST) que vendemos nosotros los proveemos."
  },
  {
    question: "¿Tienen IPs dedicadas?",
    answer: "Sí, en VPS ofrecemos 1 IPv4 dedicada sin costo. En Minecraft Hosting, las IPv4 son compartidas y una dedicada tiene un costo adicional de 2.00EUR"
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-black dark:bg-[#08228e] relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black dark:from-[#000000] dark:via-[#0a0b0f]/70 dark:to-[#000000]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Image */}
          <div className="hidden md:block">
            <div className="sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
                <div className="relative h-[300px] md:h-[500px] w-full">
                  <Image
                    src="/feature-9.webp"
                    alt="Server Features"
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - FAQ Content */}
          <div className="bg-black" style={{padding: '1rem', borderRadius: '8px', border: '1px solid gray' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 orbitron-font">
                Preguntas <span className="text-blue-600 dark:text-blue-600 relative">
                  frecuentes
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1729 149"
                    className="absolute left-0 w-full text-blue-600"
                  >
                    <path 
                      d="M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z" 
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="backdrop-blur-sm border border-gray-500 rounded-md overflow-hidden hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  style={{backgroundColor:"#0a0a0a"}}
                  >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-4 sm:px-3 py-3 sm:py-3 flex items-center text-left gap-2 sm:gap-4"
                  >
                    <span className="orbitron-font flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-blue-100 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm sm:text-base">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{faq.question}</span>
                    
                  </button>
                  <div
                    className={`px-4 sm:px-6 transition-all duration-300 overflow-hidden ${
                      openIndex === index ? "pb-3 sm:pb-4 pl-[52px] sm:pl-[72px]" : "h-0"
                    }`}
                  >
                    <p className="text-gray-200 dark:text-gray-200 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
