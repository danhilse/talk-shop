"use client";

import { motion } from "framer-motion";
import { SlideIn } from "@/components/motion";

export function ProblemSection() {
  return (
    <section className="relative bg-slate py-16 md:py-24">
      <div className="absolute inset-0 diagonal-stripes opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left column - Big quote mark */}
          <SlideIn direction="left" className="lg:col-span-4 relative">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute -top-8 -left-4 font-serif text-[120px] md:text-[200px] leading-none text-shopify/10 select-none"
            >
              &ldquo;
            </motion.span>
            <div className="relative">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4">
                The Problem
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 w-20 bg-gradient-to-r from-shopify to-lime rounded-full origin-left"
              />
            </div>
          </SlideIn>

          {/* Right column - Content */}
          <SlideIn direction="right" delay={0.2} className="lg:col-span-8">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 lg:text-3xl font-light">
              Many Shopify developers struggle to find a place where technical
              conversations can happen{" "}
              <span className="font-serif italic text-white font-normal">naturally</span>.
              Forums tend to be slow, fragmented, and overly generic. This
              community fills that gap by creating a space where Shopify
              developers can talk through real problems, share implementation
              details, and learn from others building at the same level.
            </p>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
