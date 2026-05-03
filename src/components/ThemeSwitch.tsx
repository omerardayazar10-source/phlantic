"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";

const ORDER = ["light", "dark", "system"] as const;
type Mode = (typeof ORDER)[number];

const ICON: Record<Mode, typeof Sun> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

/**
 * Cycles light → dark → system on click. Renders a placeholder until mount
 * to avoid hydration mismatch with `next-themes` (which can only resolve the
 * effective theme on the client).
 */
export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const { t } = useT();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const current: Mode = mounted && (ORDER as readonly string[]).includes(theme ?? "")
    ? (theme as Mode)
    : "system";

  const next: Mode = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];

  const labelMap: Record<Mode, string> = {
    light: t.nav.themeLight,
    dark: t.nav.themeDark,
    system: t.nav.themeSystem,
  };

  const Icon = ICON[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`${t.nav.switchTheme}: ${labelMap[current]} → ${labelMap[next]}`}
      title={labelMap[current]}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface-variant transition-colors hover:text-on-surface"
    >
      {/* Render fixed Sun until mounted for SSR stability, then swap. */}
      {mounted ? <Icon size={16} /> : <Sun size={16} className="opacity-60" />}
    </button>
  );
}
