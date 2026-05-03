"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/LocaleProvider";
import { CalendlyButton } from "./CalendlyButton";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  const { t } = useT();
  return (
    <header
      id="top"
      className="container-shell relative overflow-hidden pb-16 pt-16 text-center md:pb-24 md:pt-24 lg:pb-32 lg:pt-section-padding"
    >
      {/* Brand-tinted ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[480px] max-w-3xl bg-[radial-gradient(ellipse_at_top,_rgba(var(--c-primary-container)/0.10),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 -z-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-48 -z-10 h-72 w-72 rounded-full bg-tertiary-container/10 blur-3xl"
      />

      {/* Subtle icon watermark — sits behind the headline, low contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-2 -z-10 -translate-x-1/2 opacity-[0.06] dark:opacity-[0.10] md:top-6"
      >
        <Image
          src="/phlantic-icon.png"
          alt=""
          width={237}
          height={345}
          className="h-40 w-auto sm:h-56 md:h-64 lg:h-72"
          priority={false}
        />
      </div>

      <span className="eyebrow mx-auto mb-6">{t.hero.eyebrow}</span>

      <h1 className="mx-auto mb-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-on-background sm:text-5xl md:text-6xl lg:text-h1 lg:leading-[1.05]">
        {t.hero.headline}
      </h1>

      <p className="mx-auto mb-10 max-w-2xl text-base text-on-surface-variant md:text-body-lg">
        {t.hero.description}
      </p>

      <div className="mx-auto mb-14 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
        <CalendlyButton className="btn-primary">
          {t.hero.primaryCta}
        </CalendlyButton>
        <a href="#hizmetler" className="btn-secondary">
          {t.hero.secondaryCta}
        </a>
      </div>

      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg bg-surface-container-lowest shadow-ambient-md md:rounded-xl">
        <DashboardMockup />
      </div>
    </header>
  );
}
