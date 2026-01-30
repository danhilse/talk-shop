"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  Floating,
  SlideIn,
} from "@/components/motion";
import { valueProps } from "@/lib/data";
import { ConcentricCircles } from "@/components/graphics";

// Animated count-up component
function CountUpStat({
  value,
  suffix = "",
  duration = 2,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, count, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

// Animated 24/7
function TwentyFourSevenStat({ delay = 0 }: { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      {/* 24 */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        24
      </motion.span>

      {/* Animated slash/divider */}
      <motion.span
        initial={{ opacity: 0, scaleY: 0 }}
        animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ delay: delay + 0.3, duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="origin-bottom"
      >
        /
      </motion.span>

      {/* 7 */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.5, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        7
      </motion.span>
    </div>
  );
}

// Animated infinity symbol
function InfinityStat({ delay = 0 }: { delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{
        delay: delay + 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="inline-block text-5xl lg:text-6xl"
    >
      ∞
    </motion.span>
  );
}

// Enhanced stat card that picks the right animation
function AnimatedStatCard({
  stat,
  index
}: {
  stat: { value: string; label: string; color: string };
  index: number;
}) {
  const delay = index * 0.15;

  const renderValue = () => {
    // Years Experience - count up to 20
    if (stat.value === "20+") {
      return <CountUpStat value={20} suffix="+" delay={delay} />;
    }
    // Members - count up to 300
    if (stat.value === "300+") {
      return <CountUpStat value={300} suffix="+" delay={delay} />;
    }
    // 24/7 - animated reveal
    if (stat.value === "24/7") {
      return <TwentyFourSevenStat delay={delay} />;
    }
    // Infinity - draw animation
    if (stat.value === "∞") {
      return <InfinityStat delay={delay} />;
    }
    // Fallback
    return stat.value;
  };

  return (
    <ScaleOnHover scale={1.05} className="h-full">
      <div className="group rounded-2xl border border-white/10 bg-carbon/50 p-8 backdrop-blur-sm transition-all hover:border-shopify/30 hover:bg-carbon h-full">
        <motion.div
          className={`text-4xl font-bold lg:text-5xl ${stat.color}`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {renderValue()}
        </motion.div>
        <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
      </div>
    </ScaleOnHover>
  );
}

// Stats data (moved here since we need custom rendering)
const experienceStats = [
  { value: "20+", label: "Years Experience", color: "text-shopify" },
  { value: "24/7", label: "Community Active", color: "text-lime" },
  { value: "300+", label: "Members", color: "text-white" },
  { value: "∞", label: "Ideas Shared", color: "text-shopify" },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-midnight py-16 md:py-24 overflow-hidden" aria-labelledby="experience-heading">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true"></div>
      <Floating duration={12} distance={25}>
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-shopify/5 blur-[180px]" aria-hidden="true"></div>
      </Floating>

      {/* Right-side decorative pattern - flows to edge */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30 pointer-events-none" aria-hidden="true">
        <ConcentricCircles className="w-full h-full" rings={8} animated={false} />
      </div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-shopify/20 to-transparent hidden lg:block origin-top"
        aria-hidden="true"
      />

      <article className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SlideIn direction="left" delay={0.1}>
            <header>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block" aria-hidden="true">
                Our Experience
              </span>
              <h2 id="experience-heading" className="mb-8 text-3xl sm:text-4xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl">
                With 20 years in eCommerce, <span className="font-serif italic text-lime">We stand out</span>
              </h2>
            </header>

            <p className="text-lg leading-relaxed text-gray-400 mb-8">
              We&apos;ve witnessed it all—platform changes, Shopify updates, trends shifting, and strategies rising and falling. This is battle-tested insight from years in the trenches. Join us to stay ahead of the chaos.
            </p>

            {/* Value props */}
            <StaggerContainer className="space-y-4" staggerDelay={0.15}>
              {valueProps.map((item) => (
                <StaggerItem key={item.label}>
                  <motion.div
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-shopify/20 text-shopify shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideIn>

          {/* Stats grid */}
          <SlideIn direction="right" delay={0.2} className="relative lg:pl-12">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-shopify/10 to-transparent blur-xl" aria-hidden="true"></div>
            <StaggerContainer className="relative grid grid-cols-2 gap-4 auto-rows-fr" staggerDelay={0.1}>
              {experienceStats.map((stat, index) => (
                <StaggerItem key={stat.label} className="h-full">
                  <AnimatedStatCard stat={stat} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideIn>
        </div>
      </article>
    </section>
  );
}
