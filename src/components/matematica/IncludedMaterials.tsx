import { MissingAsset } from './MissingAsset';

export function IncludedMaterials() {
  return (
    <section id="receber" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-fredoka font-bold text-center text-sky-900 mb-4">
          Tudo o que você vai receber
        </h2>
        <p className="text-center text-slate-500 mb-12">
          Material completo, organizado e pronto para usar.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="icon-receive-1.png" className="w-12 h-12 mb-3 mx-auto rounded-full" />
            <strong className="block text-sm text-sky-900">PDF principal</strong>
            <span className="text-xs text-slate-500">+ de 150 atividades</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="icon-receive-2.png" className="w-12 h-12 mb-3 mx-auto rounded-full" />
            <strong className="block text-sm text-sky-900">Organizado do</strong>
            <span className="text-xs text-slate-500">1º ao 5º ano</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="icon-receive-3.png" className="w-12 h-12 mb-3 mx-auto rounded-full" />
            <strong className="block text-sm text-sky-900">Gabarito completo</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="icon-receive-4.png" className="w-12 h-12 mb-3 mx-auto rounded-full" />
            <strong className="block text-sm text-sky-900">Instruções de uso</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="icon-receive-5.png" className="w-12 h-12 mb-3 mx-auto rounded-full" />
            <strong className="block text-sm text-sky-900">Acesso imediato</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="icon-receive-6.png" className="w-12 h-12 mb-3 mx-auto rounded-full" />
            <strong className="block text-sm text-sky-900">Para imprimir</strong>
            <span className="text-xs text-slate-500">quando quiser</span>
          </div>
        </div>
      </div>
    </section>
  );
}
