"use client";

import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  BounceIcon,
} from "@/components/motion";
import { communityTopics } from "@/lib/data";

export function TopicsSection() {
  return (
    <section className="relative bg-slate py-24">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-midnight to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header with decorative line */}
        <FadeUp className="mb-16 flex items-end justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block"
            >
              Inside the Community
            </motion.span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              What Developers{" "}
              <span className="font-serif italic text-lime">Discuss</span>
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

        {/* Bento grid */}
        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {communityTopics.map((topic, index) => (
            <StaggerItem
              key={topic.title}
              className={`h-full ${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
            >
              <ScaleOnHover scale={1.02} className="h-full">
                <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-carbon/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 h-full">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-[100px]"></div>

                  <div className="relative">
                    {/* Icon */}
                    <BounceIcon>
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 font-mono text-2xl text-shopify transition-all duration-300 group-hover:bg-shopify/20 group-hover:border-shopify/30">
                        {topic.icon}
                      </div>
                    </BounceIcon>

                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-white">
                      {topic.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed transition-colors group-hover:text-gray-400">
                      {topic.description}
                    </p>
                  </div>

                  {/* Hover arrow indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-6 right-6"
                  >
                    <span className="text-shopify text-xl">→</span>
                  </motion.div>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom quote */}
        <FadeUp delay={0.3} className="mt-16 text-center">
          <p className="inline-block font-serif text-xl italic text-gray-500 px-8 py-4 border-l-2 border-r-2 border-shopify/30">
            These are not theoretical discussions, but practical conversations
            driven by <span className="text-shopify not-italic font-sans font-medium">real-world projects</span>.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
