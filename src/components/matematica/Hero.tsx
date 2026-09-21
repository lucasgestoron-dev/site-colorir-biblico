import { MissingAsset } from './MissingAsset';

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[900px] pt-32 pb-16 flex items-center bg-sky-100">
      {/* Background placeholders */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <MissingAsset name="hero-scenery-left.png / hero-scenery-right.png (Fundo)" className="w-full h-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-8 relative z-10 w-full">
        {/* Coluna Esquerda: Copy */}
        <div className="flex flex-col items-start space-y-6">
          <div className="bg-sky-600 text-white font-fredoka font-bold px-4 py-1 rounded-full text-sm">
            ★ MISSÕES MATEMÁTICAS ★
          </div>
          
          <div className="w-full max-w-[400px]">
            <MissingAsset name="hero-logo-mundo-blocos.png (Letreiro 3D)" className="h-[120px]" />
          </div>

          <div className="bg-sky-900 text-white font-semibold px-5 py-2 rounded-full">
            Mais de 150 atividades de matemática para o 1º ao 5º ano
          </div>

          <p className="text-xl font-fredoka text-sky-700">
            Aprender matemática pode ser uma grande aventura!
          </p>

          {/* 4 Benefícios (HTML/CSS) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
            <div className="bg-white p-2 rounded-xl text-center shadow border border-slate-100">
              <MissingAsset name="icon-book.png" className="h-8 mb-2 mx-auto" />
              <strong className="block text-sm text-slate-800">+150</strong>
              <span className="text-xs text-slate-500">atividades</span>
            </div>
            <div className="bg-white p-2 rounded-xl text-center shadow border border-slate-100">
              <MissingAsset name="icon-grades.png" className="h-8 mb-2 mx-auto" />
              <strong className="block text-sm text-slate-800">1º ao 5º</strong>
              <span className="text-xs text-slate-500">ano</span>
            </div>
            <div className="bg-white p-2 rounded-xl text-center shadow border border-slate-100">
              <MissingAsset name="icon-pdf.png" className="h-8 mb-2 mx-auto" />
              <strong className="block text-sm text-slate-800">PDF para</strong>
              <span className="text-xs text-slate-500">imprimir</span>
            </div>
            <div className="bg-white p-2 rounded-xl text-center shadow border border-slate-100">
              <MissingAsset name="icon-noscreen.png" className="h-8 mb-2 mx-auto" />
              <strong className="block text-sm text-slate-800">Sem telas</strong>
              <span className="text-xs text-slate-500">sem complicação</span>
            </div>
          </div>

          <a href="#planos" className="bg-green-600 text-white text-xl font-fredoka px-8 py-4 rounded-full shadow-[0_6px_0_#15803d] hover:translate-y-1 hover:shadow-[0_4px_0_#15803d] transition-all">
            QUERO GARANTIR AGORA →
          </a>

          <div className="flex gap-4 text-sm font-semibold text-slate-600">
            <span>Compra segura</span>
            <span>Acesso imediato</span>
            <span>7 dias de garantia</span>
          </div>
        </div>

        {/* Coluna Direita: Composição Visual */}
        <div className="relative hero-art hidden md:block border-4 border-dashed border-sky-300 rounded-2xl bg-white/50 min-h-[500px]">
           <div className="absolute top-0 right-0 w-full h-full p-4 grid grid-cols-2 grid-rows-4 gap-2 opacity-80">
              <MissingAsset name="hero-worksheets-stack.png" />
              <MissingAsset name="hero-product-main.png" />
              <MissingAsset name="hero-boy.png" />
              <MissingAsset name="hero-girl.png" />
              <MissingAsset name="hero-chest.png" />
              <MissingAsset name="hero-diamond.png" />
              <MissingAsset name="hero-wood-sign.png" />
              <MissingAsset name="hero-note.png" />
           </div>
        </div>
      </div>
    </section>
  );
}
