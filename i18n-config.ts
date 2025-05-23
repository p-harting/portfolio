export const i18n = {
  defaultLocale: "de",
  locales: ["en", "de"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
export type Dictionary = Record<string, Record<string, string>>;
