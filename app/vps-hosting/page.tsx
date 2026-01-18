import { Metadata } from 'next'
import FeaturesSection from "../components/FeaturesSection"
import LocationsSection from "../components/LocationsSection"
import VPSPricingSection from "../components/vps/VPSPricingSection"
import OSSelectionSection from "../components/vps/OSSelectionSection"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PanelShowcase from "../components/PanelShowcase"
import VPSSEOSection from "../components/vps/VPSSEOSection"

// ✅ METADATOS SEO OPTIMIZADOS
export const metadata: Metadata = {
  title: 'VPS Hosting Ryzen Miami - Alta Calidad y Precio | Desde $4.99/mes',
  description: 'Servidores VPS con procesadores AMD Ryzen de última generación en Miami. NVMe SSD, protección DDoS y 99.9% de uptime garantizado desde $4.99/mes.',
  keywords: [
    'vps hosting miami',
    'vps ryzen',
    'servidor vps barato',
    'vps nvme',
    'vps amd ryzen',
    'hosting vps mexico',
    'vps latam',
    'servidor virtual privado',
    'vps ryzen 7900',
    'vps ryzen 9950x',
  ],
  
  openGraph: {
    title: 'VPS Hosting Ryzen Miami - Alta Calidad y Estable | Desde $2.99/mes',
    description: 'Servidores VPS con AMD Ryzen, NVMe SSD, protección DDoS y 99.9% de uptime. Desde $2.99/mes.',
    url: 'https://cprot.com/vps-hosting',
    siteName: 'CPROT Hosting',
    images: [
      {
        url: '/og-vps.jpg',
        width: 1200,
        height: 630,
        alt: 'VPS Hosting Ryzen Miami CPROT',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'VPS Hosting Ryzen Miami - Desde $4.99/mes',
    description: 'Servidores VPS con AMD Ryzen y NVMe SSD',
    images: ['/og-vps.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://cprot.com/vps-hosting',
  },
}

export default function VPSRyzenMiamiPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />
      <VPSSEOSection />
      <VPSPricingSection />
      <OSSelectionSection />
      <FeaturesSection />
      <FAQSection />
      <PanelShowcase />
      <Footer />
    </div>
  )
}