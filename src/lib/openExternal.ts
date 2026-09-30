/**
 * Robustly open an external URL.
 *
 * Why this exists:
 * A plain `<a target="_blank">` is the correct markup, but it is *silently
 * blocked* when the page is rendered inside a sandboxed iframe that lacks
 * `allow-popups` (preview panes, embeds, some in-app browsers). The click
 * appears to do nothing at all.
 *
 * Strategy — try the least destructive option first:
 *   1. `window.open(..., "_blank")` — normal new tab.
 *   2. Escape the frame via `window.top.location` — new tab was blocked but we
 *      are framed, so navigate the top-level document instead.
 *   3. `window.location.href` — last resort, navigate the current document.
 *
 * Returns true if the anchor's default behaviour should be prevented.
 */
export function openExternal(url: string): boolean {
  if (typeof window === "undefined" || !url) return false;

  // 1. Standard new tab / new window.
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) {
      win.opener = null;
      return true;
    }
  } catch {
    /* blocked — fall through */
  }

  // 2. We're probably inside a sandboxed frame. Try the top-level document.
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      return true;
    }
  } catch {
    /* cross-origin top — fall through */
  }

  // 3. Navigate this document.
  try {
    window.location.href = url;
    return true;
  } catch {
    return false;
  }
}

/** Copy text to the clipboard with a legacy fallback. */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === "undefined") return false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }

  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-9999px";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}
