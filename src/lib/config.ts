/**
 * Configuration constants for MindfulTech
 * 
 * As your CTO mentor, I'm showing you how to centralize all configuration
 * in one place. This makes the app maintainable and prevents magic strings
 * scattered throughout the codebase.
 */

export const config = {
  // Brand identity
  brand: {
    name: 'MindfulTech',
    tagline: 'Let the agent handle that.',
    site: 'mindfultech.services',
    email: 'info@mindfultech.services',
    address: 'Guanacaste, Tamarindo, Costa Rica',
  },

  // Contact information
  contact: {
    whatsapp: {
      url: 'https://wa.me/17208916563?text=Pura%20Vida%E2%80%94I%27d%20like%20a%2020-min%20setup%20for%20MindfulTech.',
      phone: '+1 720-891-6563',
    },
    calendly: 'https://calendly.com/mindfultechnology',
    email: 'info@mindfultech.services',
    facebook: 'https://facebook.com/mindfultech', // Placeholder for now
  },

  // Analytics
  analytics: {
    plausible: {
      domain: 'mindfultech.services',
    },
  },

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeDetection: true,
  },

  // Routes structure
  routes: {
    home: '/',
    lawOffices: '/law-offices',
    propertyManagers: '/property-managers',
    hotels: '/hotels',
    restaurants: '/restaurants',
    plansAndGuarantees: '/plans-and-guarantees',
    trial: '/trial',
    about: '/about',
    contact: '/contact',
    privacy: '/privacy',
    terms: '/terms',
  },

  // Social proof partners
  partners: [
    { name: 'WhatsApp Business', logo: '/partners/whatsapp.svg' },
    { name: 'DocuSign', logo: '/partners/docusign.svg' },
    { name: 'Stripe', logo: '/partners/stripe.svg' },
    { name: 'Plausible', logo: '/partners/plausible.svg' },
  ],

  // Visual assets
  assets: {
    logo: {
      mark: '/logo-mark.svg',
      favicon: '/logo-favicon.png',
    },
    qr: '/qr.png',
    og: '/og.png',
  },

  // Performance settings
  performance: {
    imageOptimization: true,
    lazyLoading: true,
    preloadCriticalAssets: true,
  },

  // Accessibility
  accessibility: {
    focusRing: 'focus:ring-2 focus:ring-coral focus:ring-offset-2',
    colorContrast: 'AA', // WCAG AA compliance
  },
} as const;

// Type safety for our configuration
export type Config = typeof config;

// Helper function to get localized routes
export const getLocalizedRoute = (route: string, locale: string = 'en'): string => {
  if (locale === 'en') return route;
  return `/${locale}${route}`;
};

// Helper function to get WhatsApp URL with custom message
export const getWhatsAppUrl = (message?: string): string => {
  const baseUrl = config.contact.whatsapp.url;
  if (!message) return baseUrl;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/17208916563?text=${encodedMessage}`;
};
