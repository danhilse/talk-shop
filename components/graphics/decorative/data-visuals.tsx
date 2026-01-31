"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Seeded random number generator for stable values across renders
function seededRandom(seed: number): () => number {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

// Radial progress with multiple rings
export function RadialProgress({
  className = "",
  values = [75, 60, 85],
  labels = ["Revenue", "Orders", "Conversion"],
  colors = ["#95BF47", "#C4E456", "#5865F2"],
}: {
  className?: string;
  values?: number[];
  labels?: string[];
  colors?: string[];
}) {
  const size = 200;
  const strokeWidth = 12;
  const gap = 16;

  return (
    <div className={`relative select-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90">
        {values.map((value, i) => {
          const radius = (size / 2) - (strokeWidth / 2) - (i * (strokeWidth + gap));
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (value / 100) * circumference;

          return (
            <g key={i}>
              {/* Background ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#ffffff10"
                strokeWidth={strokeWidth}
              />
              {/* Progress ring */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={colors[i]}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
              />
            </g>
          );
        })}
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold text-white"
        >
          {Math.round(values.reduce((a, b) => a + b, 0) / values.length)}%
        </motion.span>
        <span className="text-xs text-gray-500">Average</span>
      </div>

      {/* Legend */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
        {labels.map((label, i) => (
          <div key={label} className="flex items-center gap-1.5 text-xs text-gray-400">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[i] }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

// Animated counter with trailing digits
export function AnimatedCounter({
  value = 12847,
  prefix = "$",
  suffix = "",
  label = "Total Revenue",
  className = "",
}: {
  value?: number;
  prefix?: string;
  suffix?: string;
  label?: string;
  className?: string;
}) {
  const digits = value.toString().split("");

  return (
    <div className={`text-center select-none ${className}`}>
      <div className="flex items-center justify-center gap-1">
        {prefix && <span className="text-4xl font-bold text-shopify">{prefix}</span>}
        {digits.map((digit, i) => (
          <motion.span
            key={i}
            className="text-5xl font-bold text-white tabular-nums"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.1,
              type: "spring",
              stiffness: 200,
            }}
          >
            {digit === "," ? "," : digit}
          </motion.span>
        ))}
        {suffix && <span className="text-4xl font-bold text-shopify">{suffix}</span>}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-sm text-gray-500"
      >
        {label}
      </motion.p>
    </div>
  );
}

// Horizontal bar race chart
export function BarRaceChart({ className = "" }: { className?: string }) {
  const data = [
    { label: "Organic", value: 85, color: "#95BF47" },
    { label: "Paid Ads", value: 72, color: "#5865F2" },
    { label: "Social", value: 58, color: "#C4E456" },
    { label: "Referral", value: 45, color: "#FFD700" },
    { label: "Direct", value: 38, color: "#FF6B6B" },
  ];

  return (
    <div className={`w-full max-w-sm rounded-xl border border-white/10 bg-slate p-5 select-none ${className}`}>
      <h4 className="text-sm font-semibold text-white mb-4">Traffic Sources</h4>
      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">{item.label}</span>
              <span className="text-white font-medium">{item.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Heat map calendar
export function HeatMapCalendar({ className = "" }: { className?: string }) {
  const weeks = 12;
  const days = 7;

  // Generate stable activity data using seeded random
  const data = useMemo(() => {
    const random = seededRandom(123);
    return Array.from({ length: weeks * days }, () => random());
  }, []);

  const getColor = (value: number) => {
    if (value < 0.2) return "#ffffff05";
    if (value < 0.4) return "#95BF4720";
    if (value < 0.6) return "#95BF4740";
    if (value < 0.8) return "#95BF4760";
    return "#95BF47";
  };

  return (
    <div className={`rounded-xl border border-white/10 bg-slate p-5 select-none ${className}`}>
      <h4 className="text-sm font-semibold text-white mb-4">Activity</h4>
      <div className="flex gap-1">
        {Array.from({ length: weeks }, (_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {Array.from({ length: days }, (_, dayIndex) => {
              const index = weekIndex * days + dayIndex;
              return (
                <motion.div
                  key={dayIndex}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: getColor(data[index]) }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.005 }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-1 mt-3 text-[10px] text-gray-500">
        <span>Less</span>
        {[0.1, 0.3, 0.5, 0.7, 0.9].map((v) => (
          <div
            key={v}
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: getColor(v) }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

// Donut chart with animated segments
export function DonutChart({ className = "" }: { className?: string }) {
  const data = [
    { label: "Products", value: 45, color: "#95BF47" },
    { label: "Services", value: 30, color: "#C4E456" },
    { label: "Subscriptions", value: 25, color: "#5865F2" },
  ];

  const size = 160;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;

  return (
    <div className={`relative select-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90">
        {data.map((segment, i) => {
          const segmentLength = (segment.value / 100) * circumference;
          const offset = currentOffset;
          currentOffset += segmentLength;

          return (
            <motion.circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference}`}
              strokeDashoffset={-offset}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            />
          );
        })}
      </svg>

      {/* Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">100%</span>
        <span className="text-[10px] text-gray-500">Revenue Mix</span>
      </div>

      {/* Legend */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 space-y-2">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
            <span className="text-gray-400">{item.label}</span>
            <span className="text-white font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
