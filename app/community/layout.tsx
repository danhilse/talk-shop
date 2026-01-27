import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Community",
  description: "Join the Shopify Dev Community on Discord. Connect with app developers, theme builders, and engineers working with Shopify APIs, Hydrogen, and headless storefronts.",
  openGraph: {
    title: "Shopify Developer Community | Talk Shop",
    description: "A Discord community built for real Shopify developers. Discuss app architecture, APIs, webhooks, theme development, and Hydrogen with 500+ devs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Developer Community | Talk Shop",
    description: "Join 500+ Shopify developers on Discord. Real-time help for app development, theme building, and headless commerce.",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
