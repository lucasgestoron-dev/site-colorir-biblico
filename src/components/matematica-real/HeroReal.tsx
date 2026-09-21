import React from 'react';
import { HeaderReal } from './HeaderReal';

export function HeroReal() {
  return (
    <div className="w-full relative min-h-[900px] bg-slate-50 flex flex-col overflow-hidden">
      <HeaderReal />

      <div className="flex-1 w-full flex relative pb-20 pt-10 px-12">
        
        {/* LEFT COLUMN: TEXT & CTA */}
        <div className="w-5/12 flex flex-col justify-center z-10">
          <div className="inline-block bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-full mb-6 w-max text-sm uppercase tracking-wider">
            Material Educativo Digital
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-slate-800 leading-[1.1] mb-6">
            O Mundo dos <span className="text-emerald-600 block">Blocos na Matemática</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
            Transforme a matemática em uma aventura inesquecível! Atividades divertidas com o tema favorito das crianças.
          </p>
          
          <a href="#planos" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-2xl py-5 px-12 rounded-full w-max shadow-xl transform transition hover:scale-105 inline-block text-center">
            Quero garantir agora
          </a>
        </div>

        {/* RIGHT COLUMN: IMAGES & ASSETS */}
        <div className="w-7/12 relative flex items-center justify-center">
          
          {/* Main Character / Mockup */}
          <img 
            src="/matematica/hero-mundo-blocos.webp" 
            alt="Mundo dos Blocos Mockup" 
            className="relative z-10 w-full max-w-[800px] drop-shadow-2xl" 
          />
          
          {/* Decorative Assets */}
          <img src="/matematica/pickaxe.webp" className="absolute top-10 right-10 w-32 -rotate-12 opacity-80" alt="Pickaxe" />
          <img src="/matematica/chest.webp" className="absolute bottom-10 right-20 w-48 opacity-90" alt="Chest" />
          <img src="/matematica/crystal.webp" className="absolute top-1/2 left-0 w-24 opacity-70" alt="Crystal" />
          
        </div>
      </div>
      
    </div>
  );
}
