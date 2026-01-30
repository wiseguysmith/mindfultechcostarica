import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
  id?: string
}

/**
 * Card Component
 * 
 * As your CTO mentor: Cards are containers for related content. Notice how
 * we make padding configurable but provide sensible defaults. The hover prop
 * adds subtle interactivity without heavy animations (as per requirements).
 */
export default function Card({ 
  children, 
  className, 
  padding = 'md',
  hover = false,
  id,
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      id={id}
      className={cn(
        'bg-cream-50 border border-charcoal-200 rounded-lg',
        paddings[padding],
        hover && 'transition-shadow duration-200 hover:shadow-lg hover:border-charcoal-300',
        className
      )}
    >
      {children}
    </div>
  )
}

