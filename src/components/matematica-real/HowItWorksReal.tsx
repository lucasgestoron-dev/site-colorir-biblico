import React from 'react';
import { MissingAsset } from '../matematica/MissingAsset';

export function HowItWorksReal() {
  return (
    <section
      className="w-full relative overflow-hidden bg-white select-none"
      style={{ maxWidth: '1480px', height: '380px' }}
    >
      <div className="w-full h-full flex items-center px-[30px] py-[20px] gap-[30px]">
        
        {/* 1. LEFT SIDE: CHILD PHOTO (~40% of section width) */}
        <div className="relative w-[520px] h-[340px] rounded-[24px] overflow-hidden shadow-lg border border-slate-100 flex-shrink-0">
          <img
            src="/matematica/crianca-atividades.webp"
            alt="Criança fazendo atividades"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Handwritten-like annotation in top-left */}
          <div className="absolute top-[16px] left-[16px] z-10 bg-yellow-300/95 text-[#17314f] px-3.5 py-1.5 rounded-[14px] shadow-md -rotate-3 border border-yellow-400">
            <span className="font-fredoka font-bold text-[13px] leading-tight block text-center">
              Ele aprende<br />se divertindo!
            </span>
          </div>
        </div>

        {/* 2. RIGHT SIDE: TITLE + ASSETS + 4 CARDS (~60% of width) */}
        <div className="flex-1 h-[340px] flex flex-col justify-between">
          
          {/* TOP AREA: Title & Slots for Character + Note */}
          <div className="flex items-start justify-between gap-4 h-[135px]">
            
            {/* Title */}
            <div className="max-w-[430px] pt-1">
              <h2 className="text-[#0d2b56] font-black text-[27px] leading-[1.14] tracking-tight">
                Simples de baixar,<br />
                imprimir e transformar<br />
                a rotina de estudos
              </h2>
            </div>

            {/* Slots: Character + Note */}
            <div className="flex items-center gap-3 pr-2">
              {/* Character Slot */}
              <div className="w-[145px] h-[130px]">
                <MissingAsset
                  label="how-character.png"
                  className="!min-h-0 !p-1 !text-[11px]"
                />
              </div>

              {/* Note Slot */}
              <div className="w-[155px] h-[130px]">
                <MissingAsset
                  label="how-note.png"
                  className="!min-h-0 !p-1 !text-[11px]"
                />
              </div>
            </div>

          </div>

          {/* BOTTOM AREA: 4 CARDS */}
          <div className="grid grid-cols-4 gap-[14px] w-full h-[180px]">
            
            {/* Card 1 */}
            <div className="bg-[#f8fbfe] rounded-[18px] p-4 shadow-sm border border-slate-200/70 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-[#18bd37] text-white font-black text-sm flex items-center justify-center shadow-sm">
                1
              </div>
              <div className="mt-2">
                <h3 className="text-[#0d2b56] font-black text-[15px] leading-tight">
                  Baixe o PDF
                </h3>
                <p className="text-[#506e90] font-bold text-[12px] leading-tight mt-1">
                  e tenha acesso imediato
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f8fbfe] rounded-[18px] p-4 shadow-sm border border-slate-200/70 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-[#18bd37] text-white font-black text-sm flex items-center justify-center shadow-sm">
                2
              </div>
              <div className="mt-2">
                <h3 className="text-[#0d2b56] font-black text-[15px] leading-tight">
                  Imprima
                </h3>
                <p className="text-[#506e90] font-bold text-[12px] leading-tight mt-1">
                  quando quiser, quantas vezes quiser
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f8fbfe] rounded-[18px] p-4 shadow-sm border border-slate-200/70 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-[#18bd37] text-white font-black text-sm flex items-center justify-center shadow-sm">
                3
              </div>
              <div className="mt-2">
                <h3 className="text-[#0d2b56] font-black text-[15px] leading-tight">
                  Entregue
                </h3>
                <p className="text-[#506e90] font-bold text-[12px] leading-tight mt-1">
                  para a criança e acompanhe
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f8fbfe] rounded-[18px] p-4 shadow-sm border border-slate-200/70 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-[#18bd37] text-white font-black text-sm flex items-center justify-center shadow-sm">
                4
              </div>
              <div className="mt-2">
                <h3 className="text-[#0d2b56] font-black text-[15px] leading-tight">
                  Veja a matemática
                </h3>
                <p className="text-[#506e90] font-bold text-[12px] leading-tight mt-1">
                  se tornar uma experiência positiva
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
