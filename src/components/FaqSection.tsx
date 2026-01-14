import { HelpCircle } from "lucide-react";

const FaqSection = () => {
  const faqs = [
    {
      question: "O livro chega pelo correio na minha casa?",
      answer: "Não. O livro é 100% digital (formato PDF). Isso significa que você não paga frete e recebe o acesso imediatamente no seu e-mail para imprimir quantas vezes quiser.",
    },
    {
      question: "Preciso pagar mensalidade?",
      answer: "Não! O pagamento é único. Você paga apenas uma vez e o material é seu para sempre.",
    },
    {
      question: "Como eu recebo o material?",
      answer: "Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar os arquivos. Se pagar no PIX ou Cartão, chega em menos de 5 minutos.",
    },
    {
      question: "Posso imprimir em preto e branco?",
      answer: "Sim! Os desenhos foram feitos com linhas nítidas pensando justamente na economia de tinta. Ficam ótimos em qualquer impressora caseira.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-fredoka text-primary mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas antes de garantir a diversão das crianças.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
