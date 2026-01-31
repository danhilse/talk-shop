import type { Metadata, Viewport } from "next";
import { Geist_Mono, DM_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const GTM_ID = "GTM-5L3JGJQ2";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
  metadataBase: new URL("https://www.letstalkshop.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
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
        url: "/opengraph.jpg",
        width: 1120,
        height: 630,
        alt: "Talk Shop - Shopify Discord Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talk Shop - Shopify Discord Community",
    description: "Join the Shopify Discord community for developers, merchants, and experts. Get real-time help, share insights, and connect with members building on Shopify.",
    images: ["/opengraph.jpg"],
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Structured data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Talk Shop",
  url: "https://www.letstalkshop.com",
  logo: "https://www.letstalkshop.com/logo.webp",
  description: "The Shopify Discord community for developers, merchants, and experts.",
  sameAs: ["https://discord.gg/talk-shop"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Talk Shop",
  url: "https://www.letstalkshop.com",
  description: "Join the Shopify Discord community for developers, merchants, and experts. Get real-time help, share insights, and connect with members building on Shopify.",
  publisher: {
    "@type": "Organization",
    name: "Talk Shop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Klaro CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.kiprotect.com/klaro/v0.7/klaro.min.css"
        />
        {/* Consent Mode v2 defaults - MUST load before GTM */}
        <Script
          id="consent-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
              gtag('set', 'url_passthrough', true);
              gtag('set', 'ads_data_redaction', true);
            `,
          }}
        />
        {/* Klaro config - MUST be before Klaro script */}
        <Script
          id="klaro-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var klaroConfig = {
                elementID: 'klaro',
                storageMethod: 'localStorage',
                storageName: 'klaro-consent',
                cookieName: 'klaro-consent',
                cookieExpiresAfterDays: 365,
                htmlTexts: true,
                embedded: false,
                groupByPurpose: true,
                mustConsent: false,
                acceptAll: true,
                hideDeclineAll: false,
                noticeAsModal: false,

                translations: {
                  en: {
                    consentModal: {
                      title: 'Privacy preferences',
                      description: 'We use cookies and similar technologies to enhance your experience, analyze traffic, and personalize content.'
                    },
                    consentNotice: {
                      description: 'We use cookies to improve your experience and analyze site traffic. {privacyPolicy}',
                      learnMore: 'Manage preferences'
                    },
                    privacyPolicy: {
                      text: 'Privacy Policy',
                      name: 'privacy policy'
                    },
                    purposes: {
                      analytics: {
                        title: 'Analytics',
                        description: 'Help us understand how visitors interact with our website.'
                      },
                      advertising: {
                        title: 'Advertising',
                        description: 'Enable personalized ads and measure campaign performance.'
                      }
                    },
                    acceptAll: 'Accept all',
                    acceptSelected: 'Accept selected',
                    decline: 'Essential only',
                    ok: 'Accept',
                    save: 'Save'
                  }
                },

                privacyPolicy: '/privacy',

                services: [
                  {
                    name: 'google-analytics',
                    title: 'Google Analytics',
                    purposes: ['analytics'],
                    cookies: [/^_ga/, /^_gid/, /^_gat/],
                    callback: function(consent, service) {
                      if (typeof gtag === 'function') {
                        gtag('consent', 'update', {
                          'analytics_storage': consent ? 'granted' : 'denied'
                        });
                      }
                    }
                  },
                  {
                    name: 'google-ads',
                    title: 'Google Ads & Facebook Pixel',
                    purposes: ['advertising'],
                    callback: function(consent, service) {
                      if (typeof gtag === 'function') {
                        gtag('consent', 'update', {
                          'ad_storage': consent ? 'granted' : 'denied',
                          'ad_user_data': consent ? 'granted' : 'denied',
                          'ad_personalization': consent ? 'granted' : 'denied'
                        });
                      }
                    }
                  }
                ]
              };
            `,
          }}
        />
        {/* Klaro script */}
        <Script
          id="klaro-script"
          strategy="afterInteractive"
          src="https://cdn.kiprotect.com/klaro/v0.7/klaro.js"
        />
        {/* Check saved Klaro consent and update GTM consent state */}
        <Script
          id="consent-restore"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('klaro-consent');
                  if (saved) {
                    var decoded = decodeURIComponent(saved);
                    var consent = JSON.parse(decoded);
                    if (consent['google-analytics']) {
                      gtag('consent', 'update', { 'analytics_storage': 'granted' });
                    }
                    if (consent['google-ads']) {
                      gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                      });
                    }
                  }
                } catch(e) { console.log('Consent restore error:', e); }
              })();
            `,
          }}
        />
        {/* GTM - loads after consent defaults are set */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
