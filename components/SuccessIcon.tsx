import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SuccessIconProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Success Icon Component
 * 
 * As your CTO mentor: This component provides a consistent success indicator
 * with a subtle animation. The animation is CSS-based (no heavy JS animations)
 * which keeps it performant. We use Tailwind's animation utilities with custom
 * keyframes defined in globals.css.
 */
export default function SuccessIcon({ className, size = 'md' }: SuccessIconProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <CheckCircle2
        className={cn(
          sizes[size],
          'text-gold-500 animate-checkmark'
        )}
      />
    </div>
  )
}

