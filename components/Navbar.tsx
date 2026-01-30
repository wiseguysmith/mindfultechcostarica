'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import QuickLeadForm from './QuickLeadForm'
import { navigation, CALENDLY_URL } from '@/lib/site-data'
import { cn } from '@/lib/utils'

/**
 * Navbar Component
 * 
 * As your CTO mentor: This navbar is sticky (stays at top when scrolling)
 * and includes mobile responsiveness with a hamburger menu. Notice how we
 * use Next.js Link for client-side navigation (faster than full page reloads).
 * The QuickLeadForm is managed here since it's triggered by navbar CTAs.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quickLeadOpen, setQuickLeadOpen] = useState(false)

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-charcoal-800/20 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <nav
        className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-sm border-b border-charcoal-200"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-1.5 group">
              <span className="text-xl font-bold font-display text-charcoal-800 group-hover:text-charcoal-600 transition-colors">
                MindfulTech
              </span>
              <span className="text-xs font-medium text-charcoal-400 group-hover:text-charcoal-500 transition-colors">
                .services
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-charcoal-600 hover:text-charcoal-800 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex md:items-center md:gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuickLeadOpen(true)}
              >
                Quick Lead Form
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(CALENDLY_URL, '_blank')}
              >
                Book a Call
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-charcoal-600 hover:text-charcoal-800 transition-transform duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={cn(
                    'absolute inset-0 h-6 w-6 transition-all duration-300',
                    mobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  )}
                />
                <X
                  className={cn(
                    'absolute inset-0 h-6 w-6 transition-all duration-300',
                    mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'md:hidden border-t border-charcoal-200 bg-cream-50 overflow-hidden transition-all duration-300 ease-in-out shadow-lg',
            mobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          )}
        >
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block text-base font-medium text-charcoal-600 hover:text-charcoal-800 transition-all duration-200 hover:pl-2',
                  mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                )}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 50}ms` : '0ms',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div
              className={cn(
                'pt-4 space-y-2 border-t border-charcoal-200 transition-all duration-300',
                mobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{
                transitionDelay: mobileMenuOpen ? `${navigation.length * 50}ms` : '0ms',
              }}
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  setQuickLeadOpen(true)
                  setMobileMenuOpen(false)
                }}
              >
                Quick Lead Form
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => {
                  window.open(CALENDLY_URL, '_blank')
                  setMobileMenuOpen(false)
                }}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <QuickLeadForm isOpen={quickLeadOpen} onClose={() => setQuickLeadOpen(false)} />
    </>
  )
}

