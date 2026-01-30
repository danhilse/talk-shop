"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const DISCORD_BG = "#313338";
const DISCORD_SECONDARY = "#2B2D31";

interface GrowthMessage {
  id: number;
  username: string;
  userColor: string;
  avatar: string;
  badge?: string;
  badgeColor?: string;
  message: string | React.ReactNode;
  reactions?: { emoji: string; count: number }[];
}

const growthMessages: GrowthMessage[] = [
  {
    id: 1,
    username: "scale_sarah",
    userColor: "#E879F9",
    avatar: "📈",
    badge: "GROW",
    badgeColor: "#95BF47",
    message: "Finally cracked the code on email flows. Went from 18% to 34% of revenue from email in 3 months.",
  },
  {
    id: 2,
    username: "cro_master",
    userColor: "#22D3EE",
    avatar: "🎯",
    message: "That's huge! What was the biggest change?",
  },
  {
    id: 3,
    username: "scale_sarah",
    userColor: "#E879F9",
    avatar: "📈",
    badge: "GROW",
    badgeColor: "#95BF47",
    message: "Post-purchase flow segmentation. Different sequences based on AOV and product category.",
  },
  {
    id: 4,
    username: "revenue_ryan",
    userColor: "#F97316",
    avatar: "💰",
    badge: "DTC",
    badgeColor: "#E91E63",
    message: (
      <>
        <p>Been testing something similar with SMS.</p>
        <p className="mt-1.5">Results so far:</p>
        <div className="mt-2 rounded-lg bg-[#2B2D31] p-2.5 font-mono text-xs border border-white/5">
          <div className="flex justify-between"><span className="text-gray-400">Abandoned cart:</span><span className="text-lime">+47% recovery</span></div>
          <div className="flex justify-between mt-1"><span className="text-gray-400">Post-purchase:</span><span className="text-lime">+23% repeat rate</span></div>
        </div>
      </>
    ),
    reactions: [{ emoji: "🔥", count: 5 }, { emoji: "📊", count: 3 }],
  },
  {
    id: 5,
    username: "metrics_mike",
    userColor: "#A78BFA",
    avatar: "📊",
    message: "What's your CAC looking like after these changes? Curious about the full picture.",
  },
];

interface DiscordGrowthChatProps {
  className?: string;
}

export function DiscordGrowthChat({ className = "" }: DiscordGrowthChatProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typingUser, setTypingUser] = useState<GrowthMessage | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let messageIndex = 0;

    const showNextMessage = () => {
      if (messageIndex >= growthMessages.length) {
        // Loop: reset and start again
        setVisibleMessages([]);
        setTypingUser(null);
        messageIndex = 0;
        setTimeout(showNextMessage, 2000);
        return;
      }

      const currentMessage = growthMessages[messageIndex];

      // Show typing indicator
      setTypingUser(currentMessage);

      // Calculate typing duration based on message length
      const messageLength = typeof currentMessage.message === "string"
        ? currentMessage.message.length
        : 80; // estimate for JSX content
      const typingDuration = Math.min(Math.max(messageLength * 15, 800), 2500);

      // After typing, show the message
      setTimeout(() => {
        setTypingUser(null);
        setVisibleMessages(prev => [...prev, currentMessage.id]);
        messageIndex++;

        // Schedule next message
        const pauseBetween = messageIndex < growthMessages.length ? 1200 : 3000;
        setTimeout(showNextMessage, pauseBetween);
      }, typingDuration);
    };

    // Start the sequence
    const startTimeout = setTimeout(showNextMessage, 800);

    return () => clearTimeout(startTimeout);
  }, [hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setHasStarted(true)}
      className={`relative w-full max-w-sm select-none ${className}`}
    >
      {/* Main chat container */}
      <div
        className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40"
        style={{ backgroundColor: DISCORD_BG }}
      >
        {/* Channel header */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b border-white/5"
          style={{ backgroundColor: DISCORD_SECONDARY }}
        >
          <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 15H15.4105L16.4687 9H10.4687L9.41045 15Z" />
          </svg>
          <span className="font-semibold text-white text-sm">growth-strategies</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[10px] text-gray-500">23 online</span>
          </div>
        </div>

        {/* Messages area */}
        <div className="p-4 space-y-3 min-h-[320px] max-h-[400px] overflow-hidden">
          <AnimatePresence mode="popLayout">
            {growthMessages.map((msg) => (
              visibleMessages.includes(msg.id) && (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className="flex gap-2.5"
                >
                  <div
                    className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center text-sm"
                    style={{ backgroundColor: `${msg.userColor}20` }}
                  >
                    {msg.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-xs" style={{ color: msg.userColor }}>
                        {msg.username}
                      </span>
                      {msg.badge && (
                        <span
                          className="rounded px-1 py-0.5 text-[9px] font-bold uppercase"
                          style={{ backgroundColor: msg.badgeColor, color: "white" }}
                        >
                          {msg.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-xs text-gray-300 leading-relaxed">
                      {msg.message}
                    </div>
                    {msg.reactions && msg.reactions.length > 0 && (
                      <div className="flex gap-1 mt-2">
                        {msg.reactions.map((r, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/30 px-1.5 py-0.5 text-[10px]"
                          >
                            <span>{r.emoji}</span>
                            <span className="text-[#5865F2]">{r.count}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          <AnimatePresence>
            {typingUser && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 text-xs text-gray-500 pt-1"
              >
                <div
                  className="h-6 w-6 shrink-0 rounded-full flex items-center justify-center text-[10px]"
                  style={{ backgroundColor: `${typingUser.userColor}20` }}
                >
                  {typingUser.avatar}
                </div>
                <span style={{ color: typingUser.userColor }} className="font-medium">
                  {typingUser.username}
                </span>
                <span>is typing</span>
                <span className="flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1 h-1 rounded-full bg-gray-400"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Message input */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 rounded-lg bg-[#383A40] px-3 py-2">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <span className="flex-1 text-sm text-gray-500">Message #growth-strategies</span>
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
