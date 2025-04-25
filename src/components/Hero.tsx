"use client"

import { motion } from 'framer-motion'
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] lg:min-h-screen flex items-start md:items-center overflow-hidden pt-12 md:pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[300px] md:h-[500px] bg-gradient-to-b from-accent/10 to-transparent opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 py-6 md:py-12 lg:py-16 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 lg:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background-secondary">
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
              <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full border border-border">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-xs sm:text-sm">Available 24/7</p>
              </div>
              <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full border border-border">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-xs sm:text-sm">Multilingual</p>
              </div>
              <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full border border-border">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.2426 7.75736C18.5858 10.1005 18.5858 13.8995 16.2426 16.2426C13.8995 18.5858 10.1005 18.5858 7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75736C10.1005 5.41421 13.8995 5.41421 16.2426 7.75736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-xs sm:text-sm">Enterprise-Grade</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#demo" className="btn-primary">
                Get Started
              </Link>
              <Link href="#demo" className="btn-secondary flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                </svg>
                Watch Demo
              </Link>
            </div>
            
            <div className="pt-2 md:pt-4">
              <p className="text-xs font-medium text-accent">Built by 3x Founders Who&apos;ve Scaled Multiple Products Across AI and Web3.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-2 md:mt-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-square mx-auto">
              <div className="absolute inset-0 rounded-full bg-accent/5 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full bg-accent/10 animate-float"></div>
              
              {/* Dashboard mockup */}
              <div className="absolute inset-10 sm:inset-12 bg-background-secondary rounded-2xl border border-border shadow-lg overflow-hidden backdrop-blur-subtle">
                <div className="p-2 sm:p-3">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-accent/20 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1589 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="text-xs sm:text-sm font-medium">ZAVIS Analytics</div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="px-1 sm:px-1.5 py-0.5 bg-accent/10 rounded text-[8px] sm:text-[10px] font-medium">Live</div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-foreground/30"></div>
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-foreground/30"></div>
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-foreground/30"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard metrics */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <div className="bg-background/40 p-1.5 sm:p-2 rounded-lg border border-border/40">
                      <p className="text-[8px] sm:text-[10px] text-[color:var(--foreground-secondary)] mb-0.5">Total Calls Today</p>
                      <p className="text-sm sm:text-base font-bold">1,247</p>
                      <p className="text-[8px] sm:text-[10px] text-accent mt-0.5">+12% from yesterday</p>
                    </div>
                    
                    <div className="bg-background/40 p-1.5 sm:p-2 rounded-lg border border-border/40">
                      <p className="text-[8px] sm:text-[10px] text-[color:var(--foreground-secondary)] mb-0.5">Escalation Rate</p>
                      <p className="text-sm sm:text-base font-bold">3.7%</p>
                      <p className="text-[8px] sm:text-[10px] text-accent mt-0.5">-2.1% vs industry avg</p>
                    </div>
                    
                    <div className="bg-background/40 p-1.5 sm:p-2 rounded-lg border border-border/40">
                      <p className="text-[8px] sm:text-[10px] text-[color:var(--foreground-secondary)] mb-0.5">Avg Call Duration</p>
                      <p className="text-sm sm:text-base font-bold">2:47</p>
                      <p className="text-[8px] sm:text-[10px] text-accent mt-0.5">-32s from last week</p>
                    </div>
                    
                    <div className="bg-background/40 p-1.5 sm:p-2 rounded-lg border border-border/40">
                      <p className="text-[8px] sm:text-[10px] text-[color:var(--foreground-secondary)] mb-0.5">Languages Handled</p>
                      <p className="text-sm sm:text-base font-bold">16</p>
                      <div className="flex mt-0.5 gap-1">
                        <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/40"></span>
                        <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/30"></span>
                        <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/20"></span>
                        <span className="text-[8px] sm:text-[10px]">+13</span>
                      </div>
                    </div>
                  </div>

                  {/* Simplified dashboard - only show on larger screens */}
                  <div className="hidden sm:block bg-background/40 p-1.5 sm:p-2 rounded-lg border border-border/40">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[8px] sm:text-[10px] text-[color:var(--foreground-secondary)]">Latest Call</p>
                      <div className="px-1 py-0.5 bg-accent/20 rounded-full text-[7px] sm:text-[8px]">KYC</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="w-full h-1 bg-foreground/10 rounded-full"></div>
                      <div className="w-11/12 h-1 bg-foreground/10 rounded-full"></div>
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