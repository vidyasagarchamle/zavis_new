import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ZAVIS | AI Voice Agent Platform',
  description: 'ZAVIS is an advanced AI voice agent platform that revolutionizes customer service by handling calls efficiently and intelligently.',
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen bg-[color:var(--background)] relative">
          <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
          <div className="absolute inset-0 bg-noise opacity-30 z-0"></div>
          <main className="relative z-10">
            {children}
          </main>
        </div>
        <GoogleAnalytics gaId="G-EPR5PE5RVV" />
      </body>
    </html>
  )
}
