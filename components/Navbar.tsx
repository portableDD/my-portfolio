'use client'

import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { navLinks, personalInfo } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { cn } from '@/lib/utils'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-container flex items-center justify-between h-16 px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-playfair text-2xl font-bold tracking-tight"
        >
          <span className="text-peach">{personalInfo.initials}</span>
          <span className="text-[#F0F0F0]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'px-4 py-2 text-sm rounded-md transition-colors duration-200',
                  isActive
                    ? 'text-peach font-medium'
                    : 'text-[#888888] hover:text-[#F0F0F0]'
                )}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        {/* Hire Me CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => handleNavClick('#contact')}
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 text-[#888888] hover:text-[#F0F0F0] transition-colors">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col gap-1">
              <p className="font-playfair text-xl font-bold text-peach mb-6">
                {personalInfo.initials}.
              </p>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-3 text-base text-[#888888] hover:text-peach hover:bg-surface-2 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-6"
                onClick={() => handleNavClick('#contact')}
              >
                Hire Me
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
