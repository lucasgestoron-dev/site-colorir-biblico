import React from 'react';
import { MissingAsset } from '../matematica/MissingAsset';

const audienceCards = [
  {
    icon: "audience-home.png",
    line1: "Pais que querem",
    line2: "reforço em casa"
  },
  {
    icon: "audience-backpack.png",
    line1: "Crianças que",
    line2: "resistem à matemática"
  },
  {
    icon: "audience-controller.png",
    line1: "Crianças que gostam",
    line2: "do universo de blocos"
  },
  {
    icon: "audience-chart.png",
    line1: "Professores e",
    line2: "apoio escolar"
  },
  {
    icon: "audience-calendar.png",
    line1: "Férias e",
    line2: "momentos livres"
  },
  {
    icon: "audience-heart.png",
    line1: "Famílias que buscam",
    line2: "aprendizado leve",
    line3: "e significativo"
  }
];

export function AudienceReal() {
  return (
    <section
      className="w-[1480px] h-[268px] relative overflow-hidden bg-[#fffdf6] flex flex-col items-center select-none"
    >
      {/* Central Title */}
      <h2 className="text-[#0d2b56] font-black text-[28px] tracking-tight pt-[22px] text-center">
        Esse material é ideal para:
      </h2>

      {/* 6 Horizontal Cards */}
      <div className="grid grid-cols-6 gap-[16px] w-[1380px] h-[168px] mt-[16px]">
        {audienceCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] p-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col items-center justify-center text-center"
          >
            {/* Pictogram Slot */}
            <div className="w-[62px] h-[62px] mb-2.5 flex items-center justify-center">
              <MissingAsset
                label={card.icon}
                className="!min-h-0 !p-0.5 !text-[9px]"
              />
            </div>

            {/* Text */}
            <p className="text-[#0d2b56] font-black text-[13.5px] leading-[1.25]">
              {card.line1}<br />{card.line2}
              {card.line3 && <><br />{card.line3}</>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
