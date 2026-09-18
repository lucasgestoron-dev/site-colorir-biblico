import { useEffect } from "react";
import {
  ArrowRight,
  Award,
  Blocks,
  BookOpen,
  Brain,
  Calculator,
  CalendarDays,
  CheckCircle2,
  Download,
  FileText,
  Gamepad2,
  Gift,
  Heart,
  Home,
  MessageCircle,
  Printer,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

const checkoutReady = false;

const pageSamples = [
  {
    src: "/math/page-numeros.webp",
    label: "CONTAGEM",
    title: "Números e sequências",
    accent: "bg-sky-500",
  },
  {
    src: "/math/page-adicao.webp",
    label: "SOMA E SUBTRAÇÃO",
    title: "Operações e estimativas",
    accent: "bg-orange-500",
  },
  {
    src: "/math/page-medidas.webp",
    label: "MEDIDAS",
    title: "Medidas, mapas e tempo",
    accent: "bg-emerald-500",
  },
  {
    src: "/math/page-adicao.webp",
    label: "PROBLEMAS",
    title: "Problemas contextualizados",
    accent: "bg-amber-500",
  },
  {
    src: "/math/page-medidas.webp",
    label: "DESAFIOS",
    title: "Leitura e raciocínio",
    accent: "bg-violet-500",
  },
  {
    src: "/math/page-numeros.webp",
    label: "LÓGICA",
    title: "Padrões e missões",
    accent: "bg-pink-500",
  },
];

const audience = [
  { icon: Home, text: "Pais que querem reforço em casa" },
  { icon: Gamepad2, text: "Crianças que resistem à matemática" },
  { icon: Blocks, text: "Crianças que gostam do universo de blocos" },
  { icon: Users, text: "Professores e apoio escolar" },
  { icon: CalendarDays, text: "Férias e momentos livres" },
  { icon: Heart, text: "Famílias que buscam aprendizado leve" },
];

const receives = [
  { icon: FileText, title: "PDF principal", text: "+ de 150 atividades" },
  { icon: BookOpen, title: "Organizado", text: "1º ao 5º ano" },
  { icon: CheckCircle2, title: "Gabarito", text: "Conferência facilitada" },
  { icon: Brain, title: "Instruções", text: "Uso simples e direto" },
  { icon: Download, title: "Acesso digital", text: "Baixe quando precisar" },
  { icon: Printer, title: "Pronto para imprimir", text: "Formato A4" },
];

const extras = [
  { icon: Calculator, title: "Caderno de Tabuada", text: "Revisão visual" },
  { icon: Brain, title: "Probleminhas Extras", text: "Mais prática" },
  { icon: Trophy, title: "Mapa de Progresso", text: "Acompanhe conquistas" },
  { icon: Gift, title: "Cartões de Recompensa", text: "Motivação lúdica" },
  { icon: Award, title: "Certificados", text: "Marque cada etapa" },
  { icon: BookOpen, title: "Guia para Responsáveis", text: "Uso sem complicação" },
];

const faqs = [
  ["Como recebo o material?", "O produto é digital. Depois da compra, o acesso ao PDF é liberado para download conforme as instruções do checkout."],
  ["Posso imprimir quantas vezes quiser?", "Você pode imprimir as atividades para uso pessoal conforme as condições finais da oferta."],
  ["Serve para qual idade?", "O material está organizado por ano escolar, do 1º ao 5º ano do Ensino Fundamental."],
  ["O material é físico?", "Não. É um material digital em PDF, pronto para imprimir em tamanho A4."],
  ["Como funciona a garantia?", "A política final de garantia será exibida na página e no checkout antes do lançamento da campanha."],
  ["Vem com gabarito?", "Sim. O projeto prevê gabarito para facilitar a conferência das atividades."],
];

const PixelTree = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-32 w-24 ${className}`} aria-hidden="true">
    <div className="absolute bottom-0 left-1/2 h-16 w-6 -translate-x-1/2 bg-[#8c5527] shadow-[inset_-6px_0_0_#603817]" />
    <div className="absolute left-0 top-6 h-12 w-12 rounded-[4px] bg-[#58a52f] shadow-[inset_-8px_-8px_0_#31741d,inset_6px_6px_0_#86c64d]" />
    <div className="absolute right-0 top-4 h-12 w-12 rounded-[4px] bg-[#65b638] shadow-[inset_-8px_-8px_0_#33761f,inset_6px_6px_0_#92ce58]" />
    <div className="absolute left-5 top-0 h-14 w-14 rounded-[4px] bg-[#5fae34] shadow-[inset_-8px_-8px_0_#34751f,inset_6px_6px_0_#95d05d]" />
  </div>
);

const PixelBlock = ({
  className = "",
  tone = "bg-emerald-500",
}: {
  className?: string;
  tone?: string;
}) => (
  <span
    className={`absolute h-9 w-9 rounded-[5px] border-2 border-black/10 shadow-[inset_5px_5px_0_rgba(255,255,255,.25),inset_-5px_-5px_0_rgba(0,0,0,.14),0_10px_16px_-10px_rgba(15,23,42,.55)] ${tone} ${className}`}
    aria-hidden="true"
  />
);

const BlockKid = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-48 w-36 ${className}`} aria-hidden="true">
    <div className="absolute left-7 top-1 h-24 w-24 rounded-[14px] bg-[#d99560] shadow-[inset_-10px_-8px_0_#bb6f3f]" />
    <div className="absolute left-5 top-0 h-9 w-28 rounded-[8px] bg-[#5a301d] shadow-[inset_-8px_-6px_0_#3b1e11]" />
    <div className="absolute left-5 top-6 h-14 w-8 bg-[#5a301d]" />
    <div className="absolute right-5 top-6 h-11 w-7 bg-[#5a301d]" />
    <div className="absolute left-[52px] top-11 h-5 w-5 rounded-[4px] bg-white">
      <span className="absolute left-1 top-1 h-3 w-3 rounded-sm bg-[#263b4b]" />
    </div>
    <div className="absolute right-[28px] top-11 h-5 w-5 rounded-[4px] bg-white">
      <span className="absolute left-1 top-1 h-3 w-3 rounded-sm bg-[#263b4b]" />
    </div>
    <div className="absolute left-[62px] top-[73px] h-2 w-8 rounded-full bg-[#7a3b2a]" />
    <div className="absolute bottom-0 left-4 h-82 w-28 rounded-t-[20px] bg-[#2483b9] shadow-[inset_-10px_0_0_#17618c]" style={{ height: 84 }} />
    <div className="absolute bottom-12 -left-3 h-16 w-9 rotate-[18deg] rounded-lg bg-[#d99560]" />
    <div className="absolute bottom-12 -right-3 h-16 w-9 -rotate-[18deg] rounded-lg bg-[#d99560]" />
    <div className="absolute bottom-[54px] -right-5 rotate-12">
      <div
        className="h-11 w-10 bg-cyan-300 shadow-[inset_7px_0_0_#ecfeff,inset_-7px_0_0_#0891b2,inset_0_-7px_0_#0e7490]"
        style={{ clipPath: "polygon(50% 0, 88% 25%, 78% 78%, 50% 100%, 22% 78%, 12% 25%)" }}
      />
    </div>
  </div>
);

const ProductCover = ({ compact = false }: { compact?: boolean }) => (
  <div
    className={`relative overflow-hidden rounded-[1.8rem] border-[5px] border-white bg-gradient-to-b from-[#1f7fbd] via-[#176da8] to-[#0d426f] text-center text-white shadow-[0_28px_65px_-24px_rgba(5,43,78,.65)] ${
      compact ? "p-4" : "p-5 sm:p-6"
    }`}
  >
    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)", backgroundSize: "22px 22px" }} />
    <div className="relative">
      <p className="text-[10px] font-black uppercase tracking-[.2em] text-yellow-200 sm:text-xs">
        Missões Matemáticas
      </p>
      <h3
        className={`mt-2 font-black leading-[.88] text-yellow-300 ${compact ? "text-2xl" : "text-3xl sm:text-4xl"}`}
        style={{
          WebkitTextStroke: "1.5px #0a3157",
          textShadow: "0 4px 0 #0a3157, 0 7px 0 rgba(0,0,0,.18)",
        }}
      >
        MUNDO DOS
        <br />
        BLOCOS
      </h3>
      <div className="mx-auto mt-5 flex max-w-[230px] items-end justify-center gap-2">
        <PixelBlock className="static !h-9 !w-9" tone="bg-emerald-500" />
        <PixelBlock className="static !h-12 !w-12" tone="bg-orange-400" />
        <PixelBlock className="static !h-10 !w-10" tone="bg-cyan-300" />
        <PixelBlock className="static !h-8 !w-8" tone="bg-violet-500" />
      </div>
      <p className="mt-4 text-xs font-black text-blue-50 sm:text-sm">
        +150 atividades • 1º ao 5º ano
      </p>
      <p className="mt-2 rounded-xl bg-white/12 px-3 py-2 text-[10px] font-black uppercase tracking-wide text-blue-50">
        Aprender • resolver • avançar
      </p>
    </div>
  </div>
);

const Matematica = () => {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Missões Matemáticas no Mundo dos Blocos | 1º ao 5º ano";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const oldDescription = meta?.content;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = "Mais de 150 atividades de matemática para imprimir do 1º ao 5º ano, com missões visuais no Mundo dos Blocos e gabarito.";

    return () => {
      document.title = oldTitle;
      if (meta && oldDescription !== undefined) meta.content = oldDescription;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 bg-white/10 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between gap-3 text-[#123d66]">
          <a href="#top" className="flex items-center gap-2.5 font-black text-[#15508c]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#37a3df] to-[#15649e] text-white shadow-[0_4px_0_#0d4d7d]">
              <Blocks className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block text-sm sm:text-base">Mundo dos Blocos</span>
              <span className="block text-[9px] font-bold uppercase tracking-[.15em] text-slate-400">
                Missões Matemáticas
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 text-xs font-black text-slate-600 lg:flex">
            <a href="#como-funciona" className="hover:text-[#176da8]">Como funciona</a>
            <a href="#recebe" className="hover:text-[#176da8]">O que você recebe</a>
            <a href="#uso" className="hover:text-[#176da8]">Como usar</a>
            <a href="#faq" className="hover:text-[#176da8]">Perguntas frequentes</a>
          </nav>

          <a
            href="#planos"
            className="rounded-full bg-green-500 px-4 py-2.5 text-xs font-black text-white shadow-[0_4px_0_#15803d] transition hover:translate-y-0.5 hover:shadow-[0_2px_0_#15803d] sm:text-sm"
          >
            QUERO GARANTIR
          </a>
        </div>
      </header>

      <main>
        <section
          id="top"
          className="relative overflow-hidden bg-gradient-to-b from-[#8ad8f6] via-[#4fb4e7] to-[#2d8dcc] pt-24 pb-14 md:pt-28 md:pb-20"
        >
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#5ba83a] via-[#78c954] to-transparent" /><div className="absolute inset-x-0 bottom-0 h-8 bg-[#6e4522] shadow-[inset_0_8px_0_#4f8f2d]" />
          <div className="absolute inset-0 opacity-[.14]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
          <PixelTree className="pointer-events-none absolute -left-3 bottom-10 hidden scale-125 lg:block" />
          <PixelTree className="pointer-events-none absolute right-0 bottom-8 hidden scale-110 lg:block" />
          <PixelBlock className="left-[12%] top-28 hidden rotate-12 md:block" tone="bg-emerald-500" />
          <PixelBlock className="right-[12%] top-20 hidden -rotate-6 md:block" tone="bg-orange-400" />
          <PixelBlock className="right-[6%] top-52 hidden rotate-12 lg:block" tone="bg-violet-500" />
          <div className="pointer-events-none absolute right-[1.5%] bottom-24 hidden h-44 w-20 border-[5px] border-[#6d6f73] bg-[#96999d] shadow-[inset_10px_0_0_#b9bdc1,inset_-10px_0_0_#6f7377] lg:block">
            <div className="absolute -left-3 -top-7 h-9 w-24 bg-[#7f8387] shadow-[inset_0_-7px_0_#62666a]" />
            <div className="absolute left-5 top-8 h-10 w-8 bg-[#315d87]" />
            <div className="absolute left-5 top-24 h-12 w-8 bg-[#315d87]" />
          </div>

          <div className="container relative">
            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[.88fr_1.12fr]">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-4 py-2 text-xs font-black uppercase tracking-[.14em] text-white shadow-sm backdrop-blur">
                  <Sparkles className="h-4 w-4 text-yellow-200" />
                  Desafios reais • diversão no papel
                </span>

                <p className="mt-5 text-sm font-black uppercase tracking-[.18em] text-blue-950/80">
                  Missões Matemáticas
                </p>

                <h1
                  className="mt-1 text-5xl font-black leading-[.86] text-yellow-300 sm:text-6xl md:text-7xl"
                  style={{
                    WebkitTextStroke: "2px #0b3c68",
                    textShadow: "0 5px 0 #0b3c68, 0 10px 16px rgba(15,23,42,.28)",
                  }}
                >
                  MUNDO DOS
                  <br />
                  BLOCOS
                </h1>

                <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-white/40 bg-[#145f98]/85 px-5 py-4 text-white shadow-xl lg:mx-0">
                  <p className="text-xl font-black leading-tight sm:text-2xl">
                    Mais de 150 atividades de matemática para o 1º ao 5º ano
                  </p>
                  <p className="mt-2 text-sm font-semibold text-blue-50 sm:text-base">
                    Aprender matemática pode ser uma grande aventura.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl">
                  {[
                    ["+150", "atividades"],
                    ["1º ao 5º", "ano"],
                    ["PDF", "para imprimir"],
                    ["Sem tela", "na hora da atividade"],
                  ].map(([strong, text]) => (
                    <div key={strong} className="rounded-2xl border border-white/45 bg-white/95 p-3 text-center shadow-lg">
                      <p className="text-lg font-black text-[#145f98]">{strong}</p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-wide text-slate-500">{text}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#planos"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-green-300 bg-green-500 px-7 py-4 text-base font-black text-white shadow-[0_6px_0_#15803d,0_16px_30px_-15px_rgba(21,128,61,.75)] transition hover:translate-y-1 hover:shadow-[0_3px_0_#15803d]"
                >
                  QUERO GARANTIR AGORA <ArrowRight className="h-5 w-5" />
                </a>

                <div className="mt-4 flex flex-wrap justify-center gap-4 text-[11px] font-bold text-white/95 lg:justify-start">
                  <span>● Compra segura</span>
                  <span>● Acesso digital</span>
                  <span>● Garantia planejada</span>
                </div>
              </div>

              <div className="relative mx-auto h-[500px] w-full max-w-[620px] sm:h-[560px]">
                <div className="absolute left-[3%] top-20 w-[39%] -rotate-6 rounded-xl border-[5px] border-white bg-white p-1 shadow-2xl">
                  <img src="/math/page-numeros.webp" alt="Página real do material com atividades de números" className="w-full rounded-lg" loading="eager" />
                </div>
                <div className="absolute right-[2%] top-16 w-[39%] rotate-6 rounded-xl border-[5px] border-white bg-white p-1 shadow-2xl">
                  <img src="/math/page-medidas.webp" alt="Página real do material com atividades de medidas" className="w-full rounded-lg" loading="eager" />
                </div>
                <div className="absolute left-[15%] top-6 w-[33%] -rotate-2 rounded-xl border-[5px] border-white bg-white p-1 shadow-2xl">
                  <img src="/math/page-adicao.webp" alt="Página real do material com atividades de operações" className="w-full rounded-lg" loading="eager" />
                </div>
                <div className="absolute right-[14%] top-4 w-[32%] rotate-3 rounded-xl border-[5px] border-white bg-white p-1 shadow-2xl">
                  <img src="/math/page-numeros.webp" alt="Página real do material" className="w-full rounded-lg" loading="eager" />
                </div>

                <div className="absolute left-1/2 top-20 z-20 w-[48%] -translate-x-1/2 sm:w-[44%]">
                  <ProductCover />
                </div>

                <BlockKid className="absolute bottom-0 left-[7%] z-30 scale-[.82] sm:scale-100" />
                <div className="absolute bottom-7 left-1/2 z-30 h-24 w-28 -translate-x-1/2 rounded-[10px] border-[6px] border-[#5b321b] bg-[#bd6a20] shadow-[inset_0_12px_0_#df8c34,inset_0_-10px_0_#8f4818,0_18px_28px_-14px_rgba(15,23,42,.7)]">
                  <div className="absolute left-0 right-0 top-9 h-[6px] bg-[#5b321b]" />
                  <div className="absolute left-1/2 top-7 h-9 w-5 -translate-x-1/2 rounded-sm border-2 border-[#b8bec7] bg-[#e7ebef]" />
                </div>
                <BlockKid className="absolute bottom-0 right-[5%] z-30 scale-[.72] sm:scale-[.88]" />
                <div className="absolute bottom-24 right-0 z-20 max-w-[165px] rotate-1 rounded-xl border-4 border-[#6a421f] bg-[#a6652f] px-4 py-4 text-center shadow-xl">
                  <p className="text-xs font-black leading-tight text-white">MATEMÁTICA<br/>TAMBÉM PODE<br/>SER DIVERTIDA!</p>
                </div>

                <div className="absolute right-[2%] top-[34%] z-30 max-w-[185px] rotate-3 rounded-2xl border-2 border-yellow-300 bg-[#fff1a8] p-4 text-center shadow-xl">
                  <p className="text-xs font-black leading-tight text-[#173b63]">
                    DESAFIOS REAIS
                    <br />
                    APRENDIZADO DE VERDADE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="amostras" className="bg-[#eef8ff] py-14 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[.18em] text-[#2d7eb7]">Páginas reais do material</p>
              <h2 className="mt-2 text-3xl font-black text-[#153d66] md:text-5xl">
                Veja como são as atividades por dentro
              </h2>
              <p className="mt-3 text-base font-semibold text-slate-600">
                Atividades criativas, com universo de blocos e exercícios que a criança realmente resolve.
              </p>
            </div>

            <div className="mx-auto mt-9 flex max-w-7xl gap-4 overflow-x-auto pb-5 snap-x md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible">
              {pageSamples.map((sample, index) => (
                <article key={sample.label} className="min-w-[180px] snap-center rounded-[1.2rem] bg-white p-2.5 shadow-[0_16px_35px_-22px_rgba(15,23,42,.6)] md:min-w-0">
                  <span className={`mx-auto mb-2 block w-fit rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wide text-white ${sample.accent}`}>
                    {sample.label}
                  </span>
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <img src={sample.src} alt={sample.title} className="aspect-[210/297] w-full object-cover" loading={index < 3 ? "eager" : "lazy"} />
                  </div>
                  <p className="mt-2 text-center text-xs font-black text-slate-700">{sample.title}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-[#fffdf8] py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_22px_60px_-36px_rgba(15,23,42,.5)] lg:grid-cols-[.9fr_1.1fr]">
              <div className="relative min-h-[300px] bg-[#f5ead9]">
                <img
                  src="/math/child-study.webp"
                  alt="Criança realizando atividade matemática impressa"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute left-5 top-5 rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
                  <p className="font-black text-[#164a79]">Ele aprende</p>
                  <p className="text-sm font-bold text-slate-600">se divertindo.</p>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <h2 className="text-3xl font-black leading-tight text-[#153d66] md:text-4xl">
                  Simples de baixar, imprimir e transformar a rotina de estudos
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    ["1", "Baixe o PDF", "e tenha o material disponível."],
                    ["2", "Imprima", "quando quiser, quantas páginas precisar."],
                    ["3", "Entregue a missão", "para a criança resolver no papel."],
                    ["4", "Veja a matemática", "ganhar uma apresentação mais convidativa."],
                  ].map(([n, title, text]) => (
                    <div key={n} className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-4">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-green-500 text-sm font-black text-white shadow-[0_3px_0_#15803d]">{n}</span>
                      <p className="mt-3 font-black text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="uso" className="bg-white py-14 md:py-20">
          <div className="container">
            <h2 className="text-center text-3xl font-black text-[#153d66] md:text-4xl">
              Esse material é ideal para:
            </h2>

            <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {audience.map(({ icon: Icon, text }, index) => (
                <article key={text} className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-4 text-center shadow-sm">
                  <div className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl ${
                    ["bg-orange-100 text-orange-600","bg-violet-100 text-violet-600","bg-blue-100 text-blue-600","bg-emerald-100 text-emerald-600","bg-yellow-100 text-yellow-700","bg-rose-100 text-rose-600"][index]
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-3 text-xs font-black leading-snug text-slate-700 sm:text-sm">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-r from-[#0f3c69] via-[#145586] to-[#0e355f] py-12 text-white md:py-16">
          <PixelBlock className="left-[3%] top-8 hidden rotate-12 lg:block" tone="bg-emerald-500" />
          <PixelBlock className="right-[4%] bottom-8 hidden -rotate-6 lg:block" tone="bg-cyan-300" />

          <div className="container">
            <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_.9fr]">
              <div>
                <h2 className="text-3xl font-black leading-tight md:text-5xl">
                  Mais do que atividades,
                  <br />
                  é uma nova forma de se relacionar com a matemática.
                </h2>

                <div className="mt-6 grid gap-2 text-sm font-bold text-blue-50 sm:grid-cols-2">
                  {[
                    "Aumenta o interesse da criança",
                    "Desenvolve raciocínio lógico",
                    "Trabalha diversas habilidades",
                    "Atividades ilustradas e envolventes",
                    "Pronto para imprimir e usar",
                    "Organizado por ano escolar",
                  ].map((item) => (
                    <p key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto flex min-h-[230px] w-full max-w-md items-end justify-center">
                <BlockKid className="relative z-20" />
                <div className="absolute right-0 top-4 max-w-[160px] rotate-2 rounded-2xl border-2 border-yellow-300 bg-[#fff0a1] p-4 text-center shadow-xl">
                  <p className="text-sm font-black leading-tight text-[#173b63]">
                    PEQUENOS DESAFIOS,
                    <br />
                    GRANDES CONQUISTAS!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffdf8] py-14 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black text-[#153d66] md:text-4xl">
                Como isso pode entrar na rotina das mães
              </h2>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Exemplos ilustrativos de uso — serão substituídos por avaliações reais quando houver compradores.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
              {[
                ["Fernanda", "Meu filho gosta desse universo. Eu usaria as missões nos dias em que ele já está cansado da tarefa comum."],
                ["Camila", "Nas férias eu usaria uma página por vez, só para manter a matemática presente sem transformar em aula."],
                ["Juliana", "A possibilidade de imprimir só o conteúdo que ele está estudando deixaria o reforço muito mais prático."],
              ].map(([name, text], index) => (
                <article key={name} className="rounded-2xl border border-green-100 bg-[#e8f6e4] p-3 shadow-sm">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className={`grid h-10 w-10 place-items-center rounded-full text-sm font-black text-white ${["bg-rose-400","bg-sky-500","bg-violet-500"][index]}`}>
                        {name[0]}
                      </div>
                      <div>
                        <p className="font-black text-slate-800">{name}</p>
                        <p className="text-[10px] font-bold text-green-600">exemplo de uso</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">“{text}”</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="recebe" className="bg-white py-14 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black text-[#153d66] md:text-4xl">
                Tudo o que você vai receber
              </h2>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Material completo, organizado e pronto para usar.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {receives.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-4 text-center shadow-sm">
                  <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-blue-100 text-[#176da8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-black text-slate-800">{title}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{text}</p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
              <div className="relative mx-auto w-full max-w-sm py-6">
                <div className="absolute left-0 top-12 w-[45%] -rotate-6 rounded-xl border-4 border-white bg-white p-1 shadow-xl">
                  <img src="/math/page-numeros.webp" alt="Página real do material" className="w-full rounded-lg" loading="lazy" />
                </div>
                <div className="absolute right-0 top-10 w-[45%] rotate-6 rounded-xl border-4 border-white bg-white p-1 shadow-xl">
                  <img src="/math/page-adicao.webp" alt="Página real do material" className="w-full rounded-lg" loading="lazy" />
                </div>
                <div className="relative z-20 mx-auto w-[60%]">
                  <ProductCover compact />
                </div>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[.18em] text-orange-600">Plano completo</p>
                <h3 className="mt-2 text-3xl font-black text-[#153d66]">
                  E não para por aí...
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Além do material principal, a versão completa foi pensada para deixar a jornada mais visual, acompanhável e motivadora.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {extras.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="rounded-2xl border border-orange-100 bg-[#fff9ef] p-4 text-center">
                      <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-white text-orange-600 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-2 text-xs font-black text-slate-800">{title}</p>
                      <p className="mt-1 text-[10px] font-semibold text-slate-500">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="relative overflow-hidden bg-gradient-to-b from-[#edf8ff] to-[#dff2ff] py-14 md:py-20">
          <PixelTree className="pointer-events-none absolute -left-3 bottom-0 hidden lg:block" />
          <PixelTree className="pointer-events-none absolute right-0 bottom-0 hidden lg:block" />

          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-red-600">
                Escolha a melhor opção para você
              </span>
              <h2 className="mt-4 text-3xl font-black text-[#153d66] md:text-5xl">
                Dois planos, a mesma base de aprendizado.
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              <article className="rounded-[2rem] border-2 border-blue-200 bg-white p-6 shadow-[0_22px_50px_-30px_rgba(15,23,42,.45)]">
                <p className="text-center text-xs font-black uppercase tracking-[.14em] text-[#2877b4]">Plano Essencial</p>
                <div className="mx-auto mt-4 w-36"><ProductCover compact /></div>

                <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                  {[
                    "150 atividades principais",
                    "Organizado do 1º ao 5º ano",
                    "Gabarito completo",
                    "Instruções de uso",
                    "Acesso digital",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-center text-sm font-bold text-slate-500">Pagamento único</p>
                <p className="text-center text-5xl font-black text-[#153d66]">
                  <span className="align-top text-xl">R$</span>17,90
                </p>

                <button
                  disabled={!checkoutReady}
                  className="mt-6 w-full rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-[0_5px_0_#15803d] disabled:cursor-not-allowed disabled:opacity-80"
                >
                  EM CONFIGURAÇÃO
                </button>
              </article>

              <article className="relative overflow-hidden rounded-[2rem] border-4 border-emerald-400 bg-gradient-to-b from-[#174f86] to-[#0b2e52] p-6 text-white shadow-[0_30px_65px_-25px_rgba(9,61,104,.6)]">
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-emerald-400 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-emerald-950">
                  Mais escolhido
                </div>
                <p className="text-center text-xs font-black uppercase tracking-[.14em] text-emerald-300">Plano Completo</p>
                <div className="mx-auto mt-4 w-36"><ProductCover compact /></div>

                <ul className="mt-6 space-y-3 text-sm font-semibold text-blue-50">
                  {[
                    "Tudo do Plano Essencial",
                    "Caderno de Tabuada",
                    "Probleminhas Extras",
                    "Mapa de Progresso",
                    "Cartões de Recompensa",
                    "Certificados de Conquista",
                    "Guia para Responsáveis",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-center text-sm font-bold text-blue-200">Pagamento único</p>
                <p className="text-center text-5xl font-black text-emerald-300">
                  <span className="align-top text-xl">R$</span>27,90
                </p>

                <button
                  disabled={!checkoutReady}
                  className="mt-6 w-full rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-[0_5px_0_#15803d] disabled:cursor-not-allowed disabled:opacity-80"
                >
                  EM CONFIGURAÇÃO
                </button>
              </article>
            </div>

            <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
              {[
                [ShieldCheck, "Compra segura"],
                [Download, "Acesso digital"],
                [Award, "7 dias de garantia"],
              ].map(([Icon, text]) => {
                const Cmp = Icon as typeof ShieldCheck;
                return (
                  <div key={String(text)} className="rounded-2xl bg-white/90 p-3 shadow-sm">
                    <Cmp className="mx-auto h-5 w-5 text-[#176da8]" />
                    <p className="mt-1 text-[10px] font-black text-slate-600 sm:text-xs">{String(text)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-14 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black text-[#153d66] md:text-4xl">
                Perguntas frequentes
              </h2>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-3 md:grid-cols-2">
              {faqs.map(([q, a]) => (
                <details key={q} className="group rounded-xl border border-slate-200 bg-[#f8fbfd] p-4 open:bg-white open:shadow-sm">
                  <summary className="cursor-pointer list-none text-sm font-black text-slate-800">
                    {q}
                    <span className="float-right text-[#2676b5] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-7 text-sm leading-relaxed text-slate-600">{a}</p>
                </details>
              ))}
            </div>

            <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-[2rem] border border-blue-100 bg-[#eaf7ff] p-6 shadow-sm md:flex-row md:p-8">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#2676b5] text-white shadow-[0_5px_0_#174d78]">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[.14em] text-[#2676b5]">Garantia planejada</p>
                  <h3 className="mt-1 text-2xl font-black text-[#153d66]">7 dias para conhecer o material com tranquilidade.</h3>
                </div>
              </div>

              <a
                href="#planos"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-green-500 px-6 py-4 text-sm font-black text-white shadow-[0_5px_0_#15803d]"
              >
                QUERO GARANTIR AGORA <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[#10263f] py-10 text-sm text-slate-300">
        <PixelTree className="pointer-events-none absolute -left-2 bottom-0 hidden scale-75 md:block" />
        <PixelTree className="pointer-events-none absolute right-0 bottom-0 hidden scale-75 md:block" />
        <div className="container relative text-center">
          <div className="mb-3 flex items-center justify-center gap-2 font-black text-white">
            <Blocks className="h-5 w-5" />
            Missões Matemáticas no Mundo dos Blocos
          </div>
          <p>Produto digital para imprimir • desenhosinfantis.shop</p>
          <p className="mt-2 text-xs text-slate-500">
            Página em desenvolvimento. Checkout e termos finais serão confirmados antes da campanha.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Matematica;
