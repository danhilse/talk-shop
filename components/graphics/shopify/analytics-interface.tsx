"use client";

import { motion } from "framer-motion";

// Shopify admin dark mode color palette
const SHOPIFY_BG = "#1A1A1A";
const SHOPIFY_SIDEBAR = "#0D0D0D";
const SHOPIFY_CARD = "#252525";
const SHOPIFY_BORDER = "#333333";
const SHOPIFY_GREEN = "#95BF47";
const SHOPIFY_TEXT = "#E3E3E3";
const SHOPIFY_TEXT_SUBDUED = "#8A8A8A";

interface ShopifyAnalyticsInterfaceProps {
  className?: string;
  variant?: "default" | "compact" | "hero";
  position?: "right" | "left";
}

export function ShopifyAnalyticsInterface({
  className = "",
  variant = "default",
  position = "right",
}: ShopifyAnalyticsInterfaceProps) {
  const isHero = variant === "hero";
  const isLeft = position === "left";

  return (
    <div className={`relative select-none ${className}`}>
      {/* Ambient glow behind the interface */}
      <div className="absolute -inset-12 bg-gradient-to-r from-shopify/20 via-lime/15 to-transparent rounded-3xl blur-[100px] opacity-60" />

      {/* Edge fade mask - fades edges for hero variant based on position */}
      <div
        className="relative"
        style={{
          maskImage: isHero
            ? isLeft
              ? "linear-gradient(to left, transparent 0%, black 25%, black 88%, transparent 100%), linear-gradient(to bottom, black 0%, black 92%, transparent 100%)"
              : "linear-gradient(to right, transparent 0%, black 25%, black 88%, transparent 100%), linear-gradient(to bottom, black 0%, black 92%, transparent 100%)"
            : undefined,
          WebkitMaskImage: isHero
            ? isLeft
              ? "linear-gradient(to left, transparent 0%, black 25%, black 88%, transparent 100%), linear-gradient(to bottom, black 0%, black 92%, transparent 100%)"
              : "linear-gradient(to right, transparent 0%, black 25%, black 88%, transparent 100%), linear-gradient(to bottom, black 0%, black 92%, transparent 100%)"
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
          style={{ backgroundColor: SHOPIFY_BG }}
        >
          {/* Sidebar */}
          <div
            className="w-[220px] flex flex-col h-[70vh]"
            style={{ backgroundColor: SHOPIFY_SIDEBAR }}
          >
            {/* Store Header */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex items-center gap-3 px-3 py-3 border-b border-white/10"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-shopify to-lime text-xs font-bold text-midnight">
                MS
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white truncate">My Store</div>
                <div className="text-[10px] text-gray-400 truncate">my-store.myshopify.com</div>
              </div>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="px-3 py-2"
            >
              <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-xs">Search</span>
                <span className="ml-auto text-[10px] text-gray-500 flex items-center gap-1">
                  <span className="px-1 py-0.5 rounded bg-white/10 text-[8px]">⌘</span>
                  <span className="px-1 py-0.5 rounded bg-white/10 text-[8px]">K</span>
                </span>
              </div>
            </motion.div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
              <NavItem icon="🏠" label="Home" delay={0.8} />
              <NavItem icon="📦" label="Orders" badge="3" delay={0.88} />
              <NavItem icon="🏷️" label="Products" delay={0.96} />
              <NavItem icon="👥" label="Customers" delay={1.04} />
              <NavItem icon="📣" label="Marketing" delay={1.12} />
              <NavItem icon="🏷️" label="Discounts" delay={1.2} />
              <NavItem icon="📄" label="Content" delay={1.28} />
              <NavItem icon="🌍" label="Markets" delay={1.36} />
              <NavItem icon="💰" label="Finance" delay={1.44} />
              <NavItem icon="📊" label="Analytics" active delay={1.52}>
                <SubNavItem label="Reports" delay={1.6} />
                <SubNavItem label="Live View" delay={1.68} />
              </NavItem>
              <div className="pt-2 mt-2 border-t border-white/10">
                <NavItem icon="📱" label="Sales channels" expandable delay={1.76} />
                <NavItem icon="🧩" label="Apps" expandable delay={1.84} />
              </div>
            </nav>

            {/* Settings */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.95, duration: 0.4 }}
              className="p-3 border-t border-white/10"
            >
              <div className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Settings</span>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col h-[70vh] overflow-hidden" style={{ backgroundColor: SHOPIFY_BG }}>
            {/* Top Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex items-center justify-between px-6 py-3 border-b"
              style={{ borderColor: SHOPIFY_BORDER, backgroundColor: SHOPIFY_BG }}
            >
              <div className="flex items-center gap-4">
                <h1 className="text-lg font-semibold flex items-center gap-2" style={{ color: SHOPIFY_TEXT }}>
                  <span className="text-base">📊</span>
                  Analytics
                </h1>
                <span className="text-xs" style={{ color: SHOPIFY_TEXT_SUBDUED }}>
                  Last refreshed: 12:46 PM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium" style={{ borderColor: SHOPIFY_BORDER, color: SHOPIFY_TEXT }}>
                  <span>📅</span> Today
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium" style={{ borderColor: SHOPIFY_BORDER, color: SHOPIFY_TEXT }}>
                  <span>📅</span> Jan 28, 2026
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium" style={{ borderColor: SHOPIFY_BORDER, color: SHOPIFY_TEXT }}>
                  💲 USD $
                </button>
              </div>
            </motion.div>

            {/* Analytics Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Summary Cards */}
              <div className="grid grid-cols-4 gap-4">
                <SummaryCard
                  title="Gross sales"
                  value="$48,392"
                  change={127}
                  chartData={[20, 35, 45, 55, 70, 85, 100]}
                  delay={0.8}
                />
                <SummaryCard
                  title="Returning customer rate"
                  value="34%"
                  change={18}
                  chartData={[15, 18, 20, 24, 28, 30, 34]}
                  delay={0.95}
                />
                <SummaryCard
                  title="Orders fulfilled"
                  value="847"
                  change={89}
                  chartData={[100, 150, 200, 320, 450, 620, 847]}
                  delay={1.1}
                />
                <SummaryCard
                  title="Orders"
                  value="892"
                  change={94}
                  chartData={[120, 180, 260, 380, 520, 710, 892]}
                  delay={1.25}
                />
              </div>

              {/* Main Charts Row */}
              <div className="grid grid-cols-3 gap-4">
                {/* Sales Over Time Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.45, duration: 0.5 }}
                  className="col-span-2 rounded-xl border p-5"
                  style={{ backgroundColor: SHOPIFY_CARD, borderColor: SHOPIFY_BORDER }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-sm font-medium" style={{ color: SHOPIFY_TEXT }}>Total sales over time</h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-bold" style={{ color: SHOPIFY_TEXT }}>$42,847</span>
                        <span className="text-xs text-shopify font-medium">↑ 127%</span>
                      </div>
                    </div>
                  </div>
                  <SalesChart />
                  <div className="flex items-center justify-center gap-6 mt-4 text-xs" style={{ color: SHOPIFY_TEXT_SUBDUED }}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-shopify"></span>
                      Jan 29, 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                      Jan 28, 2026
                    </div>
                  </div>
                </motion.div>

                {/* Sales Breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.65, duration: 0.5 }}
                  className="rounded-xl border p-5"
                  style={{ backgroundColor: SHOPIFY_CARD, borderColor: SHOPIFY_BORDER }}
                >
                  <h3 className="text-sm font-medium mb-4" style={{ color: SHOPIFY_TEXT }}>Total sales breakdown</h3>
                  <div className="space-y-3">
                    <BreakdownItem label="Gross sales" value="$48,392" change={127} positive />
                    <BreakdownItem label="Discounts" value="-$4,215" />
                    <BreakdownItem label="Returns" value="-$892" />
                    <BreakdownItem label="Net sales" value="$43,285" change={118} positive />
                    <BreakdownItem label="Shipping charges" value="$2,847" />
                    <BreakdownItem label="Return fees" value="$0.00" />
                    <BreakdownItem label="Taxes" value="$3,715" change={94} positive />
                    <div className="pt-3 border-t" style={{ borderColor: SHOPIFY_BORDER }}>
                      <BreakdownItem label="Total sales" value="$42,847" change={127} positive isBold />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Charts Row */}
              <div className="grid grid-cols-3 gap-4">
                {/* Sales by Channel */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                  className="rounded-xl border p-5"
                  style={{ backgroundColor: SHOPIFY_CARD, borderColor: SHOPIFY_BORDER }}
                >
                  <h3 className="text-sm font-medium mb-4" style={{ color: SHOPIFY_TEXT }}>Total sales by sales channel</h3>
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#333333" strokeWidth="4" />
                        <motion.circle
                          cx="18" cy="18" r="14"
                          fill="none"
                          stroke="#95BF47"
                          strokeWidth="4"
                          strokeDasharray="88 88"
                          initial={{ strokeDashoffset: 88 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ delay: 2.2, duration: 0.8 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold" style={{ color: SHOPIFY_TEXT }}>$42.8k</span>
                        <span className="text-[10px] text-shopify">↑ 127%</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-shopify"></span>
                          <span style={{ color: SHOPIFY_TEXT_SUBDUED }}>Online Store</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium" style={{ color: SHOPIFY_TEXT }}>$28.4k</span>
                          <span className="text-shopify">↑ 142%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-lime"></span>
                          <span style={{ color: SHOPIFY_TEXT_SUBDUED }}>Shop App</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium" style={{ color: SHOPIFY_TEXT }}>$9.8k</span>
                          <span className="text-shopify">↑ 89%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span style={{ color: SHOPIFY_TEXT_SUBDUED }}>POS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium" style={{ color: SHOPIFY_TEXT }}>$4.6k</span>
                          <span className="text-shopify">↑ 67%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Average Order Value */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                  className="rounded-xl border p-5"
                  style={{ backgroundColor: SHOPIFY_CARD, borderColor: SHOPIFY_BORDER }}
                >
                  <h3 className="text-sm font-medium" style={{ color: SHOPIFY_TEXT }}>Average order value over time</h3>
                  <div className="flex items-baseline gap-2 mt-1 mb-4">
                    <span className="text-2xl font-bold" style={{ color: SHOPIFY_TEXT }}>$78.42</span>
                    <span className="text-xs text-shopify font-medium">↑ 34%</span>
                  </div>
                  <MiniLineChart color="#C4E456" data={[45, 52, 58, 62, 68, 74, 78]} />
                  <div className="flex items-center justify-center gap-6 mt-3 text-xs" style={{ color: SHOPIFY_TEXT_SUBDUED }}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-lime"></span>
                      Jan 29, 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                      Jan 28, 2026
                    </div>
                  </div>
                </motion.div>

                {/* Sales by Product */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3, duration: 0.5 }}
                  className="rounded-xl border p-5"
                  style={{ backgroundColor: SHOPIFY_CARD, borderColor: SHOPIFY_BORDER }}
                >
                  <h3 className="text-sm font-medium mb-4" style={{ color: SHOPIFY_TEXT }}>Total sales by product</h3>
                  <div className="space-y-3">
                    <ProductRow
                      name="Premium Cotton T-Shirt · Apparel"
                      current="$12.4k"
                      previous="$4.2k"
                      change={195}
                    />
                    <ProductRow
                      name="Wireless Earbuds Pro · Electronics"
                      current="$8.9k"
                      previous="$5.1k"
                      change={74}
                    />
                    <ProductRow
                      name="Organic Face Serum · Beauty"
                      current="$6.2k"
                      previous="$3.8k"
                      change={63}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
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
          <span className="text-xs text-shopify font-medium">Real-time analytics</span>
        </motion.div>
      )}
    </div>
  );
}

// Helper Components
function NavItem({
  icon,
  label,
  active = false,
  badge,
  expandable = false,
  children,
  delay = 0,
}: {
  icon: string;
  label: string;
  active?: boolean;
  badge?: string;
  expandable?: boolean;
  children?: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <div
        className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm cursor-pointer transition-colors ${
          active
            ? "bg-white/10 text-white"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <span className="text-sm w-5 text-center">{icon}</span>
        <span className="flex-1">{label}</span>
        {badge && (
          <span className="px-1.5 py-0.5 rounded-full bg-gray-600 text-[10px] font-medium text-white">
            {badge}
          </span>
        )}
        {expandable && (
          <svg className="w-3 h-3 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6Z" />
          </svg>
        )}
      </div>
      {children && <div className="ml-7 mt-0.5 space-y-0.5">{children}</div>}
    </motion.div>
  );
}

function SubNavItem({ label, delay = 0 }: { label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="px-2 py-1 text-sm text-gray-500 hover:text-white cursor-pointer transition-colors"
    >
      {label}
    </motion.div>
  );
}

function SummaryCard({
  title,
  value,
  change,
  positive,
  chartData,
  delay = 0,
}: {
  title: string;
  value: string;
  change: number;
  positive?: boolean;
  chartData: number[];
  delay?: number;
}) {
  const isUp = change > 0;
  const maxVal = Math.max(...chartData);
  const points = chartData
    .map((val, i) => {
      const x = (i / (chartData.length - 1)) * 60;
      const y = 20 - (val / (maxVal || 1)) * 18;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-xl border p-4"
      style={{ backgroundColor: SHOPIFY_CARD, borderColor: SHOPIFY_BORDER }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs" style={{ color: SHOPIFY_TEXT_SUBDUED }}>{title}</p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-lg font-bold" style={{ color: SHOPIFY_TEXT }}>{value}</span>
            {change !== 0 && (
              <span className={`text-xs font-medium ${isUp ? "text-shopify" : "text-red-500"}`}>
                {isUp ? "↑" : "↓"} {Math.abs(change)}%
              </span>
            )}
            {change === 0 && (
              <span className="text-xs" style={{ color: SHOPIFY_TEXT_SUBDUED }}>—</span>
            )}
          </div>
        </div>
        <svg viewBox="0 0 60 24" className="w-16 h-6">
          <polyline
            points={points}
            fill="none"
            stroke={isUp ? "#95BF47" : "#6B7280"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function SalesChart() {
  // Current period data (green line)
  const currentData = [0, 10, 15, 12, 20, 25, 30, 28, 35, 45, 40, 55, 50, 60, 55, 70, 65, 80, 75, 90, 85, 100, 95, 110];
  // Previous period data (gray line)
  const prevData = [0, 5, 8, 6, 10, 12, 15, 14, 18, 22, 20, 28, 25, 30, 28, 35, 32, 40, 38, 45, 42, 50, 48, 55];

  const maxVal = Math.max(...currentData, ...prevData);
  const width = 520;
  const height = 120;

  const createPath = (data: number[]) => {
    return data
      .map((val, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - (val / maxVal) * (height - 20);
        return `${x},${y}`;
      })
      .join(" ");
  };

  return (
    <svg viewBox={`0 0 ${width} ${height + 20}`} className="w-full h-28">
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75].map((ratio) => (
        <line
          key={ratio}
          x1={0}
          y1={height - ratio * (height - 20)}
          x2={width}
          y2={height - ratio * (height - 20)}
          stroke="#333333"
          strokeDasharray="4,4"
        />
      ))}

      {/* Y-axis labels */}
      <text x={0} y={height + 5} className="text-[9px] fill-gray-500">$0</text>
      <text x={0} y={height * 0.5} className="text-[9px] fill-gray-500">$150</text>
      <text x={0} y={15} className="text-[9px] fill-gray-500">$300</text>

      {/* X-axis labels */}
      {["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM"].map((label, i) => (
        <text
          key={label}
          x={(i / 5) * width}
          y={height + 18}
          textAnchor="middle"
          className="text-[9px] fill-gray-500"
        >
          {label}
        </text>
      ))}

      {/* Previous period line (gray, dashed) */}
      <motion.polyline
        points={createPath(prevData)}
        fill="none"
        stroke="#6B7280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4,4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
      />

      {/* Current period line (shopify green) */}
      <motion.polyline
        points={createPath(currentData)}
        fill="none"
        stroke="#95BF47"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
      />
    </svg>
  );
}

function MiniLineChart({ color, data }: { color: string; data: number[] }) {
  const maxVal = Math.max(...data);
  const width = 200;
  const height = 50;

  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - (val / maxVal) * (height - 10);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-12">
      <motion.polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      />
    </svg>
  );
}

function BreakdownItem({
  label,
  value,
  change,
  positive,
  isBold,
}: {
  label: string;
  value: string;
  change?: number;
  positive?: boolean;
  isBold?: boolean;
}) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className={positive ? "text-shopify" : ""} style={!positive ? { color: SHOPIFY_TEXT_SUBDUED } : undefined}>
        {label}
      </span>
      <div className="flex items-center gap-2">
        <span className={isBold ? "font-bold" : "font-medium"} style={{ color: SHOPIFY_TEXT }}>{value}</span>
        {change !== undefined && change !== 0 && (
          <span className={`${positive ? "text-shopify" : "text-red-500"}`}>
            {positive ? "↑" : "↓"} {Math.abs(change)}%
          </span>
        )}
        {change === undefined && <span style={{ color: SHOPIFY_TEXT_SUBDUED }}>—</span>}
      </div>
    </div>
  );
}

function ProductRow({
  name,
  current,
  previous,
  change,
}: {
  name: string;
  current: string;
  previous: string;
  change?: number;
}) {
  // Current bar is larger when showing growth
  const barWidth = change && change > 0 ? 70 : 40;
  const prevBarWidth = change && change > 0 ? 30 : 60;

  return (
    <div className="space-y-1">
      <p className="text-[10px] truncate" style={{ color: SHOPIFY_TEXT_SUBDUED }}>{name}</p>
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center gap-1">
          <motion.div
            className="h-3 rounded bg-shopify"
            initial={{ width: 0 }}
            animate={{ width: barWidth }}
            transition={{ delay: 2.5, duration: 0.5 }}
          />
          <span className="text-[10px] font-medium" style={{ color: SHOPIFY_TEXT }}>{current}</span>
        </div>
        {change !== undefined && (
          <span className={`text-[10px] ${change >= 0 ? "text-shopify" : "text-red-500"}`}>
            {change >= 0 ? "↑" : "↓"} {Math.abs(change)}%
          </span>
        )}
        <div className="flex-1 flex items-center justify-end gap-1">
          <motion.div
            className="h-3 rounded bg-gray-600"
            initial={{ width: 0 }}
            animate={{ width: prevBarWidth }}
            transition={{ delay: 2.6, duration: 0.5 }}
          />
          <span className="text-[10px]" style={{ color: SHOPIFY_TEXT_SUBDUED }}>{previous}</span>
        </div>
      </div>
    </div>
  );
}
