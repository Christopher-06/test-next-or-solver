import { createContext, useState, useEffect, useContext } from 'react';
import { GetUserLocale, DEFAULT_LOCALE, Locale } from '@/lib/internationalization';

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export function LocaleContextProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(DEFAULT_LOCALE);

    // Load user locale
    useEffect(() => {
      setCurrentLocale(GetUserLocale(window.navigator))
    }, []);

  return (
    <LocaleContext.Provider value={currentLocale}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  return useContext(LocaleContext);
}