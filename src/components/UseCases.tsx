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

  const launchFeatures = [
    "Pre-built use case templates",
    "Plug-and-play integrations",
    "Minimal setup effort"
  ]

  const customizeFeatures = [
    "Branded voice & tone",
    "Domain-specific vocabulary",
    "Seamless agent escalation"
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
          className="text-center text-[color:var(--foreground-secondary)] text-sm italic max-w-2xl mx-auto mb-12"
        >
          These aren&apos;t just features — they&apos;re hours saved, costs cut, and customers delighted.
        </motion.p>

        {/* Feature cards - more compact */}
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-background/50 border border-border/30 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.2 4L19.5 9.30005L4.5 19.9001H3L4.5 14.7001L14.2 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.5 14.7001L9.2 17.7001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.2 4L12.3 9.30005L17.3 14.3L19.5 9.30005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Launch in 24 Hours</h3>
                  <ul className="space-y-1">
                    {launchFeatures.map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + (index * 0.1) }}
                      >
                        <svg className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9L21 11L19 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.5 7.04996C13.907 6.57303 13.2076 6.21895 12.4502 6.01323C11.6928 5.8075 10.8987 5.75598 10.1221 5.86323C9.34557 5.97047 8.60127 6.23387 7.9396 6.63584C7.27794 7.03782 6.71418 7.56868 6.29 8.19998M5 11L3 13L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.5 16.95C10.093 17.427 10.7924 17.781 11.5498 17.9867C12.3072 18.1924 13.1013 18.2439 13.8779 18.1367C14.6544 18.0294 15.3987 17.766 16.0604 17.3641C16.7221 16.9621 17.2858 16.4312 17.71 15.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 11L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Customize to Your Brand</h3>
                  <ul className="space-y-1">
                    {customizeFeatures.map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + (index * 0.1) }}
                      >
                        <svg className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA inside the card */}
            <div className="mt-6 text-center pt-4 border-t border-border/30">
              <a 
                href="https://calendly.com/zavis-support/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-2.5 text-sm flex items-center gap-2 mx-auto inline-flex hover:opacity-90 transition-all cursor-pointer"
                style={{ pointerEvents: 'auto', zIndex: 50, position: 'relative' }}
                onClick={(e) => { e.stopPropagation(); window.open('https://calendly.com/zavis-support/30min', '_blank'); }}
              >
                Launch Your AI Agent in 24 Hours
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 