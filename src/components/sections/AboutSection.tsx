'use client'
import { useState, type RefObject } from 'react'
import { useInView } from '@/hooks/useInView'
import { SITE, TIMELINE, APPROACH_CARDS, SOFT_SKILLS, LANGUAGES_SPOKEN, CERTIFICATIONS, INTERESTS } from '@/data/portfolio'

export default function AboutSection() {
  const { ref, inView } = useInView(0.1)
  const [activeTimeline, setActiveTimeline] = useState(TIMELINE.length - 1)

  const fade = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(28px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  })

  return (
    <section
      id="about"
      className="section"
      ref={ref as unknown as RefObject<HTMLElement>}
      style={{ background: 'var(--bg-2)' }}
      aria-label="About Aman Shafaqat"
    >
      <div className="container">
        {/* Heading */}
        <div style={{ marginBottom: 64, ...fade() }}>
          <div className="section-tag">About</div>
          <h2 className="section-title">
            Engineer first,<br />designer second.
          </h2>
          <p className="section-sub">{SITE.bio}</p>
        </div>

        {/* Quick facts */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 1,
            marginBottom: 64,
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-lg)',
            overflow: 'hidden',
            ...fade(0.1),
          }}
        >
          {([
            { k: 'University', v: 'UMT Lahore', highlight: false },
            { k: 'Degree', v: 'BS Software Engineering', highlight: false },
            { k: 'Graduation', v: SITE.graduationYear, highlight: false },
            { k: 'English', v: SITE.ielts ? `IELTS ${SITE.ielts}` : 'Professional Proficiency', highlight: false },
            { k: 'Status', v: SITE.availability, highlight: false },
          ] as { k: string; v: string; highlight: boolean }[]).map((item, i) => (
            <div
              key={item.k}
              style={{
                padding: '20px 24px',
                background: 'var(--bg-card)',
                borderRight: i % 3 !== 2 ? '1px solid var(--border)' : undefined,
                borderBottom: i < 3 ? '1px solid var(--border)' : undefined,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 6 }}>
                {item.k}
              </div>
              <div style={{ fontSize: 14, color: item.highlight ? 'var(--cyan)' : 'var(--text-1)', fontWeight: 500 }}>{item.v}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: 64, ...fade(0.15) }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 28 }}>
            // My Journey
          </h3>

          {/* Year pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
            {TIMELINE.map((item, i) => (
              <button
                key={item.year}
                onClick={() => setActiveTimeline(i)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 99,
                  border: '1px solid',
                  borderColor: activeTimeline === i ? item.color : 'var(--border)',
                  background: activeTimeline === i ? `${item.color}15` : 'transparent',
                  color: activeTimeline === i ? item.color : 'var(--text-3)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                aria-pressed={activeTimeline === i}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Active card */}
          <div
            key={activeTimeline}
            className="glass-card"
            style={{
              padding: '28px 32px',
              animation: 'fadeUp 0.3s ease',
              borderColor: TIMELINE[activeTimeline].color + '30',
            }}
          >
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 32, lineHeight: 1 }}>{TIMELINE[activeTimeline].icon}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 2, color: TIMELINE[activeTimeline].color, textTransform: 'uppercase', marginBottom: 6 }}>
                  {TIMELINE[activeTimeline].year}
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: 'var(--text-1)', marginBottom: 8 }}>
                  {TIMELINE[activeTimeline].label}
                </h4>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.75 }}>
                  {TIMELINE[activeTimeline].detail}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Approach cards + soft skills */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
          <div style={{ ...fade(0.2) }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 20 }}>
              // My Approach
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {APPROACH_CARDS.map((card, i) => (
                <div
                  key={card.title}
                  className="glass-card"
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'none' : 'translateX(-16px)',
                    transition: `all 0.5s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  <span style={{ fontSize: 22 }}>{card.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--text-1)', marginBottom: 4 }}>
                      {card.title}
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65 }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...fade(0.3) }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 20 }}>
              // Soft Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
              {SOFT_SKILLS.map(s => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>

            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 16, marginTop: 24 }}>
              // Languages
            </h3>
            {LANGUAGES_SPOKEN.map(l => (
              <div key={l.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 14, color: 'var(--text-1)', fontWeight: 500 }}>{l.name}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', letterSpacing: 1 }}>{l.level}</span>
              </div>
            ))}

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              <a href={SITE.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: 13, padding: '10px 20px' }}>
                GitHub ↗
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: 13, padding: '10px 20px' }}>
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
