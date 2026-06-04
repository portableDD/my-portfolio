'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaBehance, FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { ArrowDown, Eye, MapPin } from 'lucide-react'
import { IconType } from 'react-icons'
import { Button } from '@/components/ui/button'
import { personalInfo, socialLinks } from '@/lib/data'
import { useTypewriter } from '@/hooks/use-typewriter'
import { ease } from '@/lib/animations'
import dynamic from 'next/dynamic'

const CVModal = dynamic(() => import('@/components/CVModal'), { ssr: false })

const iconMap: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Behance: FaBehance,
  Discord: FaDiscord,
  WhatsApp: FaWhatsapp,
}

const cell = 'rounded-2xl border border-border bg-surface overflow-hidden'

const cellAnim = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease, delay },
  }),
}

export default function Hero() {
  const role = useTypewriter(personalInfo.roles, 80, 40, 2200)
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <>
    <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-24">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-peach/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-peach/3 rounded-full blur-3xl" />
      </div>

      <div className="max-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-3">

          {/* ── 1. Name + typewriter ── */}
          <motion.div
            className={`${cell} p-7 md:col-span-2 lg:col-span-2`}
            custom={0}
            variants={cellAnim}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-1.5 mb-5">
              <MapPin className="h-3 w-3 text-peach" />
              <span className="text-xs text-[#555] tracking-widest uppercase">Kaduna, Nigeria</span>
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#F0F0F0] leading-[1.1] mb-4">
              Emmanuel<br />
              <span className="text-peach">Dorcas</span>
            </h1>
            <div className="flex items-center h-7">
              <span className="text-sm text-[#888]">
                {role}
                <span className="inline-block w-0.5 h-4 bg-peach ml-0.5 animate-blink" />
              </span>
            </div>
          </motion.div>

          {/* ── 2. Photo — spans 2 rows on md/lg ── */}
          <motion.div
            className={`
              ${cell} relative min-h-[340px]
              md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3
              lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3
            `}
            custom={0.08}
            variants={cellAnim}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent" />
          </motion.div>

          {/* ── 3. Bio ── */}
          <motion.div
            className={`${cell} p-6 md:col-span-1 lg:col-span-1`}
            custom={0.18}
            variants={cellAnim}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[10px] text-peach uppercase tracking-widest mb-3 font-medium">About</p>
            <p className="text-sm text-[#888] leading-relaxed">{personalInfo.shortBio}</p>
          </motion.div>

          {/* ── 4. Stats ── */}
          <motion.div
            className={`${cell} p-6 md:col-span-1 lg:col-span-1`}
            custom={0.24}
            variants={cellAnim}
            initial="hidden"
            animate="visible"
          >
            <div className="h-full flex flex-col justify-center space-y-4">
              <div>
                <p className="font-playfair text-5xl font-bold text-peach leading-none">4+</p>
                <p className="text-xs text-[#555] mt-2">Years of experience</p>
              </div>
              <div className="w-full h-px bg-border" />
              <div>
                <p className="font-playfair text-5xl font-bold text-peach leading-none">15+</p>
                <p className="text-xs text-[#555] mt-2">Open source contributions</p>
              </div>
            </div>
          </motion.div>

          {/* ── 5. Social links ── */}
          <motion.div
            className={`${cell} p-6 md:col-span-2 lg:col-span-2`}
            custom={0.3}
            variants={cellAnim}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[10px] text-[#555] uppercase tracking-widest mb-4">Find me online</p>
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.label]
                if (!Icon) return null
                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-2 border border-border text-[#888] hover:text-peach hover:border-peach/30 transition-all duration-200 text-xs"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {link.label}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* ── 6. CTA ── */}
          <motion.div
            className={`
              ${cell} p-6 flex flex-col justify-between gap-5
              md:col-start-3 md:col-end-4
              lg:col-start-3 lg:col-end-5
            `}
            custom={0.36}
            variants={cellAnim}
            initial="hidden"
            animate="visible"
          >
            {/* Available indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs text-[#555]">Open to opportunities</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Button
                className="flex-1"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => setCvOpen(true)}>
                <Eye className="h-4 w-4" />
                View CV
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    </>
  )
}
