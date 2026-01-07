"use client"

import { motion } from "framer-motion"

export default function ComparationTable() {
  return (
    <motion.div
      className="relative w-full overflow-hidden bg-black margintop-10 rounded-xl bg-[url('https://cdn.cprot.net/CPROT-LANDING/Banners/title2.svg')] bg-cover bg-center bg-no-repeat absolute inset-0 bg-gradient-to-b 
                  from-black via-black to-transparent 
                  dark:from-[#000000]/50 dark:via-[#000000]/10 dark:to-transparent"
      
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          ¿Porque CPROT VPS Hosting?
        </h2>

        <p className="text-center text-gray-400 mb-10">
          Comparación real entre CPROT y otros proveedores populares
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full border border-white/10 rounded-xl overflow-hidden bg-2xl">
            {/* HEADER */}
            <thead className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-800">
              <tr>
                <th className="p-4 text-left text-white"></th>
                <th className="p-4 text-white text-lg font-bold bg-black/20">
                  CPROT
                </th>
                <th className="p-4 text-white">Apex Hosting</th>
                <th className="p-4 text-white">Bloom Host</th>
              </tr>
            </thead>

            {/* BODY */}
          <div></div>
            <tbody className="bg-[#0A0A0A]">
              {[
                ["CPU (Single Core)", "Ryzen 9950X 2 vCores dedicated", "Ryzen 7950X 2 vCores dedicated", "Ryzen 5950X 2 vCores dedicated"],
                ["RAM", "8GB DDR5 4800MHz", "8GB DDR5 4800MHz", "8GB DDR4 2666MHz"],

                ["NVMe SSD 5.0",
                  <img src="/check.svg" className="h-6 w-6 mx-auto" />,
                  <img src="/x.svg" className="h-6 w-6 mx-auto" />,
                  <img src="/x.svg" className="h-6 w-6 mx-auto" />
                ],

                ["Hardware Propio",
                  <img src="/check.svg" className="h-6 w-6 mx-auto" />,
                  <img src="/check.svg" className="h-6 w-6 mx-auto" />,
                  <img src="/mid.svg" className="h-6 w-6 mx-auto" />
                ],

                ["Protección DDoS",
                  <div className="text-center">
                    <p className="text-cyan-400 font-semibold">XDP</p>
                    <p className="text-white text-sm">10Tbps+ AntiDDoS</p>
                  </div>,
                  "Media", "Media"
                ],

                ["Puerto de Red", "2 Gbps", "1 Gbps", "1 Gbps"],

                ["Rendimiento",
                  <span className="text-cyan-400 font-bold text-lg">🔥 Alto</span>,
                  "Medio", "Bajo"
                ],

                ["Precio", "€16 / Mes", "€23.99 / Mes", "€22 / Mes"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  {/* FEATURE */}
                  <td className="p-4 text-gray-300 font-medium whitespace-nowrap">
                    {row[0]}
                  </td>

                  {/* CPROT */}
                  <td className="
                    relative p-4 text-center font-extrabold
                    bg-gradient-to-b from-cyan-500/10 to-blue-600/10
                    shadow-[0_0_25px_rgba(56,189,248,0.25)]
                    border-x border-cyan-400/30
                    scale-[1.05]
                  ">
                    <div className="flex items-center justify-center">
                      {row[1]}
                    </div>
                  </td>

                  {/* OTHERS */}
                  {row.slice(2).map((cell, idx) => (
                    <td
                      key={idx}
                      className="p-4 text-center text-gray-400"
                    >
                      <div className="flex items-center justify-center">
                        {cell}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}
