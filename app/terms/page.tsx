import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for the Talk Shop Shopify Discord community. Community guidelines, intellectual property, and usage terms.",
  openGraph: {
    title: "Terms of Service | Talk Shop",
    description: "Terms of service for the Talk Shop Shopify Discord community.",
    url: "https://talkshop.community/terms",
    type: "website",
  },
  alternates: {
    canonical: "https://talkshop.community/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-midnight px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-white">Terms of Service</h1>

        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-gray-400">Last updated: January 2025</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p className="mt-4 text-gray-300">
              By accessing Talk Shop&apos;s website and Discord community, you agree to these Terms of Service and our Privacy Policy, including our use of cookies and tracking technologies for analytics, advertising, and retargeting purposes. If you don&apos;t agree, please don&apos;t use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">2. Eligibility</h2>
            <p className="mt-4 text-gray-300">
              You must be at least 13 years old to use our services. If you&apos;re under 18, you need parental consent.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">3. Community Guidelines</h2>
            <p className="mt-4 text-gray-300">As a member, you agree to:</p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>Treat all members with respect</li>
              <li>No spam, excessive self-promotion, or harassment</li>
              <li>No harmful, illegal, or fraudulent activity</li>
              <li>Follow Discord&apos;s Terms of Service</li>
            </ul>
            <p className="mt-4 text-gray-300">
              We can remove members who violate these guidelines without notice.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">4. Your Content</h2>
            <p className="mt-4 text-gray-300">
              You keep ownership of content you post, but you give us permission to use it to operate our community. You&apos;re responsible for your content and must have the right to post it.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">5. Cookies, Tracking, and Data Collection</h2>
            <p className="mt-4 text-gray-300">
              By using our services, you consent to our use of cookies, pixels, web beacons, and other tracking technologies. We use these technologies to:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>Analyze website usage and user behavior</li>
              <li>Deliver targeted advertising and marketing</li>
              <li>Create retargeting audiences on third-party platforms</li>
              <li>Measure advertising effectiveness</li>
              <li>Personalize your experience</li>
            </ul>
            <p className="mt-4 text-gray-300">
              We may share your browsing data with third-party advertising platforms (such as Google Ads, Facebook Ads) for retargeting and analytics purposes. For more details, see our Privacy Policy.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">6. Our Content</h2>
            <p className="mt-4 text-gray-300">
              All website content (text, graphics, logos, images) belongs to Talk Shop or our content creators. You can&apos;t reproduce, distribute, or create derivative works without permission.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">7. Disclaimer</h2>
            <p className="mt-4 text-gray-300">Important:</p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>Talk Shop is not affiliated with, endorsed by, or sponsored by Shopify Inc.</li>
              <li>Information shared is for educational purposes only</li>
              <li>This is not professional business, legal, or financial advice</li>
              <li>We provide services &quot;as is&quot; without warranties</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">8. Limitation of Liability</h2>
            <p className="mt-4 text-gray-300">
              To the maximum extent permitted by law, Talk Shop and its moderators are not liable for any damages from your use of our services, including lost profits, data loss, or any indirect damages.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">9. Termination</h2>
            <p className="mt-4 text-gray-300">
              We can suspend or terminate your access at any time for violating these terms or for any other reason.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">10. Governing Law</h2>
            <p className="mt-4 text-gray-300">
              These terms are governed by the laws of the United States. Any disputes will be resolved in United States courts.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">11. Changes to Terms</h2>
            <p className="mt-4 text-gray-300">
              We may update these terms anytime. Continued use after changes means you accept them. We&apos;ll post updates with a new &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">12. Contact</h2>
            <p className="mt-4 text-gray-300">
              Questions? Contact us at{" "}
              <a href="mailto:hello@letstalkshop.com" className="text-shopify-green hover:underline">
                hello@letstalkshop.com
              </a>{" "}
              or through our Discord server.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
