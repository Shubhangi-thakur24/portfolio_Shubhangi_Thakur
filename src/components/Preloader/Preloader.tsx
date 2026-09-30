import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const reduce = useReducedMotion() ?? false;

  useEffect(() => {
    const duration = reduce ? 200 : 1400;
    const timer = window.setTimeout(onComplete, duration);
    return () => window.clearTimeout(timer);
  }, [onComplete, reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[#f8fafc]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.55, ease: EASE }}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 45%, rgba(52,211,153,0.24), rgba(248,250,252,0) 70%)",
        }}
      />

      <motion.div
        className="relative flex flex-col items-center gap-6 px-6 text-center"
        initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="text-2xl font-extrabold tracking-[0.16em] text-slate-900 sm:text-[2rem]">
          SHUBHANGI THAKUR
        </p>

        <div className="h-px w-56 overflow-hidden rounded-full bg-slate-200/80 sm:w-72">
          <motion.div
            className="h-full w-full origin-left bg-[linear-gradient(90deg,#047857,#0d9488,#06b6d4)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduce ? 0.2 : 1.05, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>

        <motion.p
          className="font-mono text-[11px] font-semibold tracking-[0.42em] text-slate-500 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.22, ease: EASE }}
        >
          AI / ML Engineer
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
