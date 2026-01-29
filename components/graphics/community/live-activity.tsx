"use client";

import { motion } from "framer-motion";

interface Activity {
  type: "message" | "join" | "reaction" | "thread" | "achievement";
  user: string;
  userColor: string;
  content: string;
  timestamp: string;
  channel?: string;
}

interface LiveActivityProps {
  activities?: Activity[];
  title?: string;
  className?: string;
  animated?: boolean;
  variant?: "feed" | "compact" | "ticker";
}

const defaultActivities: Activity[] = [
  { type: "message", user: "alex_dev", userColor: "#95BF47", content: "Just solved a tricky webhook issue!", timestamp: "Just now", channel: "shopify-dev" },
  { type: "join", user: "new_merchant", userColor: "#5865F2", content: "joined the community", timestamp: "2m ago" },
  { type: "reaction", user: "sam_builds", userColor: "#C4E456", content: "reacted with 🔥 to your message", timestamp: "5m ago" },
  { type: "thread", user: "theme_wizard", userColor: "#FF6B6B", content: "started a thread: \"Dawn theme customization tips\"", timestamp: "8m ago", channel: "themes" },
  { type: "achievement", user: "merchant_pro", userColor: "#FFD700", content: "earned the \"Helpful\" badge", timestamp: "12m ago" },
];

export function CommunityLiveActivity({
  activities = defaultActivities,
  title = "Live Activity",
  className = "",
  animated = true,
  variant = "feed",
}: LiveActivityProps) {
  const Wrapper = animated ? motion.div : "div";
  const ItemWrapper = animated ? motion.div : "div";

  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "message":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z" />
          </svg>
        );
      case "join":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
          </svg>
        );
      case "reaction":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5Zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11Zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5Z" />
          </svg>
        );
      case "thread":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 6h-2V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v13l4-4h9v2c0 1.1.9 2 2 2h5.17L23 19V8c0-1.1-.9-2-2-2ZM17 11H5V6h12v5Z" />
          </svg>
        );
      case "achievement":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2Z" />
          </svg>
        );
    }
  };

  if (variant === "ticker") {
    return (
      <div className={`overflow-hidden rounded-xl border border-white/10 bg-slate select-none ${className}`}>
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify"></span>
          </span>
          <span className="text-xs font-semibold text-gray-400 uppercase">{title}</span>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-6 whitespace-nowrap px-4 py-3"
          >
            {[...activities, ...activities].map((activity, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm">
                <span style={{ color: activity.userColor }}>{activity.user}</span>
                <span className="text-gray-500">{activity.content}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        })}
        className={`space-y-1 select-none ${className}`}
      >
        {activities.slice(0, 4).map((activity, i) => (
          <ItemWrapper
            key={i}
            {...(animated && {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: i * 0.1 },
            })}
            className="flex items-center gap-2 text-xs"
          >
            <span style={{ color: activity.userColor }}>{activity.user}</span>
            <span className="text-gray-500 truncate">{activity.content}</span>
          </ItemWrapper>
        ))}
      </Wrapper>
    );
  }

  // Feed variant (default)
  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      })}
      className={`rounded-xl border border-white/10 bg-slate overflow-hidden select-none ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify"></span>
          </span>
          <h4 className="font-semibold text-white">{title}</h4>
        </div>
        <span className="text-xs text-gray-500">Real-time</span>
      </div>

      {/* Activities */}
      <div className="divide-y divide-white/5">
        {activities.map((activity, i) => (
          <ItemWrapper
            key={i}
            {...(animated && {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.1 + i * 0.1 },
            })}
            className="flex items-start gap-3 p-4 hover:bg-white/5 transition-colors"
          >
            {/* Icon */}
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: `${activity.userColor}20`, color: activity.userColor }}
            >
              {getActivityIcon(activity.type)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-semibold" style={{ color: activity.userColor }}>
                  {activity.user}
                </span>
                <span className="text-gray-400"> {activity.content}</span>
              </p>
              <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                <span>{activity.timestamp}</span>
                {activity.channel && (
                  <>
                    <span>•</span>
                    <span>#{activity.channel}</span>
                  </>
                )}
              </div>
            </div>
          </ItemWrapper>
        ))}
      </div>
    </Wrapper>
  );
}

// Activity summary stats
export function CommunityActivityStats({ className = "" }: { className?: string }) {
  const stats = [
    { label: "Messages Today", value: "1,247", change: "+12%" },
    { label: "Active Threads", value: "89", change: "+5%" },
    { label: "New Members", value: "23", change: "+18%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`grid grid-cols-3 gap-4 select-none ${className}`}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-xl border border-white/10 bg-slate p-4 text-center"
        >
          <p className="text-2xl font-bold text-white">{stat.value}</p>
          <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
          <span className="mt-2 inline-block rounded-full bg-shopify/10 px-2 py-0.5 text-xs text-shopify">
            {stat.change}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
