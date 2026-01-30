"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Discord color palette
const DISCORD_BG = "#313338";
const DISCORD_SECONDARY = "#2B2D31";
const DISCORD_TERTIARY = "#1E1F22";
const DISCORD_BRAND = "#5865F2";

interface FullInterfaceProps {
  className?: string;
  variant?: "default" | "compact" | "hero";
}

// Full Discord interface composite for developer community
export function DiscordFullInterface({
  className = "",
  variant = "default",
}: FullInterfaceProps) {
  const isHero = variant === "hero";

  return (
    <div className={`relative select-none ${className}`}>
      {/* Ambient glow behind the interface */}
      <div className="absolute -inset-12 bg-gradient-to-l from-[#5865F2]/20 via-shopify/15 to-transparent rounded-3xl blur-[100px] opacity-60" />

      {/* Edge fade mask - fades right and bottom edges only */}
      <div
        className="relative"
        style={{
          maskImage: isHero
            ? "linear-gradient(to left, transparent 0%, black 12%, black 100%), linear-gradient(to top, transparent 0%, black 8%, black 100%)"
            : undefined,
          WebkitMaskImage: isHero
            ? "linear-gradient(to left, transparent 0%, black 12%, black 100%), linear-gradient(to top, transparent 0%, black 8%, black 100%)"
            : undefined,
          maskComposite: "intersect",
          WebkitMaskComposite: isHero ? "source-in" : undefined,
        }}
      >
        {/* Main container with 3D perspective */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: -4 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
          className="relative flex rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60"
          style={{
            backgroundColor: DISCORD_TERTIARY,
          }}
        >
        {/* Server List - compact */}
        <div
          className="flex flex-col items-center gap-1.5 p-1.5 border-r border-white/5"
          style={{ backgroundColor: DISCORD_TERTIARY }}
        >
          {/* Talk Shop server with logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="relative"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl overflow-hidden">
              <Image
                src="/logo.webp"
                alt="Talk Shop"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="absolute -left-1.5 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-white" />
          </motion.div>
          <div className="w-6 h-px bg-white/10 my-0.5" />
          <ServerIconSmall emoji="💬" delay={0.4} />
          <ServerIconSmall emoji="🛒" notifications={3} delay={0.5} />
          <ServerIconSmall emoji="⚡" delay={0.6} />
          <ServerIconSmall emoji="🐙" delay={0.7} />
          <div className="mt-auto">
            <ServerIconSmall emoji="➕" isAdd delay={0.8} />
          </div>
        </div>

        {/* Channel Sidebar */}
        <div
          className="w-64 border-r border-white/5 flex flex-col h-[70vh]"
          style={{ backgroundColor: DISCORD_SECONDARY }}
        >
          {/* Server header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between p-3 border-b border-white/5"
            style={{ backgroundColor: DISCORD_TERTIARY }}
          >
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-sm">Talk Shop</span>
            </div>
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6Z" />
            </svg>
          </motion.div>

          {/* Channels - real Talk Shop structure */}
          <div className="flex-1 overflow-y-auto p-2 space-y-2.5">
            <ChannelCategory name="News-and-Changelog" emoji="🏠" delay={0.5}>
              <ChannelItem name="ecommerce-trends" emoji="💡" type="announcement" delay={0.52} />
              <ChannelItem name="shopify-changelog" emoji="⚡" type="announcement" delay={0.54} />
            </ChannelCategory>

            <ChannelCategory name="Welcome" delay={0.56}>
              <ChannelItem name="events" emoji="📅" delay={0.58} />
              <ChannelItem name="welcome" emoji="⭐" delay={0.6} />
              <ChannelItem name="announcements" emoji="⭐" delay={0.62} />
            </ChannelCategory>

            <ChannelCategory name="Shopify Community" delay={0.64}>
              <ChannelItem name="just-joining" emoji="💬" delay={0.66} />
              <ChannelItem name="introductions" emoji="💬" delay={0.68} />
              <ChannelItem name="help-general" emoji="💬" unread delay={0.7} />
              <ChannelItem name="show-and-tell" emoji="💬" delay={0.72} />
              <ChannelItem name="memes" emoji="💬" delay={0.74} />
            </ChannelCategory>

            <ChannelCategory name="Members Support" delay={0.76}>
              <ChannelItem name="help-forum" emoji="💎" type="forum" delay={0.78} />
              <ChannelItem name="help-shopify-core" emoji="💎" delay={0.8} />
              <ChannelItem name="help-shopify-plus" emoji="💎" delay={0.81} />
              <ChannelItem name="help-app-reccos" emoji="💎" delay={0.82} />
              <ChannelItem name="help-design" emoji="💎" active delay={0.83} />
              <ChannelItem name="help-code" emoji="💎" delay={0.84} />
              <ChannelItem name="ai-support" emoji="💎" delay={0.85} />
            </ChannelCategory>

            <ChannelCategory name="Voice Channels" delay={0.86}>
              <ChannelItem name="General Voice" emoji="🔊" delay={0.87} />
              <ChannelItem name="Coworking" emoji="🔊" delay={0.88} />
            </ChannelCategory>

            <ChannelCategory name="Archives" delay={0.89}>
              <ChannelItem name="resolved-threads" emoji="📁" delay={0.9} />
              <ChannelItem name="old-announcements" emoji="📁" delay={0.91} />
            </ChannelCategory>
          </div>

          {/* User bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="p-2 border-t border-white/5 flex items-center gap-2"
            style={{ backgroundColor: DISCORD_TERTIARY }}
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-shopify/30" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-[#1E1F22]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">you_dev</div>
              <div className="text-[10px] text-gray-500">Online</div>
            </div>
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
            </svg>
          </motion.div>
        </div>

        {/* Chat Area */}
        <div
          className="w-[480px] flex flex-col h-[70vh]"
          style={{ backgroundColor: DISCORD_BG }}
        >
          {/* Channel header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 p-3 border-b border-white/5"
          >
            <span className="text-base">💎</span>
            <span className="font-semibold text-white text-sm">help-design</span>
            <div className="ml-auto flex items-center gap-2">
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                47 online
              </span>
            </div>
          </motion.div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {/* Date divider */}
            <div className="flex items-center gap-3 py-2">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[10px] text-gray-500 font-medium">January 29, 2026</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <ChatMessage
              username="pixel_perfect"
              userColor="#22D3EE"
              avatar="🖼️"
              timestamp="1:45 PM"
              delay={0.6}
            >
              Anyone have tips for optimizing images in Shopify themes? My LCP is suffering.
            </ChatMessage>

            <ChatMessage
              username="speed_demon"
              userColor="#A78BFA"
              avatar="⚡"
              badge="APP"
              badgeColor="#5865F2"
              timestamp="1:48 PM"
              delay={0.65}
            >
              Use the image_tag filter with lazy loading and proper srcset. Also check your preloads!
            </ChatMessage>

            <ChatMessage
              username="theme_wizard"
              userColor="#FFB347"
              avatar="🎨"
              timestamp="2:34 PM"
              delay={0.7}
            >
              How do you all handle hero section spacing on mobile? My Dawn customization looks cramped.
            </ChatMessage>

            <ChatMessage
              username="design_sarah"
              userColor="#E879F9"
              avatar="✨"
              badge="GROW"
              badgeColor="#95BF47"
              timestamp="2:35 PM"
              delay={0.9}
            >
              Try using clamp() for fluid spacing! Something like padding: clamp(2rem, 5vw, 4rem)
            </ChatMessage>

            <ChatMessage
              username="@TalkShop"
              userColor="#5865F2"
              avatar="🤖"
              isBot
              timestamp="2:35 PM"
              delay={1.1}
            >
              <div className="space-y-2">
                <p>Here&apos;s a responsive approach for Dawn:</p>
                <div className="rounded-lg bg-[#2B2D31] p-2.5 font-mono text-xs text-gray-300 border border-white/5">
                  <div><span className="text-purple-400">.hero</span> {"{"}</div>
                  <div className="ml-3">
                    <span className="text-cyan-400">padding</span>: <span className="text-lime">clamp(2rem, 8vw, 6rem)</span>;
                  </div>
                  <div className="ml-3">
                    <span className="text-cyan-400">min-height</span>: <span className="text-lime">min(80vh, 600px)</span>;
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </ChatMessage>

            <ChatMessage
              username="theme_wizard"
              userColor="#FFB347"
              avatar="🎨"
              timestamp="2:36 PM"
              delay={1.3}
              reactions={[
                { emoji: "🔥", count: 4 },
                { emoji: "💜", count: 2 },
              ]}
            >
              This is perfect, exactly what I was looking for!
            </ChatMessage>

            <ChatMessage
              username="store_builder"
              userColor="#60A5FA"
              avatar="🛠️"
              timestamp="2:37 PM"
              delay={1.4}
            >
              Also check out the @container queries for component-level responsiveness - game changer for sections
            </ChatMessage>

            <ChatMessage
              username="liquid_master"
              userColor="#F472B6"
              avatar="💧"
              timestamp="2:40 PM"
              delay={1.45}
              reactions={[
                { emoji: "👀", count: 3 },
              ]}
            >
              Don&apos;t forget about the new section groups in 2.0 themes - they make layout management so much cleaner
            </ChatMessage>

            <ChatMessage
              username="css_ninja"
              userColor="#34D399"
              avatar="🥷"
              badge="DTC"
              badgeColor="#E91E63"
              timestamp="2:42 PM"
              delay={1.5}
            >
              Pro tip: use CSS layers for better specificity control when overriding Dawn defaults
            </ChatMessage>

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex items-center gap-2 text-xs text-gray-500 pt-1"
            >
              <span className="text-shopify font-medium">merchant_pro</span>
              <span>is typing</span>
              <span className="flex gap-0.5">
                <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </span>
            </motion.div>
          </div>

          {/* Message input */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="p-3 pt-0"
          >
            <div className="flex items-center gap-2 rounded-lg bg-[#383A40] px-3 py-2.5">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
              </svg>
              <span className="flex-1 text-sm text-gray-500">Message #help-design</span>
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </div>

      {/* Decorative floating badge - only on non-hero variants */}
      {!isHero && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ delay: 1.6, type: "spring", stiffness: 100 }}
          className="absolute -top-4 -right-4 flex items-center gap-2 rounded-full bg-shopify/20 border border-shopify/30 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify" />
          </span>
          <span className="text-xs text-shopify font-medium">300+ devs online</span>
        </motion.div>
      )}
    </div>
  );
}

// Helper components
function ServerIconSmall({
  emoji,
  active = false,
  notifications = 0,
  isAdd = false,
  delay = 0,
}: {
  emoji: string;
  active?: boolean;
  notifications?: number;
  isAdd?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="relative"
    >
      <div
        className={`flex h-8 w-8 items-center justify-center text-sm transition-all cursor-pointer ${
          active
            ? "rounded-lg bg-shopify text-midnight"
            : isAdd
            ? "rounded-full bg-carbon/60 text-shopify/70 hover:rounded-lg hover:bg-shopify hover:text-midnight"
            : "rounded-full bg-carbon/60 hover:rounded-lg hover:bg-carbon/80"
        }`}
      >
        {emoji}
      </div>
      {notifications > 0 && (
        <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-red-500 px-0.5 text-[8px] font-bold text-white">
          {notifications}
        </span>
      )}
    </motion.div>
  );
}

function ServerIcon({
  emoji,
  active = false,
  notifications = 0,
  isAdd = false,
  delay = 0,
}: {
  emoji: string;
  active?: boolean;
  notifications?: number;
  isAdd?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="relative"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center text-base transition-all cursor-pointer ${
          active
            ? "rounded-xl bg-shopify text-midnight"
            : isAdd
            ? "rounded-full bg-carbon text-shopify hover:rounded-xl hover:bg-shopify hover:text-midnight"
            : "rounded-full bg-carbon hover:rounded-xl hover:bg-carbon/80"
        }`}
      >
        {emoji}
      </div>
      {notifications > 0 && (
        <span className="absolute -bottom-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
          {notifications}
        </span>
      )}
      {active && (
        <span className="absolute -left-2 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-white" />
      )}
    </motion.div>
  );
}

function ChannelCategory({
  name,
  emoji,
  children,
  delay = 0,
}: {
  name: string;
  emoji?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <div className="flex items-center gap-1 px-1 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
        <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6Z" />
        </svg>
        {emoji && <span className="text-[9px]">{emoji}</span>}
        {name}
      </div>
      <div className="space-y-px">{children}</div>
    </motion.div>
  );
}

function ChannelItem({
  name,
  emoji,
  type,
  active = false,
  unread = false,
  delay = 0,
}: {
  name: string;
  emoji: string;
  type?: "text" | "announcement" | "forum";
  active?: boolean;
  unread?: boolean;
  delay?: number;
}) {
  // Channel type icons
  const getTypeIcon = () => {
    if (type === "announcement") {
      return (
        <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" />
        </svg>
      );
    }
    if (type === "forum") {
      return (
        <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z" />
        </svg>
      );
    }
    // Default text channel hash
    return (
      <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 15H15.4105L16.4687 9H10.4687L9.41045 15Z" />
      </svg>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className={`flex items-center gap-1.5 rounded px-2 py-0.5 cursor-pointer text-xs transition-colors ${
        active
          ? "bg-white/10 text-white"
          : unread
          ? "text-white font-semibold"
          : "text-gray-400 hover:text-gray-300 hover:bg-white/5"
      }`}
    >
      {getTypeIcon()}
      <span className="text-[10px]">{emoji}</span>
      <span className="truncate">{name}</span>
      {unread && <span className="ml-auto h-2 w-2 rounded-full bg-white" />}
    </motion.div>
  );
}

function ChatMessage({
  username,
  userColor,
  avatar,
  badge,
  badgeColor,
  isBot = false,
  timestamp,
  children,
  reactions,
  delay = 0,
}: {
  username: string;
  userColor: string;
  avatar: string;
  badge?: string;
  badgeColor?: string;
  isBot?: boolean;
  timestamp: string;
  children: React.ReactNode;
  reactions?: { emoji: string; count: number }[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex gap-2.5"
    >
      <div
        className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center text-sm"
        style={{ backgroundColor: `${userColor}20` }}
      >
        {avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-xs" style={{ color: userColor }}>
            {username}
          </span>
          {badge && (
            <span
              className="rounded px-1 py-0.5 text-[9px] font-bold uppercase"
              style={{ backgroundColor: badgeColor || DISCORD_BRAND, color: "white" }}
            >
              {badge}
            </span>
          )}
          {isBot && (
            <span className="rounded bg-[#5865F2] px-1 py-0.5 text-[9px] font-bold text-white">
              BOT
            </span>
          )}
          <span className="text-[10px] text-gray-500">{timestamp}</span>
        </div>
        <div className="mt-0.5 text-xs text-gray-300">{children}</div>
        {reactions && reactions.length > 0 && (
          <div className="flex gap-1 mt-1.5">
            {reactions.map((r, i) => (
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
  );
}

// Export a compact floating version for smaller spaces
export function DiscordFloatingChat({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 2 }}
      transition={{ duration: 0.6 }}
      className={`w-72 rounded-xl border border-white/10 bg-[#313338] p-4 shadow-2xl shadow-shopify/10 select-none ${className}`}
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 15H15.4105L16.4687 9H10.4687L9.41045 15Z" />
        </svg>
        <span className="text-sm font-semibold text-white/90">api-help</span>
        <span className="ml-auto text-[10px] text-gray-500">23 online</span>
      </div>

      <div className="space-y-3 text-xs">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2"
        >
          <div className="h-6 w-6 rounded-full bg-shopify/30 shrink-0 flex items-center justify-center text-[10px]">
            🧑‍💻
          </div>
          <div>
            <span className="text-shopify font-medium">new_dev</span>
            <p className="text-gray-400 mt-0.5">How do I authenticate my app?</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-2"
        >
          <div className="h-6 w-6 rounded-full bg-lime/30 shrink-0 flex items-center justify-center text-[10px]">
            👨‍💻
          </div>
          <div>
            <span className="text-lime font-medium">senior_dev</span>
            <span className="ml-1.5 text-[9px] bg-shopify px-1 rounded text-midnight font-bold">APP</span>
            <p className="text-gray-400 mt-0.5">Check out the OAuth docs, I can help!</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-2 text-gray-500 pt-1"
        >
          <span className="text-shopify font-medium">+2</span>
          <span>others are typing</span>
          <span className="flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
