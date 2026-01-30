import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility: cn (class names)
 * 
 * As your CTO mentor: This utility merges Tailwind classes intelligently.
 * It combines clsx (for conditional classes) with tailwind-merge (which
 * handles conflicting Tailwind classes). This prevents style conflicts
 * when composing components.
 * 
 * Example: cn('px-4', 'px-6') → 'px-6' (last one wins)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

