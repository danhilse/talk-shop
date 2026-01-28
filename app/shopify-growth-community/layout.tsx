import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Growth Community for CRO, Ads & Retention",
  description:
    "Join a Shopify growth community focused on CRO, paid ads, retention, and revenue. Learn what's working now from merchants actively scaling stores.",
  keywords: [
    "Shopify growth community",
    "Shopify growth",
    "ecommerce growth",
    "Shopify CRO",
    "conversion rate optimization",
    "Shopify marketing",
    "paid advertising Shopify",
    "email marketing ecommerce",
    "Shopify analytics",
    "scaling Shopify store",
  ],
  openGraph: {
    title: "Shopify Growth Community for CRO, Ads & Retention | Talk Shop",
    description:
      "Join a Shopify growth community focused on CRO, paid ads, retention, and revenue. Learn what's working now from merchants actively scaling stores.",
    url: "https://letstalkshop.com/shopify-growth-community",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Growth Community for CRO, Ads & Retention | Talk Shop",
    description:
      "Join a Shopify growth community focused on CRO, paid ads, retention, and revenue. Learn what's working now from merchants actively scaling stores.",
  },
  alternates: {
    canonical: "https://letstalkshop.com/shopify-growth-community",
  },
};

export default function GrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
