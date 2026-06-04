'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink, Figma, ChevronDown } from 'lucide-react'
import { projects } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { fadeUp, viewport, ease } from '@/lib/animations'
import { cn } from '@/lib/utils'

const categoryLabel: Record<string, string> = {
  frontend: 'Frontend',
  opensource: 'Open Source',
  design: 'Design',
}

export default function Projects() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) =>
    setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="max-container">

        {/* Heading */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="text-peach font-mono text-sm">03.</span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#F0F0F0]">
            Projects
          </h2>
          <div className="flex-1 h-px bg-border ml-2" />
        </motion.div>

        {/* Project list */}
        <div>
          {projects.map((project, i) => {
            const isOpen = openId === project.id

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07, ease }}
                className="border-b border-border last:border-b-0"
                onMouseEnter={() => setOpenId(project.id)}
                onMouseLeave={() =>
                  setOpenId((prev) => (prev === project.id ? null : prev))
                }
              >
                {/* ── Row header ── */}
                <button
                  className="w-full text-left group py-6 flex items-center gap-4 sm:gap-6"
                  onClick={() => toggle(project.id)}
                >
                  {/* Number */}
                  <span className="font-mono text-xs text-peach/50 w-5 flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Project name */}
                  <span className={cn(
                    'font-playfair text-xl sm:text-2xl font-bold transition-colors duration-200 flex-shrink-0',
                    isOpen ? 'text-peach' : 'text-[#F0F0F0] group-hover:text-peach'
                  )}>
                    {project.title}
                  </span>

                  {/* Dashed spacer */}
                  <span className="hidden sm:flex flex-1 border-b border-dashed border-[#222] mx-2" />

                  {/* Category + tech tags */}
                  <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs text-[#444]">{categoryLabel[project.category]}</span>
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px]">{tech}</Badge>
                    ))}
                  </div>

                  {/* Chevron */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease }}
                    className="flex-shrink-0 ml-auto md:ml-0"
                  >
                    <ChevronDown className={cn(
                      'h-4 w-4 transition-colors duration-200',
                      isOpen ? 'text-peach' : 'text-[#444] group-hover:text-[#888]'
                    )} />
                  </motion.span>
                </button>

                {/* ── Expanded panel ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="pb-8 pl-9 sm:pl-11 flex flex-col sm:flex-row gap-6">

                        {/* Thumbnail */}
                        <div className="relative w-full sm:w-56 h-36 rounded-xl overflow-hidden flex-shrink-0 border border-border bg-surface-2">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover object-top"
                              sizes="224px"
                            />
                          ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-peach/10 via-surface-2 to-background gap-1">
                              <span className="font-playfair text-4xl font-bold text-peach/30">
                                {project.title.charAt(0)}
                              </span>
                              <span className="text-[10px] text-[#444]">{project.title}</span>
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex flex-col justify-between gap-4">
                          <div className="space-y-3">
                            {/* Mobile tags */}
                            <div className="flex items-center gap-2 flex-wrap md:hidden">
                              <span className="text-xs text-[#444]">{categoryLabel[project.category]}</span>
                              {project.techStack.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-[10px]">{tech}</Badge>
                              ))}
                            </div>
                            <p className="text-sm text-[#888] leading-relaxed max-w-lg">
                              {project.description}
                            </p>
                          </div>

                          {/* Links */}
                          <div className="flex items-center gap-5">
                            {project.links.github && (
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-[#888] hover:text-peach transition-colors">
                                <FaGithub className="h-3.5 w-3.5" /> GitHub
                              </a>
                            )}
                            {project.links.live && (
                              <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-[#888] hover:text-peach transition-colors">
                                <ExternalLink className="h-3.5 w-3.5" /> Live
                              </a>
                            )}
                            {project.links.figma && (
                              <a href={project.links.figma} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-[#888] hover:text-peach transition-colors">
                                <Figma className="h-3.5 w-3.5" /> Figma
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
