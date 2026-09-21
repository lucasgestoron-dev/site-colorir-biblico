import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Como recebo o material?",
    answer: "Após a confirmação do pagamento, você recebe acesso ao material digital para baixar."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim. Depois de baixar o material, você pode imprimir novamente sempre que precisar para uso pessoal."
  },
  {
    question: "Serve para qual idade?",
    answer: "O material foi organizado para crianças do 1º ao 5º ano, respeitando diferentes níveis de aprendizagem."
  },
  {
    question: "O material é físico?",
    answer: "Não. O produto é digital e entregue em formato PDF para baixar e imprimir."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias de garantia. Se decidir que o material não é para você, pode solicitar o reembolso dentro desse prazo."
  },
  {
    question: "E se eu tiver dúvidas?",
    answer: "Você pode entrar em contato pelo canal de suporte informado após a compra."
  }
];

export function FaqReal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  const col1 = faqs.slice(0, 3);
  const col2 = faqs.slice(3, 6);

  return (
    <section
      id="faq"
      className="w-[1480px] h-[266px] relative overflow-hidden bg-[#fffdf8] flex flex-col items-center select-none"
    >
      {/* Central Title */}
      <h2 className="text-[#0d2b56] font-black text-[28px] tracking-tight pt-[16px] pb-[12px] text-center">
        Perguntas frequentes
      </h2>

      {/* Main Content: 2 Accordion Columns + Character Block */}
      <div className="w-[1380px] flex items-start justify-between gap-[24px]">
        
        {/* Left Column (3 items) */}
        <div className="flex-1 flex flex-col gap-[9px]">
          {col1.map((item, i) => {
            const idx = i;
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] shadow-[0_3px_12px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-3 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-[#0d2b56] font-black text-[13.5px] pr-2">
                    {item.question}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#0d2b56] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-3 pt-0 text-[#4a6785] font-semibold text-[12px] leading-relaxed border-t border-slate-50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column (3 items) */}
        <div className="flex-1 flex flex-col gap-[9px]">
          {col2.map((item, i) => {
            const idx = i + 3;
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] shadow-[0_3px_12px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-3 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-[#0d2b56] font-black text-[13.5px] pr-2">
                    {item.question}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#0d2b56] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-3 pt-0 text-[#4a6785] font-semibold text-[12px] leading-relaxed border-t border-slate-50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Character & Speech Bubble (Right Side) */}
        <div className="w-[200px] h-[190px] flex flex-col items-center justify-between flex-shrink-0 relative -mt-3">
          {/* Yellow Speech Bubble */}
          <div className="relative bg-[#fff9db] text-[#0d2b56] font-black text-[10.5px] leading-tight px-3 py-2 rounded-[14px] shadow-sm border border-[#fde047] text-center -rotate-2">
            AINDA COM DÚVIDAS?<br />
            ESTAMOS AQUI PARA AJUDAR!
            {/* Bubble Tail */}
            <div className="absolute -bottom-1 left-8 w-2.5 h-2.5 bg-[#fff9db] border-b border-r border-[#fde047] transform rotate-45"></div>
          </div>

          {/* Character */}
          <div className="w-[145px] h-[130px] flex items-center justify-center">
            <img
              src="/matematica/assets/pricing/pricing-left-character.png"
              alt="Personagem com dúvidas"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
