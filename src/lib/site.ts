export const SITE = {
  name: "Shubhangi Thakur",
  shortName: "SHUBHANGI",
  role: "AI / ML Engineer",
  email: "shubhangithakur2404@gmail.com",
  mailto: "mailto:shubhangithakur2404@gmail.com",
  github: "https://github.com/Shubhangi-thakur24",
  linkedin: "https://www.linkedin.com/in/shubhangi-thakur2404/",
  resumeFileId: "1W2M1itZ4sPIjBcJkF7sdNpZHANCdpfad",
  resumeView: "/Shubhangi_Thakur_Resume.pdf",
  resumeDriveView:
    "https://drive.google.com/file/d/1W2M1itZ4sPIjBcJkF7sdNpZHANCdpfad/view?usp=sharing",
  resumeDownload: "/Shubhangi_Thakur_Resume.pdf",
  tagline: "Agentic AI • Generative AI • Intelligent Systems",
} as const;

/**
 * External links are rendered via `<ExternalLink>` / `<MailLink>`
 * (src/components/UI/ExternalLink.tsx), which apply target/rel plus a
 * JS navigation fallback for sandboxed iframes.
 */

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
