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
      {/* Subtle voxel accents and hero-bg full texture, integrated smoothly with blue base */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Full section subtle voxel texture */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/matematica/assets/hero/hero-bg.jpg)',
            backgroundPosition: 'center bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.18,
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.95) 100%)',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.95) 100%)'
          }}
        />

        <div className="absolute left-0 bottom-0 w-[96px] h-[40px] bg-[#0a6b73]/35" />
        <div className="absolute left-[48px] bottom-0 w-[86px] h-[62px] bg-[#0b7577]/25" />
        <div className="absolute right-[330px] top-0 w-[92px] h-[54px] bg-[#0d6759]/20" />
        <div className="absolute right-[260px] top-[18px] w-[74px] h-[64px] bg-[#0c7752]/18" />

        {/* Hero voxel terrain crop: subtle green blocks rising at bottom-right behind character */}
        <div
          className="absolute right-0 bottom-0 w-[640px] h-[270px]"
          style={{
            backgroundImage: 'url(/matematica/assets/hero/hero-bg.jpg)',
            backgroundPosition: '-210px -460px',
            backgroundSize: '1480px 726px',
            backgroundRepeat: 'no-repeat',
            opacity: 0.38,
            WebkitMaskImage: 'radial-gradient(ellipse at 80% 85%, black 30%, rgba(0,0,0,0.5) 60%, transparent 95%)',
            maskImage: 'radial-gradient(ellipse at 80% 85%, black 30%, rgba(0,0,0,0.5) 60%, transparent 95%)'
          }}
        />

        <div className="absolute right-0 bottom-0 w-[112px] h-[72px] bg-gradient-to-b from-[#168c47] to-[#0d673c] opacity-60" />
        <div className="absolute right-[100px] bottom-0 w-[92px] h-[52px] bg-gradient-to-b from-[#2b9f43] to-[#13703a] opacity-60" />
        <div className="absolute right-[178px] bottom-0 w-[78px] h-[88px] bg-gradient-to-b from-[#4fa92f] to-[#1d7b35] opacity-60" />
      </div>

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
        className="absolute left-[995px] bottom-[-4px] w-[300px] h-[286px] object-contain z-10 drop-shadow-[0_8px_8px_rgba(0,20,50,0.25)]"
      />

      <img
        src="/matematica/assets/benefits/benefits-slogan-reference.png"
        alt="Pequenos desafios, grandes conquistas!"
        className="absolute right-[24px] top-[28px] w-[205px] h-[230px] object-contain z-20"
      />
    </section>
  );
}
