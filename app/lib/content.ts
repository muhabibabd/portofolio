import { projectsData, postsData, materiData, aboutContent } from "./content-data"

export interface ProjectData {
  slug: string
  title: string
  deskripsi: string
  tags: string[]
  category?: string
  featured?: boolean
  date?: string
  role?: string
  liveUrl?: string
  githubUrl?: string
  coverImage?: string
  metrics?: { label: string; value: string }[]
  content: string
}

export interface BlogPostData {
  slug: string
  title: string
  deskripsi: string
  tags: string[]
  date: string
  readingTime: string
  content: string
}

export interface MateriData {
  slug: string
  title: string
  kelas: string
  deskripsi: string
  tags: string[]
  date: string
  readingTime: string
  content: string
}

// ──────────────────── PROJECTS ────────────────────
export function getAllProjects(): ProjectData[] {
  return projectsData
}

export function getProjectBySlug(slug: string): ProjectData | null {
  return projectsData.find((p) => p.slug === slug) || null
}

// ──────────────────── BLOG ────────────────────
export function getAllPosts(): BlogPostData[] {
  return postsData
}

export function getPostBySlug(slug: string): BlogPostData | null {
  return postsData.find((p) => p.slug === slug) || null
}

// ──────────────────── MATERI ────────────────────
export function getAllMateri(): MateriData[] {
  return materiData
}

export function getMateriBySlug(slug: string): MateriData | null {
  return materiData.find((m) => m.slug === slug) || null
}

// ──────────────────── ABOUT ────────────────────
export function getAboutContent(): string {
  return aboutContent
}
