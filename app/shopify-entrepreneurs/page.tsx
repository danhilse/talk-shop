"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  Magnetic,
  Floating,
  SlideIn,
  Typewriter,
} from "@/components/motion";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { DiscordIcon } from "@/components/icons";
import { DiscordSingleMessage } from "@/components/graphics/discord/message-thread";
import { displayHeadshots } from "@/lib/data";

const journeySteps = [
  { step: "01", title: "Launch", desc: "Navigate the complexities of getting your store live and ready for customers." },
  { step: "02", title: "Validate", desc: "Test ideas and validate market fit before investing significant resources." },
  { step: "03", title: "Grow", desc: "Develop strategies that balance profitability with sustainable growth." },
  { step: "04", title: "Scale", desc: "Build systems and processes that allow your business to thrive long-term." },
];

function FounderJourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  // Base delay for when animations start after coming into view
  const baseDelay = 0.2;
  // How long the line takes to draw
  const lineDuration = 1.2;

  return (
    <section id="learn-more" className="relative bg-slate py-32 overflow-hidden">
      <div className="absolute inset-0 diagonal-stripes opacity-30"></div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <FadeUp className="text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
            The Founder Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl">
            From Idea to <span className="font-serif italic text-lime">Sustainable Business</span>
          </h2>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - draws from left to right */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{
              scaleX: { duration: lineDuration, ease: [0.25, 0.1, 0.25, 1], delay: baseDelay },
              opacity: { duration: 0.3, delay: baseDelay },
            }}
            className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-shopify/40 to-transparent origin-left hidden lg:block"
          />

          {/* Animated glow that travels along the line */}
          <motion.div
            initial={{ left: "0%", opacity: 0 }}
            animate={isInView ? { left: "100%", opacity: [0, 1, 1, 0] } : { left: "0%", opacity: 0 }}
            transition={{
              duration: lineDuration,
              ease: "linear",
              delay: baseDelay,
            }}
            className="absolute top-8 -translate-y-1/2 w-16 h-4 bg-shopify/60 blur-md rounded-full hidden lg:block"
            style={{ marginLeft: "-2rem" }}
          />

          <div className="grid gap-8 lg:grid-cols-4">
            {journeySteps.map((item, index) => {
              // Calculate when this step should animate based on line progress
              const stepDelay = prefersReducedMotion
                ? 0
                : baseDelay + (lineDuration * (index + 0.5)) / 4;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: stepDelay }}
                  whileHover={{ y: -5 }}
                  className="relative text-center lg:text-left"
                >
                  {/* Step number circle with pop-in effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      delay: stepDelay,
                    }}
                    className="relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-shopify/30 bg-midnight mb-6 mx-auto lg:mx-0"
                  >
                    {/* Glow ring on pop */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: [0.8, 1.5, 1.2], opacity: [0, 0.6, 0] }
                          : { scale: 0.8, opacity: 0 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: stepDelay,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-full border-2 border-shopify/50"
                    />
                    <span className="font-mono text-sm text-shopify">{item.step}</span>
                  </motion.div>

                  {/* Title with staggered fade */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.4,
                      delay: stepDelay + 0.15,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="text-xl font-bold text-white mb-3"
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description with staggered fade */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.4,
                      delay: stepDelay + 0.25,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="text-gray-500 leading-relaxed"
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: baseDelay + lineDuration + 0.3,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400">
            The emphasis is on building <span className="text-white font-medium">sustainable businesses</span> rather than chasing short-term wins.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function EntrepreneursPage() {

  return (
    <div className="min-h-screen bg-midnight font-sans overflow-x-hidden">
      {/* Hero Section - Centered, editorial style */}
      <section id="hero" className="relative min-h-screen overflow-hidden pt-8 md:pt-12 flex items-center">
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

        <div className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16 md:py-24 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
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
            className="mb-6 md:mb-8"
          >
            <span className="block text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
              Shopify
            </span>
            <span className="block font-serif text-5xl italic text-transparent bg-clip-text bg-gradient-to-r from-shopify to-lime sm:text-6xl lg:text-8xl mt-2">
              Entrepreneurs
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-8 md:mb-12 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-400"
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
                {displayHeadshots.map((src, i) => (
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
                      sizes="40px"
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
      <FounderJourneySection />

      {/* Why Community - Split testimonial style */}
      <section id="experience" className="relative bg-midnight py-32">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left - Large quote */}
            <SlideIn direction="left" className="relative">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -top-8 -left-4 font-serif text-[120px] md:text-[180px] leading-none text-shopify/5 select-none"
              >
                &ldquo;
              </motion.span>
              <div className="relative">
                <p className="text-3xl font-light leading-snug text-white lg:text-4xl">
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
      <section id="building-together" className="relative bg-slate py-32 overflow-hidden">
        <div className="absolute inset-0 diagonal-stripes opacity-30"></div>

        <Floating duration={10} distance={20}>
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-lime/5 blur-[150px]"></div>
        </Floating>

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
              Building Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl max-w-2xl">
              Building Alongside <span className="font-serif italic text-lime">Other Founders</span>
            </h2>
          </FadeUp>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Large card */}
            <SlideIn direction="left" className="lg:flex-[2]">
              <ScaleOnHover scale={1.02} className="h-full">
                <div className="h-full rounded-3xl border border-white/10 bg-carbon/50 p-8 lg:p-10 backdrop-blur-sm flex flex-col overflow-hidden">
                  <div className="shrink-0">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-shopify/10 text-xl">
                      💬
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Open Discussion</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Share challenges and wins without judgment in a supportive environment.
                    </p>
                  </div>

                  {/* Discord message cards - hidden on mobile */}
                  <div className="mt-6 flex-1 hidden md:flex flex-col gap-3 overflow-hidden min-h-0">
                    {/* Top row */}
                    <div className="flex gap-3 shrink-0">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 -rotate-1"
                      >
                        <DiscordSingleMessage
                          username="sarah_founder"
                          userColor="#95BF47"
                          message="Finally hit profitability after 8 months. This community kept me going!"
                          emoji="🎉"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex-1 rotate-1"
                      >
                        <DiscordSingleMessage
                          username="mike_builds"
                          userColor="#C4E456"
                          message="The feedback here saved me weeks of debugging"
                          emoji="🙏"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex-1 -rotate-0.5"
                      >
                        <DiscordSingleMessage
                          username="jenna_store"
                          userColor="#5865F2"
                          message="Just launched my second store thanks to the advice here!"
                          emoji="💚"
                        />
                      </motion.div>
                    </div>
                    {/* Bottom row */}
                    <div className="flex gap-3 shrink-0">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        className="flex-1 rotate-0.5"
                      >
                        <DiscordSingleMessage
                          username="lily_brand"
                          userColor="#FFB347"
                          message="Found my accountability partner here!"
                          emoji="✨"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex-1 -rotate-1"
                      >
                        <DiscordSingleMessage
                          username="alex_ecom"
                          userColor="#FF6B6B"
                          message="Best business decision I made this year"
                          emoji="🚀"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="flex-1 rotate-1"
                      >
                        <DiscordSingleMessage
                          username="emma_shop"
                          userColor="#E91E63"
                          message="Real talk from real founders"
                          emoji="💯"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </ScaleOnHover>
            </SlideIn>

            {/* Stacked cards */}
            <div className="lg:flex-1 flex flex-col gap-6">
              <SlideIn direction="right" delay={0.1} className="flex-1">
                <ScaleOnHover scale={1.03} className="h-full">
                  <div className="h-full rounded-3xl border border-white/10 bg-carbon/50 p-8 backdrop-blur-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 text-xl">
                      🤝
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Accountability</h3>
                    <p className="text-gray-500">Stay motivated with peer support and regular check-ins from fellow founders.</p>
                  </div>
                </ScaleOnHover>
              </SlideIn>

              <SlideIn direction="right" delay={0.2} className="flex-1">
                <ScaleOnHover scale={1.03} className="h-full">
                  <div className="h-full rounded-3xl border border-white/10 bg-carbon/50 p-8 backdrop-blur-sm">
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
        </div>
      </section>

      {/* CTA Section - Minimal, focused */}
      <section id="cta" className="relative overflow-hidden py-32 bg-midnight">
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
