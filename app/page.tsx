import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

function DiscordIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const features = [
  {
    emoji: "🤝",
    title: "Shopify Collective",
    description: "Connect with Shopify builders, eComm architects, and digital nomads for insights on online business.",
  },
  {
    emoji: "💡",
    title: "Share Knowledge",
    description: "Share ideas and see them transformed by collective knowledge from experienced merchants and developers.",
  },
  {
    emoji: "🚀",
    title: "Stay Current",
    description: "Shopify evolves constantly. Stay ahead with strategy, tech updates, and growth discussions.",
  },
  {
    emoji: "📈",
    title: "Scale Your Store",
    description: "From first sale to enterprise. Learn what works at every stage and unlock growth strategies.",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Members" },
  { value: "24/7", label: "Active Community" },
];

export default function Home() {
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
              The Shopify Discord Server
            </h1>

            {/* Description */}
            <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-text-secondary">
              Connect with merchants, experts, and eCommerce pros to share insights,
              solve problems, and level up your store. Whether you&apos;re just starting
              or scaling to the moon—we&apos;re here as a community to help.
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
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_0.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_1.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_2.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_0.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_3.png",
                  ].map((src, i) => (
                    <div key={i} className="relative h-12 w-12 rounded-full border-3 border-bg-primary overflow-hidden shadow-md">
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-text-secondary">
                  <span className="font-semibold text-text-primary">500+ members</span> already joined
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border-subtle bg-gradient-to-b from-shopify/5 to-bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-shopify mb-4 block">
              Why Join Us
            </span>
            <p className="text-3xl font-bold text-text-primary lg:text-4xl">
              A community built for Shopify builders
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2" staggerDelay={0.1}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group rounded-xl border-l-4 border-l-shopify border border-border-subtle bg-bg-primary p-8 transition-all hover:shadow-lg hover:shadow-shopify/5 hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-shopify/10 text-2xl">
                    {feature.emoji}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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

      {/* Experience Section */}
      <section className="border-t border-border-subtle py-24 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-shopify mb-4 block">
                Our Experience
              </span>
              <p className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
                20 years in eCommerce
              </p>
              <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                We&apos;ve witnessed it all—platform changes, Shopify updates, trends
                shifting, and strategies rising and falling. This is battle-tested
                insight from years in the trenches. Join us to stay ahead.
              </p>

              <ul className="space-y-4">
                {[
                  "Two decades of eCommerce evolution",
                  "Staying ahead of platform changes",
                  "Real insights from real builders",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-3 text-text-secondary">
                    <span className="flex h-2 w-2 rounded-full bg-shopify shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-border-subtle bg-bg-primary p-8 shadow-xl shadow-black/5">
                <h3 className="text-lg font-semibold text-text-primary mb-6">What members say</h3>
                <blockquote className="text-text-secondary italic mb-6">
                  &ldquo;This community has been invaluable for my Shopify journey. Real advice from people who actually run stores.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-shopify/20 flex items-center justify-center text-sm font-semibold text-shopify">
                    CM
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Community Member</div>
                    <div className="text-sm text-text-tertiary">Shopify Plus Merchant</div>
                  </div>
                </div>
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
              Join our Shopify Discord
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Free to join. A community built to test, learn, and grow together.
            </p>
            <a
              href="https://discord.gg/talk-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-semibold text-shopify shadow-lg transition-all hover:bg-gray-100 hover:-translate-y-0.5"
            >
              <DiscordIcon className="h-5 w-5" />
              Join Discord
            </a>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
