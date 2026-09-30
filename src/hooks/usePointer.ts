import { useEffect, useState } from "react";

/** True when the primary pointer is coarse (touch) — used to disable heavy cursor effects. */
export function useCoarsePointer(): boolean {
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return coarse;
}

export interface NormalizedPointer {
  x: number;
  y: number;
}

/**
 * Normalized (-1 → 1) pointer position relative to the viewport centre.
 * Returns {0,0} when disabled (touch devices / reduced motion).
 */
export function useViewportPointer(enabled: boolean): NormalizedPointer {
  const [pos, setPos] = useState<NormalizedPointer>({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = (event.clientY / window.innerHeight) * 2 - 1;
        setPos({ x, y });
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return pos;
}
