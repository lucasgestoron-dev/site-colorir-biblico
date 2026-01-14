import { Star, CheckCircle } from "lucide-react";

const HeroSection = () => {
  // 🟢 AJUSTADO: Seu link real da Cakto inserido abaixo
  const checkoutLink = "https://pay.cakto.com.br/fmajp36_722955";

  return (
    <section className="bg-orange-50 pt-12 md:pt-20 pb-0 overflow-hidden">
      <div className="container">
        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* PASSO FINAL: Tag de Preço Irresistível na Dobra */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-black uppercase tracking-wider">Acesso imediato por apenas R$ 7,90</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Desperte a{" "}
            <span className="text-primary">Criatividade</span> e a{" "}
            <span className="text-secondary">Fé</span> das Crianças
          </h2>
          
          {/* PASSO FINAL: Copy reduzida para 2 linhas (Neurociência) */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-100 mb-8 max-w-xl mx-auto">
            20 desenhos <span className="text-slate-900 font-bold underline decoration-primary/30">exclusivos</span> para imprimir agora e 
            ensinar a Bíblia com diversão e propósito.
          </p>

          {/* PASSO FINAL: Botão VERDE com Link Direto para Checkout */}
          <div className="animate-fade-in-up animation-delay-150 mb-12 flex flex-col items-center gap-4">
            <a 
              href={checkoutLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-block bg-green-500 hover:bg-green-600 text-white font-black text-xl md:text-2xl px-10 py-6 rounded-full shadow-[0_8px_0_rgb(21,128,61)] hover:shadow-[0_4px_0_rgb(21,128,61)] transition-all duration-150 transform hover:translate-y-1 active:scale-95"
            >
              SIM! QUERO LIBERAR MEUS DESENHOS AGORA
            </a>
            
            {/* CTA Secundário para indecisos */}
            <a 
              href="#samples" 
              className="text-muted-foreground hover:text-primary font-bold text-sm underline decoration-primary/20 transition-colors"
            >
              Quero ver as amostras primeiro
            </a>

            {/* FUSÃO: Estrelas e Número de Famílias (Prova Social) */}
            <div className="mt-4 flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-slate-800 font-bold ml-1 text-sm">4.9/5</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Mais de <span className="font-bold text-slate-800">2.847 famílias</span> educando com fé e diversão.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - BANNER RETANGULAR COLADO NO BLOCO DE BAIXO */}
        <div className="relative max-w-5xl mx-auto animate-fade-in-up animation-delay-200">
          <div className="relative rounded-t-2xl overflow-hidden shadow-card border-x-4 border-t-4 border-white">
            <img
              src="/hero-banner-mockup.png"
              alt="Mockup do Livro de Colorir Bíblico"
              className="w-full h-auto object-cover"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
