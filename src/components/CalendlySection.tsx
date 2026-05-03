"use client";

import { useT } from "@/lib/i18n/LocaleProvider";
import { CalendlyButton } from "./CalendlyButton";
import { Icon } from "./Icon";

export function CalendlySection() {
  const { t } = useT();
  const benefits = [
    {
      text: t.contact.benefits.diagnostic,
      tone: "bg-primary-container/10 text-primary-container",
    },
    {
      text: t.contact.benefits.gain,
      tone: "bg-secondary/10 text-secondary",
    },
    {
      text: t.contact.benefits.recommendations,
      tone: "bg-tertiary-container/15 text-tertiary-container",
    },
  ];

  return (
    <section
      id="iletisim"
      className="container-shell section-y border-t border-surface-variant"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <span className="eyebrow mb-4">{t.contact.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-on-background sm:text-4xl md:text-h2 md:leading-[1.15]">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-base text-on-surface-variant md:text-body-lg">
            {t.contact.description}
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li
                key={b.text}
                className="flex items-start gap-3 text-body-md text-on-background"
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ${b.tone}`}
                >
                  <Icon name="check" className="text-base" />
                </span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-8 shadow-ambient md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-primary-container/20 via-tertiary-container/15 to-secondary/15 blur-2xl"
            />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-container/10">
                <Icon
                  name="calendar_month"
                  filled
                  className="text-3xl text-primary-container"
                />
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-on-background md:text-3xl">
                {t.contact.cardTitle}
              </h3>
              <p className="mt-3 text-body-md text-on-surface-variant">
                {t.contact.cardBody}
              </p>

              <div className="mt-8">
                <CalendlyButton className="btn-primary w-full sm:w-auto">
                  <span className="inline-flex items-center gap-2">
                    <Icon name="event_available" className="text-xl" />
                    {t.contact.cardCta}
                  </span>
                </CalendlyButton>
              </div>

              <p className="mt-4 text-sm text-on-surface-variant">
                {t.contact.cardMeta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
