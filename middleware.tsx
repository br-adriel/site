import { NextRequest, NextResponse } from 'next/server';

const defaultLocale = 'en-US';
let locales = ['en-US', 'pt-BR'];

type PathnameLocale = {
  pathname: string;
  locale?: never;
};
type ISOLocale = {
  pathname?: never;
  locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split('-');
    return {
      lang: localeParts[0],
      country: localeParts[1],
    };
  } else {
    const pathnameParts = pathname!.toLowerCase().split('/');
    return {
      lang: pathnameParts[1],
      country: pathnameParts[2],
    };
  }
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale });
  const currentPathnameParts = getLocalePartsFrom({ pathname });

  // Check if the default locale is in the pathname
  if (
    currentPathnameParts.lang === defaultLocaleParts.lang &&
    currentPathnameParts.country === defaultLocaleParts.country
  ) {
    // we want to REMOVE the default locale from the pathname,
    // and later use a rewrite so that Next will still match
    // the correct code file as if there was a locale in the pathname
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocaleParts.lang}/${defaultLocaleParts.country}`,
          pathname.startsWith('/') ? '/' : ''
        ),
        request.url
      )
    );
  }
}
