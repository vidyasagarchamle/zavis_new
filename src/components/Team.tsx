"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    bio: "10+ years experience in AI and voice recognition technology.",
    image: "/placeholder-avatar.jpg"
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    bio: "Former lead engineer at Google Assistant with expertise in NLP.",
    image: "/placeholder-avatar.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    bio: "Passionate about creating intuitive user experiences for enterprise solutions.",
    image: "/placeholder-avatar.jpg"
  },
  {
    name: "Priya Patel",
    role: "VP of Customer Success",
    bio: "Dedicated to helping businesses implement AI solutions effectively.",
    image: "/placeholder-avatar.jpg"
  }
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[color:var(--foreground-secondary)] max-w-2xl mx-auto"
          >
            A passionate group of experts dedicated to revolutionizing voice-based customer interactions with AI technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-secondary rounded-xl p-6 text-center border border-border"
            >
              <div className="mb-4 relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-full bg-accent/10"></div>
                <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-[color:var(--foreground-secondary)] mb-4">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 