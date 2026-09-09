import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import CtaSection from "@/components/CtaSection";
import UseIdeasSection from "@/components/UseIdeasSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <UseIdeasSection />
        <HowItWorksSection />
        <GallerySection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
