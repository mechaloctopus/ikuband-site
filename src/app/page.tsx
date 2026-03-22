import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ComparisonSection from "@/components/ComparisonSection";
import ScienceSection from "@/components/ScienceSection";
import GallerySection from "@/components/GallerySection";
import BiomarkersSection from "@/components/BiomarkersSection";
import BloodVitalitySection from "@/components/BloodVitalitySection";
import MLSection from "@/components/MLSection";
import EcosystemSection from "@/components/EcosystemSection";
import ManufacturingSection from "@/components/ManufacturingSection";
import RoadmapSection from "@/components/RoadmapSection";
import InvestSection from "@/components/InvestSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <MissionSection />
        <ComparisonSection />
        <ScienceSection />
        <GallerySection />
        <BiomarkersSection />
        <BloodVitalitySection />
        <MLSection />
        <EcosystemSection />
        <ManufacturingSection />
        <RoadmapSection />
        <InvestSection />
      </main>
      <Footer />
    </>
  );
}
