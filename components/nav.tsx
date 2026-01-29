"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/motion";
import { DiscordIcon } from "@/components/icons";

// ============================================================================
// Hoisted constants - prevents object recreation on every render
// ============================================================================

const navTransition = {
  duration: 0.6,
  ease: [0.25, 0.4, 0.25, 1],
} as const;

const fadeTransition = { duration: 0.2 } as const;

const slideTransition = {
  type: "spring",
  damping: 25,
  stiffness: 200,
} as const;

const hoverScale = { scale: 1.05 } as const;
const tapScale = { scale: 0.95 } as const;

// Animation states
const navInitial = { y: -100, opacity: 0 } as const;
const navAnimate = { y: 0, opacity: 1 } as const;
const fadeInitial = { opacity: 0 } as const;
const fadeAnimate = { opacity: 1 } as const;
const slideInitial = { x: "100%" } as const;
const slideAnimate = { x: 0 } as const;

// Hamburger animation states
const hamburgerOpen = {
  top: { rotate: 45, y: 8 },
  middle: { opacity: 0 },
  bottom: { rotate: -45, y: -8 },
} as const;

const hamburgerClosed = {
  top: { rotate: 0, y: 0 },
  middle: { opacity: 1 },
  bottom: { rotate: 0, y: 0 },
} as const;

// ============================================================================
// Components
// ============================================================================

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative h-5 w-6">
      <motion.span
        animate={isOpen ? hamburgerOpen.top : hamburgerClosed.top}
        className="absolute left-0 top-0 h-0.5 w-6 bg-current"
      />
      <motion.span
        animate={isOpen ? hamburgerOpen.middle : hamburgerClosed.middle}
        className="absolute left-0 top-2 h-0.5 w-6 bg-current"
      />
      <motion.span
        animate={isOpen ? hamburgerOpen.bottom : hamburgerClosed.bottom}
        className="absolute left-0 top-4 h-0.5 w-6 bg-current"
      />
    </div>
  );
}

const navLinks = [
  { label: "Learn More", href: "#learn-more" },
  { label: "About Us", href: "#experience" },
  { label: "Follow Us", href: "#socials" },
] as const;

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Stable callback using functional setState
  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={navInitial}
        animate={navAnimate}
        transition={navTransition}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-midnight/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight">
              <motion.div whileHover={hoverScale} whileTap={tapScale}>
                <Image
                  src="/logo.webp"
                  alt="Talk Shop"
                  width={160}
                  height={64}
                  className="h-16 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    className="text-sm font-medium transition-colors relative group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight text-gray-400 hover:text-white"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-shopify transition-all w-0 group-hover:w-full" />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Desktop Discord Button */}
              <Magnetic>
                <motion.a
                  href="https://discord.gg/talk-shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className="hidden md:inline-flex group relative items-center gap-2 overflow-hidden rounded-full bg-shopify px-6 py-3 text-base font-semibold text-midnight transition-all hover:bg-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
                >
                  <DiscordIcon className="h-5 w-5" />
                  <span>Join Discord</span>
                </motion.a>
              </Magnetic>

              {/* Mobile Discord Button */}
              <motion.a
                href="https://discord.gg/talk-shop"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={tapScale}
                className="md:hidden inline-flex items-center gap-1.5 rounded-full bg-shopify px-3 py-2 text-xs font-semibold text-midnight transition-all hover:bg-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
              >
                <DiscordIcon className="h-4 w-4" />
                <span>Join</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden relative z-50 p-2 text-white/80 hover:text-white transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <HamburgerIcon isOpen={mobileMenuOpen} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - using ternary for explicit null */}
      <AnimatePresence>
        {mobileMenuOpen ? (
          <>
            {/* Backdrop */}
            <motion.div
              initial={fadeInitial}
              animate={fadeAnimate}
              exit={fadeInitial}
              transition={fadeTransition}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={slideInitial}
              animate={slideAnimate}
              exit={slideInitial}
              transition={slideTransition}
              className="fixed top-0 right-0 bottom-0 z-40 w-72 bg-midnight border-l border-white/10 md:hidden"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="block py-3 px-4 rounded-lg text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight text-gray-400 hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Discord Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto"
                >
                  <a
                    href="https://discord.gg/talk-shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-3 w-full rounded-full bg-shopify px-6 py-4 text-lg font-semibold text-midnight transition-all hover:bg-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
                  >
                    <DiscordIcon className="h-6 w-6" />
                    <span>Join Discord</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
