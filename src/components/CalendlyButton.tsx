"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { SITE } from "@/lib/content";

type CalendlyButtonProps = {
  className?: string;
  children: React.ReactNode;
  url?: string;
  /** Extra side-effect on click (e.g. close mobile menu). */
  onBeforeOpen?: () => void;
  /** Render as a link-style anchor instead of solid button styling. */
  ariaLabel?: string;
};

/**
 * Opens the Calendly inline popup centered on the screen. The popup overlay
 * receives `z-index: 100` via a global rule in globals.css so it sits above
 * the chatbot slot (z-70) and sticky navbar (z-40).
 */
export function CalendlyButton({
  className,
  children,
  url = SITE.calendlyUrl,
  onBeforeOpen,
  ariaLabel,
}: CalendlyButtonProps) {
  const [open, setOpen] = useState(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  // PopupModal needs a real DOM node for its focus trap; resolve after mount.
  useEffect(() => {
    setRoot(document.body);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={() => {
          onBeforeOpen?.();
          setOpen(true);
        }}
        className={className}
      >
        {children}
      </button>

      {root && (
        <PopupModal
          url={url}
          open={open}
          onModalClose={() => setOpen(false)}
          rootElement={root}
          pageSettings={{
            backgroundColor: "ffffff",
            primaryColor: "e01428",
            textColor: "1b1b1b",
            hideGdprBanner: true,
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
        />
      )}
    </>
  );
}
