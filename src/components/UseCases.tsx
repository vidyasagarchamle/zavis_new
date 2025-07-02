"use client"

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function UseCases() {
  const containerRef = useRef<HTMLDivElement>(null)

  const useCases = [
    {
      id: 1,
      title: "Onboarding & KYC",
      description: "Welcome users instantly, collect info, and verify identities — all without human intervention.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5V7M15 11V13M15 17V19M5 5H19C20.1046 5 21 5.89543 21 7V10C21 11.1046 20.1046 12 19 12H5C3.89543 12 3 11.1046 3 10V7C3 5.89543 3.89543 5 5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12H19C20.1046 12 21 12.8954 21 14V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V14C3 12.8954 3.89543 12 5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 9H9M7 16H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Support & FAQs",
      description: "Say goodbye to hold times. ZAVIS answers routine queries 24/7 — without burnout or missed calls.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="17" r="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Sales & Compliance",
      description: "Stick to the script, every time. ZAVIS logs every call, captures voice consent, and keeps you audit-ready.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Concierge & Hospitality",
      description: "Multilingual AI concierges that handle travel updates, logistics, bookings — all with zero stress.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21.0001H21M4 18.0001H20M6 18.0001V13.0001M10 18.0001V13.0001M14 18.0001V13.0001M18 18.0001V13.0001M3 13.0001H21M12 7.00005L7 13.0001H17L12 7.00005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7.00005V3.00005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

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

  return (
    <section id="useCases" className="py-16 bg-transparent relative" ref={containerRef}>
      {/* Global background is now used instead */}
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-2">Use Cases</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Where ZAVIS Works Best
          </h2>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUpVariants}
              className="bg-background/70 backdrop-blur-sm border border-border/30 rounded-lg p-5 hover:border-accent/20 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors duration-300">{useCase.title}</h3>
                  <p className="text-[color:var(--foreground-secondary)] text-sm">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[color:var(--foreground-secondary)] text-sm italic max-w-2xl mx-auto"
        >
          These aren&apos;t just features — they&apos;re hours saved, costs cut, and customers delighted.
        </motion.p>
      </div>
    </section>
  )
} 