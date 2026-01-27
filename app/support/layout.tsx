import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merchant Support Group",
  description: "Get peer-based Shopify support from experienced merchants. Solve theme issues, app conflicts, checkout problems, and shipping configuration challenges.",
  openGraph: {
    title: "Shopify Support Group | Talk Shop",
    description: "Connect with Shopify merchants who understand your challenges. Get faster answers for theme issues, app conflicts, and store configuration problems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Support Group | Talk Shop",
    description: "Peer-based Shopify support from experienced merchants. Faster answers, real solutions.",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
