"use client";

import { motion } from "framer-motion";

const DISCORD_TERTIARY = "#1E1F22";
const DISCORD_SECONDARY = "#2B2D31";

interface Channel {
  name: string;
  emoji?: string;
  type?: "text" | "voice" | "forum" | "announcement";
  isActive?: boolean;
  unread?: boolean;
}

interface Category {
  name: string;
  channels: Channel[];
  collapsed?: boolean;
}

interface ChannelSidebarProps {
  serverName?: string;
  serverEmoji?: string;
  memberCount?: number;
  categories?: Category[];
  className?: string;
  animated?: boolean;
  variant?: "compact" | "default" | "expanded";
}

const defaultCategories: Category[] = [
  {
    name: "News-and-Changelog",
    channels: [
      { name: "ecommerce-trends", emoji: "💡", type: "announcement", isActive: true },
      { name: "shopify-changelog", emoji: "⚡", type: "announcement" },
    ],
  },
  {
    name: "Welcome",
    channels: [
      { name: "events", emoji: "📅" },
      { name: "welcome", emoji: "⭐" },
      { name: "announcements", emoji: "⭐" },
    ],
  },
  {
    name: "Shopify Community",
    channels: [
      { name: "just-joining", emoji: "💬" },
      { name: "introductions", emoji: "💬" },
      { name: "help-general", emoji: "💬", unread: true },
      { name: "show-and-tell", emoji: "💬" },
      { name: "memes", emoji: "💬" },
    ],
  },
  {
    name: "Members Support",
    channels: [
      { name: "help-forum", emoji: "💎", type: "forum" },
      { name: "help-shopify-core", emoji: "💎" },
    ],
  },
];

export function DiscordChannelSidebar({
  serverName = "Talk Shop",
  serverEmoji = "🏠",
  memberCount = 314,
  categories = defaultCategories,
  className = "",
  animated = true,
  variant = "default",
}: ChannelSidebarProps) {
  const sizes = {
    compact: "w-48 text-xs",
    default: "w-56 text-sm",
    expanded: "w-64 text-sm",
  };

  const Wrapper = animated ? motion.div : "div";
  const ItemWrapper = animated ? motion.div : "div";

  const getChannelIcon = (type?: string) => {
    switch (type) {
      case "voice":
        return (
          <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3ZM17 8a1 1 0 0 0-1-1h-4v12h4a1 1 0 0 0 1-1V8Z" />
          </svg>
        );
      case "forum":
        return (
          <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a.4.4 0 0 1-.53.53l-1.32-.83a.83.83 0 0 0-.96-.1 5.45 5.45 0 0 1-6.2-2.18 5.45 5.45 0 0 1-.27-.72l5.92-5.92c.22.22.42.46.25.74Z" />
            <path d="M15.37 8.74a6.18 6.18 0 0 1-11.6 3c-.3-.92-.33-1.89-.15-2.82.03-.16-.02-.33-.15-.45L2.3 7.31a.4.4 0 0 1 .27-.67l1.3-.1c.2-.01.38-.12.5-.3a6.18 6.18 0 0 1 11-1.5Z" />
          </svg>
        );
      case "announcement":
        return (
          <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.7 6.3c-.7-.6-1.7-.6-2.4 0l-7.3 6-7.3-6c-.7-.6-1.7-.6-2.4 0-.6.7-.6 1.7 0 2.4l7.3 6v7.3c0 1 .8 1.7 1.7 1.7s1.7-.7 1.7-1.7v-7.3l7.3-6c.6-.7.6-1.7-.6-2.4Z" />
          </svg>
        );
      default:
        return (
          <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 15H15.4105L16.4687 9H10.4687L9.41045 15Z" />
          </svg>
        );
    }
  };

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
      })}
      className={`${sizes[variant]} rounded-xl border border-white/10 overflow-hidden shadow-2xl select-none ${className}`}
      style={{ backgroundColor: DISCORD_SECONDARY }}
    >
      {/* Server header */}
      <div
        className="flex items-center gap-2 p-4 border-b border-white/5"
        style={{ backgroundColor: DISCORD_TERTIARY }}
      >
        <span className="text-lg">{serverEmoji}</span>
        <div>
          <div className="font-semibold text-white">{serverName}</div>
          <div className="text-xs text-gray-500">{memberCount} Members • Community</div>
        </div>
      </div>

      {/* Search bar */}
      <div className="p-2">
        <div className="flex items-center gap-2 rounded bg-black/20 px-3 py-1.5 text-xs text-gray-500">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
          </svg>
          Search
        </div>
      </div>

      {/* Categories and channels */}
      <div className="max-h-72 overflow-y-auto p-2 space-y-3">
        {categories.map((category, catIdx) => (
          <ItemWrapper
            key={category.name}
            {...(animated && {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2 + catIdx * 0.1 },
            })}
          >
            <div className="flex items-center gap-1 px-1 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6Z" />
              </svg>
              {category.name}
            </div>
            <div className="space-y-0.5">
              {category.channels.map((channel) => (
                <div
                  key={channel.name}
                  className={`flex items-center gap-2 rounded px-2 py-1 cursor-pointer transition-colors ${
                    channel.isActive
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {channel.emoji ? (
                    <span className="text-sm">{channel.emoji}</span>
                  ) : (
                    getChannelIcon(channel.type)
                  )}
                  <span className={channel.unread ? "font-semibold text-white" : ""}>
                    {channel.name}
                  </span>
                  {channel.unread && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-white"></span>
                  )}
                </div>
              ))}
            </div>
          </ItemWrapper>
        ))}
      </div>
    </Wrapper>
  );
}

// Variant: Minimal server list (left sidebar icons)
export function DiscordServerList({ className = "" }: { className?: string }) {
  const servers = [
    { emoji: "💬", active: false, notifications: 0 },
    { emoji: "🏠", active: true, notifications: 0, isTalkShop: true },
    { emoji: "🛡️", active: false, notifications: 13 },
    { emoji: "🐙", active: false, notifications: 0 },
    { emoji: "⚡", active: false, notifications: 1 },
    { emoji: "🌊", active: false, notifications: 0 },
    { emoji: "🔶", active: false, notifications: 57 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center gap-2 p-2 rounded-xl border border-white/10 select-none ${className}`}
      style={{ backgroundColor: DISCORD_TERTIARY }}
    >
      {servers.map((server, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + i * 0.05 }}
          className="relative"
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl transition-all cursor-pointer ${
              server.active
                ? "rounded-xl bg-shopify text-midnight"
                : server.isTalkShop
                ? "bg-shopify/20 hover:rounded-xl hover:bg-shopify/30"
                : "bg-carbon hover:rounded-xl hover:bg-carbon/80"
            }`}
          >
            {server.emoji}
          </div>
          {server.notifications > 0 && (
            <span className="absolute -bottom-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              {server.notifications}
            </span>
          )}
          {server.active && (
            <span className="absolute -left-2 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-white"></span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
