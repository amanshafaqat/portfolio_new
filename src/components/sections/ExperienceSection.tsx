'use client'
import type { RefObject } from 'react'
import { useInView } from '@/hooks/useInView'
import { EXPERIENCE } from '@/data/portfolio'

const TYPE_COLORS: Record<string, string> = {
  project: '#00c8ff',
  industry: '#a78bfa',
  education: '#f59e0b',
}

const TYPE_LABELS: Record<string, string> = {
  project: 'Project',
  industry: 'Industry',
  education: 'Education',
}

export default function ExperienceSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      id="experience"
      className="section"
      ref={ref as unknown as RefObject<HTMLElement>}
      style={{ background: 'var(--bg-2)' }}
      aria-label="Experience and education"
    >
      <div className="container">
        {/* Heading */}
        <div
          style={{
            marginBottom: 60,
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-sub">
            From internships and student projects to real production systems — building experience across the full stack.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 28 }}>
          <div className="timeline-line" aria-hidden="true" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {EXPERIENCE.map((exp, i) => {
              const color = TYPE_COLORS[exp.type]
              return (
                <div
                  key={exp.id}
                  style={{
                    position: 'relative',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'none' : 'translateX(-24px)',
                    transition: `all 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Dot */}
                  <div
                    className="timeline-dot"
                    style={{ background: color, boxShadow: `0 0 10px ${color}60` }}
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <article
                    className="glass-card"
                    style={{ marginLeft: 16, padding: 'clamp(20px,3vw,32px)' }}
                    aria-label={`${exp.role} at ${exp.company}`}
                  >
                    {/* Header */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 12,
                        marginBottom: 16,
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-1)' }}>
                            {exp.role}
                          </h3>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: 9,
                              padding: '3px 10px',
                              borderRadius: 99,
                              background: `${color}12`,
                              color,
                              border: `1px solid ${color}25`,
                              textTransform: 'uppercase',
                              letterSpacing: 1.5,
                            }}
                          >
                            {TYPE_LABELS[exp.type]}
                          </span>
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, color, fontWeight: 500 }}>
                          {exp.company}
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-2)' }}>
                          {exp.period}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', marginTop: 3 }}>
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: exp.points.length ? 16 : 0 }}>
                      {exp.description}
                    </p>

                    {/* Bullet points */}
                    {exp.points.length > 0 && (
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {exp.points.map((pt, j) => (
                          <li
                            key={j}
                            style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65 }}
                          >
                            <span style={{ color, marginTop: 2, flexShrink: 0 }}>→</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech */}
                    {exp.tech.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                        {exp.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                      </div>
                    )}
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
