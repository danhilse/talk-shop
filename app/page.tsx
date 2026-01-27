"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function Marquee({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden select-none">
      <motion.div
        className="flex shrink-0 items-center gap-8"
        animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
      <motion.div
        className="flex shrink-0 items-center gap-8"
        aria-hidden="true"
        animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
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

export default function Home() {
  const heroRef = useRef(null);
  const [randomHeadshots, setRandomHeadshots] = useState<string[]>([]);

  useEffect(() => {
    setRandomHeadshots(shuffleArray(headshots).slice(0, 5));
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const smoothY = useSpring(heroY, { stiffness: 100, damping: 30 });

  const features = [
    {
      icon: "{ }",
      title: "Shopify Collective",
      description:
        "Connect with Shopify builders, eComm architects, and digital nomads for raw insights on online business.",
      gradient: "from-violet-500/20 to-fuchsia-500/20",
    },
    {
      icon: "//",
      title: "Burn the Rulebook",
      description:
        "No blueprints here. We build, break, and rebuild. Share ideas and see them transformed by collective knowledge.",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: "⚡",
      title: "The Algorithm Never Sleeps",
      description:
        "Shopify evolves. Trends shift. Yesterday's success can become obsolete. We adapt—strategy, tech, and growth.",
      gradient: "from-shopify/20 to-lime/20",
    },
    {
      icon: "∞",
      title: "Scale Without Limits",
      description:
        "From first sale to enterprise. Learn what works at every stage and unlock growth strategies that compound.",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-midnight font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <Floating duration={8} distance={20}>
          <div className="absolute top-20 left-1/4 h-[600px] w-[600px] rounded-full bg-shopify/8 blur-[180px]"></div>
        </Floating>
        <Floating duration={10} distance={15}>
          <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-lime/5 blur-[150px]"></div>
        </Floating>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-cyan-500/3 blur-[200px]"></div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-40 left-[5%] hidden lg:block"
        >
          <span className="font-mono text-8xl font-bold text-shopify/5 select-none">{"{"}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-40 right-[5%] hidden lg:block"
        >
          <span className="font-mono text-8xl font-bold text-shopify/5 select-none">{"}"}</span>
        </motion.div>

        <motion.div
          style={{ y: smoothY }}
          className="relative mx-auto max-w-7xl px-6 py-24 lg:py-40"
        >
          <div className="flex flex-col items-center text-center">
            {/* Eyebrow badge */}
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
                Shopify Community
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-10 max-w-5xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-5xl font-bold tracking-tight text-white lg:text-7xl"
              >
                The Shopify Discord
              </motion.span>
              <span className="relative block mt-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                  className="font-serif text-6xl italic text-transparent bg-clip-text bg-gradient-to-r from-shopify via-lime to-shopify lg:text-8xl"
                >
                  Server
                </motion.span>
                {/* Underline accent */}
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 h-3 lg:w-44"
                  viewBox="0 0 150 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 6 Q37 2, 75 6 T150 6"
                    stroke="url(#hero-gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
              className="mb-14 max-w-2xl text-lg leading-relaxed text-gray-400 lg:text-xl"
            >
              Welcome to our Shopify Discord server. Connect with merchants, experts, and eCommerce pros to share insights, solve problems, and level up your store. Whether you&apos;re just starting or scaling to the moon—we&apos;re here as a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-medium">community</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-shopify/30 -z-0 origin-left rounded-full"
                />
              </span>{" "}
              to help.
            </motion.p>

            {/* CTA group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-6"
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
                <div className="text-sm text-left">
                  <div className="font-semibold text-white">500+ members</div>
                  <div className="text-gray-500">already joined</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Angled section divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
            <path d="M0 96V48L720 0L1440 48V96H0Z" fill="#161B22"/>
          </svg>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="relative overflow-hidden bg-slate py-6 border-y border-white/5">
        <Marquee>
          <span className="text-2xl font-bold text-white/10 lg:text-4xl">LET&apos;S TALK SHOP</span>
          <span className="text-shopify">•</span>
          <span className="text-2xl font-bold text-white/10 lg:text-4xl">LET&apos;S TALK SHOP</span>
          <span className="text-shopify">•</span>
          <span className="text-2xl font-bold text-white/10 lg:text-4xl">LET&apos;S TALK SHOP</span>
          <span className="text-shopify">•</span>
        </Marquee>
      </section>

      {/* Features Section */}
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
            {features.map((feature, index) => (
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

      {/* Dream Build Grow Marquee */}
      <section id="about-us" className="relative overflow-hidden bg-midnight py-8 border-y border-white/5">
        <Marquee reverse>
          <span className="font-serif text-3xl italic text-lime/30 lg:text-5xl">Dream it</span>
          <span className="text-white/20">•</span>
          <span className="font-serif text-3xl italic text-shopify/30 lg:text-5xl">Build it</span>
          <span className="text-white/20">•</span>
          <span className="font-serif text-3xl italic text-lime/30 lg:text-5xl">Grow it</span>
          <span className="text-white/20">•</span>
        </Marquee>
      </section>

      {/* Experience Section */}
      <section className="relative bg-midnight py-32 overflow-hidden">
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
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <SlideIn direction="left" delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
                Our Experience
              </span>
              <h2 className="mb-8 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                With 20 years in eCommerce,{" "}
                <span className="block font-serif italic text-lime mt-2">We stand out</span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-400 mb-8">
                We&apos;ve witnessed it all—platform changes, Shopify updates, trends shifting, and strategies rising and falling. This is battle-tested insight from years in the trenches. Join us to stay ahead of the chaos.
              </p>

              {/* Value props */}
              <StaggerContainer className="space-y-4" staggerDelay={0.15}>
                {[
                  { label: "Battle-tested", desc: "Two decades of eCommerce evolution" },
                  { label: "Always adapting", desc: "Staying ahead of platform changes" },
                  { label: "Community-driven", desc: "Real insights from real builders" },
                ].map((item) => (
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
                {[
                  { value: "20+", label: "Years Experience", color: "text-shopify" },
                  { value: "24/7", label: "Community Active", color: "text-lime" },
                  { value: "500+", label: "Members", color: "text-white" },
                  { value: "∞", label: "Ideas Shared", color: "text-shopify" },
                ].map((stat) => (
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

      {/* Join Discord CTA Section */}
      <section id="join-discord" className="relative overflow-hidden py-32">
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
            <h2 className="mb-8 text-4xl font-bold tracking-tight text-midnight lg:text-6xl">
              Join our Shopify{" "}
              <span className="font-serif italic">Discord Collective</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mb-10 space-y-4 text-lg">
              <p className="font-semibold text-midnight text-2xl">Free to Join</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-midnight/80">
                <span>A community built to test, learn, and grow</span>
                <span className="hidden sm:inline text-midnight/40">•</span>
                <span>We experiment. We adapt. We share.</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
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
                <span className="relative">Click to Join</span>
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
