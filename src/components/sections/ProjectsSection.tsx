'use client'
import { useState, type RefObject } from 'react'
import { useInView } from '@/hooks/useInView'
import { PROJECTS, type Project } from '@/data/portfolio'

const CATEGORIES = ['All', 'AI/ML', 'Full Stack', 'Security', 'Desktop', 'Frontend']

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
    >
      <div className="modal-box" style={{ animation: 'fadeUp 0.25s ease' }}>
        {/* Header */}
        <div
          style={{
            padding: '28px 32px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
            background: `linear-gradient(135deg, ${project.color}08, transparent)`,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 28 }}>{project.icon}</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-1)' }}>
                {project.title}
              </h2>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1, color: project.color, textTransform: 'uppercase' }}>
              {project.category}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '6px 12px', color: 'var(--text-2)', cursor: 'pointer', fontSize: 16, flexShrink: 0 }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8 }}>{project.longDesc}</p>

          {/* Tech stack */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 12 }}>
              Tech Stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 12 }}>
                Key Features
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.highlights.map(h => (
                  <div key={h} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                    <span style={{ color: project.color, flexShrink: 0 }}>→</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 12 }}>
                Challenges
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.challenges.map(c => (
                  <div key={c} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                    <span style={{ color: '#f59e0b', flexShrink: 0 }}>⚡</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future improvements */}
          {project.future && (
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 12 }}>
                Future Improvements
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.future.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                    <span style={{ color: '#10b981', flexShrink: 0 }}>○</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div style={{ display: 'flex', gap: 12 }}>
            {project.github && !(project.github.includes('YOUR_REPO')) && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}>
                GitHub ↗
              </a>
            )}
            {project.demo && !project.demo.includes('YOUR_') && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}>
                ▶ Watch Demo
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}>
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <article
        className="glass-card"
        style={{
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          cursor: 'pointer',
          opacity: 0,
          animation: `fadeUp 0.5s ease ${index * 0.06}s forwards`,
          borderColor: project.flagship ? 'var(--cyan-border)' : 'var(--border)',
          background: project.flagship ? 'rgba(0,200,255,0.03)' : 'var(--bg-card)',
        }}
        onClick={() => setSelected(true)}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(true) } }}
        tabIndex={0}
        role="button"
        aria-label={`View ${project.title} project details`}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span style={{ fontSize: 24, lineHeight: 1 }}>{project.icon}</span>
            <div>
              {project.featured && (
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  letterSpacing: 2,
                  color: project.color,
                  textTransform: 'uppercase',
                  marginBottom: 3,
                }}>
                  Featured
                </div>
              )}
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.2 }}>
                {project.title}
              </h3>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
            {project.github && !project.github.includes('YOUR_REPO') && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                aria-label={`${project.title} GitHub repository`}
                style={{
                  width: 30,
                  height: 30,
                  border: '1px solid var(--border)',
                  borderRadius: 7,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-2)',
                  fontSize: 13,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)' }}
              >
                ↗
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                aria-label={`${project.title} live demo`}
                style={{
                  width: 30,
                  height: 30,
                  border: '1px solid var(--border)',
                  borderRadius: 7,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-2)',
                  fontSize: 13,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)' }}
              >
                🔗
              </a>
            )}
          </div>
        </div>

        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, flex: 1 }}>
          {project.description}
        </p>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {project.tech.slice(0, 5).map(t => <span key={t} className="tech-badge">{t}</span>)}
          {project.tech.length > 5 && (
            <span className="tech-badge" style={{ color: 'var(--text-3)' }}>+{project.tech.length - 5}</span>
          )}
        </div>

        {/* View details hint */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 4, borderTop: '1px solid var(--border)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)', letterSpacing: 1 }}>
            CLICK FOR DETAILS
          </span>
          <span style={{ color: project.color, fontSize: 12 }}>→</span>
        </div>
      </article>

      {selected && <ProjectModal project={project} onClose={() => setSelected(false)} />}
    </>
  )
}

export default function ProjectsSection() {
  const { ref, inView } = useInView(0.08)
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')

  const fade = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(20px)',
    transition: `all 0.6s ease ${delay}s`,
  })

  const filtered = PROJECTS.filter(p => {
    if (p.flagship) return false // Zyntra shown separately
    const matchCat = activeFilter === 'All' || p.category === activeFilter
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <section
      id="projects"
      className="section"
      ref={ref as unknown as RefObject<HTMLElement>}
      aria-label="Projects"
    >
      <div className="container">
        <div style={{ marginBottom: 48, ...fade() }}>
          <div className="section-tag">Projects</div>
          <h2 className="section-title">What I&apos;ve Built</h2>
          <p className="section-sub">
            Production-grade projects spanning web apps, security tools, desktop systems, and frontend engineering.
          </p>
        </div>

        {/* Search + Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 36, ...fade(0.1) }}>
          <input
            type="search"
            placeholder="Search projects…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search projects"
            style={{
              padding: '9px 16px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r)',
              color: 'var(--text-1)',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              outline: 'none',
              minWidth: 200,
            }}
            onFocus={e => { e.currentTarget.style.borderColor = 'var(--cyan-border)' }}
            onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }} role="group" aria-label="Filter by category">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`tab-btn ${activeFilter === cat ? 'active' : ''}`}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          key={`${activeFilter}-${search}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}
        >
          {filtered.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', padding: '60px', textAlign: 'center', color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontSize: 14 }}>
              No projects found. Try a different search.
            </div>
          ) : (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          )}
        </div>

        {/* GitHub CTA */}
        <div style={{ marginTop: 48, textAlign: 'center', ...fade(0.2) }}>
          <p style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: 16 }}>
            More projects on GitHub
          </p>
          <a
            href="https://github.com/amanshafaqat"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            View GitHub Profile ↗
          </a>
        </div>
      </div>
    </section>
  )
}
