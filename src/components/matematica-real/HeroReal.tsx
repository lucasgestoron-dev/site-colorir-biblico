import React from 'react';
import { HeaderReal } from './HeaderReal';

const BenefitCard = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
  <div className="h-full bg-white/95 text-[#17314f] font-extrabold text-[12px] leading-tight rounded-[12px] shadow-md border border-slate-100 flex flex-col items-center justify-center text-center px-2">
    <span className="text-[24px] leading-none mb-2">{icon}</span>
    <span>{children}</span>
  </div>
);

export function HeroReal() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ maxWidth: '1480px', height: '726px' }}
    >
      {/* Full illustrated background: sky, trees, terrain and castle */}
      <div className="absolute inset-0 z-0">
        <img
          src="/matematica/assets/hero/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <HeaderReal />

      {/* LEFT VISUAL GROUP */}
      <div className="absolute z-20 left-[210px] top-[103px] w-[342px] h-[53px] rounded-[18px] bg-[#0f76cd] text-white font-black text-[17px] tracking-wide flex items-center justify-center shadow-md border border-sky-300/50">
        • MISSÕES MATEMÁTICAS •
      </div>

      <div className="absolute z-20 left-[170px] top-[151px] w-[430px] h-[166px]">
        <img
          src="/matematica/assets/hero/hero-title-mundo-dos-blocos.png"
          alt="Mundo dos Blocos"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute z-20 left-[149px] top-[317px] w-[462px] h-[67px] bg-[#0b3b75] text-white font-bold text-[22px] leading-[1.08] rounded-[10px] border border-sky-500/60 shadow-md flex flex-col items-center justify-center text-center px-4">
        <span>Mais de 150 atividades de matemática</span>
        <span>para o 1º ao 5º ano</span>
      </div>

      <div className="absolute z-20 left-[168px] top-[386px] w-[438px] h-[31px] text-white font-bold text-[15px] flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,.55)]">
        Aprender matemática pode ser uma grande aventura!
      </div>

      {/* Four cards in ONE horizontal row, matching the reference */}
      <div className="absolute z-20 left-[110px] top-[426px] w-[545px] h-[126px] grid grid-cols-4 gap-[9px]">
        <BenefitCard icon="📝">+150<br />atividades</BenefitCard>
        <BenefitCard icon="📦">1º ao 5º<br />ano</BenefitCard>
        <BenefitCard icon="🖨️">PDF para<br />imprimir</BenefitCard>
        <BenefitCard icon="⏱️">Sem telas e sem<br />complicação</BenefitCard>
      </div>

      <a
        href="#planos"
        className="absolute z-20 left-[145px] top-[582px] w-[474px] h-[72px] bg-[#18bd37] hover:bg-[#14a832] text-white font-black text-[19px] rounded-full shadow-[0_6px_0_#108328] border-2 border-white/80 flex items-center justify-center tracking-wide transition active:translate-y-[3px]"
      >
        QUERO GARANTIR AGORA →
      </a>

      <div className="absolute z-20 left-[157px] top-[669px] w-[470px] h-[32px] flex items-center justify-center gap-[25px] text-white font-bold text-[11px] drop-shadow-[0_1px_2px_rgba(0,0,0,.8)]">
        <span>🔒 Compra segura</span>
        <span>⚡ Acesso imediato</span>
        <span>ⓘ 7 dias de garantia</span>
      </div>

      {/* RIGHT VISUAL GROUP */}
      <div className="absolute z-20 left-[650px] top-[88px] w-[615px] h-[626px]">
        <img
          src="/matematica/assets/hero/hero-composition.png"
          alt="Composição Mundo dos Blocos"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute z-30 left-[1082px] top-[160px] w-[250px] h-[145px]">
        <img
          src="/matematica/assets/hero/hero-note.png"
          alt="Nota"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute z-30 left-[1244px] top-[443px] w-[224px] h-[216px]">
        <img
          src="/matematica/assets/hero/hero-wood-sign.png"
          alt="Placa de Madeira"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
