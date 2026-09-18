import { useEffect } from "react";
import {
  ArrowRight,
  Blocks,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  FileText,
  Gamepad2,
  MessageCircle,
  Printer,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

const checkoutReady = false;

const benefits = [
  {
    icon: Gamepad2,
    title: "Menos resistência para começar",
    text: "O universo dos blocos entra como ponte visual para deixar a atividade mais convidativa antes mesmo da primeira conta.",
  },
  {
    icon: Brain,
    title: "Conteúdo organizado por ano",
    text: "Do 1º ao 5º ano, com progressão de números e operações até frações, medidas, dados, lógica e problemas.",
  },
  {
    icon: Printer,
    title: "Pronto para imprimir",
    text: "Escolha a página, imprima em A4 e use em casa, no reforço ou como atividade complementar.",
  },
  {
    icon: Trophy,
    title: "Sensação de missão",
    text: "Cada página mistura matemática de verdade com desafios, mapas, baús, cristais e construções.",
  },
];

const practiceItems = [
  "Números e sequências",
  "Adição e subtração",
  "Multiplicação e divisão",
  "Frações e proporcionalidade",
  "Medidas e geometria",
  "Matemática do cotidiano",
  "Dados, padrões e lógica",
  "Problemas contextualizados",
];

const faqs = [
  ["É um jogo digital?", "Não. É um material em PDF para imprimir. A estética do universo dos blocos é usada para tornar os exercícios mais interessantes visualmente."],
  ["Para quais anos serve?", "O material principal está organizado do 1º ao 5º ano do Ensino Fundamental, com 30 atividades principais por ano."],
  ["Preciso imprimir tudo?", "Não. Você pode escolher o ano, o conteúdo e a página que deseja trabalhar e imprimir somente o necessário."],
  ["Vem com gabarito?", "Sim. O material prevê gabarito para facilitar a conferência das atividades."],
  ["Posso usar em reforço escolar?", "Sim. A organização por tema e ano permite selecionar atividades pontuais para casa, reforço ou acompanhamento."],
  ["O checkout já está ativo?", "Ainda não. A página está sendo preparada junto com a finalização do material e dos extras da oferta."],
];

const Block = ({
  className = "",
  tone = "bg-emerald-500",
}: {
  className?: string;
  tone?: string;
}) => (
  <span
    aria-hidden="true"
    className={`absolute h-8 w-8 rounded-[5px] border-2 border-black/10 shadow-[inset_4px_4px_0_rgba(255,255,255,.28),inset_-4px_-4px_0_rgba(0,0,0,.12),0_8px_12px_-8px_rgba(15,23,42,.55)] ${tone} ${className}`}
  />
);

const RealPage = ({
  src,
  title,
  className = "",
  eager = false,
}: {
  src: string;
  title: string;
  className?: string;
  eager?: boolean;
}) => (
  <figure
    className={`overflow-hidden rounded-[1.3rem] border-[5px] border-white bg-white shadow-[0_24px_55px_-24px_rgba(15,23,42,.5)] ${className}`}
  >
    <img
      src={src}
      alt={title}
      className="block h-auto w-full"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  </figure>
);

const MessageBubble = ({
  label,
  children,
  right = false,
}: {
  label: string;
  children: React.ReactNode;
  right?: boolean;
}) => (
  <div className={`flex ${right ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[90%] rounded-2xl p-4 shadow-sm sm:max-w-[78%] ${
        right
          ? "rounded-tr-sm bg-[#d9f8c9]"
          : "rounded-tl-sm bg-white"
      }`}
    >
      <p className="mb-1 text-[10px] font-black uppercase tracking-[.14em] text-slate-400">
        {label}
      </p>
      <p className="text-sm font-semibold leading-relaxed text-slate-700">
        {children}
      </p>
    </div>
  </div>
);

const Matematica = () => {
  useEffect(() => {
    const oldTitle = document.title;
    document.title =
      "Missões Matemáticas no Mundo dos Blocos | 1º ao 5º ano";

    let meta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    const oldDescription = meta?.content;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "150 atividades de matemática para imprimir do 1º ao 5º ano, com missões visuais no Mundo dos Blocos e gabarito.";

    return () => {
      document.title = oldTitle;
      if (meta && oldDescription !== undefined) meta.content = oldDescription;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7fbff] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-black text-[#17508f]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#2b8ac8] text-white shadow-[0_4px_0_#17669f]">
              <Blocks className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block text-sm sm:text-base">
                Mundo dos Blocos
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[.14em] text-slate-400">
                Missões Matemáticas
              </span>
            </span>
          </a>

          <a
            href="#planos"
            className="rounded-xl bg-green-500 px-4 py-2.5 text-sm font-black text-white shadow-[0_4px_0_#15803d] transition hover:translate-y-0.5 hover:shadow-[0_2px_0_#15803d]"
          >
            VER OFERTA
          </a>
        </div>
      </header>

      <main>
        <section
          id="top"
          className="relative overflow-hidden bg-gradient-to-b from-[#49a8dc] via-[#3295d1] to-[#2679b4] pt-9 pb-16 md:pt-14 md:pb-24"
        >
          <div
            className="absolute inset-0 opacity-[.13]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.75) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.75) 1px,transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
          <Block className="left-[6%] top-28 hidden rotate-12 lg:block" tone="bg-emerald-500" />
          <Block className="left-[10%] top-44 hidden -rotate-6 lg:block" tone="bg-orange-400" />
          <Block className="right-[9%] top-32 hidden rotate-6 lg:block" tone="bg-violet-500" />
          <Block className="right-[14%] bottom-20 hidden -rotate-12 md:block" tone="bg-cyan-300" />

          <div className="container relative">
            <div className="mx-auto max-w-5xl text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[.14em] shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-yellow-200" />
                Material digital para imprimir
              </span>

              <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[.97] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                150 missões de matemática para seu filho{" "}
                <span className="text-yellow-200">
                  querer entrar no desafio
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-relaxed text-blue-50 sm:text-lg md:text-xl">
                Do 1º ao 5º ano, com atividades visuais, progressivas e prontas
                para imprimir — usando o universo dos blocos como ponte para
                tornar a prática muito mais convidativa.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-2.5">
                {[
                  "30 atividades por ano",
                  "1º ao 5º ano",
                  "PDF A4",
                  "Gabarito incluído",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#19558e] shadow-md"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto mt-11 h-[440px] max-w-5xl sm:h-[540px] md:h-[650px]">
              <RealPage
                src="/math/page-adicao.webp"
                title="Página real do PDF com atividades de adição e subtração"
                eager
                className="absolute left-[2%] top-16 z-10 w-[45%] -rotate-6 sm:left-[7%] md:w-[36%]"
              />

              <RealPage
                src="/math/page-medidas.webp"
                title="Página real do PDF com atividades de medidas, localização e tempo"
                eager
                className="absolute right-[2%] top-16 z-10 w-[45%] rotate-6 sm:right-[7%] md:w-[36%]"
              />

              <div className="absolute left-1/2 top-0 z-20 w-[50%] -translate-x-1/2 sm:w-[43%] md:w-[35%]">
                <div className="rounded-[2rem] border-[6px] border-white bg-gradient-to-b from-[#1d69ad] to-[#103b6d] p-3 shadow-[0_30px_60px_-20px_rgba(4,34,72,.65)] sm:p-4">
                  <div className="rounded-[1.5rem] border border-white/15 bg-[#2386c3] p-4 text-center text-white sm:p-5">
                    <div className="mx-auto mb-2 grid h-20 w-20 place-items-center rounded-2xl bg-[#f2a33b] shadow-[inset_0_-7px_0_#bd6a20]">
                      <Calculator className="h-10 w-10" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[.18em] text-yellow-100 sm:text-xs">
                      Missões Matemáticas
                    </p>
                    <h2 className="mt-2 text-2xl font-black leading-none sm:text-3xl md:text-4xl">
                      MUNDO DOS BLOCOS
                    </h2>
                    <p className="mt-3 text-xs font-bold text-blue-50 sm:text-sm">
                      150 atividades • 1º ao 5º ano
                    </p>
                    <div className="mx-auto mt-4 grid max-w-[240px] grid-cols-5 gap-1.5">
                      {Array.from({ length: 20 }).map((_, index) => (
                        <span
                          key={index}
                          className={`aspect-square rounded-[3px] border border-white/25 ${
                            index % 4 === 0
                              ? "bg-emerald-400"
                              : index % 3 === 0
                                ? "bg-orange-400"
                                : "bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-4 rounded-xl bg-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-wide sm:text-xs">
                      Aprender • resolver • avançar
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1 left-1/2 z-30 -translate-x-1/2">
                <a
                  href="#amostras"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-black text-white shadow-[0_5px_0_#15803d] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_#15803d] sm:text-base"
                >
                  VER AS PÁGINAS REAIS <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="amostras" className="bg-[#fffdf8] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-amber-700">
                Páginas reais do PDF
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                Veja exatamente o tipo de atividade que seu filho vai receber.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Aqui não é mockup genérico: são páginas do próprio material,
                com os elementos visuais integrados aos exercícios.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-4 shadow-[0_24px_70px_-34px_rgba(15,23,42,.45)]">
                <RealPage
                  src="/math/page-adicao.webp"
                  title="Página real: adição e subtração"
                />
                <div className="px-2 pb-2 pt-5">
                  <p className="text-xs font-black uppercase tracking-[.14em] text-orange-600">
                    Exemplo real • 3º ano
                  </p>
                  <h3 className="mt-1 text-xl font-black">
                    Adição, subtração, estimativa e problema contextualizado
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Na mesma página, a criança encontra contas com
                    reagrupamento, arredondamento, problemas da mina e termo
                    desconhecido.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-4 shadow-[0_24px_70px_-34px_rgba(15,23,42,.45)]">
                <RealPage
                  src="/math/page-medidas.webp"
                  title="Página real: medidas, localização e tempo"
                />
                <div className="px-2 pb-2 pt-5">
                  <p className="text-xs font-black uppercase tracking-[.14em] text-emerald-600">
                    Exemplo real • 3º ano
                  </p>
                  <h3 className="mt-1 text-xl font-black">
                    Mapa, pesos, cálculo de tempo e calendário
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Os elementos do universo de blocos ajudam a transformar
                    conteúdos diferentes em pequenas missões visuais.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-orange-100 bg-orange-50 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-black text-white">
                    ADIÇÃO
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-orange-600 shadow-sm">
                    <Calculator className="h-5 w-5" />
                  </span>
                </div>
                <div className="space-y-3 text-lg font-black text-slate-800">
                  <p>237 + 185 = ____</p>
                  <p>364 + 278 = ____</p>
                  <p>519 + 346 = ____</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-black text-white">
                    TEMPO
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <BookOpen className="h-5 w-5" />
                  </span>
                </div>
                <div className="space-y-3 text-base font-black text-slate-800">
                  <p>9h00 até 11h30: ____</p>
                  <p>14h00 até 16h45: ____</p>
                  <p>8h30 até 10h00: ____</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-black text-white">
                    MEDIDAS
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-emerald-600 shadow-sm">
                    <Blocks className="h-5 w-5" />
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-600">
                  madeira = 250 g • pedra = 500 g
                </p>
                <div className="mt-4 space-y-3 text-base font-black text-slate-800">
                  <p>Madeira + pedra: ____ g</p>
                  <p>2 pedras: ____ g = ____ kg</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
              <div className="relative overflow-hidden rounded-[2.2rem] bg-[#eaf5ff] p-3 shadow-[0_24px_65px_-30px_rgba(15,23,42,.45)]">
                <img
                  src="/math/child-study.webp"
                  alt="Criança realizando uma atividade matemática impressa"
                  className="aspect-[16/10] w-full rounded-[1.7rem] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
                  <p className="text-sm font-black text-[#19558e]">
                    Baixe → imprima → coloque a missão na mesa
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Uma proposta simples para estudar sem depender da tela.
                  </p>
                </div>
              </div>

              <div>
                <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-orange-700">
                  Feito para a rotina real
                </span>
                <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                  O material precisa funcionar fora da tela também.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  A ideia é simples: escolher uma missão, imprimir e deixar a
                  criança resolver no papel. O visual chama para a atividade;
                  o conteúdo mantém o foco na matemática.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {["Escolha o tema", "Imprima a página", "Resolva a missão"].map(
                    (step, index) => (
                      <div
                        key={step}
                        className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-4 text-center"
                      >
                        <span className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-[#2b8ac8] text-sm font-black text-white">
                          {index + 1}
                        </span>
                        <p className="mt-3 text-sm font-black">{step}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f1f9ff] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#2877b4]">
                Para diferentes momentos
              </span>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Use do jeito que seu filho precisa hoje.
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <article
                  key={title}
                  className={`rounded-[1.5rem] border p-5 ${
                    [
                      "border-orange-100 bg-orange-50",
                      "border-emerald-100 bg-emerald-50",
                      "border-blue-100 bg-blue-50",
                      "border-violet-100 bg-violet-50",
                    ][index]
                  }`}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#256fa9] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#e7f5e7] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[.14em] text-green-700 shadow-sm">
                  <MessageCircle className="h-4 w-4" />
                  Como isso pode entrar na rotina
                </span>
                <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                  Uma página bonita ajuda a mudar o clima da hora de estudar.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Estes exemplos mostram situações de uso do material. Quando
                  chegarem avaliações reais de compradores, esta área será
                  substituída pelos próprios relatos.
                </p>
              </div>

              <div className="rounded-[2rem] border border-green-100 bg-[#dff1d7] p-4 shadow-[0_24px_60px_-35px_rgba(15,23,42,.45)] sm:p-6">
                <div className="mb-4 flex items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-green-100 font-black text-green-700">
                    M
                  </div>
                  <div>
                    <p className="font-black text-slate-900">Ideias de uso</p>
                    <p className="text-xs text-slate-500">
                      Exemplos ilustrativos • não são avaliações reais
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <MessageBubble label="Em casa">
                    “Eu usaria duas páginas depois da escola, principalmente
                    quando ele já está cansado de atividade com cara de
                    apostila.”
                  </MessageBubble>
                  <MessageBubble label="Reforço" right>
                    “Escolher só o conteúdo que ele está vendo na escola e
                    imprimir aquela missão deixaria tudo mais prático.”
                  </MessageBubble>
                  <MessageBubble label="Férias">
                    “Uma missão curta por dia seria uma forma de manter a
                    matemática presente sem transformar as férias em aula.”
                  </MessageBubble>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#163f6d] py-14 text-white md:py-20">
          <Block className="-left-2 top-7 hidden rotate-12 md:block" tone="bg-orange-400" />
          <Block className="left-12 bottom-8 hidden -rotate-6 md:block" tone="bg-emerald-500" />
          <Block className="right-10 top-8 hidden rotate-12 md:block" tone="bg-violet-500" />

          <div className="container relative text-center">
            <span className="inline-flex rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase tracking-[.14em]">
              Menos cara de lição comum
            </span>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
              Use o interesse pelo Mundo dos Blocos como porta de entrada para
              praticar matemática de verdade.
            </h2>
            <a
              href="#recebe"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-4 text-lg font-black text-white shadow-[0_6px_0_#15803d] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_#15803d]"
            >
              VER O QUE VEM NO MATERIAL <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        <section id="recebe" className="bg-[#fffdf8] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-black uppercase tracking-[.18em] text-emerald-600">
                Tudo organizado para você
              </span>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Um material pronto para escolher, imprimir e usar.
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <div className="relative">
                <RealPage
                  src="/math/page-medidas.webp"
                  title="Exemplo real do material"
                  className="mx-auto w-[78%] rotate-[-4deg]"
                />
                <RealPage
                  src="/math/page-adicao.webp"
                  title="Exemplo real do material"
                  className="absolute right-0 top-10 w-[58%] rotate-[6deg]"
                />
                <div className="absolute bottom-3 left-0 rounded-2xl bg-[#174a82] px-5 py-4 text-white shadow-xl">
                  <p className="text-xs font-black uppercase tracking-[.14em] text-yellow-200">
                    PDF principal
                  </p>
                  <p className="mt-1 text-2xl font-black">150 atividades</p>
                  <p className="text-sm font-bold text-blue-100">
                    1º ao 5º ano + gabarito
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {practiceItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-black text-white ${
                        [
                          "bg-blue-500",
                          "bg-orange-500",
                          "bg-red-500",
                          "bg-violet-500",
                          "bg-emerald-500",
                          "bg-yellow-500",
                          "bg-pink-500",
                          "bg-cyan-600",
                        ][index]
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="font-black text-slate-800">{item}</span>
                  </div>
                ))}

                <div className="sm:col-span-2 rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-5">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black">
                        No plano Completo, a experiência cresce
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Tabuada temática, problemas extras, mapa de progresso,
                        cartões de recompensa, certificados e guia para pais
                        entram como complementos visuais da jornada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-red-600">
                Escolha sua versão
              </span>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Comece com o essencial ou leve a experiência completa.
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              <article className="relative rounded-[2rem] border-2 border-blue-100 bg-[#f8fbff] p-7 shadow-[0_22px_50px_-30px_rgba(15,23,42,.35)]">
                <p className="text-sm font-black uppercase tracking-[.14em] text-[#2877b4]">
                  Plano básico
                </p>
                <h3 className="mt-1 text-3xl font-black">Essencial</h3>

                <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                  {[
                    "150 atividades principais",
                    "1º ao 5º ano",
                    "30 atividades por ano",
                    "PDF A4 para imprimir",
                    "Gabarito",
                    "Organização por temas",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm font-bold text-slate-500">
                    Pagamento único
                  </p>
                  <p className="mt-1 text-5xl font-black text-slate-900">
                    <span className="text-xl align-top">R$</span>17,90
                  </p>
                </div>

                <button
                  disabled={!checkoutReady}
                  className="mt-6 w-full rounded-xl bg-green-500 px-5 py-4 font-black text-white shadow-[0_5px_0_#15803d] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  EM CONFIGURAÇÃO
                </button>
              </article>

              <article className="relative overflow-hidden rounded-[2rem] border-4 border-emerald-400 bg-gradient-to-b from-[#174a82] to-[#0e315a] p-7 text-white shadow-[0_28px_65px_-28px_rgba(15,67,115,.6)]">
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-emerald-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-950">
                  Mais completo
                </div>

                <p className="text-sm font-black uppercase tracking-[.14em] text-emerald-300">
                  Plano completo
                </p>
                <h3 className="mt-1 text-3xl font-black">
                  Experiência Completa
                </h3>

                <ul className="mt-6 space-y-3 text-sm font-semibold text-blue-50">
                  {[
                    "Tudo do plano Essencial",
                    "Tabuada temática",
                    "Pacote extra de problemas",
                    "Mapa de progresso",
                    "Cartões de recompensa",
                    "Certificados",
                    "Guia rápido para pais",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-white/15 pt-6">
                  <p className="text-sm font-bold text-blue-200">
                    Pagamento único
                  </p>
                  <p className="mt-1 text-5xl font-black">
                    <span className="text-xl align-top">R$</span>27,90
                  </p>
                </div>

                <button
                  disabled={!checkoutReady}
                  className="mt-6 w-full rounded-xl bg-green-500 px-5 py-4 font-black text-white shadow-[0_5px_0_#15803d] disabled:cursor-not-allowed disabled:opacity-80"
                >
                  EM CONFIGURAÇÃO
                </button>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#edf8ff] py-12 md:py-16">
          <div className="container">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[2rem] border border-blue-100 bg-white p-7 text-center shadow-sm sm:flex-row sm:text-left md:p-9">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-blue-100 text-[#2676b5]">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[.14em] text-[#2676b5]">
                  Garantia planejada para a oferta
                </p>
                <h2 className="mt-1 text-2xl font-black text-slate-900">
                  7 dias para conhecer o material com tranquilidade.
                </h2>
                <p className="mt-2 leading-relaxed text-slate-600">
                  A política final será apresentada no checkout e nesta página
                  antes da campanha entrar no ar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#2676b5]">
                Perguntas frequentes
              </span>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Antes de escolher, tire suas dúvidas.
              </h2>
            </div>

            <div className="mx-auto mt-9 max-w-3xl space-y-3">
              {faqs.map(([q, a]) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-slate-200 bg-[#f8fbfd] p-5 open:bg-white open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-black text-slate-900">
                    {q}
                    <span className="float-right text-[#2676b5] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-7 leading-relaxed text-slate-600">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#10263f] py-9 text-center text-sm text-slate-300">
        <div className="container">
          <div className="mb-3 flex items-center justify-center gap-2 font-black text-white">
            <Blocks className="h-5 w-5" />
            Missões Matemáticas no Mundo dos Blocos
          </div>
          <p>Produto digital para imprimir • desenhosinfantis.shop</p>
          <p className="mt-2 text-xs text-slate-500">
            Página em desenvolvimento. Informações finais de checkout e extras
            serão confirmadas antes da campanha.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Matematica;
