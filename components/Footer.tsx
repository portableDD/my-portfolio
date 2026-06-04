import { personalInfo, socialLinks } from '@/lib/data'
import { FaGithub, FaLinkedinIn, FaBehance, FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { IconType } from 'react-icons'

const iconMap: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Behance: FaBehance,
  Discord: FaDiscord,
  WhatsApp: FaWhatsapp,
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-container section-padding !py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#555555] text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-peach font-medium">{personalInfo.shortName}</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label]
            if (!Icon) return null
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[#555555] hover:text-peach transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>

        
      </div>
    </footer>
  )
}
