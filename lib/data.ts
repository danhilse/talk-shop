// Shared data and utilities used across multiple pages

export const headshots = [
  "danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_0.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_1.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_2.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_03f7b46f-8ce6-4b4a-acec-403f701646c2_3.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_0.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_1.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_2.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_7a52236f-2698-4eae-a41c-f08d3a1aef88_3.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_0.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_1.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_2.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_90fc909c-d5d1-47c1-bdf8-e165c70ce152_3.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_0.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_1.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_2.png",
  "danhilse_photo_for_slack_headshot_--raw_--v_7_f2b21a2b-8083-434d-937c-321e5726fb39_3.png",
] as const;

export function shuffleArray<T>(array: readonly T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Home page features
export const homeFeatures = [
  {
    icon: "{ }",
    title: "Shopify Collective",
    description:
      "Connect with Shopify builders, eComm architects, and digital nomads for raw insights on online business.",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    icon: "//",
    title: "Burn the Rulebook",
    description:
      "No blueprints here. We build, break, and rebuild. Share ideas and see them transformed by collective knowledge.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: "⚡",
    title: "The Algorithm Never Sleeps",
    description:
      "Shopify evolves. Trends shift. Yesterday's success can become obsolete. We adapt—strategy, tech, and growth.",
    gradient: "from-shopify/20 to-lime/20",
  },
  {
    icon: "∞",
    title: "Scale Without Limits",
    description:
      "From first sale to enterprise. Learn what works at every stage and unlock growth strategies that compound.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
] as const;

// Home page experience stats
export const experienceStats = [
  { value: "20+", label: "Years Experience", color: "text-shopify" },
  { value: "24/7", label: "Community Active", color: "text-lime" },
  { value: "500+", label: "Members", color: "text-white" },
  { value: "∞", label: "Ideas Shared", color: "text-shopify" },
] as const;

// Home page value propositions
export const valueProps = [
  { label: "Battle-tested", desc: "Two decades of eCommerce evolution" },
  { label: "Always adapting", desc: "Staying ahead of platform changes" },
  { label: "Community-driven", desc: "Real insights from real builders" },
] as const;

// Community page topics
export const communityTopics = [
  {
    title: "App Architecture",
    description:
      "Discuss patterns, best practices, and scalable approaches for Shopify apps.",
    icon: "{ }",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "API & Webhooks",
    description:
      "Work through API limitations, webhook handling, and data synchronization challenges.",
    icon: "< >",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Theme Development",
    description:
      "Share best practices for sections, templates, and performance improvements.",
    icon: "//",
    gradient: "from-shopify/20 to-lime/20",
  },
  {
    title: "Headless & Hydrogen",
    description:
      "Compare approaches to data fetching, caching, and storefront performance.",
    icon: "⚡",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Performance",
    description:
      "Optimize load times, API calls, and overall app and storefront performance.",
    icon: "→",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Billing & Business",
    description:
      "Navigate billing models, pricing strategies, and platform changes.",
    icon: "$",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
] as const;

// Community page developer tags
export const developerTags = [
  "App Developers",
  "Theme Developers",
  "API Engineers",
  "Hydrogen/Headless",
  "Checkout Extensions",
] as const;

// Community page real-time value props
export const realTimeValueProps = [
  { label: "Fast", desc: "Real-time answers when you're blocked", icon: "⚡" },
  { label: "Real", desc: "Production problems, not theoretical", icon: "🎯" },
  { label: "Peer", desc: "Developer to developer expertise", icon: "👥" },
] as const;
