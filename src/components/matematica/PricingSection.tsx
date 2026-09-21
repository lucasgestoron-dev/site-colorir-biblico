import { MissingAsset } from './MissingAsset';

export function PricingSection() {
  return (
    <section id="planos" className="py-20 bg-sky-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-fredoka font-bold text-center text-sky-900 mb-4">
          Escolha a melhor opção para você
        </h2>
        <p className="text-center text-slate-500 mb-16">
          Ambos os planos dão acesso ao material principal. O plano completo inclui os extras exclusivos.
        </p>

        <div className="grid lg:grid-cols-4 gap-8 items-center">
          
          <div className="flex flex-col items-center justify-center hidden lg:flex">
             <MissingAsset name="pricing-note.png" className="w-48 h-24 mb-4" />
             <MissingAsset name="pricing-character.png" className="w-40 h-40" />
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md border-2 border-slate-100 text-center relative flex flex-col items-center">
            <h3 className="text-xl font-fredoka font-bold text-sky-900 mb-6">PLANO ESSENCIAL</h3>
            <MissingAsset name="product-essential.png" className="w-full h-32 mb-6" />
            <ul className="text-left text-sm font-semibold text-slate-600 space-y-3 mb-8 w-full">
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> + de 150 atividades</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Organizado do 1º ao 5º ano</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Gabarito completo</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Instruções de uso</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Acesso imediato</li>
            </ul>
            <div className="text-4xl font-fredoka font-bold text-sky-900 mb-6 mt-auto">R$ 17,90</div>
            <a href="https://pay.wiapy.com/uP3mnvnQ-x" className="w-full bg-green-500 text-white font-fredoka text-lg py-4 rounded-xl shadow-[0_4px_0_#15803d] hover:translate-y-1 hover:shadow-[0_2px_0_#15803d] transition-all">
              QUERO O PLANO ESSENCIAL
            </a>
          </div>

          <div className="bg-[#043b6b] p-8 rounded-3xl shadow-xl border-2 border-[#043b6b] text-center relative transform lg:scale-105 z-10 flex flex-col items-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white font-bold text-sm px-4 py-1 rounded-full">Mais escolhido</div>
            <h3 className="text-xl font-fredoka font-bold text-white mb-6 mt-2">PLANO COMPLETO</h3>
            <MissingAsset name="product-complete.png" className="w-full h-32 mb-6" />
            <ul className="text-left text-sm font-semibold text-sky-100 space-y-3 mb-8 w-full">
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Tudo do Plano Essencial</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Caderno de Tabuada</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Probleminhas Extras</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Mapa de Progresso</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Cartões de Recompensas</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Certificado de Conquistas</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Guia para Responsáveis</li>
            </ul>
            <div className="text-4xl font-fredoka font-bold text-green-400 mb-6 mt-auto">R$ 27,90</div>
            <a href="https://pay.wiapy.com/ORKyP3WCMd" className="w-full bg-transparent border-2 border-green-400 text-white font-fredoka text-lg py-4 rounded-xl hover:bg-green-400/10 transition-all">
              QUERO O PLANO COMPLETO
            </a>
          </div>

          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3 font-semibold text-sky-900">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <MissingAsset name="icon-trust-1.png" className="w-8 h-8" />
              </div>
              Compra segura
            </div>
            <div className="flex items-center gap-3 font-semibold text-sky-900">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <MissingAsset name="icon-trust-2.png" className="w-8 h-8" />
              </div>
              Acesso imediato
            </div>
            <div className="flex items-center gap-3 font-semibold text-sky-900">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <MissingAsset name="icon-trust-3.png" className="w-8 h-8" />
              </div>
              7 dias de garantia
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
