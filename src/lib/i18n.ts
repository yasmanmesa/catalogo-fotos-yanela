import type { Dictionary, Locale } from "./types";
import ru from "@/locales/ru.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

const dictionaries: Record<Locale, Dictionary> = {
  ru: ru as Dictionary,
  en: en as Dictionary,
  es: es as Dictionary,
};

export const LOCALES: Locale[] = ["ru", "en", "es"];

export const DEFAULT_LOCALE: Locale = "ru";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export const INSTAGRAM_URL = "https://www.instagram.com/yanela_her.ph/";
export const VIBER_NUMBER: string = ""; // TBD — añadir número de Yanela
export const VIBER_URL = VIBER_NUMBER
  ? `viber://chat?number=${VIBER_NUMBER.replace(/\D/g, "")}`
  : "#contacto";
