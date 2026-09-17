'use client'
import { useState, type RefObject } from 'react'
import { useInView } from '@/hooks/useInView'
import { ZYNTRA, PROJECTS } from '@/data/portfolio'

const zyntra = PROJECTS.find(p => p.id === 'zyntra')!

export default function ZyntraSection() {
  const { ref, inView } = useInView(0.08)
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'ai' | 'roadmap'>('overview')

  const fade = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(28px)',
    transition: `all 0.6s ease ${delay}s`,
  })

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: '🎯' },
    { id: 'architecture' as const, label: 'Architecture', icon: '🏗️' },
    { id: 'ai' as const, label: 'AI Engine', icon: '🤖' },
    { id: 'roadmap' as const, label: 'Roadmap', icon: '🗺️' },
  ]

  return (
    <section
      id="zyntra"
      className="section"
      ref={ref as unknown as RefObject<HTMLElement>}
      style={{ background: 'var(--bg-2)' }}
      aria-label="Zyntra — Featured Project"
    >
      <div className="container">
        {/* Badge */}
        <div style={{ marginBottom: 14, ...fade() }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: 3,
              padding: '5px 14px',
              border: '1px solid var(--cyan-border)',
              borderRadius: 99,
              color: 'var(--cyan)',
              textTransform: 'uppercase',
            }}
          >
            🏆 Featured Project — Final Year Project, UMT 2026
          </span>
        </div>

        {/* Heading */}
        <div style={{ marginBottom: 52, ...fade(0.05) }}>
          <div className="section-tag">Zyntra</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            <span className="gradient-text">Zyntra</span> — AI-Powered<br />University Guidance
          </h2>
          <p className="section-sub" style={{ maxWidth: 620 }}>
            An AI-assisted platform that brings university information together, analyses student profiles,
            recommends programs, and supports application tracking for students applying abroad.
          </p>
          {/* Figma design link */}
          <a
            href={ZYNTRA.figmaDesign}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 18,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: 1,
              color: 'var(--text-3)',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              padding: '6px 14px',
              borderRadius: 8,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan-border)'; e.currentTarget.style.color = 'var(--cyan)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)' }}
          >
            <span>🎨</span> View UI Design in Figma ↗
          </a>
        </div>

        {/* Hero card */}
        <div className="zyntra-hero-card" style={{ padding: 'clamp(28px,4vw,48px)', marginBottom: 48, ...fade(0.1) }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 10 }}>
                // Problem
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8 }}>{ZYNTRA.problem}</p>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 10 }}>
                // Solution
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8 }}>{ZYNTRA.solution}</p>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 16 }}>
            {[
              { v: '25', l: 'Universities' },
              { v: '5', l: 'Countries' },
              { v: '9', l: 'AI Dimensions' },
              { v: '9', l: 'Weighted Factors' },
            ].map(stat => (
              <div key={stat.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--cyan)', marginBottom: 4 }}>{stat.v}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1, color: 'var(--text-3)', textTransform: 'uppercase' }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36, ...fade(0.15) }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              aria-selected={activeTab === tab.id}
            >
              <span aria-hidden="true">{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        <div key={activeTab} style={{ animation: 'fadeUp 0.3s ease' }}>

          {/* OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 18 }}>
                  // Core Features
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {zyntra.highlights?.map((h, i) => (
                    <div key={i} className="glass-card" style={{ padding: '14px 18px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--cyan)', marginTop: 1, flexShrink: 0, fontSize: 12 }}>→</span>
                      <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 18 }}>
                  // My Contributions
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {ZYNTRA.myContributions.map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cyan)', flexShrink: 0, marginTop: 2 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65 }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 14 }}>
                    // Tech Stack
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {zyntra.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              <div className="glass-card" style={{ padding: '28px 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 20 }}>
                  // System Architecture
                </div>
                {[
                  { layer: 'Frontend', tech: 'React.js + Tailwind CSS', color: '#a78bfa' },
                  { layer: 'API Layer', tech: 'Node.js REST APIs', color: '#10b981' },
                  { layer: 'AI Core', tech: 'Agentic AI + NLP Pipeline (Python)', color: '#00c8ff' },
                  { layer: 'Database', tech: 'MongoDB', color: '#f59e0b' },
                  { layer: 'Extension', tech: 'Chrome Extension (Manifest V3)', color: '#ef4444' },
                ].map((l, i) => (
                  <div key={l.layer} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '14px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ width: 8, height: 32, borderRadius: 4, background: l.color, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--text-1)' }}>{l.layer}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-3)' }}>{l.tech}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {Object.entries(ZYNTRA.techStack).map(([key, techs]) => (
                  <div key={key} className="glass-card" style={{ padding: '20px 24px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 12 }}>
                      // {key}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {techs.map(t => <span key={t} className="tech-badge">{t}</span>)}
                    </div>
                  </div>
                ))}

                {/* Engineering challenges */}
                <div className="glass-card" style={{ padding: '20px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 12 }}>
                    // Engineering Challenges
                  </div>
                  {zyntra.challenges?.map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65, paddingBottom: 8, marginBottom: 8, borderBottom: i < (zyntra.challenges?.length ?? 0) - 1 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ color: '#f59e0b', flexShrink: 0 }}>⚡</span>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* AI ENGINE */}
          {activeTab === 'ai' && (
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 28 }}>
                // Profile Strength Analyzer — 9 Weighted Dimensions
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 40 }}>
                {ZYNTRA.scoringDimensions.map((dim, i) => (
                  <div key={dim.name} className="glass-card" style={{ padding: '18px 22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 18 }}>{dim.icon}</span>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--text-1)' }}>{dim.name}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--cyan)', fontWeight: 600 }}>{dim.weight}%</span>
                    </div>
                    <div className="dim-bar-track">
                      <div className="dim-bar-fill" style={{ width: inView ? `${dim.weight * 4}%` : '0%', transition: `width 0.8s ease ${i * 0.05}s` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="glass-card" style={{ padding: '24px 28px', borderColor: 'var(--cyan-border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 12 }}>
                  // Why This Model Works
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8 }}>
                  Unlike tools that rely solely on CGPA, Zyntra&apos;s 9-factor model captures a holistic picture of a student&apos;s profile.
                  Each dimension is weighted to provide a structured view of a student profile.
                  The system identifies the single highest-impact area for improvement and updates dynamically —
                  making it an active advisor, not a static filter.
                </p>
              </div>
            </div>
          )}

          {/* ROADMAP */}
          {activeTab === 'roadmap' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
              {ZYNTRA.roadmap.map((phase, i) => (
                <div key={phase.phase} className="glass-card" style={{ padding: '24px 28px', borderColor: i === 0 ? 'var(--cyan-border)' : 'var(--border)', background: i === 0 ? 'rgba(0,200,255,0.04)' : 'var(--bg-card)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1, color: i === 0 ? 'var(--cyan)' : 'var(--text-3)', marginBottom: 14 }}>
                    {phase.phase}
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {phase.items.map(item => (
                      <li key={item} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
                        <span style={{ color: i === 0 ? 'var(--cyan)' : 'var(--text-3)', flexShrink: 0 }}>{i === 0 ? '✓' : '○'}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', gap: 14, ...fade(0.3) }}>
          {zyntra.demo && !zyntra.demo.includes('YOUR_') && (
            <a href={zyntra.demo} target="_blank" rel="noreferrer" className="btn-primary">
              ▶ Watch Demo
            </a>
          )}
          <a href={zyntra.github} target="_blank" rel="noreferrer" className={zyntra.demo && !zyntra.demo.includes('YOUR_') ? 'btn-outline' : 'btn-primary'}>
            View on GitHub ↗
          </a>
          <a href={ZYNTRA.figmaDesign} target="_blank" rel="noreferrer" className="btn-outline">
            🎨 Figma Design ↗
          </a>
          <a href="#contact" className="btn-outline">
            Discuss the Project
          </a>
        </div>
      </div>
    </section>
  )
}
