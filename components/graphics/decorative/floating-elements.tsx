"use client";

import { motion } from "framer-motion";

// Floating orbs with gradient glow - great for backgrounds
export function FloatingOrbs({ className = "" }: { className?: string }) {
  const orbs = [
    { size: 120, color: "#95BF47", x: "10%", y: "20%", duration: 8 },
    { size: 80, color: "#C4E456", x: "70%", y: "60%", duration: 10 },
    { size: 60, color: "#5865F2", x: "80%", y: "15%", duration: 7 },
    { size: 100, color: "#95BF47", x: "30%", y: "70%", duration: 9 },
    { size: 40, color: "#C4E456", x: "60%", y: "30%", duration: 6 },
  ];

  return (
    <div className={`relative w-full h-80 select-none ${className}`}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}40 0%, ${orb.color}00 70%)`,
            filter: "blur(20px)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient mesh - modern abstract background
export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-64 overflow-hidden rounded-2xl select-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 40% 20%, #95BF4730 0px, transparent 50%),
            radial-gradient(at 80% 0%, #5865F220 0px, transparent 50%),
            radial-gradient(at 0% 50%, #C4E45620 0px, transparent 50%),
            radial-gradient(at 80% 50%, #95BF4715 0px, transparent 50%),
            radial-gradient(at 0% 100%, #5865F215 0px, transparent 50%),
            radial-gradient(at 80% 100%, #C4E45620 0px, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-midnight/50 to-transparent" />
    </div>
  );
}

// Particle field with connections
export function ParticleNetwork({ className = "" }: { className?: string }) {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 3 + Math.random() * 4,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div className={`relative w-full h-64 overflow-hidden rounded-2xl bg-slate/50 select-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full">
        {/* Connection lines */}
        {particles.slice(0, 10).map((p1, i) =>
          particles.slice(i + 1, i + 4).map((p2, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={`${p1.x}%`}
              y1={`${p1.y}%`}
              x2={`${p2.x}%`}
              y2={`${p2.y}%`}
              stroke="#95BF47"
              strokeWidth="0.5"
              strokeOpacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))
        )}

        {/* Particles */}
        {particles.map((p) => (
          <motion.circle
            key={p.id}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r={p.size}
            fill="#95BF47"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.id * 0.1,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Pulsing rings - great for CTAs or highlights
export function PulsingRings({
  className = "",
  color = "#95BF47",
  size = 200,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: color }}
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{
            scale: [0.8, 1.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
      <div
        className="absolute inset-1/4 rounded-full"
        style={{ backgroundColor: `${color}30` }}
      />
    </div>
  );
}

// Animated grid pattern
export function AnimatedGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-48 overflow-hidden rounded-2xl select-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(#95BF4710 1px, transparent 1px),
            linear-gradient(90deg, #95BF4710 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Highlight cells */}
      {[
        { x: 2, y: 1 },
        { x: 5, y: 2 },
        { x: 3, y: 3 },
        { x: 7, y: 1 },
      ].map((cell, i) => (
        <motion.div
          key={i}
          className="absolute w-10 h-10"
          style={{
            left: cell.x * 40,
            top: cell.y * 40,
            backgroundColor: "#95BF4720",
          }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

// Morphing blob
export function MorphingBlob({
  className = "",
  color = "#95BF47",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`relative w-64 h-64 select-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${color}40, ${color}10)`,
          filter: "blur(40px)",
        }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
