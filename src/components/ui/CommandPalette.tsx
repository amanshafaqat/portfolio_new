'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { SITE } from '@/data/portfolio'

type CmdItem = {
  id: string
  label: string
  icon: string
  action: () => void
  hint?: string
}

export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const items: CmdItem[] = [
    { id: 'home', label: 'Go to Home', icon: '🏠', action: () => scrollTo('#home'), hint: 'H' },
    { id: 'about', label: 'About Me', icon: '👤', action: () => scrollTo('#about') },
    { id: 'skills', label: 'Skills', icon: '⚡', action: () => scrollTo('#skills') },
    { id: 'zyntra', label: 'Zyntra — Featured Project', icon: '🤖', action: () => scrollTo('#zyntra') },
    { id: 'projects', label: 'All Projects', icon: '📁', action: () => scrollTo('#projects') },
    { id: 'experience', label: 'Experience & Education', icon: '💼', action: () => scrollTo('#experience') },
    { id: 'certifications', label: 'Certifications', icon: '🏆', action: () => scrollTo('#certifications') },
    { id: 'contact', label: 'Contact Me', icon: '✉️', action: () => scrollTo('#contact') },
    { id: 'github', label: 'Open GitHub', icon: '🐙', action: () => window.open(SITE.github, '_blank'), hint: '↗' },
    { id: 'linkedin', label: 'Open LinkedIn', icon: '💼', action: () => window.open(SITE.linkedin, '_blank'), hint: '↗' },
    { id: 'email', label: 'Send Email', icon: '📧', action: () => window.location.href = `mailto:${SITE.email}`, hint: '↗' },
    { id: 'copy-email', label: 'Copy Email Address', icon: '📋', action: copyEmail },
  ]

  function scrollTo(hash: string) {
    onClose()
    setTimeout(() => {
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(SITE.email)
    onClose()
  }

  const filtered = items.filter(i =>
    i.label.toLowerCase().includes(query.toLowerCase())
  )

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx(i => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      filtered[activeIdx]?.action()
      onClose()
    }
  }, [filtered, activeIdx, onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  useEffect(() => { setActiveIdx(0) }, [query])

  useEffect(() => { inputRef.current?.focus() }, [])

  return (
    <div
      className="cmd-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div className="cmd-box" style={{ animation: 'fadeUp 0.2s ease' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--text-3)', fontSize: 16 }}>⌘</span>
          <input
            ref={inputRef}
            className="cmd-input"
            style={{ padding: 0, border: 'none', background: 'transparent', flex: 1 }}
            placeholder="Type a command or search…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search commands"
          />
          <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '3px 8px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6, color: 'var(--text-3)' }}>
            ESC
          </kbd>
        </div>

        {/* Items */}
        <div style={{ padding: '8px 0', maxHeight: '60vh', overflowY: 'auto' }} role="listbox">
          {filtered.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
              No results for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item, i) => (
              <div
                key={item.id}
                className={`cmd-item ${i === activeIdx ? 'active' : ''}`}
                onClick={() => { item.action(); onClose() }}
                onMouseEnter={() => setActiveIdx(i)}
                role="option"
                aria-selected={i === activeIdx}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') { item.action(); onClose() } }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <span style={{ flex: 1, fontFamily: 'var(--font-body)' }}>{item.label}</span>
                {item.hint && (
                  <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '2px 7px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 5, color: 'var(--text-3)' }}>
                    {item.hint}
                  </kbd>
                )}
              </div>
            ))
          )}
        </div>

        <div style={{ padding: '10px 20px', borderTop: '1px solid var(--border)', display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)' }}>↑↓ navigate</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)' }}>↵ select</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)' }}>esc close</span>
        </div>
      </div>
    </div>
  )
}
