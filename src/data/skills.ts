import type { LucideIcon } from "lucide-react";
import { Boxes, Code2, Database, ScanSearch } from "lucide-react";

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "agentic",
    title: "Agentic AI & Alignment",
    blurb: "Designing, orchestrating and stress-testing autonomous agent systems.",
    icon: Boxes,
    accent: "from-emerald-600 to-teal-500",
    skills: [
      "Multi-Agent Systems",
      "AI Agents",
      "Prompt Engineering",
      "RAG",
      "LLMs",
      "LangGraph",
      "Tool Use Evaluation",
      "Prompt Testing",
    ],
  },
  {
    id: "programming",
    title: "Programming & Frameworks",
    blurb: "Shipping intelligent applications end to end.",
    icon: Code2,
    accent: "from-teal-500 to-cyan-500",
    skills: ["Python", "FastAPI", "React.js", "PyTorch", "TensorFlow"],
  },
  {
    id: "interpretability",
    title: "Interpretability & Evaluation",
    blurb: "Making model behaviour transparent, auditable and measurable.",
    icon: ScanSearch,
    accent: "from-cyan-600 to-emerald-500",
    skills: ["Explainable AI", "Model Auditing", "SHAP", "LIME", "Grad-CAM"],
  },
  {
    id: "infra",
    title: "Databases & Infrastructure",
    blurb: "Vector, graph and relational layers behind AI systems.",
    icon: Database,
    accent: "from-lime-500 to-emerald-600",
    skills: ["Qdrant", "Neo4j", "PostgreSQL", "Docker"],
  },
];
