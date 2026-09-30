export interface ExperienceItem {
  id: string;
  index: string;
  role: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
  visual: "agent" | "opensource";
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "ey-techathon",
    index: "01",
    role: "AI Agent Workflow Designer",
    org: "EY Techathon 6.0",
    period: "September 2025",
    summary:
      "Designed Master and Worker agentic architectures for pharmaceutical enterprise use cases requiring long-horizon reasoning.",
    points: [
      "Designed Master and Worker agentic architectures for enterprise workflows.",
      "Targeted pharmaceutical enterprise use cases requiring long-horizon reasoning.",
      "Automated literature reviews through coordinated domain-specific AI agents.",
      "Built market analysis workflows driven by agent collaboration.",
      "Evaluated agent failure modes across multi-step task execution.",
      "Benchmarked tool use across agent trajectories.",
    ],
    tags: [
      "Master / Worker Agents",
      "Long-Horizon Reasoning",
      "Literature Review Automation",
      "Market Analysis",
      "Failure-Mode Evaluation",
      "Tool-Use Benchmarking",
    ],
    visual: "agent",
  },
  {
    id: "gssoc",
    index: "02",
    role: "Open Source Contributor",
    org: "GSSOC'26",
    period: "June 2023 – Present",
    summary:
      "Contributing to open-source codebases with an emphasis on reliability, documentation and collaborative engineering.",
    points: [
      "Debugged complex issues across unfamiliar production-grade codebases.",
      "Improved system documentation for maintainers and new contributors.",
      "Worked within GitHub workflows — issues, branches, pull requests and reviews.",
      "Collaborated directly with project maintainers.",
      "Participated in code review cycles.",
      "Focused on production-grade reliability of contributions.",
    ],
    tags: [
      "Debugging",
      "System Documentation",
      "GitHub Workflows",
      "Maintainer Collaboration",
      "Code Review",
      "Production Reliability",
    ],
    visual: "opensource",
  },
];
