"use client";

import { motion } from "framer-motion";

interface OrderNotificationProps {
  type?: "sale" | "review" | "milestone" | "alert";
  title?: string;
  message?: string;
  value?: string;
  timestamp?: string;
  className?: string;
  animated?: boolean;
}

export function EcommerceOrderNotification({
  type = "sale",
  title,
  message,
  value,
  timestamp = "Just now",
  className = "",
  animated = true,
}: OrderNotificationProps) {
  const configs = {
    sale: {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2ZM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1Zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z" />
        </svg>
      ),
      color: "#95BF47",
      defaultTitle: "New Order!",
      defaultMessage: "Someone just made a purchase",
    },
    review: {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
      color: "#FFD700",
      defaultTitle: "New Review",
      defaultMessage: "A customer left a 5-star review",
    },
    milestone: {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2ZM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8Zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1Z" />
        </svg>
      ),
      color: "#C4E456",
      defaultTitle: "Milestone Reached!",
      defaultMessage: "You've hit a new record",
    },
    alert: {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z" />
        </svg>
      ),
      color: "#FFC453",
      defaultTitle: "Attention Needed",
      defaultMessage: "Check your inventory levels",
    },
  };

  const config = configs[type];
  const Wrapper = animated ? motion.div : "div";

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, x: 20, scale: 0.95 },
        animate: { opacity: 1, x: 0, scale: 1 },
        transition: { duration: 0.4, type: "spring" },
      })}
      className={`flex items-start gap-3 rounded-xl border border-white/10 bg-slate p-4 select-none ${className}`}
    >
      {/* Icon */}
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${config.color}20`, color: config.color }}
      >
        {config.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-semibold text-white">{title || config.defaultTitle}</h4>
          {value && (
            <span className="font-bold" style={{ color: config.color }}>
              {value}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-sm text-gray-400">{message || config.defaultMessage}</p>
        <p className="mt-1 text-xs text-gray-500">{timestamp}</p>
      </div>
    </Wrapper>
  );
}

// Notification stack
export function EcommerceNotificationStack({ className = "" }: { className?: string }) {
  const notifications = [
    { type: "sale" as const, title: "New Order!", message: "Emma in Toronto", value: "$127.00", timestamp: "Just now" },
    { type: "sale" as const, title: "New Order!", message: "Alex in London", value: "$89.50", timestamp: "2 min ago" },
    { type: "review" as const, title: "5-Star Review", message: '"Best product I\'ve ever bought!"', timestamp: "5 min ago" },
    { type: "milestone" as const, title: "100 Orders!", message: "You've reached a new milestone", timestamp: "1 hour ago" },
  ];

  return (
    <div className={`space-y-2 select-none ${className}`}>
      {notifications.map((notification, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15 }}
        >
          <EcommerceOrderNotification {...notification} />
        </motion.div>
      ))}
    </div>
  );
}

// Live sales ticker
export function EcommerceLiveSalesTicker({ className = "" }: { className?: string }) {
  const sales = [
    { name: "Sarah K.", location: "New York", item: "Premium Bundle", time: "2 min ago" },
    { name: "John M.", location: "Los Angeles", item: "Starter Kit", time: "5 min ago" },
    { name: "Emma R.", location: "Toronto", item: "Pro Package", time: "8 min ago" },
  ];

  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-slate select-none ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </span>
        <span className="text-xs font-semibold text-gray-400">LIVE SALES</span>
      </div>
      <div className="p-2 space-y-1">
        {sales.map((sale, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-3 rounded-lg bg-white/5 p-2"
          >
            <div className="h-8 w-8 rounded-full bg-shopify/20 flex items-center justify-center text-xs font-bold text-shopify">
              {sale.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">
                <span className="font-semibold">{sale.name}</span>
                <span className="text-gray-500"> purchased </span>
                <span className="text-shopify">{sale.item}</span>
              </p>
              <p className="text-xs text-gray-500">
                {sale.location} • {sale.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
