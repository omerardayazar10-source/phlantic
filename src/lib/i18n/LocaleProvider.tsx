"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  buildTranslations,
  LOCALES,
  type Locale,
  type Translations,
} from "./dict";

const STORAGE_KEY = "phlantic.locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const LocaleContext = createContext<Ctx | null>(null);

function isLocale(v: string | null | undefined): v is Locale {
  return !!v && (LOCALES as readonly string[]).includes(v);
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Default to Turkish; resolve persisted/browser preference after mount so
  // SSR + first paint stay deterministic.
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) {
        setLocaleState(stored);
        return;
      }
      const browser = navigator.language?.slice(0, 2).toLowerCase();
      if (isLocale(browser)) setLocaleState(browser);
    } catch {
      // Ignore storage / privacy-mode errors.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: buildTranslations(locale) }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useT must be used inside <LocaleProvider>");
  return ctx;
}
