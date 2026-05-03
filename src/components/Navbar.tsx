"use client";

import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import { CalendlyButton } from "./CalendlyButton";
import { Icon } from "./Icon";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";

export function Navbar() {
  const { t } = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: t.nav.solutions, href: "#cozumler" },
    { label: t.nav.services, href: "#hizmetler" },
    { label: t.nav.approach, href: "#yaklasim" },
    { label: t.nav.contact, href: "#iletisim" },
  ];

  return (
    <nav className="sticky top-0 z-nav w-full border-b border-surface-variant/60 bg-surface/80 shadow-ambient-nav backdrop-blur-md">
      <div className="container-shell flex h-20 items-center justify-between md:h-24">
        <div className="flex items-center gap-8 md:gap-12">
          <a href="#top" className="flex items-center" aria-label="Phlantic">
            <Logo size="lg" priority />
          </a>
          <ul className="hidden items-center gap-1 font-display text-sm font-bold tracking-tight lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded px-3 py-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitch />
          <ThemeSwitch />
          <span className="mx-1 hidden h-6 w-px bg-surface-variant lg:inline-block" />
          <CalendlyButton className="hidden px-3 py-2 text-base font-semibold text-on-surface-variant transition-colors hover:text-on-surface lg:inline-flex">
            {t.nav.bookCall}
          </CalendlyButton>
          <CalendlyButton className="btn-primary">
            {t.nav.getStarted}
          </CalendlyButton>
        </div>

        <button
          type="button"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded text-on-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="text-3xl" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-surface-variant/60 bg-surface-container-lowest`}
      >
        <div className="container-shell flex flex-col gap-1 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-3 font-display text-base font-bold text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex items-center justify-between gap-2 px-1">
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
          <CalendlyButton
            className="btn-primary mt-3 w-full"
            onBeforeOpen={() => setOpen(false)}
          >
            {t.nav.bookCall}
          </CalendlyButton>
        </div>
      </div>
    </nav>
  );
}
