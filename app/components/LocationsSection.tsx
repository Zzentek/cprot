"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Image from "next/image";
import { memo, useMemo, useState, useEffect, useRef } from "react";
import uiConfig from "../config/sections/ui.json"

// Locations con endpoint
const locations = [
  {
    name: "Colima, México",
    flag: "/flags/mexico.webp",
    cpu: "AMD Ryzen 5700G",
    lat: 10.7128,
    lng: -142.0060,
    /** endpoint: "http://121.127.43.9" **/
  },
  {
    name: "Miami, US",
    flag: "/flags/usa.webp",
    cpu: "AMD Ryzen 7900",
    lat: 22.9128,
    lng: -114.5060,
   /** endpoint: "http://209.222.97.194" **/
  }
];

// LocationItem con ping
const LocationItem = memo(({ location, index }: { location: typeof locations[0], index: number }) => {
  const [ping, setPing] = useState<number | null>(null);

  const getPingColor = (ping: number | null) => {
  if (ping === null) return "text-gray-500";   // no responde
  if (ping < 100) return "text-green-500";     // rápido
  if (ping < 100) return "text-yellow-500";   // medio
  return "bg-red-500";                      // lento
};

  // Hacer ping HTTP cada 10s
  /** useEffect(() => {
    let interval: NodeJS.Timeout | number | undefined;

    const pingServer = async () => {
      const start = performance.now();
      try {
        await fetch(location.endpoint, { method: "HEAD", mode: "no-cors" }); // HEAD para solo medir
        const end = performance.now();
        setPing(Math.round(end - start));
      } catch {
        setPing(null);
      }
    };

    pingServer();
    interval = window.setInterval(pingServer, 1100);**/


  return (

    
    <motion.div
      className="flex items-center gap-2 sm:gap-4 p-1 sm:p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <Image
        src={location.flag}
        alt={`${location.name} flag`}
        width={40}
        height={40}
        className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full flex-shrink-0"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="min-w-0">
        <p className="text-sm sm:text-lg text-gray-900 dark:text-white font-medium truncate">
          {location.name}
        </p>
        <p className="orbitron-font text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
          {location.cpu}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div></div>
        <p className={`text-g text-gray-400 mt-1 ${getPingColor(ping)}`}>{ping !== null ? `${ping} ms` : "–"}</p>
      </div>
    </motion.div>
  );
});

LocationItem.displayName = 'LocationItem';

// Lat/lng a coordenadas SVG
const latLngToSVG = (lat: number, lng: number) => {
  const svgWidth = 1000;
  const svgHeight = 500;
  const x = ((lng + 180) / 360) * svgWidth * 0.98 + 10;
  const y = ((90 - lat) / 180) * svgHeight * 0.85 + 40;
  return { x, y };
};

// Tooltip
const Tooltip = memo(({ location, x, y, visible }: {
  location: typeof locations[0],
  x: number,
  y: number,
  visible: boolean
}) => {
  if (!visible) return null;
  const tooltipX = x - 100;
  const tooltipY = y - 90;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="absolute pointer-events-none z-50"
      style={{
        left: `${(tooltipX / 1000) * 100}%`,
        top: `${(tooltipY / 500) * 100}%`,
        transform: 'translateX(-50%)',
      }}
    >
      <div className="backdrop-blur-sm rounded-lg p-3 min-w-[200px]">
        <div className="flex items-center gap-2 mb-2">
          <Image src={location.flag} alt={`${location.name} flag`} width={20} height={20} className="w-5 h-5 object-cover rounded-full" />
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{location.name}</h3>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-300">{location.cpu}</p>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/90 dark:bg-white/5 border-r border-b border-gray-200/50 dark:border-white/10 rotate-45"></div>
      </div>
    </motion.div>
  );
});
Tooltip.displayName = 'Tooltip';

// World Map
const WorldMapSVG = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoveredDot, setHoveredDot] = useState<string | null>(null);
  const locationDots = useMemo(() => locations.map((location, index) => ({
    ...location,
    ...latLngToSVG(location.lat, location.lng),
    delay: index * 0.1
  })), []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative aspect-[2/1] rounded-lg overflow-hidden ">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
              <Globe className="w-8 h-8 animate-spin" />
              <span className="text-sm">Cargando mapa mundial...</span>
            </div>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src="/World_map_with_points.svg"
            alt="Mapa mundial"
            fill
            className="object-contain filter dark:invert opacity-50 dark:hue-rotate-180 dark:brightness-0 dark:contrast-0"
            onLoad={() => setImageLoaded(true)}
            priority
          />
          {imageLoaded && (
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
              {locationDots.map((location) => (
                <g key={location.name}>
                  <motion.circle
                    cx={location.x}
                    cy={location.y}
                    r={hoveredDot === location.name ? "12" : "10"}
                    fill="rgba(22, 91, 202, 0.59)"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: location.delay }}
                  />
                  <motion.circle
                    cx={location.x}
                    cy={location.y}
                    r={hoveredDot === location.name ? "7" : "5"}
                    fill="#3b82f6"
                    className="cursor-pointer"
                    style={{ pointerEvents: 'all' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5, delay: location.delay + 0.5 }}
                    onMouseEnter={() => setHoveredDot(location.name)}
                    onMouseLeave={() => setHoveredDot(null)}
                  />
                </g>
              ))}
            </svg>
          )}
          {imageLoaded && locationDots.map((location) => (
            <Tooltip
              key={`tooltip-${location.name}`}
              location={location}
              x={location.x}
              y={location.y}
              visible={hoveredDot === location.name}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
});
WorldMapSVG.displayName = 'WorldMapSVG';

const useIntersectionObserver = (threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, { threshold });
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [targetRef, isIntersecting] as const;
};

export default function LocationsSection() {
  const [mapRef, isMapVisible] = useIntersectionObserver(0.1);
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }), []);
  const pathVariants = useMemo(() => ({
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1 }
  }), []);

  return (
    <div className="bg-black relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-600/20 px-4 py-2 rounded-full mb-4">
            <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 orbitron-font text-sm">Infraestructura</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 orbitron-font">
            Ubicaciones <span className="text-blue-600 dark:text-blue-500 relative">Globales</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Servidores posicionados para una latencia baja.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 mb-8 max-w-5xl mx-auto px-4"
        >
          <div className="flex flex-col items-center gap-4 sm:gap-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-16 border border-white/10 rounded-lg p-4" style={{borderColor: "#ffffff1a", borderWidth: "1px"}}>
              {locations.map((location, index) => (
                <LocationItem key={location.name} location={location} index={index} />
              ))}
            </div>
                    
          </div>
        </motion.div>

        <div ref={mapRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {isMapVisible && <WorldMapSVG />}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
