'use client'
import { useState, type RefObject } from 'react'
import { useInView } from '@/hooks/useInView'
import { CERTIFICATIONS } from '@/data/portfolio'

const CATEGORY_ORDER = ['All', 'Microsoft', 'Huawei', 'Forage', 'Community']

export default function CertificationsSection() {
  const { ref, inView } = useInView(0.08)
  const [activeFilter, setActiveFilter] = useState('All')

  const fade = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(20px)',
    transition: `all 0.6s ease ${delay}s`,
  })

  const filtered = activeFilter === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === activeFilter)

  const categoryColors: Record<string, string> = {
    Microsoft: '#0078d4',
    Huawei: '#ef4444',
    Forage: '#10b981',
    Community: '#a78bfa',
  }

  return (
    <section
      id="certifications"
      className="section"
      ref={ref as unknown as RefObject<HTMLElement>}
      aria-label="Certifications and credentials"
    >
      <div className="container">
        {/* Heading */}
        <div style={{ marginBottom: 48, ...fade() }}>
          <div className="section-tag">Certifications</div>
          <h2 className="section-title">Certifications & Credentials</h2>
          <p className="section-sub">
            Selected certifications, courses, and professional simulation credentials from Huawei, Microsoft, and Forage.
          </p>
        </div>

        {/* Summary bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 1,
            marginBottom: 40,
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-lg)',
            overflow: 'hidden',
            ...fade(0.05),
          }}
        >
          {['Microsoft', 'Huawei', 'Forage', 'Community'].map(cat => {
            const count = CERTIFICATIONS.filter(c => c.category === cat).length
            return (
              <div
                key={cat}
                onClick={() => setActiveFilter(activeFilter === cat ? 'All' : cat)}
                style={{
                  padding: '18px 20px',
                  background: 'var(--bg-card)',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  borderRight: '1px solid var(--border)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-hover)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 24,
                    fontWeight: 700,
                    color: categoryColors[cat],
                    marginBottom: 2,
                  }}
                >
                  {count}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1, color: 'var(--text-3)', textTransform: 'uppercase' }}>
                  {cat}
                </div>
              </div>
            )
          })}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36, ...fade(0.1) }}>
          {CATEGORY_ORDER.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`tab-btn ${activeFilter === cat ? 'active' : ''}`}
              style={
                activeFilter === cat && cat !== 'All'
                  ? { background: categoryColors[cat], borderColor: categoryColors[cat], boxShadow: `0 0 16px ${categoryColors[cat]}30` }
                  : {}
              }
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          key={activeFilter}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}
        >
          {filtered.map((cert, i) => (
            <article
              key={cert.id}
              className="glass-card"
              style={{
                padding: '24px 28px',
                opacity: 0,
                animation: `fadeUp 0.4s ease ${i * 0.06}s forwards`,
              }}
              aria-label={`${cert.title} by ${cert.issuer}`}
            >
              {/* Icon + category */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                  }}
                  aria-hidden="true"
                >
                  {cert.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    letterSpacing: 2,
                    padding: '4px 10px',
                    borderRadius: 99,
                    background: `${cert.color}10`,
                    border: `1px solid ${cert.color}20`,
                    color: cert.color,
                    textTransform: 'uppercase',
                  }}
                >
                  {cert.category}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.3, marginBottom: 4 }}>
                {cert.title}
              </h3>

              {/* Issuer */}
              <div style={{ fontSize: 13, color: cert.color, fontWeight: 500, marginBottom: 8 }}>
                {cert.issuer}
              </div>

              {/* Description */}
              <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.65, marginBottom: 14 }}>
                {cert.description}
              </p>

              {/* Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>
                  {cert.date}
                </div>
                {cert.credentialId && (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)', letterSpacing: 0.5 }}>
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  style={{ marginTop: 14, width: '100%', justifyContent: 'center', fontSize: 12, padding: '9px 16px' }}
                >
                  Verify ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
