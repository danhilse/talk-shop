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

// Repeating isometric cubes
export function IsometricCubes({
  className = "",
  rows = 4,
  cols = 6,
  animated = true,
}: {
  className?: string;
  rows?: number;
  cols?: number;
  animated?: boolean;
}) {
  const cubeWidth = 60;
  const cubeHeight = 35;

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox={`0 0 ${cols * cubeWidth * 0.75 + 30} ${rows * cubeHeight + 40}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="cube-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#95BF47" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C4E456" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="cube-left" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#95BF47" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#95BF47" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="cube-right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5865F2" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#5865F2" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => {
            const x = col * cubeWidth * 0.75 + (row % 2) * (cubeWidth * 0.375) + 15;
            const y = row * cubeHeight + 20;
            const delay = (row + col) * 0.05;

            return (
              <motion.g
                key={`${row}-${col}`}
                initial={animated ? { opacity: 0, y: -10 } : { opacity: 1 }}
                animate={animated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay, duration: 0.4 }}
              >
                {/* Top face */}
                <motion.polygon
                  points={`
                    ${x},${y - 15}
                    ${x + 30},${y}
                    ${x},${y + 15}
                    ${x - 30},${y}
                  `}
                  fill="url(#cube-top)"
                  stroke="#95BF4730"
                  strokeWidth="1"
                  animate={animated ? {
                    opacity: [0.6, 1, 0.6],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: delay + Math.random() * 2,
                  }}
                />
                {/* Left face */}
                <polygon
                  points={`
                    ${x - 30},${y}
                    ${x},${y + 15}
                    ${x},${y + 35}
                    ${x - 30},${y + 20}
                  `}
                  fill="url(#cube-left)"
                  stroke="#95BF4720"
                  strokeWidth="1"
                />
                {/* Right face */}
                <polygon
                  points={`
                    ${x + 30},${y}
                    ${x},${y + 15}
                    ${x},${y + 35}
                    ${x + 30},${y + 20}
                  `}
                  fill="url(#cube-right)"
                  stroke="#5865F220"
                  strokeWidth="1"
                />
              </motion.g>
            );
          })
        )}
      </svg>
    </div>
  );
}

// Dot grid pattern
export function DotGrid({
  className = "",
  dotSize = 3,
  spacing = 24,
  animated = true,
}: {
  className?: string;
  dotSize?: number;
  spacing?: number;
  animated?: boolean;
}) {
  const rows = 8;
  const cols = 16;

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox={`0 0 ${cols * spacing} ${rows * spacing}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => {
            const isAccent = (row + col) % 5 === 0;
            return (
              <motion.circle
                key={`${row}-${col}`}
                cx={col * spacing + spacing / 2}
                cy={row * spacing + spacing / 2}
                r={isAccent ? dotSize * 1.5 : dotSize}
                fill={isAccent ? "#95BF47" : "#95BF4740"}
                initial={animated ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                animate={animated ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: (row + col) * 0.02 }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}

// Diagonal lines pattern
export function DiagonalLines({
  className = "",
  lineSpacing = 20,
  strokeWidth = 1,
  direction = "right",
}: {
  className?: string;
  lineSpacing?: number;
  strokeWidth?: number;
  direction?: "left" | "right" | "both";
}) {
  const numLines = 30;

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {(direction === "right" || direction === "both") &&
          Array.from({ length: numLines }, (_, i) => (
            <motion.line
              key={`r-${i}`}
              x1={i * lineSpacing - 200}
              y1={0}
              x2={i * lineSpacing}
              y2={200}
              stroke="#95BF47"
              strokeWidth={strokeWidth}
              strokeOpacity={0.2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.03 }}
            />
          ))}
        {(direction === "left" || direction === "both") &&
          Array.from({ length: numLines }, (_, i) => (
            <motion.line
              key={`l-${i}`}
              x1={i * lineSpacing}
              y1={0}
              x2={i * lineSpacing - 200}
              y2={200}
              stroke={direction === "both" ? "#5865F2" : "#95BF47"}
              strokeWidth={strokeWidth}
              strokeOpacity={0.15}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.03 }}
            />
          ))}
      </svg>
    </div>
  );
}

// Cross-hatch pattern
export function CrossHatch({
  className = "",
  spacing = 16,
}: {
  className?: string;
  spacing?: number;
}) {
  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="crosshatch" patternUnits="userSpaceOnUse" width={spacing} height={spacing}>
            <path
              d={`M 0 0 L ${spacing} ${spacing} M ${spacing} 0 L 0 ${spacing}`}
              stroke="#95BF47"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
          </pattern>
        </defs>
        <motion.rect
          width="400"
          height="200"
          fill="url(#crosshatch)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </svg>
    </div>
  );
}

// Chevron pattern
export function ChevronPattern({
  className = "",
  size = 30,
  animated = true,
}: {
  className?: string;
  size?: number;
  animated?: boolean;
}) {
  const rows = 8;
  const cols = 14;

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox={`0 0 ${cols * size} ${rows * size * 0.6}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => {
            const x = col * size + (row % 2) * (size / 2);
            const y = row * size * 0.5;
            const isAccent = (row + col) % 4 === 0;

            return (
              <motion.path
                key={`${row}-${col}`}
                d={`M ${x} ${y + size * 0.3} L ${x + size / 2} ${y} L ${x + size} ${y + size * 0.3}`}
                stroke={isAccent ? "#C4E456" : "#95BF47"}
                strokeWidth={isAccent ? 2 : 1}
                strokeOpacity={isAccent ? 0.6 : 0.2}
                fill="none"
                initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
                animate={animated ? { pathLength: 1 } : {}}
                transition={{ delay: (row + col) * 0.02, duration: 0.5 }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}

// Wave pattern
export function WavePattern({
  className = "",
  layers = 4,
  animated = true,
}: {
  className?: string;
  layers?: number;
  animated?: boolean;
}) {
  const colors = ["#95BF47", "#C4E456", "#5865F2", "#95BF47"];

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 400 150" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: layers }, (_, i) => {
          const yOffset = 30 + i * 25;
          const amplitude = 15 - i * 2;

          return (
            <motion.path
              key={i}
              d={`M 0 ${yOffset} Q 50 ${yOffset - amplitude} 100 ${yOffset} T 200 ${yOffset} T 300 ${yOffset} T 400 ${yOffset} T 500 ${yOffset}`}
              stroke={colors[i % colors.length]}
              strokeWidth={2 - i * 0.3}
              strokeOpacity={0.4 - i * 0.08}
              fill="none"
              initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
              animate={
                animated
                  ? {
                      pathLength: 1,
                      x: [0, -100, 0],
                    }
                  : {}
              }
              transition={{
                pathLength: { duration: 1, delay: i * 0.2 },
                x: { duration: 8 + i * 2, repeat: Infinity, ease: "linear" },
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

// Concentric circles
export function ConcentricCircles({
  className = "",
  rings = 6,
  animated = true,
}: {
  className?: string;
  rings?: number;
  animated?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 300 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: rings }, (_, i) => {
          const radius = 20 + i * 25;
          const isAccent = i % 2 === 0;

          return (
            <motion.circle
              key={i}
              cx="150"
              cy="100"
              r={radius}
              fill="none"
              stroke={isAccent ? "#95BF47" : "#5865F2"}
              strokeWidth={isAccent ? 2 : 1}
              strokeOpacity={0.3 - i * 0.04}
              strokeDasharray={i % 3 === 0 ? "8,4" : "none"}
              initial={animated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              animate={
                animated
                  ? {
                      scale: 1,
                      opacity: 1,
                      rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                    }
                  : {}
              }
              transition={{
                scale: { delay: i * 0.1, duration: 0.5 },
                opacity: { delay: i * 0.1, duration: 0.5 },
                rotate: { duration: 30 + i * 5, repeat: Infinity, ease: "linear" },
              }}
            />
          );
        })}
        {/* Center dot */}
        <motion.circle
          cx="150"
          cy="100"
          r="6"
          fill="#95BF47"
          initial={animated ? { scale: 0 } : { scale: 1 }}
          animate={animated ? { scale: [1, 1.2, 1] } : {}}
          transition={{ scale: { duration: 2, repeat: Infinity } }}
        />
      </svg>
    </div>
  );
}

// Diamond/rhombus pattern
export function DiamondPattern({
  className = "",
  size = 30,
  animated = true,
}: {
  className?: string;
  size?: number;
  animated?: boolean;
}) {
  const rows = 6;
  const cols = 14;

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox={`0 0 ${cols * size} ${rows * size}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => {
            const x = col * size + (row % 2) * (size / 2);
            const y = row * size;
            const isFilled = (row + col) % 5 === 0;

            return (
              <motion.polygon
                key={`${row}-${col}`}
                points={`
                  ${x + size / 2},${y}
                  ${x + size},${y + size / 2}
                  ${x + size / 2},${y + size}
                  ${x},${y + size / 2}
                `}
                fill={isFilled ? "#95BF4720" : "transparent"}
                stroke="#95BF47"
                strokeWidth="1"
                strokeOpacity={isFilled ? 0.5 : 0.15}
                initial={animated ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                animate={animated ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: (row + col) * 0.02 }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}

// Brick pattern
export function BrickPattern({
  className = "",
  brickWidth = 60,
  brickHeight = 25,
}: {
  className?: string;
  brickWidth?: number;
  brickHeight?: number;
}) {
  const rows = 8;
  const cols = 8;

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox={`0 0 ${cols * brickWidth} ${rows * brickHeight}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols + 1 }, (_, col) => {
            const x = col * brickWidth + (row % 2) * (brickWidth / 2) - brickWidth / 2;
            const y = row * brickHeight;
            const isHighlight = (row * cols + col) % 7 === 0;

            return (
              <motion.rect
                key={`${row}-${col}`}
                x={x + 1}
                y={y + 1}
                width={brickWidth - 2}
                height={brickHeight - 2}
                rx="2"
                fill={isHighlight ? "#95BF4715" : "transparent"}
                stroke="#95BF47"
                strokeWidth="1"
                strokeOpacity={isHighlight ? 0.4 : 0.15}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (row + col) * 0.03 }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}

// Triangular tessellation
export function TriangleTessellation({
  className = "",
  size = 40,
  animated = true,
}: {
  className?: string;
  size?: number;
  animated?: boolean;
}) {
  const rows = 6;
  const cols = 12;
  const height = size * 0.866; // equilateral triangle height

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox={`0 0 ${cols * size / 2 + size} ${rows * height}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => {
            const x = col * (size / 2);
            const y = row * height;
            const isUp = (row + col) % 2 === 0;
            const isAccent = (row + col) % 6 === 0;

            const points = isUp
              ? `${x},${y + height} ${x + size / 2},${y} ${x + size},${y + height}`
              : `${x},${y} ${x + size / 2},${y + height} ${x + size},${y}`;

            return (
              <motion.polygon
                key={`${row}-${col}`}
                points={points}
                fill={isAccent ? "#95BF4720" : "transparent"}
                stroke={isAccent ? "#C4E456" : "#95BF47"}
                strokeWidth="1"
                strokeOpacity={isAccent ? 0.5 : 0.15}
                initial={animated ? { opacity: 0 } : { opacity: 1 }}
                animate={animated ? { opacity: 1 } : {}}
                transition={{ delay: (row + col) * 0.015 }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}

// Plus/cross pattern
export function PlusPattern({
  className = "",
  size = 20,
  spacing = 40,
}: {
  className?: string;
  size?: number;
  spacing?: number;
}) {
  const rows = 6;
  const cols = 12;

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox={`0 0 ${cols * spacing} ${rows * spacing}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => {
            const x = col * spacing + spacing / 2;
            const y = row * spacing + spacing / 2;
            const isAccent = (row + col) % 4 === 0;
            const thickness = isAccent ? 4 : 2;

            return (
              <motion.g key={`${row}-${col}`}>
                {/* Horizontal bar */}
                <motion.rect
                  x={x - size / 2}
                  y={y - thickness / 2}
                  width={size}
                  height={thickness}
                  fill={isAccent ? "#C4E456" : "#95BF47"}
                  fillOpacity={isAccent ? 0.5 : 0.2}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: (row + col) * 0.02 }}
                />
                {/* Vertical bar */}
                <motion.rect
                  x={x - thickness / 2}
                  y={y - size / 2}
                  width={thickness}
                  height={size}
                  fill={isAccent ? "#C4E456" : "#95BF47"}
                  fillOpacity={isAccent ? 0.5 : 0.2}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: (row + col) * 0.02 + 0.1 }}
                />
              </motion.g>
            );
          })
        )}
      </svg>
    </div>
  );
}

// Flowing lines pattern
export function FlowingLines({
  className = "",
  lines = 8,
}: {
  className?: string;
  lines?: number;
}) {
  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: lines }, (_, i) => {
          const yBase = 20 + i * 22;
          const amplitude = 20 + Math.sin(i) * 10;
          const phase = i * 40;

          return (
            <motion.path
              key={i}
              d={`M -50 ${yBase}
                  Q ${50 + phase} ${yBase - amplitude} ${100 + phase} ${yBase}
                  T ${200 + phase} ${yBase}
                  T ${300 + phase} ${yBase}
                  T ${400 + phase} ${yBase}
                  T ${500 + phase} ${yBase}`}
              stroke={i % 2 === 0 ? "#95BF47" : "#5865F2"}
              strokeWidth={2 - i * 0.15}
              strokeOpacity={0.4 - i * 0.03}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                x: [-phase, -phase - 100],
              }}
              transition={{
                pathLength: { duration: 1.5, delay: i * 0.1 },
                x: { duration: 6 + i, repeat: Infinity, ease: "linear" },
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

// Starburst/radial pattern
export function StarburstPattern({
  className = "",
  rays = 24,
  animated = true,
}: {
  className?: string;
  rays?: number;
  animated?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 300 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: rays }, (_, i) => {
          const angle = (i / rays) * 360;
          const length = 150 + (i % 3) * 20;
          const isAccent = i % 4 === 0;

          return (
            <motion.line
              key={i}
              x1="150"
              y1="100"
              x2={150 + Math.cos((angle * Math.PI) / 180) * length}
              y2={100 + Math.sin((angle * Math.PI) / 180) * length}
              stroke={isAccent ? "#C4E456" : "#95BF47"}
              strokeWidth={isAccent ? 2 : 1}
              strokeOpacity={isAccent ? 0.4 : 0.15}
              initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ delay: i * 0.03, duration: 0.5 }}
            />
          );
        })}
        {/* Center circle */}
        <motion.circle
          cx="150"
          cy="100"
          r="8"
          fill="#95BF47"
          fillOpacity="0.3"
          initial={animated ? { scale: 0 } : { scale: 1 }}
          animate={animated ? { scale: 1 } : {}}
          transition={{ delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

// Noise/static pattern
export function NoisePattern({
  className = "",
  density = 200,
}: {
  className?: string;
  density?: number;
}) {
  const particles = useMemo(() => {
    const random = seededRandom(999);
    return Array.from({ length: density }, () => ({
      x: random() * 400,
      y: random() * 200,
      size: random() * 3 + 1,
      opacity: random() * 0.4 + 0.1,
      isGreen: random() > 0.7,
      duration: 2 + random() * 2,
      delay: random() * 2,
    }));
  }, [density]);

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {particles.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill={p.isGreen ? "#95BF47" : "#5865F2"}
            fillOpacity={p.opacity}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [p.opacity, p.opacity * 0.3, p.opacity],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Maze pattern
export function MazePattern({
  className = "",
  cellSize = 20,
}: {
  className?: string;
  cellSize?: number;
}) {
  const rows = 10;
  const cols = 20;

  // Generate a stable maze-like pattern using seeded random
  const cells = useMemo(() => {
    const random = seededRandom(888);
    return Array.from({ length: rows * cols }, () => ({
      hasRight: random() > 0.5,
      hasBottom: random() > 0.5,
    }));
  }, []);

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox={`0 0 ${cols * cellSize} ${rows * cellSize}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => {
            const i = row * cols + col;
            const x = col * cellSize;
            const y = row * cellSize;
            const cell = cells[i];

            return (
              <motion.g key={i}>
                {cell.hasRight && col < cols - 1 && (
                  <motion.line
                    x1={x + cellSize}
                    y1={y}
                    x2={x + cellSize}
                    y2={y + cellSize}
                    stroke="#95BF47"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: i * 0.005 }}
                  />
                )}
                {cell.hasBottom && row < rows - 1 && (
                  <motion.line
                    x1={x}
                    y1={y + cellSize}
                    x2={x + cellSize}
                    y2={y + cellSize}
                    stroke="#95BF47"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: i * 0.005 }}
                  />
                )}
              </motion.g>
            );
          })
        )}
      </svg>
    </div>
  );
}
