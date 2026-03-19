// Shared Framer Motion variants — used across all homepage sections

export const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

/** Simple fade + rise */
export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/** Text line reveal with skew — needs overflow:hidden on wrapper */
export const skewReveal = {
  hidden: { opacity: 0, y: "105%", skewX: -1 },
  show: {
    opacity: 1,
    y: "0%",
    skewX: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

/** Scale-in for icons / small elements */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

/** Slide in from right — fast start, decelerates to rest */
export const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

export const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

/** Stagger wrapper — place on parent, children use any variant */
export function stagger(delayChildren = 0, staggerChildren = 0.12) {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}
