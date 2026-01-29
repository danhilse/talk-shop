"use client";

import { motion } from "framer-motion";

// Code rain / matrix effect
export function CodeRain({ className = "" }: { className?: string }) {
  const columns = 20;
  const chars = "01{}[]<>/\\|;:.,?!@#$%^&*SHOPIFY".split("");

  return (
    <div className={`relative w-full h-48 overflow-hidden rounded-2xl bg-midnight select-none ${className}`}>
      {Array.from({ length: columns }, (_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 font-mono text-xs leading-tight"
          style={{
            left: `${(i / columns) * 100}%`,
            color: i % 3 === 0 ? "#95BF47" : i % 3 === 1 ? "#C4E456" : "#5865F220",
          }}
          initial={{ y: "-100%" }}
          animate={{ y: "200%" }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        >
          {Array.from({ length: 15 }, (_, j) => (
            <div key={j} style={{ opacity: 1 - j * 0.06 }}>
              {chars[Math.floor(Math.random() * chars.length)]}
            </div>
          ))}
        </motion.div>
      ))}
      {/* Fade overlays */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-midnight to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-midnight to-transparent" />
    </div>
  );
}

// Circuit board pattern
export function CircuitBoard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-48 rounded-2xl overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 400 200" className="w-full h-full">
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#95BF47" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C4E456" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Horizontal lines */}
        {[40, 80, 120, 160].map((y, i) => (
          <motion.path
            key={`h-${i}`}
            d={`M 0 ${y} H ${100 + i * 50} L ${120 + i * 50} ${y + 20} H 400`}
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.2 }}
          />
        ))}

        {/* Vertical lines */}
        {[80, 160, 240, 320].map((x, i) => (
          <motion.path
            key={`v-${i}`}
            d={`M ${x} 0 V ${60 + i * 20} L ${x + 20} ${80 + i * 20} V 200`}
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 + i * 0.2 }}
          />
        ))}

        {/* Nodes */}
        {[
          [80, 40], [160, 80], [240, 40], [320, 120],
          [100, 120], [200, 160], [280, 80], [360, 160],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="6"
            fill="#0D1117"
            stroke="#95BF47"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + i * 0.1, type: "spring" }}
          />
        ))}

        {/* Animated pulse dots */}
        {[
          [80, 40], [240, 40], [200, 160],
        ].map(([x, y], i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={x}
            cy={y}
            r="3"
            fill="#95BF47"
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// API flow visualization
export function APIFlow({ className = "" }: { className?: string }) {
  const nodes = [
    { id: "store", label: "Your Store", x: 50, y: 80, color: "#95BF47" },
    { id: "api", label: "Shopify API", x: 200, y: 80, color: "#5865F2" },
    { id: "app", label: "Your App", x: 350, y: 80, color: "#C4E456" },
  ];

  return (
    <div className={`relative w-full max-w-md h-40 rounded-2xl border border-white/10 bg-slate p-4 select-none ${className}`}>
      <svg viewBox="0 0 400 120" className="w-full h-full">
        {/* Connection lines */}
        <motion.path
          d="M 90 80 L 160 80"
          stroke="#95BF4750"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M 240 80 L 310 80"
          stroke="#C4E45650"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Animated data packets */}
        <motion.circle
          cx="90"
          cy="80"
          r="4"
          fill="#95BF47"
          animate={{ cx: [90, 160, 90] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.circle
          cx="240"
          cy="80"
          r="4"
          fill="#C4E456"
          animate={{ cx: [240, 310, 240] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
        />

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <rect
              x={node.x - 40}
              y={node.y - 25}
              width="80"
              height="50"
              rx="8"
              fill="#21262D"
              stroke={node.color}
              strokeWidth="2"
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill="white"
              fontSize="11"
              fontWeight="600"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// Webhook event stream
export function WebhookStream({ className = "" }: { className?: string }) {
  const events = [
    { type: "orders/create", status: "success", time: "2ms" },
    { type: "products/update", status: "success", time: "5ms" },
    { type: "customers/create", status: "success", time: "3ms" },
    { type: "inventory/update", status: "pending", time: "..." },
  ];

  return (
    <div className={`w-72 rounded-xl border border-white/10 bg-[#1E1E1E] overflow-hidden select-none ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-[#252526]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify" />
        </span>
        <span className="text-xs font-mono text-gray-400">Webhook Stream</span>
      </div>

      {/* Events */}
      <div className="p-2 space-y-1 font-mono text-xs">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-2 rounded bg-white/5 px-2 py-1.5"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${
              event.status === "success" ? "bg-shopify" : "bg-yellow-500 animate-pulse"
            }`} />
            <span className="text-cyan-400 flex-1 truncate">{event.type}</span>
            <span className="text-gray-500">{event.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Hexagonal grid pattern
export function HexGrid({ className = "" }: { className?: string }) {
  const hexSize = 30;
  const rows = 4;
  const cols = 8;

  const getHexPoints = (cx: number, cy: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      points.push(`${cx + hexSize * Math.cos(angle)},${cy + hexSize * Math.sin(angle)}`);
    }
    return points.join(" ");
  };

  const hexagons: { x: number; y: number; active: boolean }[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * hexSize * 1.75 + (row % 2) * hexSize * 0.875 + 40;
      const y = row * hexSize * 1.5 + 40;
      hexagons.push({ x, y, active: Math.random() > 0.6 });
    }
  }

  return (
    <div className={`relative w-full h-48 rounded-2xl overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 400 180" className="w-full h-full">
        {hexagons.map((hex, i) => (
          <motion.polygon
            key={i}
            points={getHexPoints(hex.x, hex.y)}
            fill={hex.active ? "#95BF4720" : "transparent"}
            stroke="#95BF4730"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              fill: hex.active
                ? ["#95BF4720", "#95BF4740", "#95BF4720"]
                : "transparent",
            }}
            transition={{
              delay: i * 0.02,
              fill: { duration: 3, repeat: Infinity, delay: Math.random() * 2 },
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Connection nodes visualization
export function ConnectionNodes({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 100, y: 60, size: 24, label: "You", primary: true },
    { x: 200, y: 40, size: 16, label: "Dev" },
    { x: 180, y: 100, size: 18, label: "Expert" },
    { x: 280, y: 70, size: 14, label: "Merchant" },
    { x: 60, y: 110, size: 12, label: "Builder" },
    { x: 250, y: 120, size: 14, label: "Designer" },
    { x: 320, y: 40, size: 10 },
    { x: 340, y: 100, size: 10 },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 4], [1, 3], [2, 5], [1, 6], [3, 7], [2, 3],
  ];

  return (
    <div className={`relative w-full max-w-md h-40 rounded-2xl border border-white/10 bg-slate overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 380 150" className="w-full h-full">
        {/* Connections */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="#95BF47"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.05, type: "spring" }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.primary ? "#95BF47" : "#95BF4730"}
              stroke="#95BF47"
              strokeWidth={node.primary ? 2 : 1}
            />
            {node.label && (
              <text
                x={node.x}
                y={node.y + node.size + 12}
                textAnchor="middle"
                fill="#9CA3AF"
                fontSize="10"
              >
                {node.label}
              </text>
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
