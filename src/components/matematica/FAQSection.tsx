import { useState } from 'react';
import { MissingAsset } from './MissingAsset';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    ["Como recebo o material?", "Você receberá o acesso por e-mail imediatamente após a aprovação do pagamento."],
    ["O material é físico?", "Não, é 100% digital em formato PDF para você imprimir."],
    ["Posso imprimir quantas vezes quiser?", "Sim, você pode imprimir quantas vezes precisar."],
    ["Como funciona a garantia?", "Você tem 7 dias para avaliar. Se não gostar, devolvemos 100% do dinheiro."],
    ["Serve para qual idade?", "O material é ideal para crianças do 1º ao 5º ano."],
    ["E se eu tiver dúvidas?", "Temos uma equipe de suporte pronta para te ajudar via e-mail ou WhatsApp."]
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-fredoka font-bold text-center text-sky-900 mb-12">
          Perguntas frequentes
        </h2>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 grid md:grid-cols-2 gap-4">
            {faqs.map(([question, answer], index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-sky-900 hover:bg-slate-50 transition-colors"
                >
                  {question}
                  <span className="text-xl">{openIndex === index ? '▾' : '▸'}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-slate-600 text-sm">
                    {answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center">
             <MissingAsset name="faq-note.png" className="w-48 h-24 mb-4" />
             <MissingAsset name="faq-character.png" className="w-40 h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
