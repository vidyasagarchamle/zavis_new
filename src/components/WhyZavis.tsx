"use client"

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function WhyZavis() {
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

  const differentiators = [
    {
      id: 1,
      title: "Real multilingual support (Arabic + English)",
      description: "Natively handle calls in Arabic and English with genuine language understanding, not just translations.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C16.0764 2 19.578 4.14684 21.4412 7.36354C21.5026 7.47186 21.5 7.60568 21.4345 7.71035C21.3691 7.81502 21.2497 7.87924 21.1254 7.87924H2.87456C2.75035 7.87924 2.63088 7.81502 2.56551 7.71035C2.50013 7.60568 2.49748 7.47186 2.55883 7.36354C4.42198 4.14684 7.92356 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 22C16.0764 22 19.578 19.8532 21.4412 16.6365C21.5026 16.5281 21.5 16.3943 21.4345 16.2896C21.3691 16.185 21.2497 16.1208 21.1254 16.1208H2.87456C2.75035 16.1208 2.63088 16.185 2.56551 16.2896C2.50013 16.3943 2.49748 16.5281 2.55883 16.6365C4.42198 19.8532 7.92356 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Cloud, on-prem, or hybrid — you choose",
      description: "Flexible deployment options to meet your security requirements and IT infrastructure needs.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 19C4.01472 19 2 16.9853 2 14.5C2 12.1564 3.79151 10.2313 6.07974 10.0194C6.54781 7.17213 9.02024 5 12 5C14.9798 5 17.4522 7.17213 17.9203 10.0194C20.2085 10.2313 22 12.1564 22 14.5C22 16.9853 19.9853 19 17.5 19H6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13V17M12 17L14 15M12 17L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Built for GCC regulations",
      description: "Compliant with local data sovereignty and privacy regulations for worry-free operation.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5 8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8C9.5 6.61929 10.6193 5.5 12 5.5C13.3807 5.5 14.5 6.61929 14.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.4264 19C15.3395 17.2815 13.7804 16.125 12 16.125C10.2196 16.125 8.66053 17.2815 7.57361 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.5 13.5L17.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 10L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 13.5L6.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 10L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Zero fluff. Zero setup headaches.",
      description: "Simple implementation with minimal technical overhead and no unnecessary features.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 3L13.4446 3.4006C16.7496 5.82431 19 10.0588 19 14H5C5 10.1335 7.16548 6.0306 10.3454 3.50083L10.9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <section id="whyZavis" className="py-20 relative" ref={containerRef}>
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
            ZAVIS vs Others: <span className="text-gradient">What Actually Matters</span>
          </h2>
        </motion.div>

        {/* Comparison table */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16 overflow-hidden rounded-xl border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-background-secondary p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center">
                <div className="inline-block bg-accent/10 text-accent rounded-lg px-4 py-2 font-bold">
                  ZAVIS
                </div>
              </div>
              <div className="col-span-1 text-center">
                <div className="inline-block bg-background/50 rounded-lg px-4 py-2 text-[color:var(--foreground-secondary)]">
                  Others
                </div>
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-border">
            {[
              {
                feature: "Multilingual Arabic + English support",
                zavis: true,
                others: false
              },
              {
                feature: "Deployment flexibility",
                zavis: true,
                others: false
              },
              {
                feature: "GCC regulatory compliance",
                zavis: true,
                others: false
              },
              {
                feature: "24/7 availability",
                zavis: true,
                others: true
              },
              {
                feature: "Integration flexibility",
                zavis: true,
                others: false
              },
              {
                feature: "Setup time",
                zavis: "24 hours",
                others: "Weeks"
              }
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4">
                <div className="col-span-1 flex items-center">
                  <span className="font-medium">{item.feature}</span>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  {typeof item.zavis === "boolean" ? (
                    item.zavis ? (
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-[color:var(--foreground-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )
                  ) : (
                    <span className="text-accent font-medium">{item.zavis}</span>
                  )}
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  {typeof item.others === "boolean" ? (
                    item.others ? (
                      <svg className="w-6 h-6 text-[color:var(--foreground-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-[color:var(--foreground-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )
                  ) : (
                    <span className="text-[color:var(--foreground-secondary)]">{item.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Differentiators grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUpVariants}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[color:var(--foreground-secondary)]">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 