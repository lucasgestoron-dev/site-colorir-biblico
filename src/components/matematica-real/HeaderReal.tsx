import React from 'react';

export function HeaderReal() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-6 relative z-20">
      
      {/* LOGO */}
      <div className="w-1/4">
        {/* Placeholder text for logo if image is not specified. We can use a font. */}
        <span className="font-fredoka text-2xl font-bold text-sky-800">
          Colorir Bíblico
        </span>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 flex justify-center items-center gap-6">
        <a href="#" className="font-medium text-slate-700 hover:text-sky-600 transition">Início</a>
        <a href="#como" className="font-medium text-slate-700 hover:text-sky-600 transition">Como funciona</a>
        <a href="#receber" className="font-medium text-slate-700 hover:text-sky-600 transition">O que vai receber</a>
        <a href="#depoimentos" className="font-medium text-slate-700 hover:text-sky-600 transition">Depoimentos</a>
        <a href="#faq" className="font-medium text-slate-700 hover:text-sky-600 transition">Perguntas frequentes</a>
      </nav>

      {/* CTA */}
      <div className="w-1/4 flex justify-end">
        <a href="#planos" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:-translate-y-1">
          Quero garantir agora
        </a>
      </div>

    </header>
  );
}
