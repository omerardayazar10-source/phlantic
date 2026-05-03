"use client";

import { useT } from "@/lib/i18n/LocaleProvider";
import { LOCALES, type Locale } from "@/lib/i18n/dict";

/**
 * Minimal segmented TR / EN toggle. Visually a pill with two segments; the
 * active segment is filled with the brand red (high contrast in both themes
 * thanks to CSS-variable-driven primary-container).
 */
export function LanguageSwitch() {
  const { locale, setLocale, t } = useT();
  return (
    <div
      role="group"
      aria-label={t.nav.switchLang}
      className="inline-flex h-9 items-center rounded-full border border-outline-variant bg-surface-container-lowest p-0.5 text-xs font-bold tracking-wide"
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code as Locale)}
            aria-pressed={active}
            className={`flex h-8 w-9 items-center justify-center rounded-full uppercase transition-colors ${
              active
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
