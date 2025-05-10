import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { auth } from "@/auth";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore
  const locales: string[] = i18n.locales;

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const supabaseResponse = await updateSession(request);

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale && !pathname.startsWith("/admin")) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }

  if (pathname === "/admin") {
    return supabaseResponse;
  }

  if (pathname.startsWith("/admin/")) {
    const session = await auth();
    if (!session) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
