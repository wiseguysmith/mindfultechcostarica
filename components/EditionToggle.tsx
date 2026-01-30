'use client'

import { Edition } from '@/lib/site-data'
import { cn } from '@/lib/utils'

interface EditionToggleProps {
  edition: Edition
  onEditionChange: (edition: Edition) => void
  className?: string
}

/**
 * Edition Toggle Component
 * 
 * As your CTO mentor: This is a controlled component - the parent manages state.
 * This pattern makes it reusable and testable. Notice how we use TypeScript
 * to ensure only valid editions can be selected. The toggle uses semantic HTML
 * (button elements) for accessibility.
 */
export default function EditionToggle({
  edition,
  onEditionChange,
  className,
}: EditionToggleProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-lg border border-charcoal-200 bg-cream-50 p-1',
        className
      )}
      role="tablist"
      aria-label="Select edition"
    >
      <button
        onClick={() => onEditionChange('usa')}
        role="tab"
        aria-selected={edition === 'usa'}
        aria-controls="usa-edition"
        className={cn(
          'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400',
          edition === 'usa'
            ? 'bg-charcoal-800 text-cream-50'
            : 'text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-100'
        )}
      >
        USA Edition
      </button>
      <button
        onClick={() => onEditionChange('capital-rails')}
        role="tab"
        aria-selected={edition === 'capital-rails'}
        aria-controls="capital-rails-edition"
        className={cn(
          'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400',
          edition === 'capital-rails'
            ? 'bg-charcoal-800 text-cream-50'
            : 'text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-100'
        )}
      >
        Capital Rails
      </button>
    </div>
  )
}

