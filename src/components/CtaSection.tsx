import { ArrowRight, CheckCircle2, FileText, Lock, Printer, Sparkles } from "lucide-react";

const checkoutLink = "https://pay.cakto.com.br/fmajp36_722955";

const included = [
  "30 desenhos bíblicos para colorir",
  "Páginas em tamanho A4",
  "Títulos e referências bíblicas",
  "Arquivo digital em PDF",
];

const CtaSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 gradient-cta relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-bold mb-6 border border-white/20">
            <Printer className="w-4 h-4" />
            <span>Imprima a página que quiser usar</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-cta-foreground mb-5 leading-tight">
            Tenha uma atividade bíblica pronta sempre que precisar
          </h2>
          <p className="text-cta-foreground/90 mb-9 text-lg max-w-2xl mx-auto">
            Um único arquivo com 30 opções para escolher, imprimir e colorir com as crianças.
          </p>

          <div className="grid md:grid-cols-[1fr_320px] gap-6 items-stretch max-w-3xl mx-auto text-left">
            <div className="bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 backdrop-blur-sm">
              <p className="text-white font-bold mb-4">O que está incluído:</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative bg-white p-6 md:p-7 rounded-3xl border-4 border-yellow-300 shadow-[0_24px_70px_-20px_rgba(15,23,42,0.55)] text-center overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-200/50 rounded-full" aria-hidden="true" />
              <div className="relative">
                <p className="inline-flex items-center gap-2 text-sm text-amber-700 bg-yellow-100 px-3 py-1.5 rounded-full font-black uppercase tracking-wider mb-3">
                  <Sparkles className="w-4 h-4" /> Pagamento único
                </p>
                <div className="text-7xl font-black text-slate-900 tracking-tighter leading-none">
                  <span className="text-2xl align-top mr-1">R$</span>12,90
                </div>
                <p className="text-slate-500 mt-2 text-sm font-semibold">30 desenhos em um único PDF</p>
                <a
                  href={checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-base px-5 py-4 rounded-2xl font-black shadow-[0_7px_0_rgb(21,128,61)] hover:shadow-[0_3px_0_rgb(21,128,61)] transition-all duration-150 hover:translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
                >
                  QUERO O PDF PARA IMPRIMIR <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-xs text-slate-500 mt-4">Produto digital • acesso após a confirmação</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/85">
            <span className="inline-flex items-center gap-2"><Lock className="w-4 h-4" /> Pagamento processado pela Cakto</span>
            <span className="inline-flex items-center gap-2"><FileText className="w-4 h-4" /> Nenhum produto físico será enviado</span>
          </div>
          <p className="mt-4 text-xs text-white/70">
            A plataforma informa o valor total da compra antes da confirmação do pagamento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
