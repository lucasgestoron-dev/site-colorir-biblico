import { MissingAsset } from './MissingAsset';

export function BonusMaterials() {
  return (
    <section className="py-20 bg-amber-50/50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-fredoka font-bold text-center text-sky-900 mb-4">
          E não para por aí... <span className="text-amber-500">(Plano Completo)</span>
        </h2>
        <p className="text-center text-slate-500 mb-12">
          Além do material principal, você também recebe:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="bonus-tabuada.png" className="w-full h-32 mb-3" />
            <strong className="block text-sm text-sky-900 leading-tight">Caderno de Tabuada Ilustrado</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="bonus-probleminhas.png" className="w-full h-32 mb-3" />
            <strong className="block text-sm text-sky-900 leading-tight">Probleminhas Extras</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="bonus-progresso.png" className="w-full h-32 mb-3" />
            <strong className="block text-sm text-sky-900 leading-tight">Mapa de Progresso</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="bonus-recompensas.png" className="w-full h-32 mb-3" />
            <strong className="block text-sm text-sky-900 leading-tight">Cartões de Recompensas</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="bonus-certificado.png" className="w-full h-32 mb-3" />
            <strong className="block text-sm text-sky-900 leading-tight">Certificado de Conquistas</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <MissingAsset name="bonus-guia.png" className="w-full h-32 mb-3" />
            <strong className="block text-sm text-sky-900 leading-tight">Guia para Responsáveis</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
