export interface Achievement {
  id: string;
  title: string;
  description: string;
  items?: string[];
  kind: "academic" | "research";
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    description: "9+ CGPA and Merit Certificate for academic excellence.",
    kind: "academic",
  },
  {
    id: "research",
    title: "Research",
    description: "Presented Machine Learning research papers at:",
    items: ["RAEMPS 2025", "RICCE 2024"],
    kind: "research",
  },
];

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  recognition: string;
}

export const EDUCATION: EducationItem[] = [
  {
    id: "jlu",
    institution: "Jagran Lakecity University",
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    period: "June 2023 – Present",
    cgpa: "9.44 / 10.00",
    recognition: "Chancellor's Scholarship & Marker Cup Awardee",
  },
];
