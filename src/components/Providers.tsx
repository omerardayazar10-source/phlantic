"use client";

import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";

/**
 * Single client boundary that wraps the tree with theme + locale context.
 * `next-themes` toggles the `.dark` class on <html>; our token CSS variables
 * react to it. `disableTransitionOnChange` avoids the brief flash that
 * happens when transitions chase color-property changes.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
