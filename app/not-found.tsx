"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion";
import { DiscordIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-midnight px-6">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-shopify/5 blur-3xl" />
      </div>

      <FadeUp className="relative z-10 text-center">
        {/* 404 number */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-[10rem] font-bold leading-none tracking-tighter text-white/5 sm:text-[14rem]">
            404
          </span>
        </motion.div>

        {/* Message */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="-mt-20 mb-4 text-3xl font-bold text-white sm:text-4xl"
        >
          Page not found
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 max-w-md text-gray-400"
        >
          Looks like this page got lost in the Shopify multiverse.
          Let&apos;s get you back on track.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-shopify px-6 py-3 font-semibold text-black transition-all hover:bg-shopify-light hover:shadow-lg hover:shadow-shopify/20"
          >
            <span>Go Home</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <a
            href="https://discord.gg/talk-shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10"
          >
            <DiscordIcon className="h-5 w-5" />
            <span>Join Discord</span>
          </a>
        </motion.div>
      </FadeUp>
    </main>
  );
}
