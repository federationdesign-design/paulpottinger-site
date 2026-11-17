"use client";

import { useEffect } from "react";

/** Original theme JS: the vertical divider lines take the height of the left-hand column. */
export default function HeightSync() {
  useEffect(() => {
    const sync = () => {
      const intro = document.getElementById("item1");
      const sep = document.querySelector<HTMLElement>("#row_intro #verticalSeparator:not(.testimonials)");
      if (intro && sep) sep.style.height = `${intro.offsetHeight}px`;
      const t = document.getElementById("item1-testimonials");
      const tsep = document.querySelector<HTMLElement>("#verticalSeparator.testimonials");
      if (t && tsep) tsep.style.height = `${t.offsetHeight}px`;
    };
    sync();
    window.addEventListener("resize", sync);
    window.addEventListener("load", sync);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(sync) : null;
    document.querySelectorAll("#item1, #item1-testimonials").forEach((el) => ro?.observe(el));
    return () => {
      window.removeEventListener("resize", sync);
      window.removeEventListener("load", sync);
      ro?.disconnect();
    };
  }, []);
  return null;
}
