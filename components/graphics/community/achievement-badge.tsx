"use client";

import { motion } from "framer-motion";

interface AchievementBadgeProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  level?: "bronze" | "silver" | "gold" | "platinum" | "diamond";
  progress?: number;
  unlocked?: boolean;
  className?: string;
  animated?: boolean;
  variant?: "default" | "compact" | "showcase";
}

export function CommunityAchievementBadge({
  title = "First Post",
  description = "Made your first community post",
  icon,
  level = "gold",
  progress = 100,
  unlocked = true,
  className = "",
  animated = true,
  variant = "default",
}: AchievementBadgeProps) {
  const levelColors = {
    bronze: { bg: "#CD7F32", ring: "#A0522D", glow: "#CD7F3240" },
    silver: { bg: "#C0C0C0", ring: "#A8A8A8", glow: "#C0C0C040" },
    gold: { bg: "#FFD700", ring: "#DAA520", glow: "#FFD70040" },
    platinum: { bg: "#E5E4E2", ring: "#B4B4B4", glow: "#E5E4E240" },
    diamond: { bg: "#B9F2FF", ring: "#00CED1", glow: "#B9F2FF40" },
  };

  const colors = levelColors[level];
  const Wrapper = animated ? motion.div : "div";

  const defaultIcon = (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );

  if (variant === "compact") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { type: "spring" },
          whileHover: { scale: 1.05 },
        })}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 select-none ${
          unlocked
            ? "border-white/20 bg-white/5"
            : "border-white/10 bg-white/5 opacity-50"
        } ${className}`}
      >
        <span style={{ color: unlocked ? colors.bg : "#666" }}>
          {icon || defaultIcon}
        </span>
        <span className={`text-sm font-medium ${unlocked ? "text-white" : "text-gray-500"}`}>
          {title}
        </span>
      </Wrapper>
    );
  }

  if (variant === "showcase") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
        })}
        className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate to-carbon p-6 text-center select-none ${className}`}
      >
        {/* Badge icon with glow */}
        <div className="relative mx-auto mb-4 w-fit">
          <motion.div
            animate={unlocked ? { scale: [1, 1.1, 1] } : undefined}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-xl"
            style={{ backgroundColor: unlocked ? colors.glow : "transparent" }}
          />
          <div
            className={`relative flex h-20 w-20 items-center justify-center rounded-full ${
              unlocked ? "ring-4" : "bg-white/5"
            }`}
            style={{
              backgroundColor: unlocked ? `${colors.bg}20` : undefined,
              color: unlocked ? colors.bg : "#666",
              "--tw-ring-color": unlocked ? colors.ring : undefined,
            } as React.CSSProperties & { "--tw-ring-color"?: string }}
          >
            <div className="h-10 w-10">{icon || defaultIcon}</div>
          </div>
        </div>

        {/* Title */}
        <h4 className={`text-lg font-bold ${unlocked ? "text-white" : "text-gray-500"}`}>
          {title}
        </h4>

        {/* Description */}
        <p className="mt-1 text-sm text-gray-400">{description}</p>

        {/* Level badge */}
        <div className="mt-4 inline-flex items-center gap-1 rounded-full px-3 py-1" style={{ backgroundColor: `${colors.bg}20` }}>
          <span className="text-xs font-bold uppercase" style={{ color: colors.bg }}>
            {level}
          </span>
        </div>

        {/* Progress bar for locked achievements */}
        {!unlocked && progress < 100 && (
          <div className="mt-4">
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full rounded-full"
                style={{ backgroundColor: colors.bg }}
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">{progress}% complete</p>
          </div>
        )}
      </Wrapper>
    );
  }

  // Default variant
  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { type: "spring" },
        whileHover: { scale: 1.02 },
      })}
      className={`flex items-center gap-4 rounded-xl border p-4 select-none ${
        unlocked
          ? "border-white/10 bg-slate"
          : "border-white/5 bg-slate/50 opacity-60"
      } ${className}`}
    >
      {/* Icon */}
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
          unlocked ? "ring-2" : "bg-white/5"
        }`}
        style={{
          backgroundColor: unlocked ? `${colors.bg}20` : undefined,
          color: unlocked ? colors.bg : "#666",
          "--tw-ring-color": unlocked ? colors.ring : undefined,
        } as React.CSSProperties & { "--tw-ring-color"?: string }}
      >
        <div className="h-7 w-7">{icon || defaultIcon}</div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className={`font-semibold ${unlocked ? "text-white" : "text-gray-500"}`}>
            {title}
          </h4>
          <span
            className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
            style={{ backgroundColor: `${colors.bg}20`, color: colors.bg }}
          >
            {level}
          </span>
        </div>
        <p className="mt-0.5 text-sm text-gray-400">{description}</p>

        {/* Progress */}
        {!unlocked && progress < 100 && (
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: colors.bg }} />
            </div>
            <span className="text-xs text-gray-500">{progress}%</span>
          </div>
        )}
      </div>

      {/* Checkmark for unlocked */}
      {unlocked && (
        <svg className="h-6 w-6 text-shopify shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      )}
    </Wrapper>
  );
}

// Achievement collection
export function CommunityAchievementCollection({ className = "" }: { className?: string }) {
  const achievements = [
    { title: "First Post", description: "Made your first post", level: "bronze" as const, unlocked: true },
    { title: "Helpful", description: "Got 10 reactions", level: "silver" as const, unlocked: true },
    { title: "Community Star", description: "50 helpful answers", level: "gold" as const, unlocked: true },
    { title: "Expert", description: "100 solutions provided", level: "platinum" as const, unlocked: false, progress: 72 },
    { title: "Legend", description: "Top contributor for 6 months", level: "diamond" as const, unlocked: false, progress: 33 },
  ];

  return (
    <div className={`space-y-3 select-none ${className}`}>
      {achievements.map((achievement, i) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <CommunityAchievementBadge {...achievement} />
        </motion.div>
      ))}
    </div>
  );
}

// Badge row display
export function CommunityBadgeRow({ className = "" }: { className?: string }) {
  const badges = [
    { title: "Verified", level: "gold" as const },
    { title: "Top Seller", level: "platinum" as const },
    { title: "Early Adopter", level: "silver" as const },
    { title: "Helper", level: "bronze" as const },
  ];

  return (
    <div className={`flex flex-wrap gap-2 select-none ${className}`}>
      {badges.map((badge, i) => (
        <motion.div
          key={badge.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
        >
          <CommunityAchievementBadge {...badge} variant="compact" />
        </motion.div>
      ))}
    </div>
  );
}
