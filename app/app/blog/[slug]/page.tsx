import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllPosts, getPostBySlug } from "@/lib/content"
import MarkdownRenderer from "@/components/MarkdownRenderer"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Artikel Tidak Ditemukan" }

  return {
    title: `${post.title}: Blog Rekayasa`,
    description: post.deskripsi,
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
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
        href="/blog"
        className="inline-block font-mono text-xs mb-10 transition-colors"
        style={{
          color: "var(--fg-muted)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
        }}
      >
        ← Kembali ke Daftar Tulisan
      </Link>

      {/* Article Header */}
      <header
        className="mb-12 pb-10"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--fg-muted)" }}>
          CATATAN REKAYASA
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
          {post.title}
        </h1>

        <div
          className="flex flex-wrap items-center gap-4 font-mono text-xs"
          style={{ color: "var(--fg-muted)" }}
        >
          <span>{post.date}</span>
          {post.readingTime && <span>· {post.readingTime}</span>}
          {post.tags && post.tags.length > 0 && (
            <span>· {post.tags.join(", ")}</span>
          )}
        </div>
      </header>

      {/* Article Body */}
      <article className="mb-16">
        <MarkdownRenderer content={post.content} />
      </article>

      {/* Author Note */}
      <div
        className="py-8 my-12"
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <p className="font-mono text-xs mb-1" style={{ color: "var(--fg-muted)" }}>
          PENULIS
        </p>
        <p className="font-display text-xl mb-1" style={{ color: "var(--fg)" }}>
          Muhammad Habib Abdillah
        </p>
        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          Full-Stack Developer &amp; Systems Architect. Spesialisasi pada backend Laravel, modularitas arsitektur, dan optimasi web statis.
        </p>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center font-mono text-xs">
        <Link
          href="/blog"
          style={{
            color: "var(--fg)",
            textDecorationLine: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          ← Kembali ke Semua Tulisan
        </Link>
        <Link
          href="/#contact"
          style={{
            color: "var(--fg-muted)",
            textDecorationLine: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          Hubungi Penulis ↗
        </Link>
      </div>
    </main>
  )
}
