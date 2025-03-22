export const defaultLocale = "hu" as const;
export const locales = ["hu", "en"] as const;

export type Locale = (typeof locales)[number];
