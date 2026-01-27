import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

function DiscordIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function YouTubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function RedditIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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

const topics = [
  {
    title: "App Architecture",
    description: "Discuss patterns, best practices, and scalable approaches for Shopify apps.",
  },
  {
    title: "API & Webhooks",
    description: "Work through API limitations, webhook handling, and data synchronization.",
  },
  {
    title: "Theme Development",
    description: "Share best practices for sections, templates, and performance improvements.",
  },
  {
    title: "Headless & Hydrogen",
    description: "Compare approaches to data fetching, caching, and storefront performance.",
  },
  {
    title: "Performance",
    description: "Optimize load times, API calls, and overall app and storefront performance.",
  },
  {
    title: "Billing & Business",
    description: "Navigate billing models, pricing strategies, and platform changes.",
  },
];

const audienceTags = [
  "App Developers",
  "Theme Developers",
  "API Engineers",
  "Hydrogen/Headless",
  "Checkout Extensions",
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-bg-primary font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="max-w-3xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-shopify/30 bg-shopify/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-shopify"></span>
              <span className="text-sm font-medium text-shopify">
                Developer Community
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Built for Real Builders
            </h1>

            {/* Description */}
            <p className="mb-10 text-lg leading-relaxed text-text-secondary lg:text-xl">
              The Shopify Dev Community is built for developers who are actively
              building, shipping, and maintaining products on Shopify. Whether
              you&apos;re working on a public app, a custom theme, or a headless
              storefront using Hydrogen, this community exists to support the real
              work that happens between documentation and production.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <a
                href="https://discord.gg/talk-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-shopify px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-shopify-dark"
              >
                <DiscordIcon className="h-5 w-5" />
                Join the Community
              </a>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">500+ devs</span>
                <span>shipping on Shopify</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-t border-border-subtle bg-bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-shopify">
                The Problem
              </h2>
              <div className="h-1 w-16 rounded-full bg-shopify"></div>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-8">
              <p className="text-xl leading-relaxed text-text-secondary lg:text-2xl">
                Many Shopify developers struggle to find a place where technical
                conversations can happen naturally. Forums tend to be slow,
                fragmented, and overly generic. This community fills that gap by
                creating a space where Shopify developers can talk through real
                problems, share implementation details, and learn from others
                building at the same level.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="border-t border-border-subtle py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-shopify">
                Who It&apos;s For
              </h2>
              <p className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
                Who This Community Is For
              </p>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  This community is designed for Shopify app developers, theme
                  developers, and engineers working with Shopify APIs. It also
                  welcomes developers building headless Shopify storefronts,
                  experimenting with Hydrogen, or extending checkout and admin
                  functionality.
                </p>
                <p>
                  If you spend your time writing code, debugging issues,
                  reviewing pull requests, or thinking about architecture
                  decisions on Shopify, this community is designed for you.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {audienceTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border-subtle bg-bg-secondary px-4 py-2 text-sm text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-xl border border-border-subtle bg-bg-secondary p-8">
                <h3 className="mb-6 text-lg font-semibold text-text-primary">
                  Quick Stats
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Active developers", value: "500+" },
                    { label: "Community active", value: "24/7" },
                    { label: "Topics covered", value: "6+" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between border-b border-border-subtle pb-4 last:border-0 last:pb-0">
                      <span className="text-text-secondary">{stat.label}</span>
                      <span className="text-xl font-semibold text-shopify">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="border-t border-border-subtle bg-bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-16">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-shopify">
              Inside the Community
            </h2>
            <p className="text-3xl font-bold text-text-primary lg:text-4xl">
              What Developers Discuss
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {topics.map((topic) => (
              <StaggerItem key={topic.title}>
                <div className="rounded-xl border border-border-subtle bg-bg-primary p-6 transition-colors hover:border-border-default h-full">
                  <h3 className="mb-3 text-lg font-semibold text-text-primary">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <p className="text-text-tertiary">
              These are practical conversations driven by real-world projects.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Real-Time Section */}
      <section className="border-t border-border-subtle py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-shopify">
                Why Real-Time
              </h2>
              <p className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
                Why Real-Time Matters
              </p>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Development work often requires quick feedback and iteration.
                  Waiting days for a forum response can slow down progress and
                  introduce unnecessary friction. A real-time Shopify developer
                  community allows builders to ask questions when they are
                  blocked and get answers from others who have already solved
                  similar problems.
                </p>
                <p>
                  This kind of collaboration helps developers move faster, avoid
                  common mistakes, and build better products on Shopify.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid gap-4">
                {[
                  { title: "Fast", description: "Real-time answers when you're blocked" },
                  { title: "Real", description: "Production problems, not theoretical" },
                  { title: "Peer", description: "Developer to developer expertise" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border-subtle bg-bg-secondary p-6"
                  >
                    <h4 className="mb-1 font-semibold text-text-primary">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border-subtle bg-shopify py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Join the Shopify Dev Community
            </h2>
            <p className="mb-6 text-lg text-white/80">
              If you are building on Shopify and want to learn alongside other
              developers, the Shopify Dev Community provides a collaborative
              environment focused on practical problem-solving and shared
              learning.
            </p>
            <p className="mb-8 text-white/70">
              Connect with other Shopify developers, share knowledge, and improve
              how you build on the platform.
            </p>
            <a
              href="https://discord.gg/talk-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-8 py-4 text-base font-semibold text-shopify transition-colors hover:bg-gray-100"
            >
              <DiscordIcon className="h-5 w-5" />
              Join Discord Community
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-bg-primary py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Contact Info */}
          <div className="mb-12 grid gap-8 text-center md:grid-cols-3 md:text-left">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-text-primary">Location</h4>
              <p className="text-sm text-text-secondary">
                123 Mars, Crater City, Red Planet
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-text-primary">Hours</h4>
              <p className="text-sm text-text-secondary">
                24/7 — We never sleep
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-text-primary">Contact</h4>
              <p className="text-sm text-text-secondary">
                <a href="mailto:email@example.com" className="hover:text-text-primary">
                  email@example.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <FadeIn className="mb-12 border-t border-border-subtle pt-12 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-text-secondary transition-colors hover:border-shopify/50 hover:text-shopify"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image
                  src="/logo.webp"
                  alt="Talk Shop"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-text-secondary">Talk Shop</span>
            </div>
            <p className="text-xs text-text-tertiary">
              Not affiliated with Shopify Inc.
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-xs text-text-tertiary hover:text-text-primary">
                Home
              </Link>
              <Link href="/community" className="text-xs text-text-tertiary hover:text-text-primary">
                Community
              </Link>
              <a href="#" className="text-xs text-text-tertiary hover:text-text-primary">
                Privacy
              </a>
              <a href="#" className="text-xs text-text-tertiary hover:text-text-primary">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
