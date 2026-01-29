"use client";

import { motion } from "framer-motion";

interface Reaction {
  emoji: string;
  count: number;
  reacted?: boolean;
}

interface ReactionBarProps {
  reactions?: Reaction[];
  className?: string;
  animated?: boolean;
  showAddButton?: boolean;
  size?: "sm" | "md" | "lg";
}

const defaultReactions: Reaction[] = [
  { emoji: "🔥", count: 12, reacted: true },
  { emoji: "👍", count: 8 },
  { emoji: "💚", count: 5 },
  { emoji: "🚀", count: 3, reacted: true },
];

export function DiscordReactionBar({
  reactions = defaultReactions,
  className = "",
  animated = true,
  showAddButton = true,
  size = "md",
}: ReactionBarProps) {
  const sizes = {
    sm: "text-xs px-1.5 py-0.5 gap-1",
    md: "text-sm px-2 py-1 gap-1.5",
    lg: "text-base px-3 py-1.5 gap-2",
  };

  const Wrapper = animated ? motion.div : "div";
  const ItemWrapper = animated ? motion.button : "button";

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 5 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
      })}
      className={`flex flex-wrap gap-1 select-none ${className}`}
    >
      {reactions.map((reaction, i) => (
        <ItemWrapper
          key={`${reaction.emoji}-${i}`}
          {...(animated && {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: i * 0.05 },
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.95 },
          })}
          className={`inline-flex items-center rounded-full border transition-colors ${sizes[size]} ${
            reaction.reacted
              ? "border-[#5865F2]/50 bg-[#5865F2]/20 text-[#5865F2]"
              : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
          }`}
        >
          <span>{reaction.emoji}</span>
          <span className="font-medium">{reaction.count}</span>
        </ItemWrapper>
      ))}

      {showAddButton && (
        <ItemWrapper
          {...(animated && {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: reactions.length * 0.05 },
            whileHover: { scale: 1.1 },
          })}
          className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-300 transition-colors ${sizes[size]}`}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </ItemWrapper>
      )}
    </Wrapper>
  );
}

// Reaction popup/picker preview
export function DiscordReactionPicker({ className = "" }: { className?: string }) {
  const frequentEmojis = ["👍", "👎", "❤️", "🔥", "🎉", "🚀", "💯", "✅"];
  const recentEmojis = ["💚", "🛍️", "📈", "💰", "🎯", "⚡", "🏆", "💎"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`w-64 rounded-xl border border-white/10 bg-[#2B2D31] p-3 shadow-xl select-none ${className}`}
    >
      {/* Search */}
      <div className="mb-3">
        <div className="flex items-center gap-2 rounded-lg bg-black/20 px-3 py-2 text-sm text-gray-500">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
          </svg>
          Find the perfect emoji
        </div>
      </div>

      {/* Frequent */}
      <div className="mb-3">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-gray-500">
          Frequently Used
        </div>
        <div className="flex flex-wrap gap-1">
          {frequentEmojis.map((emoji, i) => (
            <motion.button
              key={emoji}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ scale: 1.2 }}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-xl hover:bg-white/10"
            >
              {emoji}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Recent */}
      <div>
        <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-gray-500">
          Shopify & E-commerce
        </div>
        <div className="flex flex-wrap gap-1">
          {recentEmojis.map((emoji, i) => (
            <motion.button
              key={emoji}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.02 }}
              whileHover={{ scale: 1.2 }}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-xl hover:bg-white/10"
            >
              {emoji}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Message with reactions attached
export function DiscordMessageWithReactions({
  username = "Heritage",
  userColor = "#FFB347",
  message = "Q1 starting strong! Semi automated ops, stable scaling, no stock issues 🙌",
  reactions = defaultReactions,
  className = "",
}: {
  username?: string;
  userColor?: string;
  message?: string;
  reactions?: Reaction[];
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border border-white/10 bg-[#313338] p-4 select-none ${className}`}
    >
      <div className="flex gap-3">
        <div
          className="h-10 w-10 shrink-0 rounded-full"
          style={{ backgroundColor: `${userColor}30` }}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: userColor }}>
              {username}
            </span>
            <span className="text-[10px] text-gray-500">Today at 4:52 PM</span>
          </div>
          <p className="mt-1 text-sm text-gray-300">{message}</p>
          <div className="mt-2">
            <DiscordReactionBar reactions={reactions} size="sm" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
