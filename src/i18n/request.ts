/**
 * i18n Request Configuration
 * 
 * As your CTO mentor, I'm showing you how to set up next-intl for bilingual routing.
 * This configuration handles locale detection and routing for our EN/ES site.
 */

import { getRequestConfig } from 'next-intl/server';
import { config } from '@/lib/config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!config.i18n.locales.includes(locale as any)) {
    // Default to English if invalid locale
    locale = config.i18n.defaultLocale;
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'America/Costa_Rica', // Costa Rica timezone
    now: new Date(),
  };
});
