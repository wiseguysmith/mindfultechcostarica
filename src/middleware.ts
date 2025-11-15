// Temporarily disabled next-intl middleware to fix build issues
// TODO: Re-enable once next-intl is properly configured
// import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
// import { config as appConfig } from '@/lib/config';

/**
 * Middleware - Temporarily simplified to pass through all requests
 * 
 * As your CTO mentor: We've temporarily disabled next-intl middleware
 * to isolate the build error. Once the build works, we'll re-enable it
 * with proper route exclusions.
 */

// const intlMiddleware = createMiddleware({
//   locales: appConfig.i18n.locales,
//   defaultLocale: appConfig.i18n.defaultLocale,
//   localePrefix: 'as-needed'
// });

export default function middleware(request: NextRequest) {
  // Temporarily pass through all requests
  // This allows /us and /es routes to work without next-intl processing
  return NextResponse.next();
}

export const config = {
  // Match all pathnames except:
  // - api routes
  // - _next (Next.js internals)
  // - static files (images, etc.)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

