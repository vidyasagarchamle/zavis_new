import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | ZAVIS',
  description: 'Terms of Service for ZAVIS AI Voice Agent Platform',
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      <div className="pt-20 md:pt-24">
        {children}
      </div>
      <Footer />
    </div>
  )
} 