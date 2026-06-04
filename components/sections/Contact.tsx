'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaBehance, FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { Mail, Phone } from 'lucide-react'
import { IconType } from 'react-icons'
import { personalInfo, socialLinks } from '@/lib/data'
import { fadeUp, staggerContainer, staggerItem, viewport, ease } from '@/lib/animations'

const socialIconMap: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Behance: FaBehance,
  Discord: FaDiscord,
  WhatsApp: FaWhatsapp,
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-container">

        {/* Heading */}
        <motion.div
          className="flex items-center gap-4 mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="text-peach font-mono text-sm">05.</span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#F0F0F0]">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-border ml-2" />
        </motion.div>

        {/* Centered statement */}
        <div className="flex flex-col items-center text-center gap-10 max-w-2xl mx-auto">

          {/* Big heading */}
          <motion.h3
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F0F0] leading-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Let&apos;s build something{' '}
            <span className="text-peach">together.</span>
          </motion.h3>

          {/* Subtext */}
          <motion.p
            className="text-[#888] text-base leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Currently open to{' '}
            <span className="text-[#F0F0F0]">full-stack</span> and{' '}
            <span className="text-[#F0F0F0]">backend</span> opportunities.
            Whether it&apos;s a project, a role, or just a conversation — my inbox is open.
          </motion.p>

          {/* Email CTA */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-peach/30 bg-peach/5 text-[#F0F0F0] hover:bg-peach hover:text-[#0D0D0D] hover:border-peach transition-all duration-300 text-sm font-medium"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-4 w-4 text-peach group-hover:text-[#0D0D0D] transition-colors" />
            Email Me
          </motion.a>

          {/* Divider */}
          <motion.div
            className="w-px h-12 bg-border"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease }}
          />

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.label]
              if (!Icon) return null
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  variants={staggerItem}
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full border border-border bg-surface flex items-center justify-center text-[#888] hover:text-peach hover:border-peach/40 transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Phone
          <motion.a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 text-sm text-[#555] hover:text-peach transition-colors"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <Phone className="h-3.5 w-3.5" />
            {personalInfo.phone}
          </motion.a> */}

        </div>
      </div>
    </section>
  )
}
