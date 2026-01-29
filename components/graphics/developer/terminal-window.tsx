"use client";

import { motion } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "success" | "error" | "info";
  text: string;
  prompt?: string;
}

interface TerminalWindowProps {
  title?: string;
  lines?: TerminalLine[];
  className?: string;
  animated?: boolean;
  variant?: "default" | "minimal" | "shopify";
}

const defaultLines: TerminalLine[] = [
  { type: "command", text: "shopify app dev", prompt: "~" },
  { type: "output", text: "Starting development server..." },
  { type: "info", text: "│  App URL: https://myapp.ngrok.io" },
  { type: "info", text: "│  Preview: https://admin.shopify.com/store/dev/apps/my-app" },
  { type: "success", text: "✓ Dev server running on http://localhost:3000" },
];

export function DeveloperTerminalWindow({
  title = "Terminal",
  lines = defaultLines,
  className = "",
  animated = true,
  variant = "default",
}: TerminalWindowProps) {
  const Wrapper = animated ? motion.div : "div";
  const LineWrapper = animated ? motion.div : "div";

  const getLineStyle = (type: TerminalLine["type"]) => {
    switch (type) {
      case "command":
        return "text-white";
      case "success":
        return "text-shopify";
      case "error":
        return "text-red-400";
      case "info":
        return "text-cyan-400";
      default:
        return "text-gray-400";
    }
  };

  const bgColor = variant === "shopify" ? "bg-midnight" : "bg-[#0D0D0D]";
  const borderColor = variant === "shopify" ? "border-shopify/20" : "border-white/10";

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      })}
      className={`rounded-xl border ${borderColor} ${bgColor} overflow-hidden select-none ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5 bg-black/30">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
        </div>
        <span className="ml-2 text-xs text-gray-500 font-mono">{title}</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm">
        {lines.map((line, i) => (
          <LineWrapper
            key={i}
            {...(animated && {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 + i * 0.15 },
            })}
            className={`${getLineStyle(line.type)} ${i > 0 ? "mt-1" : ""}`}
          >
            {line.type === "command" && (
              <span className="text-shopify mr-2">
                {line.prompt || "~"} $
              </span>
            )}
            {line.text}
          </LineWrapper>
        ))}

        {/* Blinking cursor */}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-white/80 ml-1 align-middle"
        />
      </div>
    </Wrapper>
  );
}

// NPM install animation
export function DeveloperNpmInstall({ className = "" }: { className?: string }) {
  const lines: TerminalLine[] = [
    { type: "command", text: "npm install @shopify/shopify-api" },
    { type: "output", text: "added 142 packages in 8s" },
    { type: "output", text: "" },
    { type: "info", text: "23 packages are looking for funding" },
    { type: "info", text: "  run `npm fund` for details" },
    { type: "success", text: "✓ Installation complete" },
  ];

  return <DeveloperTerminalWindow title="npm" lines={lines} className={className} />;
}

// Shopify CLI output
export function DeveloperShopifyCLI({ className = "" }: { className?: string }) {
  const lines: TerminalLine[] = [
    { type: "command", text: "shopify app deploy" },
    { type: "output", text: "" },
    { type: "info", text: "╭─ info ─────────────────────────────────────╮" },
    { type: "info", text: "│                                             │" },
    { type: "info", text: "│  Deploying your app to production...        │" },
    { type: "info", text: "│                                             │" },
    { type: "info", text: "╰─────────────────────────────────────────────╯" },
    { type: "output", text: "" },
    { type: "output", text: "Building app..." },
    { type: "success", text: "✓ Build complete" },
    { type: "output", text: "Uploading..." },
    { type: "success", text: "✓ App deployed successfully!" },
  ];

  return <DeveloperTerminalWindow title="Shopify CLI" lines={lines} variant="shopify" className={className} />;
}

// Git commands
export function DeveloperGitTerminal({ className = "" }: { className?: string }) {
  const lines: TerminalLine[] = [
    { type: "command", text: "git status" },
    { type: "output", text: "On branch feature/webhook-handler" },
    { type: "output", text: "Changes to be committed:" },
    { type: "success", text: "  modified:   src/webhooks/handler.ts" },
    { type: "success", text: "  new file:   src/webhooks/verify.ts" },
    { type: "command", text: "git commit -m 'Add webhook verification'" },
    { type: "success", text: "[feature/webhook-handler 3a2b1c0] Add webhook verification" },
    { type: "output", text: " 2 files changed, 47 insertions(+)" },
  ];

  return <DeveloperTerminalWindow title="git" lines={lines} className={className} />;
}
