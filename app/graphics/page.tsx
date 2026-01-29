"use client";

import { motion } from "framer-motion";
import { Floating } from "@/components/motion";

// Discord components
import {
  DiscordChatPreview,
  DiscordAISupportChat,
  DiscordShowAndTell,
  DiscordChannelSidebar,
  DiscordServerList,
  DiscordForumPost,
  DiscordForumList,
  DiscordMessageThread,
  DiscordSingleMessage,
  DiscordTypingIndicator,
  DiscordServerStats,
  DiscordOnlineMembers,
  DiscordReactionBar,
  DiscordReactionPicker,
  DiscordMessageWithReactions,
  DiscordAIBotResponse,
  DiscordAISuggestion,
  DiscordAIContextMenu,
} from "@/components/graphics";

// E-commerce components
import {
  EcommerceAnalyticsCard,
  EcommerceAnalyticsDashboard,
  EcommerceStat,
  EcommerceGrowthChart,
  EcommerceProgressBar,
  EcommerceRevenueComparison,
  EcommerceProductCard,
  EcommerceProductGrid,
  EcommerceOrderNotification,
  EcommerceNotificationStack,
  EcommerceLiveSalesTicker,
  EcommerceStoreComparison,
} from "@/components/graphics";

// Developer components
import {
  DeveloperCodeSnippet,
  DeveloperShopifyAPISnippet,
  DeveloperLiquidSnippet,
  DeveloperTerminalWindow,
  DeveloperNpmInstall,
  DeveloperShopifyCLI,
  DeveloperGitTerminal,
  DeveloperAPIResponse,
  DeveloperWebhookPayload,
  DeveloperGraphQLResponse,
} from "@/components/graphics";

// Community components
import {
  CommunityMemberGrid,
  CommunityOnlineNow,
  CommunityAchievementBadge,
  CommunityAchievementCollection,
  CommunityBadgeRow,
  CommunityLiveActivity,
  CommunityActivityStats,
} from "@/components/graphics";

// Decorative components
import {
  // Floating elements
  FloatingOrbs,
  GradientMesh,
  ParticleNetwork,
  PulsingRings,
  AnimatedGrid,
  MorphingBlob,
  // Data visuals
  RadialProgress,
  AnimatedCounter,
  BarRaceChart,
  HeatMapCalendar,
  DonutChart,
  // Composite scenes
  DiscordBusyScene,
  StackedCards,
  PhoneMockup,
  IsometricGrid,
  SuccessJourney,
  // Tech patterns
  CodeRain,
  CircuitBoard,
  APIFlow,
  WebhookStream,
  HexGrid,
  ConnectionNodes,
  // Social proof
  TestimonialCard,
  TestimonialStack,
  SocialProofBanner,
  TrustBadges,
  FeatureHighlight,
  LogoCloud,
  // Interactive
  TiltCard,
  MagneticElement,
  RevealCard,
  GlowBorderCard,
  ShimmerCard,
  StaggeredList,
  OrbitingElements,
  // Patterns
  IsometricCubes,
  DotGrid,
  DiagonalLines,
  CrossHatch,
  ChevronPattern,
  WavePattern,
  ConcentricCircles,
  DiamondPattern,
  BrickPattern,
  TriangleTessellation,
  PlusPattern,
  FlowingLines,
  StarburstPattern,
  NoisePattern,
  MazePattern,
} from "@/components/graphics";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 border-b border-white/5">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function ComponentGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-shopify uppercase tracking-wide mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-6 items-start">{children}</div>
    </div>
  );
}

export default function GraphicsShowcasePage() {
  return (
    <div className="min-h-screen bg-midnight font-sans">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Floating duration={8} distance={20}>
          <div className="absolute top-20 left-[10%] h-[600px] w-[600px] rounded-full bg-shopify/5 blur-[180px]"></div>
        </Floating>
        <Floating duration={10} distance={15}>
          <div className="absolute bottom-0 right-[5%] h-[500px] w-[500px] rounded-full bg-lime/3 blur-[150px]"></div>
        </Floating>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-shopify/30 bg-shopify/5 px-4 py-1.5 text-xs font-semibold text-shopify uppercase tracking-wider mb-4">
            Component Library
          </span>
          <h1 className="text-5xl font-bold text-white">
            Graphics{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-shopify via-lime to-shopify">
              Showcase
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            DOM-rendered branded graphics for Talk Shop. All components are
            fully animated and customizable.
          </p>
        </motion.div>

        {/* Discord Graphics */}
        <Section
          title="Discord Graphics"
          description="Chat interfaces, channel layouts, and community interactions styled after Discord's UI."
        >
          <ComponentGroup title="Chat Previews">
            <DiscordChatPreview />
            <DiscordAISupportChat />
            <DiscordShowAndTell />
          </ComponentGroup>

          <ComponentGroup title="Channel & Server UI">
            <DiscordChannelSidebar />
            <DiscordServerList />
            <DiscordServerStats />
          </ComponentGroup>

          <ComponentGroup title="Forum Posts">
            <DiscordForumPost />
            <DiscordForumList />
          </ComponentGroup>

          <ComponentGroup title="Message Threads">
            <DiscordMessageThread />
            <DiscordSingleMessage />
            <DiscordMessageWithReactions />
          </ComponentGroup>

          <ComponentGroup title="Interactions">
            <DiscordTypingIndicator />
            <DiscordTypingIndicator variant="bubble" />
            <DiscordReactionBar />
            <DiscordReactionPicker />
          </ComponentGroup>

          <ComponentGroup title="AI Features">
            <DiscordAIBotResponse />
            <DiscordAISuggestion />
            <DiscordAIContextMenu />
          </ComponentGroup>

          <ComponentGroup title="Members">
            <DiscordOnlineMembers />
          </ComponentGroup>
        </Section>

        {/* E-commerce Graphics */}
        <Section
          title="E-commerce Graphics"
          description="Analytics, products, and sales visualizations for Shopify merchants."
        >
          <ComponentGroup title="Analytics Cards">
            <EcommerceAnalyticsCard />
            <EcommerceAnalyticsCard
              title="Orders"
              value="1,284"
              change={8.2}
              sparklineData={[15, 25, 20, 35, 28, 40, 35, 48, 42, 55, 50, 62]}
            />
            <EcommerceAnalyticsCard
              title="Conversion Rate"
              value="3.24%"
              change={-2.1}
              sparklineData={[40, 38, 42, 35, 38, 32, 35, 30, 33, 28, 32, 30]}
            />
          </ComponentGroup>

          <ComponentGroup title="Analytics Dashboard">
            <EcommerceAnalyticsDashboard className="w-full max-w-xl" />
          </ComponentGroup>

          <ComponentGroup title="Growth Charts">
            <EcommerceGrowthChart variant="bar" className="w-72" />
            <EcommerceGrowthChart variant="area" className="w-80" />
            <EcommerceProgressBar className="w-72" />
            <EcommerceRevenueComparison className="w-80" />
          </ComponentGroup>

          <ComponentGroup title="Product Cards">
            <EcommerceProductCard />
            <EcommerceProductCard
              variant="compact"
              name="Smart Watch"
              price={199.99}
              badge="New"
              badgeColor="#5865F2"
            />
            <EcommerceProductCard
              variant="featured"
              className="w-full max-w-md"
            />
          </ComponentGroup>

          <ComponentGroup title="Notifications">
            <EcommerceOrderNotification />
            <EcommerceOrderNotification type="review" />
            <EcommerceOrderNotification type="milestone" />
            <EcommerceLiveSalesTicker className="w-80" />
          </ComponentGroup>

          <ComponentGroup title="Store Comparisons">
            <EcommerceStoreComparison className="w-full max-w-2xl" />
          </ComponentGroup>
        </Section>

        {/* Developer Graphics */}
        <Section
          title="Developer Graphics"
          description="Code snippets, terminal windows, and API responses for technical content."
        >
          <ComponentGroup title="Code Snippets">
            <DeveloperCodeSnippet className="w-full max-w-lg" />
            <DeveloperCodeSnippet variant="floating" className="w-80" />
          </ComponentGroup>

          <ComponentGroup title="Shopify-specific Code">
            <DeveloperShopifyAPISnippet className="w-full max-w-lg" />
            <DeveloperLiquidSnippet className="w-full max-w-lg" />
          </ComponentGroup>

          <ComponentGroup title="Terminal Windows">
            <DeveloperTerminalWindow className="w-80" />
            <DeveloperShopifyCLI className="w-96" />
            <DeveloperNpmInstall className="w-80" />
            <DeveloperGitTerminal className="w-96" />
          </ComponentGroup>

          <ComponentGroup title="API Responses">
            <DeveloperAPIResponse className="w-full max-w-lg" />
            <DeveloperWebhookPayload className="w-full max-w-lg" />
          </ComponentGroup>
        </Section>

        {/* Community Graphics */}
        <Section
          title="Community Graphics"
          description="Member displays, achievements, and activity feeds for community engagement."
        >
          <ComponentGroup title="Member Displays">
            <CommunityMemberGrid variant="grid" className="w-80" />
            <CommunityMemberGrid variant="list" className="w-72" />
            <CommunityMemberGrid variant="avatars" />
            <CommunityOnlineNow />
          </ComponentGroup>

          <ComponentGroup title="Achievement Badges">
            <CommunityAchievementBadge />
            <CommunityAchievementBadge
              title="Expert"
              level="platinum"
              unlocked={false}
              progress={72}
            />
            <CommunityAchievementBadge variant="showcase" />
            <CommunityBadgeRow />
          </ComponentGroup>

          <ComponentGroup title="Activity Feeds">
            <CommunityLiveActivity className="w-96" />
            <CommunityLiveActivity variant="ticker" className="w-full max-w-lg" />
            <CommunityActivityStats className="w-full max-w-lg" />
          </ComponentGroup>
        </Section>

        {/* Decorative - Abstract Backgrounds */}
        <Section
          title="Abstract Backgrounds"
          description="Floating elements, gradients, and particle effects for visual interest."
        >
          <ComponentGroup title="Floating Elements">
            <FloatingOrbs className="w-full max-w-md rounded-2xl border border-white/10 bg-slate/30" />
            <GradientMesh className="w-80" />
            <MorphingBlob />
          </ComponentGroup>

          <ComponentGroup title="Patterns & Particles">
            <ParticleNetwork className="w-80" />
            <AnimatedGrid className="w-80" />
            <PulsingRings />
          </ComponentGroup>
        </Section>

        {/* Decorative - Data Visualizations */}
        <Section
          title="Data Visualizations"
          description="Charts, counters, and data displays with smooth animations."
        >
          <ComponentGroup title="Charts">
            <RadialProgress className="mr-16" />
            <DonutChart className="mr-32" />
            <BarRaceChart />
          </ComponentGroup>

          <ComponentGroup title="Activity & Counters">
            <HeatMapCalendar />
            <AnimatedCounter value={12847} prefix="$" label="Monthly Revenue" />
            <AnimatedCounter value={500} suffix="+" label="Community Members" />
          </ComponentGroup>
        </Section>

        {/* Decorative - Composite Scenes */}
        <Section
          title="Composite Scenes"
          description="Complex visual compositions combining multiple elements."
        >
          <ComponentGroup title="Scenes">
            <DiscordBusyScene className="w-full max-w-xl rounded-2xl border border-white/10 bg-slate/30" />
          </ComponentGroup>

          <ComponentGroup title="Cards & Mockups">
            <StackedCards />
            <PhoneMockup />
            <IsometricGrid />
          </ComponentGroup>

          <ComponentGroup title="Journey">
            <SuccessJourney />
          </ComponentGroup>
        </Section>

        {/* Decorative - Tech Patterns */}
        <Section
          title="Tech Patterns"
          description="Code-inspired visuals for developer-focused content."
        >
          <ComponentGroup title="Code Visuals">
            <CodeRain className="w-80" />
            <CircuitBoard className="w-96" />
          </ComponentGroup>

          <ComponentGroup title="Network & Flow">
            <HexGrid className="w-96" />
            <ConnectionNodes />
            <APIFlow />
          </ComponentGroup>

          <ComponentGroup title="Streams">
            <WebhookStream />
          </ComponentGroup>
        </Section>

        {/* Decorative - Social Proof */}
        <Section
          title="Social Proof"
          description="Testimonials, trust badges, and credibility elements."
        >
          <ComponentGroup title="Testimonials">
            <TestimonialCard />
            <TestimonialStack />
          </ComponentGroup>

          <ComponentGroup title="Trust & Features">
            <TrustBadges />
            <FeatureHighlight />
            <FeatureHighlight
              icon="💬"
              title="24/7 Support"
              description="Get help anytime from the community"
              stat="<5min"
              statLabel="Avg response"
            />
          </ComponentGroup>

          <ComponentGroup title="Banners">
            <SocialProofBanner className="w-full max-w-2xl" />
            <LogoCloud className="w-full max-w-2xl" />
          </ComponentGroup>
        </Section>

        {/* Decorative - Interactive Elements */}
        <Section
          title="Interactive Elements"
          description="Hover effects, animations, and engaging UI components."
        >
          <ComponentGroup title="Card Effects">
            <TiltCard />
            <RevealCard />
            <GlowBorderCard>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Premium Feature</h3>
                <p className="text-sm text-gray-400">With animated glowing border</p>
              </div>
            </GlowBorderCard>
          </ComponentGroup>

          <ComponentGroup title="Loading & Lists">
            <ShimmerCard />
            <StaggeredList />
          </ComponentGroup>

          <ComponentGroup title="Fun Effects">
            <MagneticElement>
              <div className="px-6 py-3 rounded-full bg-shopify text-midnight font-bold">
                Magnetic Hover
              </div>
            </MagneticElement>
            <OrbitingElements />
          </ComponentGroup>
        </Section>

        {/* Repeating Patterns */}
        <Section
          title="Repeating Patterns"
          description="Endless, tileable patterns for backgrounds and decorative elements."
        >
          <ComponentGroup title="Isometric & 3D">
            <IsometricCubes className="w-full max-w-lg h-48 rounded-2xl border border-white/10 bg-slate/30" />
          </ComponentGroup>

          <ComponentGroup title="Geometric Grids">
            <DotGrid className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
            <DiamondPattern className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
            <TriangleTessellation className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
          </ComponentGroup>

          <ComponentGroup title="Lines & Stripes">
            <DiagonalLines className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
            <DiagonalLines className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" direction="both" />
            <CrossHatch className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
          </ComponentGroup>

          <ComponentGroup title="Directional Patterns">
            <ChevronPattern className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
            <BrickPattern className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
            <PlusPattern className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
          </ComponentGroup>

          <ComponentGroup title="Flowing & Organic">
            <WavePattern className="w-full max-w-lg h-40 rounded-2xl border border-white/10 bg-slate/30" />
            <FlowingLines className="w-full max-w-lg h-48 rounded-2xl border border-white/10 bg-slate/30" />
          </ComponentGroup>

          <ComponentGroup title="Radial & Circular">
            <ConcentricCircles className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
            <StarburstPattern className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
          </ComponentGroup>

          <ComponentGroup title="Abstract">
            <NoisePattern className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
            <MazePattern className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
          </ComponentGroup>
        </Section>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { label: "Discord", value: "18" },
              { label: "E-commerce", value: "14" },
              { label: "Developer", value: "11" },
              { label: "Community", value: "8" },
              { label: "Decorative", value: "49" },
              { label: "Total", value: "100" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-shopify">{stat.value}</p>
                <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
