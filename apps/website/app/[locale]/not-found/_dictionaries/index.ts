import { Locale } from "@/utils/i18n";

export type Dictionary = {
  message: string;
  button: string;
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: await import("./en").then((module) => module.default),
  hu: await import("./hu").then((module) => module.default),
};
