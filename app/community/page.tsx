import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

function DiscordIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const topics = [
  {
    emoji: "🏗️",
    title: "App Architecture",
    description: "Discuss patterns, best practices, and scalable approaches for Shopify apps.",
  },
  {
    emoji: "🔌",
    title: "API & Webhooks",
    description: "Work through API limitations, webhook handling, and data synchronization.",
  },
  {
    emoji: "🎨",
    title: "Theme Development",
    description: "Share best practices for sections, templates, and performance improvements.",
  },
  {
    emoji: "⚡",
    title: "Headless & Hydrogen",
    description: "Compare approaches to data fetching, caching, and storefront performance.",
  },
  {
    emoji: "📊",
    title: "Performance",
    description: "Optimize load times, API calls, and overall app and storefront performance.",
  },
  {
    emoji: "💰",
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

const stats = [
  { value: "500+", label: "Active Developers" },
  { value: "24/7", label: "Community Active" },
  { value: "6+", label: "Topics Covered" },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-bg-primary font-sans">
      {/* Hero Section */}
      <section className="relative pt-56 pb-32 overflow-hidden bg-gradient-to-b from-shopify/5 via-transparent to-transparent">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-shopify/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-shopify/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            {/* Heading */}
            <h1 className="mb-8 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Built for Real Builders
            </h1>

            {/* Description */}
            <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-text-secondary">
              The Shopify Dev Community is built for developers who are actively
              building, shipping, and maintaining products on Shopify. Whether
              you&apos;re working on a public app, a custom theme, or a headless
              storefront using Hydrogen, this community exists to support the real
              work that happens between documentation and production.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center gap-8">
              <a
                href="https://discord.gg/talk-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-shopify px-8 py-4 text-base font-semibold text-white shadow-lg shadow-shopify/25 transition-all hover:bg-shopify-dark hover:shadow-xl hover:shadow-shopify/30 hover:-translate-y-0.5"
              >
                <DiscordIcon className="h-5 w-5" />
                Join the Community
              </a>

              {/* Social proof */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_0.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_1.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_2.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_1.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_3.png",
                  ].map((src, i) => (
                    <div key={i} className="relative h-12 w-12 rounded-full border-3 border-bg-primary overflow-hidden shadow-md">
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-text-secondary">
                  <span className="font-semibold text-text-primary">500+ devs</span> shipping on Shopify
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-t border-border-subtle bg-gradient-to-b from-shopify/5 to-bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-shopify mb-4 block">
                The Problem
              </span>
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

      {/* Stats Section */}
      <section className="border-t border-border-subtle py-16 bg-bg-primary">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-shopify lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="border-t border-border-subtle py-24 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-shopify mb-4 block">
                Who It&apos;s For
              </span>
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
                    className="rounded-full border border-shopify/20 bg-shopify/5 px-4 py-2 text-sm text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-border-subtle bg-bg-primary p-8 shadow-xl shadow-black/5">
                <h3 className="text-lg font-semibold text-text-primary mb-6">Developer Testimonial</h3>
                <blockquote className="text-text-secondary italic mb-6">
                  &ldquo;Finally, a place where I can discuss Shopify API edge cases with people who actually understand the platform. This community has saved me countless hours.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-shopify/20 flex items-center justify-center text-sm font-semibold text-shopify">
                    CD
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Community Developer</div>
                    <div className="text-sm text-text-tertiary">Shopify App Builder</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="border-t border-border-subtle bg-gradient-to-b from-shopify/5 to-bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-shopify mb-4 block">
              Inside the Community
            </span>
            <p className="text-3xl font-bold text-text-primary lg:text-4xl">
              What Developers Discuss
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {topics.map((topic) => (
              <StaggerItem key={topic.title}>
                <div className="group rounded-xl border-l-4 border-l-shopify border border-border-subtle bg-bg-primary p-6 transition-all hover:shadow-lg hover:shadow-shopify/5 hover:-translate-y-1 h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-shopify/10 text-2xl">
                    {topic.emoji}
                  </div>
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
      <section className="border-t border-border-subtle py-24 bg-bg-primary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-shopify mb-4 block">
                Why Real-Time
              </span>
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
                    className="group rounded-xl border-l-4 border-l-shopify border border-border-subtle bg-bg-secondary p-6 transition-all hover:shadow-lg hover:shadow-shopify/5"
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
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-semibold text-shopify shadow-lg transition-all hover:bg-gray-100 hover:-translate-y-0.5"
            >
              <DiscordIcon className="h-5 w-5" />
              Join Discord Community
            </a>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
