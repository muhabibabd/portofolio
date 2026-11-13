"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Copy, Check, X, ArrowUpRight } from "lucide-react"

const navLinks = [
  { name: "Portofolio", href: "/#projects" },
  { name: "Keahlian", href: "/#skills" },
  { name: "Materi", href: "/materi" },
  { name: "Blog", href: "/blog" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false)
        setContactDialogOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("muhabibabd@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (pathname?.startsWith("/admin")) return null

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b border-[#262626] transition-colors duration-150 ${
          scrolled ? "bg-[#0a0a0a]" : "bg-[#0a0a0a]/90"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between">
          {/* Left: Plain Text Name */}
          <Link
            href="/"
            className="text-[15px] font-medium tracking-tight text-[#fafafa] hover:text-[#d4d4d4] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fafafa]"
          >
            Habib Abdillah
          </Link>

          {/* Center: Clean Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href) && !link.href.includes("#")

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fafafa] ${
                    isActive
                      ? "text-[#fafafa] underline underline-offset-4 decoration-1 font-medium"
                      : "text-[#8a8a8a] hover:text-[#fafafa]"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right: Availability Status + Contact Action */}
          <div className="hidden md:flex items-center gap-6 text-xs">
            <a
              href="/cv.pdf"
              download="CV_Muhammad_Habib_Abdillah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#8a8a8a] hover:text-[#fafafa] flex items-center gap-1 transition-colors"
            >
              <span>CV (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="inline-flex items-center gap-2 text-[#8a8a8a]">
              <span className="text-[#fafafa]">●</span>
              <span>Tersedia untuk proyek</span>
            </span>

            <button
              type="button"
              onClick={() => setContactDialogOpen(true)}
              className="text-[#fafafa] underline underline-offset-4 decoration-1 hover:text-[#d4d4d4] transition-colors cursor-pointer text-xs font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fafafa]"
            >
              Kontak
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-xs text-[#fafafa] underline underline-offset-4 decoration-1 uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fafafa]"
            aria-label="Buka menu navigasi"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Sheet */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col justify-between p-6 sm:p-10"
        >
          <div className="flex items-center justify-between border-b border-[#262626] pb-5">
            <span className="text-sm font-medium text-[#fafafa]">
              Habib Abdillah
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-wider text-[#fafafa] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fafafa]"
            >
              Tutup (Esc)
            </button>
          </div>

          <div className="space-y-6 my-auto py-8">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-[#262626] pb-4">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-3xl sm:text-4xl font-display text-[#fafafa] hover:text-[#8a8a8a] transition-colors"
                >
                  <span>{link.name}</span>
                </Link>
              </div>
            ))}

            <div className="border-b border-[#262626] pb-4">
              <a
                href="/cv.pdf"
                download="CV_Muhammad_Habib_Abdillah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-2xl sm:text-3xl font-display text-[#fafafa] hover:text-[#8a8a8a] transition-colors"
              >
                <span>Unduh CV</span>
                <span className="font-mono text-xs text-[#8a8a8a]">PDF ↗</span>
              </a>
            </div>
          </div>

          <div className="border-t border-[#262626] pt-5 flex items-center justify-between text-xs text-[#8a8a8a]">
            <span>● Tersedia untuk proyek</span>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                setContactDialogOpen(true)
              }}
              className="text-[#fafafa] underline underline-offset-4"
            >
              Buka Kontak
            </button>
          </div>
        </div>
      )}

      {/* Quick Contact Dialog */}
      {contactDialogOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-dialog-title"
          className="fixed inset-0 z-50 bg-[#0a0a0a]/80 flex items-center justify-center p-4"
          onClick={() => setContactDialogOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#111111] border border-[#404040] p-6 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#262626] pb-3">
              <span
                id="contact-dialog-title"
                className="text-xs uppercase font-mono tracking-widest text-[#8a8a8a]"
              >
                Spesifikasi Kontak
              </span>
              <button
                type="button"
                onClick={() => setContactDialogOpen(false)}
                className="text-xs text-[#8a8a8a] hover:text-[#fafafa] cursor-pointer"
                aria-label="Tutup dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-[#d4d4d4] leading-relaxed">
                Alamat korespondensi langsung untuk konsultasi sistem, proyek
                kontrak, atau rekayasa arsitektur:
              </p>

              <div className="p-3 bg-[#0a0a0a] border border-[#262626] flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-[#fafafa] select-all truncate">
                  muhabibabd@gmail.com
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-[#fafafa] underline underline-offset-2 hover:text-[#8a8a8a] transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <span className="inline-flex items-center gap-1 text-[#fafafa]">
                      <Check className="w-3.5 h-3.5" /> Tersalin
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Salin
                    </span>
                  )}
                </button>
              </div>

              <div className="pt-2 flex flex-col gap-2 text-xs">
                <a
                  href="mailto:muhabibabd@gmail.com"
                  className="w-full text-center py-2.5 bg-[#fafafa] text-[#0a0a0a] font-medium hover:bg-[#d4d4d4] transition-colors"
                >
                  Buka Email Client
                </a>

                <div className="flex items-center justify-between pt-3 border-t border-[#262626] text-[#8a8a8a]">
                  <a
                    href="https://github.com/muhabibabd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fafafa] transition-colors inline-flex items-center gap-0.5"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mhabibabdillah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fafafa] transition-colors inline-flex items-center gap-0.5"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://gitlab.com/muhabibabd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fafafa] transition-colors inline-flex items-center gap-0.5"
                  >
                    <span>GitLab</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
