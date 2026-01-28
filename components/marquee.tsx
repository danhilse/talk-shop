"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const marqueeTransition = {
  x: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 25,
    ease: "linear",
  },
} as const;

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
}

export function Marquee({ children, reverse = false }: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const animateX = reverse ? ["0%", "-100%"] : ["-100%", "0%"];

  // For reduced motion, show static content
  if (prefersReducedMotion) {
    return (
      <div className="flex overflow-hidden select-none gap-8 justify-center">
        <div className="flex shrink-0 items-center gap-8">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex overflow-hidden select-none gap-8">
      <motion.div
        className="flex shrink-0 items-center gap-8"
        animate={{ x: animateX }}
        transition={marqueeTransition}
      >
        {children}
        {children}
      </motion.div>
      <motion.div
        className="flex shrink-0 items-center gap-8"
        aria-hidden="true"
        animate={{ x: animateX }}
        transition={marqueeTransition}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
