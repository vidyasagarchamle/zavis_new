"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import GlobalBackground from '@/components/ui/GlobalBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AuroraText } from '@/components/magicui/aurora-text'
import { GradientBorderButton } from '@/components/ui/GradientBorderButton'
import { HowItWorks } from '@/components/crm/HowItWorks'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5
    }
  })
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const whyZavisCRMFeatures = [
  {
    id: 1,
    title: "Unify Every Touchpoint",
    description: "Bring conversations from WhatsApp, Messenger, website chat, email, SMS, and more into one sleek inbox—no more juggling apps or channels.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12H16M8 8H16M8 16H12M6 20.8L4.5 22L3.2 20.8C2.48 20.32 2 19.52 2 18.64V6C2 4.89 2.89 4 4 4H20C21.11 4 22 4.89 22 6V14C22 15.11 21.11 16 20 16H8.5L6 20.8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Boost Real-Time Engagement",
    description: "Connect every lead—from ads, social media, chat widgets, or email—instantly and contextually, so no opportunity slips away.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Powerful Integrations",
    description: "Seamlessly connect with tools you rely on—Salesforce, HubSpot, Shopify, Zapier, Google Sheets—and automate lead syncing and workflows.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V13H15V21H17ZM14 21V7H10V21H14ZM9 21V10H7V21H9ZM20 21V16H18V21H20ZM2 21H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

const inboxFeatures = [
  {
    id: 1,
    title: "Shared, Streamlined Conversations",
    description: "Centralize customer messages so your team can view and respond together—no duplicates, no conflicting replies.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM21 21V19C20.9993 18.1137 20.7044 17.2528 20.1614 16.5523C19.6184 15.8519 18.8581 15.3516 18 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Intelligent Workflows",
    description: "Create rules to tag, assign, and route chats to the right people automatically—efficient and scalable.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "AI Assist & Message Templates",
    description: "Leverage automation to pre-fill answers, translate messages, and surface suggested responses anywhere, anytime.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.813 15.904L9 18.75L9.813 15.904ZM9.813 15.904C10.445 15.445 11.185 15.198 11.95 15.198C12.715 15.198 13.455 15.445 14.087 15.904M14.087 15.904L15 18.75L14.087 15.904ZM6 12C6 15.314 8.686 18 12 18C15.314 18 18 15.314 18 12C18 8.686 15.314 6 12 6C8.686 6 6 8.686 6 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

const leadAutomationFeatures = [
  {
    id: 1,
    title: "Lead Capture & Qualification",
    description: "Turn chat into lead campaigns—collect names, emails, phone numbers, and qualifying info via conversational forms.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21L12 18L16 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Conversational Forms & Bot Flows",
    description: "Engage proactively with new contacts using chatbots or workflows—without sacrificing brand voice.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9H16M8 13H14M6 19.5L4 21V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V17C20 17.5523 19.5523 18 19 18H6.5L6 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Auto-Assign & Round-Robin",
    description: "Smartly route new inquiries to your sales reps based on criteria like load, location, or product interest.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8L16 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3V8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

const campaignFeatures = [
  {
    id: 1,
    title: "Targeted Messages",
    description: "Segment your contacts (e.g., customers, leads, repeat buyers) and send personalized announcements across channels.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V16M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Re-Engagement Tools",
    description: "Automate follow-ups—missed cart, upcoming appointment, reactivation, NPS survey—so your brand stays top-of-mind.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V12M18 9L12 3L6 9M12 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Analytics & Reporting",
    description: "Tap into insights—response times, conversation volume, funnel drop-offs, agent performance—to continuously optimize.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21M7 14L12 9L16 13L21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

const useCases = [
  {
    useCase: "Real Estate Lead Nurture",
    result: "2× faster lead response & higher appointment booking",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    useCase: "E-commerce Cart Recovery",
    result: "42% lift in conversion via targeted chat outreach",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    useCase: "Healthcare Appointment Reminders",
    result: "Reduced no-shows with automated omnichannel reminders",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    useCase: "Customer Support",
    result: "84% better CSAT scores with unified chat handling",
    color: "from-orange-500/20 to-red-500/20"
  }
]

export default function CRMPage() {
  // Scroll-based fade for hero image
  const [imageOpacity, setImageOpacity] = useState(1)
  const imageRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!imageRef.current) return
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = imageRef.current!.getBoundingClientRect()
        const windowHeight = window.innerHeight
        // Start fading when image bottom is above 80% of viewport, fully faded when above 0
        const fadeStart = windowHeight * 0.8
        const fadeEnd = 0
        const bottom = rect.bottom
        let opacity = 1
        if (bottom < fadeStart) {
          opacity = Math.max(0, (bottom - fadeEnd) / (fadeStart - fadeEnd))
        }
        setImageOpacity(opacity)
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="relative">
      <GlobalBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section id="crm-hero" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24 bg-gradient-to-br from-primary/5 via-transparent to-accent-2/5">
        <div className="container mx-auto px-4 py-12 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-6">
                <span className="animate-pulse h-2 w-2 rounded-full bg-primary"></span>
                <p className="text-sm font-medium text-muted-foreground">All-in-One CRM Platform</p>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                All-in-One Customer <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>Conversation & CRM</AuroraText> Platform
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Manage chat, social, email, and SMS conversations in one central place—powerful, collaborative, and ready for growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <GradientBorderButton
                  href="https://calendly.com/zavis-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </GradientBorderButton>
                <a 
                  href="https://calendly.com/zavis-support/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 hover:scale-105 transition-all duration-300"
                >
                  Talk to Sales
                </a>
              </div>
            </motion.div>
          </div>
          {/* Dashboard image, clean and modern, no card or border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ opacity: imageOpacity }}
            className="relative mt-12 md:mt-16 flex justify-center"
            ref={imageRef}
          >
            <div className="w-full max-w-6xl mx-auto">
              <Image
                src="/mail2.webp"
                alt="CRM Dashboard Preview"
                width={1200}
                height={600}
                className="w-full h-auto object-contain rounded-xl shadow-large"
                quality={70}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICwAAABwAgCdASoEAAQAAVAfJZgCdAEOkAQAAP7mAA=="
                sizes="(max-width: 768px) 98vw, (max-width: 1200px) 90vw, 70vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Zavis CRM Section */}
      <section className="py-14 md:py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="animate-pulse h-2 w-2 rounded-full bg-primary"></span>
              <p className="text-sm font-medium text-primary">Core Features</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>Zavis CRM</AuroraText>?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Transform how you handle customer conversations with unified touchpoints and intelligent automation.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto"
          >
            {whyZavisCRMFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={fadeInUpVariants}
                custom={index}
                className="group relative"
              >
                <Card className="p-8 h-full text-center hover-lift">
                  <div className="flex justify-center mb-6">
                    <div className="w-8 h-8 text-foreground [&>svg]:stroke-current [&>svg]:stroke-2">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>{feature.title}</AuroraText>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 relative bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>Customer Conversations</AuroraText>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your free trial today and discover how Zavis CRM syncs with your workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientBorderButton
                href="https://calendly.com/zavis-support/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </GradientBorderButton>
              <a 
                href="https://calendly.com/zavis-support/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 hover:scale-105 transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold text-primary">Zavis CRM</span> is part of Zavis, your AI-enabled conversational engagement suite.
                <br />
                Already using Zavis Voice? Add chat to the mix and enjoy end-to-end automation.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/" className="text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 