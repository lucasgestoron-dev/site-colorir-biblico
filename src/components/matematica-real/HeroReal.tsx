import React from 'react';
import { HeaderReal } from './HeaderReal';
import { MissingAsset } from '../matematica/MissingAsset';

export function HeroReal() {
  return (
    <div 
      className="w-full relative overflow-hidden select-none"
      style={{ width: '100%', maxWidth: '1480px', height: '726px' }}
    >
      
      {/* 1. HERO BACKGROUND SLOT */}
      <div className="absolute inset-0 z-0">
        <MissingAsset 
          label="hero-bg.jpg (Céu, Nuvens, Terreno Voxel, Castelo)" 
          className="!min-h-0 !p-4 !text-xs opacity-70" 
        />
      </div>

      {/* 2. HEADER (Inside 726px height canvas) */}
      <HeaderReal />

      {/* 3. CONTENT AREA */}
      <div className="relative z-10 w-full h-[651px]">
        
        {/* LEFT COLUMN: BADGE, TITLE, BOX, SUBTITLE, CARDS, CTA, SEALS */}
        
        {/* Badge */}
        <div 
          className="absolute z-20"
          style={{ top: '15px', left: '118px' }}
        >
          <div className="bg-[#0f76cd] text-white font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider border border-sky-300/40 shadow-sm">
            • MISSÕES MATEMÁTICAS •
          </div>
        </div>

        {/* Title Slot */}
        <div 
          className="absolute z-20"
          style={{ top: '50px', left: '118px', width: '440px', height: '125px' }}
        >
          <MissingAsset 
            label="hero-title-mundo-dos-blocos.png" 
            className="!min-h-0 !p-2 !text-xs" 
          />
        </div>

        {/* Dark Blue Box */}
        <div 
          className="absolute z-20 bg-[#0b294e] text-white font-bold text-sm leading-tight p-3 rounded-xl border border-sky-700/60 shadow-md flex flex-col justify-center"
          style={{ top: '188px', left: '118px', width: '440px', height: '54px' }}
        >
          <span>Mais de 150 atividades de matemática</span>
          <span>para o 1º ao 5º ano</span>
        </div>

        {/* Subtitle */}
        <div 
          className="absolute z-20 text-white font-bold text-base drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          style={{ top: '252px', left: '118px', width: '440px' }}
        >
          Aprender matemática pode ser uma <span className="text-yellow-300">grande aventura!</span>
        </div>

        {/* 4 Cards Grid */}
        <div 
          className="absolute z-20 grid grid-cols-2 gap-3"
          style={{ top: '290px', left: '118px', width: '440px', height: '175px' }}
        >
          <div className="bg-white/95 text-slate-800 font-extrabold text-xs p-3 rounded-xl shadow-md flex items-center gap-2.5 border border-slate-100">
            <span className="text-lg">📝</span> +150 atividades
          </div>
          <div className="bg-white/95 text-slate-800 font-extrabold text-xs p-3 rounded-xl shadow-md flex items-center gap-2.5 border border-slate-100">
            <span className="text-lg">🎓</span> 1º ao 5º ano
          </div>
          <div className="bg-white/95 text-slate-800 font-extrabold text-xs p-3 rounded-xl shadow-md flex items-center gap-2.5 border border-slate-100">
            <span className="text-lg">🖨️</span> PDF para imprimir
          </div>
          <div className="bg-white/95 text-slate-800 font-extrabold text-xs p-3 rounded-xl shadow-md flex items-center gap-2.5 border border-slate-100">
            <span className="text-lg">🎮</span> Sem telas e sem complicação
          </div>
        </div>

        {/* Main CTA */}
        <div 
          className="absolute z-20"
          style={{ top: '480px', left: '118px' }}
        >
          <a 
            href="#planos" 
            className="w-[360px] h-[78px] bg-[#1fc633] hover:bg-[#1bb02c] text-white font-black text-xl py-4 px-8 rounded-full shadow-[0_6px_0_#148a21] border-2 border-green-300 flex items-center justify-center tracking-wide transition active:translate-y-[3px]"
          >
            QUERO GARANTIR AGORA →
          </a>
        </div>

        {/* Seals Line */}
        <div 
          className="absolute z-20 flex items-center gap-6 text-white font-bold text-xs drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          style={{ top: '575px', left: '118px', width: '440px' }}
        >
          <div className="flex items-center gap-1.5"><span>🔒</span> Compra segura</div>
          <div className="flex items-center gap-1.5"><span>⚡</span> Acesso imediato</div>
          <div className="flex items-center gap-1.5"><span>🛡️</span> 7 dias de garantia</div>
        </div>


        {/* RIGHT COLUMN: NOTE, COMPOSITION, WOOD SIGN */}

        {/* Yellow Note Slot */}
        <div 
          className="absolute z-30"
          style={{ top: '20px', left: '1240px', width: '160px', height: '100px' }}
        >
          <MissingAsset 
            label="hero-note.png" 
            className="!min-h-0 !p-1 !text-xs" 
          />
        </div>

        {/* Main Composition Slot */}
        <div 
          className="absolute z-20"
          style={{ top: '25px', left: '620px', width: '680px', height: '580px' }}
        >
          <MissingAsset 
            label="hero-composition.png (Crianças, Baú, Folhas)" 
            className="!min-h-0 !p-4 !text-sm" 
          />
        </div>

        {/* Wood Sign Slot */}
        <div 
          className="absolute z-30"
          style={{ top: '410px', left: '1250px', width: '150px', height: '190px' }}
        >
          <MissingAsset 
            label="hero-wood-sign.png" 
            className="!min-h-0 !p-1 !text-xs" 
          />
        </div>

      </div>

    </div>
  );
}
