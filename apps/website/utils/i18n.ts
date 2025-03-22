import { Dictionary } from "@/app/[locale]/_dictionaries";

export const defaultLocale = "hu" as const;
export const locales = ["hu", "en"] as const;

export type Locale = (typeof locales)[number];

export function loadAndGetCorrectDictionary(
  locale: string,
  dictionaries: Record<Locale, Dictionary>
): Dictionary {
  const supportedLocales: Locale[] = ["en", "hu"];
  if (!supportedLocales.includes(locale as Locale)) {
    console.warn(`Unsupported locale: ${locale}. Falling back to 'en'.`);
    locale = "en";
  }
  return dictionaries[locale as Locale];
}
