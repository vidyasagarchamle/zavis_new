"use client"

import { motion } from 'framer-motion'
import { AuroraText } from '@/components/magicui/aurora-text'
import { GradientBorderButton } from '@/components/ui/GradientBorderButton'
import LiveDemo from '@/components/LiveDemo'

export default function VoiceAgentsHero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-start overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        {/* Centered content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-white/70 backdrop-blur-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <p className="text-sm font-medium">AI Voice Agent Platform</p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
            Replace Call Centers with <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>Smart AI Voice Agents</AuroraText>
          </h1>
          
          <p className="text-foreground/80 text-sm sm:text-base mb-5 max-w-3xl mx-auto">
            <span className="font-space-grotesk">ZAVIS</span> handles your customer calls — onboarding, support, and verification — with zero hold times, zero scripts, and 100% compliance.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {/* Features badges */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-white/70 backdrop-blur-sm">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm">Available 24/7</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-white/70 backdrop-blur-sm">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm">Multilingual</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-white/70 backdrop-blur-sm">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.2426 7.75736C18.5858 10.1005 18.5858 13.8995 16.2426 16.2426C13.8995 18.5858 10.1005 18.5858 7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75736C10.1005 5.41421 13.8995 5.41421 16.2426 7.75736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm">Enterprise-Grade</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <GradientBorderButton
              href="https://calendly.com/zavis-support/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm"
            >
              Book a Call
            </GradientBorderButton>
          </div>
        </motion.div>

        {/* Live Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 rounded-2xl blur-3xl -z-10"></div>
          
          {/* Custom styled LiveDemo wrapper */}
          <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl border border-border/30 shadow-2xl overflow-hidden p-6">
            <LiveDemo inHero={true} />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 