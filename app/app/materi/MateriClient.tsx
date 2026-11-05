"use client"

import { useState } from "react"
import Link from "next/link"
import type { MateriData } from "@/lib/content"

export default function MateriClient({
  initialMateri,
}: {
  initialMateri: MateriData[]
}) {
  const [search, setSearch] = useState("")
  const [selectedKelas, setSelectedKelas] = useState<string | null>(null)

  const allClasses = Array.from(new Set(initialMateri.map((m) => m.kelas)))

  const filtered = initialMateri.filter((m) => {
    const matchKelas = !selectedKelas || m.kelas === selectedKelas
    const matchSearch =
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.deskripsi.toLowerCase().includes(search.toLowerCase()) ||
      m.kelas.toLowerCase().includes(search.toLowerCase())
    return matchKelas && matchSearch
  })

  return (
    <main
      className="min-h-screen"
      style={{
        paddingTop: "clamp(64px, 10vw, 120px)",
        paddingBottom: "clamp(64px, 10vw, 120px)",
        paddingLeft: "clamp(20px, 4vw, 48px)",
        paddingRight: "clamp(20px, 4vw, 48px)",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
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
          MATERI &amp; SILABUS TERBUKA
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
          Silabus Belajar Terbuka
        </h1>
        <p
          className="max-w-xl text-base leading-relaxed"
          style={{ color: "var(--fg-2)" }}
        >
          Panduan praktis dan kurikulum mandiri seputar ekosistem web modern, Laravel backend, dan arsitektur database.
        </p>
      </div>

      {/* Filter & Search */}
      <div
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setSelectedKelas(null)}
            className="font-mono text-xs cursor-pointer transition-colors"
            style={{
              color: selectedKelas === null ? "var(--fg)" : "var(--fg-muted)",
              textDecorationLine: selectedKelas === null ? "underline" : "none",
              textUnderlineOffset: "6px",
              background: "transparent",
              border: "none",
              padding: "4px 0",
            }}
          >
            Semua Kelas
          </button>
          {allClasses.map((kelas) => {
            const active = selectedKelas === kelas
            return (
              <button
                key={kelas}
                type="button"
                onClick={() => setSelectedKelas(selectedKelas === kelas ? null : kelas)}
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
                {kelas}
              </button>
            )
          })}
        </div>

        <div className="w-full sm:w-64">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari materi..."
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

      {/* Materi List */}
      <ol style={{ borderTop: "1px solid var(--line)" }}>
        {filtered.map((m, idx) => (
          <li key={m.slug} style={{ borderBottom: "1px solid var(--line)" }}>
            <Link
              href={`/materi/${m.slug}`}
              className="group block transition-all"
              style={{
                paddingTop: "1.75rem",
                paddingBottom: "1.75rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4 sm:gap-6 flex-1">
                  <span
                    className="font-mono text-xs shrink-0 pt-1"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2
                      className="font-display text-2xl group-hover:text-[var(--fg)] transition-colors mb-2"
                      style={{
                        color: "var(--fg)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                      }}
                    >
                      {m.title}
                    </h2>
                    <p
                      className="text-xs sm:text-sm line-clamp-2 max-w-2xl leading-relaxed mb-3"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {m.deskripsi}
                    </p>
                    <div className="flex items-center gap-4 font-mono text-xs" style={{ color: "var(--fg-muted)" }}>
                      <span>{m.kelas}</span>
                      <span>· {m.date}</span>
                      {m.readingTime && <span>· {m.readingTime}</span>}
                    </div>
                  </div>
                </div>

                <span
                  className="font-mono text-xs shrink-0 pt-1 transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--fg)" }}
                >
                  Buka ↗
                </span>
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
          Tidak ada materi yang sesuai dengan pencarian.
        </div>
      )}
    </main>
  )
}
