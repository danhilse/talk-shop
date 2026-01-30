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
  BounceIcon,
  Typewriter,
} from "@/components/motion";
import { DiscordIcon } from "@/components/icons";
import { displayHeadshots } from "@/lib/data";
import { ShopifyAnalyticsInterface, EcommerceGrowthChart, EcommerceStoreComparison } from "@/components/graphics";

export default function GrowthPage() {

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
      <section id="hero" className="relative min-h-screen overflow-hidden pt-16 md:pt-20">
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

        {/* Shopify Analytics Interface - emerges from right edge */}
        <div
          className="absolute top-32 -right-80 2xl:-right-56 hidden xl:block pointer-events-none"
          style={{
            transform: "perspective(1500px) rotateY(-15deg) rotateX(3deg) scale(1.08)",
            transformOrigin: "right center"
          }}
        >
          <Floating duration={12} distance={14}>
            <ShopifyAnalyticsInterface variant="hero" />
          </Floating>
        </div>

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

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-40">
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
                  {displayHeadshots.map((src, i) => (
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
                  <div className="font-semibold text-white">300+ merchants</div>
                  <div className="text-gray-500">scaling on Shopify</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile graphic - appears below content on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 xl:hidden pointer-events-none -mx-6 -mb-32"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)',
            }}
          >
            <div
              className="min-w-[1200px] ml-5"
              style={{
                transform: "perspective(1000px) rotateX(8deg) scale(0.65)",
                transformOrigin: "left top"
              }}
            >
              <ShopifyAnalyticsInterface />
            </div>
          </motion.div>
        </div>

        {/* Angled section divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
            <path d="M0 96V48L720 0L1440 48V96H0Z" fill="#161B22"/>
          </svg>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section id="learn-more" className="relative bg-slate py-32">
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
                className="absolute -top-8 -left-4 font-serif text-[120px] md:text-[200px] leading-none text-shopify/10 select-none"
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
                <Typewriter
                  delay={0.3}
                  speed={35}
                  segments={[
                    { text: "Rather than surface-level tips, this community centers on strategies that have been " },
                    { text: "tested and refined", className: "font-serif italic text-white font-normal" },
                    { text: " through real-world experimentation. We focus on what actually moves the needle for Shopify merchants at every stage of growth." },
                  ]}
                />
              </p>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Growth Topics Section */}
      <section id="growth-topics" className="relative bg-slate py-32">
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
                <ScaleOnHover scale={1.02} className="h-full">
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

                    {/* Decorative graphic for wide card */}
                    {index === 0 && (
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-3 hidden lg:block pointer-events-none">
                        <div
                          style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                          }}
                        >
                          <EcommerceGrowthChart
                            title="Conversion Rate"
                            subtitle="Monthly trend"
                            variant="area"
                            className="!w-[320px] scale-110"
                            data={[
                              { label: "Jan", value: 2.1 },
                              { label: "Feb", value: 2.4 },
                              { label: "Mar", value: 2.2 },
                              { label: "Apr", value: 2.8 },
                              { label: "May", value: 3.1 },
                              { label: "Jun", value: 3.4 },
                              { label: "Jul", value: 3.2 },
                              { label: "Aug", value: 3.8 },
                              { label: "Sep", value: 4.1 },
                              { label: "Oct", value: 4.5 },
                              { label: "Nov", value: 4.8 },
                              { label: "Dec", value: 5.2 },
                            ]}
                          />
                        </div>
                      </div>
                    )}

                    <div className={`relative ${index === 0 ? 'max-w-md' : ''}`}>
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
      <section id="shared-learning" className="relative bg-midnight py-32 overflow-hidden">
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
                  className="relative rounded-2xl overflow-hidden"
                >
                  <EcommerceStoreComparison
                    beforeTitle="Old Product Page"
                    afterTitle="Optimized Page"
                    beforeFeatures={[
                      "Basic product images",
                      "Simple description",
                      "No reviews shown",
                      "Generic CTA button",
                    ]}
                    afterFeatures={[
                      "High-quality gallery",
                      "Compelling copy",
                      "230+ Reviews displayed",
                      "Urgency-driven CTA",
                      "Trust badges",
                      "Risk-free guarantee",
                    ]}
                  />
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
                  <span className="block font-serif italic text-lime mt-1 md:mt-2">Faster Learning</span>
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
      <section id="experience" className="relative overflow-hidden bg-midnight">
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
              <h2 className="mb-10 text-3xl sm:text-4xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl">
                Built for Merchants{" "}
                <span className="block font-serif italic text-lime mt-1 md:mt-2">Serious About Growth</span>
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
                    300+ Merchants
                  </motion.div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative overflow-hidden py-32">
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
