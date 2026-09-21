import React from 'react';
import { MissingAsset } from '../matematica/MissingAsset';

export function HeaderReal() {
  return (
    <header className="w-full flex items-center justify-between px-10 py-6 relative z-20">
      
      {/* LOGO */}
      <div className="w-[200px] h-[60px]">
        {/* Placeholder text replaced by MissingAsset for the logo */}
        <MissingAsset type="image" label="hero-brand-logo.png" />
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 flex justify-center items-center gap-8">
        <a href="#" className="font-bold text-white hover:text-sky-300 transition drop-shadow-md">Início</a>
        <a href="#como" className="font-bold text-white hover:text-sky-300 transition drop-shadow-md">Como funciona</a>
        <a href="#receber" className="font-bold text-white hover:text-sky-300 transition drop-shadow-md">O que vai receber</a>
        <a href="#depoimentos" className="font-bold text-white hover:text-sky-300 transition drop-shadow-md">Depoimentos</a>
        <a href="#faq" className="font-bold text-white hover:text-sky-300 transition drop-shadow-md">Perguntas frequentes</a>
      </nav>

      {/* CTA */}
      <div className="w-auto flex justify-end">
        <a href="#planos" className="bg-[#1fc633] hover:bg-[#1bb02c] text-white font-black text-lg py-3 px-8 rounded-full shadow-[0_5px_0_#148a21] transform transition active:translate-y-[4px] active:shadow-none border border-green-400">
          QUERO GARANTIR AGORA →
        </a>
      </div>

    </header>
  );
}
