"use client";

import { motion } from "framer-motion";

const DISCORD_BG = "#313338";

interface TypingIndicatorProps {
  users?: string[];
  className?: string;
  variant?: "inline" | "standalone" | "bubble";
}

export function DiscordTypingIndicator({
  users = ["alex_dev", "sam_builds", "merchant_pro"],
  className = "",
  variant = "standalone",
}: TypingIndicatorProps) {
  const displayText = () => {
    if (users.length === 1) {
      return <><span className="font-semibold text-white">{users[0]}</span> is typing</>;
    } else if (users.length === 2) {
      return (
        <>
          <span className="font-semibold text-white">{users[0]}</span> and{" "}
          <span className="font-semibold text-white">{users[1]}</span> are typing
        </>
      );
    } else if (users.length === 3) {
      return (
        <>
          <span className="font-semibold text-white">{users[0]}</span>,{" "}
          <span className="font-semibold text-white">{users[1]}</span>, and{" "}
          <span className="font-semibold text-white">{users[2]}</span> are typing
        </>
      );
    } else {
      return <>Several people are typing</>;
    }
  };

  const dots = (
    <span className="ml-1 inline-flex gap-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1 w-1 rounded-full bg-gray-400"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </span>
  );

  if (variant === "inline") {
    return (
      <span className={`inline-flex items-center gap-1 text-xs text-gray-400 ${className}`}>
        {displayText()}
        {dots}
      </span>
    );
  }

  if (variant === "bubble") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className={`inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-400 ${className}`}
      >
        <span className="flex -space-x-2">
          {users.slice(0, 3).map((_, i) => (
            <div
              key={i}
              className="h-5 w-5 rounded-full border-2 border-[#313338] bg-shopify/30"
            />
          ))}
        </span>
        {displayText()}
        {dots}
      </motion.div>
    );
  }

  // Standalone (default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border border-white/10 p-3 text-xs text-gray-400 select-none ${className}`}
      style={{ backgroundColor: DISCORD_BG }}
    >
      <div className="flex items-center gap-2">
        <span className="flex -space-x-1.5">
          {users.slice(0, 3).map((_, i) => (
            <div
              key={i}
              className="h-6 w-6 rounded-full border-2 border-[#313338]"
              style={{
                backgroundColor: i === 0 ? "#95BF4730" : i === 1 ? "#C4E45630" : "#5865F230",
              }}
            />
          ))}
        </span>
        <span>
          {displayText()}
          {dots}
        </span>
      </div>
    </motion.div>
  );
}

// Animated typing dots only
export function TypingDots({ className = "", size = "sm" }: { className?: string; size?: "xs" | "sm" | "md" }) {
  const sizes = {
    xs: "h-1 w-1",
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
  };

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className={`${sizes[size]} rounded-full bg-current`}
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </span>
  );
}
