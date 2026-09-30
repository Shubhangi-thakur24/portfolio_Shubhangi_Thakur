import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/UI/SocialIcons";
import { ExternalLink, MailLink } from "@/components/UI/ExternalLink";
import { SITE } from "@/lib/site";

const LINKS = [
  { label: "GitHub", href: SITE.github },
  { label: "LinkedIn", href: SITE.linkedin },
  { label: "Resume", href: SITE.resumeView },
];

const underline =
  "absolute -bottom-1 left-0 h-px w-0 bg-[linear-gradient(90deg,#047857,#0d9488)] transition-all duration-300 group-hover:w-full";
const linkBase =
  "group relative text-[13.5px] font-semibold text-slate-600 transition-colors hover:text-emerald-700";
const iconBase =
  "grid h-10 w-10 place-items-center rounded-xl border border-white/80 bg-white/70 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white";

export function Footer() {
  return (
    <footer className="relative px-5 pb-10 sm:px-8">
      <div aria-hidden="true" className="mx-auto mb-10 h-px max-w-6xl gradient-line" />

      <div className="mx-auto max-w-6xl rounded-[28px] glass-soft px-6 py-9 sm:px-10">
        <div className="flex flex-col items-center gap-7 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div>
            <p className="text-lg font-extrabold tracking-[0.14em] text-slate-900">
              SHUBHANGI THAKUR
            </p>
            <p className="mt-1.5 font-mono text-[10.5px] font-bold tracking-[0.28em] text-slate-500 uppercase">
              AI / ML Engineer
            </p>
            <p className="mt-3 text-[13px] font-medium text-slate-500">{SITE.tagline}</p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {LINKS.map((link) => (
              <ExternalLink
                key={link.label}
                href={link.href}
                label={link.label}
                className={linkBase}
              >
                {link.label}
                <span aria-hidden="true" className={underline} />
              </ExternalLink>
            ))}
            <MailLink email={SITE.email} className={linkBase}>
              Email
              <span aria-hidden="true" className={underline} />
            </MailLink>
          </nav>

          <div className="flex items-center gap-2">
            <ExternalLink
              href={SITE.github}
              label="GitHub profile"
              className={`${iconBase} hover:text-slate-900`}
            >
              <GitHubIcon className="h-4 w-4" />
            </ExternalLink>
            <ExternalLink
              href={SITE.linkedin}
              label="LinkedIn profile"
              className={`${iconBase} hover:text-emerald-700`}
            >
              <LinkedInIcon className="h-4 w-4" />
            </ExternalLink>
            <MailLink email={SITE.email} className={`${iconBase} hover:text-teal-700`}>
              <Mail className="h-4 w-4" />
            </MailLink>
          </div>
        </div>

        <div className="mt-8 border-t border-white/70 pt-5 text-center">
          <p className="text-[12.5px] font-medium text-slate-400">© 2026 Shubhangi Thakur</p>
        </div>
      </div>
    </footer>
  );
}
