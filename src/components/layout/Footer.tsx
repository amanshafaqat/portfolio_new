import { SITE } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '36px 0',
        background: 'var(--bg)',
      }}
      aria-label="Site footer"
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}
      >
        {/* Left */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--cyan)', marginBottom: 4 }}>
            AS<span style={{ color: 'var(--text-3)', fontWeight: 400 }}>.dev</span>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>
            © {year} {SITE.name} · Built with Next.js & ❤️
          </div>
        </div>

        {/* Center — keyboard shortcut hint */}
        <div
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 6 }}
          aria-label="Tip: Press Ctrl+K to open command palette"
        >
          <kbd style={{ padding: '3px 7px', border: '1px solid var(--border)', borderRadius: 5, fontSize: 10 }}>⌘K</kbd>
          <span>Command Palette</span>
        </div>

        {/* Right */}
        <nav aria-label="Footer navigation" style={{ display: 'flex', gap: 24 }}>
          <a href={SITE.github} target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub profile">
            GitHub ↗
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn profile">
            LinkedIn ↗
          </a>
          <a href={`mailto:${SITE.email}`} className="footer-link" aria-label="Send email">
            Email ↗
          </a>
        </nav>
      </div>
    </footer>
  )
}
