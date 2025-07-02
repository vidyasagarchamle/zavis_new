"use client"

import { motion } from 'framer-motion'

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Enhanced background grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.15] z-0"></div>
      
      {/* Multiple gradient layers for depth */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-accent/12 via-accent/8 to-transparent opacity-80 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-accent-2/8 to-transparent opacity-60 z-0"></div>
      
      {/* Radial gradients for focal points */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent-2/8 via-accent-3/6 to-transparent blur-3xl opacity-60"></div>
      
      {/* Animated gradient orbs with enhanced visibility */}
      <motion.div 
        className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-accent/8 to-accent-2/6 blur-[80px] opacity-70"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 15,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-accent-2/6 to-accent-3/8 blur-[60px] opacity-60"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 18,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Additional floating orbs for more depth */}
      <motion.div 
        className="absolute top-2/3 left-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/6 via-accent-2/4 to-transparent blur-[100px] opacity-50"
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 25,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/6 right-1/6 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-accent-3/6 to-accent/4 blur-[70px] opacity-40"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Subtle shimmer overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ 
          x: ['-100%', '100%']
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut"
        }}
      />

      {/* Noise texture overlay with reduced opacity */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0"></div>
    </div>
  )
} 