import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { GitHubIcon, LinkedInIcon } from "@/components/UI/SocialIcons";
import { ExternalLink, MailLink } from "@/components/UI/ExternalLink";
import { EASE } from "@/lib/motion";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const ids = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const active = useActiveSection(ids);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = useCallback((id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 92;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:rounded-full sm:px-5",
            scrolled
              ? "border border-white/80 bg-white/80 shadow-[0_18px_44px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
              : "border border-white/60 bg-white/45 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl",
          )}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex shrink-0 items-center gap-2.5 rounded-full py-1 pr-2"
            aria-label="Shubhangi Thakur — back to top"
          >
            <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(135deg,#047857,#0d9488,#06b6d4)] text-[13px] font-extrabold text-white shadow-[0_8px_18px_rgba(5,150,105,0.35)]">
              S
            </span>
            <span className="text-[13px] font-extrabold tracking-[0.18em] text-slate-900">
              SHUBHANGI
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(item.id);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative inline-flex items-center rounded-full px-3 py-2 text-[12.5px] font-semibold transition-colors duration-200 xl:px-3.5 xl:text-[13px]",
                      isActive ? "text-indigo-700" : "text-slate-600 hover:text-slate-900",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-indigo-50/90 ring-1 ring-indigo-100"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <ExternalLink
              href={SITE.github}
              label="Shubhangi Thakur on GitHub"
              className="hidden h-9 w-9 place-items-center rounded-full text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/80 hover:text-slate-900 sm:grid"
            >
              <GitHubIcon className="h-[17px] w-[17px]" />
            </ExternalLink>
            <ExternalLink
              href={SITE.linkedin}
              label="Shubhangi Thakur on LinkedIn"
              className="hidden h-9 w-9 place-items-center rounded-full text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/80 hover:text-indigo-700 sm:grid"
            >
              <LinkedInIcon className="h-[15px] w-[15px]" />
            </ExternalLink>

            <MailLink
              email={SITE.email}
              className="hidden rounded-full bg-[linear-gradient(110deg,#047857,#0d9488)] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(5,150,105,0.3)] transition-transform duration-200 hover:-translate-y-0.5 xl:inline-flex"
            >
              Hire Me
            </MailLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/70 bg-white/70 text-slate-800 transition-colors hover:bg-white lg:hidden"
            >
              {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-slate-900/15 backdrop-blur-sm"
            />
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -14, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="absolute inset-x-3 top-20 rounded-3xl border border-white/80 bg-white/90 p-4 shadow-[0_28px_60px_rgba(15,23,42,0.16)] backdrop-blur-2xl sm:inset-x-6"
            >
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(item.id);
                      }}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold transition-colors",
                        active === item.id
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-slate-700 hover:bg-slate-50",
                      )}
                    >
                      {item.label}
                      <span className="font-mono text-[11px] text-slate-400">
                        {String(NAV_ITEMS.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3">
                <ExternalLink
                  href={SITE.github}
                  label="GitHub profile"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-slate-50 py-3 text-xs font-semibold text-slate-700"
                >
                  <GitHubIcon className="h-4 w-4" /> GitHub
                </ExternalLink>
                <ExternalLink
                  href={SITE.linkedin}
                  label="LinkedIn profile"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-slate-50 py-3 text-xs font-semibold text-slate-700"
                >
                  <LinkedInIcon className="h-4 w-4" /> LinkedIn
                </ExternalLink>
                <MailLink
                  email={SITE.email}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(110deg,#047857,#0d9488)] py-3 text-xs font-semibold text-white"
                >
                  Email
                </MailLink>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
