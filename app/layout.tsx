import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron, Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { LayoutWrapper } from "./components/layout-wrapper";
import { LanguageProvider } from "./contexts/LanguageContext";
import CookieConsent from "./components/CookieConsent";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ChristmasSnowfall from "./components/ChristmasSnowfall";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
// hi there
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
// hello again
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
    default: "CPROT - VPS, Minecraft Hosting y Servidores Dedicados",
    template: "%s | CPROT"
  },
  description: "El mejor hosting VPS y Minecraft en Latinoamérica. Protección DDoS, soporte rapido y profesional",
  keywords: [
    "game hosting",
    "minecraft hosting",
    "discord bot hosting",
    "VPS hosting",
    "dedicated servers",
    "cloud servers",
    "gaming servers",
    "CPROT Hosting",
    "CPROT servers",
    "CPROT",
    "Minecraft Servers",
    "VPS miami",
    "Cheap VPS",
    "Dedicated server rental",
    "cloud hosting",
    "low latency hosting",
    "DDoS protection",
    "24/7 support",
    "custom server hosting",
    "modded game hosting",
    "server rental"
  ],
  authors: [{ name: "CPROT " }],
  creator: "CPROT",
  publisher: "TEAM CPROT",
  category: "Minecraft Hosting y VPS",
  openGraph: {
    type: "website",
    locale: "en_ES",
    url: "https://cprot.net",
    siteName: "CPROT - VPS & Minecraft Servers",
    title: "CPROT - VPS & Minecraft Servers",
    description: "El mejor hosting VPS y Minecraft en Latinoamérica. Protección DDoS, soporte rapido y profesional",
    images: [
      {
        url: "https://cdn.cprot.net/CPROT-LANDING/Banner.webp",
        width: 1200,
        height: 630,
        alt: "CPROT Hosting",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CPROT - VPS & Minecraft Servers",
    description: "El mejor hosting VPS y Minecraft en Latinoamérica. Protección DDoS, soporte rapido y profesional",
    images: ["https://cdn.cprot.net/CPROT-LANDING/Banner.webp"]
  },
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
    google: "vzsKvhNUgAPlCbf1annB0Sl-bttSFos87mhOyQSU2aY", 
  },

  applicationName: "CPROT Hosting",
  referrer: "origin-when-cross-origin",

  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "https://cdn.cprot.net/CPROT-LANDING/Favicon.svg", sizes: "32x32", type: "image/png" },
      { url: "https://cdn.cprot.net/CPROT-LANDING/Favicon.svg", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "https://cdn.cprot.net/CPROT-LANDING/Favicon.svg", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "https://cdn.cprot.net/CPROT-LANDING/Favicon.svg"
  },

  alternates: {
    canonical: "https://cprot.net"
  },
  other: {
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
    "terms-of-service": "https://cprot.net/terms-of-services",
    "privacy-policy": "https://cprot.net/privacy-policy"
  }
};
// yo yo, wassup, ma name is big A aka the big ANTHONYYYYYYYYYYYYYYYYYY. like my work so far? rate it a 5 star on BBB pweaseeeeeeeeee
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DezerNova" />
        <meta name="crawl-delay" content="10" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TEAM CPROT ",
              "url": "https://cprot.net",
              "logo": "https://cdn.cprot.net/CPROT-LANDING/Banner.webp",
    description: "El mejor hosting VPS y Minecraft en Latinoamérica. Protección DDoS, soporte rapido y profesional",
              "serviceType": ["Game Server Hosting", "VPS Hosting", "Dedicated Servers", "Minecraft Servers"],
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "VPS y Minecraft Hosting",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Minecraft Hosting",
                      "description": "Servidores de alto rendimiento con soporte rápido y profesional"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VPS Hosting",
                      "description": "Servidores privados virtuales con soporte rápido y profesional"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Dedicated Servers",
                      "description": "Bare metal servers for maximum performance"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://discord.cprot.net"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Spanish",
                "serviceType": "Soporte Técnico",
                "url": "https://discord.cprot.net"
              },
              "founder": {
                "@type": "Person",
                "name": "TEAM CPROT "
              },
              "termsOfService": "https://cprot.net/terms-of-services",
              "privacyPolicy": "https://cprot.net/privacy-policy"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${quicksand.variable} antialiased min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <ChristmasSnowfall />
            <LayoutWrapper>
              {children}
              <Analytics />
            </LayoutWrapper>
            <CookieConsent />
            <ThemeSwitcher />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
