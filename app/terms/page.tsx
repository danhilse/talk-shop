import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Talk Shop",
  description: "Terms of service for the Talk Shop community.",
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
              By accessing and using Talk Shop&apos;s website and Discord community, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">2. Community Guidelines</h2>
            <p className="mt-4 text-gray-300">
              As a member of Talk Shop, you agree to treat all community members with respect, refrain from spam, self-promotion without permission, or any harmful behavior. We reserve the right to remove members who violate these guidelines.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">3. Intellectual Property</h2>
            <p className="mt-4 text-gray-300">
              All content on this website, including text, graphics, logos, and images, is the property of Talk Shop or its content creators. You may not reproduce, distribute, or create derivative works without permission.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">4. Disclaimer</h2>
            <p className="mt-4 text-gray-300">
              Talk Shop is an independent community and is not affiliated with, endorsed by, or sponsored by Shopify Inc. The advice and information shared in our community are for educational purposes only and should not be considered professional business or legal advice.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">5. Limitation of Liability</h2>
            <p className="mt-4 text-gray-300">
              Talk Shop and its moderators are not liable for any damages arising from your use of our website or community. We provide our services &quot;as is&quot; without any warranties.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white">6. Changes to Terms</h2>
            <p className="mt-4 text-gray-300">
              We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
