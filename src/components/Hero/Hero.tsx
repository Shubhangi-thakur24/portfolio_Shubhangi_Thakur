import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { AIVisualization } from "./AIVisualization";
import { Magnetic } from "@/components/UI/Magnetic";
import { buttonStyles } from "@/components/UI/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/UI/SocialIcons";
import { ExternalLink, MailLink } from "@/components/UI/ExternalLink";
import { SITE } from "@/lib/site";
import { useCoarsePointer, useViewportPointer } from "@/hooks/usePointer";
import { EASE, fadeUp, stagger } from "@/lib/motion";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 92, behavior: "smooth" });
}

export function Hero() {
  const reduce = useReducedMotion() ?? false;
  const coarse = useCoarsePointer();
  const interactive = !reduce && !coarse;
  const pointer = useViewportPointer(interactive);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8 lg:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div variants={stagger(0.1, 0.15)} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3.5 py-1.5 shadow-[0_10px_26px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 animate-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
              </span>
              <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-slate-600 uppercase sm:text-[11px]">
                AI/ML Engineer • Agentic AI • Generative AI
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[2.15rem] leading-[1.08] font-extrabold text-slate-900 sm:text-5xl lg:text-[3.6rem]"
          >
            Building{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Intelligent Systems</span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[linear-gradient(90deg,#047857,#0d9488,#06b6d4)]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
              />
            </span>{" "}
            for the Real World.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-[1.05rem]"
          >
            AI/ML Engineer focused on Agentic AI, Generative AI, RAG, LLMs, explainable AI, and
            intelligent full-stack applications.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic disabled={!interactive} strength={0.22}>
              <button
                type="button"
                onClick={() => scrollToId("projects")}
                className={buttonStyles("primary", "lg")}
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </Magnetic>

            <Magnetic disabled={!interactive} strength={0.18}>
              <ExternalLink
                href={SITE.resumeView}
                label="View Shubhangi Thakur's resume"
                className={buttonStyles("glass", "lg")}
              >
                View Resume
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </ExternalLink>
            </Magnetic>

            <Magnetic disabled={!interactive} strength={0.18}>
              <ExternalLink
                href={SITE.linkedin}
                label="Connect with Shubhangi Thakur on LinkedIn"
                className={buttonStyles("outline", "lg")}
              >
                Let&apos;s Connect
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </ExternalLink>
            </Magnetic>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ExternalLink
              href={SITE.github}
              label="GitHub profile"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
            >
              <GitHubIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              GitHub
            </ExternalLink>
            <ExternalLink
              href={SITE.linkedin}
              label="LinkedIn profile"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-indigo-700"
            >
              <LinkedInIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              LinkedIn
            </ExternalLink>
            <MailLink
              email={SITE.email}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-indigo-700"
            >
              <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              {SITE.email}
            </MailLink>
          </motion.div>
        </motion.div>

        <div className="relative">
          <AIVisualization pointer={pointer} interactive={interactive} />
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-slate-400 uppercase">
          Scroll
        </span>
        <span className="h-9 w-[22px] rounded-full border border-slate-300/80 p-1">
          <motion.span
            className="block h-1.5 w-1.5 rounded-full bg-indigo-500"
            animate={reduce ? undefined : { y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
