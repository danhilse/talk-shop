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
import { ShopifyAnalyticsInterface } from "@/components/graphics";

export default function ExpertsPage() {

  const expertTypes = [
    {
      title: "Developers",
      description: "Engineers building apps, themes, and custom integrations on Shopify.",
      icon: "{ }",
      gradient: "from-violet-500/20 to-fuchsia-500/20",
    },
    {
      title: "Marketers",
      description: "Growth experts who understand Shopify conversion and retention.",
      icon: "📈",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Designers",
      description: "UX and brand specialists creating exceptional store experiences.",
      icon: "◇",
      gradient: "from-shopify/20 to-lime/20",
    },
    {
      title: "Merchants",
      description: "Store owners who have built and scaled successful businesses.",
      icon: "◆",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
  ];

  const benefits = [
    {
      title: "Strategic Guidance",
      description: "Get direction from people who have navigated Shopify's complexities.",
      icon: "🎯",
    },
    {
      title: "Honest Feedback",
      description: "Receive direct, actionable insights on your store and approach.",
      icon: "💬",
    },
    {
      title: "Proven Strategies",
      description: "Learn what actually works from those who have tested it.",
      icon: "✓",
    },
  ];

  return (
    <div className="min-h-screen bg-midnight font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen overflow-hidden pt-16 md:pt-20">
        {/* Animated gradient orbs */}
        <Floating duration={8} distance={20}>
          <div className="absolute top-20 right-[10%] h-[600px] w-[600px] rounded-full bg-shopify/8 blur-[180px]"></div>
        </Floating>
        <Floating duration={10} distance={15}>
          <div className="absolute bottom-0 left-[5%] h-[500px] w-[500px] rounded-full bg-lime/5 blur-[150px]"></div>
        </Floating>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-amber-500/3 blur-[200px]"></div>

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

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-40 left-[5%] hidden lg:block"
        >
          <span className="font-mono text-8xl font-bold text-shopify/5 select-none">★</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-40 right-[5%] hidden lg:block"
        >
          <span className="font-mono text-8xl font-bold text-lime/5 select-none">★</span>
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-40">
          <div className="max-w-4xl">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-6 md:mb-10 inline-flex items-center gap-3 rounded-full border border-shopify/30 bg-shopify/5 px-5 py-2.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify"></span>
              </span>
              <span className="font-mono text-xs font-medium tracking-widest text-shopify uppercase">
                Experts Network
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 md:mb-10"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
              >
                Shopify Experts Network
              </motion.span>
              <span className="relative inline-block mt-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                  className="font-serif text-5xl italic text-transparent bg-clip-text bg-gradient-to-r from-shopify via-lime to-shopify lg:text-7xl"
                >
                  Built on Experience
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
                    stroke="url(#experts-gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="experts-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
              className="mb-8 md:mb-14 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-400"
            >
              The Shopify Experts Network is a community of experienced builders, operators, and professionals who have spent years working on Shopify. It exists for people who want to learn from{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-medium">experience</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-shopify/30 -z-0 origin-left rounded-full"
                />
              </span>{" "}
              rather than generic advice.
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
                  <span className="relative">Join the Network</span>
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
                        alt="Expert member"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">Years of expertise</div>
                  <div className="text-gray-500">in Shopify ecosystem</div>
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

      {/* Expert Types Grid */}
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
                The Network
              </motion.span>
              <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                Who&apos;s{" "}
                <span className="font-serif italic text-lime">Inside</span>
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

          <FadeUp delay={0.1} className="mb-16 max-w-3xl">
            <p className="text-xl leading-relaxed text-gray-400">
              This network brings together developers, marketers, designers, and merchants who understand the nuances of building and scaling on Shopify.
            </p>
          </FadeUp>

          {/* Expert type cards */}
          <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {expertTypes.map((type) => (
              <StaggerItem key={type.title}>
                <ScaleOnHover scale={1.02}>
                  <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-carbon/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 h-full">
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${type.gradient}`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <BounceIcon>
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 font-mono text-2xl text-shopify transition-all duration-300 group-hover:bg-shopify/20 group-hover:border-shopify/30">
                          {type.icon}
                        </div>
                      </BounceIcon>

                      <h3 className="mb-3 text-xl font-bold text-white">
                        {type.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed transition-colors group-hover:text-gray-400">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Learning Through Real-World Feedback */}
      <section id="real-world-learning" className="relative bg-midnight py-32 overflow-hidden">
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
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left: Content */}
            <SlideIn direction="left">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-6 block">
                Real-World Learning
              </span>
              <h2 className="mb-8 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
                Learning Through{" "}
                <span className="block font-serif italic text-lime">Real-World Feedback</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                <p>
                  Members of the Shopify Experts Network share feedback on store design, user experience, conversion flows, and technical decisions. This feedback is grounded in{" "}
                  <span className="text-white font-medium">real-world outcomes</span>, not theory.
                </p>
                <p>
                  Learning from experienced Shopify professionals helps merchants and builders avoid costly mistakes and make better decisions earlier.
                </p>
              </div>

              {/* Visual accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 h-1 w-32 bg-gradient-to-r from-shopify to-lime rounded-full origin-left"
              />
            </SlideIn>

            {/* Right: Feedback areas */}
            <SlideIn direction="right" delay={0.2} className="lg:pl-12">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-shopify/10 to-transparent blur-xl"></div>
                <StaggerContainer className="relative grid grid-cols-2 gap-4" staggerDelay={0.1}>
                  {[
                    { label: "Store Design", icon: "🎨" },
                    { label: "User Experience", icon: "👤" },
                    { label: "Conversion Flows", icon: "📊" },
                    { label: "Technical Decisions", icon: "⚙️" },
                  ].map((item) => (
                    <StaggerItem key={item.label}>
                      <ScaleOnHover scale={1.05}>
                        <div className="group rounded-2xl border border-white/10 bg-carbon/50 p-6 backdrop-blur-sm transition-all hover:border-shopify/30 hover:bg-carbon">
                          <div className="text-3xl mb-3">{item.icon}</div>
                          <div className="font-semibold text-white">{item.label}</div>
                        </div>
                      </ScaleOnHover>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* No Pitching, Just Practical Insight */}
      <section id="our-philosophy" className="relative bg-slate py-32">
        <div className="absolute inset-0 diagonal-stripes opacity-30"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:gap-20 lg:grid-cols-12 lg:items-center">
            {/* Left column - Big quote mark */}
            <SlideIn direction="left" className="lg:col-span-4 relative">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute -top-8 -left-4 font-serif text-[80px] md:text-[200px] leading-none text-shopify/10 select-none"
              >
                &ldquo;
              </motion.span>
              <div className="relative pl-1">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4">
                  Our Philosophy
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                  No Pitching,{" "}
                  <span className="block md:inline">
                    just <span className="font-serif italic text-lime">Practical Insight</span>
                  </span>
                </h2>
              </div>
            </SlideIn>

            {/* Right column - Content */}
            <SlideIn direction="right" delay={0.2} className="lg:col-span-8">
              <div className="space-y-6 text-lg leading-relaxed text-gray-300 md:text-xl lg:text-2xl font-light">
                <p>
                  <Typewriter
                    delay={0.3}
                    speed={35}
                    segments={[
                      { text: "The community is designed to prioritize " },
                      { text: "learning and collaboration", className: "font-serif italic text-white font-normal" },
                      { text: " over selling services. This creates an environment where advice is honest, relevant, and focused on results." },
                    ]}
                  />
                </p>
                <p className="text-lg text-gray-400">
                  Members are encouraged to share lessons learned, challenges faced, and strategies that have worked in practice.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Who Benefits Most */}
      <section id="experience" className="relative bg-midnight py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        {/* Background glow */}
        <Floating duration={12} distance={25}>
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-lime/5 blur-[180px]"></div>
        </Floating>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section header */}
          <FadeUp className="mb-16 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-6 block">
              Who Benefits
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Who Benefits Most{" "}
              <span className="font-serif italic text-lime">From This Network</span>
            </h2>
          </FadeUp>

          {/* Benefits grid */}
          <StaggerContainer className="grid gap-8 md:grid-cols-3 mb-16" staggerDelay={0.15}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <ScaleOnHover scale={1.03}>
                  <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-carbon/30 p-10 backdrop-blur-sm transition-all duration-500 hover:border-shopify/30 h-full text-center">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-shopify/10 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative">
                      <BounceIcon>
                        <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/5 border border-white/10 text-4xl transition-all duration-300 group-hover:bg-shopify/20 group-hover:border-shopify/30">
                          {benefit.icon}
                        </div>
                      </BounceIcon>

                      <h3 className="mb-4 text-2xl font-bold text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed transition-colors group-hover:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Audience list */}
          <FadeUp delay={0.3}>
            <div className="max-w-3xl mx-auto">
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {[
                  "Merchants looking for strategic guidance",
                  "Builders seeking feedback on their work",
                  "Operators refining their approach to growth",
                ].map((item) => (
                  <StaggerItem key={item}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transition-colors hover:border-shopify/30"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-shopify/20 text-shopify shrink-0"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      <span className="text-lg text-gray-300">{item}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeUp delay={0.5} className="mt-10 text-center">
                <p className="text-xl text-gray-400 font-serif italic">
                  The shared goal is{" "}
                  <span className="text-shopify not-italic font-sans font-medium">continuous improvement</span>{" "}
                  through collective experience.
                </p>
              </FadeUp>
            </div>
          </FadeUp>
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
            <h2 className="mb-8 text-4xl font-bold tracking-tight text-midnight lg:text-6xl">
              Join the Shopify{" "}
              <span className="font-serif italic">Experts Network</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mx-auto mb-6 max-w-2xl text-xl leading-relaxed text-midnight/80">
              If you want to learn from people who have already navigated the challenges of Shopify, the Experts Network offers a supportive and knowledgeable community.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="mx-auto mb-14 max-w-2xl text-lg leading-relaxed text-midnight/70">
              Join on Discord to connect, learn, and grow alongside experienced Shopify professionals.
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
                <span className="relative">Join the Experts Network</span>
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
