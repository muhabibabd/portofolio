import type { Metadata, Viewport } from "next"
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BackgroundGridEffect from "./components/BackgroundGridEffect"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500"],
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: "400",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "Muhammad Habib Abdillah: Systems Architect & Full-Stack Developer",
    template: "%s | Habib Abdillah",
  },
  description:
    "Spesifikasi rekayasa perangkat lunak dan portofolio Muhammad Habib Abdillah: Systems Architect spesialis PHP, Laravel, ERP modular, Next.js SSG, dan Docker Swarm.",
  keywords: [
    "Muhammad Habib Abdillah",
    "Systems Architect",
    "Full-Stack Developer",
    "Laravel Indonesia",
    "Modular ERP",
    "Next.js SSG",
    "Docker Swarm",
  ],
  authors: [{ name: "Muhammad Habib Abdillah" }],
  creator: "Muhammad Habib Abdillah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://habib.dev",
    title: "Muhammad Habib Abdillah: Systems Architect & Full-Stack Developer",
    description:
      "Dokumen spesifikasi rekayasa perangkat lunak: arsitektur modular, efisiensi backend, dan antarmuka statis performa tinggi.",
    siteName: "Habib Abdillah Engineering",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable} bg-[#0a0a0a] text-[#fafafa] antialiased selection:bg-[#fafafa] selection:text-[#0a0a0a] min-h-screen relative font-sans`}
      >
        <BackgroundGridEffect />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
