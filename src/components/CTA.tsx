"use client"

import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GradientBorderButton } from '@/components/ui/GradientBorderButton'

export default function CTA() {
  return (
    <section className="section py-16 bg-transparent relative overflow-hidden">
      {/* Global background is now used instead */}
      
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
              <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                Join forward-thinking businesses using <span className="font-space-grotesk">ZAVIS</span> to handle calls more efficiently, reduce costs, and improve customer experiences.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientBorderButton
                href="https://calendly.com/zavis-support/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </GradientBorderButton>
              <a 
                href="#liveDemo" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Try Demo
              </a>
            </div>
            
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