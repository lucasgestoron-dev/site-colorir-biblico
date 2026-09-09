import { ArrowRight, CheckCircle2 } from "lucide-react";

const checkoutLink = "https://pay.cakto.com.br/fmajp36_722955";

const HeroSection = () => {
  return (
    <section id="top" className="scroll-mt-20 bg-orange-50 py-8 md:py-10 lg:py-12 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-[1.08fr_.92fr] gap-8 md:gap-10 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full mb-4 shadow-sm border border-green-100 animate-fade-in-up">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-black uppercase tracking-wider">PDF digital • pronto para imprimir</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-foreground leading-[1.04] mb-4 animate-fade-in-up">
              Uma atividade bíblica pronta para deixar as crianças <span className="text-primary">longe das telas</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-100 mb-5 max-w-2xl mx-auto md:mx-0">
              Baixe, imprima e coloque os lápis na mesa. São <strong className="text-slate-900">30 desenhos bíblicos em tamanho A4</strong> para transformar histórias da Bíblia em uma atividade simples e participativa.
            </p>

            <div className="animate-fade-in-up animation-delay-200 flex flex-col items-center md:items-start gap-3">
              <p className="inline-flex items-center gap-2 text-green-800 font-black bg-white border border-green-100 rounded-full px-4 py-2 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Pagamento único de R$ 7,90
              </p>
              <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black text-lg md:text-xl px-8 md:px-10 py-4 rounded-2xl border-2 border-green-400 shadow-[0_8px_0_rgb(21,128,61),0_16px_32px_-18px_rgba(21,128,61,0.8)] hover:shadow-[0_4px_0_rgb(21,128,61)] transition-all duration-150 hover:translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300">
                QUERO O PDF PARA IMPRIMIR
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#samples" className="text-muted-foreground hover:text-primary font-bold text-sm underline decoration-primary/30 underline-offset-4 transition-colors">Ver páginas reais do material</a>
            </div>

          </div>

          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="absolute -inset-5 bg-primary/10 rounded-[3rem] -rotate-2" aria-hidden="true" />
            <div className="relative bg-white p-3 rounded-[2.25rem] shadow-[0_25px_65px_-28px_rgba(15,23,42,0.5)]">
              <img src="/hero-banner-30.webp" alt="Livro digital Colorir Bíblico com 30 desenhos em uma mesa com materiais de pintura" className="w-full aspect-[4/3] object-cover rounded-[1.6rem]" decoding="async" />
              <div className="flex items-center justify-between gap-3 px-3 md:px-4 py-3">
                <p className="font-black text-slate-800 text-sm md:text-base">30 histórias para escolher</p>
                <span className="shrink-0 text-xs font-black text-primary bg-primary/10 px-3 py-1.5 rounded-full">PDF A4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
