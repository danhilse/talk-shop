import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Dev Community for App, Theme & API Builders",
  description:
    "Join a Shopify dev community for app builders, theme developers, and engineers. Get real-time help, share code, and solve Shopify challenges together.",
  keywords: [
    "Shopify dev community",
    "Shopify developers",
    "Shopify Discord",
    "Shopify app development",
    "Shopify theme development",
    "Hydrogen Shopify",
    "headless Shopify",
    "Shopify API",
    "Shopify webhooks",
    "Liquid templates",
  ],
  openGraph: {
    title: "Shopify Dev Community for App, Theme & API Builders | Talk Shop",
    description:
      "Join a Shopify dev community for app builders, theme developers, and engineers. Get real-time help, share code, and solve Shopify challenges together.",
    url: "https://letstalkshop.com/shopify-dev-community",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Dev Community for App, Theme & API Builders | Talk Shop",
    description:
      "Join a Shopify dev community for app builders, theme developers, and engineers. Get real-time help, share code, and solve Shopify challenges together.",
  },
  alternates: {
    canonical: "https://letstalkshop.com/shopify-dev-community",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
