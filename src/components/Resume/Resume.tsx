import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Eye,
  EyeOff,
  FileText,
  Sparkles,
  ExternalLink as ExternalLinkIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { Magnetic } from "@/components/UI/Magnetic";
import { buttonStyles } from "@/components/UI/Button";
import { SITE } from "@/lib/site";
import { copyToClipboard } from "@/lib/openExternal";
import { useCoarsePointer } from "@/hooks/usePointer";
import { cardIn, VIEWPORT } from "@/lib/motion";

const KEYWORDS = [
  "Agentic AI",
  "Generative AI",
  "RAG Systems",
  "Multi-Agent Orchestration",
  "Explainable AI",
  "Computer Vision",
];

const RESUME_METRICS = [
  { label: "CGPA", value: "9.44 / 10.0", note: "B.Tech CSE (AI & ML)" },
  { label: "Institution", value: "Jagran Lakecity University", note: "Academic Excellence Merit" },
  { label: "Open Source", value: "GSSoC'26 Contributor", note: "Production & Collaborative OSS" },
  { label: "Research", value: "RAEMPS & RICCE", note: "ML Conference Presentations" },
];

export function Resume() {
  const coarse = useCoarsePointer();
  const reduce = useReducedMotion() ?? false;
  const interactive = !coarse && !reduce;
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleCopy = async () => {
    const fullUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${SITE.resumeView}`
        : SITE.resumeView;
    const ok = await copyToClipboard(fullUrl);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="resume"
      aria-labelledby="resume-title"
      className="relative px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Resume & Credentials"
          title={<span id="resume-title">Curriculum Vitae</span>}
          description="Download my verified resume, explore academic and technical achievements, or inspect the interactive document preview."
        />

        <motion.div
          variants={cardIn}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative mt-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-[40px] opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(52,211,153,0.3), transparent 70%)",
            }}
          />

          <div className="relative overflow-hidden rounded-[32px] glass-strong px-6 py-10 sm:px-12 sm:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px gradient-line"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-faint opacity-40"
            />

            <div className="relative text-center">
              <motion.span
                className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#047857,#0d9488,#06b6d4)] text-white shadow-[0_18px_38px_rgba(5,150,105,0.34)]"
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FileText className="h-6 w-6" />
              </motion.span>

              <h3 className="mt-6 text-2xl font-extrabold tracking-[0.06em] text-slate-900 sm:text-[2rem]">
                SHUBHANGI THAKUR
              </h3>
              <p className="mt-2 font-mono text-[11px] font-bold tracking-[0.3em] text-slate-500 uppercase">
                AI / ML Engineer • Agentic & Generative AI Systems
              </p>

              {/* Keyword Badges */}
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {KEYWORDS.map((word) => (
                  <li
                    key={word}
                    className="rounded-full border border-white/80 bg-white/70 px-3.5 py-1.5 text-[12.5px] font-semibold text-slate-600 shadow-[0_6px_16px_rgba(15,23,42,0.05)]"
                  >
                    {word}
                  </li>
                ))}
              </ul>

              {/* Key Credentials Strip */}
              <div className="mt-8 grid grid-cols-2 gap-3 text-left sm:grid-cols-4">
                {RESUME_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/70 bg-white/60 p-3.5 shadow-[0_4px_14px_rgba(15,23,42,0.03)] backdrop-blur-xs"
                  >
                    <div className="font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      {metric.label}
                    </div>
                    <div className="mt-1 text-sm font-bold text-slate-800">
                      {metric.value}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-teal-700">
                      {metric.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                {/* Instant Reliable Download Button */}
                <Magnetic disabled={!interactive} strength={0.2}>
                  <a
                    href={SITE.resumeDownload}
                    download="Shubhangi_Thakur_Resume.pdf"
                    aria-label="Download Shubhangi Thakur's Resume PDF"
                    className={buttonStyles("primary", "lg")}
                  >
                    <Download className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                    Download PDF
                  </a>
                </Magnetic>

                {/* Direct View in Browser Tab */}
                <Magnetic disabled={!interactive} strength={0.18}>
                  <a
                    href={SITE.resumeView}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Shubhangi Thakur's resume PDF in a new tab"
                    className={buttonStyles("glass", "lg")}
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    View in Tab
                  </a>
                </Magnetic>

                {/* Inline Preview Toggle */}
                <Magnetic disabled={!interactive} strength={0.18}>
                  <button
                    type="button"
                    onClick={() => setShowPreview((prev) => !prev)}
                    aria-expanded={showPreview}
                    aria-controls="resume-preview-frame"
                    className={buttonStyles("glass", "lg")}
                  >
                    {showPreview ? (
                      <>
                        <EyeOff className="h-4 w-4" />
                        Hide Preview
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4" />
                        Preview Document
                      </>
                    )}
                  </button>
                </Magnetic>

                {/* Copy Link */}
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy resume link to clipboard"
                  className={buttonStyles("outline", "lg")}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600" />
                      Link copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                      Copy link
                    </>
                  )}
                </button>
              </div>

              {/* Sub-links: Google Drive Backup */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[12px] font-medium text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  Direct PDF download ready
                </span>
                <span>•</span>
                <a
                  href={SITE.resumeDriveView}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-emerald-600 transition-colors underline underline-offset-2"
                >
                  Google Drive Mirror
                  <ExternalLinkIcon className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Interactive Embedded Document Preview */}
            <AnimatePresence>
              {showPreview && (
                <motion.div
                  id="resume-preview-frame"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-3 shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
                    <div className="mb-3 flex items-center justify-between px-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-slate-700">
                          Shubhangi_Thakur_Resume(AI).pdf
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={SITE.resumeView}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800"
                        >
                          Full Window
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={SITE.resumeDownload}
                          download="Shubhangi_Thakur_Resume.pdf"
                          className="flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                        >
                          Download
                          <Download className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    <iframe
                      src={`${SITE.resumeView}#toolbar=1&navpanes=0`}
                      title="Shubhangi Thakur Resume PDF Document"
                      className="h-[680px] w-full rounded-xl border border-slate-100 bg-slate-50"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
