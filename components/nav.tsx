"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/motion";
import { DiscordIcon } from "@/components/icons";

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative h-5 w-6">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className="absolute left-0 top-0 h-0.5 w-6 bg-current"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        className="absolute left-0 top-2 h-0.5 w-6 bg-current"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        className="absolute left-0 top-4 h-0.5 w-6 bg-current"
      />
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Community", href: "/community" },
  { label: "Support", href: "/support" },
  { label: "Experts", href: "/experts" },
  { label: "Entrepreneurs", href: "/entrepreneurs" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-midnight/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/logo.webp"
                  alt="Talk Shop"
                  width={140}
                  height={56}
                  className="h-14 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((item, i) => {
                const isActive = pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]));

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors relative group ${
                        isActive ? "text-shopify" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-shopify transition-all ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              {/* Desktop Discord Button */}
              <Magnetic>
                <motion.a
                  href="https://discord.gg/talk-shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:inline-flex group relative items-center gap-2 overflow-hidden rounded-full bg-shopify px-5 py-2.5 text-sm font-semibold text-midnight transition-all hover:bg-lime"
                >
                  <DiscordIcon className="h-4 w-4" />
                  <span>Join Discord</span>
                </motion.a>
              </Magnetic>

              {/* Mobile Discord Button */}
              <motion.a
                href="https://discord.gg/talk-shop"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="md:hidden inline-flex items-center gap-1.5 rounded-full bg-shopify px-3 py-2 text-xs font-semibold text-midnight transition-all hover:bg-lime"
              >
                <DiscordIcon className="h-4 w-4" />
                <span>Join</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative z-50 p-2 text-white/80 hover:text-white transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <HamburgerIcon isOpen={mobileMenuOpen} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-72 bg-midnight border-l border-white/10 md:hidden"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((item, i) => {
                    const isActive = pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]));

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                            isActive
                              ? "bg-shopify/10 text-shopify"
                              : "text-gray-400 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
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
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-shopify px-5 py-3 text-base font-semibold text-midnight transition-all hover:bg-lime"
                  >
                    <DiscordIcon className="h-5 w-5" />
                    <span>Join Discord</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
