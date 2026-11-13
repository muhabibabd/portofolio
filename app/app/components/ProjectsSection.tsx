"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { ProjectData } from "@/lib/content"

interface ProjectsSectionProps {
  projects: ProjectData[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  // Show featured projects on homepage
  const featuredProjects = projects.filter((p) => p.featured)
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 6)

  return (
    <section id="projects" className="relative pt-16 pb-24 scroll-mt-14">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
          className="border-t border-[#262626] pt-4 pb-12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8a8a8a] block mb-1">
              PORTOFOLIO TERPILIH &amp; STUDI KASUS
            </span>
            <p className="text-xs text-[#8a8a8a]">
              Sistem produksi, modul enterprise, dan infrastruktur cloud yang aktif beroperasi
            </p>
          </div>
          <span className="font-mono text-xs text-[#8a8a8a]">
            {displayProjects.length} dari {projects.length} Portofolio Ditampilkan
          </span>
        </motion.div>

        {/* Visual Engineering Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => {
            const indexNumber = String(index + 1).padStart(2, "0")
            const domainHost = project.liveUrl
              ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
              : project.slug

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 2) * 0.1,
                  ease: [0.2, 0, 0, 1],
                }}
                className="group border border-[#262626] bg-[#0f0f0f] flex flex-col justify-between transition-colors duration-200 hover:border-[#404040]"
              >
                {/* Mockup Topbar Header */}
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
                  {/* Subtle dark gradient overlay */}
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
                      <h3 className="font-display text-2xl sm:text-3xl text-[#fafafa] group-hover/title:text-[#d4d4d4] transition-colors leading-snug">
                        {project.title}
                      </h3>
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
              </motion.article>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="pt-12 flex justify-center sm:justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#262626] bg-[#111111] font-mono text-xs text-[#fafafa] hover:bg-[#fafafa] hover:text-[#0a0a0a] transition-colors"
          >
            <span>Buka Indeks Lengkap Semua Portofolio ({projects.length} Sistem)</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
