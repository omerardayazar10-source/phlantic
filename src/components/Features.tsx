"use client";

import { Icon } from "./Icon";
import { FEATURE_ICONS } from "@/lib/content";
import { useT } from "@/lib/i18n/LocaleProvider";

export function Features() {
  const { t } = useT();
  return (
    <section id="hizmetler" className="container-shell section-y">
      <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
        <span className="eyebrow mb-4">{t.features.eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-on-background sm:text-4xl md:text-h2 md:leading-[1.15]">
          {t.features.heading}
        </h2>
        <p className="mt-4 text-base text-on-surface-variant md:text-body-lg">
          {t.features.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {FEATURE_ICONS.map((f) => {
          const accentBg =
            f.accent === "primary"
              ? "bg-primary-container/10"
              : f.accent === "tertiary"
                ? "bg-tertiary-container/15"
                : "bg-secondary/10";
          const accentText =
            f.accent === "primary"
              ? "text-primary-container"
              : f.accent === "tertiary"
                ? "text-tertiary-container"
                : "text-secondary";
          return (
            <article key={f.key} className="card flex flex-col items-start">
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded ${accentBg}`}
              >
                <Icon name={f.icon} filled className={`text-2xl ${accentText}`} />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-on-background">
                {t.features.items[f.key].title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {t.features.items[f.key].body}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
