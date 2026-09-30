import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CircleCheck, Layers, X } from "lucide-react";
import { GitHubIcon } from "@/components/UI/SocialIcons";
import { ProjectVisual } from "@/components/Projects/ProjectVisual";
import { ExternalLink } from "@/components/UI/ExternalLink";
import type { Project } from "@/data/projects";
import { EASE } from "@/lib/motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  animate: boolean;
}

export function ProjectModal({ project, onClose, animate }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 80);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto overscroll-contain p-3 py-8 sm:p-6 sm:py-12"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.id}`}
        >
          <motion.button
            type="button"
            aria-label="Close project details"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 h-full w-full cursor-default bg-slate-900/25 backdrop-blur-md"
          />

          <motion.div
            layoutId={`project-${project.id}`}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/85 bg-white/90 shadow-[0_40px_90px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
          >
            <div
              aria-hidden="true"
              className={`h-1 w-full bg-gradient-to-r ${project.accent}`}
            />

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-slate-200/90 bg-white/85 text-slate-600 transition-all duration-200 hover:rotate-90 hover:border-slate-300 hover:text-slate-900"
            >
              <X className="h-4 w-4" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.08, ease: EASE }}
              className="p-6 sm:p-9"
            >
              <div className="flex flex-wrap items-center gap-2 pr-10">
                <span
                  className={`inline-block bg-gradient-to-br ${project.accent} bg-clip-text font-mono text-xl font-extrabold text-transparent`}
                >
                  {project.index}
                </span>
                <span className="font-mono text-[10.5px] font-bold tracking-[0.14em] text-slate-400 uppercase">
                  {project.category}
                </span>
                {project.date && (
                  <span className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-500">
                    {project.date}
                  </span>
                )}
              </div>

              <h3
                id={`modal-title-${project.id}`}
                className="mt-3 text-2xl leading-tight font-extrabold text-slate-900 sm:text-[1.85rem]"
              >
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="mt-1 text-[15px] font-bold text-gradient">{project.subtitle}</p>
              )}

              <div className="mt-6 grid gap-6 sm:grid-cols-[1.4fr_1fr]">
                <div>
                  <h4 className="font-mono text-[10.5px] font-bold tracking-[0.18em] text-indigo-600 uppercase">
                    Overview
                  </h4>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
                    {project.overview}
                  </p>
                </div>
                <ProjectVisual variant={project.visual} animate={animate} />
              </div>

              <div className="mt-7">
                <h4 className="font-mono text-[10.5px] font-bold tracking-[0.18em] text-indigo-600 uppercase">
                  What I Built
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {project.built.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                      <span className="text-[13.5px] leading-relaxed text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="font-mono text-[10.5px] font-bold tracking-[0.18em] text-indigo-600 uppercase">
                  Key Capabilities
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-center gap-2 rounded-xl border border-indigo-50 bg-indigo-50/50 px-3 py-2 text-[12.5px] font-semibold text-slate-700"
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${project.accent}`}
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="font-mono text-[10.5px] font-bold tracking-[0.18em] text-indigo-600 uppercase">
                  Key Technologies
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-xl border border-slate-200/80 bg-white/75 px-3 py-1.5 text-[12.5px] font-semibold text-slate-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="font-mono text-[10.5px] font-bold tracking-[0.18em] text-indigo-600 uppercase">
                  AI Architecture
                </h4>
                <dl className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {project.architecture.map((row) => (
                    <div
                      key={row.label}
                      className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5"
                    >
                      <dt className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-slate-900 uppercase">
                        <Layers className="h-3 w-3 text-indigo-500" />
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-[12.5px] leading-relaxed text-slate-600">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
                {project.githubUrl ? (
                  <ExternalLink
                    href={project.githubUrl}
                    label={`View ${project.title} on GitHub`}
                    className="group/gh inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-[13.5px] font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    <GitHubIcon className="h-4 w-4 transition-transform duration-300 group-hover/gh:-translate-y-0.5" />
                    View on GitHub
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5" />
                  </ExternalLink>
                ) : (
                  <span className="text-[12.5px] font-medium text-slate-400">
                    Repository link not publicly listed.
                  </span>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/70 px-5 py-3 text-[13.5px] font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
