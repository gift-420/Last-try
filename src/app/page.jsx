import HeroSection from '@/components/HeroSection'
import ProjectsGrid from '@/components/ProjectsGrid'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import FloatingMenu from '@/components/FloatingMenu'

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingMenu />
      <HeroSection />
      <ProjectsGrid />
      <SkillsSection />
      <ContactSection />
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black to-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>
    </main>
  )
}
