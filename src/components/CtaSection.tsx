import { Shield, Zap, CheckCircle2, Lock } from "lucide-react"; 
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  // 🔴 NÃO ESQUEÇA DE COLAR SEU LINK DO CHECKOUT AQUI
  const checkoutLink = "https://SEU_LINK_DO_CHECKOUT_AQUI"; 

  return (
    <section id="pricing" className="py-16 md:py-24 gradient-cta relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* PASSO 2: Urgência Reforçada - Oferta de Lançamento */}
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-slate-900 text-xs md:text-sm font-black mb-6 border-2 border-white/20 animate-bounce">
            🚀 OFERTA EXCLUSIVA DE LANÇAMENTO
          </span>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cta-foreground mb-6 leading-tight">
            Garanta Agora os <span className="underline decoration-yellow-400">20 Desenhos Únicos</span> para o seu Pequeno!
          </h3>

          <p className="text-cta-foreground/90 mb-8 text-lg font-medium">
            Aproveite o preço promocional antes que a oferta expire.
          </p>

          {/* PASSO 2: Bloco de Preço com mais Contraste */}
          <div className="mb-10 bg-white p-8 rounded-3xl border-4 border-yellow-400 shadow-2xl inline-block w-full max-w-sm transform rotate-1 md:rotate-2">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-xl text-slate-400 line-through font-bold">
                R$ 29,90
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-green-500 text-white font-black tracking-wide">
                73% OFF
              </span>
            </div>
            <div className="text-7xl font-black text-slate-900 tracking-tighter">
              <span className="text-3xl align-top mr-1">R$</span>7,90
            </div>
            <p className="text-slate-500 mt-2 text-sm font-bold uppercase tracking-widest">
              Pagamento único • Acesso vitalício
            </p>
          </div>

          {/* PASSO 2: CTA Sincronizado com o Hero (Alta Conversão) */}
          <div className="mb-8">
            <a href={checkoutLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white text-xl md:text-2xl px-10 md:px-16 py-10 rounded-full font-black shadow-[0_10px_0_rgb(21,128,61)] hover:shadow-[0_5px_0_rgb(21,128,61)] transition-all duration-150 transform hover:translate-y-1 active:scale-95 mb-4"
              >
                SIM! QUERO LIBERAR MEUS DESENHOS AGORA
              </Button>
            </a>
            <div className="flex items-center justify-center gap-2 text-cta-foreground/90 font-bold">
              <Lock className="w-4 h-4" />
              <p className="text-sm">Ambiente de pagamento 100% seguro</p>
            </div>
          </div>

          {/* PASSO 2: Garantia Expandida e com Mais Peso Visual */}
          <div className="mt-12 p-6 bg-white/10 rounded-2xl border-2 border-dashed border-white/30 max-w-lg mx-auto backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="bg-white p-3 rounded-full shadow-lg">
                 <Shield className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="font-black text-cta-foreground text-lg uppercase">Garantia de Satisfação Total</p>
                <p className="text-sm text-cta-foreground/80 leading-relaxed">
                  Experimente por 7 dias. Se você ou seu filho não amarem os desenhos, devolvemos cada centavo. <strong>Sem perguntas, sem burocracia.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 opacity-80">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-xs font-bold text-cta-foreground uppercase tracking-widest">Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400 fill-current" />
              <span className="text-xs font-bold text-cta-foreground uppercase tracking-widest">Produto Vitalício</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
