import { ENGLISH } from "./en";
import { GERMAN } from "./de";

type localeMapEntry = {
    [key: string]: Locale;
}
export const LOCALE_MAP : localeMapEntry = {
    "en": ENGLISH,
    "de" : GERMAN,
};
export const DEFAULT_LOCALE = LOCALE_MAP["en"];


export function GetUserLocale(navigator : Navigator) {
    // Find available user languages and appropiate locales
    const navigatorLocales = [navigator.language, ...navigator.languages];
    const availableLocales = navigatorLocales.map((locale) => {
        return LOCALE_MAP[locale];
    }).filter((locale) => locale !== undefined);
    
    // Return first available locale or default locale    
    return availableLocales.at(0) || DEFAULT_LOCALE;
}

export interface Locale {
    locale: string;

    navbar: {
        title: string;
        description: string;
    };
}

