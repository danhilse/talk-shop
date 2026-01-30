"use client";

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
import { DiscordIcon } from "@/components/icons";
import { DiscordFullInterface, ConnectionNodes } from "@/components/graphics";

const commonProblems = [
  {
    icon: "🎨",
    title: "Theme Issues",
    description: "Customization conflicts, layout bugs, and Liquid template problems",
  },
  {
    icon: "📦",
    title: "App Conflicts",
    description: "App compatibility issues, script conflicts, and performance impacts",
  },
  {
    icon: "💳",
    title: "Checkout & Payments",
    description: "Payment gateway errors, checkout flow issues, and currency problems",
  },
  {
    icon: "🚚",
    title: "Shipping Rules",
    description: "Shipping rate configuration, zone setup, and carrier integration",
  },
  {
    icon: "⚙️",
    title: "Store Configuration",
    description: "Settings conflicts, domain issues, and store setup challenges",
  },
  {
    icon: "📊",
    title: "Analytics & Reports",
    description: "Data discrepancies, tracking issues, and report generation",
  },
];

const benefits = [
  {
    title: "Real Experience",
    description: "Merchants share what worked, what didn't, and what they'd do differently next time.",
  },
  {
    title: "Multiple Perspectives",
    description: "Get different approaches from various merchants and choose the solution that fits your store best.",
  },
  {
    title: "Practical Knowledge",
    description: "A knowledge base grounded in real-world experience that complements official documentation.",
  },
  {
    title: "Reduced Downtime",
    description: "Faster problem resolution helps merchants stay focused on growing their business.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-midnight font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen overflow-hidden pt-16 md:pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight"></div>
        <Floating duration={8} distance={20}>
          <div className="absolute top-20 left-[10%] h-[600px] w-[600px] rounded-full bg-shopify/8 blur-[180px]"></div>
        </Floating>
        <Floating duration={10} distance={15}>
          <div className="absolute bottom-0 right-[5%] h-[500px] w-[500px] rounded-full bg-lime/5 blur-[150px]"></div>
        </Floating>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-orange-500/3 blur-[200px]"></div>

        {/* Full Discord Interface - emerges from right edge */}
        <div
          className="absolute top-36 -right-16 2xl:-right-8 hidden xl:block pointer-events-none"
          style={{
            transform: "perspective(1500px) rotateY(-15deg) rotateX(3deg) scale(1.08)",
            transformOrigin: "right center"
          }}
        >
          <Floating duration={12} distance={14}>
            <DiscordFullInterface variant="hero" />
          </Floating>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-40">
          <div className="max-w-4xl">
            {/* Badge */}
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
                Support Group
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-6 md:mb-10"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-5xl font-bold tracking-tight text-white lg:text-7xl"
              >
                Shopify Support Group
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                className="font-serif text-5xl italic text-transparent bg-clip-text bg-gradient-to-r from-shopify via-lime to-shopify lg:text-7xl"
              >
                for Merchants
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 md:mb-12 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-400"
            >
              <span className="hidden md:inline">
                Running a Shopify store comes with challenges, especially when something breaks or behaves unexpectedly. Connect with merchants who understand the platform from{" "}
              </span>
              <span className="md:hidden">
                Connect with merchants who understand Shopify from{" "}
              </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-medium">hands-on experience</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-shopify/30 -z-0 origin-left rounded-full"
                />
              </span>.
            </motion.p>

            {/* CTA */}
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
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-shopify to-shopify-dark px-8 py-4 text-lg font-bold text-midnight transition-all hover:shadow-2xl hover:shadow-shopify/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-lime to-shopify"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <DiscordIcon className="relative h-6 w-6" />
                  <span className="relative">Join the Support Group</span>
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
                className="flex items-center gap-3"
              >
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  <span className="text-sm text-gray-400">
                    <span className="font-semibold text-white">47</span> online now
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
            <path d="M0 96V48L720 0L1440 48V96H0Z" fill="#161B22"/>
          </svg>
        </div>
      </section>

      {/* Common Problems Section */}
      <section id="learn-more" className="relative bg-slate py-16 md:py-24">
        <div className="absolute inset-0 diagonal-stripes opacity-50"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="mb-16 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
              Common Challenges
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl mb-6">
              Common Shopify Problems{" "}
              <span className="font-serif italic text-lime">Merchants Face</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              These everyday challenges can have a direct impact on revenue and customer experience. Learn from merchants who have resolved them.
            </p>
          </FadeUp>

          <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {commonProblems.map((problem) => (
              <StaggerItem key={problem.title}>
                <ScaleOnHover scale={1.02}>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-carbon/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 h-full">
                    <div className="text-3xl mb-4">{problem.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
                    <p className="text-gray-500 text-sm">{problem.description}</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Peer Support Works Section */}
      <section id="experience" className="relative py-16 md:py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-carbon via-slate to-midnight"></div>

        {/* ConnectionNodes as background - perfect for peer support theme */}
        <div className="absolute inset-0 flex items-center justify-center opacity-50 scale-[2.5] pointer-events-none">
          <ConnectionNodes showLabels={false} className="w-full max-w-none h-full !border-0 !bg-transparent !rounded-none" />
        </div>

        {/* Center fade overlay - creates focus area for content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(22, 27, 34, 0.9) 0%, rgba(22, 27, 34, 0.4) 50%, transparent 100%)"
          }}
        />

        {/* Gradient orbs for depth */}
        <Floating duration={12} distance={20}>
          <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-shopify/8 blur-[120px]"></div>
        </Floating>
        <Floating duration={10} distance={15}>
          <div className="absolute right-0 bottom-1/4 h-[350px] w-[350px] rounded-full bg-lime/6 blur-[100px]"></div>
        </Floating>

        {/* Edge fades */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-midnight to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <SlideIn direction="left" delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
                Why It Works
              </span>
              <h2 className="mb-6 text-2xl sm:text-3xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl">
                Why Peer-Based{" "}
                <span className="block font-serif italic text-lime mt-1 md:mt-2">Shopify Support Works</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-400 mb-8">
                <Typewriter
                  delay={0.3}
                  speed={35}
                  segments={[
                    { text: "Peer support works because it is grounded in " },
                    { text: "real experience", className: "font-serif italic text-white font-normal" },
                    { text: ". Instead of relying solely on support tickets or searching through outdated forum posts, merchants connect with others who are actively running Shopify stores and solving similar problems." },
                  ]}
                />
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-shopify/20 text-shopify shrink-0 mt-0.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Faster than support tickets</div>
                    <div className="text-sm text-gray-500">Get answers in real-time from active merchants</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-shopify/20 text-shopify shrink-0 mt-0.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Battle-tested solutions</div>
                    <div className="text-sm text-gray-500">Learn what actually works from those who&apos;ve tried it</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-shopify/20 text-shopify shrink-0 mt-0.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">No guesswork</div>
                    <div className="text-sm text-gray-500">Multiple perspectives help you choose the right approach</div>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2} className="relative lg:pl-8">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-shopify/10 to-transparent blur-xl"></div>
              <StaggerContainer className="relative grid grid-cols-1 gap-4" staggerDelay={0.1}>
                {benefits.map((benefit) => (
                  <StaggerItem key={benefit.title}>
                    <ScaleOnHover scale={1.02}>
                      <div className="group rounded-2xl border border-white/10 bg-carbon/50 p-6 backdrop-blur-sm transition-all hover:border-shopify/30 hover:bg-carbon">
                        <div className="font-bold text-white mb-2">{benefit.title}</div>
                        <div className="text-sm text-gray-500">{benefit.description}</div>
                      </div>
                    </ScaleOnHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Faster Help Section */}
      <section id="faster-help" className="relative bg-slate py-16 md:py-24">
        <div className="absolute inset-0 diagonal-stripes opacity-30"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
              Speed Matters
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl mb-6">
              Faster Help{" "}
              <span className="font-serif italic text-lime">Without the Guesswork</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 mb-8 max-w-2xl mx-auto">
              When you ask a question in a live Shopify support community, you often receive multiple perspectives. This helps you evaluate different approaches and choose the solution that fits your store best.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="rounded-2xl border border-white/10 bg-carbon/50 p-6">
                <div className="text-3xl font-bold text-shopify mb-2">↓</div>
                <div className="font-semibold text-white mb-1">Reduce Downtime</div>
                <div className="text-sm text-gray-500">Get your store back on track faster</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-carbon/50 p-6">
                <div className="text-3xl font-bold text-lime mb-2">⚡</div>
                <div className="font-semibold text-white mb-1">Speed Up Resolution</div>
                <div className="text-sm text-gray-500">Multiple solutions means faster answers</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-carbon/50 p-6">
                <div className="text-3xl font-bold text-white mb-2">→</div>
                <div className="font-semibold text-white mb-1">Stay Focused</div>
                <div className="text-sm text-gray-500">Spend more time growing your business</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-shopify via-shopify-dark to-shopify"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="grain absolute inset-0"></div>

        <Floating duration={8} distance={30}>
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        </Floating>
        <Floating duration={10} distance={20}>
          <div className="absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-midnight/30 blur-3xl"></div>
        </Floating>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-10 inline-flex items-center gap-3 rounded-full bg-midnight/20 px-6 py-3 backdrop-blur-sm border border-white/10"
            >
              <DiscordIcon className="h-5 w-5 text-midnight" />
              <span className="font-mono text-sm font-medium text-midnight tracking-wide">
                Join the Support Group
              </span>
            </motion.div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-midnight lg:text-5xl">
              Join the Shopify Support Group{" "}
              <span className="font-serif italic">on Discord</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mb-10 text-lg text-midnight/80 max-w-xl mx-auto">
              If you want faster answers and practical guidance from other Shopify merchants, join our welcoming community to ask questions, share experiences, and build confidence running your store.
            </p>
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
                <span className="relative">Join the Community</span>
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
