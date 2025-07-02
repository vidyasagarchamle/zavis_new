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
  title: 'ZAVIS - AI-Powered Customer Engagement Platform',
  description: 'Transform customer interactions with AI voice agents and unified CRM platform. Automate conversations, streamline support, and boost engagement.',
  keywords: 'AI voice agents, CRM platform, customer engagement, chatbot, automation, conversational AI',
  authors: [{ name: 'ZAVIS' }],
  creator: 'ZAVIS',
  publisher: 'ZAVIS',
  openGraph: {
    title: 'ZAVIS - AI-Powered Customer Engagement Platform',
    description: 'Transform customer interactions with AI voice agents and unified CRM platform. Automate conversations, streamline support, and boost engagement.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZAVIS - AI-Powered Customer Engagement Platform',
    description: 'Transform customer interactions with AI voice agents and unified CRM platform. Automate conversations, streamline support, and boost engagement.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
        {children}
        <GoogleAnalytics gaId="G-EPR5PE5RVV" />
      </body>
    </html>
  )
}
