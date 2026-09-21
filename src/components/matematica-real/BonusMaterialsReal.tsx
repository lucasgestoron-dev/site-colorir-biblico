import React from 'react';
import { MissingAsset } from '../matematica/MissingAsset';

const bonusCards = [
  {
    icon: "bonus-tabuada-cover.png",
    line1: "Caderno de",
    line2: "Tabuada Ilustrado"
  },
  {
    icon: "bonus-probleminhas-cover.png",
    line1: "Probleminhas",
    line2: "Extras"
  },
  {
    icon: "bonus-progresso-cover.png",
    line1: "Mapa de",
    line2: "Progresso"
  },
  {
    icon: "bonus-recompensas-cover.png",
    line1: "Cartões de",
    line2: "Recompensas"
  },
  {
    icon: "bonus-certificado-cover.png",
    line1: "Certificado de",
    line2: "Conquistas"
  },
  {
    icon: "bonus-guia-cover.png",
    line1: "Guia para",
    line2: "Responsáveis"
  }
];

export function BonusMaterialsReal() {
  return (
    <section
      className="w-[1480px] h-[298px] relative overflow-hidden bg-[#fff9eb] flex flex-col items-center select-none"
    >
      {/* Central Title */}
      <h2 className="text-[#0d2b56] font-black text-[28px] tracking-tight pt-[18px] text-center">
        E não para por aí... <span className="text-[#e68a00]">(Plano Completo)</span>
      </h2>
      <p className="text-[#506e90] font-semibold text-[14px] mt-[3px] text-center">
        Além do material principal, você também recebe:
      </p>

      {/* 6 Horizontal Cards */}
      <div className="grid grid-cols-6 gap-[16px] w-[1380px] h-[195px] mt-[14px]">
        {bonusCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[18px] p-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.06)] border border-amber-100/80 flex flex-col items-center justify-between text-center"
          >
            {/* Thumbnail Asset Slot */}
            <div className="w-full h-[120px] rounded-[12px] overflow-hidden bg-slate-50 flex items-center justify-center">
              <MissingAsset
                label={card.icon}
                className="!min-h-0 !p-1 !text-[10px]"
              />
            </div>

            {/* Text */}
            <p className="text-[#0d2b56] font-black text-[13px] leading-tight pb-1.5">
              {card.line1}<br />{card.line2}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
