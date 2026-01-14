import { Heart, MonitorOff, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Aprendizado Espiritual",
    description:
      "Cada desenho ensina uma história bíblica de forma lúdica e memorável para as crianças.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: MonitorOff,
    title: "Longe das Telas",
    description:
      "Atividade offline que estimula a criatividade, coordenação motora e concentração.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Tempo em Família",
    description:
      "Momentos especiais colorindo juntos e conversando sobre os ensinamentos da Bíblia.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-card">
      <div className="container">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
          Por que as famílias adoram? 💖
        </h3>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Mais do que um livro de colorir, é uma ferramenta de conexão e aprendizado.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-background shadow-soft hover:shadow-card transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${benefit.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
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
