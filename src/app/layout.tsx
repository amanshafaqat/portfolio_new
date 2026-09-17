import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '@/styles/globals.css'
import { SITE } from '@/data/portfolio'

export const metadata: Metadata = {
  metadataBase: new URL('https://amanshafaqat.dev'),
  title: {
    default: 'Aman Shafaqat — Software Engineer',
    template: '%s | Aman Shafaqat',
  },
  description: 'Final-year BS Software Engineering student at UMT Lahore with hands-on experience in full-stack web development, secure web applications, and project-based AI/ML work.',
  keywords: [
    'Aman Shafaqat', 'software engineer', 'full-stack developer', 'React', 'Next.js',
    'Python', 'cybersecurity', 'AI', 'machine learning', 'Lahore', 'Pakistan',
    'UMT', 'Zyntra', 'portfolio', 'internship', 'software engineering student',
  ],
  authors: [{ name: 'Aman Shafaqat', url: 'https://github.com/amanshafaqat' }],
  creator: 'Aman Shafaqat',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amanshafaqat.dev',
    siteName: 'Aman Shafaqat',
    title: 'Aman Shafaqat — Software Engineer',
    description: 'Software engineering portfolio featuring full-stack development, secure web applications, and project-based AI/ML work.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aman Shafaqat — Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Shafaqat — Software Engineer',
    description: 'Full-stack development, secure web applications, and project-based AI/ML work.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://amanshafaqat.dev' },
}

export const viewport: Viewport = {
  themeColor: '#00c8ff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: SITE.name,
              url: 'https://amanshafaqat.dev',
              email: SITE.email,
              jobTitle: SITE.title,
              worksFor: { '@type': 'Organization', name: 'UMT Lahore' },
              sameAs: [SITE.linkedin, SITE.github],
              description: SITE.bio,
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
