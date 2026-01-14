import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection"; // Adicionamos o FAQ aqui
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection /> {/* O FAQ vai aparecer aqui */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
