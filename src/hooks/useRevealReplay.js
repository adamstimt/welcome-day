// useRevealReplay.js
import { useEffect, useRef, useState } from "react";

/**
 * Replayable intersection-based reveal.
 * - Sets inView=true when intersecting, false when out (so animations can replay)
 * - Triggers earlier on small screens to avoid blank gap
 * - Respects prefers-reduced-motion
 * - Small exit debounce prevents flicker at section edges
 */
export default function useRevealReplay({
  threshold = 0.06,
  rootMargin = "0px 0px -25% 0px",
  mobile = { threshold: 0.02, rootMargin: "0px 0px -45% 0px" },
  exitDebounce = 140, // ms
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const exitTimer = useRef(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 640px)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            if (exitTimer.current) {
              clearTimeout(exitTimer.current);
              exitTimer.current = null;
            }
            setInView(true);
          } else {
            // debounce exit so micro scrolls don’t instantly hide
            if (!exitTimer.current) {
              exitTimer.current = setTimeout(() => {
                setInView(false);
                exitTimer.current = null;
              }, exitDebounce);
            }
          }
        }
      },
      isMobile
        ? {
            threshold: mobile.threshold ?? 0.02,
            rootMargin: mobile.rootMargin ?? "0px 0px -45% 0px",
          }
        : { threshold, rootMargin }
    );

    io.observe(el);
    return () => {
      if (exitTimer.current) clearTimeout(exitTimer.current);
      io.disconnect();
    };
  }, [
    threshold,
    rootMargin,
    mobile.threshold,
    mobile.rootMargin,
    exitDebounce,
  ]);

  return { ref, inView };
}
