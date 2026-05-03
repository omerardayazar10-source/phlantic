"use client";

import { Icon } from "./Icon";
import { useT } from "@/lib/i18n/LocaleProvider";

export function BentoGrid() {
  const { t } = useT();
  return (
    <section id="cozumler" className="container-shell section-y">
      <div className="rounded-xl bg-surface-container-low p-6 sm:p-10 md:p-14 lg:p-16">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-on-background sm:text-4xl md:text-h2 md:leading-[1.15]">
            {t.bento.heading}
          </h2>
          <p className="mt-4 text-base text-on-surface-variant md:text-body-lg">
            {t.bento.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {/* Large feature card — uses all three brand tones */}
          <article className="card group relative col-span-1 flex min-h-[320px] flex-col justify-between overflow-hidden md:col-span-2 md:min-h-[360px]">
            <div className="relative z-10 max-w-md">
              <span className="eyebrow mb-4">{t.bento.coreEyebrow}</span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-on-background md:text-3xl">
                {t.bento.coreTitle}
              </h3>
              <p className="mt-3 text-body-md text-on-surface-variant">
                {t.bento.coreBody}
              </p>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-primary-container/30 via-tertiary-container/20 to-secondary/15 blur-2xl transition-transform duration-500 group-hover:scale-110"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-6 right-6 hidden h-40 w-40 md:block"
            >
              <div className="absolute inset-0 rounded-full border-2 border-secondary/40" />
              <div className="absolute inset-3 rounded-full border-2 border-tertiary-container/60" />
              <div className="absolute inset-7 rounded-full border-2 border-primary-container/70" />
              <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container shadow-ambient-md" />
            </div>
          </article>

          {/* Small card 1 — teal accent */}
          <article className="card flex min-h-[260px] flex-col">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-secondary/10">
              <Icon name="hub" className="text-2xl text-secondary" />
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight text-on-background">
              {t.bento.n8nTitle}
            </h3>
            <p className="mt-auto text-body-md text-on-surface-variant">
              {t.bento.n8nBody}
            </p>
          </article>

          {/* Small card 2 — orange accent */}
          <article className="card flex min-h-[260px] flex-col">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-tertiary-container/15">
              <Icon name="bar_chart" className="text-2xl text-tertiary-container" />
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight text-on-background">
              {t.bento.perfTitle}
            </h3>
            <p className="mt-auto text-body-md text-on-surface-variant">
              {t.bento.perfBody}
            </p>
          </article>

          {/* Wide card — red lock accent */}
          <article className="card col-span-1 flex min-h-[180px] items-center justify-between md:col-span-2">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-bold tracking-tight text-on-background md:text-3xl">
                {t.bento.secTitle}
              </h3>
              <p className="mt-2 text-body-md text-on-surface-variant">
                {t.bento.secBody}
              </p>
            </div>
            <div className="hidden h-20 w-20 items-center justify-center rounded-full bg-primary-container/10 md:flex">
              <Icon name="lock" filled className="text-3xl text-primary-container" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
