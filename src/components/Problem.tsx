"use client"

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null)

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

  const painPoints = [
    {
      id: 1,
      title: "No Scripts to Memorize",
      description: "ZAVIS speaks naturally with customers — no robotic responses, no memorized lines.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "No Training Time",
      description: "Deploy instantly. Forget agent onboarding, retraining, and inconsistent delivery.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "No Accent Barriers",
      description: "ZAVIS communicates clearly across languages and dialects — including Arabic + English.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C10 18 8.6 14 8.6 12C8.6 10 10.2 8.4 12 8.4C13.8 8.4 15.4 10 15.4 12C15.4 14 14 18 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.5 9H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.5 15H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <section id="problem" className="py-20 bg-background-secondary relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Your Call Experience Is Costing You More Than You Think
          </motion.h2>
          <motion.p 
            className="text-[color:var(--foreground-secondary)] max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Long wait times. Scripted agents. Missed leads.
            Customer support hasn't evolved — and it's silently killing your growth.
            <span className="font-semibold"> ZAVIS voice agents fix that in days, not months.</span>
          </motion.p>
        </div>

        {/* Pain points */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUpVariants}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-glow transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 p-3 bg-accent/10 text-accent rounded-lg mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-[color:var(--foreground-secondary)] text-sm">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Costs visualization */}
        <motion.div 
          className="bg-background border border-border rounded-2xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">The Cost of Inaction</h3>
                <p className="text-[color:var(--foreground-secondary)] mb-4 text-sm">Every missed call or long wait is a missed opportunity.</p>
                <ul className="space-y-3">
                  {[
                    "Lost leads and revenue",
                    "Customer churn from frustration",
                    "Endless training cycles",
                    "Limited operating hours and morale burnout"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-sm md:text-base"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                    >
                      <svg className="h-5 w-5 text-accent/70 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full md:w-1/2 bg-background-secondary rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[color:var(--foreground-secondary)] text-sm">Annual Cost Impact</span>
                    <h4 className="text-3xl font-bold">$1.3 Trillion</h4>
                  </div>
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 8.5H22M6 16.5H8M14 16.5H18M9 12.5H15M12 7V20M7.5 3.5H16.5C18.9853 3.5 21 5.51472 21 8V16C21 18.4853 18.9853 20.5 16.5 20.5H7.5C5.01472 20.5 3 18.4853 3 16V8C3 5.51472 5.01472 3.5 7.5 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Inefficient Call Centers</span>
                      <span className="text-accent">$450B</span>
                    </div>
                    <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent/60"
                        initial={{ width: 0 }}
                        whileInView={{ width: "35%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Lost Customer Revenue</span>
                      <span className="text-accent">$850B</span>
                    </div>
                    <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent/60"
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/30">
                  <p className="text-sm font-medium">Stop paying for broken support. Let ZAVIS take over your calls — 24/7, with zero stress.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 