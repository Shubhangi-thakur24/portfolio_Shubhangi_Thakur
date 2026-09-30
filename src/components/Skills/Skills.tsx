import { motion } from "framer-motion";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { TiltCard } from "@/components/UI/GlassCard";
import { SKILL_GROUPS } from "@/data/skills";
import { useCoarsePointer } from "@/hooks/usePointer";
import { cardIn, stagger, VIEWPORT } from "@/lib/motion";

export function Skills() {
  const coarse = useCoarsePointer();

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title={<span id="skills-title">Technical Arsenal</span>}
          description="The stack behind agentic architectures, retrieval pipelines and interpretable models."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div key={group.id} variants={cardIn} className="min-w-0">
              <TiltCard
                disabled={coarse}
                intensity={4}
                glowColor="rgba(16,185,129,0.16)"
                className="h-full p-7"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-[0_12px_26px_rgba(5,150,105,0.28)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105`}
                  >
                    <group.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] font-extrabold text-slate-900">{group.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{group.blurb}</p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/80 bg-white/70 px-3 py-2 text-[12.5px] font-semibold text-slate-700 shadow-[0_6px_16px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-[0_12px_26px_rgba(5,150,105,0.18)]">
                        <span
                          aria-hidden="true"
                          className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${group.accent}`}
                        />
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
