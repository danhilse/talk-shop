"use client";

import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  BounceIcon,
} from "@/components/motion";
import { homeFeatures } from "@/lib/data";
import { DiscordMessageThread, ShopifyAnalyticsStack } from "@/components/graphics";

export function FeaturesSection() {
  return (
    <section id="learn-more" className="relative bg-slate py-16 md:py-24">
      <div className="absolute inset-0 diagonal-stripes opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <FadeUp className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block"
            >
              Why Join Us
            </motion.span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl">
              Enter the Shopify{" "}
              <span className="font-serif italic text-lime">Mindstream</span>
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

        {/* Feature cards - Bento grid */}
        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr" staggerDelay={0.1}>
          {homeFeatures.map((feature, index) => (
            <StaggerItem
              key={feature.title}
              className={`h-full ${index === 0 ? 'lg:col-span-2' : ''} ${index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <ScaleOnHover scale={1.02} className="h-full">
                <div
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-carbon/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 h-full"
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* Decorative graphics for wider cards */}
                  {index === 0 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-3 hidden lg:block pointer-events-none">
                      <div
                        className="relative"
                        style={{
                          maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                        }}
                      >
                        <DiscordMessageThread
                          className="!w-[400px] !bg-[#1a1b1e] scale-110"
                          animated={false}
                          showDateDivider={false}
                          messages={[
                            { username: "alex_dev", userColor: "#95BF47", message: "Just shipped v2.0 🚀", timestamp: "2:14 PM" },
                            { username: "merchant_pro", userColor: "#FFD700", badge: "GROW", badgeColor: "#95BF47", message: "Hit $50k this month! Finally cracked the Meta ads formula after 3 months of testing", timestamp: "2:18 PM" },
                            { username: "theme_wizard", userColor: "#FF6B6B", message: (
                              <>
                                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mb-1">
                                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M10 8.5L14 12l-4 3.5V8.5z" /></svg>
                                  <span className="text-[#95BF47]">@alex_dev</span>
                                  <span className="truncate">Just shipped v2.0...</span>
                                </div>
                                <span>Nice work! Testing now</span>
                              </>
                            ), timestamp: "2:22 PM" },
                            { username: "sam_builds", userColor: "#5865F2", badge: "DEV", badgeColor: "#5865F2", message: "Anyone using Hydrogen?", timestamp: "2:25 PM" },
                            { username: "ecom_expert", userColor: "#00CED1", message: "New checkout extensions 👀", timestamp: "2:31 PM" },
                          ]}
                        />
                      </div>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="absolute -right-12 top-1/2 -translate-y-[45%] rotate-6 hidden lg:block pointer-events-none">
                      <div
                        style={{
                          maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                        }}
                      >
                        <ShopifyAnalyticsStack />
                      </div>
                    </div>
                  )}

                  <div className="relative">
                    {/* Icon */}
                    <BounceIcon>
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 font-mono text-2xl text-shopify transition-all duration-300 group-hover:bg-shopify/20 group-hover:border-shopify/30">
                        {feature.icon}
                      </div>
                    </BounceIcon>

                    <h3 className="mb-4 text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400 max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
