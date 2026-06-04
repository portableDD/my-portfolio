import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emmanuel Dorcas | Full-Stack Developer & UI/UX Designer',
  description:
    'Full-stack developer and UI/UX designer specialising in React, Next.js, Node.js, and NestJS. Based in Kaduna, Nigeria. Building beautiful, scalable digital products.',
  keywords: [
    'Full-Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'UI/UX Designer',
    'React',
    'Next.js',
    'NestJS',
    'Node.js',
    'TypeScript',
    'Emmanuel Dorcas',
    'Nigeria',
    'Open Source',
  ],
  authors: [{ name: 'Emmanuel Dorcas Temitope' }],
  creator: 'Emmanuel Dorcas Temitope',
  openGraph: {
    title: 'Emmanuel Dorcas | Full-Stack Developer & UI/UX Designer',
    description:
      'Full-stack developer and UI/UX designer specialising in React, Next.js, Node.js, and NestJS. Building beautiful, scalable digital products.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Emmanuel Dorcas Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Dorcas | Full-Stack Developer & UI/UX Designer',
    description:
      'Full-stack developer and UI/UX designer specialising in React, Next.js, Node.js, and NestJS.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
