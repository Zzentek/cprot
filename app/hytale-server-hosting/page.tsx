import { Metadata } from 'next'
import DiscordPricingSection from '../components/discord/DiscordPricingSection';
import FeaturesSection from "../components/CaracteristicasMC"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import PanelShowcase from "../components/PanelShowcase"
import LocationsSection from '../components/LocationsSection';
import CaracteristicasMC from '../components/Hytale-1';
import HytalePricingSection from './HytalePricingSection';
import HytaleHeroSection from './HytaleHeroSection';

// ✅ AGREGA ESTO - Los metadatos específicos para esta página
export const metadata: Metadata = {
  title: 'Hytale Server Hosting - CPROT Hosting',
  description: 'Premium Hytale server hosting with ultra-low latency, 24/7 uptime, DDoS protection, and instant setup. Perfect for your Hytale adventures.',
  keywords: ['hytale hosting', 'hytale server', 'game server hosting', 'hytale dedicated server'],
  
  openGraph: {
    title: 'Hytale Server Hosting - CPROT Hosting',
    description: 'Premium Hytale server hosting with ultra-low latency and 24/7 uptime',
    url: 'https://tudominio.com/hytale-server-hosting',
    siteName: 'CPROT Hosting',
    type: 'website',
    locale: 'es_MX',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Hytale Server Hosting - CPROT Hosting',
    description: 'Premium Hytale server hosting',
  },
  
  robots: {
    index: true,
    follow: true,
  },
}

export default function DiscordPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />
      <HytaleHeroSection />
      <HytalePricingSection />
      <CaracteristicasMC />
      <LocationsSection />
      <FAQSection />
      <PanelShowcase />
      <Footer />
    </div>
  );
}