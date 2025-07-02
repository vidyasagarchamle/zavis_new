import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZAVIS Voice Agents | AI Voice Agent Platform',
  description: 'Replace call centers with smart AI voice agents for onboarding, support, and verification.',
}

export default function VoiceAgentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 