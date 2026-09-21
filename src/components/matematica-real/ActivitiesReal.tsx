import React from 'react';

const activities = [
  { tag: "CONTAGEM", src: "/matematica/atividade-1.webp", alt: "Atividade de Contagem" },
  { tag: "SOMA E SUBTRAÇÃO", src: "/matematica/atividade-2.webp", alt: "Atividade de Soma e Subtração" },
  { tag: "PROBLEMAS", src: "/matematica/atividade-3.webp", alt: "Atividade de Problemas" },
  { tag: "FRAÇÕES", src: "/matematica/atividade-4.webp", alt: "Atividade de Frações" },
  { tag: "MEDIDAS", src: "/matematica/atividade-5.webp", alt: "Atividade de Medidas" },
  { tag: "DESAFIOS LÓGICOS", src: "/matematica/atividade-6.webp", alt: "Atividade de Desafios Lógicos" },
];

export function ActivitiesReal() {
  return (
    <section
      className="w-full relative overflow-hidden bg-[#eef7fd] flex flex-col items-center select-none"
      style={{ maxWidth: '1480px', height: '500px' }}
    >
      {/* Title & Subtitle */}
      <div className="text-center pt-[32px] px-4">
        <h2 className="text-[#0d2b56] font-black text-[32px] leading-tight tracking-tight">
          Veja como são as atividades por dentro
        </h2>
        <p className="text-[#4e6b8f] font-semibold text-[15px] mt-[6px]">
          Páginas reais do material. Atividades criativas, com o universo de blocos que as crianças adoram.
        </p>
      </div>

      {/* Navigation Arrows & 6 Columns Container */}
      <div className="relative w-full flex items-center justify-center mt-[22px] px-[24px]">
        
        {/* Left Circular Arrow */}
        <button
          type="button"
          aria-label="Anterior"
          className="absolute left-[24px] top-[138px] w-[42px] h-[42px] rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition z-20 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 6 Horizontally Aligned Items */}
        <div className="grid grid-cols-6 gap-[16px] w-full max-w-[1340px] px-2">
          {activities.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Light blue pill badge */}
              <div className="bg-[#d7ebfc] text-[#0d64ad] font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full mb-[10px] whitespace-nowrap shadow-sm border border-sky-200/50">
                {item.tag}
              </div>

              {/* Sheet Card */}
              <div className="w-full bg-white rounded-[12px] p-1.5 shadow-[0_6px_16px_rgba(15,43,86,0.08)] border border-slate-200/80 transition transform hover:-translate-y-1">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[255px] object-contain rounded-[8px]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Circular Blue Arrow */}
        <button
          type="button"
          aria-label="Próximo"
          className="absolute right-[24px] top-[138px] w-[42px] h-[42px] rounded-full bg-[#0d64ad] shadow-md border border-sky-400 flex items-center justify-center text-white hover:bg-[#0b5493] transition z-20 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </section>
  );
}
