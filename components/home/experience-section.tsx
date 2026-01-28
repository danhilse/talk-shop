"use client";

import { motion } from "framer-motion";
import {
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  Floating,
  SlideIn,
} from "@/components/motion";
import { experienceStats, valueProps } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="relative bg-midnight py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <Floating duration={12} distance={25}>
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-shopify/5 blur-[180px]"></div>
      </Floating>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-shopify/20 to-transparent hidden lg:block origin-top"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SlideIn direction="left" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
              Our Experience
            </span>
            <h2 className="mb-8 text-2xl sm:text-3xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl">
              With 20 years in eCommerce, <span className="font-serif italic text-lime">We stand out</span>
            </h2>

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
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-shopify/10 to-transparent blur-xl"></div>
            <StaggerContainer className="relative grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {experienceStats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <ScaleOnHover scale={1.05}>
                    <div className="group rounded-2xl border border-white/10 bg-carbon/50 p-8 backdrop-blur-sm transition-all hover:border-shopify/30 hover:bg-carbon">
                      <motion.div
                        className={`text-4xl font-bold lg:text-5xl ${stat.color}`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
