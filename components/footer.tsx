"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

import {
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
  RedditIcon,
  FacebookIcon,
} from "@/components/icons";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/talkshopify", icon: InstagramIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@talkshopify", icon: TikTokIcon },
  { name: "YouTube", href: "https://www.youtube.com/@TalkShopify", icon: YouTubeIcon },
  { name: "Reddit", href: "https://www.reddit.com/r/talkshopify/", icon: RedditIcon },
  { name: "Facebook", href: "https://www.facebook.com/letstalkshopify", icon: FacebookIcon },
];

const communityLinks = [
  { label: "Developers", href: "/shopify-dev-community" },
  { label: "Growth", href: "/shopify-growth-community" },
  { label: "Entrepreneurs", href: "/shopify-entrepreneurs" },
  { label: "Support", href: "/shopify-support-group" },
  { label: "Experts", href: "/shopify-experts-network" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-midnight py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Social links */}
        <FadeUp id="socials" className="mb-12">
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {socialLinks.map((social) => (
              <StaggerItem key={social.name}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-shopify/50 hover:bg-shopify/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
                  aria-label={social.name}
                >
                  <social.icon className="h-7 w-7 text-gray-400 transition-colors group-hover:text-shopify" />
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>

        <StaggerContainer className="grid gap-12 text-center md:grid-cols-3 md:text-left" staggerDelay={0.1}>
          {/* Community Pages */}
          <StaggerItem>
            <h4 className="mb-4 text-lg font-semibold text-white">Community</h4>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Location & Hours - Stacked */}
          <StaggerItem>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-lg font-semibold text-white">Location</h4>
                <p className="text-gray-400">
                  123 Mars, Crater City, Red Planet
                </p>
                <p className="mt-1 text-sm text-gray-600">(WiFi may be spotty)</p>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-white">Hours</h4>
                <p className="text-gray-400">
                  Who has time for breaks? We&apos;re here 24/7!
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
            <p className="text-gray-400">
              <motion.a
                href="mailto:hello@letstalkshop.com"
                whileHover={{ color: "#ffffff" }}
                className="transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
              >
                hello@letstalkshop.com
              </motion.a>
            </p>
          </StaggerItem>
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 border-t border-white/5 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-shopify/20">
                <Image
                  src="/logo.webp"
                  alt="Talk Shop"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-white/60">Talk Shop</span>
            </motion.div>
            <p className="font-mono text-xs text-gray-600 text-center">
              Built for real builders. Not affiliated with Shopify Inc.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <motion.div whileHover={{ y: -2 }}>
                <Link href="/" className="text-xs text-gray-500 hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight">
                  Home
                </Link>
              </motion.div>
              {legalLinks.map((link) => (
                <motion.div key={link.label} whileHover={{ y: -2 }}>
                  <Link href={link.href} className="text-xs text-gray-500 hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shopify focus-visible:ring-offset-2 focus-visible:ring-offset-midnight">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
