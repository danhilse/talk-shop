"use client";

import { motion } from "framer-motion";

const DISCORD_BG = "#313338";

interface AIBotResponseProps {
  botName?: string;
  botColor?: string;
  userMentioned?: string;
  question?: string;
  response?: string;
  sources?: string[];
  className?: string;
  animated?: boolean;
  showThinking?: boolean;
}

export function DiscordAIBotResponse({
  botName = "@Talk Shop",
  botColor = "#95BF47",
  userMentioned = "alex_dev",
  question = "How do I handle webhook retries?",
  response = "Great question! For handling webhook retries in Shopify, you should implement idempotency keys to prevent duplicate processing. Store the webhook ID and check against it before processing. Here's a quick overview...",
  sources = ["Shopify Docs: Webhooks", "Best Practices Guide"],
  className = "",
  animated = true,
  showThinking = false,
}: AIBotResponseProps) {
  const Wrapper = animated ? motion.div : "div";

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      })}
      className={`w-full max-w-md rounded-xl border border-white/10 overflow-hidden select-none ${className}`}
      style={{ backgroundColor: DISCORD_BG }}
    >
      {/* User question */}
      <div className="border-b border-white/5 p-4">
        <div className="flex gap-3">
          <div className="h-8 w-8 shrink-0 rounded-full bg-[#5865F2]/30" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#5865F2]">{userMentioned}</span>
              <span className="text-[10px] text-gray-500">just now</span>
            </div>
            <p className="mt-1 text-sm text-gray-300">{question}</p>
          </div>
        </div>
      </div>

      {/* Bot response */}
      <div className="p-4">
        <div className="flex gap-3">
          {/* Bot avatar */}
          <div className="h-8 w-8 shrink-0 rounded-full bg-shopify/20 flex items-center justify-center">
            <svg className="h-5 w-5 text-shopify" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86Zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93ZM13 7h5.24c.25.31.48.65.68 1H13V7Zm0 3h6.74c.08.33.15.66.19 1H13v-1Zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93ZM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1Zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1Z" />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            {/* Bot header */}
            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: botColor }}>
                {botName}
              </span>
              <span className="rounded bg-[#5865F2] px-1.5 py-0.5 text-[10px] font-bold text-white">
                BOT
              </span>
              <span className="rounded bg-shopify/20 px-1.5 py-0.5 text-[10px] font-bold text-shopify">
                ARC
              </span>
            </div>

            {/* Response content */}
            {showThinking ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2"
              >
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-4 w-4"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
                    </svg>
                  </motion.div>
                  <span>Thinking...</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={animated ? { opacity: 0, y: 5 } : undefined}
                animate={animated ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: 0.3 }}
              >
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">{response}</p>

                {/* Sources */}
                {sources.length > 0 && (
                  <div className="mt-3 rounded-lg bg-white/5 p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-2">
                      Sources
                    </div>
                    <div className="space-y-1">
                      {sources.map((source, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#5865F2]">
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" />
                          </svg>
                          {source}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// Compact AI suggestion chip
export function DiscordAISuggestion({
  suggestion = "Try using idempotency keys",
  className = "",
}: {
  suggestion?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`inline-flex items-center gap-2 rounded-full border border-shopify/30 bg-shopify/10 px-3 py-1.5 cursor-pointer select-none ${className}`}
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-shopify/20">
        <svg className="h-3 w-3 text-shopify" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z" />
        </svg>
      </span>
      <span className="text-sm text-shopify">{suggestion}</span>
      <svg className="h-4 w-4 text-shopify/50" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41Z" />
      </svg>
    </motion.div>
  );
}

// AI-powered context menu
export function DiscordAIContextMenu({ className = "" }: { className?: string }) {
  const options = [
    { icon: "💡", label: "Explain this", shortcut: "E" },
    { icon: "📝", label: "Summarize thread", shortcut: "S" },
    { icon: "🔍", label: "Find similar discussions", shortcut: "F" },
    { icon: "📚", label: "Search Shopify docs", shortcut: "D" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`w-64 rounded-xl border border-white/10 bg-[#2B2D31] p-2 shadow-xl select-none ${className}`}
    >
      <div className="mb-2 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
        AI Actions
      </div>
      {options.map((option, i) => (
        <motion.button
          key={option.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm text-gray-300"
        >
          <span className="text-lg">{option.icon}</span>
          <span className="flex-1">{option.label}</span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-gray-500">
            {option.shortcut}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
}
