import React from 'react';
import { MissingAsset } from '../matematica/MissingAsset';

const includedCards = [
  {
    icon: "included-pdf.png",
    title: "PDF principal",
    subtitle: "+ de 150 atividades"
  },
  {
    icon: "included-organized.png",
    title: "Organizado do",
    subtitle: "1º ao 5º ano"
  },
  {
    icon: "included-answer-key.png",
    title: "Gabarito completo",
    subtitle: ""
  },
  {
    icon: "included-instructions.png",
    title: "Instruções de uso",
    subtitle: ""
  },
  {
    icon: "included-access.png",
    title: "Acesso imediato",
    subtitle: ""
  },
  {
    icon: "included-print.png",
    title: "Para imprimir",
    subtitle: "quando quiser"
  }
];

export function IncludedMaterialsReal() {
  return (
    <section
      id="receber"
      className="w-[1480px] h-[260px] relative overflow-hidden bg-[#fafbfc] flex flex-col items-center select-none"
    >
      {/* Central Title */}
      <h2 className="text-[#0d2b56] font-black text-[28px] tracking-tight pt-[20px] text-center">
        Tudo o que você vai receber
      </h2>
      <p className="text-[#506e90] font-semibold text-[14px] mt-[4px] text-center">
        Material completo, organizado e pronto para usar.
      </p>

      {/* 6 Horizontal Cards */}
      <div className="grid grid-cols-6 gap-[16px] w-[1380px] h-[155px] mt-[14px]">
        {includedCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[18px] p-3 shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center justify-center text-center"
          >
            {/* Icon Slot */}
            <div className="w-[58px] h-[58px] mb-2 flex items-center justify-center">
              <MissingAsset
                label={card.icon}
                className="!min-h-0 !p-0.5 !text-[9px]"
              />
            </div>

            {/* Text */}
            <div className="text-[#0d2b56] font-black text-[13px] leading-[1.25]">
              <div>{card.title}</div>
              {card.subtitle && (
                <div className="text-[#506e90] font-bold text-[11px] mt-0.5">
                  {card.subtitle}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
