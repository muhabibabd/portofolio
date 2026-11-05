import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllMateri, getMateriBySlug } from "@/lib/content"
import MarkdownRenderer from "@/components/MarkdownRenderer"

export async function generateStaticParams() {
  const list = getAllMateri()
  return list.map((m) => ({
    slug: m.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const materi = getMateriBySlug(slug)
  if (!materi) return { title: "Materi Tidak Ditemukan" }

  return {
    title: `${materi.title}: Silabus Pembelajaran`,
    description: materi.deskripsi,
  }
}

export default async function MateriDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const materi = getMateriBySlug(slug)

  if (!materi) {
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
        maxWidth: "760px",
        margin: "0 auto",
      }}
    >
      {/* Navigation Back */}
      <Link
        href="/materi"
        className="inline-block font-mono text-xs mb-10 transition-colors"
        style={{
          color: "var(--fg-muted)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
        }}
      >
        ← Kembali ke Daftar Materi
      </Link>

      {/* Header */}
      <header
        className="mb-12 pb-10"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--fg-muted)" }}>
          SILABUS / {materi.kelas.toUpperCase()}
        </p>

        <h1
          className="font-display mb-6"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            lineHeight: 1.05,
          }}
        >
          {materi.title}
        </h1>

        <div
          className="flex flex-wrap items-center gap-4 font-mono text-xs"
          style={{ color: "var(--fg-muted)" }}
        >
          <span>{materi.kelas}</span>
          <span>· {materi.date}</span>
          {materi.readingTime && <span>· {materi.readingTime}</span>}
        </div>
      </header>

      {/* Body */}
      <article className="mb-16">
        <MarkdownRenderer content={materi.content} />
      </article>

      {/* Footer Navigation */}
      <div
        className="py-6 flex justify-between items-center font-mono text-xs"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <Link
          href="/materi"
          style={{
            color: "var(--fg)",
            textDecorationLine: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          ← Kembali ke Silabus Lengkap
        </Link>
        <Link
          href="/#contact"
          style={{
            color: "var(--fg-muted)",
            textDecorationLine: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          Tanya Seputar Materi Ini ↗
        </Link>
      </div>
    </main>
  )
}
