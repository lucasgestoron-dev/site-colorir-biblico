export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-amber-50/30">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-fredoka font-bold text-center text-sky-900 mb-4">
          O que as mães estão dizendo
        </h2>
        <p className="text-center text-slate-500 mb-12">
          Mensagens reais de quem já está usando o material.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#e8f5e9] p-6 rounded-2xl shadow-sm border border-[#c8e6c9] relative">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://i.pravatar.cc/100?img=5" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
              <strong className="text-sky-900">Fernanda</strong>
              <svg className="w-5 h-5 text-green-500 ml-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              Meu filho amou! Ele que sempre reclamava de matemática, agora pede pra fazer as atividades do Mundo dos Blocos. 😍
            </p>
            <div className="text-xs text-slate-400 text-right">10:24</div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#e8f5e9] p-6 rounded-2xl shadow-sm border border-[#c8e6c9] relative">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://i.pravatar.cc/100?img=9" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
              <strong className="text-sky-900">Camila</strong>
              <svg className="w-5 h-5 text-green-500 ml-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              Estou usando nas férias e está sendo perfeito. As atividades são lindas e bem pensadas. Dá pra ver que foi feito com muito carinho. 💙
            </p>
            <div className="text-xs text-slate-400 text-right">14:37</div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#e8f5e9] p-6 rounded-2xl shadow-sm border border-[#c8e6c9] relative">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
              <strong className="text-sky-900">Juliana</strong>
              <svg className="w-5 h-5 text-green-500 ml-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              Comprei e já imprimi. Ele fez sem reclamar e ainda pediu mais! Vale muito a pena!
            </p>
            <div className="text-xs text-slate-400 text-right">19:37</div>
          </div>

        </div>
      </div>
    </section>
  );
}
