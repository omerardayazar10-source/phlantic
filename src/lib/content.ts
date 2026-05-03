/**
 * Static, locale-independent site configuration. All visible copy lives in
 * `src/lib/i18n/dict.ts` instead — keep this file lean.
 */

export const SITE = {
  brand: "Phlantic",
  founder: "Ömer Arda Yazar",
  calendlyUrl: "https://calendly.com/phlantic-info/15min",
} as const;

export const SECTOR_ICONS = [
  { key: "ecommerce", icon: "shopping_bag" },
  { key: "support", icon: "support_agent" },
  { key: "realEstate", icon: "real_estate_agent" },
  { key: "manufacturing", icon: "factory" },
  { key: "healthcare", icon: "local_hospital" },
  { key: "finance", icon: "account_balance" },
] as const;

export const FEATURE_ICONS = [
  { key: "workflow", icon: "bolt", accent: "secondary" },
  { key: "outbound", icon: "send", accent: "tertiary" },
  { key: "agents", icon: "smart_toy", accent: "primary" },
  { key: "margin", icon: "trending_up", accent: "secondary" },
] as const;

export const STAT_KEYS = [
  { key: "timeSaved" },
  { key: "autonomous" },
  { key: "manualErr" },
] as const;
