"use client"

import { motion } from 'framer-motion'

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[300px] md:h-[500px] bg-gradient-to-b from-accent/10 to-transparent opacity-70 z-0"></div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-gradient opacity-5 blur-[100px]"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 15,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent-gradient opacity-5 blur-[80px] transform -translate-x-1/2 translate-y-1/3"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 18,
          ease: "easeInOut"
        }}
      />
      
      {/* Accent gradients */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-gradient opacity-3 blur-[150px]"
        animate={{ 
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 12,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent-gradient opacity-3 blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 14,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-30 z-0"></div>
    </div>
  )
} 