"use client"

import { useState } from "react"
import Link from "next/link"
import type { ProjectData } from "@/lib/content"

export default function ProjectsClient({
  initialProjects,
}: {
  initialProjects: ProjectData[]
}) {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [search, setSearch] = useState("")

  const categories = ["Semua", "Full-Stack", "Backend & ERP", "DevOps & Cloud"]

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
          KATALOG PROYEK &amp; SISTEM
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
          Semua Proyek &amp; Studi Kasus
        </h1>
        <p
          className="max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--fg-2)" }}
        >
          Arsip sistem informasi modular, arsitektur backend skala tinggi dengan Laravel, integrasi REST API, dan deployment container Docker Swarm.
        </p>
      </div>

      {/* Controls: Category Filter + Search */}
      <div
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <div className="flex flex-wrap items-center gap-6">
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

        <div className="w-full sm:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari teknologi atau nama sistem..."
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
      </div>

      {/* Ledger Table */}
      <ol style={{ borderTop: "1px solid var(--line)" }}>
        {filtered.map((project, idx) => (
          <li key={project.slug} style={{ borderBottom: "1px solid var(--line)" }}>
            <Link
              href={`/projects/${project.slug}`}
              className="group block transition-all"
              style={{
                paddingTop: "1.75rem",
                paddingBottom: "1.75rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
                <div className="flex items-baseline gap-4 sm:gap-8 flex-1">
                  <span
                    className="font-mono text-xs shrink-0"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2
                      className="font-display text-2xl sm:text-3xl transition-colors"
                      style={{
                        color: "var(--fg)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {project.title}
                    </h2>
                    <p
                      className="text-xs sm:text-sm mt-1 max-w-xl line-clamp-1"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {project.deskripsi}
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline justify-between md:justify-end gap-6 sm:gap-8 pl-8 md:pl-0 shrink-0">
                  <span
                    className="font-mono text-xs hidden sm:inline"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {project.category || "Full-Stack"}
                  </span>
                  <span
                    className="font-mono text-xs hidden md:inline truncate max-w-xs"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {project.tags.slice(0, 3).join(", ")}
                  </span>
                  <span
                    className="font-mono text-xs shrink-0"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {project.date || "2024"}
                  </span>
                  <span
                    className="font-mono text-xs transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--fg)" }}
                  >
                    Lihat studi ↗
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      {filtered.length === 0 && (
        <div
          className="py-16 text-center font-mono text-xs"
          style={{
            borderBottom: "1px solid var(--line)",
            color: "var(--fg-muted)",
          }}
        >
          Tidak ada proyek yang sesuai dengan &quot;{search}&quot;.
        </div>
      )}
    </main>
  )
}
