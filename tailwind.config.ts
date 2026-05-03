import type { Config } from "tailwindcss";

/**
 * Color tokens map to space-separated R G B variables defined in globals.css
 * (under :root and .dark). The `<alpha-value>` placeholder lets Tailwind keep
 * its opacity utilities (`bg-secondary/10`, etc.) working seamlessly across
 * light and dark themes.
 */
const c = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: c("background"),
        surface: c("surface"),
        "surface-container-lowest": c("surface-container-lowest"),
        "surface-container-low": c("surface-container-low"),
        "surface-container": c("surface-container"),
        "surface-container-high": c("surface-container-high"),
        "surface-container-highest": c("surface-container-highest"),
        "surface-variant": c("surface-variant"),
        "on-background": c("on-background"),
        "on-surface": c("on-surface"),
        "on-surface-variant": c("on-surface-variant"),
        outline: c("outline"),
        "outline-variant": c("outline-variant"),
        primary: c("primary"),
        "on-primary": c("on-primary"),
        "primary-container": c("primary-container"),
        "on-primary-container": c("on-primary-container"),
        secondary: c("secondary"),
        "on-secondary": c("on-secondary"),
        "secondary-container": c("secondary-container"),
        "on-secondary-container": c("on-secondary-container"),
        tertiary: c("tertiary"),
        "on-tertiary": c("on-tertiary"),
        "tertiary-container": c("tertiary-container"),
        "on-tertiary-container": c("on-tertiary-container"),
        error: c("error"),
        "on-error": c("on-error"),
        "error-container": c("error-container"),
        "on-error-container": c("on-error-container"),
        "inverse-surface": c("inverse-surface"),
        "inverse-on-surface": c("inverse-on-surface"),
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      spacing: {
        unit: "8px",
        gutter: "32px",
        "margin-mobile": "20px",
        "section-padding": "120px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "sans-serif"],
      },
      fontSize: {
        "label-caps": [
          "12px",
          { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "600" },
        ],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        h3: ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        h2: [
          "48px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h1: [
          "72px",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" },
        ],
      },
      boxShadow: {
        ambient: "0 4px 20px rgba(0,0,0,0.04)",
        "ambient-md": "0 8px 30px rgba(0,0,0,0.08)",
        "ambient-nav": "0 4px 20px rgba(0,0,0,0.04)",
        "ambient-dark": "0 4px 24px rgba(0,0,0,0.5)",
        "ambient-md-dark": "0 12px 40px rgba(0,0,0,0.6)",
      },
      zIndex: {
        nav: "40",
        modal: "60",
        chatbot: "70",
        popup: "100",
      },
    },
  },
  plugins: [],
};

export default config;
