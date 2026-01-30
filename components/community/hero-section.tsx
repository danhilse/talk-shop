"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Magnetic, Floating } from "@/components/motion";
import { DiscordIcon } from "@/components/icons";
import { displayHeadshots } from "@/lib/data";
import { DiscordFullInterface } from "@/components/graphics";

export function CommunityHeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-16 md:pt-20" aria-labelledby="community-hero-heading">
      {/* Animated gradient orbs */}
      <div aria-hidden="true">
        <Floating duration={8} distance={20}>
          <div className="absolute top-20 left-[10%] h-[600px] w-[600px] rounded-full bg-shopify/8 blur-[180px]"></div>
        </Floating>
        <Floating duration={10} distance={15}>
          <div className="absolute bottom-0 right-[5%] h-[500px] w-[500px] rounded-full bg-lime/5 blur-[150px]"></div>
        </Floating>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-cyan-500/3 blur-[200px]"></div>
      </div>

      {/* Grid pattern with fade */}
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight" aria-hidden="true"></div>

      {/* Full Discord Interface - emerges from right edge, clips at bottom/right only */}
      <div
        className="absolute top-36 -right-16 2xl:-right-8 hidden xl:block pointer-events-none"
        style={{
          transform: "perspective(1500px) rotateY(-15deg) rotateX(3deg) scale(1.08)",
          transformOrigin: "right center"
        }}
        aria-hidden="true"
      >
        <Floating duration={12} distance={14}>
          <DiscordFullInterface variant="hero" />
        </Floating>
      </div>

      {/* Decorative brackets */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-40 left-[5%] hidden lg:block"
        aria-hidden="true"
      >
        <span className="font-mono text-8xl font-bold text-shopify/5 select-none">{"{"}</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-40 right-[5%] hidden lg:block"
        aria-hidden="true"
      >
        <span className="font-mono text-8xl font-bold text-shopify/5 select-none">{"}"}</span>
      </motion.div>

      <article className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow with animated border */}
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
              Developer Community
            </span>
          </motion.div>

          {/* Main heading - semantic h1 with motion wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 md:mb-10"
          >
            <h1 id="community-hero-heading">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-5xl font-bold tracking-tight text-white lg:text-7xl"
              >
                Shopify Dev Community
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                className="font-serif text-5xl italic text-transparent bg-clip-text bg-gradient-to-r from-shopify via-lime to-shopify lg:text-7xl"
              >
                for Builders &{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-shopify via-lime to-shopify">
                  Developers
                  {/* Underline accent - only under "Developers" */}
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 w-full h-3"
                    viewBox="0 0 150 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M0 6 Q37 2, 75 6 T150 6"
                      stroke="url(#community-gradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="community-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#95BF47"/>
                        <stop offset="50%" stopColor="#C4E456"/>
                        <stop offset="100%" stopColor="#95BF47"/>
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle with highlighted words - semantic p with motion wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mb-8 md:mb-12 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-400">
              <span className="hidden md:inline">
                The Shopify Dev Community is built for developers who are actively
                building, shipping, and maintaining products on Shopify. Whether
                you are working on a public Shopify app, a custom theme, or a
                headless storefront using Hydrogen, this community exists to
                support the real work that happens between{" "}
              </span>
              <span className="md:hidden">
                Built for developers shipping apps, themes, and storefronts on Shopify. We support the real work between{" "}
              </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-medium">documentation</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-shopify/30 -z-0 origin-left rounded-full"
                  aria-hidden="true"
                />
              </span>{" "}
              and{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-medium">production</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-lime/30 -z-0 origin-left rounded-full"
                  aria-hidden="true"
                />
              </span>.
            </p>
          </motion.div>

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
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-shopify to-shopify-dark px-8 py-4 text-lg font-bold text-midnight transition-all hover:shadow-2xl hover:shadow-shopify/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
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
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">300+ devs</div>
                <div className="text-gray-500">shipping on Shopify</div>
              </div>
            </motion.div>
          </motion.div>

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
            aria-hidden="true"
          >
            <div
              className="min-w-[900px] ml-5"
              style={{
                transform: "perspective(1000px) rotateX(8deg) scale(0.65)",
                transformOrigin: "left top"
              }}
            >
              <DiscordFullInterface />
            </div>
          </motion.div>
        </div>
      </article>

      {/* Angled section divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg className="w-full h-12 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
          <path d="M0 96V48L720 0L1440 48V96H0Z" fill="#161B22"/>
        </svg>
      </div>
    </section>
  );
}
