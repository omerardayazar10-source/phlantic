"use client";

import { useT } from "@/lib/i18n/LocaleProvider";

export function Approach() {
  const { t } = useT();
  const pillars = [
    { number: "01", tone: "text-primary-container", ...t.approach.pillars.bottleneck },
    { number: "02", tone: "text-secondary", ...t.approach.pillars.lean },
  ];
  const valueTones = [
    "text-primary-container",
    "text-secondary",
    "text-tertiary-container",
  ];

  return (
    <section
      id="yaklasim"
      className="container-shell section-y border-t border-surface-variant"
    >
      <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
        <span className="eyebrow mb-4">{t.approach.eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-on-background sm:text-4xl md:text-h2 md:leading-[1.15]">
          {t.approach.heading}
        </h2>
        <p className="mt-4 text-base text-on-surface-variant md:text-body-lg">
          {t.approach.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {pillars.map((p) => (
          <article key={p.number} className="card flex flex-col">
            <span
              className={`font-display text-label-caps uppercase tracking-[0.05em] ${p.tone}`}
            >
              {p.number}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-on-background">
              {p.title}
            </h3>
            <p className="mt-4 text-body-lg text-on-surface-variant">
              {p.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-surface-variant bg-surface-variant md:mt-20 md:grid-cols-3">
        {(
          [
            { value: t.stats.timeSavedValue, label: t.stats.timeSaved },
            { value: t.stats.autonomousValue, label: t.stats.autonomous },
            { value: t.stats.manualErrValue, label: t.stats.manualErr },
          ] as const
        ).map((s, i) => (
          <div
            key={s.label}
            className="bg-surface-container-lowest p-8 text-center"
          >
            <div
              className={`font-display text-4xl font-extrabold tracking-tight md:text-5xl ${valueTones[i % 3]}`}
            >
              {s.value}
            </div>
            <div className="mt-2 text-body-md text-on-surface-variant">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
