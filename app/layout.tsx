import type { Metadata } from "next";
import { Geist_Mono, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Talk Shop - Shopify Discord Community",
    template: "%s | Talk Shop",
  },
  description: "Join the Shopify Discord community for developers, merchants, and experts. Get real-time help, share insights, and connect with members building on Shopify.",
  keywords: ["Shopify", "Discord", "community", "developers", "merchants", "ecommerce", "Shopify apps", "Shopify themes", "Hydrogen", "headless commerce"],
  authors: [{ name: "Talk Shop Community" }],
  creator: "Talk Shop",
  publisher: "Talk Shop",
  metadataBase: new URL("https://letstalkshop.com"),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Talk Shop",
    title: "Talk Shop - Shopify Discord Community",
    description: "Join the Shopify Discord community for developers, merchants, and experts. Get real-time help, share insights, and connect with members building on Shopify.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Talk Shop - Shopify Discord Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talk Shop - Shopify Discord Community",
    description: "Join the Shopify Discord community for developers, merchants, and experts. Get real-time help, share insights, and connect with members building on Shopify.",
    images: ["/opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
