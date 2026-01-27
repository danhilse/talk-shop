"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  Magnetic,
  Floating,
  SlideIn,
} from "@/components/motion";
import { DiscordIcon } from "@/components/icons";

const headshots = [
  "danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_0.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_1.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_2.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_3.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_0.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_1.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_2.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_3.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_0.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_1.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_2.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_3.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_0.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_1.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_2.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_3.png",
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function EntrepreneursPage() {
  const [randomHeadshots, setRandomHeadshots] = useState<string[]>([]);

  useEffect(() => {
    setRandomHeadshots(shuffleArray(headshots).slice(0, 5));
  }, []);

  return (
    <div className="min-h-screen bg-midnight font-sans overflow-x-hidden">
      {/* Hero Section - Centered, editorial style */}
      <section className="relative min-h-screen overflow-hidden pt-20 flex items-center">
        {/* Subtle gradient orbs */}
        <Floating duration={12} distance={15}>
          <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-shopify/5 blur-[200px]"></div>
        </Floating>
        <Floating duration={15} distance={20}>
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-lime/3 blur-[180px]"></div>
        </Floating>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight"></div>

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="font-mono text-sm tracking-widest text-shopify uppercase">
              A Community for Founders
            </span>
          </motion.div>

          {/* Main heading - Large, centered */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8"
          >
            <span className="block text-6xl font-bold tracking-tight text-white lg:text-8xl">
              Shopify
            </span>
            <span className="block font-serif text-6xl italic text-transparent bg-clip-text bg-gradient-to-r from-shopify to-lime lg:text-8xl mt-2">
              Entrepreneurs
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-400"
          >
            Building a Shopify business can be isolating, especially for solo founders and small teams.
            This community exists to bring founders together in a shared space for learning and support.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <Magnetic>
              <motion.a
                href="https://discord.gg/talk-shop"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-shopify to-shopify-dark px-10 py-5 text-lg font-bold text-midnight transition-all hover:shadow-2xl hover:shadow-shopify/25"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-lime to-shopify"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <DiscordIcon className="relative h-6 w-6" />
                <span className="relative">Join the Community</span>
                <motion.span
                  className="relative"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.a>
            </Magnetic>

            {/* Headshots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {randomHeadshots.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-midnight ring-2 ring-shopify/10"
                    style={{ zIndex: 5 - i }}
                  >
                    <Image
                      src={`/headshots/${src}`}
                      alt="Community member"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                Join founders building on Shopify
              </span>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* The Journey - Horizontal timeline/narrative style */}
      <section className="relative bg-slate py-32 overflow-hidden">
        <div className="absolute inset-0 diagonal-stripes opacity-30"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="text-center mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
              The Founder Journey
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
              From Idea to <span className="font-serif italic text-lime">Sustainable Business</span>
            </h2>
          </FadeUp>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-shopify/30 to-transparent origin-left hidden lg:block"
            />

            <StaggerContainer className="grid gap-8 lg:grid-cols-4" staggerDelay={0.15}>
              {[
                { step: "01", title: "Launch", desc: "Navigate the complexities of getting your store live and ready for customers." },
                { step: "02", title: "Validate", desc: "Test ideas and validate market fit before investing significant resources." },
                { step: "03", title: "Grow", desc: "Develop strategies that balance profitability with sustainable growth." },
                { step: "04", title: "Scale", desc: "Build systems and processes that allow your business to thrive long-term." },
              ].map((item) => (
                <StaggerItem key={item.step}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative text-center lg:text-left"
                  >
                    {/* Step number */}
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-shopify/30 bg-midnight mb-6 mx-auto lg:mx-0">
                      <span className="font-mono text-sm text-shopify">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Bottom note */}
          <FadeUp delay={0.4} className="mt-16 text-center">
            <p className="text-lg text-gray-400">
              The emphasis is on building <span className="text-white font-medium">sustainable businesses</span> rather than chasing short-term wins.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Why Community - Split testimonial style */}
      <section className="relative bg-midnight py-32">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left - Large quote */}
            <SlideIn direction="left" className="relative">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -top-8 -left-4 font-serif text-[180px] leading-none text-shopify/5 select-none"
              >
                &ldquo;
              </motion.span>
              <div className="relative">
                <p className="text-3xl font-light leading-relaxed text-white lg:text-4xl">
                  Sharing experiences with other founders helps reduce uncertainty and improves{" "}
                  <span className="font-serif italic text-lime">decision-making</span>.
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-8 h-1 w-24 bg-gradient-to-r from-shopify to-lime rounded-full origin-left"
                />
              </div>
            </SlideIn>

            {/* Right - Benefits list */}
            <SlideIn direction="right" delay={0.2} className="flex items-center">
              <div className="space-y-8">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-shopify">
                  Why Community Matters
                </div>
                <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                  {[
                    "Learn from founders who have faced similar challenges",
                    "Gain confidence and clarity as you grow your business",
                    "Make better decisions with diverse perspectives",
                    "Reduce the isolation of building alone",
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-shopify/10 mt-0.5">
                          <svg className="h-3 w-3 text-shopify" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-300">{item}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Building Together - Card mosaic layout */}
      <section className="relative bg-slate py-32 overflow-hidden">
        <div className="absolute inset-0 diagonal-stripes opacity-30"></div>

        <Floating duration={10} distance={20}>
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-lime/5 blur-[150px]"></div>
        </Floating>

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
              Building Together
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl max-w-2xl">
              Building Alongside <span className="font-serif italic text-lime">Other Founders</span>
            </h2>
          </FadeUp>

          {/* Mosaic grid - asymmetric */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Large card */}
            <SlideIn direction="left" className="lg:col-span-2 lg:row-span-2">
              <ScaleOnHover scale={1.02}>
                <div className="h-full rounded-3xl border border-white/10 bg-carbon/50 p-10 backdrop-blur-sm flex flex-col">
                  <div>
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-shopify/10 text-2xl">
                      💬
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Open Discussion</h3>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                      This community encourages open discussion, accountability, and long-term relationships between members.
                      Share challenges and wins without judgment in a supportive environment.
                    </p>
                  </div>

                  {/* Decorative graphic element to fill remaining height */}
                  <div className="mt-auto pt-10 flex-1 flex items-end">
                    <div className="w-full relative">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-px w-full bg-gradient-to-r from-shopify/30 to-transparent origin-left mb-8"
                      />
                      <div className="flex gap-3">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                            className="flex-1 h-16 rounded-xl bg-gradient-to-b from-shopify/10 to-transparent"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleOnHover>
            </SlideIn>

            {/* Stacked cards */}
            <SlideIn direction="right" delay={0.1}>
              <ScaleOnHover scale={1.03}>
                <div className="rounded-3xl border border-white/10 bg-carbon/50 p-8 backdrop-blur-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 text-xl">
                    🤝
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Accountability</h3>
                  <p className="text-gray-500">Stay motivated with peer support and regular check-ins from fellow founders.</p>
                </div>
              </ScaleOnHover>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <ScaleOnHover scale={1.03}>
                <div className="rounded-3xl border border-white/10 bg-carbon/50 p-8 backdrop-blur-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-shopify/10 text-xl">
                    🌱
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Long-term Relationships</h3>
                  <p className="text-gray-500">Build lasting connections that help you navigate challenges and celebrate progress together.</p>
                </div>
              </ScaleOnHover>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal, focused */}
      <section className="relative overflow-hidden py-32 bg-midnight">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        {/* Centered glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-shopify/5 blur-[200px]"></div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-6 block">
              Ready to Join?
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Connect with Shopify{" "}
              <span className="font-serif italic text-lime">Entrepreneurs</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
              If you are building a Shopify business and want to connect with other founders,
              join a supportive community focused on sustainable growth.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <Magnetic>
              <motion.a
                href="https://discord.gg/talk-shop"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-shopify to-lime px-12 py-6 text-xl font-bold text-midnight transition-all duration-300 hover:shadow-2xl hover:shadow-shopify/25"
              >
                <DiscordIcon className="h-7 w-7" />
                <span>Join on Discord</span>
                <motion.span
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.a>
            </Magnetic>
          </FadeUp>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex justify-center gap-2"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                className="h-1 w-1 rounded-full bg-shopify"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
