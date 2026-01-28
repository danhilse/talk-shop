"use client";

import { motion, useInView, Variants, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { ReactNode, useRef, useMemo } from "react";

// ============================================================================
// Hoisted transition constants - prevents object recreation on every render
// ============================================================================

const EASE_OUT_CUBIC = [0.25, 0.4, 0.25, 1] as const;

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 17,
} as const;

const springTransitionSoft = {
  type: "spring",
  stiffness: 200,
  damping: 15,
} as const;

const easeOutTransition = {
  duration: 0.8,
  ease: "easeOut",
} as const;

const infiniteEaseTransition = {
  repeat: Infinity,
  ease: "easeInOut",
} as const;

const linearInfiniteTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "linear",
} as const;

const bounceHoverTransition = {
  duration: 0.4,
  ease: "easeInOut",
} as const;

// Animation state objects
const fadeUpHidden = { opacity: 0, y: 30 } as const;
const fadeUpVisible = { opacity: 1, y: 0 } as const;
const scaleHidden = { opacity: 0, scale: 0.5 } as const;
const scaleVisible = { opacity: 1, scale: 1 } as const;

// ============================================================================
// Components
// ============================================================================

// Fade up animation for sections and cards
interface FadeUpProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
  ...props
}: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const transition = useMemo(
    () => ({
      duration,
      delay,
      ease: EASE_OUT_CUBIC,
    }),
    [duration, delay]
  );

  return (
    <motion.div
      ref={ref}
      initial={fadeUpHidden}
      animate={isInView ? fadeUpVisible : fadeUpHidden}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation wrapper
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_CUBIC,
    },
  },
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// Scale on hover
interface ScaleOnHoverProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  scale?: number;
  className?: string;
}

const tapScale = { scale: 0.98 } as const;

export function ScaleOnHover({
  children,
  scale = 1.03,
  className,
  ...props
}: ScaleOnHoverProps) {
  const hoverScale = useMemo(() => ({ scale }), [scale]);

  return (
    <motion.div
      whileHover={hoverScale}
      whileTap={tapScale}
      transition={springTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Hero text reveal animation
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_CUBIC,
    },
  },
};

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = children.split(" ");

  const staggerTransition = useMemo(
    () => ({ staggerChildren: 0.08, delayChildren: delay }),
    [delay]
  );

  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={staggerTransition}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] last:mr-0"
          variants={textRevealVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Animated counter (simplified)
interface CounterProps {
  value: string;
  className?: string;
}

export function Counter({ value, className }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={scaleHidden}
      animate={isInView ? scaleVisible : scaleHidden}
      transition={springTransitionSoft}
    >
      {value}
    </motion.span>
  );
}

// Magnetic effect for buttons
interface MagneticProps {
  children: ReactNode;
  className?: string;
}

const magneticStyle = { transition: "transform 0.2s ease-out" } as const;

export function Magnetic({ children, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;
    ref.current!.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    ref.current!.style.transform = "translate(0, 0)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={magneticStyle}
    >
      {children}
    </motion.div>
  );
}

// Floating animation
interface FloatingProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export function Floating({
  children,
  className,
  duration = 6,
  distance = 10,
}: FloatingProps) {
  const animate = useMemo(
    () => ({
      y: [-distance / 2, distance / 2, -distance / 2],
    }),
    [distance]
  );

  const transition = useMemo(
    () => ({
      duration,
      ...infiniteEaseTransition,
    }),
    [duration]
  );

  return (
    <motion.div className={className} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
}

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export function Parallax({ children, className, offset = 50 }: ParallaxProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const initial = useMemo(() => ({ y: offset }), [offset]);
  const animateHidden = useMemo(() => ({ y: offset }), [offset]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? fadeUpVisible : animateHidden}
      transition={easeOutTransition}
    >
      {children}
    </motion.div>
  );
}

// Glow pulse effect
interface GlowPulseProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowPulse({
  children,
  className,
  glowColor = "rgba(149, 191, 71, 0.4)",
}: GlowPulseProps) {
  const animate = useMemo(
    () => ({
      boxShadow: [
        `0 0 20px ${glowColor}`,
        `0 0 60px ${glowColor}`,
        `0 0 20px ${glowColor}`,
      ],
    }),
    [glowColor]
  );

  const transition = useMemo(
    () => ({
      duration: 2,
      ...infiniteEaseTransition,
    }),
    []
  );

  return (
    <motion.div className={className} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
}

// Slide in from direction
interface SlideInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}

const directionOffsets = {
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  up: { x: 0, y: 50 },
  down: { x: 0, y: -50 },
} as const;

export function SlideIn({
  children,
  direction = "up",
  delay = 0,
  className,
  ...props
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const offset = directionOffsets[direction];

  const initial = useMemo(() => ({ opacity: 0, ...offset }), [offset]);
  const animateHidden = useMemo(() => ({ opacity: 0, ...offset }), [offset]);
  const transition = useMemo(
    () => ({
      duration: 0.6,
      delay,
      ease: EASE_OUT_CUBIC,
    }),
    [delay]
  );

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : animateHidden}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Icon bounce on hover
interface BounceIconProps {
  children: ReactNode;
  className?: string;
}

const bounceHover = {
  y: [0, -8, 0] as number[],
  transition: bounceHoverTransition,
};

export function BounceIcon({ children, className }: BounceIconProps) {
  return (
    <motion.div className={className} whileHover={bounceHover}>
      {children}
    </motion.div>
  );
}

// Animated gradient border
interface GradientBorderProps {
  children: ReactNode;
  className?: string;
}

const gradientInitial = { "--gradient-angle": "0deg" } as Record<string, string>;
const gradientAnimate = { "--gradient-angle": "360deg" } as Record<string, string>;

export function GradientBorder({ children, className }: GradientBorderProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={gradientInitial}
      animate={gradientAnimate}
      transition={linearInfiniteTransition}
    >
      {children}
    </motion.div>
  );
}
