"use client";

import { motion } from "framer-motion";

interface AnalyticsCardProps {
  title?: string;
  value?: string;
  change?: number;
  changeLabel?: string;
  sparklineData?: number[];
  className?: string;
  animated?: boolean;
  variant?: "default" | "compact" | "detailed";
}

export function EcommerceAnalyticsCard({
  title = "Total Sales",
  value = "$12,847",
  change = 23.5,
  changeLabel = "vs last month",
  sparklineData = [30, 45, 35, 55, 40, 60, 45, 70, 55, 80, 65, 90],
  className = "",
  animated = true,
  variant = "default",
}: AnalyticsCardProps) {
  const isPositive = change >= 0;
  const Wrapper = animated ? motion.div : "div";

  // Generate sparkline path
  const maxVal = Math.max(...sparklineData);
  const minVal = Math.min(...sparklineData);
  const range = maxVal - minVal || 1;
  const width = 100;
  const height = 40;

  const points = sparklineData
    .map((val, i) => {
      const x = (i / (sparklineData.length - 1)) * width;
      const y = height - ((val - minVal) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPath = `M0,${height} L${points} L${width},${height} Z`;
  const linePath = `M${points}`;

  if (variant === "compact") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.4 },
        })}
        className={`rounded-xl border border-white/10 bg-slate p-4 select-none ${className}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">{title}</p>
            <p className="text-xl font-bold text-white">{value}</p>
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
              isPositive ? "bg-shopify/10 text-shopify" : "bg-red-500/10 text-red-500"
            }`}
          >
            {isPositive ? "↑" : "↓"} {Math.abs(change)}%
          </span>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      })}
      className={`rounded-xl border border-white/10 bg-slate p-5 select-none ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-semibold ${
            isPositive ? "bg-shopify/10 text-shopify" : "bg-red-500/10 text-red-500"
          }`}
        >
          <svg
            className={`h-4 w-4 ${isPositive ? "" : "rotate-180"}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 14l5-5 5 5H7z" />
          </svg>
          {Math.abs(change)}%
        </span>
      </div>

      {/* Sparkline */}
      <div className="relative h-10 w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" preserveAspectRatio="none">
          {/* Area fill */}
          <motion.path
            d={areaPath}
            fill={isPositive ? "url(#sparkline-gradient-positive)" : "url(#sparkline-gradient-negative)"}
            initial={animated ? { opacity: 0 } : undefined}
            animate={animated ? { opacity: 1 } : undefined}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          {/* Line */}
          <motion.polyline
            points={points}
            fill="none"
            stroke={isPositive ? "#95BF47" : "#EF4444"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={animated ? { pathLength: 0 } : undefined}
            animate={animated ? { pathLength: 1 } : undefined}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
          <defs>
            <linearGradient id="sparkline-gradient-positive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#95BF47" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#95BF47" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sparkline-gradient-negative" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <p className="mt-2 text-xs text-gray-500">{changeLabel}</p>
    </Wrapper>
  );
}

// Analytics dashboard grid
export function EcommerceAnalyticsDashboard({ className = "" }: { className?: string }) {
  const metrics = [
    { title: "Total Revenue", value: "$48,574", change: 12.5, data: [20, 35, 28, 45, 38, 52, 44, 60, 55, 72, 65, 85] },
    { title: "Orders", value: "1,284", change: 8.2, data: [15, 25, 20, 35, 28, 40, 35, 48, 42, 55, 50, 62] },
    { title: "Conversion Rate", value: "3.24%", change: -2.1, data: [40, 38, 42, 35, 38, 32, 35, 30, 33, 28, 32, 30] },
    { title: "Avg Order Value", value: "$37.84", change: 5.7, data: [30, 32, 28, 35, 33, 38, 36, 42, 40, 45, 43, 48] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`grid grid-cols-2 gap-3 select-none ${className}`}
    >
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <EcommerceAnalyticsCard
            title={metric.title}
            value={metric.value}
            change={metric.change}
            sparklineData={metric.data}
            variant="default"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

// Shopify-style stacked analytics cards
export function ShopifyAnalyticsStack({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[380px] h-[360px] select-none ${className}`}>
      {/* Card 1: Total sales - back */}
      <div
        className="absolute top-0 -left-4 w-[280px] rounded-xl border border-white/10 bg-[#1a1b1e] p-5 shadow-xl"
        style={{ transform: 'rotate(-6deg)' }}
      >
        <p className="text-xs text-gray-400 mb-1">Total sales</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">$12,847</span>
          <span className="text-sm text-shopify">↑ 18%</span>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-shopify to-lime" />
          </div>
          <span className="text-xs text-gray-500">75% of goal</span>
        </div>
      </div>

      {/* Card 2: Donut chart - middle */}
      <div
        className="absolute top-20 left-12 w-[300px] rounded-xl border border-white/10 bg-[#1a1b1e] p-5 shadow-xl"
        style={{ transform: 'rotate(3deg)' }}
      >
        <p className="text-xs text-gray-400 mb-3">Sessions by device</p>
        <div className="flex items-center gap-5">
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#2a2d32" strokeWidth="4" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeDasharray="52 88" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#06B6D4" strokeWidth="4" strokeDasharray="28 88" strokeDashoffset="-52" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#95BF47" strokeWidth="4" strokeDasharray="8 88" strokeDashoffset="-80" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-base font-bold text-white">847</span>
              <span className="text-[9px] text-gray-500">total</span>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                <span className="text-gray-400">Mobile</span>
              </div>
              <span className="text-white font-medium">59%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" />
                <span className="text-gray-400">Desktop</span>
              </div>
              <span className="text-white font-medium">32%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-shopify" />
                <span className="text-gray-400">Tablet</span>
              </div>
              <span className="text-white font-medium">9%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Line chart - front */}
      <div
        className="absolute top-44 left-4 w-[320px] rounded-xl border border-white/10 bg-[#1a1b1e] p-5 shadow-xl"
        style={{ transform: 'rotate(-2deg)' }}
      >
        <p className="text-xs text-gray-400 mb-3">Average order value</p>
        <svg viewBox="0 0 280 80" className="w-full h-16">
          <defs>
            <linearGradient id="aov-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#95BF47" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#95BF47" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          <line x1="0" y1="20" x2="280" y2="20" stroke="#ffffff10" strokeDasharray="4,4" />
          <line x1="0" y1="40" x2="280" y2="40" stroke="#ffffff10" strokeDasharray="4,4" />
          <line x1="0" y1="60" x2="280" y2="60" stroke="#ffffff10" strokeDasharray="4,4" />
          {/* Area fill */}
          <path
            d="M0,65 L23,60 L46,55 L69,58 L92,48 L115,42 L138,38 L161,32 L184,26 L207,22 L230,16 L253,12 L280,8 L280,80 L0,80 Z"
            fill="url(#aov-gradient)"
          />
          {/* Line */}
          <path
            d="M0,65 L23,60 L46,55 L69,58 L92,48 L115,42 L138,38 L161,32 L184,26 L207,22 L230,16 L253,12 L280,8"
            fill="none"
            stroke="#95BF47"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data point */}
          <circle cx="280" cy="8" r="4" fill="#95BF47" />
          <circle cx="280" cy="8" r="7" fill="#95BF47" fillOpacity="0.3" />
        </svg>
        <div className="flex justify-between text-[10px] text-gray-500 mt-2">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </div>
  );
}

// Simple stat counter
export function EcommerceStat({
  label = "Active Merchants",
  value = "12,847",
  prefix = "",
  suffix = "",
  className = "",
}: {
  label?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`text-center select-none ${className}`}
    >
      <motion.p
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-4xl font-bold text-white"
      >
        {prefix}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {value}
        </motion.span>
        {suffix}
      </motion.p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </motion.div>
  );
}
