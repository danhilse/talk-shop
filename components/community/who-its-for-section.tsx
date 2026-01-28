"use client";

import { motion } from "framer-motion";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { developerTags } from "@/lib/data";

function GlitchText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute left-[2px] top-0 -z-10 text-red-500/30" aria-hidden="true">{children}</span>
      <span className="absolute -left-[2px] top-0 -z-10 text-cyan-500/30" aria-hidden="true">{children}</span>
    </span>
  );
}

export function WhoItsForSection() {
  return (
    <section className="relative bg-midnight py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-shopify/20 to-transparent origin-top hidden lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Stacked visual placeholder */}
          <SlideIn direction="left" className="relative order-2 lg:order-1">
            {/* Background glow */}
            <div className="absolute -inset-10 bg-gradient-to-br from-shopify/10 via-transparent to-lime/10 blur-3xl"></div>

            {/* Stacked cards effect */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-shopify/5 border border-shopify/10"
              />
              <motion.div
                initial={{ opacity: 0, x: -10, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl bg-shopify/10 border border-shopify/20"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-carbon to-slate overflow-hidden"
              >
                {/* Code rain effect */}
                <div className="absolute inset-0 flex justify-around opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="font-mono text-xs text-shopify/60 writing-mode-vertical animate-marquee" style={{ animationDuration: `${15 + i * 3}s`, animationDelay: `${i * 0.5}s` }}>
                      {"0123456789ABCDEF".repeat(10).split("").join(" ")}
                    </div>
                  ))}
                </div>

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <GlitchText className="font-mono text-7xl font-bold text-shopify/30">
                      {"</>"}
                    </GlitchText>
                    <div className="mt-4 font-mono text-xs text-gray-600 tracking-widest">
                      [IMAGE PLACEHOLDER]
                    </div>
                  </div>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-6 left-6 h-12 w-12 border-l-2 border-t-2 border-shopify/40"></div>
                <div className="absolute bottom-6 right-6 h-12 w-12 border-r-2 border-b-2 border-lime/40"></div>
              </motion.div>
            </div>
          </SlideIn>

          {/* Right: Content */}
          <SlideIn direction="right" delay={0.2} className="order-1 lg:order-2 lg:pl-12">
            <div className="mb-6 md:mb-8">
              <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-3 md:mb-4">
                Who It&apos;s For
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
                Who This Community{" "}
                <span className="block font-serif italic text-lime mt-2">Is For</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                This community is designed for Shopify app developers, theme
                developers, and engineers working with Shopify APIs. It also
                welcomes developers building headless Shopify storefronts,
                experimenting with Hydrogen, or extending checkout and admin
                functionality.
              </p>
              <p>
                If you spend your time writing code, debugging issues,
                reviewing pull requests, or thinking about architecture
                decisions on Shopify,{" "}
                <span className="text-white font-medium">
                  this community is designed for you
                </span>
                .
              </p>
            </div>

            {/* Tags with staggered animation */}
            <StaggerContainer className="mt-8 md:mt-12 flex flex-wrap gap-2 md:gap-3" staggerDelay={0.08}>
              {developerTags.map((tag) => (
                <StaggerItem key={tag}>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative cursor-default overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-shopify/50 hover:text-white hover:bg-shopify/10 inline-block"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-shopify/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></span>
                    <span className="relative">{tag}</span>
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
