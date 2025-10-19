/**
 * Footer Component
 * 
 * As your CTO mentor, I'm showing you how to create a comprehensive footer
 * that provides value while maintaining the luxury aesthetic. Notice the
 * mini-FAQ section and clean organization.
 */

import { getTranslations } from 'next-intl/server';
import { config } from '@/lib/config';
import CTAWhatsApp from './CTAWhatsApp';

interface FooterProps {
  locale: string;
}

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations();
  
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-heading font-semibold mb-4">
              {config.brand.name}
            </h3>
            <p className="text-white/70 mb-4">
              {config.brand.tagline}
            </p>
            <p className="text-white/70 text-sm">
              {t('about.address')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={locale === 'en' ? config.routes.lawOffices : `/${locale}${config.routes.lawOffices}`}
                  className="text-white/70 hover:text-coral transition-colors duration-240"
                >
                  {t('navigation.lawOffices')}
                </a>
              </li>
              <li>
                <a
                  href={locale === 'en' ? config.routes.propertyManagers : `/${locale}${config.routes.propertyManagers}`}
                  className="text-white/70 hover:text-coral transition-colors duration-240"
                >
                  {t('navigation.propertyManagers')}
                </a>
              </li>
              <li>
                <a
                  href={locale === 'en' ? config.routes.hotels : `/${locale}${config.routes.hotels}`}
                  className="text-white/70 hover:text-coral transition-colors duration-240"
                >
                  {t('navigation.hotels')}
                </a>
              </li>
              <li>
                <a
                  href={locale === 'en' ? config.routes.restaurants : `/${locale}${config.routes.restaurants}`}
                  className="text-white/70 hover:text-coral transition-colors duration-240"
                >
                  {t('navigation.restaurants')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <CTAWhatsApp
                label={t('cta.bookWhatsApp')}
                variant="secondary"
                size="sm"
                className="w-full justify-center"
              />
              <a
                href={`mailto:${config.contact.email}`}
                className="block text-white/70 hover:text-coral transition-colors duration-240"
              >
                {config.contact.email}
              </a>
              <a
                href={config.contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-coral transition-colors duration-240"
              >
                {t('cta.scheduleCalendly')}
              </a>
            </div>
          </div>
          
          {/* Mini FAQ */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              {t('footer.miniFAQ.title')}
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-white mb-1">
                  {t('footer.miniFAQ.items.0.question')}
                </p>
                <p className="text-white/70">
                  {t('footer.miniFAQ.items.0.answer')}
                </p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">
                  {t('footer.miniFAQ.items.1.question')}
                </p>
                <p className="text-white/70">
                  {t('footer.miniFAQ.items.1.answer')}
                </p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">
                  {t('footer.miniFAQ.items.2.question')}
                </p>
                <p className="text-white/70">
                  {t('footer.miniFAQ.items.2.answer')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href={locale === 'en' ? config.routes.privacy : `/${locale}${config.routes.privacy}`}
                className="text-white/70 hover:text-coral transition-colors duration-240 text-sm"
              >
                Privacy
              </a>
              <a
                href={locale === 'en' ? config.routes.terms : `/${locale}${config.routes.terms}`}
                className="text-white/70 hover:text-coral transition-colors duration-240 text-sm"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


