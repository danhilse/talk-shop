"use client";

import { motion } from "framer-motion";

const DISCORD_BG = "#313338";

interface ThreadMessage {
  username: string;
  userColor: string;
  message: string | React.ReactNode;
  timestamp?: string;
  badge?: string;
  badgeColor?: string;
  isBot?: boolean;
  hasEmoji?: boolean;
  emoji?: string;
}

interface MessageThreadProps {
  messages?: ThreadMessage[];
  className?: string;
  animated?: boolean;
  showDateDivider?: boolean;
  dateDividerText?: string;
}

const defaultMessages: ThreadMessage[] = [
  {
    username: "Xmaxest | Shopify Fixes",
    userColor: "#FF6B6B",
    timestamp: "12/25/25, 1:48 PM",
    message: "What made it better was the reviews over hundred reviews that makes your store more trusted because if visitors do not trust your store they have no option but to exit your store",
    hasEmoji: true,
    emoji: "🤗",
  },
  {
    username: "Ola'sTech",
    userColor: "#FFD700",
    badge: "GROW",
    badgeColor: "#95BF47",
    timestamp: "1/7/26, 4:30 AM",
    message: (
      <>
        <p>If you run an online store and feel tired replying messages, posting ads, and chasing sales...</p>
        <p className="mt-2">I&apos;m offering a free automation audit to show you how sales can happen even when you&apos;re offline.</p>
        <p className="mt-2">No payment. Just real help.</p>
        <p className="mt-2">Apply in my bio link</p>
      </>
    ),
  },
  {
    username: "Elijah | Shopify sales🎁",
    userColor: "#FF6B6B",
    badge: "DTC",
    badgeColor: "#E91E63",
    timestamp: "1/20/26, 7:20 AM",
    message: (
      <>
        <p>Store owners — quick poll:</p>
        <p className="mt-2">What&apos;s harder right now?</p>
        <div className="mt-2 flex flex-col gap-1">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-[#5865F2]"></span>
            Getting traffic
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-[#5865F2]"></span>
            Converting traffic
          </span>
        </div>
      </>
    ),
  },
];

export function DiscordMessageThread({
  messages = defaultMessages,
  className = "",
  animated = true,
  showDateDivider = true,
  dateDividerText = "January 7, 2026",
}: MessageThreadProps) {
  const MessageWrapper = animated ? motion.div : "div";

  return (
    <motion.div
      initial={animated ? { opacity: 0, x: 40 } : undefined}
      whileInView={animated ? { opacity: 1, x: 0 } : undefined}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`w-full max-w-md rounded-xl border border-white/10 p-4 select-none ${className}`}
      style={{ backgroundColor: DISCORD_BG }}
    >
      <div className="space-y-4">
        {messages.map((msg, i) => (
          <div key={i}>
            {/* Date divider */}
            {showDateDivider && i === 1 && (
              <motion.div
                initial={animated ? { opacity: 0, scaleX: 0 } : undefined}
                whileInView={animated ? { opacity: 1, scaleX: 1 } : undefined}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                className="flex items-center gap-2 py-2"
              >
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-[10px] text-gray-500">{dateDividerText}</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </motion.div>
            )}

            <MessageWrapper
              {...(animated && {
                initial: { opacity: 0, y: 15, x: -10 },
                whileInView: { opacity: 1, y: 0, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
              })}
              className="flex gap-3"
            >
              {/* Avatar */}
              <motion.div
                initial={animated ? { scale: 0 } : undefined}
                whileInView={animated ? { scale: 1 } : undefined}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 300, damping: 20 }}
                className="h-10 w-10 shrink-0 rounded-full"
                style={{ backgroundColor: `${msg.userColor}30` }}
              />

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold" style={{ color: msg.userColor }}>
                    {msg.username}
                  </span>
                  {msg.badge && (
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                      style={{ backgroundColor: msg.badgeColor || "#5865F2", color: "white" }}
                    >
                      {msg.badge}
                    </span>
                  )}
                  {msg.isBot && (
                    <span className="rounded bg-[#5865F2] px-1.5 py-0.5 text-[10px] font-bold text-white">
                      BOT
                    </span>
                  )}
                  <span className="text-[10px] text-gray-500">{msg.timestamp}</span>
                </div>

                {/* Message */}
                <div className="mt-1 text-sm text-gray-300">
                  {typeof msg.message === "string" ? (
                    <p>
                      {msg.message}
                      {msg.hasEmoji && <span className="ml-1">{msg.emoji}</span>}
                    </p>
                  ) : (
                    msg.message
                  )}
                </div>
              </div>
            </MessageWrapper>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Variant: Help Design conversation from screenshot
export function DiscordHelpDesignThread({ className = "" }: { className?: string }) {
  return (
    <DiscordMessageThread
      className={className}
      showDateDivider={true}
      dateDividerText="January 7, 2026"
    />
  );
}

// Variant: Compact single message
export function DiscordSingleMessage({
  username = "merchant_pro",
  userColor = "#5865F2",
  message = "Just hit my first $10k month!",
  emoji = "🚀",
  className = "",
  multiline = true,
}: {
  username?: string;
  userColor?: string;
  message?: string;
  emoji?: string;
  className?: string;
  multiline?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`flex items-start gap-3 rounded-xl border border-white/10 p-3 select-none ${className}`}
      style={{ backgroundColor: DISCORD_BG }}
    >
      <div
        className="h-8 w-8 shrink-0 rounded-full mt-0.5"
        style={{ backgroundColor: `${userColor}30` }}
      />
      <div className="flex-1 min-w-0">
        <span className="font-semibold text-sm" style={{ color: userColor }}>
          {username}
        </span>
        <p className={`text-sm text-gray-300 ${multiline ? '' : 'truncate'}`}>
          {message} {emoji}
        </p>
      </div>
    </motion.div>
  );
}
