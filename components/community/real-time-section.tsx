"use client";

import { motion } from "framer-motion";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { realTimeValueProps } from "@/lib/data";

export function RealTimeSection() {
  return (
    <section id="real-time" className="relative overflow-hidden bg-midnight">
      {/* Left half background */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-shopify/5 to-transparent"></div>

      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Left column - Content */}
          <SlideIn direction="left" className="relative px-6 py-16 md:py-24 lg:pr-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 md:mb-6 block">
              Why Real-Time
            </span>
            <h2 className="mb-6 md:mb-8 text-2xl sm:text-3xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl">
              Why Real-Time{" "}
              <span className="block font-serif italic text-lime mt-1 md:mt-2">Matters</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                Development work often requires quick feedback and iteration.
                Waiting days for a forum response can slow down progress and
                introduce unnecessary friction. A real-time Shopify developer
                community allows builders to ask questions when they are
                blocked and get answers from others who have already solved
                similar problems.
              </p>
              <p>
                This kind of collaboration helps developers move faster, avoid
                common mistakes, and{" "}
                <span className="text-white font-medium">
                  build better products on Shopify
                </span>
                .
              </p>
            </div>

            {/* Value props */}
            <StaggerContainer className="mt-8 md:mt-12 grid gap-4 md:gap-6" staggerDelay={0.15}>
              {realTimeValueProps.map((item) => (
                <StaggerItem key={item.label}>
                  <motion.div
                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="group flex items-start gap-4 p-4 -mx-4 rounded-xl transition-colors"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-shopify/10 text-2xl shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div className="text-lg font-bold text-white">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideIn>

          {/* Right column - Visual */}
          <SlideIn direction="right" delay={0.2} className="relative px-6 py-16 md:py-24 lg:pl-16 flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-l from-lime/5 to-transparent"></div>

            <div className="relative w-full max-w-md">
              {/* Image placeholder with decorative elements */}
              <div className="relative aspect-square">
                {/* Rotating border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-3xl border border-dashed border-shopify/30"
                />

                {/* Main card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute inset-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate to-carbon overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="font-mono text-6xl text-lime/20"
                      >
                        →
                      </motion.div>
                      <div className="mt-4 font-mono text-xs text-gray-600 tracking-widest">
                        [IMAGE PLACEHOLDER]
                      </div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 right-4 h-10 w-10 border-r-2 border-t-2 border-lime/40 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 h-10 w-10 border-l-2 border-b-2 border-lime/40 rounded-bl-lg"></div>
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-4 -right-4 rounded-full bg-shopify px-4 py-2 text-xs font-bold text-midnight shadow-lg"
                >
                  24/7 Active
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-4 -left-4 rounded-full bg-lime px-4 py-2 text-xs font-bold text-midnight shadow-lg"
                >
                  300+ Devs
                </motion.div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
