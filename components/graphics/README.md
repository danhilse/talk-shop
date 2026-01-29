# Graphics Component Library

DOM-rendered branded graphics for Talk Shop. 100 animated, customizable components that fit the site's design system.

## Quick Start

```tsx
import { DiscordChatPreview, IsometricCubes } from "@/components/graphics";

export default function MyPage() {
  return (
    <div>
      <DiscordChatPreview />
      <IsometricCubes className="w-full h-48" />
    </div>
  );
}
```

All components:
- Are client components (use `"use client"` directive)
- Accept a `className` prop for sizing/positioning
- Use Framer Motion for animations
- Have `select-none` applied (feel like graphics, not text)
- Use the site's color tokens (shopify green, lime, discord purple)

---

## Discord Components (18)

Chat interfaces, channels, and community interactions styled after Discord's UI.

### Chat Previews

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DiscordChatPreview` | Multi-message chat with reactions | `className` |
| `DiscordAISupportChat` | AI bot helping a user | `className` |
| `DiscordShowAndTell` | Store showcase conversation | `className` |

### Channel & Server UI

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DiscordChannelSidebar` | Channel list with categories | `className` |
| `DiscordServerList` | Vertical server icon strip | `className` |
| `DiscordServerStats` | Server stats card (members, online) | `className` |
| `DiscordOnlineMembers` | Online member list with status | `className` |

### Forum Posts

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DiscordForumPost` | Single forum post card | `className` |
| `DiscordForumList` | List of forum posts | `className` |

### Messages & Threads

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DiscordMessageThread` | Threaded conversation | `className` |
| `DiscordHelpDesignThread` | Design help thread example | `className` |
| `DiscordSingleMessage` | Single message with avatar | `author`, `content`, `time`, `className` |
| `DiscordMessageWithReactions` | Message with emoji reactions | `className` |

### Interactions

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DiscordTypingIndicator` | Typing dots animation | `variant`: `"inline"` \| `"bubble"` \| `"standalone"`, `users` |
| `TypingDots` | Just the animated dots | - |
| `DiscordReactionBar` | Row of emoji reactions | `className` |
| `DiscordReactionPicker` | Emoji picker popup | `className` |

### AI Features

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DiscordAIBotResponse` | AI bot message with sources | `className` |
| `DiscordAISuggestion` | AI suggestion popup | `className` |
| `DiscordAIContextMenu` | AI context menu | `className` |

---

## E-commerce Components (14)

Analytics, products, and sales visualizations for Shopify merchants.

### Analytics

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `EcommerceAnalyticsCard` | Stat card with sparkline | `title`, `value`, `change`, `sparklineData`, `className` |
| `EcommerceAnalyticsDashboard` | Full dashboard layout | `className` |
| `EcommerceStat` | Simple stat display | `label`, `value`, `change` |

### Charts

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `EcommerceGrowthChart` | Growth visualization | `variant`: `"bar"` \| `"line"` \| `"area"`, `className` |
| `EcommerceProgressBar` | Animated progress bar | `className` |
| `EcommerceRevenueComparison` | Before/after revenue | `className` |

### Products

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `EcommerceProductCard` | Product display card | `variant`: `"default"` \| `"compact"` \| `"featured"`, `name`, `price`, `badge`, `badgeColor`, `className` |
| `EcommerceProductGrid` | Grid of products | `className` |

### Notifications

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `EcommerceOrderNotification` | Order popup | `type`: `"order"` \| `"review"` \| `"milestone"` |
| `EcommerceNotificationStack` | Stacked notifications | `className` |
| `EcommerceLiveSalesTicker` | Scrolling sales feed | `className` |

### Comparisons

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `EcommerceStoreComparison` | Before/after store stats | `className` |
| `EcommerceBeforeAfterSlider` | Visual comparison slider | `className` |

---

## Developer Components (11)

Code snippets, terminals, and API responses for technical content.

### Code Snippets

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DeveloperCodeSnippet` | Syntax-highlighted code | `variant`: `"default"` \| `"floating"`, `className` |
| `DeveloperShopifyAPISnippet` | Shopify API example | `className` |
| `DeveloperLiquidSnippet` | Liquid template code | `className` |

### Terminal Windows

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DeveloperTerminalWindow` | Terminal with output | `className` |
| `DeveloperNpmInstall` | npm install animation | `className` |
| `DeveloperShopifyCLI` | Shopify CLI commands | `className` |
| `DeveloperGitTerminal` | Git commands | `className` |

### API Responses

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DeveloperAPIResponse` | JSON response display | `className` |
| `DeveloperWebhookPayload` | Webhook JSON payload | `className` |
| `DeveloperGraphQLResponse` | GraphQL response | `className` |

---

## Community Components (8)

Member displays, achievements, and activity feeds.

### Member Displays

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `CommunityMemberGrid` | Member display | `variant`: `"grid"` \| `"list"` \| `"avatars"`, `className` |
| `CommunityOnlineNow` | Online members strip | `className` |

### Achievements

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `CommunityAchievementBadge` | Achievement badge | `title`, `level`: `"bronze"` \| `"silver"` \| `"gold"` \| `"platinum"`, `unlocked`, `progress`, `variant`: `"default"` \| `"showcase"` |
| `CommunityAchievementCollection` | Badge collection | `className` |
| `CommunityBadgeRow` | Horizontal badge row | `className` |

### Activity

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `CommunityLiveActivity` | Activity feed | `variant`: `"default"` \| `"ticker"`, `className` |
| `CommunityActivityStats` | Activity statistics | `className` |

---

## Decorative Components (49)

Abstract backgrounds, data visualizations, and interactive elements.

### Floating Elements & Backgrounds

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `FloatingOrbs` | Animated gradient orbs | `className` |
| `GradientMesh` | Gradient mesh background | `className` |
| `ParticleNetwork` | Connected particle field | `className` |
| `PulsingRings` | Expanding ring animation | `className` |
| `AnimatedGrid` | Animated dot grid | `className` |
| `MorphingBlob` | Shape-shifting blob | `className` |

### Data Visualizations

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `RadialProgress` | Circular progress ring | `value`, `className` |
| `AnimatedCounter` | Counting number animation | `value`, `prefix`, `suffix`, `label` |
| `BarRaceChart` | Animated bar chart | `className` |
| `HeatMapCalendar` | GitHub-style activity grid | `className` |
| `DonutChart` | Donut/pie chart | `className` |

### Composite Scenes

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `DiscordBusyScene` | Overlapping chat cards | `className` |
| `StackedCards` | 3D stacked cards | `className` |
| `PhoneMockup` | Mobile device frame | `children`, `className` |
| `IsometricGrid` | 3D cube grid | `className` |
| `SuccessJourney` | Timeline/progress | `className` |

### Tech Patterns

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `CodeRain` | Matrix-style code fall | `className` |
| `CircuitBoard` | Circuit trace pattern | `className` |
| `APIFlow` | API connection diagram | `className` |
| `WebhookStream` | Live webhook feed | `className` |
| `HexGrid` | Hexagonal grid | `className` |
| `ConnectionNodes` | Network node diagram | `className` |

### Social Proof

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `TestimonialCard` | Quote card | `quote`, `author`, `role`, `revenue`, `className` |
| `TestimonialStack` | Stacked testimonials | `className` |
| `SocialProofBanner` | Stats + avatars banner | `className` |
| `TrustBadges` | Trust/security badges | `className` |
| `FeatureHighlight` | Feature card with stat | `icon`, `title`, `description`, `stat`, `statLabel`, `className` |
| `LogoCloud` | Partner logo display | `className` |

### Interactive Elements

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `TiltCard` | 3D tilt on hover | `children`, `className` |
| `MagneticElement` | Magnetic cursor follow | `children`, `strength`, `className` |
| `RevealCard` | Content reveal on hover | `title`, `preview`, `revealed`, `className` |
| `GlowBorderCard` | Animated gradient border | `children`, `className` |
| `ShimmerCard` | Loading skeleton | `className` |
| `StaggeredList` | Animated list reveal | `className` |
| `OrbitingElements` | Orbiting icons | `className` |

### Repeating Patterns

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `IsometricCubes` | 3D cube tessellation | `rows`, `cols`, `animated`, `className` |
| `DotGrid` | Repeating dot pattern | `dotSize`, `spacing`, `animated`, `className` |
| `DiagonalLines` | Diagonal stripe pattern | `lineSpacing`, `strokeWidth`, `direction`: `"left"` \| `"right"` \| `"both"`, `className` |
| `CrossHatch` | Cross-hatch pattern | `spacing`, `className` |
| `ChevronPattern` | V-shaped pattern | `size`, `animated`, `className` |
| `WavePattern` | Sine wave layers | `layers`, `animated`, `className` |
| `ConcentricCircles` | Rotating rings | `rings`, `animated`, `className` |
| `DiamondPattern` | Rhombus tessellation | `size`, `animated`, `className` |
| `BrickPattern` | Brick wall pattern | `brickWidth`, `brickHeight`, `className` |
| `TriangleTessellation` | Triangle pattern | `size`, `animated`, `className` |
| `PlusPattern` | Plus sign grid | `size`, `spacing`, `className` |
| `FlowingLines` | Animated flowing curves | `lines`, `className` |
| `StarburstPattern` | Radial rays | `rays`, `animated`, `className` |
| `NoisePattern` | Particle noise field | `density`, `className` |
| `MazePattern` | Random maze lines | `cellSize`, `className` |

---

## Design System

### Colors

Components use these CSS custom properties / Tailwind tokens:

| Token | Hex | Usage |
|-------|-----|-------|
| `shopify` | `#95BF47` | Primary accent, growth |
| `lime` | `#C4E456` | Secondary accent |
| `midnight` | `#0D1117` | Dark backgrounds |
| `slate` | `#21262D` | Card backgrounds |
| `carbon` | `#161B22` | Darker cards |
| Discord purple | `#5865F2` | Discord UI elements |
| Discord dark | `#313338` | Discord backgrounds |

### Animation Patterns

All animations use Framer Motion with consistent patterns:

```tsx
// Staggered reveal
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1 }}

// Infinite loop
animate={{ rotate: 360 }}
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

// Hover interaction
whileHover={{ scale: 1.05, y: -4 }}
```

### Sizing

Components don't have fixed sizes by default. Use `className` to control dimensions:

```tsx
// Fixed size
<IsometricCubes className="w-96 h-64" />

// Responsive
<IsometricCubes className="w-full max-w-lg h-48" />

// With container styling
<DotGrid className="w-80 h-48 rounded-2xl border border-white/10 bg-slate/30" />
```

---

## Examples

### Hero Section Background

```tsx
<div className="relative h-screen">
  <div className="absolute inset-0 overflow-hidden">
    <IsometricCubes className="w-full h-full opacity-50" />
  </div>
  <div className="relative z-10">
    {/* Hero content */}
  </div>
</div>
```

### Feature Card with Pattern

```tsx
<div className="relative rounded-2xl border border-white/10 overflow-hidden">
  <WavePattern className="absolute inset-0 opacity-30" />
  <div className="relative p-8">
    <h3>Feature Title</h3>
    <p>Feature description</p>
  </div>
</div>
```

### Discord Preview in Context

```tsx
<div className="grid md:grid-cols-2 gap-8 items-center">
  <div>
    <h2>Join the Community</h2>
    <p>Connect with fellow Shopify developers</p>
  </div>
  <DiscordChatPreview />
</div>
```

### Animated Stats Section

```tsx
<div className="grid grid-cols-3 gap-6">
  <EcommerceAnalyticsCard title="Revenue" value="$47.2k" change={12.5} />
  <EcommerceAnalyticsCard title="Orders" value="1,284" change={8.2} />
  <EcommerceAnalyticsCard title="Conversion" value="3.24%" change={-2.1} />
</div>
```

---

## Showcase

View all components at `/graphics` in development.
