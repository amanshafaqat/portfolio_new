'use client'

import { type RefObject } from 'react'
import Image from 'next/image'
import { SITE, STATS } from '@/data/portfolio'
import { useCountUp, useInView } from '@/hooks/useInView'

function Stat({ value, label, suffix, active }: { value: number; label: string; suffix?: string; active: boolean }) {
  const count = useCountUp(value, active)
  return (
    <div className="hero-stat">
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function HeroSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-kicker"><span /> Available for opportunities</div>
          <p className="hero-location">Based in {SITE.location}</p>
          <h1>Building thoughtful<br /><em>digital products.</em></h1>
          <p className="hero-intro">
            I&apos;m <strong>{SITE.name}</strong>, a final-year software engineering student focused on full-stack development, application security, and useful AI-powered experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Explore selected work <span>↗</span></a>
            <a href="#contact" className="btn-outline">Start a conversation</a>
          </div>
          <div ref={ref as unknown as RefObject<HTMLDivElement>} className="hero-stats" aria-label="Portfolio statistics">
            {STATS.map(stat => <Stat key={stat.label} {...stat} active={inView} />)}
          </div>
        </div>

        <div className="hero-portrait-wrap" aria-label={`Portrait of ${SITE.name}`}>
          <div className="hero-portrait-shape" />
          <Image className="hero-portrait" src="/images/profile.jpg" alt="Aman Shafaqat" width={440} height={535} priority />
          <div className="hero-note">
            <span>01</span>
            <p>{SITE.title}</p>
          </div>
        </div>
      </div>
      <a href="#about" className="hero-scroll" aria-label="Scroll to about section">Scroll to explore <span>↓</span></a>
    </section>
  )
}
