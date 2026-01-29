"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// 3D tilting card
export function TiltCard({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className={`relative select-none ${className}`}
    >
      {children || (
        <div className="w-64 h-40 rounded-2xl border border-shopify/30 bg-gradient-to-br from-slate to-carbon p-6">
          <div className="text-lg font-bold text-white mb-2">Interactive Card</div>
          <p className="text-sm text-gray-400">Hover and move your mouse around</p>
          <div
            className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-shopify/20"
            style={{ transform: "translateZ(40px)" }}
          />
        </div>
      )}
    </motion.div>
  );
}

// Magnetic button effect
export function MagneticElement({
  children,
  className = "",
  strength = 0.3,
}: {
  children?: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={`inline-block select-none ${className}`}
    >
      {children || (
        <div className="px-6 py-3 rounded-full bg-shopify text-midnight font-bold cursor-pointer">
          Hover Me
        </div>
      )}
    </motion.div>
  );
}

// Reveal on hover card
export function RevealCard({
  title = "Hidden Content",
  preview = "Hover to reveal",
  revealed = "The secret knowledge you've been seeking!",
  className = "",
}: {
  title?: string;
  preview?: string;
  revealed?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileHover="visible"
      className={`relative w-64 h-48 rounded-2xl border border-white/10 bg-slate overflow-hidden cursor-pointer select-none ${className}`}
    >
      {/* Background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-shopify/20 to-lime/10"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <motion.p
            className="mt-2 text-sm text-gray-400"
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 0 },
            }}
          >
            {preview}
          </motion.p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-sm text-shopify">{revealed}</p>
          <motion.div
            className="mt-3 flex items-center gap-2 text-xs text-white"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ delay: 0.2 }}
          >
            <span>Learn more</span>
            <span>→</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Animated border card
export function GlowBorderCard({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative p-[2px] rounded-2xl overflow-hidden select-none ${className}`}>
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #95BF47, #C4E456, #5865F2, #95BF47)",
          backgroundSize: "300% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner content */}
      <div className="relative rounded-[14px] bg-slate">
        {children || (
          <div className="p-6">
            <h3 className="text-lg font-bold text-white mb-2">Glowing Border</h3>
            <p className="text-sm text-gray-400">
              Animated gradient border effect
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Shimmer loading effect
export function ShimmerCard({ className = "" }: { className?: string }) {
  return (
    <div className={`w-64 rounded-2xl border border-white/10 bg-slate overflow-hidden select-none ${className}`}>
      {/* Image placeholder */}
      <div className="relative h-32 bg-white/5 overflow-hidden">
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ translateX: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
        />
      </div>

      <div className="p-4 space-y-3">
        {/* Title placeholder */}
        <div className="relative h-4 w-3/4 bg-white/5 rounded overflow-hidden">
          <motion.div
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ translateX: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.1 }}
          />
        </div>

        {/* Text placeholders */}
        <div className="relative h-3 w-full bg-white/5 rounded overflow-hidden">
          <motion.div
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ translateX: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.2 }}
          />
        </div>
        <div className="relative h-3 w-2/3 bg-white/5 rounded overflow-hidden">
          <motion.div
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ translateX: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}

// Staggered list reveal
export function StaggeredList({ className = "" }: { className?: string }) {
  const items = [
    { icon: "🚀", text: "Ship faster with community support" },
    { icon: "💡", text: "Get instant answers to tricky problems" },
    { icon: "🔧", text: "Access proven code snippets" },
    { icon: "📈", text: "Scale your Shopify business" },
    { icon: "🤝", text: "Connect with fellow merchants" },
  ];

  return (
    <div className={`w-80 rounded-2xl border border-white/10 bg-slate p-6 select-none ${className}`}>
      <h3 className="text-lg font-bold text-white mb-4">Why Join?</h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3"
          >
            <motion.span
              className="text-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.15 + 0.1, type: "spring" }}
            >
              {item.icon}
            </motion.span>
            <span className="text-sm text-gray-300">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Orbiting elements
export function OrbitingElements({ className = "" }: { className?: string }) {
  const icons = ["🛍️", "💻", "📊", "🎯", "⚡", "🔧"];

  return (
    <div className={`relative w-64 h-64 select-none ${className}`}>
      {/* Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-shopify to-lime flex items-center justify-center">
        <span className="text-3xl">🏪</span>
      </div>

      {/* Orbiting items */}
      {icons.map((icon, i) => {
        const angle = (i / icons.length) * 360;
        const radius = 100;

        return (
          <motion.div
            key={i}
            className="absolute w-10 h-10 rounded-full bg-slate border border-white/10 flex items-center justify-center text-lg"
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [
                Math.cos((angle * Math.PI) / 180) * radius,
                Math.cos(((angle + 360) * Math.PI) / 180) * radius,
              ],
              y: [
                Math.sin((angle * Math.PI) / 180) * radius,
                Math.sin(((angle + 360) * Math.PI) / 180) * radius,
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {icon}
          </motion.div>
        );
      })}

      {/* Orbit path */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/10" />
    </div>
  );
}
