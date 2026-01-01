import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import SignatureDishesSection from "@/components/sections/SignatureDishesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <SignatureDishesSection />
      <ExperienceSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
