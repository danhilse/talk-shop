"use client";

import { motion } from "framer-motion";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { developerTags } from "@/lib/data";

export function WhoItsForSection() {
  return (
    <section id="experience" className="relative bg-midnight py-16 md:py-24 overflow-hidden">
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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Stacked visual placeholder */}
          <SlideIn direction="left" className="relative order-2 lg:order-1">
            {/* Background glow */}
            <div className="absolute -inset-10 bg-gradient-to-br from-shopify/10 via-transparent to-lime/10 blur-3xl"></div>

            {/* Stacked cards effect */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-shopify/5 border border-shopify/10"
              />
              <motion.div
                initial={{ opacity: 0, x: -10, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl bg-shopify/10 border border-shopify/20"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-carbon to-slate overflow-hidden"
              >
                {/* Layered developer workspace */}
                <div className="absolute inset-0 p-5">
                  {/* Background: Code editor (largest, back layer) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                    className="absolute inset-5 rounded-xl border border-white/10 bg-[#1E1E1E] shadow-2xl shadow-black/50 overflow-hidden"
                  >
                    {/* Editor title bar */}
                    <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5 bg-[#252526]">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                          <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                          <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
                        </div>
                        <span className="text-xs text-gray-500 font-mono">shopify-app</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] text-blue-400 font-medium">TS</span>
                        <span className="rounded bg-shopify/20 px-1.5 py-0.5 text-[10px] text-shopify font-medium">React</span>
                      </div>
                    </div>
                    {/* Editor sidebar + content */}
                    <div className="flex h-full">
                      {/* Mini file tree */}
                      <div className="w-28 border-r border-white/5 bg-[#1E1E1E] p-2 text-[9px] font-mono">
                        <div className="text-gray-500 mb-2">EXPLORER</div>
                        <div className="space-y-1 text-gray-400">
                          <div className="flex items-center gap-1.5 text-white bg-white/5 rounded px-1 py-0.5">
                            <span className="text-yellow-400">◢</span> src
                          </div>
                          <div className="pl-3 space-y-0.5">
                            <div className="text-cyan-400">webhooks.ts</div>
                            <div className="text-gray-500">products.ts</div>
                            <div className="text-gray-500">checkout.ts</div>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-500">
                            <span className="text-gray-600">▸</span> components
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-500">
                            <span className="text-gray-600">▸</span> lib
                          </div>
                        </div>
                      </div>
                      {/* Code content */}
                      <div className="flex-1 p-3 overflow-hidden">
                        <pre className="font-mono text-[10px] leading-relaxed">
                          <div className="text-gray-500">{"// Handle Shopify webhooks"}</div>
                          <div><span className="text-purple-400">export async function</span> <span className="text-cyan-400">handleWebhook</span>(req: Request) {"{"}</div>
                          <div className="bg-shopify/10 -mx-3 px-3"><span className="text-purple-400">  const</span> hmac = req.headers.get(<span className="text-lime">&apos;X-Shopify-Hmac&apos;</span>);</div>
                          <div className="text-gray-300">  </div>
                          <div><span className="text-purple-400">  if</span> (!<span className="text-cyan-400">verifySignature</span>(hmac)) {"{"}</div>
                          <div>    <span className="text-purple-400">return</span> <span className="text-cyan-400">Response</span>.json({"{"} error: <span className="text-lime">&apos;Unauthorized&apos;</span> {"}"});</div>
                          <div>  {"}"}</div>
                          <div className="text-gray-300">  </div>
                          <div><span className="text-purple-400">  const</span> order = <span className="text-purple-400">await</span> req.json();</div>
                          <div><span className="text-purple-400">  await</span> <span className="text-cyan-400">processOrder</span>(order);</div>
                          <div className="text-gray-300">  </div>
                          <div>  <span className="text-purple-400">return</span> <span className="text-cyan-400">Response</span>.json({"{"} success: <span className="text-orange-400">true</span> {"}"});</div>
                          <div>{"}"}</div>
                        </pre>
                      </div>
                    </div>
                  </motion.div>

                  {/* Middle layer: Terminal (overlapping bottom-left) */}
                  <motion.div
                    initial={{ opacity: 0, x: -30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 }}
                    className="absolute bottom-8 -left-2 w-[65%] transform rotate-[-2deg] z-20"
                  >
                    <div className="rounded-xl border border-white/10 bg-[#0D0D0D] shadow-2xl shadow-black/60 overflow-hidden">
                      <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2 bg-black/40">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80"></span>
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">Terminal</span>
                      </div>
                      <div className="p-3 font-mono text-[10px]">
                        <div className="text-gray-400"><span className="text-shopify">~</span> $ shopify app dev</div>
                        <div className="text-gray-500 mt-1">Starting development server...</div>
                        <div className="text-cyan-400 mt-1">│ App URL: https://myapp.ngrok.io</div>
                        <div className="text-shopify mt-1">✓ Dev server running on localhost:3000</div>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="text-shopify">~</span>
                          <span className="text-gray-400">$</span>
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-1.5 h-3 bg-white/80 ml-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Top layer: API Response panel (overlapping top-right) */}
                  <motion.div
                    initial={{ opacity: 0, x: 30, y: -20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="absolute -top-2 -right-2 w-[55%] transform rotate-[2deg] z-30"
                  >
                    <div className="rounded-xl border border-shopify/20 bg-[#1E1E1E] shadow-2xl shadow-shopify/10 overflow-hidden">
                      <div className="flex items-center justify-between border-b border-white/5 px-3 py-2 bg-[#252526]">
                        <div className="flex items-center gap-2">
                          <span className="rounded px-1.5 py-0.5 text-[9px] font-bold bg-green-500/20 text-green-400">GET</span>
                          <span className="text-[10px] text-gray-400 font-mono">/admin/api/products.json</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-gray-500">127ms</span>
                          <span className="rounded-full px-1.5 py-0.5 text-[9px] font-bold bg-shopify/20 text-shopify">200</span>
                        </div>
                      </div>
                      <div className="p-3 font-mono text-[9px] text-gray-300">
                        <div>{"{"}</div>
                        <div className="pl-2"><span className="text-cyan-400">"products"</span>: [{"{"}</div>
                        <div className="pl-4"><span className="text-cyan-400">"id"</span>: <span className="text-orange-400">7654321098</span>,</div>
                        <div className="pl-4"><span className="text-cyan-400">"title"</span>: <span className="text-lime">"Premium Hoodie"</span>,</div>
                        <div className="pl-4"><span className="text-cyan-400">"status"</span>: <span className="text-lime">"active"</span>,</div>
                        <div className="pl-4"><span className="text-cyan-400">"variants"</span>: [...]</div>
                        <div className="pl-2">{"}]"}</div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating status badges */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="absolute top-[42%] right-6 z-40"
                  >
                    <div className="flex items-center gap-1.5 rounded-full bg-shopify/20 border border-shopify/30 px-2.5 py-1 shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify" />
                      </span>
                      <span className="text-[9px] text-shopify font-medium">Build passing</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.75 }}
                    className="absolute bottom-[35%] right-8 z-40"
                  >
                    <div className="flex items-center gap-1.5 rounded-full bg-green-500/15 border border-green-500/30 px-2.5 py-1 shadow-lg">
                      <span className="text-[9px] text-green-400 font-medium">✓ 24 tests passed</span>
                    </div>
                  </motion.div>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 h-8 w-8 border-l-2 border-t-2 border-shopify/30 z-50"></div>
                <div className="absolute bottom-4 right-4 h-8 w-8 border-r-2 border-b-2 border-lime/30 z-50"></div>
              </motion.div>
            </div>
          </SlideIn>

          {/* Right: Content */}
          <SlideIn direction="right" delay={0.2} className="order-1 lg:order-2 lg:pl-12">
            <div className="mb-6 md:mb-8">
              <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-3 md:mb-4">
                Who It&apos;s For
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl">
                Who This{" "}
                <span className="block md:inline">
                  Community <span className="font-serif italic text-lime">Is For</span>
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                This community is designed for Shopify app developers, theme
                developers, and engineers working with Shopify APIs. It also
                welcomes developers building headless Shopify storefronts,
                experimenting with Hydrogen, or extending checkout and admin
                functionality.
              </p>
              <p>
                If you spend your time writing code, debugging issues,
                reviewing pull requests, or thinking about architecture
                decisions on Shopify,{" "}
                <span className="text-white font-medium">
                  this community is designed for you
                </span>
                .
              </p>
            </div>

            {/* Tags with staggered animation */}
            <StaggerContainer className="mt-8 md:mt-12 flex flex-wrap gap-2 md:gap-3" staggerDelay={0.08}>
              {developerTags.map((tag) => (
                <StaggerItem key={tag}>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative cursor-default overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-shopify/50 hover:text-white hover:bg-shopify/10 inline-block"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-shopify/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></span>
                    <span className="relative">{tag}</span>
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
