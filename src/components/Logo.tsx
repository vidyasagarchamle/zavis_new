"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  animated?: boolean;
  href?: string;
};

export default function Logo({ 
  size = "md", 
  showText = true, 
  animated = true,
  href = "/"
}: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Determine dimensions based on size
  const dimensions = {
    sm: { container: "h-7 w-7", fontSize: "text-lg" },
    md: { container: "h-9 w-9", fontSize: "text-xl" },
    lg: { container: "h-12 w-12", fontSize: "text-2xl" }
  };
  
  // Determine text size based on logo size
  const textSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  
  // Animation variants
  const logoVariants = {
    initial: { 
      scale: 1,
      rotate: 0
    },
    hover: { 
      scale: 1.05,
      rotate: 5,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };
  
  const textVariants = {
    initial: { 
      opacity: 1,
      x: 0
    },
    hover: { 
      opacity: 1,
      x: 3,
      transition: { 
        duration: 0.3
      }
    }
  };
  
  const innerCircleVariants = {
    initial: {
      scale: 1,
      opacity: 0.5
    },
    hover: {
      scale: 1.2,
      opacity: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };
  
  const innerZVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  };
  
  // Unified element to render
  const LogoElement = () => (
    <div 
      className="flex items-center gap-2"
      ref={logoRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className={`relative rounded-xl flex items-center justify-center bg-background-secondary border border-border overflow-hidden ${dimensions[size].container}`}
        variants={animated ? logoVariants : undefined}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {/* Background accent/circle */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          variants={animated ? innerCircleVariants : undefined}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          <div className="h-[80%] w-[80%] rounded-full bg-accent/10"></div>
        </motion.div>
        
        {/* Z letter */}
        <motion.span 
          className={`relative z-10 text-accent font-bold ${dimensions[size].fontSize}`}
          variants={animated ? innerZVariants : undefined}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          Z
        </motion.span>
      </motion.div>
      
      {showText && (
        <motion.span 
          className={`text-foreground font-bold font-space-grotesk ${textSize[size]}`}
          variants={animated ? textVariants : undefined}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          ZAVIS
        </motion.span>
      )}
    </div>
  );
  
  // Return as link if href is provided
  if (href) {
    return (
      <Link href={href} className="inline-flex">
        <LogoElement />
      </Link>
    );
  }
  
  // Return standalone logo if no href
  return <LogoElement />;
} 