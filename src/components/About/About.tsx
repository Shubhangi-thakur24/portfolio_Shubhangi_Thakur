import { motion } from "framer-motion";
import { Boxes, Brain, Database, Network, ScanSearch, Sparkles, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { TiltCard } from "@/components/UI/GlassCard";
import { useCoarsePointer } from "@/hooks/usePointer";
import { cardIn, fadeUp, stagger, VIEWPORT } from "@/lib/motion";

const FOCUS = [
  { label: "Agentic AI", icon: Boxes },
  { label: "Multi-Agent Systems", icon: Network },
  { label: "Generative AI", icon: Sparkles },
  { label: "RAG", icon: Database },
  { label: "LLMs", icon: Brain },
  { label: "Explainable AI", icon: ScanSearch },
  { label: "AI Evaluation", icon: Workflow },
];

const STATS = [
  { value: "9.44 / 10", label: "CGPA", hint: "B.Tech CSE (AI & ML)" },
  { value: "AI + ML", label: "Engineering", hint: "Intelligent applications" },
  { value: "Agentic AI", label: "Specialization", hint: "Multi-agent systems" },
];

export function About() {
  const coarse = useCoarsePointer();

  return (
    <section id="about" aria-labelledby="about-title" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title={<span id="about-title">Building AI Systems with Purpose.</span>}
          description="An AI/ML engineer who designs agentic architectures, grounds them in retrieval, and keeps their decisions explainable."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <motion.div
            variants={cardIn}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="min-w-0"
          >
            <TiltCard disabled={coarse} intensity={3} className="h-full p-7 sm:p-9">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">
                Profile
              </span>

              <div className="mt-5 space-y-4 text-[0.98rem] leading-relaxed text-slate-600">
                <p>
                  I&apos;m <strong className="font-semibold text-slate-900">Shubhangi Thakur</strong>
                  , an AI/ML Engineer currently pursuing a B.Tech in Computer Science and Engineering
                  (AI &amp; ML) at Jagran Lakecity University, where I maintain a{" "}
                  <strong className="font-semibold text-slate-900">9.44 / 10.00 CGPA</strong> as a
                  Chancellor&apos;s Scholarship and Marker Cup awardee.
                </p>
                <p>
                  My work centres on <strong className="font-semibold text-slate-900">Agentic AI</strong>{" "}
                  and <strong className="font-semibold text-slate-900">Multi-Agent Systems</strong> —
                  designing Master and Worker agent architectures, orchestrating them with LangGraph,
                  and grounding their reasoning in retrieval-augmented pipelines over vector and graph
                  stores.
                </p>
                <p>
                  I care as much about how a model behaves as what it predicts. That means
                  interpretability with SHAP, LIME and Grad-CAM, model auditing, prompt testing, and
                  evaluating agent failure modes and tool use — so that intelligent systems stay
                  transparent, controllable and safe to deploy.
                </p>
                <p>
                  Alongside research presented at RAEMPS 2025 and RICCE 2024, I build intelligent
                  full-stack applications with Python, FastAPI and React, and contribute to
                  open-source codebases.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {FOCUS.map((item) => (
                  <span
                    key={item.label}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-[12.5px] font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/80 hover:text-indigo-700"
                  >
                    <item.icon className="h-3.5 w-3.5 text-indigo-500 transition-transform duration-300 group-hover:rotate-6" />
                    {item.label}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="grid content-start gap-5 sm:grid-cols-3 lg:grid-cols-1"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={cardIn}>
                <TiltCard
                  disabled={coarse}
                  intensity={7}
                  glowColor="rgba(124,58,237,0.16)"
                  className="p-6"
                >
                  <div className="text-2xl font-extrabold text-gradient sm:text-[1.7rem]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-bold text-slate-900">{stat.label}</div>
                  <div className="mt-0.5 text-xs font-medium text-slate-500">{stat.hint}</div>
                </TiltCard>
              </motion.div>
            ))}

            <motion.div variants={fadeUp}>
              <div className="rounded-3xl border border-indigo-100 bg-[linear-gradient(135deg,rgba(238,242,255,0.9),rgba(245,243,255,0.75))] p-6">
                <p className="text-sm leading-relaxed font-medium text-slate-600">
                  &ldquo;Design the agent, ground the reasoning, then prove why it decided what it
                  decided.&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
