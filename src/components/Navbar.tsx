"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, MessageSquare, Building2, BookOpen, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBorderButton } from "@/components/ui/GradientBorderButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    {
      title: "AI Voice Agents",
      href: "/solutions/voice-agents",
      description: "Smart AI voice agents for onboarding, support, and verification",
      icon: <Phone className="w-7 h-7 stroke-[1.5]" />,
      gradient: "from-blue-400/90 to-cyan-400/90"
    },
    {
      title: "CRM Platform",
      href: "/solutions/crm",
      description: "All-in-one customer conversation and CRM platform",
      icon: <MessageSquare className="w-7 h-7 stroke-[1.5]" />,
      gradient: "from-purple-400/90 to-pink-400/90"
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      href: "/industries/healthcare",
      description: "Streamline patient communication and care coordination",
      icon: <Building2 className="w-7 h-7 stroke-[1.5] text-blue-500" />,
      gradient: "from-blue-400/90 to-cyan-400/90"
    },
    {
      title: "Finance",
      href: "/industries/finance",
      description: "Enhance customer service and compliance in financial services",
      icon: <Building2 className="w-7 h-7 stroke-[1.5] text-emerald-500" />,
      gradient: "from-emerald-400/90 to-teal-400/90"
    }
  ];

  const resources = [
    {
      title: "Documentation",
      href: "/docs",
      description: "Learn how to integrate and use our platform",
      icon: <BookOpen className="w-7 h-7 stroke-[1.5] text-purple-500" />,
      gradient: "from-purple-400/90 to-pink-400/90"
    },
    {
      title: "API Reference",
      href: "/api",
      description: "Detailed API documentation and examples",
      icon: <BookOpen className="w-7 h-7 stroke-[1.5] text-indigo-500" />,
      gradient: "from-indigo-400/90 to-violet-400/90"
    }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-lg border-b border-border/30 shadow-soft" 
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent-2 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-white font-bold text-sm font-space-grotesk">Z</span>
        </div>
          <span className="text-2xl font-bold text-foreground font-space-grotesk">ZAVIS</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium bg-transparent hover:bg-accent/5">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-4">
                    <div className="grid gap-3">
                      {solutions.map((solution) => (
                        <NavigationMenuLink key={solution.href} asChild>
                          <Link
                            href={solution.href}
                            className="group flex flex-col gap-2 rounded-xl px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-border/30 hover:border-border transition-all duration-300 relative overflow-hidden hover:shadow-md"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${solution.gradient} shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}>
                                {solution.icon}
                              </div>
                              <div className="flex-1 flex items-center justify-between">
                                <div className="text-base font-semibold leading-none group-hover:text-primary transition-colors">
                                  {solution.title}
                                </div>
                                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                              </div>
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground line-clamp-2 pl-[52px]">
                              {solution.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <div className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors cursor-not-allowed flex items-center px-4 py-2">
                  Industries <Lock className="w-4 h-4 ml-1" />
                </div>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <div className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors cursor-not-allowed flex items-center px-4 py-2">
                  Resources <Lock className="w-4 h-4 ml-1" />
                </div>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <div className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors cursor-not-allowed flex items-center px-4 py-2">
                  Pricing <Lock className="w-4 h-4 ml-1" />
                </div>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#live-demo" className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors px-4 py-2">
                  Live Demo
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <GradientBorderButton
            href="https://calendly.com/zavis-support/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            Book a Call
          </GradientBorderButton>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:bg-accent/5 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
            className="md:hidden bg-white/98 backdrop-blur-md border-t border-border shadow-large"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {/* Mobile Solutions */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide px-4">
                  Solutions
                </div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.href}
                    href={solution.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-accent/5 transition-colors"
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${solution.gradient} shadow-sm`}>
                      {solution.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{solution.title}</div>
                      <div className="text-sm text-muted-foreground">{solution.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile Industries */}
              <div className="space-y-2 border-t border-border pt-4">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide px-4">
                  Industries
                </div>
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-accent/5 transition-colors"
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${industry.gradient} shadow-sm`}>
                      {industry.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{industry.title}</div>
                      <div className="text-sm text-muted-foreground">{industry.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile Resources */}
              <div className="space-y-2 border-t border-border pt-4">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide px-4">
                  Resources
                </div>
                {resources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-accent/5 transition-colors"
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${resource.gradient} shadow-sm`}>
                      {resource.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{resource.title}</div>
                      <div className="text-sm text-muted-foreground">{resource.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile Pricing */}
              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-foreground/80 transition-colors border-t border-border"
              >
                Pricing
              </Link>

              {/* Mobile CTA */}
              <div className="border-t border-border pt-4 space-y-3 px-4">
                <GradientBorderButton
              href="https://calendly.com/zavis-support/30min"
              target="_blank"
              rel="noopener noreferrer"
                  className="w-full text-sm"
            >
              Book a Call
                </GradientBorderButton>
              </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
} 