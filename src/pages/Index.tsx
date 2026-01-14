import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <GallerySection />

        {/* MUDANÇA AQUI: A Oferta (CTA) subiu para cá, logo após as amostras */}
        <CtaSection />
        
        {/* Os Depoimentos e o FAQ ficaram abaixo da oferta, para reforçar quem ainda não comprou */}
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
