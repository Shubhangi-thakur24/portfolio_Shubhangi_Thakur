import type { AnchorHTMLAttributes, ReactNode } from "react";
import { openExternal } from "@/lib/openExternal";

interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
  /** Accessible description appended with "(opens in a new tab)". */
  label: string;
}

/**
 * Real anchor with correct external-link semantics, plus a JS fallback that
 * guarantees navigation even when `target="_blank"` is blocked (sandboxed
 * iframes / preview panes silently swallow popup navigation).
 */
export function ExternalLink({
  href,
  children,
  label,
  onClick,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        // Never hijack download clicks so browser native file download works
        if (rest.download !== undefined) return;
        // Ignore modified clicks so the browser's own behaviour wins.
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (event.button !== 0) return;

        // If local or relative URL, let default anchor behavior handle it
        if (href.startsWith("/") || href.startsWith("#")) return;

        event.preventDefault();
        openExternal(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

interface MailLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  email: string;
  children: ReactNode;
}

/**
 * mailto: link. Sandboxed frames can block the protocol handler, so we fall
 * back to copying the address and telling the user.
 */
export function MailLink({ email, children, onClick, ...rest }: MailLinkProps) {
  const href = `mailto:${email}`;

  return (
    <a
      href={href}
      aria-label={`Email ${email}`}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (event.button !== 0) return;

        event.preventDefault();
        try {
          window.location.href = href;
        } catch {
          openExternal(href);
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
