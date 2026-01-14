import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    // MUDANÇA: Troquei py-20 por pb-0 para remover o espaço de baixo
    <section className="bg-orange-50 pt-12 md:pt-20 pb-0">
      <div className="container">
        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Desperte a{" "}
            <span className="text-primary">Criatividade</span> e a{" "}
            <span className="text-secondary">Fé</span> das Crianças
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-100">
            20 desenhos bíblicos exclusivos para imprimir em casa.{" "}
            <br className="hidden md:block" />
            Uma forma divertida e educativa de ensinar a Bíblia.
          </p>
        </div>

        {/* Hero Image - BANNER RETANGULAR COLADO NO BLOCO DE BAIXO */}
        <div className="relative max-w-5xl mx-auto animate-fade-in-up animation-delay-200">
          <div className="relative rounded-t-2xl overflow-hidden shadow-card">
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

        {/* MUDANÇA: O BLOCO "SCROLL INDICATOR" FOI REMOVIDO DAQUI PORQUE ESTAVA CRIANDO O BURACO */}
      </div>
    </section>
  );
};

export default HeroSection;
