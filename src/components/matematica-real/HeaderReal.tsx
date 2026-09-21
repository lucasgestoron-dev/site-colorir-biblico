import React from 'react';

export function HeaderReal() {
  return (
    <header className="absolute inset-x-0 top-0 h-[82px] z-40">
      <div className="absolute left-[176px] top-[10px] w-[185px] h-[58px]">
        <img
          src="/matematica/assets/hero/hero-brand-logo.png"
          alt="Mundo dos Blocos"
          className="w-full h-full object-contain"
        />
      </div>

      <nav className="absolute left-[408px] top-[25px] flex items-center gap-[32px] whitespace-nowrap">
        <a href="#" className="font-bold text-[#17314f] text-[12px] hover:text-sky-700 transition">Início</a>
        <a href="#como" className="font-bold text-[#17314f] text-[12px] hover:text-sky-700 transition">Como funciona</a>
        <a href="#receber" className="font-bold text-[#17314f] text-[12px] hover:text-sky-700 transition">O que vai receber</a>
        <a href="#faq" className="font-bold text-[#17314f] text-[12px] hover:text-sky-700 transition">Perguntas frequentes</a>
      </nav>

      <a
        href="#planos"
        className="absolute left-[1104px] top-[17px] w-[205px] h-[44px] bg-[#18b936] hover:bg-[#14a431] text-white font-black text-[12px] rounded-full shadow-[0_4px_0_#108329] border border-green-300 flex items-center justify-center transition active:translate-y-[2px]"
      >
        QUERO GARANTIR AGORA →
      </a>
    </header>
  );
}
