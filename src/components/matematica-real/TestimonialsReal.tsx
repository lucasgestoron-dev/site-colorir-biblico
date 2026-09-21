import React from 'react';

const testimonialCards = [
  {
    initial: '1',
    name: 'Depoimento real',
    message: 'Insira aqui uma mensagem real de uma família que já utilizou o material.',
    time: '10:24'
  },
  {
    initial: '2',
    name: 'Depoimento real',
    message: 'Este card está pronto para receber um feedback verdadeiro sobre a experiência com as atividades.',
    time: '14:07'
  },
  {
    initial: '3',
    name: 'Depoimento real',
    message: 'Substitua este texto por uma mensagem autêntica de cliente antes da publicação final.',
    time: '19:27'
  }
];

export function TestimonialsReal() {
  return (
    <section className="w-[1480px] h-[310px] relative overflow-hidden bg-[#fffdf8] select-none">
      <div className="absolute inset-0 flex flex-col items-center">
        <h2 className="text-[#0d2b56] font-black text-[34px] leading-none tracking-tight mt-[28px]">
          O que as mães estão dizendo
        </h2>

        <p className="text-[#4f6c8c] font-bold text-[15px] mt-[8px]">
          Espaço preparado para mensagens reais de quem já está usando o material.
        </p>

        <div className="grid grid-cols-3 gap-[24px] w-[1230px] h-[180px] mt-[22px]">
          {testimonialCards.map((card, idx) => (
            <div
              key={idx}
              className="relative h-full rounded-[18px] bg-[#dff7df] border border-[#c7edc8] shadow-[0_6px_18px_rgba(13,43,86,0.08)] px-[18px] py-[16px]"
            >
              <div className="absolute left-[16px] top-[12px] w-[54px] h-[54px] rounded-full bg-white border-[4px] border-[#bce9c1] shadow-sm flex items-center justify-center">
                <span className="text-[#0d2b56] font-black text-[18px]">{card.initial}</span>
              </div>

              <div className="absolute left-[82px] right-[18px] top-[14px] flex items-center justify-between">
                <span className="text-[#17314f] font-black text-[17px]">{card.name}</span>
                <div className="flex items-center gap-[5px] text-[#1ccf65]">
                  <span className="w-[16px] h-[16px] rounded-full border-[3px] border-current inline-block" />
                  <span className="w-[12px] h-[12px] rounded-[4px] border-[3px] border-current inline-block" />
                </div>
              </div>

              <div className="absolute left-[82px] right-[18px] top-[51px] bottom-[14px] bg-white rounded-[12px] px-[16px] py-[12px] shadow-sm">
                <p className="text-[#24384f] font-semibold text-[16px] leading-[1.35] pr-[10px]">
                  {card.message}
                </p>
                <span className="absolute right-[10px] bottom-[7px] text-[#6c7d8f] font-bold text-[11px]">
                  {card.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
