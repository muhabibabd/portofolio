"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Mail, ArrowUpRight } from "lucide-react"
import { GithubIcon, LinkedinIcon, GitlabIcon } from "./Icons"

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("muhabibabd@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-16"
      style={{ background: "var(--invert-bg)", color: "var(--invert-fg)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        style={{
          borderTop: "1px solid #d4d4d4",
          paddingTop: "clamp(80px, 10vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
          paddingLeft: "clamp(20px, 4vw, 48px)",
          paddingRight: "clamp(20px, 4vw, 48px)",
          maxWidth: "1360px",
          margin: "0 auto",
        }}
      >
        <p
          className="font-mono text-xs uppercase tracking-widest mb-6"
          style={{ color: "var(--invert-muted)" }}
        >
          KONTAK &amp; KOLABORASI
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 space-y-4">
            <h2
              className="font-display font-normal tracking-tight"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                color: "var(--invert-fg)",
                lineHeight: 1.08,
              }}
            >
              Mari diskusikan kebutuhan arsitektur sistem atau peluang kolaborasi rekayasa.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--invert-muted)" }}
            >
              Terbuka untuk konsultasi sistem informasi modular, optimasi performa backend dengan Laravel, pembangunan web modern, maupun peran rekayasa perangkat lunak.
            </p>
          </div>

          {/* Right Column: Direct Contact & Action Box */}
          <div
            className="lg:col-span-5 p-6 sm:p-8 space-y-6"
            style={{
              background: "#ffffff",
              border: "1px solid #e5e5e5",
            }}
          >
            <div>
              <span
                className="font-mono text-xs uppercase tracking-wider block mb-2"
                style={{ color: "var(--invert-muted)" }}
              >
                Email Langsung
              </span>
              <a
                href="mailto:muhabibabd@gmail.com"
                className="font-mono text-lg sm:text-xl font-medium block hover:opacity-75 transition-opacity truncate"
                style={{ color: "var(--invert-fg)" }}
              >
                muhabibabd@gmail.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="mailto:muhabibabd@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-medium transition-colors cursor-pointer"
                style={{
                  background: "var(--invert-fg)",
                  color: "var(--invert-bg)",
                  textDecoration: "none",
                }}
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-medium transition-colors cursor-pointer"
                style={{
                  background: "transparent",
                  color: "var(--invert-fg)",
                  border: "1px solid #d4d4d4",
                }}
                aria-label="Salin alamat email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Email Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social channels */}
            <div
              className="pt-6 flex flex-wrap items-center gap-6"
              style={{ borderTop: "1px solid #e5e5e5" }}
            >
              <a
                href="https://github.com/muhabibabd"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs flex items-center gap-1.5 transition-opacity hover:opacity-70"
                style={{ color: "var(--invert-fg)" }}
              >
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
                <span>GitHub ↗</span>
              </a>

              <a
                href="https://linkedin.com/in/mhabibabdillah"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs flex items-center gap-1.5 transition-opacity hover:opacity-70"
                style={{ color: "var(--invert-fg)" }}
              >
                <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
                <span>LinkedIn ↗</span>
              </a>

              <a
                href="https://gitlab.com/muhabibabd"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs flex items-center gap-1.5 transition-opacity hover:opacity-70"
                style={{ color: "var(--invert-fg)" }}
              >
                <GitlabIcon className="w-4 h-4" aria-hidden="true" />
                <span>GitLab ↗</span>
              </a>
            </div>

            <p
              className="font-mono text-[11px] pt-1"
              style={{ color: "var(--invert-muted)" }}
            >
              Waktu respon standar: dalam 24 jam kerja.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
