import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

/**
 * Button Component
 * 
 * As your CTO mentor: This is a polymorphic button component that handles
 * multiple variants and sizes. Notice how we use TypeScript to extend native
 * button props, giving us full HTML button functionality while adding our
 * custom styling. The `cn` utility (from utils) merges Tailwind classes cleanly.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2'
  
  const variants = {
    primary: 'bg-charcoal-800 text-cream-50 hover:bg-charcoal-700 active:bg-charcoal-900',
    secondary: 'bg-gold-400 text-charcoal-800 hover:bg-gold-300 active:bg-gold-500',
    outline: 'border-2 border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-cream-50',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

