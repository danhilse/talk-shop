import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Support Group for Merchants & Store Owners",
  description:
    "Join a Shopify support group for merchants who need help fast. Get answers from experienced store owners and fix issues without waiting on support tickets.",
  keywords: [
    "Shopify support group",
    "Shopify support",
    "Shopify help",
    "Shopify merchant community",
    "Shopify theme issues",
    "Shopify app conflicts",
    "Shopify checkout problems",
    "Shopify troubleshooting",
    "Shopify Discord support",
    "Shopify store issues",
  ],
  openGraph: {
    title: "Shopify Support Group for Merchants & Store Owners | Talk Shop",
    description:
      "Join a Shopify support group for merchants who need help fast. Get answers from experienced store owners and fix issues without waiting on support tickets.",
    url: "https://letstalkshop.com/shopify-support-group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Support Group for Merchants & Store Owners | Talk Shop",
    description:
      "Join a Shopify support group for merchants who need help fast. Get answers from experienced store owners and fix issues without waiting on support tickets.",
  },
  alternates: {
    canonical: "https://letstalkshop.com/shopify-support-group",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
