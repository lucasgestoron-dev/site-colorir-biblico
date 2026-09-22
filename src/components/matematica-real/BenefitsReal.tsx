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
      className="w-[1480px] h-[290px] relative overflow-hidden select-none flex items-center px-[60px]"
      style={{
        background: 'linear-gradient(110deg, #087eaa 0%, #034983 63%, #052c63 100%)'
      }}
    >
      {/* subtle voxel scenery accent, cropped from an existing project asset */}
      <div
        className="absolute right-0 bottom-0 w-[560px] h-[170px] opacity-[0.28] pointer-events-none"
        style={{
          backgroundImage: 'url(/matematica/assets/hero/hero-bg.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '900px auto',
          backgroundPosition: 'right bottom',
          WebkitMaskImage: 'linear-gradient(to left, black 58%, transparent 100%)',
          maskImage: 'linear-gradient(to left, black 58%, transparent 100%)'
        }}
      />

      {/* 1. LEFT BLOCK */}
      <div className="w-[410px] z-10">
        <h2 className="text-white font-black text-[34px] leading-[1.03] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          Mais do que<br />
          atividades, é uma nova<br />
          forma de se relacionar<br />
          com a matemática.
        </h2>
      </div>

      {/* 2. CENTRAL BLOCK */}
      <div className="w-[420px] z-10">
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

      {/* 3. RIGHT BLOCK: decomposed character + lettering */}
      <div className="w-[510px] h-full z-10 relative flex items-center justify-end">
        <img
          src="/matematica/assets/benefits/benefits-character-reference.webp"
          alt=""
          className="absolute left-[5px] bottom-[-6px] w-[275px] h-[278px] object-contain"
        />

        <img
          src="/matematica/assets/benefits/benefits-slogan-reference.webp"
          alt="Pequenos desafios, grandes conquistas!"
          className="absolute right-[-4px] top-[34px] w-[230px] h-[210px] object-contain"
        />
      </div>
    </section>
  );
}
