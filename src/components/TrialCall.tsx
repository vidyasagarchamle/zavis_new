"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

type Agent = {
  id: string;
  name: string;
  description: string;
  phoneNumberId: string;
};

// Placeholder agents - to be replaced with real data
const agents: Agent[] = [
  {
    id: "agent_id_1",
    name: "Customer Support Agent",
    description: "Handles general product inquiries and support issues",
    phoneNumberId: "phone_number_id_1"
  },
  {
    id: "agent_id_2",
    name: "Sales Agent",
    description: "Provides product information and helps with purchases",
    phoneNumberId: "phone_number_id_2"
  },
  {
    id: "agent_id_3",
    name: "Technical Support Agent",
    description: "Assists with technical problems and troubleshooting",
    phoneNumberId: "phone_number_id_3"
  }
];

export default function TrialCall() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedAgentId, setSelectedAgentId] = useState(agents[0].id)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

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
    <section className="section relative overflow-hidden py-16 md:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      
      {/* Animated gradient orb */}
      <motion.div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-gradient opacity-5 blur-[100px]"
        animate={{ 
          x: [0, -20, 0], 
          y: [0, -10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Try a <span className="text-gradient">Live Call</span> with Our AI Agents
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[color:var(--foreground-secondary)] max-w-2xl mx-auto"
          >
            Experience how our AI voice agents handle real conversations. Fill out the form below and receive a call immediately.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-[color:var(--glass-border)] shadow-glow">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Initiated!</h3>
                <p className="text-[color:var(--foreground-secondary)] mb-6">
                  We're calling your phone right now. Please answer to speak with our AI agent.
                </p>
                <button 
                  onClick={() => setSuccess(false)} 
                  className="btn-secondary w-full"
                >
                  Try Another Call
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="agent" className="block text-sm font-medium mb-2">
                    Select an Agent
                  </label>
                  <select
                    id="agent"
                    value={selectedAgentId}
                    onChange={(e) => setSelectedAgentId(e.target.value)}
                    className="w-full px-4 py-2 bg-background/50 border border-[color:var(--border)] rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                  >
                    {agents.map((agent) => (
                      <option key={agent.id} value={agent.id}>
                        {agent.name}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-[color:var(--foreground-secondary)]">
                    {agents.find(agent => agent.id === selectedAgentId)?.description}
                  </p>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 bg-background/50 border border-[color:var(--border)] rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-background/50 border border-[color:var(--border)] rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2 bg-background/50 border border-[color:var(--border)] rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    required
                  />
                </div>
                
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-2 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Initiating Call...
                    </span>
                  ) : (
                    'Call Me Now'
                  )}
                </button>
                
                <p className="text-xs text-center text-[color:var(--foreground-secondary)]">
                  By clicking "Call Me Now", you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 