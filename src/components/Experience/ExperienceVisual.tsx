import { motion } from "framer-motion";
import { FileText, GitBranch, Search } from "lucide-react";
import { GitHubIcon } from "@/components/UI/SocialIcons";

interface VisualProps {
  animate: boolean;
}

/** Master → Worker agent architecture diagram. */
export function AgentArchitectureVisual({ animate }: VisualProps) {
  const workers = ["Literature", "Market", "Domain"];

  return (
    <div className="relative rounded-2xl border border-white/70 bg-white/55 p-5 backdrop-blur-xl">
      <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-slate-400 uppercase">
        Architecture
      </span>

      <div className="mt-4 flex flex-col items-center">
        <div className="relative rounded-xl bg-[linear-gradient(135deg,#047857,#0d9488)] px-4 py-2 text-center text-[11px] font-bold tracking-wide text-white shadow-[0_10px_24px_rgba(5,150,105,0.32)]">
          MASTER AGENT
          {animate && (
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-xl border border-indigo-300"
              animate={{ opacity: [0.7, 0, 0.7], scale: [1, 1.12, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 200 36"
          className="h-9 w-full max-w-[260px]"
          preserveAspectRatio="none"
        >
          <path
            d="M100 0 V12 M100 12 H22 V34 M100 12 H100 V34 M100 12 H178 V34"
            fill="none"
            stroke="#a7f3d0"
            strokeWidth="1.6"
            className={animate ? "animate-dash" : undefined}
          />
        </svg>

        <div className="grid w-full max-w-[280px] grid-cols-3 gap-2">
          {workers.map((worker, i) => (
            <motion.div
              key={worker}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
              className="rounded-lg border border-indigo-100 bg-indigo-50/70 px-1.5 py-2 text-center text-[9.5px] font-bold tracking-wide text-indigo-700 uppercase"
            >
              {worker}
              <span className="mt-0.5 block text-[8px] font-semibold text-indigo-400">Worker</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex w-full items-center justify-between rounded-lg border border-slate-100 bg-white/70 px-3 py-2">
          <span className="font-mono text-[9.5px] font-semibold tracking-wider text-slate-500 uppercase">
            Tool-use benchmark
          </span>
          <span className="font-mono text-[9.5px] font-semibold tracking-wider text-slate-500 uppercase">
            Failure modes
          </span>
        </div>
      </div>
    </div>
  );
}

/** Open-source contribution workflow visual. */
export function OpenSourceVisual({ animate }: VisualProps) {
  const steps = [
    { label: "Issue triage", icon: Search },
    { label: "Pull request", icon: GitBranch },
    { label: "Docs & review", icon: FileText },
  ];

  return (
    <div className="relative rounded-2xl border border-white/70 bg-white/55 p-5 backdrop-blur-xl">
      <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-slate-400 uppercase">
        Workflow
      </span>

      <div className="mt-4 flex items-center gap-3">
        <motion.span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-900 text-white shadow-[0_12px_26px_rgba(15,23,42,0.24)]"
          animate={animate ? { rotate: [0, -6, 0] } : undefined}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <GitHubIcon className="h-5 w-5" />
        </motion.span>
        <div>
          <p className="text-[13px] font-bold text-slate-900">GitHub collaboration</p>
          <p className="text-[11.5px] font-medium text-slate-500">
            Branches, reviews and maintainer feedback loops
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}
            className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/70 px-3 py-2.5"
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-slate-50 text-slate-500">
              <step.icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[12.5px] font-semibold text-slate-700">{step.label}</span>
            <span aria-hidden="true" className="ml-auto font-mono text-[10px] text-slate-300">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 h-px w-full gradient-line" aria-hidden="true" />
      <p className="mt-3 text-[11.5px] font-medium text-slate-500">
        Focused on production-grade reliability in unfamiliar codebases.
      </p>
    </div>
  );
}
