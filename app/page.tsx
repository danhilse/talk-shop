import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { Marquee } from "@/components/marquee";

export const metadata: Metadata = {
  title: "Join Our Shopify Discord Server and Community | Talk Shop",
  description: "Connect with Shopify experts on our Shopify Discord Server. Share insights, strategies, and grow together in the dynamic world of eCommerce.",
  alternates: {
    canonical: "https://letstalkshop.com/",
  },
};

// Dynamic imports for below-the-fold sections - reduces initial bundle
const FeaturesSection = dynamic(
  () => import("@/components/home/features-section").then((mod) => mod.FeaturesSection),
  { ssr: true }
);

const ExperienceSection = dynamic(
  () => import("@/components/home/experience-section").then((mod) => mod.ExperienceSection),
  { ssr: true }
);

const CTASection = dynamic(
  () => import("@/components/home/cta-section").then((mod) => mod.CTASection),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight font-sans overflow-x-hidden">
      {/* Hero Section - loaded immediately */}
      <HeroSection />

      {/* Marquee Section */}
      <section id="marquee" className="relative overflow-hidden bg-slate py-6 border-y border-white/5">
        <Marquee>
          <span className="text-2xl font-bold text-white/10 lg:text-4xl">LET&apos;S TALK SHOP</span>
          <span className="text-shopify">•</span>
          <span className="text-2xl font-bold text-white/10 lg:text-4xl">LET&apos;S TALK SHOP</span>
          <span className="text-shopify">•</span>
          <span className="text-2xl font-bold text-white/10 lg:text-4xl">LET&apos;S TALK SHOP</span>
          <span className="text-shopify">•</span>
        </Marquee>
      </section>

      {/* Features Section - dynamically loaded */}
      <FeaturesSection />

      {/* Dream Build Grow Marquee */}
      <section id="about-us" className="relative overflow-hidden bg-midnight py-8 border-y border-white/5">
        <Marquee reverse>
          <span className="font-serif text-3xl italic text-lime/30 lg:text-5xl">Dream it</span>
          <span className="text-white/20">•</span>
          <span className="font-serif text-3xl italic text-shopify/30 lg:text-5xl">Build it</span>
          <span className="text-white/20">•</span>
          <span className="font-serif text-3xl italic text-lime/30 lg:text-5xl">Grow it</span>
          <span className="text-white/20">•</span>
        </Marquee>
      </section>

      {/* Experience Section - dynamically loaded */}
      <ExperienceSection />

      {/* CTA Section - dynamically loaded */}
      <CTASection />
    </div>
  );
}
