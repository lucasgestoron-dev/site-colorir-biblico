import { ArrowRight, FileText, Printer, Sparkles } from "lucide-react";
import cover from "@/assets/cover-30.webp";
import printing from "@/assets/process-printing.webp";
import coloring from "@/assets/family-coloring.webp";
import Reveal from "@/components/Reveal";

const steps = [
  { number: "1", label: "Escolha a história", text: "Abra o PDF e escolha entre 30 histórias bíblicas.", image: cover, alt: "Capa do PDF Colorir Bíblico com 30 desenhos", fit: "object-contain bg-[#fffaf2] p-5" },
  { number: "2", label: "Imprima em A4", text: "Selecione a página do dia e imprima quantas vezes precisar.", image: printing, alt: "Desenho bíblico saindo de uma impressora doméstica", fit: "object-cover" },
  { number: "3", label: "Coloque os lápis na mesa", text: "A atividade já está pronta para a criança começar.", image: coloring, alt: "Mãe e filha colorindo juntas uma página bíblica", fit: "object-cover" },
];

const HowItWorksSection = () => (
  <section className="py-16 md:py-24 bg-orange-50 overflow-hidden" aria-labelledby="how-title">
    <div className="container">
      <Reveal className="text-center mb-11 md:mb-14">
        <span className="text-primary text-sm font-black uppercase tracking-widest">Veja como você usa</span>
        <h2 id="how-title" className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">Você recebe o arquivo. A atividade acontece de verdade.</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">Nada para montar ou preparar: escolha uma história, imprima e comece.</p>
      </Reveal>

      <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-5 md:gap-4 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="contents">
            <Reveal delay={index * 120}>
              <article className="group">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-orange-50 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] border-4 border-white">
                  <img src={step.image} alt={step.alt} className={`w-full h-full ${step.fit} transition-transform duration-700 group-hover:scale-[1.04]`} loading="lazy" decoding="async" />
                  <span className="absolute top-4 left-4 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl shadow-lg">{step.number}</span>
                </div>
                <div className="pt-5 px-2 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">{step.label}</h3>
                  <p className="text-slate-600 mt-2 leading-relaxed">{step.text}</p>
                </div>
              </article>
            </Reveal>
            {index < steps.length - 1 && <ArrowRight className="hidden md:block w-8 h-8 text-primary/45 animate-drift" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <Reveal delay={220} className="mt-12 md:mt-16">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-white rounded-3xl px-5 py-3 border border-orange-100 shadow-sm">
          <span className="flex items-center gap-2 px-6 py-3 font-bold text-slate-700"><FileText className="w-5 h-5 text-primary" /> 30 desenhos</span>
          <span className="flex items-center gap-2 px-6 py-3 font-bold text-slate-700"><Printer className="w-5 h-5 text-secondary" /> Tamanho A4</span>
          <span className="flex items-center gap-2 px-6 py-3 font-bold text-slate-700"><Sparkles className="w-5 h-5 text-amber-500" /> Preto e branco</span>
        </div>
      </Reveal>
    </div>
  </section>
);

export default HowItWorksSection;
