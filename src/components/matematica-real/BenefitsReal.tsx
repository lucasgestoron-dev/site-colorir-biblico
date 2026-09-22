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
      className="w-[1480px] h-[290px] relative overflow-hidden select-none"
      style={{
        background: 'linear-gradient(110deg, #087eaa 0%, #045f98 45%, #063c78 100%)'
      }}
    >
      {/* Single subtle voxel texture across the section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/matematica/assets/hero/hero-bg.jpg)',
          backgroundPosition: 'center calc(100% + 10px)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.18,
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.95) 100%)',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.95) 100%)'
        }}
      />

      {/* LEFT: reference-style headline */}
      <div className="absolute left-[78px] top-[46px] w-[470px] z-10">
        <h2 className="text-white font-black text-[35px] leading-[1.02] tracking-tight drop-shadow-[0_3px_3px_rgba(0,25,65,0.65)]">
          Mais do que<br />
          atividades, é uma nova<br />
          forma de se relacionar<br />
          com a matemática.
        </h2>
      </div>

      {/* CENTER: 6 benefits */}
      <div className="absolute left-[575px] top-[43px] w-[430px] z-10">
        <ul className="flex flex-col gap-[8px]">
          {benefitsList.map((item, idx) => (
            <li key={idx} className="flex items-center gap-[10px]">
              <span className="w-[22px] h-[22px] rounded-full bg-[#18cc48] text-white flex items-center justify-center flex-shrink-0 shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
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
              <span className="text-white font-bold text-[15px] leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT: validated decomposed assets */}
      <img
        src="/matematica/assets/benefits/benefits-character-reference.png"
        alt=""
        className="absolute left-[995px] bottom-[-30px] w-[300px] h-[286px] object-contain z-10 drop-shadow-[0_8px_8px_rgba(0,20,50,0.25)]"
      />

      <img
        src="/matematica/assets/benefits/benefits-slogan-reference.png"
        alt="Pequenos desafios, grandes conquistas!"
        className="absolute right-[24px] top-[28px] w-[205px] h-[230px] object-contain z-20"
      />
    </section>
  );
}
