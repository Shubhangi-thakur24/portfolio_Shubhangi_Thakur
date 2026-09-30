import { motion, useReducedMotion } from "framer-motion";

interface BlobProps {
  className: string;
  colors: string;
  delay?: number;
  still?: boolean;
}

function Blob({ className, colors, delay = 0, still = false }: BlobProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[90px] ${className}`}
      style={{ background: colors }}
      animate={
        still
          ? undefined
          : {
              x: [0, 26, -18, 0],
              y: [0, -22, 16, 0],
              scale: [1, 1.07, 0.96, 1],
            }
      }
      transition={{ duration: 22, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/** Ambient page background: soft gradient blobs, faint grid and a light vignette. */
export function BackgroundFX() {
  const reduce = useReducedMotion() ?? false;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#f5f7fb_45%,#f8fafc_100%)]" />
      <div className="absolute inset-0 grid-faint opacity-60" />

      <Blob
        className="-top-40 -left-32 h-[34rem] w-[34rem] opacity-55"
        colors="radial-gradient(circle at 30% 30%, rgba(52,211,153,0.5), rgba(52,211,153,0) 70%)"
        still={reduce}
      />
      <Blob
        className="top-[12%] -right-40 h-[38rem] w-[38rem] opacity-50"
        colors="radial-gradient(circle at 60% 40%, rgba(34,211,238,0.38), rgba(34,211,238,0) 70%)"
        delay={2}
        still={reduce}
      />
      <Blob
        className="top-[48%] left-[8%] h-[32rem] w-[32rem] opacity-45"
        colors="radial-gradient(circle at 40% 60%, rgba(153,246,228,0.6), rgba(153,246,228,0) 70%)"
        delay={4}
        still={reduce}
      />
      <Blob
        className="bottom-[2%] right-[6%] h-[30rem] w-[30rem] opacity-45"
        colors="radial-gradient(circle at 50% 50%, rgba(110,231,183,0.5), rgba(110,231,183,0) 70%)"
        delay={6}
        still={reduce}
      />

      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0)_40%,rgba(248,250,252,0.7)_100%)]" />
    </div>
  );
}
