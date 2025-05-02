import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import UseCases from '@/components/UseCases'
import WhyZavis from '@/components/WhyZavis'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import LiveDemo from '@/components/LiveDemo'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <UseCases />
      <LiveDemo />
      <WhyZavis />
      <CTA />
      <Footer />
      </main>
  )
}
