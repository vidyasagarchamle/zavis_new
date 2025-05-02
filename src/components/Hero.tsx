"use client"

import { motion } from 'framer-motion'
import Link from "next/link"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-[90vh] lg:min-h-screen flex items-start md:items-center overflow-hidden pt-12 md:pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[300px] md:h-[500px] bg-gradient-to-b from-accent/10 to-transparent opacity-70 z-0"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-gradient opacity-5 blur-[100px] animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent-gradient opacity-5 blur-[80px] transform -translate-x-1/2 translate-y-1/3"></div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 py-6 md:py-12 lg:py-16 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 lg:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-glass">
              <span className="animate-pulse h-2 w-2 rounded-full bg-accent"></span>
              <p className="text-sm font-medium">AI Voice Agent Platform</p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Replace Call Centers with <span className="text-gradient">Smart AI Voice Agents</span>
            </h1>
            
            <p className="text-[color:var(--foreground-secondary)] text-base md:text-lg max-w-lg">
              ZAVIS handles your customer calls — onboarding, support, and verification — with zero hold times, zero scripts, and 100% compliance.
            </p>

            <div className="flex flex-wrap gap-2 items-center">
              <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full border border-border bg-glass">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-xs sm:text-sm">Available 24/7</p>
              </div>
              <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full border border-border bg-glass">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-xs sm:text-sm">Multilingual</p>
              </div>
              <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full border border-border bg-glass">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.2426 7.75736C18.5858 10.1005 18.5858 13.8995 16.2426 16.2426C13.8995 18.5858 10.1005 18.5858 7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75736C10.1005 5.41421 13.8995 5.41421 16.2426 7.75736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-xs sm:text-sm">Enterprise-Grade</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://calendly.com/sagar-webhash" target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 text-sm shadow-accent-glow">
                Book a Call
              </a>
              <a href="#liveDemo" className="btn-secondary px-4 py-2 text-sm flex items-center gap-2 shadow-glow">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Try Demo
              </a>
            </div>
            
            <div className="pt-0 md:pt-0 -mt-1">
              <p className="text-xs font-medium text-accent">Built by 3x Founders Who&apos;ve Scaled Multiple Products Across AI and Web3.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-2 md:mt-0"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-lg lg:max-w-xl aspect-square mx-auto">
              <motion.div 
                className="absolute inset-0 rounded-full bg-accent/5 animate-pulse"
                animate={{ 
                  boxShadow: ['0 0 20px rgba(255, 255, 255, 0.1)', '0 0 30px rgba(255, 255, 255, 0.2)', '0 0 20px rgba(255, 255, 255, 0.1)'] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <div className="absolute inset-8 rounded-full bg-accent/10 animate-float"></div>
              
              {/* Dashboard mockup */}
              <div className="absolute inset-8 sm:inset-10 bg-glass rounded-2xl border border-border shadow-glow backdrop-blur-subtle overflow-hidden">
                <div className="p-2.5 sm:p-4">
                  {/* Dashboard header */}
                  <div className="flex flex-col mb-3 sm:mb-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-accent/20 flex items-center justify-center">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1589 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="text-sm sm:text-base font-semibold tracking-tight">ZAVIS Analytics</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 bg-accent/15 rounded-full text-[9px] sm:text-[11px] font-medium text-accent">Live</div>
                        <div className="flex gap-1.5">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-foreground/30"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-foreground/30"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-foreground/30"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[8px] sm:text-[10px] text-[color:var(--foreground-secondary)] pl-8 sm:pl-9">See Automation in Action</p>
                  </div>
                  
                  {/* Dashboard metrics */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="bg-background/50 p-2 sm:p-3 rounded-lg border border-border/50 hover:border-border/80 transition-colors">
                      <p className="text-[9px] sm:text-[11px] text-[color:var(--foreground-secondary)] mb-1">Calls Automated Today</p>
                      <p className="text-base sm:text-lg font-bold">1,247</p>
                      <p className="text-[8px] sm:text-[10px] text-accent mt-1 flex items-center">
                        <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        +12% vs yesterday
                      </p>
                    </div>
                    
                    <div className="bg-background/50 p-2 sm:p-3 rounded-lg border border-border/50 hover:border-border/80 transition-colors">
                      <p className="text-[9px] sm:text-[11px] text-[color:var(--foreground-secondary)] mb-1">Success Rate</p>
                      <p className="text-base sm:text-lg font-bold">91%</p>
                      <p className="text-[8px] sm:text-[10px] text-accent mt-1 flex items-center">
                        <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M5 13L9 17L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Resolved without human help
                      </p>
                    </div>
                    
                    <div className="bg-background/50 p-2 sm:p-3 rounded-lg border border-border/50 hover:border-border/80 transition-colors">
                      <p className="text-[9px] sm:text-[11px] text-[color:var(--foreground-secondary)] mb-1">Average Call Duration</p>
                      <p className="text-base sm:text-lg font-bold">2:47</p>
                      <p className="text-[8px] sm:text-[10px] text-accent mt-1 flex items-center">
                        <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        32s faster than last week
                      </p>
                    </div>
                    
                    <div className="bg-background/50 p-2 sm:p-3 rounded-lg border border-border/50 hover:border-border/80 transition-colors">
                      <p className="text-[9px] sm:text-[11px] text-[color:var(--foreground-secondary)] mb-1">Languages Supported</p>
                      <p className="text-base sm:text-lg font-bold">3</p>
                      <p className="text-[8px] sm:text-[10px] text-accent mt-1 flex items-center">
                        <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Arabic, English, and more
                      </p>
                    </div>
                  </div>

                  {/* Latest conversation section - show on all screens */}
                  <div className="bg-background/50 p-2 sm:p-3 rounded-lg border border-border/50 mb-2 sm:mb-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[9px] sm:text-[11px] font-medium text-[color:var(--foreground-secondary)]">Latest Interaction</p>
                      <div className="px-1.5 py-0.5 bg-accent/20 rounded-full text-[8px] sm:text-[9px] font-medium text-accent">Verified</div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="flex flex-col">
                        <p className="text-[8px] sm:text-[10px] leading-tight"><span className="text-[color:var(--foreground-secondary)]">Customer:</span> "I want to update my plan."</p>
                        <p className="text-[8px] sm:text-[10px] leading-tight text-accent"><span className="text-[color:var(--foreground-secondary)]">ZAVIS:</span> "Sure! Let's verify your details to proceed."</p>
                        <p className="text-[8px] sm:text-[10px] mt-2 pt-1.5 border-t border-border/30"><span className="text-[color:var(--foreground-secondary)]">Status:</span> <span className="text-accent">Verified Successfully</span></p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions Bar - Fixed positioning at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-background/30 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 border-t border-border/40 flex justify-between items-center">
                    <div className="flex space-x-2 sm:space-x-3">
                      <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-accent/15 flex items-center justify-center hover:bg-accent/25 transition-colors">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 7a3 3 0 100 6 3 3 0 000-6z" fill="currentColor" strokeWidth="0"/>
                        </svg>
                      </button>
                      <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-accent/15 flex items-center justify-center hover:bg-accent/25 transition-colors">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 6l-10 7L2 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-accent/15 flex items-center justify-center hover:bg-accent/25 transition-colors">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8v4l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="bg-accent/15 h-1.5 w-1.5 rounded-full animate-pulse"></div>
                      <p className="text-[8px] sm:text-[9px] text-accent">All systems operational</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - simplified for better performance */}
              <motion.div 
                className="absolute top-8 right-0 w-6 sm:w-8 h-6 sm:h-8 bg-accent/20 rounded-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-8 left-0 w-6 sm:w-8 h-6 sm:h-8 bg-accent/15 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}