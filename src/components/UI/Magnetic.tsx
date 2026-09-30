import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  disabled?: boolean;
  className?: string;
}

/** Max displacement in px — small enough that the element never slides out
 *  from under the cursor. */
const MAX_OFFSET = 4;

const clamp = (v: number) => Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, v));

/**
 * Subtle magnetic pull toward the cursor.
 *
 * IMPORTANT: the transform is reset *instantly* (`.jump(0)`) on pointerdown.
 * If the element animates while the button is held, `pointerup` can land on a
 * different element than `pointerdown`, and the browser then fires `click` on
 * the common ancestor — which means links never navigate.
 */
export function Magnetic({
  children,
  strength = 0.16,
  disabled = false,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 20, mass: 0.35 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 20, mass: 0.35 });

  const onMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (disabled || !ref.current) return;
    // Never move while a press is in progress.
    if (event.pressure > 0 || event.buttons !== 0) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(clamp((event.clientX - (rect.left + rect.width / 2)) * strength));
    y.set(clamp((event.clientY - (rect.top + rect.height / 2)) * strength));
  };

  /** Snap to origin with no animation so the hit target is stable. */
  const snap = () => {
    x.jump(0);
    y.jump(0);
  };

  const ease = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onPointerMove={onMove}
      onPointerDown={snap}
      onPointerUp={snap}
      onPointerCancel={snap}
      onPointerLeave={ease}
      style={{ x: disabled ? 0 : x, y: disabled ? 0 : y }}
      className={className ?? "inline-flex"}
    >
      {children}
    </motion.span>
  );
}
