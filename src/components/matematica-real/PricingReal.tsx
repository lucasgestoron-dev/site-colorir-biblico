import React from 'react';
import { MissingAsset } from '../matematica/MissingAsset';

export function PricingReal() {
  return (
    <section
      id="planos"
      className="w-[1480px] h-[502px] relative overflow-hidden bg-[#edf7fe] flex flex-col items-center select-none"
    >
      {/* Header */}
      <h2 className="text-[#0d2b56] font-black text-[30px] tracking-tight pt-[18px] text-center">
        Escolha a melhor opção para você
      </h2>
      <p className="text-[#506e90] font-semibold text-[14px] mt-[3px] text-center">
        Ambos os planos dão acesso ao material principal. O plano completo inclui os extras exclusivos.
      </p>

      {/* 3 Blocks Layout */}
      <div className="w-[1380px] h-[410px] mt-[14px] flex items-center justify-between">
        
        {/* BLOCK A: Character & Speech Bubble */}
        <div className="w-[230px] h-full flex flex-col items-center justify-center pt-2">
          {/* Speech Bubble / Badge */}
          <div className="w-[190px] h-[75px] mb-3 flex items-center justify-center">
            <MissingAsset
              label="pricing-left-badge.png"
              className="!min-h-0 !p-1 !text-[9px]"
            />
          </div>

          {/* Character Asset Slot */}
          <div className="w-[180px] h-[220px] flex items-center justify-center">
            <MissingAsset
              label="pricing-left-character.png"
              className="!min-h-0 !p-1 !text-xs"
            />
          </div>
        </div>

        {/* BLOCK B: Two Pricing Cards */}
        <div className="w-[820px] h-full flex items-center justify-center gap-[24px]">
          
          {/* Card 1: PLANO ESSENCIAL */}
          <div className="w-[390px] h-[400px] bg-white rounded-[24px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="text-center font-black text-[#0d2b56] text-[17px] tracking-wider uppercase mb-3">
                PLANO ESSENCIAL
              </div>
              
              <div className="flex items-center gap-3">
                {/* Product Cover Slot */}
                <div className="w-[125px] h-[175px] rounded-[10px] overflow-hidden bg-slate-50 flex-shrink-0 flex items-center justify-center">
                  <MissingAsset
                    label="pricing-essential-cover.png"
                    className="!min-h-0 !p-1 !text-[9px]"
                  />
                </div>

                {/* Items List */}
                <ul className="flex flex-col gap-[7px] text-[#2c4768] font-bold text-[12px] flex-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#18bd37] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>+ de 150 atividades</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#18bd37] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Organizado do 1º ao 5º ano</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#18bd37] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Gabarito completo</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#18bd37] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Instruções de uso</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#18bd37] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Acesso imediato</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-2 border-t border-slate-100 flex flex-col items-center">
              <div className="text-[#0d2b56] font-black text-[30px] leading-tight mb-2">
                R$ 17,90
              </div>
              <a
                href="https://pay.wiapy.com/uP3mnvnQ-x"
                className="w-full bg-[#18bd37] hover:bg-[#15a330] text-white font-black text-[13px] py-3 rounded-full shadow-[0_4px_0_#108328] text-center tracking-wide transition active:translate-y-[2px]"
              >
                QUERO O PLANO ESSENCIAL
              </a>
            </div>
          </div>

          {/* Card 2: PLANO COMPLETO (Featured) */}
          <div className="w-[400px] h-[410px] bg-gradient-to-b from-[#022f5c] to-[#011c38] rounded-[24px] p-5 shadow-[0_12px_32px_rgba(2,47,92,0.35)] border-2 border-[#1c84d6] flex flex-col justify-between text-white relative">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#18bd37] text-white font-black text-[11px] px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
              Mais escolhido
            </div>

            <div>
              <div className="text-center font-black text-white text-[17px] tracking-wider uppercase mb-3 mt-1">
                PLANO COMPLETO
              </div>
              
              <div className="flex items-center gap-3">
                {/* Product Cover Slot */}
                <div className="w-[130px] h-[180px] rounded-[10px] overflow-hidden bg-sky-950/60 flex-shrink-0 flex items-center justify-center">
                  <MissingAsset
                    label="pricing-complete-cover.png"
                    className="!min-h-0 !p-1 !text-[9px]"
                  />
                </div>

                {/* Items List */}
                <ul className="flex flex-col gap-[5px] text-[#e0edfd] font-bold text-[11.5px] flex-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#34d399] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Tudo do Plano Essencial</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#34d399] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Caderno de Tabuada</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#34d399] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Probleminhas Extras</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#34d399] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Mapa de Progresso</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#34d399] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Cartões de Recompensas</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#34d399] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Certificado de Conquistas</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#34d399] font-black text-sm leading-none mt-0.5">✓</span>
                    <span>Guia para Responsáveis</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-2 border-t border-sky-900/60 flex flex-col items-center">
              <div className="text-[#34d399] font-black text-[30px] leading-tight mb-2">
                R$ 27,90
              </div>
              <a
                href="https://pay.wiapy.com/ORKyP3WCMd"
                className="w-full bg-[#18bd37] hover:bg-[#15a330] text-white font-black text-[13px] py-3 rounded-full shadow-[0_4px_0_#108328] text-center tracking-wide transition active:translate-y-[2px]"
              >
                QUERO O PLANO COMPLETO
              </a>
            </div>
          </div>

        </div>

        {/* BLOCK C: Trust items */}
        <div className="w-[210px] h-full flex flex-col justify-center gap-6 pl-2">
          
          {/* Trust item 1 */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
              <MissingAsset
                label="pricing-secure-icon.png"
                className="!min-h-0 !p-0.5 !text-[8px]"
              />
            </div>
            <span className="font-extrabold text-[#0d2b56] text-[14px]">Compra segura</span>
          </div>

          {/* Trust item 2 */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
              <MissingAsset
                label="pricing-access-icon.png"
                className="!min-h-0 !p-0.5 !text-[8px]"
              />
            </div>
            <span className="font-extrabold text-[#0d2b56] text-[14px]">Acesso imediato</span>
          </div>

          {/* Trust item 3 */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
              <MissingAsset
                label="pricing-guarantee-icon.png"
                className="!min-h-0 !p-0.5 !text-[8px]"
              />
            </div>
            <span className="font-extrabold text-[#0d2b56] text-[14px]">7 dias de garantia</span>
          </div>

        </div>

      </div>
    </section>
  );
}
