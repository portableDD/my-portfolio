'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import { fadeUp, viewport, ease } from '@/lib/animations'

const categoryMeta: Record<string, { index: string; description: string }> = {
  Frontend: { index: '01', description: 'Interfaces & interactions' },
  Backend:  { index: '02', description: 'APIs & data layers' },
  'Design & Mobile': { index: '03', description: 'Craft & cross-platform' },
  Tools:    { index: '04', description: 'Workflow & ecosystem' },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-container">

        {/* Heading */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="text-peach font-mono text-sm">04.</span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#F0F0F0]">
            Skills
          </h2>
          <div className="flex-1 h-px bg-border ml-2" />
        </motion.div>

        {/* Category rows */}
        <div className="divide-y divide-border">
          {Object.entries(skills).map(([category, skillList], i) => {
            const meta = categoryMeta[category]
            return (
              <motion.div
                key={category}
                className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-10 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease }}
              >
                {/* Left — category label */}
                <div className="flex-shrink-0">
                  <span className="font-mono text-[10px] text-peach/50 block mb-1">
                    {meta?.index}
                  </span>
                  <p className="text-sm font-medium text-[#F0F0F0]">{category}</p>
                  {meta?.description && (
                    <p className="text-[11px] text-[#444] mt-0.5">{meta.description}</p>
                  )}
                </div>

                {/* Right — skill pills */}
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, j) => (
                    <motion.span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-[#888] hover:text-[#F0F0F0] hover:border-peach/30 hover:bg-surface-2 transition-all duration-200 cursor-default"
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 + j * 0.03, ease }}
                      whileHover={{ y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
