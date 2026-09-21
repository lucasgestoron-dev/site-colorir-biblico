import { Header } from "./Header";
import { Hero } from "./Hero";
import { ActivitiesPreview } from "./ActivitiesPreview";
import { HowItWorks } from "./HowItWorks";
import { AudienceSection } from "./AudienceSection";
import { BenefitsBanner } from "./BenefitsBanner";
import { Testimonials } from "./Testimonials";
import { IncludedMaterials } from "./IncludedMaterials";
import { BonusMaterials } from "./BonusMaterials";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { GuaranteeSection } from "./GuaranteeSection";
import { Footer } from "./Footer";

export function ResponsiveMatematica() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <Hero />
        <ActivitiesPreview />
        <HowItWorks />
        <AudienceSection />
        <BenefitsBanner />
        <Testimonials />
        <IncludedMaterials />
        <BonusMaterials />
        <PricingSection />
        <FAQSection />
        <GuaranteeSection />
      </main>
      <Footer />
    </div>
  );
}
