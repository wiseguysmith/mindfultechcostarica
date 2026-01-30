import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { config as appConfig } from '@/lib/config';

/**
 * Middleware for next-intl
 * 
 * As your CTO mentor, I'm showing you how to configure middleware to exclude
 * certain routes from locale handling. The /us route needs to be excluded
 * because it's not a localized route.
 */

const intlMiddleware = createMiddleware({
  locales: appConfig.i18n.locales,
  defaultLocale: appConfig.i18n.defaultLocale,
  localePrefix: 'as-needed' // Only prefix non-default locale
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude /us route from locale handling - let Next.js handle it normally
  if (pathname.startsWith('/us')) {
    return NextResponse.next();
  }
  
  // Apply next-intl middleware to all other routes
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except:
  // - api routes
  // - _next (Next.js internals)
  // - static files (images, etc.)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

