import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

const getTokenFromCookies = (request: NextRequest): string | null => {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) {
    return null;
  }

  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [name, ...rest] = cookie.trim().split('=');
    if (name) {
      acc[name] = rest.join('=');
    }
    return acc;
  }, {} as Record<string, string>);

  return cookies.token || null;
};
const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/:locale/dashboard(.*)',
]);

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  const token = getTokenFromCookies(request);

  if (token) {
    return intlMiddleware(request);
  }
  if (
    request.nextUrl.pathname.includes('/sign-in')
    || request.nextUrl.pathname.includes('/sign-up')
    || isProtectedRoute(request)
  ) {
    return clerkMiddleware((auth, req) => {
      if (isProtectedRoute(req)) {
        const locale
          = req.nextUrl.pathname.match(/(\/.*)\/dashboard/)?.at(1) ?? '';

        const signInUrl = new URL(`${locale}/sign-in`, req.url);

        auth().protect({
          // `unauthenticatedUrl` is needed to avoid error: "Unable to find `next-intl` locale because the middleware didn't run on this request"
          unauthenticatedUrl: signInUrl.toString(),
        });
      }

      return intlMiddleware(req);
    })(request, event);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next|monitoring).*)', '/', '/(api|trpc)(.*)'], // Also exclude tunnelRoute used in Sentry from the matcher
};
