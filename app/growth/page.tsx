"use client";

import Link from "next/link";
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
  BounceIcon,
} from "@/components/motion";

function DiscordIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

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

export default function GrowthPage() {
  const [randomHeadshots, setRandomHeadshots] = useState<string[]>([]);

  useEffect(() => {
    setRandomHeadshots(shuffleArray(headshots).slice(0, 5));
  }, []);

  const topics = [
    {
      title: "Conversion Rate Optimization",
      description:
        "Learn proven strategies to turn more visitors into customers through testing and iteration.",
      icon: "%",
      gradient: "from-shopify/20 to-lime/20",
    },
    {
      title: "Customer Retention",
      description:
        "Build loyalty programs, improve repeat purchase rates, and maximize customer lifetime value.",
      icon: "♻",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Paid Advertising",
      description:
        "Master Meta, Google, and TikTok ads with strategies that actually scale profitably.",
      icon: "📢",
      gradient: "from-violet-500/20 to-fuchsia-500/20",
    },
    {
      title: "Email & SMS Marketing",
      description:
        "Build flows and campaigns that drive revenue on autopilot with high engagement rates.",
      icon: "✉",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "Analytics & Data",
      description:
        "Make data-driven decisions with proper tracking, attribution, and reporting setups.",
      icon: "📊",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Funnel Optimization",
      description:
        "Optimize every step of your customer journey from awareness to purchase and beyond.",
      icon: "▽",
      gradient: "from-rose-500/20 to-pink-500/20",
    },
  ];

  const tags = [
    "Revenue Growth",
    "CRO Experts",
    "Paid Media",
    "Email Marketing",
    "Analytics",
  ];

  return (
    <div className="min-h-screen bg-midnight font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Animated gradient orbs */}
        <Floating duration={8} distance={20}>
          <div className="absolute top-20 left-[10%] h-[600px] w-[600px] rounded-full bg-shopify/8 blur-[180px]"></div>
        </Floating>
        <Floating duration={10} distance={15}>
          <div className="absolute bottom-0 right-[5%] h-[500px] w-[500px] rounded-full bg-lime/5 blur-[150px]"></div>
        </Floating>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-cyan-500/3 blur-[200px]"></div>

        {/* Grid pattern with fade */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight"></div>

        {/* Decorative brackets */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-40 left-[5%] hidden lg:block"
        >
          <span className="font-mono text-8xl font-bold text-shopify/5 select-none">↗</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-40 right-[5%] hidden lg:block"
        >
          <span className="font-mono text-8xl font-bold text-shopify/5 select-none">$</span>
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-40">
          <div className="max-w-4xl">
            {/* Eyebrow with animated border */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-10 inline-flex items-center gap-3 rounded-full border border-shopify/30 bg-shopify/5 px-5 py-2.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify"></span>
              </span>
              <span className="font-mono text-xs font-medium tracking-widest text-shopify uppercase">
                Growth Community
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-6xl font-bold tracking-tight text-white lg:text-8xl"
              >
                Shopify Growth
              </motion.span>
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                  className="font-serif text-7xl italic text-transparent bg-clip-text bg-gradient-to-r from-shopify via-lime to-shopify lg:text-9xl"
                >
                  Community
                </motion.span>
                {/* Underline accent */}
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 6 Q75 2, 150 6 T300 6"
                    stroke="url(#growth-gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#95BF47"/>
                      <stop offset="50%" stopColor="#C4E456"/>
                      <stop offset="100%" stopColor="#95BF47"/>
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-14 max-w-2xl text-xl leading-relaxed text-gray-400"
            >
              A Shopify Growth Community focused on{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-medium">real results</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-shopify/30 -z-0 origin-left rounded-full"
                />
              </span>
              . Built for merchants who are focused on increasing revenue, improving conversion rates, and scaling their Shopify businesses.
            </motion.p>

            {/* CTA group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
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

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="flex -space-x-3">
                  {randomHeadshots.map((src, i) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
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
                <div className="text-sm">
                  <div className="font-semibold text-white">500+ merchants</div>
                  <div className="text-gray-500">scaling on Shopify</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Angled section divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
            <path d="M0 96V48L720 0L1440 48V96H0Z" fill="#161B22"/>
          </svg>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="relative bg-slate py-32">
        <div className="absolute inset-0 diagonal-stripes opacity-50"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            {/* Left column - Quote mark */}
            <SlideIn direction="left" className="lg:col-span-4 relative">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute -top-8 -left-4 font-serif text-[200px] leading-none text-shopify/10 select-none"
              >
                &ldquo;
              </motion.span>
              <div className="relative">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4">
                  Beyond Surface-Level
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
              <p className="text-2xl leading-relaxed text-gray-300 lg:text-3xl font-light">
                Rather than surface-level tips, this community centers on strategies that have been{" "}
                <span className="font-serif italic text-white font-normal">tested and refined</span>{" "}
                through real-world experimentation. We focus on what actually moves the needle for Shopify merchants at every stage of growth.
              </p>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Growth Topics Section */}
      <section className="relative bg-slate py-32">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section header */}
          <FadeUp className="mb-20 flex items-end justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block"
              >
                Growth Topics
              </motion.span>
              <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                Topics That{" "}
                <span className="font-serif italic text-lime">Matter</span>
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
            {topics.map((topic, index) => (
              <StaggerItem
                key={topic.title}
                className={index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}
              >
                <ScaleOnHover scale={1.02}>
                  <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-carbon/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 h-full">
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${topic.gradient}`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
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
              These discussions help merchants understand what drives growth at{" "}
              <span className="text-shopify not-italic font-sans font-medium">different stages</span>{" "}
              of a Shopify business.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Shared Learning Section */}
      <section className="relative bg-midnight py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>

        {/* Decorative vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-shopify/20 to-transparent origin-top"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            {/* Left: Visual */}
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
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="font-mono text-7xl font-bold text-shopify/30"
                      >
                        📈
                      </motion.div>
                      <div className="mt-4 font-mono text-xs text-gray-600 tracking-widest">
                        SHARED EXPERIMENTS
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
              <div className="mb-8">
                <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4">
                  Learn Faster
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                  Shared Experiments,{" "}
                  <span className="block font-serif italic text-lime mt-2">Faster Learning</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                <p>
                  By sharing experiments, results, and lessons learned, merchants can learn faster and avoid repeating mistakes others have already made.
                </p>
                <p>
                  This collaborative approach to growth helps businesses{" "}
                  <span className="text-white font-medium">
                    scale more sustainably
                  </span>
                  .
                </p>
              </div>

              {/* Tags */}
              <StaggerContainer className="mt-12 flex flex-wrap gap-3" staggerDelay={0.08}>
                {tags.map((tag) => (
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

      {/* Who It's For Section */}
      <section className="relative overflow-hidden bg-midnight">
        {/* Left half background */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-shopify/5 to-transparent"></div>

        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2">
            {/* Left column - Content */}
            <SlideIn direction="left" className="relative px-6 py-32 lg:pr-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-6 block">
                Who It&apos;s For
              </span>
              <h2 className="mb-10 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                Built for Merchants{" "}
                <span className="block font-serif italic text-lime mt-2">Serious About Growth</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                <p>
                  This community is best suited for merchants who are actively testing, measuring, and refining their growth strategies.
                </p>
                <p>
                  It provides a space to discuss advanced topics with others who understand{" "}
                  <span className="text-white font-medium">
                    the realities of scaling
                  </span>
                  .
                </p>
              </div>

              {/* Value props */}
              <StaggerContainer className="mt-14 grid gap-6" staggerDelay={0.15}>
                {[
                  { label: "Data-Driven", desc: "Decisions backed by real metrics", icon: "📊" },
                  { label: "Test & Learn", desc: "Experiment-based growth approach", icon: "🧪" },
                  { label: "Scale Ready", desc: "Strategies for every growth stage", icon: "🚀" },
                ].map((item) => (
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
            <SlideIn direction="right" delay={0.2} className="relative px-6 py-32 lg:pl-16 flex items-center justify-center">
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
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="font-mono text-6xl text-lime/20"
                        >
                          ↗
                        </motion.div>
                        <div className="mt-4 font-mono text-xs text-gray-600 tracking-widest">
                          GROWTH MINDSET
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
                    Results-Focused
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute -bottom-4 -left-4 rounded-full bg-lime px-4 py-2 text-xs font-bold text-midnight shadow-lg"
                  >
                    500+ Merchants
                  </motion.div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-32">
        {/* Multi-layer background */}
        <div className="absolute inset-0 bg-gradient-to-br from-shopify via-shopify-dark to-shopify"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="grain absolute inset-0"></div>

        {/* Animated orbs */}
        <Floating duration={8} distance={30}>
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        </Floating>
        <Floating duration={10} distance={20}>
          <div className="absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-midnight/30 blur-3xl"></div>
        </Floating>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 h-64 w-[600px] rounded-full bg-lime/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Badge */}
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-10 inline-flex items-center gap-3 rounded-full bg-midnight/20 px-6 py-3 backdrop-blur-sm border border-white/10"
            >
              <DiscordIcon className="h-5 w-5 text-midnight" />
              <span className="font-mono text-sm font-medium text-midnight tracking-wide">
                Join on Discord
              </span>
            </motion.div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h2 className="mb-8 text-5xl font-bold tracking-tight text-midnight lg:text-7xl">
              Join the Shopify{" "}
              <span className="font-serif italic">Growth Community</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mx-auto mb-6 max-w-2xl text-xl leading-relaxed text-midnight/80">
              If you are focused on scaling your Shopify store and want to learn from others doing the same, the Growth Community offers a practical, collaborative environment.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="mx-auto mb-14 max-w-2xl text-lg leading-relaxed text-midnight/70">
              Join on Discord to participate in growth-focused discussions and shared learning.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <Magnetic>
              <motion.a
                href="https://discord.gg/talk-shop"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-midnight px-12 py-6 text-xl font-bold text-white transition-all duration-300 hover:bg-slate hover:shadow-2xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate to-carbon"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <DiscordIcon className="relative h-7 w-7" />
                <span className="relative">Join Discord Community</span>
                <motion.span
                  className="relative"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.a>
            </Magnetic>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
