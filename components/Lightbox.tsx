"use client";

import { useEffect, useRef } from "react";

export default function Lightbox({ html, onClose, label }: { html: string; onClose: () => void; label: string }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    document.documentElement.classList.add("lb-open");
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("lb-open");
      document.removeEventListener("keydown", onKey);
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fancybox-container" role="dialog" aria-modal="true" aria-label={label}>
      <div className="fancybox-bg" />
      <div
        className="fancybox-slide"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="fancybox-content">
          <button ref={closeRef} type="button" className="fancybox-close-small" aria-label="Close" onClick={onClose}>
            ×
          </button>
          <span dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}
