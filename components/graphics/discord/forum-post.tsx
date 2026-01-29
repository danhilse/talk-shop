"use client";

import { motion } from "framer-motion";

const DISCORD_BG = "#313338";
const DISCORD_SECONDARY = "#2B2D31";

interface ForumPostProps {
  category?: string;
  categoryEmoji?: string;
  author?: string;
  authorColor?: string;
  title?: string;
  preview?: string;
  timeAgo?: string;
  commentCount?: number;
  reactions?: { emoji: string; count: number }[];
  tags?: string[];
  hasImage?: boolean;
  className?: string;
  animated?: boolean;
}

export function DiscordForumPost({
  category = "Markets Pro",
  categoryEmoji = "📊",
  author = "Talk Shop",
  authorColor = "#95BF47",
  title = "Can you have a hybrid markets pro setup?",
  preview = "I want markets pro to handle some countries but not others. i.e For Mexico, France, Spain I want to handle dut...",
  timeAgo = ">30d ago",
  commentCount = 1,
  reactions = [{ emoji: "🔥", count: 1 }],
  tags = [],
  hasImage = false,
  className = "",
  animated = true,
}: ForumPostProps) {
  const Wrapper = animated ? motion.div : "div";

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      })}
      className={`rounded-xl border border-white/10 p-4 select-none ${className}`}
      style={{ backgroundColor: DISCORD_SECONDARY }}
    >
      {/* Category and author */}
      <div className="mb-2 flex items-center gap-2 text-xs">
        <span>{categoryEmoji}</span>
        <span className="text-gray-400">{category}</span>
        {tags.map((tag) => (
          <span key={tag} className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-gray-400">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <div className="flex-1 min-w-0">
          {/* Author line */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold" style={{ color: authorColor }}>
              {author}
            </span>
            <span className="text-xs text-gray-500">{timeAgo}</span>
          </div>

          {/* Title */}
          <h4 className="font-semibold text-white mb-1 line-clamp-2">{title}</h4>

          {/* Preview text */}
          <p className="text-sm text-gray-400 line-clamp-2">{preview}</p>

          {/* Footer */}
          <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z" />
              </svg>
              {commentCount}
            </span>
            {reactions.map((reaction, i) => (
              <span
                key={i}
                className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5"
              >
                <span>{reaction.emoji}</span>
                <span>{reaction.count}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Thumbnail placeholder */}
        {hasImage && (
          <div className="h-20 w-20 shrink-0 rounded-lg bg-gradient-to-br from-shopify/20 to-lime/20"></div>
        )}
      </div>
    </Wrapper>
  );
}

// Forum list variant
export function DiscordForumList({ className = "" }: { className?: string }) {
  const posts = [
    {
      category: "Markets Pro",
      categoryEmoji: "📊",
      author: "Talk Shop",
      authorColor: "#95BF47",
      title: "Can you have a hybrid markets pro setup?",
      preview: "I want markets pro to handle some countries but not others...",
      timeAgo: ">30d ago",
      commentCount: 1,
      reactions: [{ emoji: "🔥", count: 1 }],
    },
    {
      category: "General",
      categoryEmoji: "🌟",
      author: "Ola'sTech",
      authorColor: "#FFD700",
      title: "Free Ecommerce Help",
      preview: "Hi I'm offering Free Ecommerce Help. View my bio link",
      timeAgo: ">30d ago",
      commentCount: 1,
      reactions: [{ emoji: "🔥", count: 0 }],
      tags: ["Shopify Flow", "+3"],
      hasImage: true,
    },
    {
      category: "Markets",
      categoryEmoji: "🌍",
      author: "Ola'sTech",
      authorColor: "#FFD700",
      title: "Getting traffic but yet no sales?",
      preview: "Hi everyone! I'm Moshood, and I've been working with Shopify stores...",
      timeAgo: ">30d ago",
      commentCount: 2,
      reactions: [{ emoji: "🔥", count: 0 }],
      tags: ["Shopify Flow", "+3"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-80 rounded-xl border border-white/10 overflow-hidden select-none ${className}`}
      style={{ backgroundColor: DISCORD_BG }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a.4.4 0 0 1-.53.53l-1.32-.83a.83.83 0 0 0-.96-.1 5.45 5.45 0 0 1-6.2-2.18 5.45 5.45 0 0 1-.27-.72l5.92-5.92c.22.22.42.46.25.74Z" />
            <path d="M15.37 8.74a6.18 6.18 0 0 1-11.6 3c-.3-.92-.33-1.89-.15-2.82.03-.16-.02-.33-.15-.45L2.3 7.31a.4.4 0 0 1 .27-.67l1.3-.1c.2-.01.38-.12.5-.3a6.18 6.18 0 0 1 11-1.5Z" />
          </svg>
          <span className="text-lg">💎</span>
          <span className="font-semibold text-white">help-forum</span>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5">
        <button className="flex items-center gap-1 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h6v-2H3v2ZM3 6v2h18V6H3Zm0 7h12v-2H3v2Z" />
          </svg>
          Sort & View
        </button>
        <button className="ml-auto flex items-center gap-1 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
          Tags
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6Z" />
          </svg>
        </button>
      </div>

      {/* Section header */}
      <div className="px-4 py-2">
        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
          OLDER POSTS
        </span>
      </div>

      {/* Posts */}
      <div className="space-y-2 p-2">
        {posts.map((post, i) => (
          <DiscordForumPost key={i} {...post} animated={true} />
        ))}
      </div>

      {/* FAB */}
      <div className="absolute bottom-4 right-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5865F2] text-white shadow-lg cursor-pointer"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
