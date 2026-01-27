import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experts Network",
  description: "Connect with the Shopify Experts Network. Learn from experienced developers, marketers, designers, and merchants who have spent years building on Shopify.",
  openGraph: {
    title: "Shopify Experts Network | Talk Shop",
    description: "A community of experienced Shopify professionals. Get strategic guidance, honest feedback, and proven strategies from developers, marketers, and merchants.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Experts Network | Talk Shop",
    description: "Connect with experienced Shopify professionals. Real-world feedback and proven strategies.",
  },
};

export default function ExpertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
