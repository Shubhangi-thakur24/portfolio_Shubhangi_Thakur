import { motion } from "framer-motion";
import { Leaf, Lock, Route, Scale, ScanSearch, ShieldCheck, Stethoscope } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectVisualProps {
  variant: Project["visual"];
  animate: boolean;
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-white/80 bg-white/75 px-2 py-1 font-mono text-[9.5px] font-bold tracking-wider text-slate-600 uppercase">
      {children}
    </span>
  );
}

/** Compact, schematic artwork per project. Purely illustrative. */
export function ProjectVisual({ variant, animate }: ProjectVisualProps) {
  if (variant === "legal") {
    return (
      <div className="relative h-full min-h-[168px] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(236,253,245,0.95),rgba(240,253,250,0.7))] p-4">
        <svg
          aria-hidden="true"
          viewBox="0 0 160 90"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <g stroke="#6ee7b7" strokeWidth="0.8" fill="none" className={animate ? "animate-dash" : undefined}>
            <path d="M80 26 L36 60" />
            <path d="M80 26 L80 62" />
            <path d="M80 26 L124 60" />
            <path d="M36 60 L80 62" />
            <path d="M80 62 L124 60" />
          </g>
          {[
            [80, 26],
            [36, 60],
            [80, 62],
            [124, 60],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.4" fill="#10b981" opacity="0.75" />
          ))}
        </svg>

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(135deg,#047857,#0d9488)] text-white shadow-md">
              <Scale className="h-4 w-4" />
            </span>
            <Chip>Agent Graph</Chip>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Chip>Classify</Chip>
            <Chip>Retrieve</Chip>
            <Chip>Reason</Chip>
            <Chip>Explain</Chip>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "skill") {
    const left = ["Resume", "Experience", "Projects"];
    const right = ["Required", "Gap", "Roadmap"];
    return (
      <div className="relative h-full min-h-[168px] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(240,253,250,0.95),rgba(236,254,255,0.7))] p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(135deg,#0d9488,#0891b2)] text-white shadow-md">
            <Route className="h-4 w-4" />
          </span>
          <Chip>Resume → Skill Map</Chip>
        </div>

        <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="space-y-1.5">
            {left.map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-lg border border-white/80 bg-white/80 px-2 py-1.5 text-[10px] font-bold text-slate-600"
              >
                {l}
              </motion.div>
            ))}
          </div>

          <svg aria-hidden="true" viewBox="0 0 40 70" className="pointer-events-none h-[70px] w-10">
            <g stroke="#5eead4" strokeWidth="1" fill="none" className={animate ? "animate-dash" : undefined}>
              <path d="M0 10 C 20 10, 20 35, 40 35" />
              <path d="M0 35 C 20 35, 20 10, 40 10" />
              <path d="M0 60 C 20 60, 20 60, 40 60" />
            </g>
          </svg>

          <div className="space-y-1.5">
            {right.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="rounded-lg border border-indigo-100 bg-indigo-50/80 px-2 py-1.5 text-[10px] font-bold text-indigo-700"
              >
                {r}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "leaf") {
    return (
      <div className="relative h-full min-h-[168px] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(236,253,245,0.95),rgba(240,253,250,0.7))] p-4">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(135deg,#10b981,#14b8a6)] text-white shadow-md">
            <Leaf className="h-4 w-4" />
          </span>
          <Chip>Leaf Imagery</Chip>
        </div>

        <div className="relative mt-4 grid place-items-center">
          <div className="relative grid h-[92px] w-[92px] place-items-center rounded-2xl border-2 border-dashed border-emerald-300/80">
            <Leaf className="h-9 w-9 text-emerald-500" strokeWidth={1.6} />
            {animate && (
              <motion.span
                aria-hidden="true"
                className="absolute inset-x-1 h-[2px] rounded-full bg-emerald-400/80"
                animate={{ top: ["8%", "88%", "8%"] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "workbench") {
    const roles = [
      { role: "SuperAdmin", perms: "Read • Write • Delete", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
      { role: "SecurityLead", perms: "Audit • Policy • Revoke", color: "text-teal-700 bg-teal-50 border-teal-200" },
      { role: "Developer", perms: "Scoped Resource API", color: "text-blue-700 bg-blue-50 border-blue-200" },
    ];
    return (
      <div className="relative h-full min-h-[168px] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(239,246,255,0.95),rgba(236,253,245,0.7))] p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(135deg,#2563eb,#0d9488)] text-white shadow-md">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <Chip>RBAC Matrix</Chip>
          </div>
          <span className="flex items-center gap-1 font-mono text-[9px] font-semibold text-slate-500">
            <Lock className="h-3 w-3 text-emerald-600" />
            Enforced
          </span>
        </div>

        <div className="space-y-1.5">
          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="flex items-center justify-between rounded-lg border border-white/90 bg-white/80 px-2.5 py-1.5 shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
            >
              <span className="font-mono text-[10.5px] font-bold text-slate-700">{r.role}</span>
              <span className={`rounded-md border px-2 py-0.5 font-mono text-[9px] font-semibold ${r.color}`}>
                {r.perms}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const bars = [78, 58, 44, 30, 18];
  return (
    <div className="relative h-full min-h-[168px] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(236,254,255,0.95),rgba(240,253,244,0.7))] p-4">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(135deg,#0891b2,#059669)] text-white shadow-md">
          <Stethoscope className="h-4 w-4" />
        </span>
        <Chip>Schematic</Chip>
      </div>

      <div className="mt-4 space-y-1.5">
        {bars.map((w, i) => (
          <div key={w} className="flex items-center gap-2">
            <span className="w-8 shrink-0 font-mono text-[9px] font-semibold text-slate-400">
              f{i + 1}
            </span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/80">
              <motion.div
                className="h-full rounded-full bg-[linear-gradient(90deg,#0891b2,#059669)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        <ScanSearch className="h-3.5 w-3.5 text-teal-500" />
        <span className="font-mono text-[9.5px] font-bold tracking-wider text-slate-500 uppercase">
          Feature attribution
        </span>
      </div>
    </div>
  );
}


