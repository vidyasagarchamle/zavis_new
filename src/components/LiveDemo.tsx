"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

type Agent = {
  id: string;
  name: string;
  description: string;
  phoneNumberId: string;
  icon: React.ReactNode;
};

// Placeholder agents - to be replaced with real data
const agents: Agent[] = [
  {
    id: "4QrU2MrUVVzDyockHplA",
    name: "Customer Support Agent",
    description: "Handles general product inquiries and support issues",
    phoneNumberId: "6KjGf2JppywZ6xmEwoIp",
    icon: (
      <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15C21 15.5523 20.5523 16 20 16H15.5C15.5 16 15 16 15 16.5V17.5C15 17.5 15 18 15.5 18H17C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H13.5C13 20 13 19.5 13 19.5V10.5C13 10.5 13 10 13.5 10H20C20.5523 10 21 10.4477 21 11V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 10V8C13 5.79086 11.2091 4 9 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.0002 10V6.5C17.0002 6.22386 16.7763 6 16.5002 6H15.5002C15.224 6 15.0002 6.22386 15.0002 6.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.5 10V7.5C20.5 7.22386 20.2761 7 20 7H19C18.7239 7 18.5 7.22386 18.5 7.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: "P6GinvJTbVAQ7zqColtW",
    name: "Receptionist",
    description: "Handles initial inquiries and directs calls appropriately",
    phoneNumberId: "6KjGf2JppywZ6xmEwoIp",
    icon: (
      <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 16.8V13.2C20 11.9397 19.5786 10.7157 18.8284 9.71569L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6V5C16 4.44772 15.5523 4 15 4H11C10.4477 4 10 4.44772 10 5V8C10 8.55228 10.4477 9 11 9H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 13.2V16.8C4 18.5673 5.43269 20 7.2 20H16.8C18.5673 20 20 18.5673 20 16.8V13.2C20 11.4327 18.5673 10 16.8 10H7.2C5.43269 10 4 11.4327 4 13.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 15H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: "ovEsO8yQKcPMNgeb8iQB",
    name: "Due Followup Agent",
    description: "Manages payment reminders and follows up on due accounts",
    phoneNumberId: "6KjGf2JppywZ6xmEwoIp",
    icon: (
      <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0503 10.6066L7.93934 12.7175C7.35355 13.3033 7.35355 14.2532 7.93934 14.839L9.34355 16.2432C9.92934 16.829 10.8792 16.829 11.465 16.2432L13.5761 14.1322" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5761 14.1322L15.6871 12.0211C16.2729 11.4353 16.2729 10.4854 15.6871 9.89963L14.2829 8.49541C13.6971 7.90963 12.7472 7.90963 12.1614 8.49541L10.0503 10.6066" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 19.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.6568 6.34326L16.5962 7.40381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.6568 17.6568L16.5962 16.5962" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.34326 17.6568L7.40381 16.5962" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.34326 6.34326L7.40381 7.40381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function LiveDemo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedAgentId, setSelectedAgentId] = useState(agents[0].id)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [particles, setParticles] = useState<Array<{left: string, top: string}>>([])
  
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Generate particle positions on client-side only
  useEffect(() => {
    const newParticles = Array(10).fill(0).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }))
    setParticles(newParticles)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!name || !email || !phone) {
      setError("All fields are required")
      return
    }
    
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address")
      return
    }
    
    if (!isValidPhoneNumber(phone)) {
      setError("Please enter a valid phone number")
      return
    }

    setError("")
    setIsSubmitting(true)
    
    try {
      const selectedAgent = agents.find(agent => agent.id === selectedAgentId)
      
      if (!selectedAgent) {
        throw new Error("Selected agent not found")
      }
      
      const response = await fetch('/api/trial-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          agentId: selectedAgent.id,
          agentPhoneNumberId: selectedAgent.phoneNumberId
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }
      
      setSuccess(true)
      setName("")
      setEmail("")
      setPhone("")
    } catch (err: any) {
      setError(err.message || 'Failed to initiate call. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  const isValidPhoneNumber = (phone: string) => {
    // Basic phone validation - allow different formats
    return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone.replace(/\s/g, ''))
  }

  return (
    <section id="liveDemo" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent z-0"></div>
      
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-accent-gradient opacity-5 blur-[120px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.07, 0.05]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent-gradient opacity-5 blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particle elements - client-side only */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-accent/20"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-glass mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="animate-pulse h-2 w-2 rounded-full bg-accent"></span>
            <p className="text-sm font-medium">Try It Now</p>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience <span className="text-gradient">Live Demo</span> of Our AI Voice Agents
          </h2>
          
          <p className="text-lg md:text-xl text-[color:var(--foreground-secondary)] max-w-3xl mx-auto">
            Interact with our AI voice agents in real-time. Fill out the form, and we'll call your phone immediately to demonstrate how ZAVIS can transform your customer interactions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
          {/* Agent Cards - adjusted to span 5 columns for better alignment */}
          <motion.div 
            className="lg:col-span-5 flex flex-col space-y-4"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.6,
                  delay: 0.4
                } 
              }
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Select an AI Voice Agent</h3>
            
            <div className="space-y-3.5">
              {agents.map((agent) => (
                <div 
                  key={agent.id}
                  className={`relative p-4 rounded-xl border transition-all duration-300 hover:shadow-lg cursor-pointer ${
                    selectedAgentId === agent.id 
                      ? 'border-accent bg-accent/5' 
                      : 'border-[color:var(--glass-border)] bg-glass hover:border-accent/40'
                  }`}
                  onClick={() => setSelectedAgentId(agent.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                      {agent.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-medium mb-1">{agent.name}</h4>
                      <p className="text-sm text-[color:var(--foreground-secondary)]">{agent.description}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0">
                      <div className={`h-5 w-5 rounded-full border-2 ${
                        selectedAgentId === agent.id 
                          ? 'border-accent bg-accent/30' 
                          : 'border-[color:var(--foreground-secondary)]'
                      }`}>
                        {selectedAgentId === agent.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="h-full w-full rounded-full bg-accent"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {selectedAgentId === agent.id && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      layoutId="activeAgent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              ))}
            </div>
            
            <div className="p-5 rounded-xl border border-[color:var(--glass-border)] bg-glass mt-1.5 flex-grow">
              <h4 className="text-lg font-medium mb-3.5">How it works:</h4>
              <ol className="space-y-3 text-[color:var(--foreground-secondary)]">
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5 12L12 15.5L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.5 19.5H4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Select your preferred AI agent</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.5 4.5H12.5C13.0523 4.5 13.5 4.94772 13.5 5.5V6.5C13.5 7.05228 13.0523 7.5 12.5 7.5H11.5C10.9477 7.5 10.5 7.05228 10.5 6.5V5.5C10.5 4.94772 10.9477 4.5 11.5 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.5 12.5H12.5C13.0523 12.5 13.5 12.9477 13.5 13.5V14.5C13.5 15.0523 13.0523 15.5 12.5 15.5H11.5C10.9477 15.5 10.5 15.0523 10.5 14.5V13.5C10.5 12.9477 10.9477 12.5 11.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.5 8.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.5 19.5V5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H19.5C20.0523 4.5 20.5 4.94772 20.5 5.5V19.5C20.5 20.0523 20.0523 20.5 19.5 20.5H4.5C3.94772 20.5 3.5 20.0523 3.5 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Enter your information in the form</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.75 12.5L14.25 11.5H9.75L10.25 12.5H13.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.75 11.5L11.25 7.5H12.75L14.25 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Click "Call Me Now" to start the demo</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 4.5V6.5C14 7.05228 14.4477 7.5 15 7.5H17C17.5523 7.5 18 7.94772 18 8.5V19.5C18 20.0523 17.5523 20.5 17 20.5H7C6.44772 20.5 6 20.0523 6 19.5V8.5C6 7.94772 6.44772 7.5 7 7.5H9C9.55228 7.5 10 7.05228 10 6.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 4.5H14C14.5523 4.5 15 4.94772 15 5.5V6.5C15 7.05228 14.5523 7.5 14 7.5H10C9.44772 7.5 9 7.05228 9 6.5V5.5C9 4.94772 9.44772 4.5 10 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.5 12.5C11.5 13.0523 11.0523 13.5 10.5 13.5C9.94772 13.5 9.5 13.0523 9.5 12.5C9.5 11.9477 9.94772 11.5 10.5 11.5C11.0523 11.5 11.5 11.9477 11.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.5 16.5C14.5 17.0523 14.0523 17.5 13.5 17.5C12.9477 17.5 12.5 17.0523 12.5 16.5C12.5 15.9477 12.9477 15.5 13.5 15.5C14.0523 15.5 14.5 15.9477 14.5 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.5 16.5C11.5 17.0523 11.0523 17.5 10.5 17.5C9.94772 17.5 9.5 17.0523 9.5 16.5C9.5 15.9477 9.94772 15.5 10.5 15.5C11.0523 15.5 11.5 15.9477 11.5 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.5 12.5C14.5 13.0523 14.0523 13.5 13.5 13.5C12.9477 13.5 12.5 13.0523 12.5 12.5C12.5 11.9477 12.9477 11.5 13.5 11.5C14.0523 11.5 14.5 11.9477 14.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Answer your phone to speak with our AI</span>
                </li>
              </ol>
            </div>
          </motion.div>
          
          {/* Contact Form - adjusted to span 7 columns for better alignment */}
          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.6,
                  delay: 0.5
                } 
              }
            }}
          >
            <div className="relative h-full flex flex-col">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 blur-2xl -z-10"></div>
              
              <div className="bg-glass rounded-2xl p-6 md:p-8 border border-[color:var(--glass-border)] shadow-lg backdrop-blur-sm h-full">
                {success ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div 
                      className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, times: [0, 0.8, 1] }}
                    >
                      <svg className="w-12 h-12 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path 
                          d="M5 13L9 17L19 7" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />
                      </svg>
                    </motion.div>
                    
                    <h3 className="text-2xl font-semibold mb-3">Call Initiated!</h3>
                    <p className="text-[color:var(--foreground-secondary)] mb-8 max-w-md mx-auto">
                      We're calling your phone right now. Please answer to speak with our AI agent. The conversation will be personalized based on your information.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={() => setSuccess(false)} 
                        className="btn-secondary flex-1 max-w-xs mx-auto py-3"
                      >
                        Try Another Call
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold mb-3">Ready to experience ZAVIS?</h3>
                      <p className="text-[color:var(--foreground-secondary)]">
                        Enter your details below, and we'll call you instantly for a live demonstration.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-[color:var(--foreground-secondary)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M4 20V19C4 15.6863 6.68629 13 10 13H14C17.3137 13 20 15.6863 20 19V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full pl-11 pr-4 py-2.5 bg-background/50 border border-[color:var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-[color:var(--foreground-secondary)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full pl-11 pr-4 py-2.5 bg-background/50 border border-[color:var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-[color:var(--foreground-secondary)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.5 21.75H15.75C15.3358 21.75 15 21.4142 15 21V18.75C15 18.3358 15.3358 18 15.75 18H16.5C17.7426 18 18.75 19.0074 18.75 20.25C18.75 21.0784 18.3284 21.75 16.5 21.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M16.5 18V15.75C16.5 14.9216 15.8284 14.25 15 14.25C14.1716 14.25 13.5 14.9216 13.5 15.75V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.75 21.75H8.25C5.14873 21.75 2.25 18.8513 2.25 15.75V9.75C2.25 9.33579 2.58579 9 3 9H5.25C6.07843 9 6.75 9.67157 6.75 10.5V11.25C6.75 12.0784 7.42157 12.75 8.25 12.75H11.25C12.0784 12.75 12.75 12.0784 12.75 11.25V10.5C12.75 9.67157 13.4216 9 14.25 9H16.5C16.9142 9 17.25 9.33579 17.25 9.75V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.75 18V15.75C12.75 14.9216 12.0784 14.25 11.25 14.25C10.4216 14.25 9.75 14.9216 9.75 15.75V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.75 21.75H9C8.58579 21.75 8.25 21.4142 8.25 21V18.75C8.25 18.3358 8.58579 18 9 18H9.75C10.9926 18 12 19.0074 12 20.25C12 21.0784 11.5784 21.75 9.75 21.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.75 9V5.25C12.75 4.42157 12.0784 3.75 11.25 3.75H8.25C7.42157 3.75 6.75 4.42157 6.75 5.25V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+1 (555) 123-4567"
                            className="w-full pl-11 pr-4 py-2.5 bg-background/50 border border-[color:var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            required
                          />
                        </div>
                      </div>
                      
                      {error && (
                        <motion.div 
                          className="bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-3 rounded-lg text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                              <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              <circle cx="12" cy="16" r="1" fill="currentColor"/>
                            </svg>
                            {error}
                          </div>
                        </motion.div>
                      )}
                      
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-primary w-full py-3 px-6 mt-4 text-base font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Initiating Call...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.5 21.75H15.75C15.3358 21.75 15 21.4142 15 21V18.75C15 18.3358 15.3358 18 15.75 18H16.5C17.7426 18 18.75 19.0074 18.75 20.25C18.75 21.0784 18.3284 21.75 16.5 21.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M16.5 18V15.75C16.5 14.9216 15.8284 14.25 15 14.25C14.1716 14.25 13.5 14.9216 13.5 15.75V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.75 21.75H8.25C5.14873 21.75 2.25 18.8513 2.25 15.75V9.75C2.25 9.33579 2.58579 9 3 9H5.25C6.07843 9 6.75 9.67157 6.75 10.5V11.25C6.75 12.0784 7.42157 12.75 8.25 12.75H11.25C12.0784 12.75 12.75 12.0784 12.75 11.25V10.5C12.75 9.67157 13.4216 9 14.25 9H16.5C16.9142 9 17.25 9.33579 17.25 9.75V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.75 18V15.75C12.75 14.9216 12.0784 14.25 11.25 14.25C10.4216 14.25 9.75 14.9216 9.75 15.75V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.75 21.75H9C8.58579 21.75 8.25 21.4142 8.25 21V18.75C8.25 18.3358 8.58579 18 9 18H9.75C10.9926 18 12 19.0074 12 20.25C12 21.0784 11.5784 21.75 9.75 21.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.75 9V5.25C12.75 4.42157 12.0784 3.75 11.25 3.75H8.25C7.42157 3.75 6.75 4.42157 6.75 5.25V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Call Me Now
                          </span>
                        )}
                      </motion.button>
                      
                      <p className="text-xs text-center text-[color:var(--foreground-secondary)] mt-3">
                        By clicking "Call Me Now", you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 