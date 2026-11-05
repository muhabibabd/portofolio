"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { BlogPostData, MateriData } from "@/lib/content"

interface NotesAndMateriSectionProps {
  posts: BlogPostData[]
  materi: MateriData[]
}

export default function NotesAndMateriSection({
  posts,
  materi,
}: NotesAndMateriSectionProps) {
  return (
    <section id="notes" className="scroll-mt-16">
      <div
        style={{
          borderTop: "1px solid var(--line)",
          paddingTop: "clamp(80px, 12vw, 160px)",
          paddingBottom: "clamp(80px, 12vw, 160px)",
          paddingLeft: "clamp(20px, 4vw, 48px)",
          paddingRight: "clamp(20px, 4vw, 48px)",
          maxWidth: "1360px",
          margin: "0 auto",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
          className="font-mono text-xs uppercase tracking-widest mb-10"
          style={{ color: "var(--fg-muted)" }}
        >
          DOKUMENTASI &amp; CATATAN REKAYASA
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {/* Blog column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          >
            <div
              className="flex items-baseline justify-between mb-6"
              style={{ borderBottom: "1px solid var(--line)", paddingBottom: "0.75rem" }}
            >
              <h2
                className="font-display text-xl"
                style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
              >
                Catatan Teknis
              </h2>
              <Link
                href="/blog"
                className="font-mono text-xs"
                style={{ color: "var(--fg-muted)", textDecorationLine: "underline", textUnderlineOffset: "4px" }}
              >
                Semua artikel ↗
              </Link>
            </div>

            <ol>
              {posts.length === 0 && (
                <li
                  className="font-mono text-xs py-6 text-center"
                  style={{ color: "var(--fg-muted)", borderBottom: "1px solid var(--line)" }}
                >
                  Belum ada catatan.
                </li>
              )}
              {posts.map((post, idx) => (
                <li key={post.slug} style={{ borderBottom: "1px solid var(--line)" }}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-1 py-4 transition-colors"
                    style={{ color: "var(--fg-2)" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="font-mono text-xs shrink-0"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-display text-base flex-1 group-hover:text-[var(--fg)] transition-colors"
                        style={{ color: "var(--fg-2)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
                      >
                        {post.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 pl-7">
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {post.date}
                      </span>
                      {post.readingTime && (
                        <span
                          className="font-mono text-xs"
                          style={{ color: "var(--fg-muted)" }}
                        >
                          {post.readingTime}
                        </span>
                      )}
                      {post.tags && post.tags.length > 0 && (
                        <span
                          className="font-mono text-xs truncate"
                          style={{ color: "var(--fg-muted)" }}
                        >
                          {post.tags.join(", ")}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Materi column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          >
            <div
              className="flex items-baseline justify-between mb-6"
              style={{ borderBottom: "1px solid var(--line)", paddingBottom: "0.75rem" }}
            >
              <h2
                className="font-display text-xl"
                style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
              >
                Materi Terbuka
              </h2>
              <Link
                href="/materi"
                className="font-mono text-xs"
                style={{ color: "var(--fg-muted)", textDecorationLine: "underline", textUnderlineOffset: "4px" }}
              >
                Semua modul ↗
              </Link>
            </div>

            <ol>
              {materi.length === 0 && (
                <li
                  className="font-mono text-xs py-6 text-center"
                  style={{ color: "var(--fg-muted)", borderBottom: "1px solid var(--line)" }}
                >
                  Belum ada modul.
                </li>
              )}
              {materi.map((mat, idx) => (
                <li key={mat.slug} style={{ borderBottom: "1px solid var(--line)" }}>
                  <Link
                    href={`/materi/${mat.slug}`}
                    className="group flex flex-col gap-1 py-4 transition-colors"
                    style={{ color: "var(--fg-2)" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="font-mono text-xs shrink-0"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-display text-base flex-1 group-hover:text-[var(--fg)] transition-colors"
                        style={{ color: "var(--fg-2)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
                      >
                        {mat.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 pl-7">
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {mat.date}
                      </span>
                      {mat.kelas && (
                        <span
                          className="font-mono text-xs"
                          style={{ color: "var(--fg-muted)" }}
                        >
                          {mat.kelas}
                        </span>
                      )}
                      {mat.readingTime && (
                        <span
                          className="font-mono text-xs"
                          style={{ color: "var(--fg-muted)" }}
                        >
                          {mat.readingTime}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
