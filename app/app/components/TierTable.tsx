"use client"

import { motion } from "framer-motion"

const systemTiers = [
  {
    tier: "Presentasi & Antarmuka",
    summary: "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4",
    detail: "Server-side generation (SSG) statis, static payload serialization, aksesibilitas keyboard WCAG AA.",
  },
  {
    tier: "Aplikasi & API",
    summary: "PHP 8.3+, Laravel 11/12, RESTful Architecture, Webhooks",
    detail: "OPcache JIT, strict typing, routing modular, controller terisolasi, API versioning & throttling.",
  },
  {
    tier: "Domain Bisnis & Modular",
    summary: "Modul Core, Modul SDM & Payroll TER, Modul Inventori, Modul Akademik",
    detail: "Pemisahan domain-driven design (DDD), batas modul independen, event emitter & background processing.",
  },
  {
    tier: "Persistensi & Caching",
    summary: "PostgreSQL, MySQL / MariaDB, Redis",
    detail: "Relational indexing, JSONB data, transaksi ACID, Redis background queue & session store.",
  },
  {
    tier: "Infrastruktur & Delivery",
    summary: "Docker Swarm, Nginx Reverse Proxy, Linux Debian/Ubuntu, CI/CD",
    detail: "Multi-service containerization, automated rolling deployment, zero downtime, SSL automated management.",
  },
]

export default function TierTable() {
  return (
    <section id="skills" className="relative pt-16 pb-24 scroll-mt-14">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
          className="border-t border-[#262626] pt-4 pb-12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#8a8a8a]">
            KEAHLIAN &amp; LAPISAN ARSITEKTUR
          </span>
          <span className="text-xs text-[#8a8a8a]">
            5 Lapisan Sistem
          </span>
        </motion.div>

        {/* Tier Specification Table */}
        <div className="border-t border-[#262626] divide-y divide-[#262626]">
          {systemTiers.map((row, idx) => (
            <motion.div
              key={row.tier}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.2, 0, 0, 1],
              }}
              className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              <div className="md:col-span-3 text-xs font-mono text-[#8a8a8a] uppercase tracking-wider">
                {row.tier}
              </div>

              <div className="md:col-span-9 space-y-1">
                <div className="text-base sm:text-lg text-[#fafafa] font-medium">
                  {row.summary}
                </div>
                <div className="text-xs text-[#8a8a8a] leading-relaxed">
                  {row.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
