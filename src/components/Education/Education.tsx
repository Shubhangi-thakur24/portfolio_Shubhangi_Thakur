import { motion, useReducedMotion } from "framer-motion";
import { Award, BookOpen, CalendarDays, GraduationCap, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { TiltCard } from "@/components/UI/GlassCard";
import { ACHIEVEMENTS, EDUCATION } from "@/data/achievements";
import { useCoarsePointer } from "@/hooks/usePointer";
import { cardIn, stagger, VIEWPORT } from "@/lib/motion";

export function Education() {
  const coarse = useCoarsePointer();
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="relative px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education &amp; Achievements"
          title={<span id="education-title">Academic Foundation</span>}
          description="Computer Science and Engineering, specialised in Artificial Intelligence and Machine Learning."
        />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-[15px] w-px bg-[linear-gradient(180deg,#047857,#0d9488,transparent)] sm:left-[19px]"
          />

          {EDUCATION.map((item) => (
            <motion.article
              key={item.id}
              variants={cardIn}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="relative pl-12 sm:pl-16"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 left-0 grid h-[31px] w-[31px] place-items-center rounded-full border border-white bg-white shadow-[0_6px_16px_rgba(15,23,42,0.12)] sm:h-[39px] sm:w-[39px]"
              >
                <span className="grid h-[21px] w-[21px] place-items-center rounded-full bg-[linear-gradient(135deg,#047857,#0d9488)] text-white sm:h-[27px] sm:w-[27px]">
                  <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </span>
              </span>

              <TiltCard disabled={coarse} intensity={3} className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                      {item.institution}
                    </h3>
                    <p className="mt-1.5 text-[0.95rem] font-semibold text-slate-600">
                      {item.degree}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 font-mono text-[10.5px] font-bold tracking-[0.12em] text-indigo-600 uppercase">
                      <CalendarDays className="h-3 w-3" />
                      {item.period}
                    </span>
                  </div>

                  <div className="rounded-2xl border border-indigo-100 bg-[linear-gradient(135deg,rgba(238,242,255,0.95),rgba(245,243,255,0.75))] px-5 py-4 text-center">
                    <div className="text-2xl font-extrabold text-gradient">{item.cgpa}</div>
                    <div className="mt-0.5 font-mono text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
                      CGPA
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2.5 rounded-2xl border border-amber-100 bg-amber-50/60 px-4 py-3">
                  <Award className="h-4 w-4 shrink-0 text-amber-500" />
                  <span className="text-[13.5px] font-semibold text-amber-900">
                    {item.recognition}
                  </span>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>

        {/* Achievements live in the same section so the academic story is told once. */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          {ACHIEVEMENTS.map((item) => {
            const isResearch = item.kind === "research";
            const Icon = isResearch ? BookOpen : Trophy;

            return (
              <motion.div key={item.id} variants={cardIn} className="min-w-0">
                <TiltCard
                  disabled={coarse}
                  intensity={5}
                  glowColor={isResearch ? "rgba(6,182,212,0.16)" : "rgba(132,204,22,0.18)"}
                  className="relative h-full overflow-hidden p-7"
                >
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full border border-dashed"
                    style={{ borderColor: isResearch ? "#a5f3fc" : "#d9f99d" }}
                    animate={reduce ? undefined : { rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />

                  <span
                    className={`relative grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] ${
                      isResearch
                        ? "bg-[linear-gradient(135deg,#0891b2,#059669)]"
                        : "bg-[linear-gradient(135deg,#65a30d,#0d9488)]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="relative mt-5 text-lg font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-[0.95rem] leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  {item.items && (
                    <ul className="relative mt-4 flex flex-wrap gap-2">
                      {item.items.map((entry) => (
                        <li
                          key={entry}
                          className="rounded-xl border border-white/80 bg-white/75 px-3.5 py-2 text-[12.5px] font-bold text-slate-700 shadow-[0_6px_16px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          {entry}
                        </li>
                      ))}
                    </ul>
                  )}
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
