import type { CSSProperties } from "react";

type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
  style?: CSSProperties;
};

/**
 * Material Symbols Outlined icon. The font is loaded once in the root layout.
 * `filled` toggles the FILL variation axis.
 */
export function Icon({ name, className, filled = false, style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className ?? ""}`}
      style={{
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
        ...style,
      }}
      aria-hidden
    >
      {name}
    </span>
  );
}
