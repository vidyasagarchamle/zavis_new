"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background effects - more subtle */}
      <div className="absolute inset-0 bg-grid opacity-5 z-0"></div>
      
      {/* Reduced opacity and blur for better aesthetics */}
      <motion.div 
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-gradient opacity-3 blur-[80px]"
        animate={{ 
          x: [0, 20, 0], 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 12,
          ease: "easeInOut"
        }}
      />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-glass rounded-2xl p-8 md:p-12 text-center border border-[color:var(--glass-border)] shadow-[0_8px_30px_-15px_rgba(99,102,241,0.2)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Customer Calls?</h2>
              <p className="text-[color:var(--foreground-secondary)] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Join forward-thinking businesses using ZAVIS to handle calls more efficiently, reduce costs, and improve customer experiences.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="https://calendly.com/sagar-webhash" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 text-sm w-full sm:w-auto"
              >
                Book a Call
              </a>
              <div className="btn-secondary px-4 py-2 text-sm w-full sm:w-auto flex items-center justify-center gap-2 cursor-not-allowed opacity-80">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                </svg>
                Watch Demo
                <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="16" r="1" fill="currentColor"/>
                </svg>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-[color:var(--foreground-secondary)] mt-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              No credit card required. Get started in minutes.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 