import { Shield, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-cta relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-cta-foreground text-sm font-medium mb-6">
            🎁 Oferta Especial por Tempo Limitado
          </span>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cta-foreground mb-6">
            Comece a Ensinar a Bíblia de Forma Divertida Hoje!
          </h3>

          {/* Pricing */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-xl text-cta-foreground/60 line-through">
                R$ 29,90
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-accent text-accent-foreground font-semibold">
                73% OFF
              </span>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-cta-foreground">
              R$ 7,90
            </div>
            <p className="text-cta-foreground/80 mt-2">Pagamento único • Acesso vitalício</p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="gradient-button text-lg md:text-xl px-10 md:px-14 py-7 md:py-8 rounded-xl font-semibold shadow-button animate-pulse-glow hover:scale-105 transition-transform duration-300"
          >
            <Download className="w-6 h-6 mr-3" />
            QUERO BAIXAR AGORA
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-cta-foreground/90">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2 text-cta-foreground/90">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2 text-cta-foreground/90">
              <Download className="w-5 h-5" />
              <span className="text-sm font-medium">PDF de Alta Qualidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
