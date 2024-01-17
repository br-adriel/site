import createMiddleware from 'next-intl/middleware';

export const availableLocales = ['en', 'pt'];
export const defaultLocale = 'en';

export default createMiddleware({
  // A list of all locales that are supported
  locales: availableLocales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: defaultLocale,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
