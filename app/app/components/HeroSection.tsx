"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"

export default function HeroSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("muhabibabd@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Headline & Actions (Cols 1-8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
            className="lg:col-span-8 space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-display font-normal leading-[1.04] tracking-tight">
              <span className="text-[#8a8a8a] block">
                Merancang arsitektur sistem
              </span>
              <span className="text-[#fafafa] block">
                informasi modular & backend
              </span>
              <span className="text-[#fafafa] italic block">
                skala tinggi.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#d4d4d4] max-w-2xl leading-relaxed font-normal">
              Full-Stack Developer yang fokus pada arsitektur perangkat lunak terdistribusi,
              implementasi domain-driven modular dengan Laravel & PHP, serta
              penyajian antarmuka cepat berbasis Next.js 16 tanpa dependensi runtime database.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm">
              <a
                href="#projects"
                className="inline-block px-6 py-3.5 bg-[#fafafa] text-[#0a0a0a] font-medium hover:bg-[#d4d4d4] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fafafa]"
              >
                Lihat studi kasus
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-[#fafafa] underline underline-offset-[6px] decoration-1 hover:decoration-2 transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fafafa]"
                aria-label="Salin email langsung"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#fafafa]" />
                    <span>Email tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8a8a8a]" />
                    <span>Salin email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right: Technical Specification Definition List (Cols 9-12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#262626] pt-8 lg:pt-0 lg:pl-10"
          >
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#8a8a8a] pb-3 border-b border-[#262626]">
              Spesifikasi Rekayasa
            </div>

            <dl className="divide-y divide-[#262626] text-xs">
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8a8a8a] shrink-0">Peran</dt>
                <dd className="text-[#fafafa] text-right font-medium">
                  Systems Architect / Full-Stack
                </dd>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8a8a8a] shrink-0">Pengalaman</dt>
                <dd className="text-[#fafafa] text-right">3+ tahun</dd>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8a8a8a] shrink-0">Stack utama</dt>
                <dd className="text-[#fafafa] text-right">
                  PHP 8.3, Laravel 11, PostgreSQL, Next.js 16
                </dd>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8a8a8a] shrink-0">Deploy</dt>
                <dd className="text-[#fafafa] text-right">
                  Docker Swarm, Nginx Proxy
                </dd>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8a8a8a] shrink-0">Arsitektur</dt>
                <dd className="text-[#fafafa] text-right">
                  Modular Domain SSG
                </dd>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8a8a8a] shrink-0">Lokasi</dt>
                <dd className="text-[#fafafa] text-right">
                  Indonesia (UTC+7)
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
