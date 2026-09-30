import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { Magnetic } from "@/components/UI/Magnetic";
import { GitHubIcon, LinkedInIcon } from "@/components/UI/SocialIcons";
import { ExternalLink, MailLink } from "@/components/UI/ExternalLink";
import { SITE } from "@/lib/site";
import { useCoarsePointer } from "@/hooks/usePointer";
import { cardIn, VIEWPORT } from "@/lib/motion";

export function Contact() {
  const coarse = useCoarsePointer();
  const reduce = useReducedMotion() ?? false;
  const interactive = !coarse && !reduce;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title={<span id="contact-title">Let&apos;s Build Something Intelligent.</span>}
          description="Interested in AI engineering, intelligent systems, or building something ambitious? Let's connect."
        />

        <motion.div
          variants={cardIn}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative mt-12"
        >
          <div className="relative overflow-hidden rounded-[32px] glass px-6 py-10 sm:px-10 sm:py-12">
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(45,212,191,0.35), rgba(45,212,191,0) 70%)",
              }}
              animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative flex flex-col items-center gap-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 font-mono text-[10.5px] font-bold tracking-[0.16em] text-indigo-600 uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                Open to AI/ML opportunities
              </span>

              <div className="grid w-full gap-3 sm:grid-cols-3">
                <Magnetic disabled={!interactive} strength={0.14} className="inline-flex w-full">
                  <ExternalLink
                    href={SITE.linkedin}
                    label="Connect on LinkedIn"
                    className="group flex w-full flex-col items-center gap-2.5 rounded-2xl border border-white/80 bg-white/70 px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-[0_22px_48px_rgba(15,23,42,0.12)]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,#047857,#0891b2)] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                      <LinkedInIcon className="h-4.5 w-4.5" />
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-slate-900">
                      LinkedIn
                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="text-[11.5px] font-medium text-slate-500">
                      shubhangi-thakur2404
                    </span>
                  </ExternalLink>
                </Magnetic>

                <Magnetic disabled={!interactive} strength={0.14} className="inline-flex w-full">
                  <ExternalLink
                    href={SITE.github}
                    label="View GitHub profile"
                    className="group flex w-full flex-col items-center gap-2.5 rounded-2xl border border-white/80 bg-white/70 px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-[0_22px_48px_rgba(15,23,42,0.12)]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                      <GitHubIcon className="h-5 w-5" />
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-slate-900">
                      GitHub
                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="text-[11.5px] font-medium text-slate-500">
                      Shubhangi-thakur24
                    </span>
                  </ExternalLink>
                </Magnetic>

                <Magnetic disabled={!interactive} strength={0.14} className="inline-flex w-full">
                  <MailLink
                    email={SITE.email}
                    className="group flex w-full flex-col items-center gap-2.5 rounded-2xl border border-white/80 bg-white/70 px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-[0_22px_48px_rgba(15,23,42,0.12)]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,#0d9488,#65a30d)] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold text-slate-900">Email</span>
                    <span className="max-w-full truncate text-[11.5px] font-medium text-slate-500">
                      {SITE.email}
                    </span>
                  </MailLink>
                </Magnetic>
              </div>

              <MailLink
                email={SITE.email}
                className="group/btn inline-flex items-center gap-2 rounded-full bg-[linear-gradient(110deg,#047857,#0d9488,#06b6d4)] bg-[length:200%_100%] bg-[position:0%_50%] px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_16px_38px_rgba(5,150,105,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[position:100%_50%]"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                Say Hello
              </MailLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
