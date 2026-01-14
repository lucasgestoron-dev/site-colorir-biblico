import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-coloring-book.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    const benefitsSection = document.getElementById("benefits");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gradient-hero py-12 md:py-20">
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

        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img
              src={heroImage}
              alt="Crianças colorindo livro bíblico com alegria"
              className="w-full h-auto object-cover"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center mt-10 md:mt-14 animate-fade-in-up animation-delay-300">
          <p className="text-muted-foreground text-sm mb-3">
            Descubra os benefícios
          </p>
          <button
            onClick={scrollToNext}
            className="p-3 rounded-full bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
            aria-label="Rolar para baixo"
          >
            <ChevronDown className="w-6 h-6 text-primary animate-bounce-soft" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
