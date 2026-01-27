"use client";

import { motion, useInView, Variants, HTMLMotionProps } from "framer-motion";
import { ReactNode, useRef } from "react";

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
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
      ease: [0.25, 0.4, 0.25, 1],
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

export function ScaleOnHover({
  children,
  scale = 1.03,
  className,
  ...props
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
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

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = children.split(" ");

  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] last:mr-0"
          variants={{
            hidden: { opacity: 0, y: 20, rotateX: -90 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
              },
            },
          }}
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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
      style={{ transition: "transform 0.2s ease-out" }}
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
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
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

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: offset }}
      animate={isInView ? { y: 0 } : { y: offset }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          `0 0 20px ${glowColor}`,
          `0 0 60px ${glowColor}`,
          `0 0 20px ${glowColor}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
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

export function SlideIn({
  children,
  direction = "up",
  delay = 0,
  className,
  ...props
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionOffset = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset[direction] }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
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

export function BounceIcon({ children, className }: BounceIconProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: [0, -8, 0],
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated gradient border
interface GradientBorderProps {
  children: ReactNode;
  className?: string;
}

export function GradientBorder({ children, className }: GradientBorderProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ "--gradient-angle": "0deg" } as Record<string, string>}
      animate={{ "--gradient-angle": "360deg" } as Record<string, string>}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
