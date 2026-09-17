'use client'
import { useState, useEffect, useCallback } from 'react'
import LoadingScreen from './animations/LoadingScreen'
import ScrollProgress from './animations/ScrollProgress'
import CommandPalette from './ui/CommandPalette'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ZyntraSection from './sections/ZyntraSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import CertificationsSection from './sections/CertificationsSection'
import ContactSection from './sections/ContactSection'

export default function ClientShell() {
  const [loaded, setLoaded] = useState(false)
  const [cmdOpen, setCmdOpen] = useState(false)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setCmdOpen(o => !o)
    }
    if (e.key === 'Escape') setCmdOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!loaded) return <LoadingScreen onDone={() => setLoaded(true)} />

  return (
    <>
      <ScrollProgress />
      <Navbar onCmdOpen={() => setCmdOpen(true)} />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ZyntraSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      {cmdOpen && <CommandPalette onClose={() => setCmdOpen(false)} />}
    </>
  )
}
