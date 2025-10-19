/**
 * Font configuration for MindfulTech
 * 
 * As your CTO mentor, I'm showing you how to properly configure fonts
 * in Next.js 14. We use next/font/google for automatic optimization,
 * which includes font display optimization, preloading, and fallbacks.
 */

import { Inter, Space_Grotesk } from 'next/font/google';

// Inter for body text - clean, readable, and professional
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Improves loading performance
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

// Space Grotesk for headings - modern, geometric, and distinctive
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

// Export the CSS variables for use in our Tailwind config
export const fontVariables = `${inter.variable} ${spaceGrotesk.variable}`;
