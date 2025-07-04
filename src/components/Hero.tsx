"use client"

import { motion } from 'framer-motion'
import { AuroraText } from '@/components/magicui/aurora-text'
import { GradientBorderButton } from '@/components/ui/GradientBorderButton'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Main hero content */}
      <div className="flex-1 flex items-center pt-20">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-white/70 backdrop-blur-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <p className="text-sm font-medium">AI Voice Agent Platform</p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Replace Call Centers with <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>Smart AI Voice Agents</AuroraText>
              </h1>
              
              <p className="text-foreground/80 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                <span className="font-space-grotesk">ZAVIS</span> handles your customer calls — onboarding, support, and verification — with zero hold times, zero scripts, and 100% compliance.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {/* Features badges */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-white/70 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-sm">Available 24/7</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-white/70 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-sm">Multilingual</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-white/70 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.2426 7.75736C18.5858 10.1005 18.5858 13.8995 16.2426 16.2426C13.8995 18.5858 10.1005 18.5858 7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75736C10.1005 5.41421 13.8995 5.41421 16.2426 7.75736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-sm">Enterprise-Grade</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GradientBorderButton
                  href="https://calendly.com/zavis-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </GradientBorderButton>
                <a 
                  href="#liveDemo" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-foreground bg-white/70 backdrop-blur-sm border border-border/50 hover:bg-white/90 hover:border-border transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Try Demo
                </a>
              </div>
              
              <p className="text-xs font-medium text-accent mt-6">
                Built by 3x Founders Who&apos;ve Scaled Multiple Products Across AI and Web3.
              </p>
            </motion.div>
            
            {/* Right column - Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-xl mx-auto"
            >
              <div className="relative w-full max-w-[400px] sm:max-w-lg lg:max-w-xl mx-auto">
                {/* Subtle glow effect behind dashboard */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 rounded-full blur-3xl"></div>
                
                {/* Dashboard mockup */}
                <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl border border-border/30 shadow-2xl overflow-hidden">
                  <div className="p-4 sm:p-6">
                    {/* Dashboard header */}
                    <div className="flex flex-col mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1589 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="text-base sm:text-lg font-semibold tracking-tight font-space-grotesk"><span className="font-space-grotesk">ZAVIS</span> Analytics</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 bg-accent/15 rounded-full text-xs font-medium text-accent">Live</div>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-foreground/30"></div>
                            <div className="w-2 h-2 rounded-full bg-foreground/30"></div>
                            <div className="w-2 h-2 rounded-full bg-foreground/30"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-foreground/60 pl-11">See Automation in Action</p>
                    </div>
                    
                    {/* Dashboard metrics */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                      <div className="bg-background/50 p-3 sm:p-4 rounded-xl border border-border/50 hover:border-border/80 transition-colors">
                        <p className="text-xs text-foreground/60 mb-1">Calls Automated Today</p>
                        <p className="text-xl sm:text-2xl font-bold">1,247</p>
                        <p className="text-xs text-accent mt-1 flex items-center">
                          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          +12% vs yesterday
                        </p>
                      </div>
                      
                      <div className="bg-background/50 p-3 sm:p-4 rounded-xl border border-border/50 hover:border-border/80 transition-colors">
                        <p className="text-xs text-foreground/60 mb-1">Success Rate</p>
                        <p className="text-xl sm:text-2xl font-bold">91%</p>
                        <p className="text-xs text-accent mt-1 flex items-center">
                          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 13L9 17L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Resolved without human help
                        </p>
                      </div>
                      
                      <div className="bg-background/50 p-3 sm:p-4 rounded-xl border border-border/50 hover:border-border/80 transition-colors">
                        <p className="text-xs text-foreground/60 mb-1">Average Call Duration</p>
                        <p className="text-xl sm:text-2xl font-bold">2:47</p>
                        <p className="text-xs text-accent mt-1 flex items-center">
                          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          32s faster than last week
                        </p>
                      </div>
                      
                      <div className="bg-background/50 p-3 sm:p-4 rounded-xl border border-border/50 hover:border-border/80 transition-colors">
                        <p className="text-xs text-foreground/60 mb-1">Languages Supported</p>
                        <p className="text-xl sm:text-2xl font-bold">3</p>
                        <p className="text-xs text-accent mt-1 flex items-center">
                          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Arabic, English, and more
                        </p>
                      </div>
                    </div>

                    {/* Latest conversation section */}
                    <div className="bg-background/50 p-3 sm:p-4 rounded-xl border border-border/50 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-medium text-foreground/60">Latest Interaction</p>
                        <div className="px-2 py-1 bg-accent/20 rounded-full text-xs font-medium text-accent">Verified</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <p className="text-xs leading-tight"><span className="text-foreground/60">Customer:</span> "I want to update my plan."</p>
                          <p className="text-xs leading-tight text-accent"><span className="text-foreground/60 font-space-grotesk">ZAVIS:</span> "Sure! Let's verify your details to proceed."</p>
                          <p className="text-xs mt-2 pt-2 border-t border-border/30"><span className="text-foreground/60">Status:</span> <span className="text-accent">Verified Successfully</span></p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Actions Bar */}
                    <div className="flex justify-between items-center pt-3 border-t border-border/30">
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                          <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 7a3 3 0 100 6 3 3 0 000-6z" fill="currentColor" strokeWidth="0"/>
                          </svg>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                          <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 6l-10 7L2 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                          <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8v4l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-accent/15 h-2 w-2 rounded-full animate-pulse"></div>
                        <p className="text-xs text-accent">All systems operational</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-lg backdrop-blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent-2/20 rounded-full backdrop-blur-sm"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Explainer section */}
      <div className="w-full bg-background/50 backdrop-blur-sm border-t border-border/30 py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Video Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">See ZAVIS in Action</h2>
              <p className="text-foreground/70 text-lg">Watch how our AI voice agents transform customer interactions</p>
            </div>

            {/* Video Player Container */}
            <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl border border-border/30 shadow-2xl overflow-hidden">
              {/* Video Player Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/30 bg-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            </div>
                  <div className="text-base font-semibold tracking-tight font-space-grotesk">Product Demo</div>
            </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-red-500/15 rounded-full text-xs font-medium text-red-600 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    Live Demo
          </div>
        </div>
      </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                {/* Placeholder for YouTube video - will be replaced with actual video */}
                <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                      <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm">Click to play demo video</p>
                  </div>
                </div>
                
                {/* Video overlay controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M8 5V19L19 12L8 5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div className="text-white/80 text-xs">0:00 / 3:45</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M23 7L16 12L23 17V7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 5V19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 5V19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Video Info Footer */}
              <div className="p-4 bg-white/50 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm mb-1">ZAVIS AI Voice Agent Demo</h3>
                    <p className="text-xs text-foreground/60">See how ZAVIS handles real customer interactions</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    1.2K views
            </div>
            </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}