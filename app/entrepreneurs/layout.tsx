import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrepreneurs Community",
  description: "Join the Shopify Entrepreneurs community for founders building sustainable businesses. Connect with solo founders and small teams for support, accountability, and shared learning.",
  openGraph: {
    title: "Shopify Entrepreneurs | Talk Shop",
    description: "A community for Shopify founders. From launch to scale, connect with entrepreneurs building sustainable ecommerce businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Entrepreneurs | Talk Shop",
    description: "Connect with Shopify founders. Support, accountability, and shared learning for sustainable growth.",
  },
};

export default function EntrepreneursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
