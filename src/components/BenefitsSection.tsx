import { Heart, MonitorOff, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Aprendizado Espiritual",
    description:
      "Cada desenho ensina uma história bíblica de forma lúdica e memorável para as crianças.",
    color: "text-secondary", // Rosa
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    hoverBorder: "group-hover:border-secondary",
  },
  {
    icon: MonitorOff,
    title: "Longe das Telas",
    description:
      "Atividade offline que estimula a criatividade, coordenação motora e concentração.",
    color: "text-primary", // Azul
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    hoverBorder: "group-hover:border-primary",
  },
  {
    icon: Users,
    title: "Tempo em Família",
    description:
      "Momentos especiais colorindo juntos e conversando sobre os ensinamentos da Bíblia.",
    color: "text-accent", // Laranja
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    hoverBorder: "group-hover:border-accent",
  },
];

const BenefitsSection = () => {
  return (
    // MUDANÇA: bg-white alterado para bg-orange-50 para seguir o padrão acolhedor
    <section id="benefits" className="py-16 md:py-24 bg-orange-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            ✨ Benefícios Exclusivos
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Por que as famílias adoram? 💖
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Mais do que um simples livro de colorir, criamos uma ferramenta de conexão, fé e aprendizado para o seu lar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              // Mantive o fundo dos cards em branco para eles "saltarem" do fundo bege, mantendo o destaque
              className={`group relative p-8 rounded-3xl bg-white border-2 ${benefit.borderColor} ${benefit.hoverBorder} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${benefit.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <benefit.icon className={`w-10 h-10 ${benefit.color}`} strokeWidth={2} />
              </div>
              
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                {benefit.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
