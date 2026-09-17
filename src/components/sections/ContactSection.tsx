'use client'
import { useState, type RefObject, type FormEvent } from 'react'
import { useInView } from '@/hooks/useInView'
import { SITE } from '@/data/portfolio'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactSection() {
  const { ref, inView } = useInView(0.08)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [copied, setCopied] = useState(false)

  const fade = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(20px)',
    transition: `all 0.6s ease ${delay}s`,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Using Web3Forms — works with no backend needed
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY',
          subject: `[Portfolio] ${form.subject}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          redirect: 'false',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(data.message || 'Failed')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SITE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactDetails = [
    { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}`, icon: '✉️' },
    { label: 'Location', value: SITE.location, href: null, icon: '📍' },
    { label: 'LinkedIn', value: 'linkedin.com/in/amanshafaqat', href: SITE.linkedin, icon: '💼' },
    { label: 'GitHub', value: 'github.com/amanshafaqat', href: SITE.github, icon: '🐙' },
  ]

  return (
    <section
      id="contact"
      className="section"
      ref={ref as unknown as RefObject<HTMLElement>}
      style={{ background: 'var(--bg-2)' }}
      aria-label="Contact Aman Shafaqat"
    >
      <div className="container">
        {/* Heading */}
        <div style={{ marginBottom: 60, textAlign: 'center', ...fade() }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Contact</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Let&apos;s Work Together<br />
            <span className="gradient-text">On Useful Software</span>
          </h2>
          <p className="section-sub" style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
            Open to internship opportunities, research collaborations, and interesting projects.
            I respond within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'start' }}>
          {/* Left — Info */}
          <div style={{ ...fade(0.1) }}>
            {/* Availability badge */}
            <div
              className="glass-card"
              style={{
                padding: '20px 24px',
                marginBottom: 28,
                borderColor: 'rgba(34,197,94,0.25)',
                background: 'rgba(34,197,94,0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: '#22c55e',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px rgba(34,197,94,0.6)',
                    animation: 'pulseGlow 2s ease-in-out infinite',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--text-1)' }}>
                    {SITE.availability}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
                    Response time: within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 32 }}>
              {contactDetails.map(item => (
                <div key={item.label} className="contact-info-row">
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', minWidth: 90 }}>
                    <span aria-hidden="true">{item.icon}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1, color: 'var(--text-3)', textTransform: 'uppercase' }}>
                      {item.label}
                    </span>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      style={{ fontSize: 14, color: 'var(--cyan)', transition: 'opacity 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 14, color: 'var(--text-2)' }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Copy email */}
            <button
              onClick={copyEmail}
              className="btn-outline"
              style={{ width: '100%', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 12 }}
              aria-label="Copy email address to clipboard"
            >
              {copied ? '✓ Copied!' : '📋 Copy Email Address'}
            </button>

            {/* Target note */}
            <div
              style={{
                marginTop: 24,
                padding: '16px 20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 10 }}>
                // Looking for
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  'Software Engineering Internships',
                  'Full-Time SE / AI Engineering Roles',
                  'Full-Stack Development Projects',
                  'AI / ML Engineering Opportunities',
                  'Open Source Collaboration',
                ].map(role => (
                  <div key={role} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--cyan)' }}>→</span>
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ ...fade(0.15) }}>
            {status === 'sent' ? (
              <div
                className="glass-card"
                style={{
                  padding: '56px 32px',
                  textAlign: 'center',
                  borderColor: 'rgba(16,185,129,0.3)',
                  background: 'rgba(16,185,129,0.04)',
                  animation: 'fadeUp 0.4s ease',
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }} aria-hidden="true">✅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: 'var(--text-1)', marginBottom: 8 }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>
                  Thank you for reaching out. I&apos;ll reply within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline"
                  style={{ fontSize: 13 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                noValidate
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label htmlFor="contact-name" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1, color: 'var(--text-3)', textTransform: 'uppercase', display: 'block', marginBottom: 7 }}>
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      className="input-field"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1, color: 'var(--text-3)', textTransform: 'uppercase', display: 'block', marginBottom: 7 }}>
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      className="input-field"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1, color: 'var(--text-3)', textTransform: 'uppercase', display: 'block', marginBottom: 7 }}>
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    className="input-field"
                    type="text"
                    placeholder="Internship opportunity / Full-time role / Project collaboration…"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1, color: 'var(--text-3)', textTransform: 'uppercase', display: 'block', marginBottom: 7 }}>
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    className="input-field"
                    placeholder="Tell me about the role, project, or opportunity…"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    rows={6}
                    style={{ resize: 'vertical', minHeight: 140 }}
                  />
                </div>

                {status === 'error' && (
                  <div
                    role="alert"
                    style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--r)', color: '#f87171', fontSize: 14 }}
                  >
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'sending'}
                  style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                  aria-busy={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)', textAlign: 'center', letterSpacing: 0.5 }}>
                  Powered by Web3Forms · No data stored · Reply within 24h
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
