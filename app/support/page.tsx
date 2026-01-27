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

const commonProblems = [
  {
    emoji: "🎨",
    title: "Theme Issues",
    description: "Customization conflicts, layout bugs, and Liquid template problems",
  },
  {
    emoji: "📦",
    title: "App Conflicts",
    description: "App compatibility issues, script conflicts, and performance impacts",
  },
  {
    emoji: "💳",
    title: "Checkout & Payments",
    description: "Payment gateway errors, checkout flow issues, and currency problems",
  },
  {
    emoji: "🚚",
    title: "Shipping Rules",
    description: "Shipping rate configuration, zone setup, and carrier integration",
  },
  {
    emoji: "⚙️",
    title: "Store Configuration",
    description: "Settings conflicts, domain issues, and store setup challenges",
  },
  {
    emoji: "📊",
    title: "Analytics & Reports",
    description: "Data discrepancies, tracking issues, and report generation",
  },
];

const benefits = [
  {
    title: "Real Experience",
    description: "Merchants share what worked, what didn't, and what they'd do differently next time.",
  },
  {
    title: "Multiple Perspectives",
    description: "Get different approaches from various merchants and choose the solution that fits your store best.",
  },
  {
    title: "Practical Knowledge",
    description: "A knowledge base grounded in real-world experience that complements official documentation.",
  },
  {
    title: "Reduced Downtime",
    description: "Faster problem resolution helps merchants stay focused on growing their business.",
  },
];

export default function SupportPage() {
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
              Shopify Support Group
            </h1>

            {/* Description */}
            <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-text-secondary">
              Running a Shopify store comes with challenges, especially when something
              breaks or behaves unexpectedly. Connect with merchants who understand the
              platform from hands-on experience.
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
                Join the Support Group
              </a>

              {/* Social proof */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_0.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_1.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_2.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_0.png",
                    "/headshots/danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_3.png",
                  ].map((src, i) => (
                    <div key={i} className="relative h-12 w-12 rounded-full border-3 border-bg-primary overflow-hidden shadow-md">
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-text-secondary">
                  <span className="font-semibold text-text-primary">500+ merchants</span> helping each other
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="border-t border-border-subtle bg-gradient-to-b from-shopify/5 to-bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-shopify mb-4 block">
              Common Challenges
            </span>
            <p className="text-3xl font-bold text-text-primary lg:text-4xl mb-4">
              Common Shopify Problems Merchants Face
            </p>
            <p className="max-w-2xl text-text-secondary">
              These everyday challenges can have a direct impact on revenue and
              customer experience. Learn from merchants who have resolved them.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {commonProblems.map((problem) => (
              <StaggerItem key={problem.title}>
                <div className="group rounded-xl border-l-4 border-l-shopify border border-border-subtle bg-bg-primary p-6 transition-all hover:shadow-lg hover:shadow-shopify/5 hover:-translate-y-1 h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-shopify/10 text-2xl">
                    {problem.emoji}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {problem.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Peer Support Works Section */}
      <section className="border-t border-border-subtle py-24 bg-bg-primary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-shopify mb-4 block">
                Why It Works
              </span>
              <p className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
                Why Peer-Based Shopify Support Works
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Peer support works because it is grounded in real experience.
                Instead of relying solely on support tickets or searching through
                outdated forum posts, merchants connect with others who are actively
                running Shopify stores and solving similar problems.
              </p>

              <ul className="space-y-4">
                {[
                  { title: "Faster than support tickets", desc: "Get answers in real-time from active merchants" },
                  { title: "Battle-tested solutions", desc: "Learn what actually works from those who've tried it" },
                  { title: "No guesswork", desc: "Multiple perspectives help you choose the right approach" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="flex h-2 w-2 rounded-full bg-shopify shrink-0 mt-2" />
                    <div>
                      <div className="font-semibold text-text-primary">{item.title}</div>
                      <div className="text-sm text-text-secondary">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group rounded-xl border-l-4 border-l-shopify border border-border-subtle bg-bg-secondary p-6 transition-all hover:shadow-lg hover:shadow-shopify/5"
                  >
                    <h4 className="mb-1 font-semibold text-text-primary">{benefit.title}</h4>
                    <p className="text-sm text-text-secondary">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Faster Help Section */}
      <section className="border-t border-border-subtle bg-bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-shopify mb-4 block">
              Speed Matters
            </span>
            <p className="mb-4 text-3xl font-bold text-text-primary lg:text-4xl">
              Faster Help Without the Guesswork
            </p>
            <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
              When you ask a question in a live Shopify support community, you often
              receive multiple perspectives. This helps you evaluate different
              approaches and choose the solution that fits your store best.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              {[
                { title: "Reduce Downtime", description: "Get your store back on track faster" },
                { title: "Speed Up Resolution", description: "Multiple solutions means faster answers" },
                { title: "Stay Focused", description: "Spend more time growing your business" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border-l-4 border-l-shopify border border-border-subtle bg-bg-primary p-6 transition-all hover:shadow-lg hover:shadow-shopify/5 hover:-translate-y-1"
                >
                  <h4 className="mb-1 font-semibold text-text-primary">{item.title}</h4>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border-subtle bg-shopify py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Join the Shopify Support Group
            </h2>
            <p className="mb-8 text-lg text-white/80">
              If you want faster answers and practical guidance from other Shopify
              merchants, join our welcoming community to ask questions, share
              experiences, and build confidence running your store.
            </p>
            <a
              href="https://discord.gg/talk-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-semibold text-shopify shadow-lg transition-all hover:bg-gray-100 hover:-translate-y-0.5"
            >
              <DiscordIcon className="h-5 w-5" />
              Join the Community
            </a>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
