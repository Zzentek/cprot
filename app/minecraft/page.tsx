import DiscordPricingSection from '../components/discord/DiscordPricingSection';
import FeaturesSection from "../components/CaracteristicasMC"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import PanelShowcase from "../components/PanelShowcase"
import LocationsSection from '../components/LocationsSection';
import CaracteristicasMC from '../components/CaracteristicasMC';

export default function DiscordPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />
      <DiscordPricingSection />
      <CaracteristicasMC />
      <LocationsSection />
      <FAQSection />
      <PanelShowcase />
      <Footer />
    </div>
  );
}
