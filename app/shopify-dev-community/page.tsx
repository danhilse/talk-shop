import dynamic from "next/dynamic";
import { CommunityHeroSection } from "@/components/community/hero-section";

// Dynamic imports for below-the-fold sections - reduces initial bundle
const ProblemSection = dynamic(
  () => import("@/components/community/problem-section").then((mod) => mod.ProblemSection),
  { ssr: true }
);

const WhoItsForSection = dynamic(
  () => import("@/components/community/who-its-for-section").then((mod) => mod.WhoItsForSection),
  { ssr: true }
);

const TopicsSection = dynamic(
  () => import("@/components/community/topics-section").then((mod) => mod.TopicsSection),
  { ssr: true }
);

const RealTimeSection = dynamic(
  () => import("@/components/community/real-time-section").then((mod) => mod.RealTimeSection),
  { ssr: true }
);

const CommunityCTASection = dynamic(
  () => import("@/components/community/cta-section").then((mod) => mod.CommunityCTASection),
  { ssr: true }
);

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-midnight font-sans overflow-x-hidden">
      {/* Hero Section - loaded immediately */}
      <CommunityHeroSection />

      {/* Problem Section - dynamically loaded */}
      <ProblemSection />

      {/* Who It's For Section - dynamically loaded */}
      <WhoItsForSection />

      {/* Topics Section - dynamically loaded */}
      <TopicsSection />

      {/* Real-Time Section - dynamically loaded */}
      <RealTimeSection />

      {/* CTA Section - dynamically loaded */}
      <CommunityCTASection />
    </div>
  );
}
