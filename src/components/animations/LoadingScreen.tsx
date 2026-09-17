'use client'
import { useEffect, useState } from 'react'

const PHASES = [
  'Initializing',
  'Loading Assets',
  'Building Interface',
  'Almost Ready',
]

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(PHASES[0])

  useEffect(() => {
    let p = 0
    const tick = () => {
      p += Math.random() * 22 + 6
      if (p >= 100) {
        setProgress(100)
        setPhase(PHASES[3])
        setTimeout(onDone, 350)
        return
      }
      setProgress(p)
      setPhase(PHASES[Math.min(Math.floor((p / 100) * PHASES.length), PHASES.length - 1)])
      setTimeout(tick, 90 + Math.random() * 80)
    }
    const t = setTimeout(tick, 100)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className="loading-screen" role="status" aria-label="Loading portfolio">
      <div className="loading-logo" aria-hidden="true">AS</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div className="loading-bar-track" aria-hidden="true">
          <div className="loading-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <div className="loading-text">{phase} — {Math.round(Math.min(progress, 100))}%</div>
      </div>
    </div>
  )
}
