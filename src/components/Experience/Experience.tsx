import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { CalendarDays, CircleCheck } from "lucide-react";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { TiltCard } from "@/components/UI/GlassCard";
import { AgentArchitectureVisual, OpenSourceVisual } from "./ExperienceVisual";
import { EXPERIENCE } from "@/data/experience";
import { useCoarsePointer } from "@/hooks/usePointer";
import { cardIn, VIEWPORT } from "@/lib/motion";

export function Experience() {
  const coarse = useCoarsePointer();
  const reduce = useReducedMotion() ?? false;
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.4 });

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title={<span id="experience-title">Where I&apos;ve Built &amp; Contributed</span>}
          description="Agentic architecture design and open-source engineering."
        />

        <div ref={trackRef} className="relative mt-14">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[13px] w-px bg-slate-200/90 sm:left-[19px]"
          >
            <motion.div
              className="h-full w-full origin-top bg-[linear-gradient(180deg,#047857,#0d9488,#06b6d4)]"
              style={{ scaleY: reduce ? 1 : progress }}
            />
          </div>

          <div className="space-y-8">
            {EXPERIENCE.map((item) => (
              <motion.article
                key={item.id}
                variants={cardIn}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="relative pl-10 sm:pl-16"
              >
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute top-6 left-0 grid h-[27px] w-[27px] place-items-center rounded-full border border-white bg-white shadow-[0_6px_16px_rgba(15,23,42,0.12)] sm:h-[39px] sm:w-[39px]"
                >
                  <span className="grid h-[17px] w-[17px] place-items-center rounded-full bg-[linear-gradient(135deg,#047857,#0d9488)] font-mono text-[8px] font-bold text-white sm:h-[25px] sm:w-[25px] sm:text-[10px]">
                    {item.index}
                  </span>
                </span>

                <TiltCard
                  disabled={coarse}
                  intensity={2.5}
                  glowColor="rgba(16,185,129,0.14)"
                  className="p-6 sm:p-8"
                >
                  <div className="grid gap-7 lg:grid-cols-[1.4fr_1fr]">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 font-mono text-[10.5px] font-bold tracking-[0.12em] text-indigo-600 uppercase">
                          <CalendarDays className="h-3 w-3" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-extrabold text-slate-900 sm:text-[1.45rem]">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-gradient">{item.org}</p>

                      <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600">
                        {item.summary}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <CircleCheck
                              className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500"
                              strokeWidth={2}
                            />
                            <span className="text-[13.5px] leading-relaxed text-slate-600">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-lg border border-slate-200/80 bg-white/70 px-2.5 py-1.5 text-[11.5px] font-semibold text-slate-600 transition-colors hover:border-indigo-200 hover:text-indigo-700"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="min-w-0">
                      {item.visual === "agent" ? (
                        <AgentArchitectureVisual animate={!reduce} />
                      ) : (
                        <OpenSourceVisual animate={!reduce} />
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
