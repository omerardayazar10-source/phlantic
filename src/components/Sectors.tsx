"use client";

import { Icon } from "./Icon";
import { SECTOR_ICONS } from "@/lib/content";
import { useT } from "@/lib/i18n/LocaleProvider";

const HOVER_TONES = [
  "hover:text-primary-container",
  "hover:text-secondary",
  "hover:text-tertiary-container",
] as const;

export function Sectors() {
  const { t } = useT();
  return (
    <section
      aria-label="Sectors"
      className="border-y border-surface-variant bg-surface-container-low py-12"
    >
      <div className="container-shell text-center">
        <p className="mb-8 font-display text-label-caps uppercase tracking-[0.05em] text-on-surface-variant">
          {t.sectors.label}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
          {SECTOR_ICONS.map((s, i) => (
            <li
              key={s.key}
              className={`flex items-center gap-2 text-on-surface-variant transition-colors ${HOVER_TONES[i % HOVER_TONES.length]}`}
            >
              <Icon name={s.icon} className="text-2xl" />
              <span className="font-display text-sm font-bold tracking-tight">
                {t.sectors.items[s.key]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
