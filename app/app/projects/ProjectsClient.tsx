"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, LayoutGrid, List } from "lucide-react"
import type { ProjectData } from "@/lib/content"

export default function ProjectsClient({
  initialProjects,
}: {
  initialProjects: ProjectData[]
}) {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [search, setSearch] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = ["Semua", "Full-Stack", "Backend & ERP", "DevOps & Cloud", "Web & CMS"]

  const filtered = initialProjects.filter((p) => {
    const matchCategory =
      selectedCategory === "Semua" ||
      p.category?.toLowerCase() === selectedCategory.toLowerCase() ||
      p.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()))

    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.deskripsi.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))

    return matchCategory && matchSearch
  })

  return (
    <main
      className="min-h-screen"
      style={{
        paddingTop: "clamp(64px, 10vw, 120px)",
        paddingBottom: "clamp(64px, 10vw, 120px)",
        paddingLeft: "clamp(20px, 4vw, 48px)",
        paddingRight: "clamp(20px, 4vw, 48px)",
        maxWidth: "1360px",
        margin: "0 auto",
      }}
    >
      {/* Breadcrumb Back */}
      <Link
        href="/"
        className="inline-block font-mono text-xs mb-10 transition-colors"
        style={{
          color: "var(--fg-muted)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
        }}
      >
        ← Kembali ke Beranda
      </Link>

      {/* Header */}
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--fg-muted)" }}>
          KATALOG PORTOFOLIO &amp; SISTEM
        </p>
        <h1
          className="font-display mb-4"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            lineHeight: 1.05,
          }}
        >
          Semua Portofolio &amp; Studi Kasus
        </h1>
        <p
          className="max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--fg-2)" }}
        >
          Arsip sistem informasi enterprise, aplikasi mobile di Google Play, modul kasir POS offline-first, arsitektur WhatsApp gateway, dan portal web institusi.
        </p>
      </div>

      {/* Controls: Category Filter + Search + View Toggle */}
      <div
        className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {categories.map((cat) => {
            const active = selectedCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className="font-mono text-xs cursor-pointer transition-colors"
                style={{
                  color: active ? "var(--fg)" : "var(--fg-muted)",
                  textDecorationLine: active ? "underline" : "none",
                  textUnderlineOffset: "6px",
                  background: "transparent",
                  border: "none",
                  padding: "4px 0",
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Search & Layout View Toggle */}
        <div className="flex items-center gap-3">
          <div className="w-full sm:w-64">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari sistem atau teknologi..."
              className="w-full px-3 py-2 text-xs font-mono transition-colors"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--line)",
                color: "var(--fg)",
                borderRadius: "2px",
                outline: "none",
              }}
            />
          </div>

          {/* Toggle Grid vs List */}
          <div className="flex items-center border border-[var(--line)] bg-[var(--bg-raised)] p-0.5">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              title="Tampilan Visual (Grid)"
              className={`p-1.5 transition-colors ${
                viewMode === "grid" ? "bg-[#262626] text-[#fafafa]" : "text-[#8a8a8a] hover:text-[#fafafa]"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              title="Tampilan Tabel Spek (List)"
              className={`p-1.5 transition-colors ${
                viewMode === "list" ? "bg-[#262626] text-[#fafafa]" : "text-[#8a8a8a] hover:text-[#fafafa]"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* GRID VIEW (Visual Cards) */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((project, idx) => {
            const indexNumber = String(idx + 1).padStart(2, "0")
            const domainHost = project.liveUrl
              ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
              : project.slug

            return (
              <article
                key={project.slug}
                className="group border border-[#262626] bg-[#0f0f0f] flex flex-col justify-between transition-colors duration-200 hover:border-[#404040]"
              >
                {/* Mockup Topbar */}
                <div className="px-4 py-3 border-b border-[#262626] flex items-center justify-between bg-[#141414]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a] group-hover:bg-[#404040] transition-colors" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
                    <span className="font-mono text-[11px] text-[#8a8a8a] ml-2 truncate max-w-[200px] sm:max-w-xs">
                      {domainHost}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#8a8a8a]">
                      {project.category || "Full-Stack"}
                    </span>
                    <span className="font-mono text-[11px] text-[#525252]">
                      {project.date || "2026"}
                    </span>
                  </div>
                </div>

                {/* Screenshot Visual Preview */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] border-b border-[#262626]"
                >
                  {project.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#525252]">
                      // Dokumentasi Arsitektur Sistem
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent pointer-events-none" />
                </Link>

                {/* Card Content & Spec */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#8a8a8a] mb-2">
                      <span>{indexNumber}</span>
                      <span>—</span>
                      <span className="text-[#fafafa]">{project.role || "Lead Architect"}</span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="block group/title">
                      <h2 className="font-display text-2xl sm:text-3xl text-[#fafafa] group-hover/title:text-[#d4d4d4] transition-colors leading-snug">
                        {project.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-sm text-[#8a8a8a] leading-relaxed mt-2 line-clamp-2">
                      {project.deskripsi}
                    </p>

                    {/* Tech Stack List */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2 py-0.5 border border-[#262626] bg-[#141414] text-[#a3a3a3]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 mt-6 border-t border-[#1f1f1f] flex items-center justify-between gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-mono text-xs text-[#fafafa] hover:underline underline-offset-4 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Lihat Spesifikasi &amp; Detail</span>
                      <span>→</span>
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#8a8a8a] hover:text-[#fafafa] flex items-center gap-1 transition-colors"
                      >
                        <span>Kunjungi Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {/* LIST VIEW (Compact Ledger Table) */}
      {viewMode === "list" && (
        <ol style={{ borderTop: "1px solid var(--line)" }}>
          {filtered.map((project, idx) => (
            <li key={project.slug} style={{ borderBottom: "1px solid var(--line)" }}>
              <div
                className="group flex flex-col md:flex-row md:items-center md:justify-between gap-3 transition-colors hover:bg-[#141414]"
                style={{
                  paddingTop: "1.25rem",
                  paddingBottom: "1.25rem",
                  paddingLeft: "0.75rem",
                  paddingRight: "0.75rem",
                }}
              >
                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                  {/* Thumbnail Avatar */}
                  {project.coverImage && (
                    <div className="w-16 h-11 shrink-0 overflow-hidden border border-[#262626] bg-[#0a0a0a] hidden sm:block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  )}

                  <span
                    className="font-mono text-xs shrink-0"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <Link href={`/projects/${project.slug}`}>
                      <h2
                        className="font-display text-xl sm:text-2xl transition-colors hover:text-[#d4d4d4]"
                        style={{
                          color: "var(--fg)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.1,
                        }}
                      >
                        {project.title}
                      </h2>
                    </Link>
                    <p
                      className="text-xs mt-1 max-w-xl line-clamp-1"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {project.deskripsi}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pl-8 md:pl-0 shrink-0">
                  <span
                    className="font-mono text-xs hidden sm:inline"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {project.category || "Full-Stack"}
                  </span>
                  <span
                    className="font-mono text-xs shrink-0"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {project.date || "2026"}
                  </span>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#8a8a8a] hover:text-[#fafafa] flex items-center gap-0.5"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-mono text-xs transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--fg)" }}
                  >
                    Detail →
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}

      {/* Empty State */}
      {filtered.length === 0 && (
        <div
          className="py-16 text-center font-mono text-xs"
          style={{
            borderBottom: "1px solid var(--line)",
            color: "var(--fg-muted)",
          }}
        >
          Tidak ada portofolio yang sesuai dengan &quot;{search}&quot;.
        </div>
      )}
    </main>
  )
}
