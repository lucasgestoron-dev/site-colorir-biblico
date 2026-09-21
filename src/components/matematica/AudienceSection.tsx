import { MissingAsset } from './MissingAsset';

export function AudienceSection() {
  return (
    <section className="py-20 bg-amber-50/50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-fredoka font-bold text-center text-sky-900 mb-12">
          Esse material é ideal para:
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <MissingAsset name="audience-home.png" className="w-16 h-16 mb-4 rounded-full" />
            <strong className="text-sm text-sky-900 leading-tight">Pais que querem reforço em casa</strong>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <MissingAsset name="audience-backpack.png" className="w-16 h-16 mb-4 rounded-full" />
            <strong className="text-sm text-sky-900 leading-tight">Crianças que resistem à matemática</strong>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <MissingAsset name="audience-controller.png" className="w-16 h-16 mb-4 rounded-full" />
            <strong className="text-sm text-sky-900 leading-tight">Crianças que gostam do universo de blocos</strong>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <MissingAsset name="audience-chart.png" className="w-16 h-16 mb-4 rounded-full" />
            <strong className="text-sm text-sky-900 leading-tight">Professores e apoio escolar</strong>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <MissingAsset name="audience-calendar.png" className="w-16 h-16 mb-4 rounded-full" />
            <strong className="text-sm text-sky-900 leading-tight">Férias e momentos livres</strong>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <MissingAsset name="audience-heart.png" className="w-16 h-16 mb-4 rounded-full" />
            <strong className="text-sm text-sky-900 leading-tight">Famílias que buscam aprendizado leve e significativo</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
