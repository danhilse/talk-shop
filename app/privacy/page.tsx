import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Talk Shop Shopify Discord community. Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy | Talk Shop",
    description:
      "Privacy policy for the Talk Shop Shopify Discord community.",
    url: "https://talkshop.community/privacy",
    type: "website",
  },
  alternates: {
    canonical: "https://talkshop.community/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-midnight px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-white">Privacy Policy</h1>

        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-gray-400">Last updated: January 2025</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p className="mt-4 text-gray-300">
              Talk Shop (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website and participate in our Discord community.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
            <p className="mt-4 text-gray-300">
              We may collect information you provide directly to us, such as when you join our Discord server, subscribe to our newsletter, or contact us. This may include your name, email address, and Discord username.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
            <p className="mt-4 text-gray-300">
              We use the information we collect to provide and improve our community services, communicate with you about updates and events, and ensure the safety and integrity of our community.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">4. Third-Party Services</h2>
            <p className="mt-4 text-gray-300">
              Our community operates primarily through Discord. When you use Discord, you are also subject to Discord&apos;s Privacy Policy. We recommend reviewing their policies at discord.com/privacy.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">5. Contact Us</h2>
            <p className="mt-4 text-gray-300">
              If you have any questions about this Privacy Policy, please reach out to us through our Discord server or social media channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
