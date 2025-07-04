import VoiceAgentsHero from '@/components/voice-agents/Hero'
import Navbar from '@/components/Navbar'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import UseCases from '@/components/UseCases'
import WhyZavis from '@/components/WhyZavis'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import GlobalBackground from '@/components/ui/GlobalBackground'
import { GradientBorderButton } from '@/components/ui/GradientBorderButton'

export const metadata: Metadata = {
  title: 'ZAVIS Voice Agents - AI Voice Agent Platform',
  description: 'Replace call centers with smart AI voice agents for onboarding, support, and verification.',
}

export default function VoiceAgentsPage() {
  return (
    <main className="bg-transparent">
      {/* Global background for the entire page */}
      <GlobalBackground />
      
      <Navbar />
      <div className="relative">
        <VoiceAgentsHero />
        <Problem />
        <HowItWorks />
        <UseCases />
        <WhyZavis />
        <CTA />
      </div>
      <Footer />
    </main>
  )
} 