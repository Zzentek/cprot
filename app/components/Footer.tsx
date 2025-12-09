"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Mail, Phone, Gamepad2, ExternalLink, Target } from "lucide-react"
import DiscordBanner from "./DiscordBanner"

export default function Footer() {
  const quickLinks = [
    { name: "Area de Clientes", href: "https://lobby.cprot.net", target: "_BLANK" },
    { name: "Discord", href: "https://discord.cprot.net", target: "_BLANK" },
    { name: "VPS Panel", href: "https://vps.cprot.net", target: "_BLANK" },
    { name: "Servidores Dedicados", href: "/dedicados" },
    { name: "Minecraft Panel", href: "https://mc.cprot.net", target: "_BLANK" },
  ]

  const legalLinks = [
    { name: "Terminos de servicio", href: "/terms-of-service" },
    { name: "Aviso de privacidad", href: "/aviso-privacidad" },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "admin@cprot.net", href: "mailto:admin@cprot.net" },
    { icon: Phone, label: "Celular", value: "N/A", href: "tel:+52 000 000 0000" },
    { icon: Gamepad2, label: "Minecraft Panel", value: "mc.cprot.net", href: "https://mc.cprot.net", target: "_BLANK" },
  ]

  return (
    <div className="relative">
      {/* Discord Banner with cut-off effect */}
      <div className="relative z-30 -mb-47">
        <DiscordBanner />
      </div>
      
      <footer className="bg-gray-100 dark:bg-[#000000] border-t border-gray-200 dark:border-white/10 relative z-10 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 mt-24  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-1"
      >
            <div className="mb-6">
              <Image
                src="/meta/Favicon.svg"
                alt="CPROT Hosting"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed mb-6">
              Hosting premium pensado en público Mexicano y Latinoamericano.
            </p>
            <div className="text-xs text-gray-300 dark:text-gray-300">
              Hecho por <span className="text-blue-600 dark:text-blue-400 font-medium">TEAM CPROT</span>
            </div>
          </motion.div>

          {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="lg:col-span-1"
      >
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 orbitron-font">Acceso rapido</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:col-span-1"
      >
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 orbitron-font">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="lg:col-span-1"
      >
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 orbitron-font">Contactenos</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <contact.icon className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">{contact.label}</div>
                      <div className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{contact.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10"
      >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CPROT todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm"><a href="https://uptime.cprot.net" target="_BLANK">Todos los sistemas operando</a></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
    </div>
  )
}
