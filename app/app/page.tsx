import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
import TierTable from "./components/TierTable"
import ArchitecturePhilosophy from "./components/ArchitecturePhilosophy"
import NotesAndMateriSection from "./components/NotesAndMateriSection"
import ContactSection from "./components/ContactSection"
import { getAllProjects, getAllPosts, getAllMateri } from "@/lib/content"

export const metadata = {
  title: "Muhammad Habib Abdillah: Full-Stack Developer & Systems Architect",
  description:
    "Portfolio resmi Muhammad Habib Abdillah: Full-Stack Developer spesialis PHP/Laravel, Next.js, arsitektur modular, dan DevOps cloud container.",
}

export default function Home() {
  const projects = getAllProjects()
  const posts = getAllPosts()
  const materi = getAllMateri()

  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <ProjectsSection projects={projects} />
      <TierTable />
      <ArchitecturePhilosophy />
      <NotesAndMateriSection posts={posts} materi={materi} />
      <ContactSection />
    </main>
  )
}
