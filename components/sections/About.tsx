'use client'

import { motion } from 'framer-motion'
import { awards } from '@/lib/data'
import { Code2, Server, Palette, Trophy } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  viewport,
} from '@/lib/animations'

const whatIDo = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Building fast, accessible, and visually polished interfaces with React, Next.js, and Tailwind CSS.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Designing and maintaining scalable REST APIs and server-side systems with Node.js, NestJS, PostgreSQL, and MSSQL.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Crafting user-centred designs in Figma — from wireframes to high-fidelity prototypes that translate directly to code.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-container">
        {/* Heading */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="text-peach font-mono text-sm">01.</span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#F0F0F0]">
            About Me
          </h2>
          <div className="flex-1 h-px bg-border ml-2" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio — slides in from left */}
          <motion.div
            className="space-y-5"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-[#888888] leading-relaxed text-base">
              In 2020, I started teaching myself frontend development from scratch — no formal
              background, just curiosity and a lot of late nights. Within a year I had my first
              industry experience as a Frontend Developer intern at{' '}
              <span className="text-[#F0F0F0]">Shareqube</span> (2021), and along the way
              discovered a deep love for UI/UX design.
            </p>
            <p className="text-[#888888] leading-relaxed text-base">
              What began as self-taught curiosity grew steadily: design certifications, freelance
              projects, and eventually a structured training programme at{' '}
              <span className="text-[#F0F0F0]">Leadway Assurance</span> where I expanded into
              full-stack development — building backends, managing databases, developing mobile
              apps, and co-leading a team.
            </p>
            <p className="text-[#888888] leading-relaxed text-base">
              Today I work as a Backend Developer Trainee at{' '}
              <span className="text-[#F0F0F0]">Leadway Assurance</span>, volunteer as a Backend
              Developer at <span className="text-[#F0F0F0]">Trailblazer</span>, develop frontend
              products at <span className="text-[#F0F0F0]">Zerocardless (BuyRMB)</span>, and
              contribute to open-source Web3 projects via the{' '}
              <span className="text-[#F0F0F0]">Drip platform</span> — often all at once.
            </p>

            {/* Awards */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-4 w-4 text-peach" />
                <h3 className="text-sm font-medium text-[#F0F0F0] uppercase tracking-widest">
                  Awards & Certifications
                </h3>
              </div>
              <motion.div
                className="space-y-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {awards.map((award) => (
                  <motion.div
                    key={award.title}
                    variants={staggerItem}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-[#888888]">
                      {award.title} —{' '}
                      <span className="text-[#F0F0F0]">{award.org}</span>
                    </span>
                    <span className="text-xs text-peach font-mono">{award.year}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* What I Do cards — slide in from right, staggered */}
          <motion.div
            className="space-y-4"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {whatIDo.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-peach/10 border border-peach/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-peach" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#F0F0F0] mb-1">{item.title}</h3>
                        <p className="text-sm text-[#888888] leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
