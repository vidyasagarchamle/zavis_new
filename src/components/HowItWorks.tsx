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
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <section id="howItWorks" className="py-10 sm:py-12 md:py-16 bg-transparent relative" ref={containerRef}>
      {/* Global background is now used instead */}
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            How ZAVIS Handles Your Calls — Start to Finish
          </h2>
        </motion.div>

        {/* Process steps - new vertical layout */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="relative">
            {/* Connecting vertical line */}
            <motion.div 
              className="absolute left-4 sm:left-7 top-0 bottom-0 w-[2px] bg-border/40 z-0"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            
            <div className="space-y-10 sm:space-y-16 relative z-10">
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
                  <div className="flex-shrink-0 mr-4 sm:mr-8">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center shadow-glow text-accent z-10 relative">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                      <span className="text-accent">{step.id}.</span> {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground-secondary">{step.description}</p>
                    
                    {/* Add live demo reference after the 4th step */}
                    {step.id === 4 && (
                      <div className="mt-3 sm:mt-4 inline-flex items-center text-accent hover:text-accent/80 transition-colors">
                        <a href="#liveDemo" className="font-medium flex items-center text-sm sm:text-base">
                          <span>Try it yourself in our live demo above</span>
                          <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Teams Choose Us section */}
        <motion.div 
          className="mt-10 sm:mt-16 bg-background-secondary border border-border rounded-2xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Why Teams Are Excited About ZAVIS</h3>
              <p className="text-sm sm:text-base text-foreground-secondary mb-4 sm:mb-6">From startups to enterprise support teams, ZAVIS is already sparking interest where it matters.</p>
            </div>
            
            <div className="flex-1">
              <ul className="space-y-3 sm:space-y-4">
                {whyChoosePoints.map((point, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start text-xs sm:text-sm md:text-base"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-accent mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        {/* Visual connector to LiveDemo section */}
        <div className="text-center mt-6 sm:mt-8">
          <a href="#liveDemo" className="inline-flex flex-col items-center text-accent hover:text-accent/80 transition-colors">
            <span className="font-medium text-xs sm:text-sm mb-2">Back to Live Demo</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 