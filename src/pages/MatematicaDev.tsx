import React, { useState } from 'react';
import { HeroReal } from "../components/matematica-real/HeroReal";
import { ActivitiesReal } from "../components/matematica-real/ActivitiesReal";
import { HowItWorksReal } from "../components/matematica-real/HowItWorksReal";
import { AudienceReal } from "../components/matematica-real/AudienceReal";
import { BenefitsReal } from "../components/matematica-real/BenefitsReal";
import { TestimonialsReal } from "../components/matematica-real/TestimonialsReal";
import { IncludedMaterialsReal } from "../components/matematica-real/IncludedMaterialsReal";
import { BonusMaterialsReal } from "../components/matematica-real/BonusMaterialsReal";
import { PricingReal } from "../components/matematica-real/PricingReal";
import { FaqReal } from "../components/matematica-real/FaqReal";
import { GuaranteeReal } from "../components/matematica-real/GuaranteeReal";
import { FooterReal } from "../components/matematica-real/FooterReal";
import { ResponsiveCanvas } from "../components/matematica-real/ResponsiveCanvas";

export default function MatematicaDev() {
  const [opacity, setOpacity] = useState(0.5);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="matematica-real w-full min-h-screen bg-[#f8f9fa] relative flex flex-col items-center overflow-x-hidden">
      
      {/* DEVELOPMENT CONTROLS */}
      <div className="fixed top-3 left-3 z-50 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-xl shadow-2xl border border-slate-200 text-xs sm:text-sm flex flex-col gap-2 sm:gap-3 w-[210px] sm:w-64 max-w-[calc(100vw-24px)] transition-all">
        <div className="flex items-center justify-between border-b pb-1.5 sm:pb-2">
          <h3 className="font-bold text-slate-800 text-xs sm:text-sm">Comparação</h3>
          <button 
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-[11px] text-slate-500 hover:text-slate-800 font-bold px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 cursor-pointer"
          >
            {isCollapsed ? "Expandir" : "Recolher"}
          </button>
        </div>

        {!isCollapsed && (
          <>
            <label className="flex items-center gap-2 cursor-pointer select-none font-medium text-slate-700 text-xs sm:text-sm">
              <input 
                type="checkbox" 
                checked={showOverlay} 
                onChange={e => setShowOverlay(e.target.checked)} 
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 rounded"
              />
              Mostrar Referência
            </label>
            
            {showOverlay && (
              <label className="flex flex-col gap-1.5 font-medium text-slate-600 text-[11px] sm:text-xs">
                Opacidade: {Math.round(opacity * 100)}%
                <input 
                  type="range" 
                  min="0" max="1" step="0.05" 
                  value={opacity} 
                  onChange={e => setOpacity(parseFloat(e.target.value))} 
                  className="w-full accent-sky-500 cursor-pointer"
                />
              </label>
            )}
          </>
        )}
      </div>

      {/* REAL IMPLEMENTATION CONTAINER (1480px max-width) */}
      <div className="w-full relative mx-auto" style={{ maxWidth: '1480px' }}>
        
        {/* 1. HERO SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={726}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[726px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/01-hero@2x.png" 
                alt="Reference Hero" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <HeroReal />
        </ResponsiveCanvas>

        {/* 2. ACTIVITIES SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={500}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[500px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/02-activities@2x.png" 
                alt="Reference Activities" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <ActivitiesReal />
        </ResponsiveCanvas>

        {/* 3. HOW IT WORKS SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={454}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[454px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/03-how-it-works@2x.png" 
                alt="Reference How It Works" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <HowItWorksReal />
        </ResponsiveCanvas>

        {/* 4. AUDIENCE SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={268}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[268px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/04-audience@2x.png" 
                alt="Reference Audience" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <AudienceReal />
        </ResponsiveCanvas>

        {/* 5. BENEFITS SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={290}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[290px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/05-benefits@2x.png" 
                alt="Reference Benefits" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <BenefitsReal />
        </ResponsiveCanvas>

        {/* 6. TESTIMONIALS SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={310}>
          {showOverlay && (
            <div
              className="absolute top-0 left-0 w-[1480px] h-[310px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img
                src="/matematica/reference-skin/06-testimonials@2x.png"
                alt="Reference Testimonials"
                className="w-full h-full block object-contain"
              />
            </div>
          )}
          <TestimonialsReal />
        </ResponsiveCanvas>

        {/* 7. INCLUDED MATERIALS SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={260}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[260px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/07-included@2x.png" 
                alt="Reference Included Materials" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <IncludedMaterialsReal />
        </ResponsiveCanvas>

        {/* 8. BONUS MATERIALS SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={298}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[298px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/08-bonuses@2x.png" 
                alt="Reference Bonus Materials" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <BonusMaterialsReal />
        </ResponsiveCanvas>

        {/* 9. PRICING SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={502}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[502px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/09-pricing@2x.png" 
                alt="Reference Pricing" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <PricingReal />
        </ResponsiveCanvas>

        {/* 10. FAQ SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={266}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[266px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/10-faq@2x.png" 
                alt="Reference FAQ" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <FaqReal />
        </ResponsiveCanvas>

        {/* 11. GUARANTEE SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={150}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[150px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/11-guarantee@2x.png" 
                alt="Reference Guarantee" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <GuaranteeReal />
        </ResponsiveCanvas>

        {/* 12. FOOTER SECTION */}
        <ResponsiveCanvas designWidth={1480} designHeight={146}>
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-[1480px] h-[146px] z-50 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/12-footer@2x.png" 
                alt="Reference Footer" 
                className="w-full h-full block object-contain" 
              />
            </div>
          )}
          <FooterReal />
        </ResponsiveCanvas>
      </div>

    </div>
  );
}
