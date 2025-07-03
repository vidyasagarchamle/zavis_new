"use client"

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Bot, MessageSquare, Phone, Users, Zap, CheckCircle, Play, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/ui/GlobalBackground'
import { AuroraText } from '@/components/magicui/aurora-text'
import { GradientBorderButton } from '@/components/ui/GradientBorderButton'
import LiveDemo from '@/components/LiveDemo'
import { useState } from 'react'

const solutions = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "AI Voice Agents",
    description: "Replace call centers with intelligent AI voice agents for onboarding, support, and verification",
    href: "/solutions/voice-agents",
    features: ["24/7 Automated Support", "Natural Conversations", "Multi-language Support", "Advanced Analytics"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "CRM Platform",
    description: "Unify customer conversations from all channels into one powerful, collaborative inbox",
    href: "/solutions/crm",
    features: ["Omnichannel Inbox", "Team Collaboration", "Lead Automation", "Campaign Management"],
    gradient: "from-purple-500 to-pink-500"
  }
]

const stats = [
  { number: "95%", label: "Customer Satisfaction" },
  { number: "3x", label: "Faster Response Time" },
  { number: "60%", label: "Cost Reduction" },
  { number: "24/7", label: "Availability" }
]

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Setup",
    description: "Get started in minutes with our intuitive platform"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Scalable Team",
    description: "Grows with your business from startup to enterprise"
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI-Powered",
    description: "Advanced AI that learns and improves over time"
  }
]

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <main className="bg-transparent">
      <GlobalBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-28 pb-4 md:pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-2/5 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Transform Customer <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>Interactions</AuroraText> with AI
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Automate conversations, streamline support, and boost engagement with our unified AI voice agents and CRM platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
                <GradientBorderButton
                  href="https://calendly.com/zavis-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-sm px-5 py-2.5"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </GradientBorderButton>
              </div>
            </motion.div>
          </div>

          {/* Video Section */}
          <div className="container mx-auto px-4 py-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              {/* Video Thumbnail Container */}
              <div 
                className="relative bg-white/90 backdrop-blur-lg rounded-2xl border border-border/30 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 overflow-hidden group cursor-pointer"
                onClick={() => setIsVideoModalOpen(true)}
              >
                {/* Glow effect behind video */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Video Thumbnail */}
                <div className="relative aspect-video z-10 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  {/* YouTube Thumbnail */}
                  <img 
                    src="https://img.youtube.com/vi/JgDNFQ2RaLQ/maxresdefault.jpg" 
                    alt="ZAVIS Demo Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="relative z-10 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                    <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                  </div>
                  
                  {/* Video Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
                    <h3 className="font-semibold text-sm mb-1">ZAVIS</h3>
                    <p className="text-xs opacity-80">See how ZAVIS transforms customer interactions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Complete <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>Customer Engagement</AuroraText> Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the solution that fits your needs, or combine both for maximum impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full hover-lift group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${solution.gradient} text-white mb-6`}>
                      {solution.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="outline" className="w-full group" asChild>
                      <Link href={solution.href}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>ZAVIS</AuroraText>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for modern businesses that value efficiency, scalability, and exceptional customer experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="live-demo" className="pt-0 pb-16 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4">
        <LiveDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>Customer Experience</AuroraText>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using ZAVIS to automate conversations and streamline customer engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientBorderButton
                href="https://calendly.com/zavis-support/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
                <ArrowRight className="w-5 h-5" />
              </GradientBorderButton>
              <a 
                href="https://calendly.com/zavis-support/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 hover:scale-105 transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold text-primary">Free 14-day trial</span> • No credit card required • 
                <span className="font-semibold text-primary"> 24/7 support</span>
              </p>
            </div>
          </motion.div>
      </div>
      </section>

      <Footer />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsVideoModalOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="relative w-full max-w-5xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              {/* Video Player */}
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/JgDNFQ2RaLQ?si=065OIPbX2qndIL7F&autoplay=1"
                  title="ZAVIS Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
