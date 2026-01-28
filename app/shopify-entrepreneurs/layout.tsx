import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Entrepreneurs Community for Founders",
  description:
    "Join a Shopify entrepreneurs community for founders building, launching, and scaling ecommerce businesses with support from other operators.",
  keywords: [
    "Shopify entrepreneurs",
    "Shopify founders",
    "ecommerce entrepreneurs",
    "Shopify business",
    "solo founders",
    "Shopify startup",
    "ecommerce founder community",
    "Shopify store owner",
    "DTC founders",
    "ecommerce business",
  ],
  openGraph: {
    title: "Shopify Entrepreneurs Community for Founders | Talk Shop",
    description:
      "Join a Shopify entrepreneurs community for founders building, launching, and scaling ecommerce businesses with support from other operators.",
    url: "https://letstalkshop.com/shopify-entrepreneurs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Entrepreneurs Community for Founders | Talk Shop",
    description:
      "Join a Shopify entrepreneurs community for founders building, launching, and scaling ecommerce businesses with support from other operators.",
  },
  alternates: {
    canonical: "https://letstalkshop.com/shopify-entrepreneurs",
  },
};

export default function EntrepreneursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
