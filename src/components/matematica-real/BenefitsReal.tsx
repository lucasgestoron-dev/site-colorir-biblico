import React from 'react';

const benefitsList = [
  "Aumenta o interesse da criança",
  "Desenvolve raciocínio lógico",
  "Trabalha diversas habilidades",
  "Atividades ilustradas e envolventes",
  "Pronto para imprimir e usar",
  "Organizado por ano escolar"
];

export function BenefitsReal() {
  return (
    <section
      className="w-[1480px] h-[290px] relative overflow-hidden select-none flex items-center justify-between px-[60px]"
      style={{
        background: 'linear-gradient(110deg, #087eaa 0%, #034983 63%, #052c63 100%)'
      }}
    >
      {/* 1. LEFT BLOCK: Large white text */}
      <div className="w-[380px] z-10">
        <h2 className="text-white font-black text-[32px] leading-[1.08] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          Mais do que<br />
          atividades, é<br />
          uma nova<br />
          forma de se<br />
          relacionar com<br />
          a matemática.
        </h2>
      </div>

      {/* 2. CENTRAL BLOCK: 6 Benefits with green checks */}
      <div className="w-[430px] z-10">
        <ul className="flex flex-col gap-[9px]">
          {benefitsList.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="w-[22px] h-[22px] rounded-full bg-[#18cc48] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-white font-bold text-[15px] leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. RIGHT BLOCK: Slot for benefits-character.png + Text */}
      <div className="w-[450px] z-10 flex items-center justify-end gap-5">
        {/* Character Slot */}
        <div className="w-[160px] h-[210px] flex-shrink-0 flex items-center justify-center">
          <img
            src="/matematica/assets/benefits/benefits-character.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Callout Text */}
        <div className="text-[#ffd630] font-fredoka font-black text-[20px] leading-[1.15] rotate-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          PEQUENOS<br />
          DESAFIOS,<br />
          GRANDES<br />
          CONQUISTAS!
        </div>
      </div>
    </section>
  );
}
