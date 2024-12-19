import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Get your supported languages from your i18n settings
const locales = ["en", "fr"];
const defaultLocale = "en";

// Get the preferred locale from headers
function getLocale(request: NextRequest): string {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// Use negotiator to get languages from headers
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

	try {
		return matchLocale(languages, locales, defaultLocale);
	} catch (error) {
		return defaultLocale;
	}
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Check if the pathname starts with a locale
	const pathnameIsMissingLocale = locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
	);

	// Redirect if there's no locale
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);

		// e.g. incoming request is /products
		// The new URL is now /en/products
		return NextResponse.redirect(
			new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url),
		);
	}
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: [
		"/",
		"/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
	],
};
