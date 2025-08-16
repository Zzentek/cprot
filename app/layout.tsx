import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron, Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { LayoutWrapper } from "./components/layout-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" }
  ],
}

export const metadata: Metadata = {
  title: {
    default: "CPROT Hosting, Minecraft Servers y VPS",
    template: "%s | CPROT"
  },
  description: "El mejor Hosting de México te ofrece: Minecraft Servers, VPS y la mejor latencia a nivel nacional y LATAM.",
  keywords: [
    "game hosting",
    "minecraft hosting",
    "minecraft server",
    "minecraft server hosting",
    "discord bot hosting",
    "VPS hosting",
    "VPS",
    "VPS Mexico",
    "VPS Ryzen",
    "VPS Intel",
    "VPS barato",
    "dedicated servers",
    "Servidores dedicados",
    "cloud servers",
    "gaming servers",
    "Hosting bajo ping",
    "Proteccion ddos",
    "Soporte 24/7",
    "Hosting Mexico",
    "Hostinguer",
    "SuperCores"
  ],
  authors: [{ name: "Carlos Soltero" }],
  creator: "Carlos Soltero",
  publisher: "CPROT Hosting",
  category: "VPS Hosting & Minecraft servers",
  
  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cprot.net",
    siteName: "CPROT Hosting",
    title: "El mejor Hosting VPS y Minecraft Servers de Mexico",
    description: "Ofrecemos los servicios de Hosting con la latencia más baja a nivel nacional e internacional con proteccion DDoS.",
    images: [
      {
        url: "https://nova.dezerx.com/meta/Banner.png",
        width: 1200,
        height: 630,
        alt: "CPROT - Minecraft Hosting y VPS barato",
        type: "image/png"
      }
    ]
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "CPROT Hosting - VPS y Minecraft Servers barato",
    description: "Ofrecemos los servicios de Hosting con la latencia más baja a nivel nacional e internacional con proteccion DDoS.",
    images: ["https://nova.dezerx.com/meta/Banner.png"]
  },

  // Additional metadata with bot protection
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: "vzsKvhNUgAPlCbf1annB0Sl-bttSFos87mhOyQSU2aY", // Replace with actual verification code
  },

  applicationName: "CPROT",
  referrer: "origin-when-cross-origin",

  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/meta/Logo.png", sizes: "32x32", type: "image/png" },
      { url: "/meta/Logo.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/meta/Logo.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/meta/Logo.png"
  },

  alternates: {
    canonical: "https://nova.dezerx.com"
  },
  other: {
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
    "terms-of-service": "https://nova.dezerx.com/terms-of-services",
    "privacy-policy": "https://nova.dezerx.com/privacy-policy"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CPROT" />
        <meta name="crawl-delay" content="10" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CPROT Hosting",
              "url": "https://cprot.net",
              "logo": "https://cprot.net/meta/Logo.png",
              "description": "El mejor Hosting de México te ofrece: Minecraft Servers, VPS y la mejor latencia a nivel nacional y LATAM.",
              "serviceType": ["Game Server Hosting", "VPS Hosting", "Dedicated Servers", "Cloud Infrastructure"],
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Minecraft Servers y VPS Hosting",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Minecraft Hosting",
                      "description": "Alto rendimiento con bajisima latencia para Mexico y LATAM con proteccion DDoS."
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VPS Hosting",
                      "description": "Servidores VPS KVM con full root y proteccion DDoS."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Servidores Dedicados",
                      "description": "Servidores BareMetal con una entrega instantánea."
                    }
                  }
                ]
              },
              "sameAs": [
                "https://discord.gg/MsDqb6HvS3"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Soporte al cliente",
                "availableLanguage": "Spanish",
                "serviceType": "Soporte Técnico",
                "url": "https://discord.gg/MsDqb6HvS3"
              },
              "founder": {
                "@type": "Person",
                "name": "Carlos SOltero "
              },
              "termsOfService": "https://cprot.net/terms-of-services",
              "privacyPolicy": "https://cprot.net/privacy-policy"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${quicksand.variable} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}