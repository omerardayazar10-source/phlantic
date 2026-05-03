"use client";

import Image from "next/image";
import { SITE } from "@/lib/content";
import { useT } from "@/lib/i18n/LocaleProvider";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-surface-variant bg-surface-container-lowest pb-10 pt-20 md:pt-28">
      <div className="container-shell relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-body-md text-on-surface-variant">
              {t.footer.blurb}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-label-caps uppercase tracking-[0.05em] text-on-surface-variant">
              {t.footer.site}
            </h4>
            <ul className="mt-4 space-y-2 text-body-md">
              <li>
                <a
                  href="#hizmetler"
                  className="text-on-surface transition-colors hover:text-primary-container"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#cozumler"
                  className="text-on-surface transition-colors hover:text-primary-container"
                >
                  {t.nav.solutions}
                </a>
              </li>
              <li>
                <a
                  href="#yaklasim"
                  className="text-on-surface transition-colors hover:text-primary-container"
                >
                  {t.nav.approach}
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="text-on-surface transition-colors hover:text-primary-container"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-label-caps uppercase tracking-[0.05em] text-on-surface-variant">
              {t.footer.social}
            </h4>
            <ul className="mt-4 space-y-2 text-body-md">
              <li>
                <a
                  href="https://instagram.com/omerrday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface transition-colors hover:text-primary-container"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-on-surface transition-colors hover:text-primary-container"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-on-surface transition-colors hover:text-primary-container"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-label-caps uppercase tracking-[0.05em] text-on-surface-variant">
              {t.footer.legal}
            </h4>
            <ul className="mt-4 space-y-2 text-body-md">
              <li>
                <a
                  href="#"
                  className="text-on-surface transition-colors hover:text-primary-container"
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-on-surface transition-colors hover:text-primary-container"
                >
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-surface-variant pt-8 text-sm text-on-surface-variant md:flex-row md:items-center">
          <p>
            © {year} {SITE.brand}. {t.footer.rights}
          </p>
          <p>
            {t.footer.foundedBy} {SITE.founder}
          </p>
        </div>
      </div>

      {/* Hero-scale brand watermark — anchors the footer visually. The
          icon-only PNG carries the tri-color P-mark and stays color-safe in
          both themes; the wordmark is rendered as live CSS text so it
          inherits the on-background tone in dark mode. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-2 z-0 flex select-none items-end justify-center gap-3 opacity-[0.07] dark:opacity-[0.10] sm:gap-5"
      >
        <Image
          src="/phlantic-icon.png"
          alt=""
          width={237}
          height={345}
          className="h-24 w-auto sm:h-32 md:h-44 lg:h-56"
        />
        <span className="font-display text-[64px] font-extrabold leading-none tracking-[-0.04em] text-on-background sm:text-[96px] md:text-[140px] lg:text-[180px]">
          Phlantic
        </span>
      </div>
    </footer>
  );
}
