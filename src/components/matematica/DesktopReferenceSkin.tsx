import React, { useState } from 'react';

export function DesktopReferenceSkin() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { id: 1, answer: "Você receberá o acesso por e-mail imediatamente após a aprovação do pagamento." },
    { id: 2, answer: "Não, é 100% digital em formato PDF para você imprimir." },
    { id: 3, answer: "Sim, você pode imprimir quantas vezes precisar." },
    { id: 4, answer: "Você tem 7 dias para avaliar. Se não gostar, devolvemos 100% do dinheiro." },
    { id: 5, answer: "O material é ideal para crianças do 1º ao 5º ano." },
    { id: 6, answer: "Temos uma equipe de suporte pronta para te ajudar via e-mail ou WhatsApp." }
  ];

  return (
    <div className="w-full bg-slate-100 flex flex-col items-center">
      <div className="w-full relative mx-auto" style={{ maxWidth: '1480px' }}>
        
        {/* 01 HERO */}
        <div className="relative w-full">
          <img src="/matematica/reference-skin/01-hero@2x.png" alt="Hero" className="w-full h-auto block" />
          
          {/* Header Links */}
          <a href="#" className="absolute top-[3%] left-[30%] w-[5%] h-[8%] cursor-pointer" aria-label="Início"></a>
          <a href="#como" className="absolute top-[3%] left-[36%] w-[10%] h-[8%] cursor-pointer" aria-label="Como funciona"></a>
          <a href="#receber" className="absolute top-[3%] left-[47%] w-[12%] h-[8%] cursor-pointer" aria-label="O que vai receber"></a>
          <a href="#depoimentos" className="absolute top-[3%] left-[60%] w-[10%] h-[8%] cursor-pointer" aria-label="Depoimentos"></a>
          <a href="#faq" className="absolute top-[3%] left-[71%] w-[12%] h-[8%] cursor-pointer" aria-label="Perguntas frequentes"></a>
          
          {/* Header CTA */}
          <a href="#planos" className="absolute top-[2.5%] right-[2%] w-[13%] h-[9%] cursor-pointer rounded-full" aria-label="Quero garantir agora"></a>
          
          {/* Main Hero CTA */}
          <a href="#planos" className="absolute top-[80%] left-[8%] w-[22%] h-[12%] cursor-pointer rounded-full" aria-label="Quero garantir agora"></a>
        </div>

        {/* 02 ACTIVITIES */}
        <div className="relative w-full">
          <img src="/matematica/reference-skin/02-activities@2x.png" alt="Activities" className="w-full h-auto block" />
        </div>

        {/* 03 HOW IT WORKS */}
        <div id="como" className="relative w-full">
          <img src="/matematica/reference-skin/03-how-it-works@2x.png" alt="How it works" className="w-full h-auto block" />
        </div>

        {/* 04 AUDIENCE */}
        <div className="relative w-full">
          <img src="/matematica/reference-skin/04-audience@2x.png" alt="Audience" className="w-full h-auto block" />
        </div>

        {/* 05 BENEFITS */}
        <div className="relative w-full">
          <img src="/matematica/reference-skin/05-benefits@2x.png" alt="Benefits" className="w-full h-auto block" />
        </div>

        {/* 06 TESTIMONIALS */}
        <div id="depoimentos" className="relative w-full">
          <img src="/matematica/reference-skin/06-testimonials@2x.png" alt="Testimonials" className="w-full h-auto block" />
        </div>

        {/* 07 INCLUDED */}
        <div id="receber" className="relative w-full">
          <img src="/matematica/reference-skin/07-included@2x.png" alt="Included" className="w-full h-auto block" />
        </div>

        {/* 08 BONUSES */}
        <div className="relative w-full">
          <img src="/matematica/reference-skin/08-bonuses@2x.png" alt="Bonuses" className="w-full h-auto block" />
        </div>

        {/* 09 PRICING */}
        <div id="planos" className="relative w-full">
          <img src="/matematica/reference-skin/09-pricing@2x.png" alt="Pricing" className="w-full h-auto block" />
          
          {/* Plan Essencial CTA */}
          <a href="https://pay.wiapy.com/uP3mnvnQ-x" className="absolute bottom-[10%] left-[30%] w-[16%] h-[11%] cursor-pointer rounded-full" aria-label="Plano Essencial"></a>
          
          {/* Plan Completo CTA */}
          <a href="https://pay.wiapy.com/ORKyP3WCMd" className="absolute bottom-[12%] right-[29%] w-[18%] h-[12%] cursor-pointer rounded-full" aria-label="Plano Completo"></a>
        </div>

        {/* 10 FAQ */}
        <div id="faq" className="relative w-full">
          <img src="/matematica/reference-skin/10-faq@2x.png" alt="FAQ" className="w-full h-auto block" />
          
          {/* Transparent buttons over questions. Assuming 2 columns, 3 rows based on typical layout. */}
          {/* Coluna 1 */}
          <button onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} className="absolute top-[35%] left-[10%] w-[35%] h-[14%] cursor-pointer" aria-label="Pergunta 1"></button>
          <button onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} className="absolute top-[52%] left-[10%] w-[35%] h-[14%] cursor-pointer" aria-label="Pergunta 2"></button>
          <button onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} className="absolute top-[69%] left-[10%] w-[35%] h-[14%] cursor-pointer" aria-label="Pergunta 3"></button>
          {/* Coluna 2 */}
          <button onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} className="absolute top-[35%] left-[48%] w-[35%] h-[14%] cursor-pointer" aria-label="Pergunta 4"></button>
          <button onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} className="absolute top-[52%] left-[48%] w-[35%] h-[14%] cursor-pointer" aria-label="Pergunta 5"></button>
          <button onClick={() => setOpenFaq(openFaq === 6 ? null : 6)} className="absolute top-[69%] left-[48%] w-[35%] h-[14%] cursor-pointer" aria-label="Pergunta 6"></button>

          {/* Render answers below the image if open */}
          {openFaq && (
            <div className="absolute left-[10%] bottom-0 transform translate-y-full z-20 w-[80%] bg-white border border-sky-100 shadow-xl rounded-xl p-6 mt-4">
              <h4 className="font-fredoka font-bold text-sky-900 mb-2">Resposta:</h4>
              <p className="text-slate-600">{faqs.find(f => f.id === openFaq)?.answer}</p>
              <button onClick={() => setOpenFaq(null)} className="mt-4 text-sm text-sky-600 font-bold">Fechar</button>
            </div>
          )}
        </div>

        {/* 11 GUARANTEE */}
        <div className="relative w-full">
          <img src="/matematica/reference-skin/11-guarantee@2x.png" alt="Guarantee" className="w-full h-auto block" />
          
          <a href="#planos" className="absolute top-[25%] right-[10%] w-[20%] h-[50%] cursor-pointer rounded-full" aria-label="Quero garantir agora"></a>
        </div>

        {/* 12 FOOTER */}
        <div className="relative w-full">
          <img src="/matematica/reference-skin/12-footer@2x.png" alt="Footer" className="w-full h-auto block" />
        </div>

      </div>
    </div>
  );
}
