"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const industries = [
  {
    title: 'Telecom',
    description: 'Plan upgrades, KYC, support',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[color:var(--accent-1)] animate-pulse-subtle" viewBox="0 0 48 48" fill="none">
        <path d="M24 4v8M36 12l-6 6M12 12l6 6M4 24h8M36 24h8" className="stroke-current" strokeWidth="2"/>
        <circle cx="24" cy="24" r="8" className="stroke-current" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'BFSI',
    description: 'Fraud alerts, loan updates',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[color:var(--accent-1)] animate-pulse-subtle" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" className="stroke-current" strokeWidth="2"/>
        <path d="M16 20h16M16 28h16" className="stroke-current" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    description: 'Reminders, onboarding, eligibility checks',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[color:var(--accent-1)] animate-pulse-subtle" viewBox="0 0 48 48" fill="none">
        <path d="M24 12v24M12 24h24" className="stroke-current" strokeWidth="2"/>
        <circle cx="24" cy="24" r="20" className="stroke-current" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Real Estate',
    description: 'Lead qualification, rent reminders',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[color:var(--accent-1)] animate-pulse-subtle" viewBox="0 0 48 48" fill="none">
        <path d="M8 20l16-12 16 12v20H8V20z" className="stroke-current" strokeWidth="2"/>
        <path d="M20 32h8v-8h-8v8z" className="stroke-current" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Travel',
    description: 'Multilingual concierge, booking updates',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[color:var(--accent-1)] animate-pulse-subtle" viewBox="0 0 48 48" fill="none">
        <path d="M40 24H8M24 8l16 16-16 16" className="stroke-current" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Logistics',
    description: 'Delivery tracking, address changes',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[color:var(--accent-1)] animate-pulse-subtle" viewBox="0 0 48 48" fill="none">
        <path d="M8 32h32M8 16h32" className="stroke-current" strokeWidth="2"/>
        <circle cx="16" cy="16" r="4" className="stroke-current" strokeWidth="2"/>
        <circle cx="32" cy="32" r="4" className="stroke-current" strokeWidth="2"/>
      </svg>
    ),
  },
]

const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section ref={ref} className="section bg-background-secondary relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-accent-gradient opacity-5 blur-[80px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full bg-accent-gradient opacity-5 blur-[60px]"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">Built for High-Volume, High-Stakes Industries</h2>
          <p className="text-[color:var(--foreground-secondary)] text-sm sm:text-base max-w-2xl mx-auto">
            ZAVIS serves industries where every conversation matters, providing reliable and scalable voice AI solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="flex"
            >
              <div className="card h-full flex flex-col p-5 sm:p-6">
                <div className="mb-4 sm:mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {industry.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{industry.title}</h3>
                <p className="text-sm sm:text-base text-[color:var(--foreground-secondary)]">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Industries 