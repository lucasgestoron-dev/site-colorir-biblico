export function GuaranteeSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-sky-50 to-blue-50">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
            <span className="text-4xl font-bold text-white">7</span>
          </div>
          <div>
            <h2 className="text-2xl font-fredoka font-bold text-sky-900 leading-tight mb-2">
              Garantia de 7 dias<br/>Risco zero para você!
            </h2>
            <p className="text-sm text-slate-600">
              Se por qualquer motivo você não ficar satisfeito, é só pedir o reembolso em até 7 dias. Sem burocracia.
            </p>
          </div>
        </div>
        <a href="#planos" className="bg-green-600 text-white font-fredoka px-8 py-4 rounded-full shadow-[0_4px_0_#15803d] hover:translate-y-1 hover:shadow-[0_2px_0_#15803d] transition-all whitespace-nowrap">
          QUERO GARANTIR AGORA →
        </a>
      </div>
    </section>
  );
}
