import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { ProjectVisual } from "@/components/Projects/ProjectVisual";
import { GitHubIcon } from "@/components/UI/SocialIcons";
import { ExternalLink } from "@/components/UI/ExternalLink";
import type { Project } from "@/data/projects";
import { cardIn } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  onOpen: (id: string) => void;
  animate: boolean;
  tilt: boolean;
}

export function ProjectCard({ project, onOpen, animate, tilt }: ProjectCardProps) {
  return (
    <motion.article
      layoutId={`project-${project.id}`}
      variants={cardIn}
      className="group relative min-w-0"
      whileHover={tilt ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-[32px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(60% 60% at 50% 40%, ${project.glow}, transparent 70%)` }}
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl glass p-6 transition-[border-color,box-shadow] duration-300 group-hover:border-white/95 group-hover:shadow-[0_32px_70px_rgba(15,23,42,0.14)] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span
              className={`inline-block bg-gradient-to-br ${project.accent} bg-clip-text font-mono text-[26px] leading-none font-extrabold text-transparent`}
            >
              {project.index}
            </span>
            <p className="mt-3 font-mono text-[10.5px] font-bold tracking-[0.14em] text-slate-400 uppercase">
              {project.category}
            </p>
          </div>

          {project.date && (
            <span className="shrink-0 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-500">
              {project.date}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-[1.15rem] leading-snug font-extrabold text-slate-900 sm:text-[1.3rem]">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="mt-1 text-sm font-bold text-gradient">{project.subtitle}</p>
        )}

        <p className="mt-3 text-[0.92rem] leading-relaxed text-slate-600">{project.description}</p>

        <div className="mt-4">
          <p className="font-mono text-[9.5px] font-bold tracking-[0.18em] text-slate-400 uppercase">
            Key capabilities
          </p>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {project.capabilities.slice(0, 4).map((cap) => (
              <li key={cap} className="flex items-start gap-1.5">
                <span
                  aria-hidden="true"
                  className={`mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gradient-to-br ${project.accent}`}
                />
                <span className="text-[12.5px] leading-snug font-medium text-slate-600">{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <ProjectVisual variant={project.visual} animate={animate} />
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-slate-200/70 bg-white/60 px-2.5 py-1 text-[11.5px] font-semibold text-slate-600"
            >
              {tech}
            </li>
          ))}
          {project.technologies.length > 6 && (
            <li className="rounded-lg border border-slate-200/70 bg-white/60 px-2.5 py-1 text-[11.5px] font-semibold text-slate-400">
              +{project.technologies.length - 6}
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-6">
          <button
            type="button"
            onClick={() => onOpen(project.id)}
            aria-label={`Open details for ${project.title}`}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_26px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <Plus className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:rotate-90" />
            Details
          </button>

          {project.githubUrl && (
            <ExternalLink
              href={project.githubUrl}
              label={`View ${project.title} on GitHub`}
              className="group/gh inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/70 px-4 py-2.5 text-[13px] font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white hover:text-indigo-700"
            >
              <GitHubIcon className="h-4 w-4 transition-transform duration-300 group-hover/gh:-translate-y-0.5" />
              View on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5" />
            </ExternalLink>
          )}
        </div>
      </div>
    </motion.article>
  );
}
