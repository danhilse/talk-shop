"use client";

import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  BounceIcon,
} from "@/components/motion";
import { homeFeatures } from "@/lib/data";

export function FeaturesSection() {
  return (
    <section id="learn-more" className="relative bg-slate py-32">
      <div className="absolute inset-0 diagonal-stripes opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <FadeUp className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block"
            >
              Why Join Us
            </motion.span>
            <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Enter the Shopify{" "}
              <span className="font-serif italic text-lime">Mindstream</span>
            </h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block origin-left"
          >
            <div className="h-px w-64 bg-gradient-to-r from-shopify/50 to-transparent"></div>
          </motion.div>
        </FadeUp>

        {/* Feature cards - Bento grid */}
        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr" staggerDelay={0.1}>
          {homeFeatures.map((feature, index) => (
            <StaggerItem
              key={feature.title}
              className={`h-full ${index === 0 ? 'lg:col-span-2' : ''} ${index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <ScaleOnHover scale={1.02} className="h-full">
                <div
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-carbon/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 h-full"
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <BounceIcon>
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 font-mono text-2xl text-shopify transition-all duration-300 group-hover:bg-shopify/20 group-hover:border-shopify/30">
                        {feature.icon}
                      </div>
                    </BounceIcon>

                    <h3 className="mb-4 text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
