"use client"

import { motion } from "framer-motion"

export default function ArchitecturePhilosophy() {
  return (
    <section id="about" className="relative pt-16 pb-24 scroll-mt-14">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
          className="border-t border-[#262626] pt-4 pb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#8a8a8a]">
            FILOSOFI REKAYASA &amp; ARSITEKTUR
          </span>
        </motion.div>

        {/* Large Editorial Serif Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
          className="border-t border-[#262626] pt-12 pb-16"
        >
          <blockquote className="text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-normal text-[#fafafa] leading-[1.08] max-w-5xl tracking-tight">
            Perangkat lunak yang hebat tidak dinilai dari ketiadaan bug semata,
            melainkan dari arsitektur yang mudah dirawat, mudah diskalakan,
            dan <span className="italic">dapat dipahami dengan jernih</span> oleh tim lain di masa depan.
          </blockquote>
        </motion.div>

        {/* Two-Column Prose Underneath */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-8 border-t border-[#262626] text-sm text-[#d4d4d4] leading-relaxed"
        >
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8a8a8a]">
              Batas Modul yang Terisolasi
            </h3>
            <p>
              Dalam merancang sistem informasi institusi maupun ERP perusahaan,
              godaan terbesar adalah menyatukan logika bisnis ke dalam satu lapisan monolit tanpa batas.
              Pendekatan yang saya pegang adalah pemisahan domain yang ketat: modul SDM tidak boleh
              bergantung langsung pada rincian internal modul keuangan, melainkan berkomunikasi melalui kontrak
              data dan event terstandar.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8a8a8a]">
              Efisiensi Tanpa Kompleksitas Palsu
            </h3>
            <p>
              Skalabilitas bukan berarti membagi setiap fungsi kecil ke puluhan server mikro tanpa alasan.
              Sebuah arsitektur modular yang solid di dalam kernel PHP/Laravel dengan indeks PostgreSQL yang tepat,
              antrian Redis asinkron, dan deployment Docker Swarm sering kali menghasilkan latensi lebih rendah,
              keandalan lebih tinggi, dan biaya perawatan yang jauh lebih rasional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
