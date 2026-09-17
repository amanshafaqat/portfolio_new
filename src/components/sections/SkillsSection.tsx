'use client'
import { useState, type RefObject } from 'react'
import { useInView } from '@/hooks/useInView'
import { SKILL_CATEGORIES } from '@/data/portfolio'

export default function SkillsSection() {
  const { ref, inView } = useInView(0.1)
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].id)

  const fade = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(20px)',
    transition: `all 0.6s ease ${delay}s`,
  })

  const active = SKILL_CATEGORIES.find(c => c.id === activeCategory)!

  return (
    <section
      id="skills"
      className="section"
      ref={ref as unknown as RefObject<HTMLElement>}
      aria-label="Technical skills"
    >
      <div className="container">
        {/* Heading */}
        <div style={{ marginBottom: 48, ...fade() }}>
          <div className="section-tag">Skills</div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-sub">
            A full-stack toolkit spanning languages, frameworks, cloud platforms, AI/ML, and cybersecurity.
          </p>
        </div>

        {/* Category tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 40,
            ...fade(0.1),
          }}
          role="tablist"
          aria-label="Skill categories"
        >
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`skills-panel-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              style={activeCategory === cat.id ? { background: cat.color, borderColor: cat.color, boxShadow: `0 0 16px ${cat.color}30` } : {}}
            >
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div
          key={activeCategory}
          id={`skills-panel-${activeCategory}`}
          role="tabpanel"
          aria-label={`${active.label} skills`}
          style={{ ...fade(0.15) }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
            {active.skills.map((skill, i) => (
              <div
                key={skill}
                style={{
                  padding: '16px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  color: 'var(--text-2)',
                  cursor: 'default',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  opacity: 0,
                  animation: `fadeUp 0.35s ease ${i * 0.03}s forwards`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = active.color + '50'
                  el.style.color = active.color
                  el.style.background = active.color + '08'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--border)'
                  el.style.color = 'var(--text-2)'
                  el.style.background = 'var(--bg-card)'
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: active.color,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                {skill}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>
            {active.skills.length} skills in {active.label} —{' '}
            {SKILL_CATEGORIES.reduce((sum, c) => sum + c.skills.length, 0)} total
          </div>
        </div>

        {/* All categories mini overview */}
        <div
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 14,
            ...fade(0.2),
          }}
        >
          {SKILL_CATEGORIES.map(cat => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '16px 20px',
                background: 'var(--bg-card)',
                border: `1px solid ${activeCategory === cat.id ? cat.color + '40' : 'var(--border)'}`,
                borderRadius: 'var(--r)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = cat.color + '50' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = activeCategory === cat.id ? cat.color + '40' : 'var(--border)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 16 }} aria-hidden="true">{cat.icon}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{cat.label}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)' }}>
                {cat.skills.length} technologies
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
