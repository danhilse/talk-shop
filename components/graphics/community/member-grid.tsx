"use client";

import { motion } from "framer-motion";

interface Member {
  name: string;
  role?: string;
  color: string;
  status?: "online" | "idle" | "dnd" | "offline";
}

interface MemberGridProps {
  members?: Member[];
  title?: string;
  showCount?: boolean;
  className?: string;
  animated?: boolean;
  variant?: "grid" | "list" | "avatars";
  maxDisplay?: number;
}

const defaultMembers: Member[] = [
  { name: "alex_dev", role: "Developer", color: "#95BF47", status: "online" },
  { name: "sam_builds", role: "App Builder", color: "#C4E456", status: "online" },
  { name: "merchant_pro", role: "Store Owner", color: "#5865F2", status: "idle" },
  { name: "theme_wizard", role: "Theme Dev", color: "#FF6B6B", status: "online" },
  { name: "flow_master", role: "Automation", color: "#FFD700", status: "dnd" },
  { name: "ecom_expert", role: "Consultant", color: "#00CED1", status: "online" },
  { name: "support_hero", role: "Community Mod", color: "#FF69B4", status: "online" },
  { name: "growth_hacker", role: "Marketing", color: "#9370DB", status: "offline" },
];

export function CommunityMemberGrid({
  members = defaultMembers,
  title = "Community Members",
  showCount = true,
  className = "",
  animated = true,
  variant = "grid",
  maxDisplay = 8,
}: MemberGridProps) {
  const displayMembers = members.slice(0, maxDisplay);
  const remaining = members.length - maxDisplay;
  const Wrapper = animated ? motion.div : "div";
  const ItemWrapper = animated ? motion.div : "div";

  const statusColors = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  };

  if (variant === "avatars") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.4 },
        })}
        className={`flex items-center select-none ${className}`}
      >
        <div className="flex -space-x-3">
          {displayMembers.map((member, i) => (
            <ItemWrapper
              key={member.name}
              {...(animated && {
                initial: { opacity: 0, scale: 0 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: i * 0.05, type: "spring" },
              })}
              className="relative"
              style={{ zIndex: maxDisplay - i }}
            >
              <div
                className="h-10 w-10 rounded-full border-2 border-midnight flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: `${member.color}40` }}
                title={member.name}
              >
                {member.name.slice(0, 2).toUpperCase()}
              </div>
              {member.status && (
                <span
                  className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-midnight ${
                    statusColors[member.status]
                  }`}
                />
              )}
            </ItemWrapper>
          ))}
        </div>
        {remaining > 0 && (
          <motion.span
            initial={animated ? { opacity: 0, x: -10 } : undefined}
            animate={animated ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.3 }}
            className="ml-3 text-sm text-gray-400"
          >
            +{remaining} more
          </motion.span>
        )}
      </Wrapper>
    );
  }

  if (variant === "list") {
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
          <h4 className="font-semibold text-white">{title}</h4>
          {showCount && (
            <span className="rounded-full bg-shopify/20 px-2 py-0.5 text-xs font-semibold text-shopify">
              {members.length}
            </span>
          )}
        </div>

        {/* Members */}
        <div className="p-2 space-y-1">
          {displayMembers.map((member, i) => (
            <ItemWrapper
              key={member.name}
              {...(animated && {
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.05 },
              })}
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 cursor-pointer transition-colors"
            >
              <div className="relative">
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: `${member.color}40` }}
                >
                  {member.name.slice(0, 2).toUpperCase()}
                </div>
                {member.status && (
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate ${
                      statusColors[member.status]
                    }`}
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{member.name}</p>
                {member.role && (
                  <p className="text-xs text-gray-500 truncate">{member.role}</p>
                )}
              </div>
            </ItemWrapper>
          ))}
        </div>

        {remaining > 0 && (
          <div className="border-t border-white/5 px-4 py-2">
            <button className="text-xs text-shopify hover:underline">
              View all {members.length} members →
            </button>
          </div>
        )}
      </Wrapper>
    );
  }

  // Grid variant (default)
  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      })}
      className={`rounded-xl border border-white/10 bg-slate p-5 select-none ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-white">{title}</h4>
        {showCount && (
          <span className="text-sm text-gray-500">{members.length} members</span>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-3">
        {displayMembers.map((member, i) => (
          <ItemWrapper
            key={member.name}
            {...(animated && {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: i * 0.05 },
              whileHover: { scale: 1.05 },
            })}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <div className="relative">
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: `${member.color}40` }}
              >
                {member.name.slice(0, 2).toUpperCase()}
              </div>
              {member.status && (
                <span
                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate ${
                    statusColors[member.status]
                  }`}
                />
              )}
            </div>
            <span className="text-xs text-gray-400 truncate max-w-full">{member.name}</span>
          </ItemWrapper>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-4 text-center">
          <button className="text-sm text-shopify hover:underline">
            +{remaining} more members
          </button>
        </div>
      )}
    </Wrapper>
  );
}

// Online now widget
export function CommunityOnlineNow({ className = "" }: { className?: string }) {
  const onlineMembers = defaultMembers.filter((m) => m.status === "online");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-3 rounded-full border border-shopify/30 bg-shopify/10 px-4 py-2 select-none ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify"></span>
      </span>
      <div className="flex -space-x-2">
        {onlineMembers.slice(0, 3).map((member, i) => (
          <div
            key={member.name}
            className="h-6 w-6 rounded-full border-2 border-midnight/50"
            style={{ backgroundColor: `${member.color}40`, zIndex: 3 - i }}
          />
        ))}
      </div>
      <span className="text-sm text-shopify font-medium">
        {onlineMembers.length} online now
      </span>
    </motion.div>
  );
}
