import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Experts Network for Peer Feedback & Guidance",
  description:
    "Connect with a Shopify experts network focused on real feedback and experience. Learn from builders and operators—no pitching, just practical guidance.",
  keywords: [
    "Shopify experts network",
    "Shopify experts",
    "Shopify professionals",
    "Shopify consultants",
    "Shopify developers",
    "Shopify marketers",
    "Shopify designers",
    "ecommerce experts",
    "Shopify partner",
    "Shopify mentorship",
  ],
  openGraph: {
    title: "Shopify Experts Network for Peer Feedback & Guidance | Talk Shop",
    description:
      "Connect with a Shopify experts network focused on real feedback and experience. Learn from builders and operators—no pitching, just practical guidance.",
    url: "https://letstalkshop.com/shopify-experts-network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Experts Network for Peer Feedback & Guidance | Talk Shop",
    description:
      "Connect with a Shopify experts network focused on real feedback and experience. Learn from builders and operators—no pitching, just practical guidance.",
  },
  alternates: {
    canonical: "https://letstalkshop.com/shopify-experts-network",
  },
};

export default function ExpertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
