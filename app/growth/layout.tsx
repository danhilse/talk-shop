import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Community",
  description: "Join the Shopify Growth Community focused on real results. Learn CRO, paid advertising, email marketing, and data-driven strategies from merchants scaling their stores.",
  openGraph: {
    title: "Shopify Growth Community | Talk Shop",
    description: "A community for Shopify merchants serious about growth. Discuss conversion optimization, paid ads, email marketing, and scaling strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Growth Community | Talk Shop",
    description: "Learn proven growth strategies from Shopify merchants. CRO, paid ads, email marketing, and more.",
  },
};

export default function GrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
