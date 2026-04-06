"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Locale } from "@/data/translations";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "ar",
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("madian-locale") as Locale;
    if (saved && (saved === "ar" || saved === "en")) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("madian-locale", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
