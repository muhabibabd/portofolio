"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { ProjectData } from "@/lib/content"

interface ProjectsSectionProps {
  projects: ProjectData[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
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
          <span className="font-mono text-xs uppercase tracking-widest text-[#8a8a8a]">
            PROYEK &amp; STUDI KASUS
          </span>
          <span className="text-xs text-[#8a8a8a]">
            {projects.length} Studi Kasus Terdokumentasi
          </span>
        </motion.div>

        {/* Ledger Table */}
        <div className="border-t border-[#262626] divide-y divide-[#262626]">
          {projects.map((project, index) => {
            const indexNumber = String(index + 1).padStart(2, "0")
            const stackSummary = project.tags.slice(0, 3).join(", ")

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.2, 0, 0, 1],
                }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-row group block py-7 px-4 -mx-4 transition-colors duration-150 hover:bg-[#f5f5f5] hover:text-[#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fafafa]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    {/* Index Number */}
                    <div className="md:col-span-1 font-mono text-xs text-[#8a8a8a] project-meta transition-colors">
                      {indexNumber}
                    </div>

                    {/* Project Title */}
                    <div className="md:col-span-6">
                      <h2 className="project-title text-2xl sm:text-3xl lg:text-4xl font-display font-normal text-[#fafafa] group-hover:!text-[#0a0a0a] transition-colors leading-tight">
                        {project.title}
                      </h2>
                      <p className="text-xs text-[#8a8a8a] project-meta pt-2 line-clamp-2 md:hidden">
                        {project.deskripsi}
                      </p>
                    </div>

                    {/* Domain & Summary Tech Stack */}
                    <div className="md:col-span-4 text-xs font-mono text-[#8a8a8a] project-meta transition-colors">
                      <span className="block text-[#fafafa] project-tag font-sans text-xs pb-0.5">
                        {project.category || "Full-Stack"}
                      </span>
                      <span>{stackSummary}</span>
                    </div>

                    {/* Year */}
                    <div className="md:col-span-1 text-xs font-mono text-right text-[#8a8a8a] project-meta transition-colors">
                      {project.date || "2024"}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="pt-8 flex justify-end">
          <Link
            href="/projects"
            className="text-xs text-[#fafafa] underline underline-offset-4 hover:text-[#d4d4d4] transition-colors"
          >
            Buka indeks lengkap semua proyek
          </Link>
        </div>
      </div>
    </section>
  )
}
