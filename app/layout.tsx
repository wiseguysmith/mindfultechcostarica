import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MindfulTech Services | Digital Workers & Capital Rails',
    template: '%s | MindfulTech Services',
  },
  description: 'Digital Workers (AI Agents + automation) and Capital Rails (tokenization + deal structuring for cash-flowing assets). Structure-first, tokens-second.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindfultech.services',
    siteName: 'MindfulTech Services',
    title: 'MindfulTech Services | Digital Workers & Capital Rails',
    description: 'Digital Workers (AI Agents + automation) and Capital Rails (tokenization + deal structuring for cash-flowing assets).',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

