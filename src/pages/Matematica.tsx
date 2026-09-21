import React, { useEffect } from 'react';
import { HeroReal } from "../components/matematica-real/HeroReal";
import { ActivitiesReal } from "../components/matematica-real/ActivitiesReal";
import { HowItWorksReal } from "../components/matematica-real/HowItWorksReal";
import { AudienceReal } from "../components/matematica-real/AudienceReal";
import { BenefitsReal } from "../components/matematica-real/BenefitsReal";
import { IncludedMaterialsReal } from "../components/matematica-real/IncludedMaterialsReal";
import { BonusMaterialsReal } from "../components/matematica-real/BonusMaterialsReal";
import { PricingReal } from "../components/matematica-real/PricingReal";
import { FaqReal } from "../components/matematica-real/FaqReal";
import { GuaranteeReal } from "../components/matematica-real/GuaranteeReal";
import { FooterReal } from "../components/matematica-real/FooterReal";
import { ResponsiveCanvas } from "../components/matematica-real/ResponsiveCanvas";

export default function Matematica() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Missões Matemáticas no Mundo dos Blocos | Atividades do 1º ao 5º ano";

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') || '';
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Mais de 150 atividades de matemática do 1º ao 5º ano em PDF para baixar, imprimir e aprender de forma divertida.'
      );
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <div className="matematica-real w-full min-h-screen bg-[#f8f9fa] relative flex flex-col items-center overflow-x-hidden">
      <div className="w-full relative mx-auto" style={{ maxWidth: '1480px' }}>
        
        {/* 1. HERO SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={726}>
          <HeroReal />
        </ResponsiveCanvas>

        {/* 2. ACTIVITIES SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={500}>
          <ActivitiesReal />
        </ResponsiveCanvas>

        {/* 3. HOW IT WORKS SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={454}>
          <HowItWorksReal />
        </ResponsiveCanvas>

        {/* 4. AUDIENCE SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={268}>
          <AudienceReal />
        </ResponsiveCanvas>

        {/* 5. BENEFITS SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={290}>
          <BenefitsReal />
        </ResponsiveCanvas>

        {/* Note: TestimonialsReal skipped in production until real reviews exist */}

        {/* 6. INCLUDED MATERIALS SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={260}>
          <IncludedMaterialsReal />
        </ResponsiveCanvas>

        {/* 7. BONUS MATERIALS SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={298}>
          <BonusMaterialsReal />
        </ResponsiveCanvas>

        {/* 8. PRICING SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={502}>
          <PricingReal />
        </ResponsiveCanvas>

        {/* 9. FAQ SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={266}>
          <FaqReal />
        </ResponsiveCanvas>

        {/* 10. GUARANTEE SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={150}>
          <GuaranteeReal />
        </ResponsiveCanvas>

        {/* 11. FOOTER SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={146}>
          <FooterReal />
        </ResponsiveCanvas>

      </div>
    </div>
  );
}
