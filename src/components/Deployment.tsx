"use client"

import { motion } from 'framer-motion'

export default function Deployment() {
  const deploymentOptions = [
    {
      id: 1,
      title: "Cloud-Hosted SaaS",
      description: "Get up and running in minutes with our fully-managed cloud solution",
      features: [
        "No infrastructure management",
        "Automatic updates & scaling",
        "99.9% uptime SLA",
        "Enterprise-grade security"
      ],
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "On-Premises Deployment",
      description: "Deploy in your own data centers with complete control and compliance",
      features: [
        "Full data sovereignty",
        "Integrate with existing systems",
        "Custom security policies",
        "Meet regulatory requirements"
      ],
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Hybrid Solution",
      description: "The best of both worlds with flexible deployment options",
      features: [
        "Process sensitive data on-premises",
        "Scale with cloud resources",
        "Unified management",
        "Gradual migration path"
      ],
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ]

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  }

  return (
    <section id="deployment" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Flexible <span className="text-gradient">Deployment Options</span>
          </h2>
          <p className="text-[color:var(--foreground-secondary)]">
            Deploy ZAVIS in a way that works for your organization's needs, whether you need cloud-based simplicity, on-premises security, or a hybrid approach that gives you the best of both worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deploymentOptions.map((option, index) => (
            <motion.div
              key={option.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="mb-6">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{option.title}</h3>
              <p className="text-[color:var(--foreground-secondary)] mb-6">{option.description}</p>
              
              <ul className="space-y-3">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-block bg-background/30 border border-border rounded-lg px-6 py-3">
            <p className="text-[color:var(--foreground-secondary)]">Not sure which option is right for you? <a href="#" className="text-accent font-medium hover:underline">Book a consultation</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 