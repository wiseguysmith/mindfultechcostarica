import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'gold' | 'outline'
  className?: string
}

/**
 * Badge Component
 * 
 * As your CTO mentor: Badges are small UI elements for labels, status, or tags.
 * Keep them simple and consistent. This component uses a variant system similar
 * to Button for consistency across the design system.
 */
export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-charcoal-100 text-charcoal-800',
    gold: 'bg-gold-200 text-charcoal-800',
    outline: 'border border-charcoal-300 text-charcoal-700',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

