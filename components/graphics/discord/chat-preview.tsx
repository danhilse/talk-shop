"use client";

import { motion } from "framer-motion";

// Discord color palette
const DISCORD_BG = "#313338";
const DISCORD_SECONDARY = "#2B2D31";
const DISCORD_TERTIARY = "#1E1F22";
const DISCORD_BRAND = "#5865F2";

interface Message {
  username: string;
  userColor: string;
  avatarColor: string;
  message: string;
  timestamp?: string;
  badge?: string;
  badgeColor?: string;
}

interface ChatPreviewProps {
  channelName?: string;
  channelEmoji?: string;
  onlineCount?: number;
  messages?: Message[];
  showTyping?: boolean;
  typingUsers?: string[];
  className?: string;
  variant?: "compact" | "default" | "expanded";
  animated?: boolean;
}

const defaultMessages: Message[] = [
  {
    username: "alex_dev",
    userColor: "#95BF47",
    avatarColor: "#95BF47",
    message: "Anyone dealt with webhook retries?",
    timestamp: "Today at 2:34 PM",
  },
  {
    username: "sam_builds",
    userColor: "#C4E456",
    avatarColor: "#C4E456",
    message: "Yeah, use idempotency keys!",
    timestamp: "Today at 2:35 PM",
  },
  {
    username: "merchant_pro",
    userColor: "#5865F2",
    avatarColor: "#5865F2",
    message: "Saved my store last week",
    timestamp: "Today at 2:36 PM",
  },
];

export function DiscordChatPreview({
  channelName = "shopify-dev",
  channelEmoji = "#",
  onlineCount = 23,
  messages = defaultMessages,
  showTyping = true,
  typingUsers = ["+3"],
  className = "",
  variant = "default",
  animated = true,
}: ChatPreviewProps) {
  const sizes = {
    compact: "w-64 p-3",
    default: "w-72 p-4",
    expanded: "w-80 p-5",
  };

  const Wrapper = animated ? motion.div : "div";
  const MessageWrapper = animated ? motion.div : "div";

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.3 },
      })}
      className={`${sizes[variant]} rounded-xl border border-white/10 bg-[${DISCORD_BG}] shadow-2xl select-none ${className}`}
      style={{ backgroundColor: DISCORD_BG }}
    >
      {/* Header */}
      <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-3">
        <span className="text-lg">{channelEmoji === "#" ? (
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 15H15.4105L16.4687 9H10.4687L9.41045 15Z" />
          </svg>
        ) : channelEmoji}</span>
        <span className="text-sm font-semibold text-white/90">{channelName}</span>
        <span className="ml-auto flex items-center gap-1 text-xs text-gray-500">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          {onlineCount} Online
        </span>
      </div>

      {/* Messages */}
      <div className="space-y-3 text-sm">
        {messages.map((msg, i) => (
          <MessageWrapper
            key={i}
            {...(animated && {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.5 + i * 0.3 },
            })}
            className="flex gap-2.5"
          >
            <div
              className="h-8 w-8 shrink-0 rounded-full"
              style={{ backgroundColor: `${msg.avatarColor}30` }}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: msg.userColor }}>
                  {msg.username}
                </span>
                {msg.badge && (
                  <span
                    className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                    style={{ backgroundColor: msg.badgeColor || DISCORD_BRAND, color: "white" }}
                  >
                    {msg.badge}
                  </span>
                )}
                {msg.timestamp && (
                  <span className="text-[10px] text-gray-500">{msg.timestamp}</span>
                )}
              </div>
              <p className="mt-0.5 text-gray-300">{msg.message}</p>
            </div>
          </MessageWrapper>
        ))}

        {/* Typing indicator */}
        {showTyping && (
          <MessageWrapper
            {...(animated && {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5 + messages.length * 0.3 + 0.2 },
            })}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <span className="text-shopify font-medium">{typingUsers.join(", ")}</span>
            <span>others are typing</span>
            <span className="flex gap-0.5">
              <span className="h-1 w-1 animate-bounce rounded-full bg-gray-500" style={{ animationDelay: "0ms" }} />
              <span className="h-1 w-1 animate-bounce rounded-full bg-gray-500" style={{ animationDelay: "150ms" }} />
              <span className="h-1 w-1 animate-bounce rounded-full bg-gray-500" style={{ animationDelay: "300ms" }} />
            </span>
          </MessageWrapper>
        )}
      </div>
    </Wrapper>
  );
}

// Variant: AI Support conversation
export function DiscordAISupportChat({ className = "" }: { className?: string }) {
  const messages: Message[] = [
    {
      username: "@Talk Shop",
      userColor: "#95BF47",
      avatarColor: "#95BF47",
      badge: "ARC",
      badgeColor: "#FF6B6B",
      message: "@Tobias You're right, it does seem like there was an announcement...",
    },
    {
      username: "Tobias",
      userColor: "#FFFFFF",
      avatarColor: "#5865F2",
      badge: "APP",
      badgeColor: "#5865F2",
      message: "Exactly! Shopify and Affirm recently announced they're expanding their partnership to bring Shop Pay Installments to Canada!",
    },
  ];

  return (
    <DiscordChatPreview
      channelName="ai-support"
      channelEmoji="💎"
      onlineCount={23}
      messages={messages}
      showTyping={false}
      className={className}
      variant="expanded"
    />
  );
}

// Variant: Show and Tell conversation
export function DiscordShowAndTell({ className = "" }: { className?: string }) {
  const messages: Message[] = [
    {
      username: "Heritage",
      userColor: "#FFB347",
      avatarColor: "#FFB347",
      message: "Q1 starting strong! Semi automated ops, stable scaling, no stock issues",
    },
    {
      username: "xentracking",
      userColor: "#7CFC00",
      avatarColor: "#7CFC00",
      badge: "GROW",
      badgeColor: "#95BF47",
      message: "If you run an online store and feel tired replying messages...",
    },
  ];

  return (
    <DiscordChatPreview
      channelName="show-and-tell"
      channelEmoji="💬"
      onlineCount={57}
      messages={messages}
      showTyping={false}
      className={className}
    />
  );
}
