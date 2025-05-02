"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Problem', href: '#problem' },
    { name: 'How It Works', href: '#howItWorks' },
    { name: 'Live Demo', href: '#liveDemo' },
    { name: 'Use Cases', href: '#useCases' },
    { name: 'Why ZAVIS', href: '#whyZavis' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-[color:var(--background)] border-b border-[color:var(--border)]' : 'py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Logo size="md" showText={true} animated={true} href="/" />
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>
        
        <div className="hidden md:block">
          <a
            href="https://calendly.com/zavis-support/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-1.5 px-4 text-xs"
          >
            Book a Call
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-[color:var(--background)] border-t border-[color:var(--border)]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigation.map((item) => (
              <MobileNavLink key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </MobileNavLink>
            ))}
            <a
              href="https://calendly.com/zavis-support/30min"
              className="block px-4 py-2 hover:bg-accent-transparent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Special case for home
      if (href === '/') {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect();
          setIsActive(rect.top <= 100 && rect.bottom >= 100);
        }
        return;
      }
      
      // For other sections, remove the # from href to get the ID
      const sectionId = href.replace('#', '');
      const section = document.getElementById(sectionId);
      
      if (section) {
        const rect = section.getBoundingClientRect();
        // Consider a section active if it's close to the top of the viewport
        setIsActive(rect.top <= 150 && rect.bottom >= 50);
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg text-sm font-medium relative transition-colors ${
        isActive ? 'text-foreground' : 'text-[color:var(--foreground-secondary)] hover:text-foreground'
      }`}
      onClick={(e) => {
        if (href !== '/') {
          e.preventDefault();
          const sectionId = href.replace('#', '');
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[color:var(--accent-1)]"
          layoutId="navIndicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 block text-base font-medium hover:bg-[color:var(--glass-bg)] rounded-lg"
      onClick={(e) => {
        if (href !== '/') {
          e.preventDefault();
          const sectionId = href.replace('#', '');
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
        onClick();
      }}
    >
      {children}
    </Link>
  );
} 