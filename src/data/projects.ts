export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  category: string;
  date?: string;
  description: string;
  overview: string;
  built: string[];
  capabilities: string[];
  technologies: string[];
  architecture: { label: string; value: string }[];
  githubUrl?: string;
  accent: string;
  glow: string;
  visual: "legal" | "skill" | "leaf" | "medical" | "workbench";
}

export const PROJECTS: Project[] = [
  {
    id: "legal-intelligence",
    index: "01",
    title: "Explainable Bilingual Multi-Agent Legal Intelligence Platform",
    category: "Multi-Agent Systems • Legal AI",
    date: "July 2026 – Present",
    description:
      "A multi-agent legal intelligence platform designed for document classification, case-law retrieval, multi-step legal reasoning, and explainable evidence-backed workflows.",
    overview:
      "A bilingual, multi-agent legal intelligence platform where specialised agents coordinate over legal documents — classifying them, retrieving relevant case law, reasoning across multiple steps, and returning explainable, evidence-backed outputs rather than opaque answers.",
    built: [
      "Multi-agent orchestration over legal workflows using LangGraph agent graphs.",
      "Retrieval-augmented case-law search backed by a Qdrant vector store.",
      "A Neo4j knowledge graph layer for linking statutes, citations and case relationships.",
      "Explainability surfaces so every conclusion is traceable to supporting evidence.",
      "Agent evaluation for long-horizon reasoning chains and failure modes.",
    ],
    capabilities: [
      "Legal document classification",
      "Case-law retrieval (RAG)",
      "Multi-step legal reasoning",
      "Evidence-backed explanations",
      "Bilingual document handling",
      "Agent evaluation & long-horizon reasoning",
    ],
    technologies: [
      "Multi-Agent Systems",
      "LangGraph",
      "RAG",
      "Qdrant",
      "Neo4j",
      "Explainable AI",
      "LLMs",
      "Python",
    ],
    architecture: [
      { label: "Orchestration", value: "LangGraph agent graph — router, retriever, reasoner, verifier" },
      { label: "Retrieval", value: "Qdrant vector search over legal corpora (RAG)" },
      { label: "Knowledge", value: "Neo4j graph for statute, citation & case relationships" },
      { label: "Explainability", value: "Evidence-backed traces for every reasoning step" },
      { label: "Evaluation", value: "Long-horizon reasoning checks & agent failure-mode review" },
    ],
    githubUrl:
      "https://github.com/Shubhangi-thakur24/Explainable-MultiAgent-Legal-Intelligence-System",
    accent: "from-emerald-600 to-teal-500",
    glow: "rgba(16,185,129,0.30)",
    visual: "legal",
  },
  {
    id: "skilltraverse",
    index: "02",
    title: "SkillTraverse",
    subtitle: "Generative AI Career Engine",
    category: "Generative AI • Product Tooling",
    date: "June 2026",
    description:
      "A generative AI career engine that acts as a product tooling agent — parsing resumes and job descriptions, automating technical assessment, and generating capability matrices and skill-gap roadmaps.",
    overview:
      "SkillTraverse is a generative AI career engine built as a product tooling agent. It parses a candidate's resume alongside a target job description, automates technical assessment, and produces a capability matrix plus a personalised skill-gap roadmap.",
    built: [
      "A product tooling agent that drives the end-to-end career analysis workflow.",
      "Resume parsing that structures unstructured candidate documents.",
      "Job-description parsing to extract required competencies.",
      "Technical assessment automation across extracted skills.",
      "Capability matrices mapping candidate strengths against role requirements.",
      "Skill-gap roadmaps generated from the resulting delta.",
    ],
    capabilities: [
      "Resume parsing",
      "Job-description parsing",
      "Technical assessment automation",
      "Capability matrices",
      "Skill-gap roadmaps",
      "Product tooling agent",
    ],
    technologies: ["Generative AI", "LLMs", "Prompt Engineering", "Python", "FastAPI", "React.js"],
    architecture: [
      { label: "Agent layer", value: "Product tooling agent coordinating parse → assess → map" },
      { label: "Parsing", value: "Resume + job-description extraction into structured skills" },
      { label: "Assessment", value: "Automated technical assessment over extracted capabilities" },
      { label: "Output", value: "Capability matrix and generated skill-gap roadmap" },
    ],
    githubUrl: "https://github.com/Shubhangi-thakur24/SkillTraverse",
    accent: "from-teal-500 to-cyan-500",
    glow: "rgba(20,184,166,0.28)",
    visual: "skill",
  },
  {
    id: "sugarcane",
    index: "03",
    title: "Sugarcane Disease Detection",
    category: "Computer Vision • Applied ML",
    description:
      "A machine learning project for detecting disease in sugarcane crops from leaf imagery.",
    overview:
      "An applied machine learning project focused on sugarcane crop disease detection from leaf imagery. The full implementation is available on GitHub.",
    built: [
      "A machine learning pipeline for sugarcane leaf disease detection.",
      "Open-source implementation published on GitHub.",
    ],
    capabilities: ["Image-based disease detection", "Applied machine learning"],
    technologies: ["Python", "Machine Learning", "Computer Vision"],
    architecture: [
      { label: "Task", value: "Sugarcane crop disease detection from leaf imagery" },
      { label: "Source", value: "Full implementation available on GitHub" },
    ],
    githubUrl: "https://github.com/Shubhangi-thakur24/Sugarcane_Disease_Detection",
    accent: "from-lime-500 to-emerald-500",
    glow: "rgba(132,204,22,0.26)",
    visual: "leaf",
  },
  {
    id: "surgical",
    index: "04",
    title: "Autonomous Surgical Decision System",
    category: "Explainable AI • Clinical Decision Support",
    date: "January 2026 – June 2026",
    description:
      "AI-driven clinical decision support for surgical risk prediction, built around model controllability, interpretability, and safe real-world deployment.",
    overview:
      "An AI-driven clinical decision support system for surgical risk prediction. The work centres on model controllability and safe real-world deployment, with interpretable evaluation infrastructure that exposes transparent model decision boundaries and feature importance.",
    built: [
      "AI-driven clinical decision support for surgical risk prediction.",
      "Interpretable evaluation infrastructure around the model lifecycle.",
      "SHAP, LIME and Grad-CAM explanations for model behaviour.",
      "Transparent model decision boundaries and feature importance surfaces.",
      "A focus on model controllability and safe real-world deployment.",
    ],
    capabilities: [
      "Surgical risk prediction",
      "Clinical decision support",
      "Feature importance analysis",
      "Transparent decision boundaries",
      "Model controllability",
      "Safe deployment practices",
    ],
    technologies: ["Explainable AI", "SHAP", "LIME", "Grad-CAM", "Python", "PyTorch", "Model Auditing"],
    architecture: [
      { label: "Task", value: "Surgical risk prediction for clinical decision support" },
      { label: "Interpretability", value: "SHAP + LIME for attribution, Grad-CAM for visual evidence" },
      { label: "Evaluation", value: "Interpretable evaluation infrastructure & model auditing" },
      { label: "Safety", value: "Model controllability oriented toward safe real-world deployment" },
    ],
    accent: "from-cyan-600 to-emerald-500",
    glow: "rgba(8,145,178,0.24)",
    visual: "medical",
  },
  {
    id: "workbench-rbac",
    index: "05",
    title: "Workbench RBAC",
    subtitle: "Enterprise Access Control Engine",
    category: "Security & Systems • Full-Stack • RBAC",
    date: "2026",
    description:
      "A granular Role-Based Access Control (RBAC) workbench platform with dynamic permission matrices, user and role provisioning, and audit logs.",
    overview:
      "Workbench RBAC is an enterprise-grade role-based access control engine and administration console. It manages granular permissions, hierarchic roles, and user assignment policies with strict validation and audit traceability.",
    built: [
      "Granular role-based access control (RBAC) engine for enterprise applications.",
      "Dynamic permission assignment across users, groups, and protected resources.",
      "Secure authentication and session management with audited access logs.",
      "Interactive administrative UI for user management, role definition, and policy enforcement.",
      "Full API route protection and token-based verification.",
    ],
    capabilities: [
      "Role-based authorization (RBAC)",
      "Granular permission policies",
      "User & group administration",
      "Audit logging & access traces",
      "Secure API route protection",
      "Enterprise security compliance",
    ],
    technologies: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "RBAC",
      "REST APIs",
      "JWT",
    ],
    architecture: [
      { label: "Policy Engine", value: "Granular RBAC evaluator for resource-level authorization" },
      { label: "Administration", value: "Workbench dashboard for role matrices & user management" },
      { label: "Audit", value: "Immutable security logging of access attempts and policy changes" },
      { label: "Protection", value: "Middleware and route guard validation layers" },
    ],
    githubUrl: "https://github.com/Shubhangi-thakur24/workbench-rbac",
    accent: "from-blue-600 to-teal-500",
    glow: "rgba(37,99,235,0.26)",
    visual: "workbench",
  },
];
