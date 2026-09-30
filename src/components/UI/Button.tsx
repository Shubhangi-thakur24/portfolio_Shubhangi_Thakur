import { cn } from "@/utils/cn";

export type ButtonVariant = "primary" | "glass" | "outline";
export type ButtonSize = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-all duration-300 will-change-transform focus-visible:outline-2 focus-visible:outline-offset-3 " +
  "focus-visible:outline-indigo-600 active:translate-y-0";

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[0.95rem]",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "text-white shadow-[0_14px_34px_rgba(5,150,105,0.32)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(5,150,105,0.42)] " +
    "bg-[linear-gradient(110deg,#047857_0%,#0d9488_45%,#06b6d4_100%)] bg-[length:200%_100%] bg-[position:0%_50%] hover:bg-[position:100%_50%]",
  glass:
    "glass text-slate-800 hover:-translate-y-0.5 hover:border-white/95 hover:shadow-[0_22px_48px_rgba(15,23,42,0.13)] hover:text-emerald-700",
  outline:
    "border border-slate-200/90 bg-white/60 text-slate-700 backdrop-blur-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white/85 hover:text-emerald-700",
};

export function buttonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, sizes[size], variants[variant], className);
}
