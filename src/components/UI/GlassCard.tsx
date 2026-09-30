import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  intensity?: number;
  /** Disable pointer tilt (touch / reduced motion). */
  disabled?: boolean;
  glowColor?: string;
  style?: CSSProperties;
}

/**
 * Glass surface with cursor tilt + a pointer-following gradient highlight.
 */
export function TiltCard({
  children,
  className,
  intensity = 6,
  disabled = false,
  glowColor = "rgba(16,185,129,0.18)",
  style,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 140, damping: 18, mass: 0.4 });
  const ry = useSpring(useMotionValue(0), { stiffness: 140, damping: 18, mass: 0.4 });
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const highlight = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, ${glowColor}, transparent 62%)`;

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    mx.set(px * 100);
    my.set(py * 100);
    ry.set((px - 0.5) * intensity * 2);
    rx.set(-(py - 0.5) * intensity * 2);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
    mx.set(50);
    my.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX: disabled ? 0 : rx, rotateY: disabled ? 0 : ry, transformPerspective: 1100, ...style }}
      className={cn(
        "group relative overflow-hidden rounded-3xl glass transition-[box-shadow,border-color] duration-300",
        "hover:border-white/90 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]",
        className,
      )}
    >
      {!disabled && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: highlight }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "strong" | "soft";
}

export function GlassPanel({ children, className, variant = "default" }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        variant === "default" && "glass",
        variant === "strong" && "glass-strong",
        variant === "soft" && "glass-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}
