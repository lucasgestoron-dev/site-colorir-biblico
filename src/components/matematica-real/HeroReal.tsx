import React from 'react';
import { HeaderReal } from './HeaderReal';
import { MissingAsset } from '../matematica/MissingAsset';

export function HeroReal() {
  return (
    <div className="w-full relative flex flex-col">
      
      {/* HERO BACKGROUND - Expected to be a voxel scene (sky, clouds, voxel terrain) */}
      <div className="absolute inset-0 z-0">
        <MissingAsset type="image" label="hero-bg.jpg (Céu, Nuvens, Terreno Voxel, Castelo)" />
      </div>

      <div className="relative z-10 w-full flex flex-col h-full">
        <HeaderReal />

        <div className="flex-1 w-full flex relative pb-16 pt-10 px-12 gap-8">
          
          {/* LEFT COLUMN: TEXT & CTA */}
          <div className="w-5/12 flex flex-col justify-center z-10 pl-6">
            
            {/* Blue badge */}
            <div className="inline-block bg-[#0f76cd] text-white font-bold px-4 py-2 rounded-full mb-6 w-max text-sm uppercase tracking-widest shadow-md border-2 border-white/20">
              • MISSÕES MATEMÁTICAS •
            </div>
            
            {/* Logo / Graphic Title Slot */}
            <div className="w-full h-[180px] mb-6">
              <MissingAsset type="image" label="hero-title-mundo-dos-blocos.png" />
            </div>

            {/* Dark Blue Box */}
            <div className="bg-[#0b294e] text-white font-bold text-xl lg:text-2xl p-4 rounded-xl shadow-lg border-2 border-sky-800 mb-6">
              Mais de 150 atividades de matemática<br />
              para o 1º ao 5º ano
            </div>
            
            {/* Subtitle */}
            <p className="text-2xl text-white font-medium mb-10 drop-shadow-lg">
              Aprender matemática pode ser uma <strong className="text-yellow-400">grande aventura!</strong>
            </p>
            
            {/* 4 Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white/95 text-slate-800 font-bold p-3 rounded-lg shadow flex items-center gap-3">
                <span className="text-2xl">📝</span> +150 atividades
              </div>
              <div className="bg-white/95 text-slate-800 font-bold p-3 rounded-lg shadow flex items-center gap-3">
                <span className="text-2xl">🎓</span> 1º ao 5º ano
              </div>
              <div className="bg-white/95 text-slate-800 font-bold p-3 rounded-lg shadow flex items-center gap-3">
                <span className="text-2xl">🖨️</span> PDF para imprimir
              </div>
              <div className="bg-white/95 text-slate-800 font-bold p-3 rounded-lg shadow flex items-center gap-3">
                <span className="text-2xl">🎮</span> Sem telas e sem complicação
              </div>
            </div>
            
            {/* Main Green CTA */}
            <a href="#planos" className="bg-[#1fc633] hover:bg-[#1bb02c] text-white font-black text-3xl py-6 px-12 rounded-full w-max shadow-[0_8px_0_#148a21] transform transition active:translate-y-[6px] active:shadow-none border-2 border-white mb-8 text-center flex items-center justify-center">
              QUERO GARANTIR AGORA →
            </a>

            {/* Bottom Line (Seals) */}
            <div className="flex items-center gap-6 text-white font-medium drop-shadow-md text-sm">
              <div className="flex items-center gap-2"><span>🔒</span> Compra segura</div>
              <div className="flex items-center gap-2"><span>⚡</span> Acesso imediato</div>
              <div className="flex items-center gap-2"><span>🛡️</span> 7 dias de garantia</div>
            </div>

          </div>

          {/* RIGHT COLUMN: MAIN COMPOSITION */}
          <div className="w-7/12 relative flex items-center justify-center">
            
            {/* Note Slot */}
            <div className="absolute top-[5%] right-[10%] w-[180px] h-[120px] z-30">
              <MissingAsset type="image" label="hero-note.png" />
            </div>

            {/* Wood Sign Slot */}
            <div className="absolute bottom-[15%] right-[5%] w-[180px] h-[220px] z-30">
              <MissingAsset type="image" label="hero-wood-sign.png" />
            </div>

            {/* Main Composition Asset (Folhas, Livros, Boy, Girl, Chest, Crystal) */}
            <div className="w-full h-[700px] z-20">
              <MissingAsset type="image" label="hero-composition.png (Crianças, Baú, Folhas)" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
