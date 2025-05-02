"use client"

import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      id: 1,
      title: "Trigger",
      description: "A customer signs up, calls in, or submits a form.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V17M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "ZAVIS Calls Instantly",
      description: "Our AI voice agent dials the user, speaks in their language, and completes the task — onboarding, verification, support, or sales.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2L22 6L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 22L2 18L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 14C22 16.1217 21.1571 18.1566 19.6569 19.6569C18.1566 21.1571 16.1217 22 14 22H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "You Get Everything",
      description: "Call recording, real-time transcript, key insights — no manual follow-ups needed.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 9L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 13L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 17L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Need a Human?",
      description: "ZAVIS knows when to escalate — and hands off the call to your team with full context.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 20V19C5 16.2386 7.23858 14 10 14H14C16.7614 14 19 16.2386 19 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 16L21 18M21 18L19 20M21 18H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

  const whyChoosePoints = [
    "Instant responses to incoming calls — no wait times",
    "Understands human language & handles complex conversations",
    "Multilingual support for both Arabic and English",
    "Built for complete compliance with GCC regulations"
  ]

  return (
    <section id="howItWorks" className="py-20 relative" ref={containerRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How ZAVIS Handles Your Calls — Start to Finish
          </h2>
        </motion.div>

        {/* Process steps - new vertical layout */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="relative">
            {/* Connecting vertical line */}
            <motion.div 
              className="absolute left-7 top-0 bottom-0 w-[2px] bg-border/40 z-0"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            
            <div className="space-y-16 relative z-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  className="flex"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUpVariants}
                >
                  {/* Step icon */}
                  <div className="flex-shrink-0 mr-8">
                    <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center shadow-glow text-accent z-10 relative">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      <span className="text-accent">{step.id}.</span> {step.title}
                    </h3>
                    <p className="text-foreground-secondary">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Teams Choose Us section */}
        <motion.div 
          className="mt-16 bg-background-secondary border border-border rounded-2xl p-8 md:p-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Why Teams Are Excited About ZAVIS</h3>
              <p className="text-foreground-secondary mb-6">From startups to enterprise support teams, ZAVIS is already sparking interest where it matters.</p>
            </div>
            
            <div className="flex-1">
              <ul className="space-y-4">
                {whyChoosePoints.map((point, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start text-sm md:text-base"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Mid-page CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let ZAVIS handle your next 1,000 calls — starting today.
          </h3>
          <p className="text-foreground-secondary max-w-lg mx-auto mb-8">
            See how much time, money, and stress you can save with voice automation.
          </p>
          <a 
            href="https://calendly.com/zavis-support/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary px-6 py-2.5 text-sm flex items-center gap-2 mx-auto inline-flex hover:opacity-90 transition-all cursor-pointer"
            style={{ pointerEvents: 'auto', zIndex: 50, position: 'relative' }}
            onClick={(e) => { e.stopPropagation(); window.open('https://calendly.com/zavis-support/30min', '_blank'); }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2396 9.1438C16.8291 9.40522 17.2931 9.78791 17.6559 10.2347C18.0187 10.6815 18.2625 11.1773 18.3885 11.6731C18.5145 12.1689 18.5178 12.6647 18.4007 13.1195C18.2837 13.5743 18.0495 13.9878 17.698 14.3478C17.3466 14.7077 16.917 14.996 16.4105 15.183C15.904 15.3701 15.344 15.4426 14.7839 15.405C14.2239 15.3674 13.6865 15.2218 13.2138 14.9847C12.741 14.7477 12.3509 14.4282 12.0771 14.0562" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10.689 9.22382C10.1257 8.88806 9.47915 8.73833 8.82584 8.78818C8.17252 8.83804 7.56171 9.08451 7.07159 9.4862C6.58147 9.88788 6.24218 10.4258 6.1084 11.02C5.97461 11.6141 6.05374 12.2307 6.3318 12.7729C6.60986 13.3151 7.07171 13.7517 7.6429 14.0191C8.21409 14.2865 8.86401 14.3684 9.48898 14.2525C10.114 14.1367 10.6822 13.8292 11.1114 13.3759C11.5405 12.9226 11.8089 12.3473 11.8777 11.734" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
} 