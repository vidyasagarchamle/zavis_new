"use client"

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="cta" className="py-20 bg-background-secondary relative" ref={containerRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-accent/5 to-transparent opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let ZAVIS handle your next <span className="text-gradient">1,000 calls</span> — starting today.
          </h2>
          <p className="text-[color:var(--foreground-secondary)] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a startup or an enterprise, we&apos;ll help you deploy in 24 hours or less.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#contact" className="btn-primary flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2 4L19.5 9.30005L4.5 19.9001H3L4.5 14.7001L14.2 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.5 14.7001L9.2 17.7001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.2 4L12.3 9.30005L17.3 14.3L19.5 9.30005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Talk to an Expert
            </Link>
            <Link href="#demo" className="btn-secondary flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9995 16L19.9995 7C19.9995 5.89543 19.104 5 17.9995 5L5.99951 5C4.89494 5 3.99951 5.89543 3.99951 7L3.99951 17C3.99951 18.1046 4.89494 19 5.99951 19L14.9995 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 8.5C15 7.11929 16.1193 6 17.5 6C18.8807 6 20 7.11929 20 8.5V13.5C20 14.8807 18.8807 16 17.5 16C16.1193 16 15 14.8807 15 13.5V8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 10.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 13.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Try a Demo Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 