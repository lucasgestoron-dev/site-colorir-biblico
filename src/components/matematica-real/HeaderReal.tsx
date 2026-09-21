import React from 'react';
import { MissingAsset } from '../matematica/MissingAsset';

export function HeaderReal() {
  return (
    <header className="w-full h-[75px] flex items-center justify-between px-[30px] relative z-20">
      
      {/* LOGO */}
      <div className="w-[230px] h-[52px]">
        <MissingAsset label="hero-brand-logo.png" className="!min-h-0 !p-1 !text-[10px]" />
      </div>

      {/* NAVIGATION */}
      <nav className="flex items-center gap-[28px]">
        <a href="#" className="font-bold text-white text-[15px] hover:text-sky-300 transition drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Início</a>
        <a href="#como" className="font-bold text-white text-[15px] hover:text-sky-300 transition drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Como funciona</a>
        <a href="#receber" className="font-bold text-white text-[15px] hover:text-sky-300 transition drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">O que vai receber</a>
        <a href="#depoimentos" className="font-bold text-white text-[15px] hover:text-sky-300 transition drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Depoimentos</a>
        <a href="#faq" className="font-bold text-white text-[15px] hover:text-sky-300 transition drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Perguntas frequentes</a>
      </nav>

      {/* CTA */}
      <div className="w-[220px] h-[48px] flex items-center justify-end">
        <a 
          href="#planos" 
          className="bg-[#1fc633] hover:bg-[#1bb02c] text-white font-black text-xs px-5 py-2.5 rounded-full shadow-[0_4px_0_#148a21] border border-green-300 flex items-center justify-center transition active:translate-y-[2px]"
        >
          QUERO GARANTIR AGORA →
        </a>
      </div>

    </header>
  );
}
