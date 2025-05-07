import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | ZAVIS',
  description: 'Privacy Policy for ZAVIS AI Voice Agent Platform',
}

export default function PrivacyPolicyLayout({
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