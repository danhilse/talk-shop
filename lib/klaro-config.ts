// Klaro configuration with Google Consent Mode v2 integration

// Helper function to update Google Consent Mode
function updateGoogleConsent(
  category: "analytics" | "advertising" | "functional",
  consent: boolean
) {
  if (typeof window !== "undefined" && "gtag" in window && window.gtag) {
    const value = consent ? "granted" : "denied";

    switch (category) {
      case "analytics":
        window.gtag("consent", "update", {
          analytics_storage: value,
        });
        break;
      case "advertising":
        window.gtag("consent", "update", {
          ad_storage: value,
          ad_user_data: value,
          ad_personalization: value,
        });
        break;
      case "functional":
        window.gtag("consent", "update", {
          functionality_storage: value,
          personalization_storage: value,
        });
        break;
    }
  }
}

export const klaroConfig = {
  // Element ID for modal
  elementID: "klaro",

  // Storage method and key
  storageMethod: "localStorage",
  storageName: "klaro-consent",

  // Cookie settings
  cookieName: "klaro-consent",
  cookieExpiresAfterDays: 365,

  // Appearance settings
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,

  // Hide the "powered by Klaro" badge
  poweredBy: "",

  // Require explicit consent (no implicit acceptance)
  mustConsent: true,
  acceptAll: true,

  // Show decline all button
  hideDeclineAll: false,

  // Disable auto-loading to avoid race condition with GTM
  noAutoLoad: true,

  // Translations
  translations: {
    en: {
      consentModal: {
        title: "Privacy preferences",
        description:
          "We use cookies and similar technologies to enhance your experience, analyze traffic, and personalize content. Choose which cookies you're comfortable with below.",
      },
      consentNotice: {
        title: "Cookie preferences",
        description:
          'We use cookies to improve your experience and analyze site traffic. <a href="/privacy" target="_blank">Privacy Policy</a>',
        changeDescription: "Your preferences have been updated.",
        learnMore: "Manage preferences",
      },
      purposes: {
        analytics: {
          title: "Analytics",
          description:
            "Help us understand how visitors interact with our website by collecting anonymous usage data.",
        },
        advertising: {
          title: "Advertising",
          description:
            "Enable personalized advertisements and measure ad campaign performance.",
        },
        functional: {
          title: "Functional",
          description:
            "Remember your preferences and settings for a better experience.",
        },
      },
      acceptAll: "Accept all",
      acceptSelected: "Accept selected",
      decline: "Essential only",
      close: "Close",
      save: "Save preferences",
      ok: "Accept",
    },
  },

  // Service definitions with Consent Mode mapping
  services: [
    {
      name: "google-analytics",
      title: "Google Analytics",
      purposes: ["analytics"],
      required: false,
      default: false,
      optOut: false,
      onlyOnce: false,
      callback: function (consent: boolean) {
        updateGoogleConsent("analytics", consent);
      },
    },
    {
      name: "google-ads",
      title: "Google Ads & Facebook Pixel",
      purposes: ["advertising"],
      required: false,
      default: false,
      optOut: false,
      onlyOnce: false,
      callback: function (consent: boolean) {
        updateGoogleConsent("advertising", consent);
      },
    },
    {
      name: "functional-cookies",
      title: "Functional Cookies",
      purposes: ["functional"],
      required: false,
      default: false,
      optOut: false,
      onlyOnce: false,
      callback: function (consent: boolean) {
        updateGoogleConsent("functional", consent);
      },
    },
  ],
};

// Type augmentation for gtag and klaro
declare global {
  interface Window {
    gtag?: ((...args: unknown[]) => void) | undefined;
    dataLayer?: unknown[];
    klaroConfig?: typeof klaroConfig;
    klaro?: {
      show: (config?: unknown) => void;
      getManager: (config?: unknown) => {
        watch: (opts: {
          update: (watcher: unknown, name: string, data: unknown) => void;
        }) => void;
      };
    };
  }
}
