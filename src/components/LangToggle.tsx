/**
 * LangToggle Component
 * 
 * As your CTO mentor, I'm showing you how to create a language toggle that
 * preserves the current route while switching languages. This is crucial for
 * user experience in bilingual sites.
 */

'use client';

import { usePathname, useRouter } from 'next/navigation';
import { config } from '@/lib/config';

interface LangToggleProps {
  currentLocale: string;
  className?: string;
}

export default function LangToggle({ currentLocale, className = '' }: LangToggleProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  const toggleLanguage = () => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    
    // Switch to the other locale
    const newLocale = currentLocale === 'en' ? 'es' : 'en';
    const newPath = newLocale === 'en' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath);
  };
  
  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center px-3 py-2 text-sm font-medium text-charcoal hover:text-coral transition-colors duration-240 ease-in-out focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 rounded-lg ${className}`}
      aria-label={`Switch to ${currentLocale === 'en' ? 'Spanish' : 'English'}`}
    >
      <svg
        className="w-4 h-4 mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      {currentLocale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
