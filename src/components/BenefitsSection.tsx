import { BookOpen, Palette, Heart } from "lucide-react";

const benefits = [
  {
    icon: BookOpen, // Mudei para Livro para combinar com "Aprendizado" (igual sua referência)
    title: "Aprendizado Espiritual",
    description:
      "Cada desenho ensina uma história bíblica de forma lúdica e memorável. As crianças aprendem brincando.",
    iconColor: "text-blue-500", // Azul
  },
  {
    icon: Palette, // Usei a Paleta de cores, pois "Longe das Telas" estimula a criatividade (igual o ícone do meio da referência)
    title: "Longe das Telas",
    description:
      "Uma alternativa saudável que tira as crianças do celular e estimula a criatividade, coordenação motora e foco.",
    iconColor: "text-yellow-500", // Amarelo/Laranja
  },
  {
    icon: Heart, // Coração para família
    title: "Tempo em Família",
    description:
      "Crie memórias inesquecíveis colorindo juntos. Uma oportunidade perfeita para conversar sobre valores.",
    iconColor: "text-red-500", // Vermelho
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
            Por Que as Crianças Vão Amar?
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Combine aprendizado espiritual, criatividade e momentos especiais em família.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <benefit.icon 
                  className={`w-12 h-12 ${benefit.iconColor}`} 
                  strokeWidth={2.5} // Deixei o traço um pouco mais grosso para destacar
                />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed text-base">
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
