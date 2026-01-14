import { Shield, Zap, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  // 🔴 IMPORTANTE: COLAR SEU LINK DO CAKTO AQUI DENTRO DAS ASPAS
  const checkoutLink = "https://SEU_LINK_DO_CHECKOUT_AQUI"; 

  return (
    <section className="py-16 md:py-24 gradient-cta relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Tag de Urgência */}
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-cta-foreground text-sm font-bold mb-6 border border-white/20 animate-pulse">
            🔥 Oferta por Tempo Limitado
          </span>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cta-foreground mb-6 leading-tight">
            Comece a Ensinar a Bíblia de Forma Divertida Hoje!
          </h3>

          {/* Pricing Block */}
          <div className="mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm inline-block w-full max-w-sm">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-lg text-cta-foreground/60 line-through font-medium">
                R$ 29,90
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-green-500 text-white font-bold tracking-wide">
                73% OFF
              </span>
            </div>
            <div className="text-6xl font-extrabold text-cta-foreground tracking-tight">
              R$ 7,90
            </div>
            <p className="text-cta-foreground/80 mt-2 text-sm font-medium">
              Pagamento único • Acesso vitalício
            </p>
          </div>

          {/* CTA Button com Link */}
          <div className="mb-6">
            <a href={checkoutLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full md:w-auto gradient-button text-lg md:text-xl px-10 md:px-16 py-8 rounded-full font-bold shadow-button animate-pulse-glow hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              >
                <Download className="w-6 h-6 mr-3 stroke-[3px]" />
                COMPRAR AGORA
              </Button>
            </a>
            <p className="mt-3 text-xs text-cta-foreground/70">
              ⚡ Acesso enviado para seu e-mail imediatamente
            </p>
          </div>

          {/* Guarantee Box - MENOR E MAIS DISCRETO */}
          <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10 max-w-sm mx-auto flex items-center gap-3 text-left">
            <div className="bg-green-500/10 p-2 rounded-full shrink-0">
               <Shield className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="font-bold text-cta-foreground text-sm">Garantia de 7 Dias</p>
              <p className="text-xs text-cta-foreground/60 leading-snug">
                Não amou? Devolvemos seu dinheiro. Risco zero.
              </p>
            </div>
          </div>

          {/* Trust Badges (Rodapé) - LOGOS COLORIDAS */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-xs font-medium text-cta-foreground uppercase tracking-wider">Site Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-xs font-medium text-cta-foreground uppercase tracking-wider">Entrega Automática</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span className="text-xs font-medium text-cta-foreground uppercase tracking-wider">Satisfação Garantida</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
