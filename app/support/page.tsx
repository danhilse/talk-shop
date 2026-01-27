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
    title: "Theme Issues",
    description: "Customization conflicts, layout bugs, and Liquid template problems",
  },
  {
    title: "App Conflicts",
    description: "App compatibility issues, script conflicts, and performance impacts",
  },
  {
    title: "Checkout & Payments",
    description: "Payment gateway errors, checkout flow issues, and currency problems",
  },
  {
    title: "Shipping Rules",
    description: "Shipping rate configuration, zone setup, and carrier integration",
  },
  {
    title: "Store Configuration",
    description: "Settings conflicts, domain issues, and store setup challenges",
  },
  {
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
      <section className="relative pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors"
              >
                <span>←</span>
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-shopify/30 bg-shopify/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-shopify"></span>
              <span className="text-sm font-medium text-shopify">
                Support Group
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Shopify Support Group
            </h1>
            <p className="mb-6 text-xl text-text-secondary">
              For merchants who need real answers
            </p>

            {/* Description */}
            <p className="mb-10 text-lg leading-relaxed text-text-secondary">
              Running a Shopify store comes with challenges, especially when something
              breaks or behaves unexpectedly. Connect with merchants who understand the
              platform from hands-on experience.
            </p>

            {/* CTA */}
            <a
              href="https://discord.gg/talk-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-shopify px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-shopify-dark"
            >
              <DiscordIcon className="h-5 w-5" />
              Join the Support Group
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="border-t border-border-subtle bg-bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-16">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-shopify">
              Common Challenges
            </h2>
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
                <div className="rounded-xl border border-border-subtle bg-bg-primary p-6 transition-colors hover:border-border-default h-full">
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
      <section className="border-t border-border-subtle py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-shopify">
                Why It Works
              </h2>
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
                    <svg className="h-5 w-5 text-shopify shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
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
                    className="rounded-xl border border-border-subtle bg-bg-secondary p-6"
                  >
                    <h4 className="mb-2 font-semibold text-text-primary">{benefit.title}</h4>
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
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-shopify">
              Speed Matters
            </h2>
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
                  className="rounded-xl border border-border-subtle bg-bg-primary p-6"
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
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-8 py-4 text-base font-semibold text-shopify transition-colors hover:bg-gray-100"
            >
              <DiscordIcon className="h-5 w-5" />
              Join the Community
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-bg-primary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
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
