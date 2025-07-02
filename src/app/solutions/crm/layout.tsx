import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZAVIS CRM | All-in-One Customer Conversation Platform',
  description: 'Manage chat, social, email, and SMS conversations in one central place—powerful, collaborative, and ready for growth.',
}

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 