"use client";

import { motion } from "framer-motion";
import { FadeUp, Magnetic, Floating } from "@/components/motion";
import { DiscordIcon } from "@/components/icons";

export function CommunityCTASection() {
  return (
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
          <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-midnight lg:text-5xl">
            Join the Shopify{" "}
            <span className="font-serif italic">Dev Community</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="mx-auto mb-6 max-w-2xl text-xl leading-relaxed text-midnight/80">
            If you are building on Shopify and want to learn alongside other
            developers, the Shopify Dev Community provides a collaborative
            environment focused on practical problem-solving and shared
            learning.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-midnight/70">
            Connect with other Shopify developers, share knowledge, and improve
            how you build on the platform.
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
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-midnight px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-slate hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-shopify"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate to-carbon"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <DiscordIcon className="relative h-6 w-6" />
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
  );
}
