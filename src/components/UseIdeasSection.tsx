import { useEffect, useState } from "react";
import { ArrowRight, Church, Heart, Home, Pause, Play } from "lucide-react";
import familyColoring from "@/assets/family-coloring.webp";
import sundaySchool from "@/assets/sunday-school.webp";
import grandparentsColoring from "@/assets/grandparents-coloring.webp";
import Reveal from "@/components/Reveal";

const uses = [
  {
    label: "Em casa",
    icon: Home,
    image: familyColoring,
    alt: "Mãe e filha colorindo uma atividade bíblica em casa",
    title: "Troque alguns minutos de tela por uma atividade compartilhada",
    description: "O material dá um ponto de partida quando você quer propor algo simples para fazer com a criança.",
    steps: ["Escolha uma história", "Imprima uma página", "Coloram e conversem"],
  },
  {
    label: "Na escola bíblica",
    icon: Church,
    image: sundaySchool,
    alt: "Professora usando desenhos bíblicos para colorir com crianças",
    title: "Leve uma atividade pronta para acompanhar a história do dia",
    description: "Escolha uma página relacionada ao tema e use o desenho como continuação do momento de aprendizagem.",
    steps: ["Defina o tema", "Imprima as cópias", "Use depois da história"],
  },
  {
    label: "Com os avós",
    icon: Heart,
    image: grandparentsColoring,
    alt: "Avós colorindo desenhos bíblicos com os netos",
    title: "Transforme uma visita em um momento para guardar na memória",
    description: "Lápis, uma história conhecida e uma página impressa ajudam adultos e crianças a participarem juntos.",
    steps: ["Separe os materiais", "Sente com os netos", "Conversem sobre a história"],
  },
];

const UseIdeasSection = () => {
  const [active, setActive] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const paused = manualPaused || hovered;
  const current = uses[active];

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reducedMotion) return;

    const timer = window.setTimeout(() => {
      setActive((currentIndex) => (currentIndex + 1) % uses.length);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [active, paused]);

  return (
    <section className="pt-10 pb-16 md:pt-14 md:pb-24 bg-white overflow-hidden" aria-labelledby="uses-title">
      <div className="container">
        <Reveal className="text-center mb-8">
          <span className="text-secondary text-sm font-black uppercase tracking-widest">Onde essa atividade entra na sua rotina</span>
          <h2 id="uses-title" className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">Uma página. Diferentes momentos para viver.</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Veja como o mesmo material pode ser usado em casa, na escola bíblica ou com os avós.</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-7">
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3" role="tablist" aria-label="Situações de uso">
                {uses.map((use, index) => (
                  <button key={use.label} id={`use-tab-${index}`} type="button" role="tab" aria-controls="use-scenario-panel" aria-selected={active === index} onClick={() => setActive(index)} className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-black text-sm md:text-base transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 ${active === index ? "bg-primary text-white shadow-lg -translate-y-0.5" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                    <use.icon className="w-4 h-4 md:w-5 md:h-5" /> <span>{use.label}</span>
                  </button>
                ))}
                <button type="button" onClick={() => setManualPaused((value) => !value)} className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-primary hover:border-primary/30 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30" aria-label={manualPaused ? "Continuar troca automática" : "Pausar troca automática"}>
                  {manualPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4 fill-current" />}
                </button>
              </div>
              <div className="mt-4 max-w-xs mx-auto h-1.5 rounded-full bg-slate-100 overflow-hidden" aria-hidden="true">
                <span key={active} className="block h-full bg-primary rounded-full animate-scene-progress" style={{ animationPlayState: paused ? "paused" : "running" }} />
              </div>
              <p className="text-center text-xs text-slate-500 mt-2">As situações mudam automaticamente. Você também pode escolher uma opção.</p>
            </div>

            <div id="use-scenario-panel" aria-labelledby={`use-tab-${active}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="grid lg:grid-cols-[1.05fr_.95fr] rounded-[2rem] md:rounded-[2.75rem] overflow-hidden border border-slate-200 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] bg-orange-50" role="tabpanel" aria-live="polite">
              <div className="min-h-[280px] md:min-h-[430px] bg-slate-100">
                <img key={current.image} src={current.image} alt={current.alt} className="w-full h-full object-cover animate-soft-swap" loading="lazy" decoding="async" />
              </div>
              <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-primary font-black uppercase tracking-widest text-sm mb-3">{current.label}</p>
                <h3 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">{current.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{current.description}</p>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 items-stretch sm:items-center lg:items-stretch xl:items-center">
                  {current.steps.map((step, index) => (
                    <div key={step} className="contents">
                      <div className="flex-1 bg-white border border-orange-100 rounded-2xl px-4 py-3 text-center font-bold text-slate-800 shadow-sm">{step}</div>
                      {index < current.steps.length - 1 && <ArrowRight className="hidden sm:block lg:hidden xl:block w-5 h-5 text-primary/60 shrink-0" aria-hidden="true" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default UseIdeasSection;
