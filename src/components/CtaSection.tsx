import { Shield, Zap, CheckCircle2, Lock, Users } from "lucide-react"; 
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
          
          {/* CALIBRAGEM: Escassez por Vagas (Substitui o Cronômetro) */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white text-xs md:text-sm font-black mb-6 border-2 border-white/20 animate-pulse">
            <Users className="w-4 h-4" />
            <span>RESTAM APENAS 14 VAGAS COM ESTE DESCONTO</span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cta-foreground mb-6 leading-tight">
            Não deixe a educação do seu filho para depois!
          </h3>

          <p className="text-cta-foreground/90 mb-8 text-lg font-medium max-w-lg mx-auto">
            Libere agora os <span className="text-yellow-400 font-bold">20 desenhos exclusivos</span> e comece a criar memórias hoje mesmo.
          </p>

          {/* Bloco de Preço Blindado */}
          <div className="mb-10 bg-white p-8 rounded-3xl border-4 border-yellow-400 shadow-2xl inline-block w-full max-w-sm transform -rotate-1">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-xl text-slate-400 line-through font-bold">
                R$ 29,90
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-green-500 text-white font-black tracking-wide">
                73% OFF
              </span>
            </div>
            <div className="text-7xl font-black text-slate-900 tracking-tighter">
              <span className="text-3xl align-top mr-1 font-bold">R$</span>7,90
            </div>
            <p className="text-slate-500 mt-2 text-sm font-bold uppercase tracking-widest">
              Pagamento único • Acesso vitalício
            </p>
          </div>

          {/* CTA Sincronizado e VERDE (Alta Conversão) */}
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

          {/* Garantia Expandida */}
          <div className="mt-12 p-6 bg-white/10 rounded-2xl border-2 border-dashed border-white/30 max-w-lg mx-auto backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="bg-white p-3 rounded-full shadow-lg">
                 <Shield className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="font-black text-cta-foreground text-lg uppercase leading-none mb-1">Satisfação Garantida</p>
                <p className="text-sm text-cta-foreground/80 leading-relaxed">
                  Risco Zero: Se em 7 dias você não estiver satisfeito, devolvemos seu dinheiro. <strong>Simples assim.</strong>
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
