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
              Talk Shop (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This privacy policy explains how we collect, use, and protect your information when you visit our website and participate in our Discord community.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
            <ul className="mt-4 list-disc pl-6 text-gray-300">
              <li>
                <strong>Information you provide:</strong> Name, email address, Discord username when you join our Discord or contact us
              </li>
              <li>
                <strong>Automatically collected:</strong> Basic usage data, IP address, browser type, device information, and cookies to improve our website
              </li>
              <li>
                <strong>From Discord:</strong> Your Discord profile information and activity in our server
              </li>
              <li>
                <strong>Tracking and analytics data:</strong> Information about your browsing behavior, pages visited, time spent on pages, clicks, and interactions with our website
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> We use cookies, pixels, and other tracking technologies to collect information about your use of our services
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
            <p className="mt-4 text-gray-300">We use your information to:</p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>Provide and improve our community services</li>
              <li>Communicate updates, events, and community matters</li>
              <li>Maintain community safety and enforce guidelines</li>
              <li>Analyze how our services are used and understand user behavior</li>
              <li>Deliver targeted advertising and marketing communications</li>
              <li>Create custom audiences for retargeting campaigns</li>
              <li>Measure the effectiveness of our marketing efforts</li>
              <li>Personalize your experience on our website</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">4. How We Share Your Information</h2>
            <p className="mt-4 text-gray-300">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>
                <strong>Discord:</strong> Our community operates on Discord&apos;s platform
              </li>
              <li>
                <strong>Advertising platforms:</strong> Such as Google Ads, Facebook Ads, and other advertising networks for retargeting and marketing purposes
              </li>
              <li>
                <strong>Analytics providers:</strong> Such as Google Analytics, Facebook Pixel, and similar services to track and analyze website usage
              </li>
              <li>
                <strong>Service providers:</strong> Who help us operate our services and marketing campaigns
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law or to protect our rights
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">5. Cookies and Tracking Technologies</h2>
            <p className="mt-4 text-gray-300">
              We use cookies, web beacons, pixels, and similar tracking technologies to:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our website</li>
              <li>Track your browsing behavior across sessions</li>
              <li>Deliver targeted advertising based on your interests</li>
              <li>Measure advertising campaign performance</li>
              <li>Create custom audiences for retargeting on other platforms</li>
              <li>Analyze website traffic and user engagement</li>
            </ul>
            <p className="mt-4 text-gray-300">
              <strong>Types of cookies and tracking we use:</strong>
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>
                <strong>Essential cookies:</strong> Required for website functionality
              </li>
              <li>
                <strong>Analytics cookies:</strong> Track website usage and performance (e.g., Google Analytics)
              </li>
              <li>
                <strong>Advertising cookies:</strong> Enable targeted ads and retargeting (e.g., Facebook Pixel, Google Ads)
              </li>
              <li>
                <strong>Social media cookies:</strong> Track interactions with social media features
              </li>
            </ul>
            <p className="mt-4 text-gray-300">
              <strong>Managing cookies:</strong> By using our website, you consent to our use of cookies and tracking technologies. You can control cookies through your browser settings, but disabling certain cookies may limit website functionality. Note that opting out of advertising cookies may not prevent all ads, but they will be less relevant to your interests.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">6. Third-Party Advertising and Retargeting</h2>
            <p className="mt-4 text-gray-300">
              We use third-party advertising services to show you relevant ads on other websites and platforms. These services may use cookies and similar technologies to:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>Track your visits to our website</li>
              <li>Create profiles based on your browsing behavior</li>
              <li>Display targeted advertisements on third-party platforms</li>
              <li>Measure ad performance and conversions</li>
            </ul>
            <p className="mt-4 text-gray-300">
              Third-party advertisers may combine information collected from our website with information from other sources to create more targeted advertising.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">7. Your Rights</h2>
            <p className="mt-4 text-gray-300">You can:</p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>Request access to your information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Opt-out of targeted advertising through browser settings or industry opt-out tools</li>
              <li>Control cookies through your browser settings</li>
            </ul>
            <p className="mt-4 text-gray-300">
              <strong>Opting out of targeted advertising:</strong>
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>
                <strong>Google Ads:</strong> Visit Google Ads Settings
              </li>
              <li>
                <strong>Facebook:</strong> Visit Facebook Ad Preferences
              </li>
              <li>
                <strong>NAI Opt-Out:</strong> Visit Network Advertising Initiative
              </li>
              <li>
                <strong>DAA Opt-Out:</strong> Visit Digital Advertising Alliance
              </li>
            </ul>
            <p className="mt-4 text-gray-300">
              To exercise these rights or for questions about your data, contact us at{" "}
              <a href="mailto:hello@letstalkshop.com" className="text-shopify-green hover:underline">
                hello@letstalkshop.com
              </a>.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">8. Data Security</h2>
            <p className="mt-4 text-gray-300">
              We use reasonable measures to protect your information, but no method is 100% secure.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">9. Children&apos;s Privacy</h2>
            <p className="mt-4 text-gray-300">
              Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">10. Third-Party Services</h2>
            <p className="mt-4 text-gray-300">
              Our community uses Discord. By using Discord, you&apos;re also subject to Discord&apos;s Privacy Policy. We&apos;re not responsible for Discord&apos;s privacy practices.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">11. Changes to This Policy</h2>
            <p className="mt-4 text-gray-300">
              We may update this policy from time to time. Continued use after changes means you accept the updated policy.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">12. Contact Us</h2>
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
