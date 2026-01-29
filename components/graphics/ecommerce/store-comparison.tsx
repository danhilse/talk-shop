"use client";

import { motion } from "framer-motion";

interface StoreComparisonProps {
  beforeTitle?: string;
  afterTitle?: string;
  beforeFeatures?: string[];
  afterFeatures?: string[];
  className?: string;
  animated?: boolean;
}

export function EcommerceStoreComparison({
  beforeTitle = "Old Product Page",
  afterTitle = "New Product Page",
  beforeFeatures = [
    "Basic product images",
    "Simple description",
    "No reviews shown",
    "Generic CTA button",
  ],
  afterFeatures = [
    "High-quality gallery",
    "Compelling copy",
    "230+ Reviews displayed",
    "Urgency-driven CTA",
    "Trust badges",
    "Risk-free guarantee",
  ],
  className = "",
  animated = true,
}: StoreComparisonProps) {
  const Wrapper = animated ? motion.div : "div";

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      })}
      className={`rounded-2xl border border-white/10 bg-slate overflow-hidden select-none ${className}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-carbon to-slate px-6 py-4 border-b border-white/5">
        <h3 className="text-lg font-bold text-white">
          Before vs. After:{" "}
          <span className="text-shopify">Quick Store Upgrade!</span>
        </h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={animated ? { opacity: 0, x: -20 } : undefined}
            animate={animated ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                BEFORE
              </span>
            </div>

            {/* Mock product card - basic */}
            <div className="rounded-xl border border-white/10 bg-carbon overflow-hidden">
              {/* Image placeholder */}
              <div className="h-32 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="h-16 w-16 rounded-lg bg-gray-600"></div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-medium text-gray-400">Smartwatch with Earbuds</h4>
                <p className="mt-1 text-xs text-gray-500">Product Description</p>
                <p className="text-[10px] text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-400">$79.99</span>
                  <button className="rounded bg-gray-600 px-3 py-1.5 text-xs text-gray-400">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Issues list */}
            <div className="mt-4 space-y-2">
              {beforeFeatures.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={animated ? { opacity: 0, x: -10 } : undefined}
                  animate={animated ? { opacity: 1, x: 0 } : undefined}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 text-xs text-gray-500"
                >
                  <svg className="h-4 w-4 text-red-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={animated ? { opacity: 0, x: 20 } : undefined}
            animate={animated ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded bg-shopify px-2 py-0.5 text-xs font-bold text-midnight">
                AFTER
              </span>
            </div>

            {/* Mock product card - optimized */}
            <div className="rounded-xl border border-shopify/30 bg-carbon overflow-hidden ring-1 ring-shopify/10">
              {/* Image placeholder with badge */}
              <div className="h-32 bg-gradient-to-br from-shopify/20 to-lime/10 relative flex items-center justify-center">
                <div className="h-16 w-16 rounded-lg bg-shopify/30"></div>
                <span className="absolute top-2 right-2 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  Best Seller
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-semibold text-white">Smartwatch Earbuds 2-in-1</h4>
                <div className="mt-1 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-3 w-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="text-[10px] text-gray-400">(230+ Reviews)</span>
                </div>
                <ul className="mt-2 space-y-0.5 text-[10px] text-gray-400">
                  <li className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-shopify" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Built-in Wireless Earbuds
                  </li>
                  <li className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-shopify" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Bluetooth Calls & Health Tracking
                  </li>
                  <li className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-shopify" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Sale Ends Today - Free Shipping
                  </li>
                </ul>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 line-through">$79.99</span>
                    <span className="ml-1 text-lg font-bold text-shopify">$49.99</span>
                    <span className="ml-1 rounded bg-red-500/20 px-1 text-[10px] text-red-400">SAVE 37%</span>
                  </div>
                </div>
                <button className="mt-2 w-full rounded bg-shopify py-2 text-xs font-bold text-midnight flex items-center justify-center gap-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2ZM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1Zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z" />
                  </svg>
                  Add to Cart
                </button>
                <p className="mt-1 text-center text-[9px] text-gray-500">60-Day Risk Free Trial</p>
              </div>
            </div>

            {/* Benefits list */}
            <div className="mt-4 space-y-2">
              {afterFeatures.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={animated ? { opacity: 0, x: 10 } : undefined}
                  animate={animated ? { opacity: 1, x: 0 } : undefined}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 text-xs text-gray-400"
                >
                  <svg className="h-4 w-4 text-shopify shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Arrow between */}
        <motion.div
          initial={animated ? { opacity: 0, scale: 0 } : undefined}
          animate={animated ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.6, type: "spring" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-shopify text-midnight"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </motion.div>
      </div>
    </Wrapper>
  );
}

// Simple before/after slider concept
export function EcommerceBeforeAfterSlider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`rounded-xl border border-white/10 bg-slate p-4 select-none ${className}`}
    >
      <div className="relative h-48 rounded-lg overflow-hidden">
        {/* Before (left side) */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <span className="text-xs text-gray-500">Before</span>
        </div>

        {/* After (right side) */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br from-shopify/20 to-lime/10 flex items-center justify-center">
          <span className="text-xs text-shopify">After</span>
        </div>

        {/* Divider */}
        <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white/50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <svg className="h-4 w-4 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41zm-6 0L7.17 12 2.59 7.41 4 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-gray-500">Drag to compare</p>
    </motion.div>
  );
}
