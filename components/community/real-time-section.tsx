"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { realTimeValueProps } from "@/lib/data";
import { useState, useEffect } from "react";

// Typing indicator component
function TypingIndicator({ username, color }: { username: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      className="flex items-center gap-2 text-[10px] text-gray-500 pl-10"
    >
      <span className="font-medium" style={{ color }}>{username}</span>
      <span>is typing</span>
      <span className="flex gap-0.5">
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          className="w-1 h-1 rounded-full bg-gray-400"
        />
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
          className="w-1 h-1 rounded-full bg-gray-400"
        />
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
          className="w-1 h-1 rounded-full bg-gray-400"
        />
      </span>
    </motion.div>
  );
}

export function RealTimeSection() {
  return (
    <section id="real-time" className="relative overflow-hidden bg-midnight">
      {/* Left half background */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-shopify/5 to-transparent"></div>

      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Left column - Content */}
          <SlideIn direction="left" className="relative px-6 py-16 md:py-24 lg:pr-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 md:mb-6 block">
              Why Real-Time
            </span>
            <h2 className="mb-6 md:mb-8 text-3xl sm:text-4xl font-bold leading-none sm:leading-tight tracking-tight text-white lg:text-5xl">
              Why Real-Time{" "}
              <span className="block font-serif italic text-lime mt-1 md:mt-2">Matters</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                Development work often requires quick feedback and iteration.
                Waiting days for a forum response can slow down progress and
                introduce unnecessary friction. A real-time Shopify developer
                community allows builders to ask questions when they are
                blocked and get answers from others who have already solved
                similar problems.
              </p>
              <p>
                This kind of collaboration helps developers move faster, avoid
                common mistakes, and{" "}
                <span className="text-white font-medium">
                  build better products on Shopify
                </span>
                .
              </p>
            </div>

            {/* Value props */}
            <StaggerContainer className="mt-8 md:mt-12 grid gap-4 md:gap-6" staggerDelay={0.15}>
              {realTimeValueProps.map((item) => (
                <StaggerItem key={item.label}>
                  <motion.div
                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="group flex items-start gap-4 p-4 -mx-4 rounded-xl transition-colors"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-shopify/10 text-2xl shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div className="text-lg font-bold text-white">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideIn>

          {/* Right column - Visual */}
          <SlideIn direction="right" delay={0.2} className="relative px-6 py-16 md:py-24 lg:pl-16 flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-l from-lime/5 to-transparent"></div>

            <div className="relative w-full max-w-md">
              {/* Chat with decorative elements */}
              <div className="relative">
                {/* Rotating border - taller */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-3xl border border-dashed border-shopify/30 -z-10"
                />

                {/* Main card - Discord chat */}
                <DiscordChatAnimation />

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-6 -right-6 rounded-full bg-shopify px-4 py-2 text-xs font-bold text-midnight shadow-lg z-10"
                >
                  24/7 Active
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-6 -left-6 rounded-full bg-lime px-4 py-2 text-xs font-bold text-midnight shadow-lg z-10"
                >
                  300+ Devs
                </motion.div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

// Animated Discord chat component
function DiscordChatAnimation() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [typingUser, setTypingUser] = useState<{ name: string; color: string } | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [showSolved, setShowSolved] = useState(false);

  const messages = [
    { id: 1, user: "stuck_dev", color: "#FB923C", avatar: "🔧", text: "My webhook keeps returning 401. Already verified the HMAC - what am I missing?", time: "2:34 PM" },
    { id: 2, user: "api_expert", color: "#95BF47", avatar: "⚡", badge: "APP", badgeColor: "#95BF47", text: "Check if you're reading the raw body before any middleware parses it", time: "2:35 PM" },
    { id: 3, user: "webhook_wizard", color: "#A78BFA", avatar: "🧩", text: "Also make sure you're using the correct API secret, not the app secret", time: "2:35 PM" },
    { id: 4, user: "@TalkShop", color: "#22D3EE", avatar: "🤖", badge: "BOT", badgeColor: "#5865F2", isCode: true, time: "2:35 PM" },
    { id: 5, user: "stuck_dev", color: "#FB923C", avatar: "🔧", text: "That was it! Working now 🎉 Thanks everyone!", time: "2:36 PM", hasReactions: true },
  ];

  useEffect(() => {
    if (!isInView) return;

    const sequence = [
      // Initial delay to let user see the empty chat
      { action: "message", delay: 800 },
      // Typing, then message 2
      { action: "typing", user: "api_expert", color: "#95BF47", delay: 1000 },
      { action: "message", delay: 800 },
      // Typing, then message 3
      { action: "typing", user: "webhook_wizard", color: "#A78BFA", delay: 700 },
      { action: "message", delay: 900 },
      // Typing, then bot message
      { action: "typing", user: "@TalkShop", color: "#22D3EE", delay: 600 },
      { action: "message", delay: 1000 },
      // Typing, then final message
      { action: "typing", user: "stuck_dev", color: "#FB923C", delay: 800 },
      { action: "message", delay: 700 },
      // Show solved indicator
      { action: "solved", delay: 500 },
    ];

    let totalDelay = 0;
    const timeouts: NodeJS.Timeout[] = [];

    sequence.forEach((step) => {
      totalDelay += step.delay;
      const timeout = setTimeout(() => {
        if (step.action === "typing" && step.user) {
          setTypingUser({ name: step.user, color: step.color || "#fff" });
        } else if (step.action === "message") {
          setTypingUser(null);
          setVisibleMessages((prev) => prev + 1);
        } else if (step.action === "solved") {
          setShowSolved(true);
        }
      }, totalDelay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={() => setIsInView(true)}
      transition={{ delay: 0.3 }}
      className="rounded-2xl border border-white/10 bg-[#313338] overflow-hidden shadow-2xl"
    >
      {/* Channel header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#2B2D31]">
        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657Z" />
        </svg>
        <span className="text-sm font-semibold text-white">help-code</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-gray-400">47 online</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-4 space-y-4 min-h-[420px]">
        <AnimatePresence mode="popLayout">
          {messages.slice(0, visibleMessages).map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="flex gap-3"
            >
              <div
                className="h-9 w-9 rounded-full shrink-0 flex items-center justify-center text-base"
                style={{ backgroundColor: `${msg.color}20` }}
              >
                {msg.avatar}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold" style={{ color: msg.color }}>{msg.user}</span>
                  {msg.badge && (
                    <span
                      className="rounded px-1 py-0.5 text-[9px] font-bold uppercase"
                      style={{ backgroundColor: msg.badgeColor, color: msg.badge === "BOT" ? "white" : "#0D0D0D" }}
                    >
                      {msg.badge}
                    </span>
                  )}
                  <span className="text-[10px] text-gray-500">{msg.time}</span>
                </div>
                {msg.isCode ? (
                  <div className="mt-2 rounded-lg bg-[#2B2D31] p-3 text-xs font-mono border border-white/5">
                    <div className="text-gray-400 mb-1">// Use raw body for HMAC verification</div>
                    <div><span className="text-purple-400">app</span>.use(<span className="text-lime">&apos;/webhooks&apos;</span>,</div>
                    <div className="ml-3"><span className="text-cyan-400">express</span>.raw({"{"}type: <span className="text-lime">&apos;application/json&apos;</span>{"}"}))</div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-300 mt-1">{msg.text}</p>
                )}
                {msg.hasReactions && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-1.5 mt-2"
                  >
                    <span className="flex items-center gap-1 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/30 px-2 py-1 text-xs">
                      <span>🙌</span>
                      <span className="text-[#5865F2]">3</span>
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-shopify/20 border border-shopify/30 px-2 py-1 text-xs">
                      <span>✅</span>
                      <span className="text-shopify">2</span>
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {typingUser && (
            <TypingIndicator username={typingUser.name} color={typingUser.color} />
          )}
        </AnimatePresence>

        {/* Solved indicator */}
        <AnimatePresence>
          {showSolved && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 pt-2"
            >
              <div className="h-px flex-1 bg-lime/20" />
              <span className="text-xs text-lime font-semibold flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Solved in 2 minutes
              </span>
              <div className="h-px flex-1 bg-lime/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Message input */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-3 rounded-lg bg-[#383A40] px-4 py-3">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
          <span className="flex-1 text-sm text-gray-500">Message #help-code</span>
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-14 right-4 h-8 w-8 border-r-2 border-t-2 border-lime/30 rounded-tr-lg pointer-events-none"></div>
      <div className="absolute bottom-16 left-4 h-8 w-8 border-l-2 border-b-2 border-lime/30 rounded-bl-lg pointer-events-none"></div>
    </motion.div>
  );
}
