import { useEffect, useState } from "react";

/**
 * Tracks which section is currently the most prominent in the viewport.
 */
export function useActiveSection(ids: string[], enabled = true): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let best = "";
        let bestRatio = 0;
        visibility.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best && bestRatio > 0.05) setActive(best);
      },
      {
        rootMargin: "-18% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 0.9],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
}
