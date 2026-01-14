import { BookOpen, Palette, MonitorOff, Users } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Aprendizado Espiritual",
    description:
      "Conheça as histórias bíblicas clássicas de forma divertida e memorável. Cada desenho conta uma história importante da Bíblia.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Palette,
    title: "Criatividade e Diversão",
    description:
      "Estimule a criatividade e a coordenação motora. Colorir é uma atividade relaxante que desenvolve habilidades artísticas.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: MonitorOff,
    title: "Longe das Telas",
    description:
      "Atividade offline que estimula a concentração e tira as crianças do celular com desenhos lindos e detalhados.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Users,
    title: "Tempo em Família",
    description:
      "Crie momentos especiais com seus filhos. Colorir juntos é uma oportunidade perfeita para conversar e compartilhar valores.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-orange-50 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Por Que as Crianças Vão Amar?
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Combine aprendizado espiritual, criatividade e momentos especiais em família.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              // MUDANÇAS AQUI:
              // 1. 'py-16 px-8': Aumentei muito o padding vertical para a caixa ficar comprida.
              // 2. 'items-center text-center': Centralizei tudo de volta (ícone e texto).
              // 3. 'h-full': Garante que todas tenham a mesma altura, esticando até o fundo.
              className="bg-white py-16 px-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-orange-100 h-full"
            >
              <div
                // O ícone agora vai centralizar automaticamente por causa do pai 'items-center'
                className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-6 shadow-sm`}
              >
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {benefit.title}
              </h4>
              
              <p className="text-slate-500 leading-relaxed text-sm flex-grow">
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
