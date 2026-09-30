import { useCallback, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal/ProjectModal";
import { PROJECTS } from "@/data/projects";
import { useCoarsePointer } from "@/hooks/usePointer";
import { stagger, VIEWPORT } from "@/lib/motion";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion() ?? false;
  const coarse = useCoarsePointer();

  const active = useMemo(
    () => PROJECTS.find((p) => p.id === openId) ?? null,
    [openId],
  );

  const handleOpen = useCallback((id: string) => setOpenId(id), []);
  const handleClose = useCallback(() => setOpenId(null), []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title={<span id="projects-title">Selected AI Projects</span>}
          description="Agentic systems, generative tooling and interpretable models — click any card for the full architecture."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={handleOpen}
              animate={!reduce}
              tilt={!coarse && !reduce}
            />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={handleClose} animate={!reduce} />
    </section>
  );
}
