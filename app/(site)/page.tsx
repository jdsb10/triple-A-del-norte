import { Hero } from "@/components/home/hero";
import { QuickAccess } from "@/components/home/quick-access";
import { ServicesSection } from "@/components/home/services-section";
import { CoverageSection } from "@/components/home/coverage-section";
import { AboutSection } from "@/components/home/about-section";
import { EmergencyBanner } from "@/components/home/emergency-banner";
import { StatsSection } from "@/components/home/stats-section";
import { NewsSection } from "@/components/home/news-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <ServicesSection />
      <CoverageSection />
      <AboutSection />
      <EmergencyBanner />
      <StatsSection />
      <NewsSection />
    </>
  );
}
