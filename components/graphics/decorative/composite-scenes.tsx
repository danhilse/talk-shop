"use client";

import { motion } from "framer-motion";

// Busy Discord scene - multiple overlapping chat elements
export function DiscordBusyScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-80 select-none ${className}`}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/10 via-transparent to-shopify/10 rounded-2xl" />

      {/* Stacked chat cards */}
      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -6 }}
        animate={{ opacity: 1, x: 0, rotate: -6 }}
        transition={{ delay: 0.1 }}
        className="absolute left-8 top-8 w-56 rounded-xl bg-[#313338] p-3 shadow-xl border border-white/10"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-shopify/30" />
          <span className="text-xs font-semibold text-shopify">alex_dev</span>
        </div>
        <p className="text-xs text-gray-400">Just shipped my first Shopify app!</p>
        <div className="flex gap-1 mt-2">
          <span className="px-1.5 py-0.5 rounded bg-[#5865F2]/20 text-[10px] text-[#5865F2]">🎉 12</span>
          <span className="px-1.5 py-0.5 rounded bg-shopify/20 text-[10px] text-shopify">🚀 8</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ delay: 0.3 }}
        className="absolute left-32 top-24 w-52 rounded-xl bg-[#313338] p-3 shadow-xl border border-white/10 z-10"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-lime/30" />
          <span className="text-xs font-semibold text-lime">merchant_pro</span>
          <span className="text-[10px] bg-shopify px-1 rounded text-midnight font-bold">GROW</span>
        </div>
        <p className="text-xs text-gray-400">$50k month thanks to this community</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, rotate: -2 }}
        animate={{ opacity: 1, x: 0, rotate: -2 }}
        transition={{ delay: 0.5 }}
        className="absolute right-8 top-12 w-48 rounded-xl bg-[#313338] p-3 shadow-xl border border-white/10"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-[#5865F2]/30" />
          <span className="text-xs font-semibold text-[#5865F2]">@TalkShop</span>
          <span className="text-[10px] bg-[#5865F2] px-1 rounded text-white font-bold">BOT</span>
        </div>
        <p className="text-xs text-gray-400">Here&apos;s what I found about webhooks...</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 4 }}
        transition={{ delay: 0.7 }}
        className="absolute right-16 bottom-12 w-44 rounded-xl bg-[#313338] p-3 shadow-xl border border-white/10"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-yellow-500/30" />
          <span className="text-xs font-semibold text-yellow-400">theme_wizard</span>
        </div>
        <p className="text-xs text-gray-400">Check out this Dawn hack!</p>
      </motion.div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute left-12 bottom-8 flex items-center gap-2 rounded-full bg-shopify/20 border border-shopify/30 px-3 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify" />
        </span>
        <span className="text-xs text-shopify font-medium">47 online now</span>
      </motion.div>
    </div>
  );
}

// Stacked cards with depth effect
export function StackedCards({ className = "" }: { className?: string }) {
  const cards = [
    { title: "$12.8k", subtitle: "Revenue", color: "#95BF47", rotate: -8, x: 0 },
    { title: "1,284", subtitle: "Orders", color: "#C4E456", rotate: -2, x: 20 },
    { title: "89%", subtitle: "Happy", color: "#5865F2", rotate: 4, x: 40 },
  ];

  return (
    <div className={`relative w-72 h-48 select-none ${className}`}>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: card.rotate }}
          transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
          className="absolute top-0 w-48 rounded-2xl p-5 shadow-xl"
          style={{
            left: card.x,
            backgroundColor: "#161B22",
            border: `1px solid ${card.color}30`,
            zIndex: cards.length - i,
          }}
        >
          <div className="text-3xl font-bold text-white">{card.title}</div>
          <div className="text-sm mt-1" style={{ color: card.color }}>{card.subtitle}</div>
          <div
            className="absolute top-3 right-3 w-8 h-8 rounded-lg"
            style={{ backgroundColor: `${card.color}20` }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Phone mockup with app content
export function PhoneMockup({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Phone frame */}
      <div className="relative w-64 rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />

        {/* Screen */}
        <div className="relative rounded-[2rem] overflow-hidden bg-[#1E1F22]" style={{ aspectRatio: "9/19" }}>
          {children || (
            <div className="p-4 pt-10 h-full">
              {/* Default Discord-like content */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-shopify/20" />
                <div>
                  <div className="text-xs font-semibold text-white">Talk Shop</div>
                  <div className="text-[10px] text-gray-500">314 Members</div>
                </div>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 rounded-lg bg-white/5 p-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-shopify/30" />
                    <div className="flex-1">
                      <div className="h-2 w-16 rounded bg-white/20" />
                      <div className="h-2 w-24 rounded bg-white/10 mt-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reflection/glow */}
      <div className="absolute -inset-4 bg-shopify/10 blur-3xl rounded-full -z-10" />
    </div>
  );
}

// Isometric cube grid
export function IsometricGrid({ className = "" }: { className?: string }) {
  const cubes = [
    { x: 0, y: 0, z: 1, color: "#95BF47" },
    { x: 1, y: 0, z: 1, color: "#95BF47" },
    { x: 0, y: 1, z: 1, color: "#C4E456" },
    { x: 1, y: 1, z: 2, color: "#95BF47" },
    { x: 2, y: 0, z: 1, color: "#5865F2" },
    { x: 2, y: 1, z: 1, color: "#C4E456" },
    { x: 1, y: 2, z: 1, color: "#5865F2" },
  ];

  const cubeSize = 40;

  const getPosition = (x: number, y: number, z: number) => {
    const isoX = (x - y) * cubeSize * 0.866;
    const isoY = (x + y) * cubeSize * 0.5 - z * cubeSize;
    return { x: isoX + 120, y: isoY + 80 };
  };

  return (
    <div className={`relative w-64 h-48 select-none ${className}`}>
      <svg viewBox="0 0 240 180" className="w-full h-full">
        {cubes.map((cube, i) => {
          const pos = getPosition(cube.x, cube.y, cube.z);
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Top face */}
              <polygon
                points={`
                  ${pos.x},${pos.y - cubeSize * 0.5}
                  ${pos.x + cubeSize * 0.866},${pos.y}
                  ${pos.x},${pos.y + cubeSize * 0.5}
                  ${pos.x - cubeSize * 0.866},${pos.y}
                `}
                fill={cube.color}
                opacity="0.9"
              />
              {/* Left face */}
              <polygon
                points={`
                  ${pos.x - cubeSize * 0.866},${pos.y}
                  ${pos.x},${pos.y + cubeSize * 0.5}
                  ${pos.x},${pos.y + cubeSize * 1.5}
                  ${pos.x - cubeSize * 0.866},${pos.y + cubeSize}
                `}
                fill={cube.color}
                opacity="0.6"
              />
              {/* Right face */}
              <polygon
                points={`
                  ${pos.x + cubeSize * 0.866},${pos.y}
                  ${pos.x + cubeSize * 0.866},${pos.y + cubeSize}
                  ${pos.x},${pos.y + cubeSize * 1.5}
                  ${pos.x},${pos.y + cubeSize * 0.5}
                `}
                fill={cube.color}
                opacity="0.3"
              />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

// Success journey visual
export function SuccessJourney({ className = "" }: { className?: string }) {
  const steps = [
    { label: "Join", icon: "👋", value: "Day 1" },
    { label: "Learn", icon: "📚", value: "Week 1" },
    { label: "Build", icon: "🔨", value: "Month 1" },
    { label: "Launch", icon: "🚀", value: "Month 2" },
    { label: "Scale", icon: "📈", value: "Month 6" },
  ];

  return (
    <div className={`w-full max-w-lg rounded-2xl border border-white/10 bg-slate p-6 select-none ${className}`}>
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-6 left-6 right-6 h-0.5 bg-white/10" />
        <motion.div
          className="absolute top-6 left-6 h-0.5 bg-gradient-to-r from-shopify to-lime"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{ maxWidth: "calc(100% - 3rem)" }}
        />

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-carbon border-2 border-shopify/50 flex items-center justify-center text-xl"
                whileHover={{ scale: 1.1, borderColor: "#95BF47" }}
              >
                {step.icon}
              </motion.div>
              <span className="mt-2 text-xs font-semibold text-white">{step.label}</span>
              <span className="text-[10px] text-gray-500">{step.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
