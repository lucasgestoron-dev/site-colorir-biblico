export function ActivitiesPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-fredoka font-bold text-center text-sky-900 mb-4">
          Veja como são as atividades por dentro
        </h2>
        <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
          Páginas reais do material. Atividades criativas, com o universo de blocos que as crianças adoram.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 font-fredoka text-sm font-semibold">
          <span className="bg-sky-600 text-white px-6 py-2 rounded-full">CONTAGEM</span>
          <span className="text-slate-500 px-6 py-2">SOMA E SUBTRAÇÃO</span>
          <span className="text-slate-500 px-6 py-2">PROBLEMAS</span>
          <span className="text-slate-500 px-6 py-2">FRAÇÕES</span>
          <span className="text-slate-500 px-6 py-2">MEDIDAS</span>
          <span className="text-slate-500 px-6 py-2">DESAFIOS LÓGICOS</span>
        </div>

        {/* Carousel */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-sky-900 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">‹</button>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 w-full">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <div key={num} className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                <img src={`/matematica/atividade-${num}.webp`} alt={`Atividade ${num}`} className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </div>
          <button className="w-10 h-10 rounded-full bg-sky-900 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">›</button>
        </div>
      </div>
    </section>
  );
}
