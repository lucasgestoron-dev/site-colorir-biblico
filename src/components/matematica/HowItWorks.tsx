import { MissingAsset } from './MissingAsset';

export function HowItWorks() {
  return (
    <section id="como" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Foto da criança */}
        <div className="relative">
          <div className="absolute -top-10 -left-6 z-10 font-bangers text-red-500 text-3xl -rotate-12 drop-shadow-md">
            Ele aprende<br/>se divertindo!
            {/* Simple SVG Arrow */}
            <svg className="absolute -right-8 bottom-0 w-12 h-12 text-red-500 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
          <img src="/matematica/crianca-atividades.webp" alt="Criança estudando" className="w-full rounded-3xl object-cover shadow-lg border-4 border-white" />
        </div>

        {/* Passos */}
        <div className="relative">
          <div className="absolute -top-32 right-0 w-48 flex flex-col items-end hidden md:flex">
             <MissingAsset name="how-note.png" className="w-full h-16 mb-2" />
             <MissingAsset name="how-character.png" className="w-32 h-32" />
          </div>

          <h2 className="text-4xl font-fredoka font-bold text-sky-900 mb-10 leading-tight">
            Simples de baixar,<br/>
            imprimir e transformar<br/>
            a rotina de estudos
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg mb-3">1</div>
              <strong className="block text-sky-900 font-semibold mb-1">Baixe o PDF</strong>
              <span className="text-sm text-slate-500">e tenha acesso imediato</span>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg mb-3">2</div>
              <strong className="block text-sky-900 font-semibold mb-1">Imprima</strong>
              <span className="text-sm text-slate-500">quando quiser, quantas vezes quiser</span>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg mb-3">3</div>
              <strong className="block text-sky-900 font-semibold mb-1">Entregue</strong>
              <span className="text-sm text-slate-500">para a criança e acompanhe</span>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg mb-3">4</div>
              <strong className="block text-sky-900 font-semibold mb-1">Veja a matemática</strong>
              <span className="text-sm text-slate-500">se tornar uma experiência positiva</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
