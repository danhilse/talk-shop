"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CONSENT_KEY = "cookie-consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(CONSENT_KEY, "all");
    setShowBanner(false);
  };

  const acceptEssential = () => {
    localStorage.setItem(CONSENT_KEY, "essential");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-midnight/60 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-400 max-w-2xl">
                We use cookies to improve your experience, analyze traffic, and personalize content.{" "}
                <Link
                  href="/privacy"
                  className="text-shopify hover:text-lime transition-colors underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
              </p>
              <div className="flex flex-shrink-0 gap-3">
                <button
                  onClick={acceptEssential}
                  className="rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
                >
                  Manage cookies
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-full bg-shopify px-5 py-2.5 text-sm font-semibold text-midnight transition-all hover:bg-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
