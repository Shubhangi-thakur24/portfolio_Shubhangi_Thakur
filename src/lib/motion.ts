import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const cardIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const stagger = (staggerChildren = 0.09, delayChildren = 0.04): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const VIEWPORT = { once: true, amount: 0.18 } as const;
