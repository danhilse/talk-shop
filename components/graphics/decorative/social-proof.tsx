"use client";

import { motion } from "framer-motion";

// Testimonial card with quote styling
export function TestimonialCard({
  quote = "This community changed everything for my Shopify business. The support is incredible.",
  author = "Sarah K.",
  role = "Store Owner",
  revenue = "$50k/mo",
  className = "",
}: {
  quote?: string;
  author?: string;
  role?: string;
  revenue?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative w-80 rounded-2xl border border-white/10 bg-gradient-to-br from-slate to-carbon p-6 select-none ${className}`}
    >
      {/* Quote mark */}
      <div className="absolute -top-4 -left-2 text-6xl font-serif text-shopify/20">&ldquo;</div>

      {/* Quote */}
      <p className="relative text-gray-300 leading-relaxed mb-6">{quote}</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-shopify/30 to-lime/20" />
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
        {revenue && (
          <div className="ml-auto text-right">
            <div className="text-lg font-bold text-shopify">{revenue}</div>
            <div className="text-[10px] text-gray-500 uppercase">Revenue</div>
          </div>
        )}
      </div>

      {/* Stars */}
      <div className="flex gap-1 mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.svg
            key={star}
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + star * 0.1 }}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </motion.svg>
        ))}
      </div>
    </motion.div>
  );
}

// Testimonial stack (multiple overlapping)
export function TestimonialStack({ className = "" }: { className?: string }) {
  const testimonials = [
    { quote: "Best community for Shopify devs!", author: "Alex M.", color: "#95BF47" },
    { quote: "Helped me scale to $100k/mo", author: "Jamie R.", color: "#C4E456" },
    { quote: "The AI support bot is amazing", author: "Chris T.", color: "#5865F2" },
  ];

  return (
    <div className={`relative w-80 h-64 select-none ${className}`}>
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: (i - 1) * 4,
            x: (i - 1) * 15,
          }}
          transition={{ delay: i * 0.15, type: "spring" }}
          className="absolute top-0 left-0 w-72 rounded-xl border border-white/10 bg-slate p-5"
          style={{ zIndex: testimonials.length - i }}
        >
          <p className="text-sm text-gray-300 mb-4">&ldquo;{t.quote}&rdquo;</p>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: `${t.color}30` }}
            />
            <span className="text-sm font-medium text-white">{t.author}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Social proof banner with logos/avatars
export function SocialProofBanner({ className = "" }: { className?: string }) {
  const stats = [
    { value: "300+", label: "Members" },
    { value: "50k+", label: "Messages" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex items-center justify-between rounded-2xl border border-white/10 bg-slate/50 backdrop-blur px-8 py-6 select-none ${className}`}
    >
      {/* Avatars */}
      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="w-10 h-10 rounded-full border-2 border-slate"
              style={{
                backgroundColor: ["#95BF4740", "#C4E45640", "#5865F240", "#FFD70040", "#FF6B6B40"][i],
                zIndex: 5 - i,
              }}
            />
          ))}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Join 300+ merchants</div>
          <div className="text-xs text-gray-500">Growing their Shopify stores</div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-shopify">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Trust badges
export function TrustBadges({ className = "" }: { className?: string }) {
  const badges = [
    { icon: "🔒", label: "Secure", sublabel: "SSL Encrypted" },
    { icon: "✓", label: "Verified", sublabel: "Shopify Partner" },
    { icon: "🛡️", label: "Safe", sublabel: "Privacy First" },
    { icon: "⚡", label: "Fast", sublabel: "Real-time" },
  ];

  return (
    <div className={`flex gap-4 select-none ${className}`}>
      {badges.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-slate/50 px-4 py-3"
        >
          <span className="text-2xl">{badge.icon}</span>
          <div className="text-center">
            <div className="text-xs font-semibold text-white">{badge.label}</div>
            <div className="text-[10px] text-gray-500">{badge.sublabel}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Feature highlight card
export function FeatureHighlight({
  icon = "🚀",
  title = "Ship Faster",
  description = "Get answers in real-time from experienced devs",
  stat = "10x",
  statLabel = "Faster solutions",
  className = "",
}: {
  icon?: string;
  title?: string;
  description?: string;
  stat?: string;
  statLabel?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`relative w-64 rounded-2xl border border-white/10 bg-gradient-to-br from-slate to-carbon p-6 overflow-hidden select-none ${className}`}
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-shopify/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-xl bg-shopify/20 flex items-center justify-center text-2xl mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>

      {/* Stat */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-shopify">{stat}</span>
        <span className="text-sm text-gray-500">{statLabel}</span>
      </div>
    </motion.div>
  );
}

// Logo cloud / partner showcase
export function LogoCloud({ className = "" }: { className?: string }) {
  const logos = [
    { name: "Shopify", color: "#95BF47" },
    { name: "Discord", color: "#5865F2" },
    { name: "Klaviyo", color: "#FF6B6B" },
    { name: "Gorgias", color: "#FFD700" },
    { name: "Recharge", color: "#00CED1" },
  ];

  return (
    <div className={`rounded-2xl border border-white/10 bg-slate/30 px-8 py-6 select-none ${className}`}>
      <p className="text-center text-xs text-gray-500 mb-4 uppercase tracking-wider">
        Trusted by merchants using
      </p>
      <div className="flex items-center justify-center gap-8">
        {logos.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-8 h-8 rounded-lg"
              style={{ backgroundColor: `${logo.color}30` }}
            />
            <span className="text-sm font-medium text-gray-400">{logo.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
