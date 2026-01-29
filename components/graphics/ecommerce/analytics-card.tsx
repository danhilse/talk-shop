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
