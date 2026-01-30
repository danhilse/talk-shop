declare module "klaro" {
  interface KlaroConfig {
    elementID?: string;
    storageMethod?: string;
    storageName?: string;
    cookieName?: string;
    cookieExpiresAfterDays?: number;
    htmlTexts?: boolean;
    embedded?: boolean;
    groupByPurpose?: boolean;
    poweredBy?: string;
    mustConsent?: boolean;
    acceptAll?: boolean;
    hideDeclineAll?: boolean;
    noAutoLoad?: boolean;
    translations?: Record<string, unknown>;
    services?: Array<{
      name: string;
      title: string;
      purposes: string[];
      required?: boolean;
      default?: boolean;
      optOut?: boolean;
      onlyOnce?: boolean;
      callback?: (consent: boolean, service?: unknown) => void;
    }>;
  }

  interface KlaroManager {
    watch: (opts: {
      update: (watcher: unknown, name: string, data: unknown) => void;
    }) => void;
  }

  export function setup(config: KlaroConfig): void;
  export function show(config?: KlaroConfig): void;
  export function getManager(config?: KlaroConfig): KlaroManager;
}

declare module "klaro/dist/klaro-no-css" {
  export * from "klaro";
}
