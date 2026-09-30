import { useEffect, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Boxes, Cpu, Database, Network, ScanSearch, Sparkles, Workflow } from "lucide-react";
import type { NormalizedPointer } from "@/hooks/usePointer";
import { EASE } from "@/lib/motion";

interface AIVisualizationProps {
  pointer: NormalizedPointer;
  interactive: boolean;
}

interface FloatCardProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  depth: number;
  delay: number;
  className: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  tint: string;
  interactive: boolean;
}

function FloatCard({
  x,
  y,
  depth,
  delay,
  className,
  title,
  subtitle,
  icon,
  tint,
  interactive,
}: FloatCardProps) {
  const tx = useTransform(x, (v) => v * depth);
  const ty = useTransform(y, (v) => v * depth);

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x: tx, y: ty }}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      <motion.div
        animate={interactive ? { y: [0, -9, 0] } : undefined}
        transition={{ duration: 5 + depth * 0.06, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <div className="group flex items-center gap-2.5 rounded-2xl border border-white/75 bg-white/65 px-3 py-2.5 shadow-[0_16px_38px_rgba(15,23,42,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:shadow-[0_22px_48px_rgba(15,23,42,0.16)] sm:px-3.5 sm:py-3">
          <span
            className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-white shadow-sm sm:h-8 sm:w-8"
            style={{ background: tint }}
          >
            {icon}
          </span>
          <span className="leading-tight">
            <span className="block font-mono text-[9.5px] font-bold tracking-[0.14em] text-slate-900 uppercase sm:text-[10.5px]">
              {title}
            </span>
            <span className="block text-[10px] font-medium text-slate-500 sm:text-[11px]">
              {subtitle}
            </span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface NodeProps {
  label: string;
  icon: ReactNode;
  delay: number;
}

function CoreNode({ label, icon, delay }: NodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="flex flex-col items-center gap-1.5 rounded-xl border border-white/70 bg-white/70 px-2 py-2.5 text-center shadow-[0_8px_20px_rgba(15,23,42,0.06)] backdrop-blur-md"
    >
      <span className="grid h-6 w-6 place-items-center rounded-md bg-indigo-50 text-indigo-600">
        {icon}
      </span>
      <span className="font-mono text-[9px] font-bold tracking-[0.12em] text-slate-700 uppercase sm:text-[10px]">
        {label}
      </span>
    </motion.div>
  );
}

export function AIVisualization({ pointer, interactive }: AIVisualizationProps) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 90, damping: 20, mass: 0.6 });

  useEffect(() => {
    rawX.set(interactive ? pointer.x : 0);
    rawY.set(interactive ? pointer.y : 0);
  }, [pointer.x, pointer.y, interactive, rawX, rawY]);

  const coreX = useTransform(x, (v) => v * -10);
  const coreY = useTransform(y, (v) => v * -10);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px]">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[8%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(52,211,153,0.34), rgba(34,211,238,0.16) 55%, rgba(255,255,255,0) 72%)",
        }}
      />

      {/* Orbit rings */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[6%] rounded-full border border-indigo-200/60"
        animate={interactive ? { rotate: 360 } : undefined}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ borderStyle: "dashed" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[18%] rounded-full border border-violet-200/60"
        animate={interactive ? { rotate: -360 } : undefined}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Connecting lines */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="hero-link" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {[
          "M 16 18 Q 34 32 48 46",
          "M 86 22 Q 68 34 54 46",
          "M 12 76 Q 32 64 47 54",
          "M 88 84 Q 68 68 54 54",
        ].map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#hero-link)"
            strokeWidth="0.45"
            className="animate-dash"
          />
        ))}
      </svg>

      {/* Central glass card */}
      <motion.div
        style={{ x: coreX, y: coreY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
        className="absolute top-1/2 left-1/2 w-[62%] max-w-[300px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative overflow-hidden rounded-[26px] border border-white/80 bg-white/70 p-4 shadow-[0_30px_70px_rgba(15,23,42,0.14)] backdrop-blur-2xl sm:p-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.6),transparent)]"
          />

          {/* AI core */}
          <div className="flex flex-col items-center gap-1">
            <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#059669,#0d9488,#06b6d4)] text-white shadow-[0_14px_30px_rgba(5,150,105,0.4)]">
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-indigo-400/40 animate-ring" />
              <span className="relative text-lg font-extrabold tracking-tight">AI</span>
            </div>
            <span className="mt-1 font-mono text-[9px] font-semibold tracking-[0.22em] text-slate-400 uppercase">
              Orchestration Core
            </span>
          </div>

          {/* Node grid */}
          <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-x-1 gap-y-2">
            <CoreNode label="Agent" icon={<Boxes className="h-3.5 w-3.5" />} delay={0.35} />
            <motion.span
              aria-hidden="true"
              className="text-indigo-400"
              animate={interactive ? { x: [0, 3, 0] } : undefined}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
            <CoreNode label="RAG" icon={<Database className="h-3.5 w-3.5" />} delay={0.45} />

            <span aria-hidden="true" className="text-center text-indigo-400">
              ↓
            </span>
            <span aria-hidden="true" />
            <span aria-hidden="true" className="text-center text-indigo-400">
              ↓
            </span>

            <CoreNode label="Tools" icon={<Workflow className="h-3.5 w-3.5" />} delay={0.55} />
            <motion.span
              aria-hidden="true"
              className="text-indigo-400"
              animate={interactive ? { x: [0, 3, 0] } : undefined}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              →
            </motion.span>
            <CoreNode label="LLM" icon={<Cpu className="h-3.5 w-3.5" />} delay={0.65} />
          </div>
        </div>
      </motion.div>

      {/* Floating satellite cards */}
      <FloatCard
        x={x}
        y={y}
        depth={24}
        delay={0.45}
        interactive={interactive}
        className="top-[1%] -left-[4%] sm:-left-[8%]"
        title="RAG"
        subtitle="Qdrant"
        tint="linear-gradient(135deg,#047857,#10b981)"
        icon={<Database className="h-3.5 w-3.5" />}
      />
      <FloatCard
        x={x}
        y={y}
        depth={-20}
        delay={0.55}
        interactive={interactive}
        className="top-[11%] -right-[3%] sm:-right-[7%]"
        title="LangGraph"
        subtitle="Agent Graph"
        tint="linear-gradient(135deg,#0d9488,#2dd4bf)"
        icon={<Network className="h-3.5 w-3.5" />}
      />
      <FloatCard
        x={x}
        y={y}
        depth={30}
        delay={0.65}
        interactive={interactive}
        className="bottom-[14%] -left-[5%] sm:-left-[9%]"
        title="Multi-Agent"
        subtitle="Systems"
        tint="linear-gradient(135deg,#0891b2,#22d3ee)"
        icon={<Boxes className="h-3.5 w-3.5" />}
      />
      <FloatCard
        x={x}
        y={y}
        depth={-26}
        delay={0.75}
        interactive={interactive}
        className="-bottom-[1%] -right-[2%] sm:-right-[5%]"
        title="Explainable AI"
        subtitle="SHAP / LIME"
        tint="linear-gradient(135deg,#65a30d,#a3e635)"
        icon={<ScanSearch className="h-3.5 w-3.5" />}
      />

      {/* Small sparkle accent */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[46%] -right-[6%] hidden text-violet-400 sm:block"
        animate={interactive ? { rotate: [0, 18, 0], scale: [1, 1.12, 1] } : undefined}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="h-5 w-5" />
      </motion.div>
    </div>
  );
}
