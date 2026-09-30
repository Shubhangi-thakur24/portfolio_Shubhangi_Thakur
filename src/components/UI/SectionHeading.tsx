import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full glass-soft px-4 py-1.5 font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-600 uppercase"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 animate-ring" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </span>
        {eyebrow}
      </motion.span>

      <motion.h2
        variants={fadeUp}
        className="max-w-3xl text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p variants={fadeUp} className="max-w-2xl text-base leading-relaxed text-slate-500">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
