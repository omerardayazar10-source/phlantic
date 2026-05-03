import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Render the colored P-mark only, without the wordmark next to it. */
  iconOnly?: boolean;
  /** Display size preset. */
  size?: "sm" | "md" | "lg";
  /** Hint Next/Image to preload (use for above-the-fold logos). */
  priority?: boolean;
};

const SIZE_PX: Record<NonNullable<LogoProps["size"]>, { iconClass: string; text: string }> = {
  sm: { iconClass: "h-7", text: "text-lg" },
  md: { iconClass: "h-9", text: "text-2xl" },
  lg: { iconClass: "h-11 sm:h-12 md:h-13", text: "text-2xl sm:text-3xl md:text-[1.75rem]" },
};

/**
 * Composite logo: the tri-color P-mark image paired with a live Tailwind text
 * wordmark. Rendering the wordmark in CSS rather than baking it into the PNG
 * lets it inherit `text-on-background` and stay readable in both themes.
 */
export function Logo({
  className,
  iconOnly = false,
  size = "md",
  priority = false,
}: LogoProps) {
  const { iconClass, text } = SIZE_PX[size];

  if (iconOnly) {
    return (
      <Image
        src="/phlantic-icon.png"
        alt="Phlantic"
        width={237}
        height={345}
        priority={priority}
        className={`w-auto ${iconClass} ${className ?? ""}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/logo.png"
        alt=""
        width={237}
        height={345}
        priority={priority}
        className={`w-auto ${iconClass} dark:hidden`}
      />
      <Image
        src="/logo.png"
        alt=""
        width={237}
        height={345}
        priority={priority}
        className={`w-auto ${iconClass} hidden dark:block`}
      />
      <span
        className={`font-display font-extrabold tracking-[-0.03em] text-on-background ${text}`}
      >
        Phlantic
      </span>
    </span>
  );
}
