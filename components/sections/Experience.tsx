'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { experiences } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { fadeUp, viewport } from '@/lib/animations'

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id)
  const itemRefs = useRef<Record<number, HTMLDivElement | null>>({})

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    experiences.forEach((exp) => {
      const el = itemRefs.current[exp.id]
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(exp.id)
        },
        // Trigger when the experience block crosses the middle band of the viewport
        { threshold: 0, rootMargin: '-35% 0px -55% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToExp = (id: number) => {
    itemRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id="experience" className="section-padding">
      <div className="max-container">
        {/* Heading */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="text-peach font-mono text-sm">02.</span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#F0F0F0]">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border ml-2" />
        </motion.div>

        <div className="flex gap-12 lg:gap-20">
          {/* Left — sticky company list, desktop only */}
          <aside className="hidden md:block w-36 lg:w-44 flex-shrink-0">
            <div className="sticky top-28">
              <div className="relative border-l border-border space-y-0.5">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => scrollToExp(exp.id)}
                    className={cn(
                      'relative block w-full text-left pl-5 py-2.5 text-sm transition-all duration-300',
                      activeId === exp.id
                        ? 'text-[#F0F0F0] font-medium'
                        : 'text-[#444444] hover:text-[#888888]'
                    )}
                  >
                    {activeId === exp.id && (
                      <motion.span
                        layoutId="sidebarIndicator"
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-peach"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {exp.tabLabel}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right — scrollable experience blocks */}
          <div className="flex-1 space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                ref={(el) => { itemRefs.current[exp.id] = el }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {/* Role + current badge */}
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-lg font-semibold text-[#F0F0F0] leading-snug">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="text-[10px] font-medium text-peach bg-peach/10 border border-peach/20 rounded-full px-2 py-0.5">
                      Current
                    </span>
                  )}
                </div>

                {/* Company + period */}
                <div className="flex flex-wrap items-center gap-2 mb-5 text-sm">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-peach/80 hover:text-peach transition-colors flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-peach/80">{exp.company}</span>
                  )}
                  <span className="text-[#444444]">·</span>
                  <span className="text-[#555555] font-mono text-xs">{exp.period}</span>
                </div>

                {/* Bullet points — simplified, max 3 */}
                <ul className="space-y-2 mb-5">
                  {exp.description.slice(0, 3).map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[#888888] leading-relaxed">
                      <span className="text-peach flex-shrink-0 mt-1.5 text-[10px]">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                {exp.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                )}

                {/* Separator — between entries but not after last */}
                {i < experiences.length - 1 && (
                  <div className="mt-20 h-px bg-border/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
