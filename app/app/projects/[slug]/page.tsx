import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getAllProjects, getProjectBySlug } from "@/lib/content"
import MarkdownRenderer from "@/components/MarkdownRenderer"

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Portofolio Tidak Ditemukan" }

  return {
    title: `${project.title}: Portofolio & Studi Kasus`,
    description: project.deskripsi,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

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
      {/* Navigation Back */}
      <Link
        href="/projects"
        className="inline-block font-mono text-xs mb-10 transition-colors"
        style={{
          color: "var(--fg-muted)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
        }}
      >
        ← Kembali ke Katalog Portofolio
      </Link>

      {/* Case Study Spec Header */}
      <header
        className="mb-14 pb-12"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--fg-muted)" }}>
          PORTOFOLIO / {project.category ? project.category.toUpperCase() : "SISTEM"}
        </p>

        <h1
          className="font-display mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            lineHeight: 1.05,
          }}
        >
          {project.title}
        </h1>

        <p
          className="text-base sm:text-lg leading-relaxed mb-6 max-w-2xl"
          style={{ color: "var(--fg-2)" }}
        >
          {project.deskripsi}
        </p>

        {project.liveUrl && (
          <div className="mb-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#404040] bg-[#141414] font-mono text-xs text-[#fafafa] hover:bg-[#fafafa] hover:text-[#0a0a0a] transition-colors"
            >
              <span>Kunjungi Aplikasi / Website Live</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Spec table */}
        <dl
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <div>
            <dt className="font-mono text-xs mb-1" style={{ color: "var(--fg-muted)" }}>
              Peran
            </dt>
            <dd className="font-mono text-xs" style={{ color: "var(--fg)" }}>
              {project.role || "Lead Architect"}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs mb-1" style={{ color: "var(--fg-muted)" }}>
              Tahun
            </dt>
            <dd className="font-mono text-xs" style={{ color: "var(--fg)" }}>
              {project.date || "2026"}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs mb-1" style={{ color: "var(--fg-muted)" }}>
              Kategori
            </dt>
            <dd className="font-mono text-xs" style={{ color: "var(--fg)" }}>
              {project.category || "Full-Stack"}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs mb-1" style={{ color: "var(--fg-muted)" }}>
              Stack
            </dt>
            <dd className="font-mono text-xs truncate" style={{ color: "var(--fg)" }}>
              {project.tags.join(", ")}
            </dd>
          </div>
        </dl>

        {/* Metrics if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <p className="font-mono text-xs mb-1" style={{ color: "var(--fg-muted)" }}>
                  {m.label}
                </p>
                <p
                  className="font-display text-2xl"
                  style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Cover / Lead Visual if present */}
      {project.coverImage && (
        <div className="mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-auto border border-[var(--line)] bg-[var(--bg-raised)] object-cover rounded-none"
          />
        </div>
      )}

      {/* Case Study Content */}
      <section className="mb-20">
        <MarkdownRenderer content={project.content} />
      </section>

      {/* Bottom Contact Inverted / Spec Bar */}
      <div
        className="py-12 px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div>
          <h2
            className="font-display text-2xl mb-1"
            style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            Tertarik mendiskusikan implementasi serupa?
          </h2>
          <p className="text-xs sm:text-sm" style={{ color: "var(--fg-muted)" }}>
            Diskusi teknis mengenai modularitas arsitektur backend, ERP, atau deployment container.
          </p>
        </div>
        <Link
          href="/#contact"
          className="font-mono text-xs shrink-0"
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
            padding: "12px 20px",
            textDecoration: "none",
            borderRadius: "0",
          }}
        >
          Hubungi Habib ↗
        </Link>
      </div>
    </main>
  )
}
