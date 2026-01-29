"use client";

import { motion } from "framer-motion";

const DISCORD_BG = "#313338";
const DISCORD_TERTIARY = "#1E1F22";

interface ServerStatsProps {
  serverName?: string;
  serverEmoji?: string;
  memberCount?: number;
  onlineCount?: number;
  boostLevel?: number;
  boostCount?: number;
  className?: string;
  variant?: "compact" | "detailed";
  animated?: boolean;
}

export function DiscordServerStats({
  serverName = "Talk Shop",
  serverEmoji = "🏠",
  memberCount = 314,
  onlineCount = 47,
  boostLevel = 2,
  boostCount = 15,
  className = "",
  variant = "detailed",
  animated = true,
}: ServerStatsProps) {
  const Wrapper = animated ? motion.div : "div";

  if (variant === "compact") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.4 },
        })}
        className={`inline-flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 select-none ${className}`}
        style={{ backgroundColor: DISCORD_BG }}
      >
        <span className="text-2xl">{serverEmoji}</span>
        <div>
          <div className="font-semibold text-white">{serverName}</div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              {onlineCount} online
            </span>
            <span>•</span>
            <span>{memberCount} members</span>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      })}
      className={`w-72 rounded-xl border border-white/10 overflow-hidden select-none ${className}`}
      style={{ backgroundColor: DISCORD_BG }}
    >
      {/* Banner */}
      <div className="h-24 bg-gradient-to-br from-shopify/40 via-lime/20 to-shopify/30 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#313338] to-transparent"></div>
      </div>

      {/* Server info */}
      <div className="relative px-4 pb-4">
        {/* Server icon */}
        <div className="absolute -top-8 left-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate border-4 border-[#313338] text-3xl">
            {serverEmoji}
          </div>
        </div>

        {/* Name and badges */}
        <div className="pt-10">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-white text-lg">{serverName}</h3>
            {boostLevel > 0 && (
              <span className="flex items-center gap-1 rounded bg-gradient-to-r from-pink-500 to-purple-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                Level {boostLevel}
              </span>
            )}
          </div>

          {/* Stats grid */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <motion.div
              initial={animated ? { opacity: 0, x: -10 } : undefined}
              animate={animated ? { opacity: 1, x: 0 } : undefined}
              transition={{ delay: 0.3 }}
              className="rounded-lg p-3"
              style={{ backgroundColor: DISCORD_TERTIARY }}
            >
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Online
              </div>
              <div className="mt-1 text-2xl font-bold text-white">{onlineCount}</div>
            </motion.div>

            <motion.div
              initial={animated ? { opacity: 0, x: 10 } : undefined}
              animate={animated ? { opacity: 1, x: 0 } : undefined}
              transition={{ delay: 0.4 }}
              className="rounded-lg p-3"
              style={{ backgroundColor: DISCORD_TERTIARY }}
            >
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
                </svg>
                Members
              </div>
              <div className="mt-1 text-2xl font-bold text-white">{memberCount}</div>
            </motion.div>

            {boostCount > 0 && (
              <motion.div
                initial={animated ? { opacity: 0, y: 10 } : undefined}
                animate={animated ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: 0.5 }}
                className="col-span-2 rounded-lg p-3"
                style={{ backgroundColor: DISCORD_TERTIARY }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="h-4 w-4 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6.3 1 .8 1 1.5v3c0 .8-.7 1.5-1.5 1.5h-4.5c-.8 0-1.5-.7-1.5-1.5v-3c0-.7.4-1.2 1-1.5V9.5C9.2 8.1 10.6 7 12 7Zm0 1.2c-.8 0-1.5.5-1.5 1.3v1.5h3V9.5c0-.8-.7-1.3-1.5-1.3Z" />
                    </svg>
                    Server Boosts
                  </div>
                  <span className="text-lg font-bold text-pink-400">{boostCount}</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((boostCount / 14) * 100, 100)}%` }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                  />
                </div>
                <div className="mt-1 text-[10px] text-gray-500">
                  {14 - boostCount > 0 ? `${14 - boostCount} more boosts for Level ${boostLevel + 1}` : "Max level reached!"}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// Online members list
export function DiscordOnlineMembers({ className = "" }: { className?: string }) {
  const members = [
    { name: "alex_dev", status: "online", activity: "Working on Shopify app" },
    { name: "sam_builds", status: "online", activity: "In VS Code" },
    { name: "merchant_pro", status: "idle", activity: "" },
    { name: "theme_wizard", status: "dnd", activity: "Do Not Disturb" },
    { name: "flow_master", status: "online", activity: "In #help-general" },
  ];

  const statusColors = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-56 rounded-xl border border-white/10 p-3 select-none ${className}`}
      style={{ backgroundColor: DISCORD_BG }}
    >
      <div className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500">
        Online — {members.filter((m) => m.status !== "offline").length}
      </div>
      <div className="space-y-2">
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-white/5 cursor-pointer"
          >
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-shopify/20" />
              <span
                className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#313338] ${
                  statusColors[member.status as keyof typeof statusColors]
                }`}
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-white truncate">{member.name}</div>
              {member.activity && (
                <div className="text-[10px] text-gray-500 truncate">{member.activity}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
