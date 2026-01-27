"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

function DiscordIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M37.9281 17C38.4298 21.2545 40.825 23.7941 45 24.0658V28.8451C42.5859 29.0794 40.4652 28.3016 38.0038 26.821V35.7423C38.0038 47.147 25.4788 50.7361 20.4233 42.5457C17.1856 37.3073 19.1642 28.1048 29.5496 27.73V32.781C28.7296 32.9058 27.9219 33.1002 27.1355 33.362C24.835 34.1398 23.5191 35.583 23.8883 38.1413C24.5889 43.033 33.6584 44.4856 32.901 34.9176V17H37.9091H37.9281Z" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z" />
    </svg>
  );
}

function RedditIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M47.8,30.7c0-2.1-1.7-3.8-3.8-3.8c-0.9,0-1.7,0.3-2.4,0.9c-2.3-1.4-5.2-2.4-8.5-2.5l1.7-5.3 l4.6,1.1c0.1,1.6,1.5,3,3.2,3c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2c-1.2,0-2.3,0.7-2.8,1.7l-5.3-1.2c-0.4-0.1-0.9,0.1-1,0.6 l-2.1,6.5c-3.5,0.1-6.7,1-9.1,2.6c-0.7-0.5-1.5-0.9-2.4-0.9c-2.1,0-3.8,1.7-3.8,3.8c0,1.3,0.7,2.5,1.7,3.1c0,0.3-0.1,0.6-0.1,0.9 c0,5.3,6.4,9.6,14.2,9.6s14.2-4.3,14.2-9.6c0-0.3,0-0.6-0.1-0.9C47.2,33.2,47.8,32,47.8,30.7z M42.6,19.4c0.8,0,1.5,0.7,1.5,1.5 c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5C41.1,20,41.8,19.4,42.6,19.4z M17.8,30.7c0-1.2,0.9-2.1,2.1-2.1c0.3,0,0.6,0.1,0.9,0.2 c-1.1,0.9-2,2-2.5,3.2C18.1,31.7,17.8,31.2,17.8,30.7z M32,42.6c-6.9,0-12.5-3.5-12.5-7.9s5.6-7.9,12.5-7.9s12.5,3.5,12.5,7.9 S38.9,42.6,32,42.6z M45.6,32.1c-0.5-1.2-1.4-2.3-2.5-3.2c0.3-0.1,0.6-0.2,0.9-0.2c1.2,0,2.1,0.9,2.1,2.1 C46.2,31.2,45.9,31.7,45.6,32.1z M29.4,33.1c0-1.2-1-2.1-2.1-2.1s-2.1,1-2.1,2.1s1,2.2,2.1,2.2S29.4,34.2,29.4,33.1z M36.7,30.9 c-1.2,0-2.1,1-2.1,2.1s1,2.2,2.1,2.2c1.2,0,2.1-1,2.1-2.2S37.9,30.9,36.7,30.9z M36,38.2c-0.8,0.8-2.1,1.1-4,1.1 c-1.9,0-3.2-0.4-4-1.1c-0.3-0.3-0.9-0.3-1.2,0c-0.3,0.3-0.3,0.9,0,1.2c1.1,1.1,2.8,1.6,5.2,1.6c2.4,0,4.1-0.5,5.2-1.6 c0.3-0.3,0.3-0.9,0-1.2C36.9,37.8,36.3,37.8,36,38.2z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" />
    </svg>
  );
}

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/talkshopify", icon: InstagramIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@talkshopify", icon: TikTokIcon },
  { name: "YouTube", href: "https://www.youtube.com/@TalkShopify", icon: YouTubeIcon },
  { name: "Reddit", href: "https://www.reddit.com/r/talkshopify/", icon: RedditIcon },
  { name: "Discord", href: "https://discord.gg/talk-shop", icon: DiscordIcon },
  { name: "Facebook", href: "https://www.facebook.com/letstalkshopify", icon: FacebookIcon },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Community", href: "/community" },
  { label: "Growth", href: "/growth" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-midnight py-16">
      <div className="mx-auto max-w-7xl px-6">
        <StaggerContainer className="grid gap-12 text-center md:grid-cols-3 md:text-left" staggerDelay={0.1}>
          {/* Location */}
          <StaggerItem>
            <h4 className="mb-4 text-lg font-semibold text-white">Location</h4>
            <p className="text-gray-400">
              123 Mars, Crater City, Red Planet
            </p>
            <p className="mt-1 text-sm text-gray-600">(WiFi may be spotty)</p>
          </StaggerItem>

          {/* Hours */}
          <StaggerItem>
            <h4 className="mb-4 text-lg font-semibold text-white">Hours</h4>
            <p className="text-gray-400">
              Who has time for breaks? We&apos;re here 24/7!
            </p>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
            <p className="text-gray-400">
              <motion.a
                href="mailto:email@example.com"
                whileHover={{ color: "#ffffff" }}
                className="transition-colors"
              >
                email@example.com
              </motion.a>
            </p>
            <p className="text-gray-400">
              <motion.a
                href="tel:5555555555"
                whileHover={{ color: "#ffffff" }}
                className="transition-colors"
              >
                (555) 555-5555
              </motion.a>
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Social links */}
        <FadeUp className="mt-12">
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {socialLinks.map((social) => (
              <StaggerItem key={social.name}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-shopify/50 hover:bg-shopify/10"
                  aria-label={social.name}
                >
                  <social.icon className="h-7 w-7 text-gray-400 transition-colors group-hover:text-shopify" />
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 border-t border-white/5 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
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
            <p className="font-mono text-xs text-gray-600">
              Built for real builders. Not affiliated with Shopify Inc.
            </p>
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <motion.div key={link.label} whileHover={{ y: -2 }}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href} className="text-xs text-gray-500 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-xs text-gray-500 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
