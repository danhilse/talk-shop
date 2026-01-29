"use client";

import { motion } from "framer-motion";

interface GrowthChartProps {
  title?: string;
  subtitle?: string;
  data?: { label: string; value: number }[];
  className?: string;
  animated?: boolean;
  variant?: "bar" | "line" | "area";
  showLabels?: boolean;
}

const defaultData = [
  { label: "Jan", value: 45 },
  { label: "Feb", value: 52 },
  { label: "Mar", value: 48 },
  { label: "Apr", value: 61 },
  { label: "May", value: 55 },
  { label: "Jun", value: 67 },
  { label: "Jul", value: 72 },
  { label: "Aug", value: 78 },
  { label: "Sep", value: 82 },
  { label: "Oct", value: 89 },
  { label: "Nov", value: 95 },
  { label: "Dec", value: 100 },
];

export function EcommerceGrowthChart({
  title = "Revenue Growth",
  subtitle = "Monthly performance",
  data = defaultData,
  className = "",
  animated = true,
  variant = "bar",
  showLabels = true,
}: GrowthChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const Wrapper = animated ? motion.div : "div";

  if (variant === "line" || variant === "area") {
    const width = 300;
    const height = 120;
    const padding = { top: 10, right: 10, bottom: 30, left: 10 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const points = data
      .map((d, i) => {
        const x = padding.left + (i / (data.length - 1)) * chartWidth;
        const y = padding.top + chartHeight - (d.value / maxValue) * chartHeight;
        return `${x},${y}`;
      })
      .join(" ");

    const areaPath = `M${padding.left},${height - padding.bottom} L${points} L${width - padding.right},${height - padding.bottom} Z`;

    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
        })}
        className={`rounded-xl border border-white/10 bg-slate p-5 select-none ${className}`}
      >
        <div className="mb-4">
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
          {/* Area fill */}
          {variant === "area" && (
            <motion.path
              d={areaPath}
              fill="url(#area-gradient)"
              initial={animated ? { opacity: 0 } : undefined}
              animate={animated ? { opacity: 1 } : undefined}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          )}

          {/* Grid lines */}
          {[0.25, 0.5, 0.75].map((ratio) => (
            <line
              key={ratio}
              x1={padding.left}
              y1={padding.top + chartHeight * (1 - ratio)}
              x2={width - padding.right}
              y2={padding.top + chartHeight * (1 - ratio)}
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4,4"
            />
          ))}

          {/* Line */}
          <motion.polyline
            points={points}
            fill="none"
            stroke="#95BF47"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={animated ? { pathLength: 0 } : undefined}
            animate={animated ? { pathLength: 1 } : undefined}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Data points */}
          {data.map((d, i) => {
            const x = padding.left + (i / (data.length - 1)) * chartWidth;
            const y = padding.top + chartHeight - (d.value / maxValue) * chartHeight;
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill="#95BF47"
                initial={animated ? { scale: 0 } : undefined}
                animate={animated ? { scale: 1 } : undefined}
                transition={{ delay: 0.3 + i * 0.05 }}
              />
            );
          })}

          {/* X-axis labels */}
          {showLabels &&
            data
              .filter((_, i) => i % 3 === 0)
              .map((d, i) => {
                const actualIndex = i * 3;
                const x = padding.left + (actualIndex / (data.length - 1)) * chartWidth;
                return (
                  <text
                    key={d.label}
                    x={x}
                    y={height - 8}
                    textAnchor="middle"
                    className="text-[10px] fill-gray-500"
                  >
                    {d.label}
                  </text>
                );
              })}

          <defs>
            <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#95BF47" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#95BF47" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Wrapper>
    );
  }

  // Bar chart (default)
  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      })}
      className={`rounded-xl border border-white/10 bg-slate p-5 select-none ${className}`}
    >
      <div className="mb-4">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      <div className="flex items-end gap-1 h-32">
        {data.map((d, i) => (
          <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-t bg-gradient-to-t from-shopify to-lime"
              initial={animated ? { height: 0 } : undefined}
              animate={animated ? { height: `${(d.value / maxValue) * 100}%` } : undefined}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            />
            {showLabels && i % 3 === 0 && (
              <span className="text-[9px] text-gray-500">{d.label}</span>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

// Mini progress bar
export function EcommerceProgressBar({
  label = "Monthly Goal",
  current = 7500,
  target = 10000,
  unit = "$",
  className = "",
}: {
  label?: string;
  current?: number;
  target?: number;
  unit?: string;
  className?: string;
}) {
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border border-white/10 bg-slate p-4 select-none ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm font-semibold text-white">
          {unit}{current.toLocaleString()} / {unit}{target.toLocaleString()}
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-shopify to-lime"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
      <div className="mt-1 text-right text-xs text-gray-500">{percentage.toFixed(1)}%</div>
    </motion.div>
  );
}

// Revenue comparison (before/after)
export function EcommerceRevenueComparison({
  before = { label: "Before", value: 4200 },
  after = { label: "After", value: 18500 },
  className = "",
}: {
  before?: { label: string; value: number };
  after?: { label: string; value: number };
  className?: string;
}) {
  const growth = ((after.value - before.value) / before.value) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-xl border border-white/10 bg-slate p-5 select-none ${className}`}
    >
      <div className="flex items-center gap-4">
        {/* Before */}
        <div className="flex-1 text-center">
          <p className="text-xs text-gray-500 mb-1">{before.label}</p>
          <p className="text-2xl font-bold text-gray-400">${before.value.toLocaleString()}</p>
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="flex flex-col items-center"
        >
          <svg className="h-8 w-8 text-shopify" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
          <span className="text-xs font-bold text-shopify">+{growth.toFixed(0)}%</span>
        </motion.div>

        {/* After */}
        <div className="flex-1 text-center">
          <p className="text-xs text-gray-500 mb-1">{after.label}</p>
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="text-2xl font-bold text-shopify"
          >
            ${after.value.toLocaleString()}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
