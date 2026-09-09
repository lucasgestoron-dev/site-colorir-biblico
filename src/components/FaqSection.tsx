import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O que vem no material?",
    answer: "Você recebe um PDF com capa e 30 desenhos bíblicos para colorir. Cada página traz o título da história e uma referência bíblica.",
  },
  {
    question: "O livro chega pelo correio?",
    answer: "Não. Este é um produto digital. Você acessa o PDF e imprime as páginas em casa ou em uma gráfica.",
  },
  {
    question: "Preciso de impressora colorida?",
    answer: "Não. Os desenhos são em preto e branco e foram preparados para a criança preencher com lápis de cor, giz ou canetinhas.",
  },
  {
    question: "Qual é o tamanho das páginas?",
    answer: "O arquivo foi organizado em tamanho A4, o formato comum das impressoras domésticas.",
  },
  {
    question: "Existe mensalidade?",
    answer: "Não. O checkout apresenta uma compra única do produto digital.",
  },
  {
    question: "Como recebo o acesso?",
    answer: "Use um e-mail válido no checkout. Após a confirmação do pagamento, siga as orientações de acesso enviadas pela plataforma.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dúvidas frequentes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Veja exatamente como o material funciona antes de comprar.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((faq) => (
            <article key={faq.question} className="bg-orange-50 p-6 rounded-2xl border border-orange-100 h-full">
              <div className="flex gap-4 items-start">
                <div className="bg-white p-2 rounded-xl mt-1 shrink-0 shadow-sm">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
