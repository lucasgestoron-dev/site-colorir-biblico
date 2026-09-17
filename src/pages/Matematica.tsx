import { useEffect } from "react";
import {
  ArrowRight,
  Blocks,
  BookOpen,
  Brain,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  FileText,
  Gamepad2,
  Gem,
  GraduationCap,
  Layers3,
  PackageCheck,
  Printer,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

const navy = "#0b2d57";
const blue = "#1769aa";

const sampleCards = [
  {
    number: "01",
    title: "Números e sequências",
    accent: "bg-blue-500",
    icon: Blocks,
    lines: ["Complete: 12, 14, __, 18", "Qual vem antes de 30?", "Organize: 18 · 9 · 24 · 12"],
  },
  {
    number: "02",
    title: "Operações",
    accent: "bg-orange-500",
    icon: Calculator,
    lines: ["237 + 185 = ____", "500 − 237 = ____", "____ + 148 = 500"],
  },
  {
    number: "03",
    title: "Multiplicação e divisão",
    accent: "bg-rose-500",
    icon: Gem,
    lines: ["4 × 8 = ____", "36 ÷ 6 = ____", "6 fileiras × 8 mudas"],
  },
  {
    number: "04",
    title: "Frações, medidas e lógica",
    accent: "bg-violet-500",
    icon: Target,
    lines: ["1/2 de 16 = ____", "Perímetro: ____ cm", "Descubra a regra da sequência"],
  },
];

const audience = [
  ["Gamepad2", "Crianças que gostam de universos de blocos e construção"],
  ["Brain", "Famílias que querem variar a rotina de estudos sem recorrer a mais tela"],
  ["BookOpen", "Reforço escolar e prática complementar do 1º ao 5º ano"],
  ["Printer", "Quem prefere imprimir apenas o conteúdo necessário naquele dia"],
  ["GraduationCap", "Pais e responsáveis que querem atividades organizadas por nível"],
] as const;

const faqs = [
  {
    q: "O material é físico?",
    a: "Não. É um produto digital em PDF. Você recebe o arquivo e imprime as páginas que quiser usar.",
  },
  {
    q: "Serve para qual idade ou ano escolar?",
    a: "O conteúdo está organizado do 1º ao 5º ano do Ensino Fundamental, com progressão de dificuldade entre os níveis.",
  },
  {
    q: "Preciso imprimir tudo?",
    a: "Não. O material foi pensado para uso por páginas e missões. Você pode imprimir somente o ano, tema ou atividade que quiser trabalhar.",
  },
  {
    q: "Tem gabarito?",
    a: "Sim. O material principal prevê gabarito para facilitar a conferência das respostas.",
  },
  {
    q: "É um jogo digital?",
    a: "Não. É um material pedagógico para imprimir. A identidade visual usa um universo de blocos como linguagem de apresentação das atividades.",
  },
  {
    q: "Já posso comprar?",
    a: "Esta página ainda está em fase de pré-lançamento. Os checkouts serão ativados quando o material e os arquivos finais estiverem concluídos.",
  },
];

const iconMap = {
  Gamepad2,
  Brain,
  BookOpen,
  Printer,
  GraduationCap,
};

const MiniWorksheet = ({
  number,
  title,
  accent,
  lines,
  icon: Icon,
}: (typeof sampleCards)[number]) => (
  <article className="group relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_-28px_rgba(15,23,42,.5)]">
    <div className="flex items-center justify-between bg-[#123f80] px-4 py-3 text-white">
      <div className="flex items-center gap-3">
        <div className={`grid h-9 w-9 place-items-center rounded-lg ${accent} shadow-inner`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.18em] text-blue-100">Missão matemática</p>
          <h3 className="font-black leading-tight">{title}</h3>
        </div>
      </div>
      <span className="text-xl font-black text-blue-100">{number}</span>
    </div>

    <div className="space-y-3 p-4">
      {lines.map((line, index) => (
        <div key={line} className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className={`grid h-6 w-6 place-items-center rounded-md ${accent} text-[11px] font-black text-white`}>{index + 1}</span>
            <span className="text-[10px] font-black uppercase tracking-[.12em] text-slate-400">Desafio</span>
          </div>
          <p className="text-sm font-bold text-slate-800">{line}</p>
          <div className="mt-3 h-px w-3/4 bg-slate-300" />
        </div>
      ))}
    </div>
  </article>
);

const ProductMockup = () => (
  <div className="relative mx-auto w-full max-w-[560px] px-4 pb-12 pt-8 sm:px-10">
    <div className="absolute left-4 top-20 hidden h-[520px] w-[280px] -rotate-[8deg] rounded-[1.75rem] border border-white/20 bg-white p-2 shadow-2xl sm:block">
      <div className="h-full overflow-hidden rounded-[1.3rem] bg-slate-100">
        <div className="bg-[#123f80] p-4 text-white">
          <p className="text-[10px] font-black uppercase tracking-[.18em] text-blue-100">Missões</p>
          <p className="text-lg font-black">Números e valor posicional</p>
        </div>
        <div className="grid gap-3 p-4">
          {["245 = C · D · U", "300 · ___ · 500", "415 · 208 · 532"].map((item, i) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-3">
              <span className="mb-2 inline-grid h-6 w-6 place-items-center rounded-md bg-blue-500 text-[10px] font-black text-white">{i + 1}</span>
              <p className="text-xs font-bold text-slate-700">{item}</p>
              <div className="mt-3 h-px w-3/4 bg-slate-300" />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute right-4 top-24 hidden h-[500px] w-[270px] rotate-[8deg] rounded-[1.75rem] border border-white/20 bg-white p-2 shadow-2xl sm:block">
      <div className="h-full overflow-hidden rounded-[1.3rem] bg-slate-100">
        <div className="bg-[#123f80] p-4 text-white">
          <p className="text-[10px] font-black uppercase tracking-[.18em] text-blue-100">Missões</p>
          <p className="text-lg font-black">Multiplicação e divisão</p>
        </div>
        <div className="grid gap-3 p-4">
          {["4 × 8 = ____", "36 ÷ 6 = ____", "6 × 8 = ____"].map((item, i) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-3">
              <span className="mb-2 inline-grid h-6 w-6 place-items-center rounded-md bg-rose-500 text-[10px] font-black text-white">{i + 1}</span>
              <p className="text-xs font-bold text-slate-700">{item}</p>
              <div className="mt-3 h-px w-3/4 bg-slate-300" />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="relative z-10 mx-auto w-[78%] min-w-[260px] max-w-[360px] overflow-hidden rounded-[2.1rem] border border-white/25 bg-[#0f4f8a] shadow-[0_35px_90px_-30px_rgba(2,12,27,.85)]">
      <div className="relative overflow-hidden px-7 pb-8 pt-7 text-white">
        <div className="absolute -right-16 -top-12 h-48 w-48 rounded-full bg-cyan-300/20 blur-2xl" />
        <div className="absolute -bottom-20 -left-14 h-56 w-56 rounded-full bg-emerald-300/15 blur-2xl" />
        <div
          className="absolute inset-0 opacity-[.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative">
          <div className="mb-12 flex items-center justify-between">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Blocks className="h-7 w-7" />
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-black uppercase tracking-[.15em] text-emerald-100 ring-1 ring-emerald-300/25">
              1º ao 5º ano
            </span>
          </div>

          <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-200">Missões matemáticas</p>
          <h3 className="mt-2 text-4xl font-black uppercase leading-[.94] tracking-tight">Mundo dos Blocos</h3>
          <p className="mt-4 max-w-xs text-sm font-semibold leading-relaxed text-blue-100">Atividades para imprimir com uma identidade visual que transforma cada página em uma nova missão.</p>

          <div className="mt-9 grid grid-cols-3 gap-2">
            {["150", "5", "A4"].map((item, i) => (
              <div key={item} className="rounded-xl bg-white/10 p-3 text-center ring-1 ring-white/15">
                <p className="text-xl font-black">{item}</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-blue-100">{i === 0 ? "atividades" : i === 1 ? "anos" : "PDF"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#092746] px-6 py-4 text-center text-xs font-black uppercase tracking-[.15em] text-cyan-100">Aprender · resolver · avançar</div>
    </div>
  </div>
);

const Matematica = () => {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Missões Matemáticas no Mundo dos Blocos | 150 Atividades para Imprimir";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const oldDescription = meta?.content;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "150 atividades de matemática para imprimir do 1º ao 5º ano, organizadas em missões no Mundo dos Blocos.";

    return () => {
      document.title = oldTitle;
      if (meta && oldDescription !== undefined) meta.content = oldDescription;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 font-black text-[#0d3b73]">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0d3b73] text-white shadow-sm">
              <Blocks className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-black uppercase tracking-[.18em] text-slate-400">desenhosinfantis.shop</span>
              <span className="block text-sm sm:text-base">Mundo dos Blocos</span>
            </span>
          </a>

          <nav className="flex items-center gap-3 text-sm font-bold text-slate-600">
            <a href="#material" className="hidden hover:text-[#0d3b73] sm:block">Ver material</a>
            <a href="#planos" className="rounded-xl bg-emerald-500 px-4 py-2.5 text-white shadow-sm transition hover:bg-emerald-600">Ver planos</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="relative overflow-hidden bg-[#0a2a52] py-14 md:py-20 lg:py-24">
          <div
            className="absolute inset-0 opacity-[.13]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="container relative">
            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-12">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.13em] text-blue-50 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-yellow-300" />
                  Material digital · 1º ao 5º ano
                </div>

                <h1 className="mt-5 text-4xl font-black leading-[1] tracking-[-.035em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                  150 missões matemáticas para transformar o estudo em uma <span className="text-cyan-300">aventura de blocos</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 lg:mx-0">
                  O conteúdo continua sendo matemática de verdade. O que muda é a apresentação: desafios curtos, páginas organizadas e uma identidade visual que convida a criança a começar.
                </p>

                <div className="mt-7 grid gap-2.5 text-left sm:grid-cols-3 lg:max-w-2xl">
                  {["150 atividades principais", "5 níveis escolares", "PDF A4 + gabarito"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-3 py-3 text-sm font-bold text-white">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <a href="#material" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 text-base font-black text-white shadow-[0_10px_30px_-14px_rgba(16,185,129,.9)] transition hover:-translate-y-0.5 hover:bg-emerald-400">
                    QUERO VER AS ATIVIDADES <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href="#planos" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/15">
                    Ver versões e preços
                  </a>
                </div>

                <p className="mt-4 text-xs font-semibold text-blue-200/80">Prévia de lançamento · checkout ainda em configuração</p>
              </div>

              <ProductMockup />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-7">
          <div className="container">
            <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
              <div className="flex items-center justify-center gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                <Printer className="h-6 w-6 text-[#1769aa]" />
                <div><p className="font-black text-slate-900">Pronto para imprimir</p><p className="text-xs font-semibold text-slate-500">Formato A4</p></div>
              </div>
              <div className="flex items-center justify-center gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                <Layers3 className="h-6 w-6 text-[#1769aa]" />
                <div><p className="font-black text-slate-900">Do 1º ao 5º ano</p><p className="text-xs font-semibold text-slate-500">Progressão por nível</p></div>
              </div>
              <div className="flex items-center justify-center gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                <FileText className="h-6 w-6 text-[#1769aa]" />
                <div><p className="font-black text-slate-900">Arquivo digital</p><p className="text-xs font-semibold text-slate-500">Use quantas vezes precisar</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="material" className="bg-[#eef5fb] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-[11px] font-black uppercase tracking-[.16em] text-[#1769aa]">Por dentro do material</span>
              <h2 className="mt-4 text-3xl font-black tracking-[-.025em] text-[#0d315d] md:text-5xl">Conheça o tipo de atividade que seu filho vai receber</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">Cada página reúne várias missões em um visual forte, mas organizado. A criança resolve matemática — o universo de blocos entra para dar contexto e tornar a folha mais convidativa.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {sampleCards.map((card) => <MiniWorksheet key={card.number} {...card} />)}
            </div>

            <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-blue-100 bg-white p-4 text-sm leading-relaxed text-slate-600 shadow-sm">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
              <p><strong className="text-slate-900">Matemática controlada, não decorativa:</strong> números, operações, quantidades e respostas fazem parte da estrutura pedagógica; os elementos visuais entram como apoio, não como substituto do conteúdo.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <span className="text-xs font-black uppercase tracking-[.18em] text-orange-600">Uma mudança simples de apresentação</span>
                <h2 className="mt-3 text-3xl font-black tracking-[-.025em] text-slate-900 md:text-5xl">A atividade não precisa parecer sempre a mesma folha de exercício.</h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">Quando o material conversa com um universo que a criança reconhece, o primeiro contato muda. Em vez de entregar uma página fria, você apresenta uma nova missão — mantendo o foco na habilidade matemática que precisa ser praticada.</p>

                <div className="mt-7 space-y-3">
                  {["Missões curtas e visualmente organizadas", "Conteúdo separado por nível escolar", "Diversidade de temas matemáticos", "Espaço real para resolver e registrar respostas"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-4 w-4" /></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {["Números e sequências", "Adição e subtração", "Multiplicação e divisão", "Frações e proporcionalidade", "Medidas e geometria", "Dinheiro, dados e lógica"].map((title, index) => (
                  <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/40">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#123f80] text-sm font-black text-white">{String(index + 1).padStart(2, "0")}</span>
                      <Blocks className="h-5 w-5 text-slate-300" />
                    </div>
                    <h3 className="font-black text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">Atividades contextualizadas em construções, inventário, expedições, vila, mapas e desafios.</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#071f3a] py-14 md:py-18">
          <div className="absolute inset-0 opacity-[.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "26px 26px" }} />
          <div className="container relative">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full bg-orange-500/15 px-3 py-1 text-[11px] font-black uppercase tracking-[.16em] text-orange-300 ring-1 ring-orange-400/20">Estudar sem transformar em mais uma tela</span>
              <h2 className="mt-4 text-3xl font-black tracking-[-.025em] text-white md:text-5xl">Um universo familiar para puxar a criança para a atividade — e não para longe dela.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/85">O tema ajuda a abrir a porta. Depois, quem ocupa o centro da página é a matemática: conta, problema, sequência, fração, medida, gráfico e raciocínio.</p>
              <a href="#planos" className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 font-black text-white shadow-lg transition hover:bg-emerald-400">VER OS PLANOS <ArrowRight className="h-5 w-5" /></a>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fc] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#1769aa]">Para quem faz sentido</span>
              <h2 className="mt-3 text-3xl font-black tracking-[-.025em] md:text-5xl">Este material pode entrar em diferentes rotinas.</h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
              {audience.map(([iconName, text]) => {
                const Icon = iconMap[iconName];
                return (
                  <div key={text} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#1769aa]"><Icon className="h-5 w-5" /></span>
                    <p className="font-bold leading-relaxed text-slate-700">{text}</p>
                  </div>
                );
              })}
              <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-emerald-600"><Trophy className="h-5 w-5" /></span>
                <p className="font-bold leading-relaxed text-emerald-900">Para quem quer transformar a prática em uma sequência de pequenas conquistas, sem exigir uma aula longa.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
              <div className="relative mx-auto w-full max-w-md rounded-[2rem] bg-[#0f4f8a] p-7 text-white shadow-[0_28px_80px_-35px_rgba(15,79,138,.8)]">
                <div className="absolute -right-5 -top-5 grid h-16 w-16 place-items-center rounded-2xl bg-orange-500 text-white shadow-xl"><PackageCheck className="h-8 w-8" /></div>
                <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-200">Você recebe</p>
                <h3 className="mt-2 text-3xl font-black">Um material completo, organizado para abrir e usar.</h3>
                <div className="mt-7 space-y-3">
                  {["150 atividades principais", "30 atividades por ano escolar", "Formato A4 para impressão", "Organização por famílias matemáticas", "Gabarito para conferência", "Acesso digital ao material"].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                      <span className="font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-[.18em] text-orange-600">Tudo em um único sistema</span>
                <h2 className="mt-3 text-3xl font-black tracking-[-.025em] text-slate-900 md:text-5xl">Escolha o ano, escolha a missão e imprima.</h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">A proposta é reduzir o atrito para o adulto também. Em vez de procurar uma atividade diferente toda vez, você tem um conjunto organizado para avançar conforme a necessidade da criança.</p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["01 · Abra o arquivo", "02 · Escolha o ano", "03 · Selecione a missão", "04 · Imprima e use"].map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-700">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="bg-[#eef5fb] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-[11px] font-black uppercase tracking-[.16em] text-orange-700">Prévia de lançamento</span>
              <h2 className="mt-4 text-3xl font-black tracking-[-.025em] text-[#0d315d] md:text-5xl">Escolha a versão que combina com sua rotina.</h2>
              <p className="mt-5 text-lg text-slate-600">Os valores planejados para o primeiro teste comercial são estes. O checkout será conectado quando os arquivos finais estiverem fechados.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
              <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_-35px_rgba(15,23,42,.45)]">
                <div className="flex items-center justify-between gap-3">
                  <div><p className="text-xs font-black uppercase tracking-[.18em] text-slate-400">Plano Essencial</p><h3 className="mt-1 text-2xl font-black text-[#0d315d]">Mundo dos Blocos</h3></div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-[#1769aa]">PDF</span>
                </div>

                <div className="mt-7 flex items-end gap-2">
                  <span className="pb-1 text-lg font-black text-slate-500">R$</span>
                  <span className="text-5xl font-black tracking-tight text-slate-900">17,90</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-500">pagamento único</p>

                <div className="my-6 h-px bg-slate-200" />
                <ul className="space-y-3 text-sm font-bold text-slate-700">
                  {["150 atividades principais", "1º ao 5º ano", "PDF em tamanho A4", "Organização e instruções", "Gabarito para conferência"].map((item) => (
                    <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />{item}</li>
                  ))}
                </ul>

                <button disabled className="mt-7 w-full cursor-not-allowed rounded-2xl bg-slate-200 px-5 py-4 font-black text-slate-500">CHECKOUT EM CONFIGURAÇÃO</button>
              </article>

              <article className="relative overflow-hidden rounded-[2rem] border-2 border-[#0f4f8a] bg-[#0b2d57] p-7 text-white shadow-[0_28px_75px_-30px_rgba(11,45,87,.75)]">
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-emerald-400 px-4 py-2 text-[10px] font-black uppercase tracking-[.15em] text-emerald-950">Mais completo</div>
                <div><p className="text-xs font-black uppercase tracking-[.18em] text-cyan-200">Plano Completo</p><h3 className="mt-1 text-2xl font-black">Mundo dos Blocos + Apoio</h3></div>

                <div className="mt-7 flex items-end gap-2">
                  <span className="pb-1 text-lg font-black text-blue-200">R$</span>
                  <span className="text-5xl font-black tracking-tight">27,90</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-blue-200">pagamento único</p>

                <div className="my-6 h-px bg-white/15" />
                <ul className="space-y-3 text-sm font-bold text-blue-50">
                  {["Tudo do Plano Essencial", "Materiais extras para prática", "Recursos de progresso e recompensa", "Arquivos adicionais de apoio", "Pacote completo em fase final de fechamento"].map((item) => (
                    <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />{item}</li>
                  ))}
                </ul>

                <button disabled className="mt-7 w-full cursor-not-allowed rounded-2xl bg-white/15 px-5 py-4 font-black text-white ring-1 ring-white/20">CHECKOUT EM CONFIGURAÇÃO</button>
              </article>
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-slate-500">Os itens extras do Plano Completo ainda podem ser ajustados antes da abertura oficial do checkout. Esta página está sendo usada como prévia visual da oferta.</p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#1769aa]">Dúvidas frequentes</span>
              <h2 className="mt-3 text-3xl font-black tracking-[-.025em] text-slate-900 md:text-4xl">Antes de escolher, veja como funciona.</h2>
            </div>

            <div className="mx-auto mt-8 max-w-3xl space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 open:bg-white open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-800">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 pr-8 leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#07192c] py-10 text-center text-sm text-slate-400">
        <div className="container">
          <div className="mb-3 flex items-center justify-center gap-2 font-black text-white"><Blocks className="h-5 w-5 text-cyan-300" /> Missões Matemáticas no Mundo dos Blocos</div>
          <p>Produto digital para impressão · desenhosinfantis.shop</p>
          <p className="mt-2 text-xs text-slate-500">Página em pré-lançamento. Nenhum produto físico será enviado.</p>
        </div>
      </footer>
    </div>
  );
};

export default Matematica;
