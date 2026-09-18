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
  { src: "/math/page-numeros.webp", label: "CONTAGEM", title: "QUANTOS BLOCOS?" },
  { src: "/math/page-adicao.webp", label: "SOMA E SUBTRAÇÃO", title: "SOMANDO RECURSOS" },
  { src: "/math/page-medidas.webp", label: "PROBLEMAS", title: "DESAFIO DO CONSTRUTOR" },
  { src: "/math/page-numeros.webp", label: "FRAÇÕES", title: "FRAÇÕES NO MUNDO DOS BLOCOS" },
  { src: "/math/page-medidas.webp", label: "MEDIDAS", title: "MEDINDO CONSTRUÇÕES" },
  { src: "/math/page-adicao.webp", label: "DESAFIOS LÓGICOS", title: "LABIRINTO DOS BLOCOS" },
];

const audience = [
  { icon: Home, text: "Pais que querem reforço em casa" },
  { icon: BookOpen, text: "Crianças que resistem à matemática" },
  { icon: Gamepad2, text: "Crianças que gostam do universo de blocos" },
  { icon: Users, text: "Professores e apoio escolar" },
  { icon: CalendarDays, text: "Férias e momentos livres" },
  { icon: Heart, text: "Famílias que buscam aprendizado leve e significativo" },
];

const receives = [
  { icon: FileText, title: "PDF principal", text: "+ de 150 atividades" },
  { icon: BookOpen, title: "Organizado do", text: "1º ao 5º ano" },
  { icon: CheckCircle2, title: "Gabarito completo", text: "para conferência" },
  { icon: Brain, title: "Instruções de uso", text: "simples e práticas" },
  { icon: Download, title: "Acesso imediato", text: "material digital" },
  { icon: Printer, title: "Para imprimir", text: "quando quiser" },
];

const extras = [
  { src: "/math/page-adicao.webp", title: "Caderno de Tabuada Ilustrado" },
  { src: "/math/page-numeros.webp", title: "Probleminhas Extras" },
  { src: "/math/page-medidas.webp", title: "Mapa de Progresso" },
  { src: "/math/page-adicao.webp", title: "Cartões de Recompensas" },
  { src: "/math/page-numeros.webp", title: "Certificado de Conquistas" },
  { src: "/math/page-medidas.webp", title: "Guia para Responsáveis" },
];

const faqs = [
  ["Como recebo o material?", "O material é digital e o acesso é liberado após a confirmação do pagamento."],
  ["O material é físico?", "Não. Você recebe arquivos digitais em PDF prontos para imprimir."],
  ["Posso imprimir quantas vezes quiser?", "Sim, para uso pessoal e familiar, de acordo com os termos do produto."],
  ["Como funciona a garantia?", "Você terá 7 dias de garantia para solicitar reembolso dentro das regras informadas no checkout."],
  ["Serve para qual idade?", "O material foi organizado para crianças do 1º ao 5º ano do Ensino Fundamental."],
  ["E se eu tiver dúvidas?", "Você poderá usar o canal de suporte informado no checkout."],
];

const PixelTree = ({ className = "", small = false }: { className?: string; small?: boolean }) => (
  <div className={"relative " + (small ? "h-20 w-14" : "h-28 w-20") + " " + className} aria-hidden="true">
    <div className={"absolute bottom-0 left-1/2 -translate-x-1/2 rounded-sm bg-[#8a5528] shadow-[inset_-5px_0_0_#603817] " + (small ? "h-10 w-4" : "h-14 w-5")} />
    <div className={"absolute left-0 top-5 rounded-[3px] bg-[#5aac32] shadow-[inset_-6px_-6px_0_#34791f,inset_5px_5px_0_#93d45a] " + (small ? "h-8 w-8" : "h-11 w-11")} />
    <div className={"absolute right-0 top-3 rounded-[3px] bg-[#67bb39] shadow-[inset_-6px_-6px_0_#34791f,inset_5px_5px_0_#9cda64] " + (small ? "h-8 w-8" : "h-11 w-11")} />
    <div className={"absolute left-1/2 top-0 -translate-x-1/2 rounded-[3px] bg-[#60b536] shadow-[inset_-6px_-6px_0_#34791f,inset_5px_5px_0_#a1df68] " + (small ? "h-9 w-9" : "h-12 w-12")} />
  </div>
);

const PixelBlock = ({
  className = "",
  color = "#35a851",
}: {
  className?: string;
  color?: string;
}) => (
  <span
    className={"absolute rounded-[4px] border border-black/10 shadow-[inset_4px_4px_0_rgba(255,255,255,.28),inset_-4px_-4px_0_rgba(0,0,0,.16),0_8px_12px_-8px_rgba(15,23,42,.6)] " + className}
    style={{ backgroundColor: color }}
    aria-hidden="true"
  />
);

const PixelKid = ({
  className = "",
  girl = false,
}: {
  className?: string;
  girl?: boolean;
}) => (
  <div className={"relative h-40 w-28 " + className} aria-hidden="true">
    <div className="absolute left-[22px] top-1 h-[76px] w-[76px] rounded-[10px] bg-[#d8915f] shadow-[inset_-8px_-7px_0_#bd7345]" />
    <div className={"absolute left-[18px] top-0 h-[31px] w-[84px] rounded-[7px] shadow-[inset_-7px_-6px_0_rgba(0,0,0,.25)] " + (girl ? "bg-[#8b3d22]" : "bg-[#56321f]")} />
    <div className={"absolute left-[17px] top-5 h-[45px] w-[22px] " + (girl ? "bg-[#8b3d22]" : "bg-[#56321f]")} />
    <div className={"absolute right-[6px] top-5 h-[42px] w-[22px] " + (girl ? "bg-[#8b3d22]" : "bg-[#56321f]")} />
    {girl && <div className="absolute -right-1 top-[50px] h-16 w-8 rounded-b-2xl bg-[#8b3d22]" />}
    <div className="absolute left-[43px] top-[37px] h-4 w-4 rounded-[3px] bg-white">
      <span className="absolute left-1 top-1 h-2.5 w-2.5 rounded-sm bg-[#273b4a]" />
    </div>
    <div className="absolute right-[17px] top-[37px] h-4 w-4 rounded-[3px] bg-white">
      <span className="absolute left-1 top-1 h-2.5 w-2.5 rounded-sm bg-[#273b4a]" />
    </div>
    <div className="absolute left-[50px] top-[60px] h-1.5 w-7 rounded-full bg-[#7b3f30]" />
    <div className="absolute bottom-0 left-3 h-[72px] w-24 rounded-t-[14px] bg-[#2183bb] shadow-[inset_-9px_0_0_#17628e]" />
    <div className="absolute bottom-10 -left-1 h-14 w-7 rotate-[17deg] rounded-md bg-[#d8915f]" />
    <div className="absolute bottom-10 -right-2 h-14 w-7 -rotate-[17deg] rounded-md bg-[#d8915f]" />
  </div>
);

const ProductCover = ({ compact = false }: { compact?: boolean }) => (
  <div
    className={
      "relative overflow-hidden rounded-[14px] border-[3px] border-white bg-gradient-to-b from-[#2287c2] via-[#176ca7] to-[#0b3b66] text-center text-white shadow-[0_18px_28px_-15px_rgba(8,47,84,.78)] " +
      (compact ? "p-2.5" : "p-4")
    }
  >
    <div
      className="absolute inset-0 opacity-[.12]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.75) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.75) 1px,transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
    <div className="relative">
      <div className="mx-auto inline-flex rounded-full bg-[#f2b615] px-2 py-1 text-[7px] font-black uppercase tracking-wider text-[#16476f]">
        Missões Matemáticas
      </div>
      <h3
        className={(compact ? "mt-1 text-[17px]" : "mt-2 text-[28px]") + " font-black leading-[.85] text-[#ffd429]"}
        style={{
          WebkitTextStroke: compact ? "1px #0b355b" : "1.4px #0b355b",
          textShadow: compact ? "0 2px 0 #0b355b" : "0 3px 0 #0b355b",
        }}
      >
        MUNDO DOS
        <br />
        BLOCOS
      </h3>
      <div className={"mx-auto flex items-end justify-center gap-1.5 " + (compact ? "mt-2" : "mt-4")}>
        <span className="h-5 w-5 rounded-[3px] bg-[#47aa45] shadow-[inset_3px_3px_0_rgba(255,255,255,.25),inset_-3px_-3px_0_rgba(0,0,0,.18)]" />
        <span className="h-7 w-7 rounded-[3px] bg-[#f49b24] shadow-[inset_3px_3px_0_rgba(255,255,255,.25),inset_-3px_-3px_0_rgba(0,0,0,.18)]" />
        <span className="h-6 w-6 rounded-[3px] bg-[#30c9dd] shadow-[inset_3px_3px_0_rgba(255,255,255,.25),inset_-3px_-3px_0_rgba(0,0,0,.18)]" />
      </div>
      <p className={(compact ? "mt-2 text-[7px]" : "mt-3 text-[10px]") + " font-black text-blue-50"}>
        +150 ATIVIDADES
      </p>
    </div>
  </div>
);

const Testimonial = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-[#ccebd7] bg-[#effbf3] p-3 shadow-[0_8px_18px_-14px_rgba(15,23,42,.45)]">
    <div className="mb-2 flex items-center gap-2">
      <div className="grid h-8 w-8 place-items-center rounded-full bg-[#e5a16b] text-xs font-black text-white shadow-inner">
        {name.slice(0, 1)}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-black text-[#173b63]">{name}</p>
      </div>
      <MessageCircle className="h-4 w-4 text-[#20b865]" />
    </div>
    <p className="text-[10px] font-medium leading-relaxed text-slate-700">{children}</p>
  </div>
);

const Matematica = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Missões Matemáticas no Mundo dos Blocos | 1º ao 5º ano";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const previousDescription = meta?.content;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Mais de 150 atividades de matemática para imprimir do 1º ao 5º ano, com missões visuais no Mundo dos Blocos.";

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) meta.content = previousDescription;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffaf0] text-[#173b63]">
      <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#74cff5] via-[#4eb7e7] to-[#2a91cf]">
        <div
          className="absolute inset-0 opacity-[.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.55) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.55) 1px,transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#65b63e] via-[#6ec84d] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-5 bg-[#765029] shadow-[inset_0_5px_0_#398132]" />

        <PixelTree className="pointer-events-none absolute -left-6 bottom-5 hidden scale-[1.45] sm:block" />
        <PixelTree className="pointer-events-none absolute right-0 top-16 hidden scale-[1.1] sm:block" />
        <PixelTree className="pointer-events-none absolute right-20 bottom-1 hidden scale-[.85] lg:block" />

        <div className="pointer-events-none absolute right-[1%] top-[84px] hidden h-[170px] w-[70px] border-[4px] border-[#626970] bg-[#9ba0a4] shadow-[inset_9px_0_0_#b8bdc1,inset_-9px_0_0_#71767b] lg:block">
          <div className="absolute -left-2 -top-7 h-8 w-[82px] bg-[#777c81] shadow-[inset_0_-6px_0_#5d6267]" />
          <div className="absolute left-[20px] top-[36px] h-9 w-7 bg-[#315f8d]" />
          <div className="absolute left-[20px] top-[98px] h-10 w-7 bg-[#315f8d]" />
          <div className="absolute -right-7 top-11 h-9 w-9 rotate-12 bg-[#46a333]" />
        </div>

        <header className="relative z-40 border-b border-white/25 bg-white/20 backdrop-blur-sm">
          <div className="mx-auto flex h-[58px] max-w-[1120px] items-center justify-between gap-4 px-4 sm:px-6">
            <a href="#top" className="flex items-center gap-2">
              <div className="grid h-9 w-9 rotate-[-4deg] place-items-center rounded-[8px] border-[2px] border-[#70410f] bg-[#f59a23] shadow-[3px_3px_0_#0d5a88]">
                <Blocks className="h-5 w-5 text-[#143e62]" />
              </div>
              <div className="leading-none">
                <p className="text-[10px] font-black uppercase tracking-wide text-[#144873]">Missões</p>
                <p className="text-[15px] font-black text-[#ef9f00]">MUNDO DOS BLOCOS</p>
              </div>
            </a>

            <nav className="hidden items-center gap-5 text-[10px] font-black text-[#173b63] md:flex">
              <a href="#top" className="text-[#f1b900]">Início</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#recebe">O que vai receber</a>
              <a href="#depoimentos">Depoimentos</a>
              <a href="#faq">Perguntas frequentes</a>
            </nav>

            <a
              href="#planos"
              className="inline-flex items-center gap-1 rounded-full border border-[#79e086] bg-[#14a735] px-3 py-2 text-[9px] font-black text-white shadow-[0_4px_0_#087f29]"
            >
              QUERO GARANTIR AGORA <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto grid max-w-[1120px] gap-4 px-4 pb-8 pt-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative z-20 text-center lg:text-left">
            <div className="inline-flex rotate-[-2deg] rounded-xl border-[3px] border-[#14558b] bg-[#0e68a8] px-5 py-2 text-[11px] font-black uppercase tracking-wide text-[#ffd62b] shadow-[0_5px_0_#0a4778]">
              • MISSÕES MATEMÁTICAS •
            </div>

            <h1
              className="mt-3 text-[48px] font-black leading-[.78] text-[#ffd31d] sm:text-[58px] lg:text-[68px]"
              style={{
                WebkitTextStroke: "2px #0b3a67",
                textShadow: "0 4px 0 #0b3a67, 0 8px 0 rgba(255,153,0,.42), 0 12px 22px rgba(7,45,77,.22)",
              }}
            >
              MUNDO DOS
              <br />
              BLOCOS
            </h1>

            <div className="mx-auto mt-4 max-w-[390px] rounded-xl bg-[#135f9b] px-4 py-3 text-white shadow-[0_8px_20px_-12px_rgba(9,53,89,.7)] lg:mx-0">
              <p className="text-[15px] font-black leading-tight">
                Mais de 150 atividades de matemática
                <br />
                para o 1º ao 5º ano
              </p>
              <p className="mt-1 text-[10px] font-semibold text-blue-50">
                Aprender matemática pode ser uma grande aventura!
              </p>
            </div>

            <div className="mx-auto mt-4 grid max-w-[450px] grid-cols-2 gap-2 sm:grid-cols-4 lg:mx-0">
              {[
                ["+150", "atividades"],
                ["1º ao 5º", "ano"],
                ["PDF", "para imprimir"],
                ["Sem tela", "e sem complicação"],
              ].map(([strong, label]) => (
                <div
                  key={strong}
                  className="rounded-xl border border-[#d4e8ef] bg-white/95 px-2 py-3 text-center shadow-[0_8px_14px_-10px_rgba(15,23,42,.5)]"
                >
                  <p className="text-[12px] font-black text-[#175d92]">{strong}</p>
                  <p className="mt-0.5 text-[8px] font-black leading-tight text-slate-600">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="#planos"
              className="mt-4 inline-flex min-w-[320px] items-center justify-center gap-2 rounded-full border-[2px] border-[#8bed9b] bg-[#15ad39] px-7 py-3.5 text-[12px] font-black text-white shadow-[0_5px_0_#087e2a,0_12px_22px_-12px_rgba(12,110,44,.8)]"
            >
              QUERO GARANTIR AGORA <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-3 flex flex-wrap justify-center gap-3 text-[8px] font-bold text-white lg:justify-start">
              <span>● Compra segura</span>
              <span>● Acesso imediato</span>
              <span>● 7 dias de garantia</span>
            </div>
          </div>

          <div className="relative mx-auto h-[365px] w-full max-w-[580px] lg:h-[390px]">
            <PixelBlock className="left-[7%] top-[6%] h-7 w-7 -rotate-12" color="#48aa3f" />
            <PixelBlock className="right-[10%] top-[4%] h-8 w-8 rotate-12" color="#f0a023" />
            <PixelBlock className="right-[2%] top-[35%] h-6 w-6 rotate-6" color="#5a54bf" />

            <div className="absolute left-[18%] top-[8px] w-[25%] -rotate-6 rounded-md border-[4px] border-white bg-white p-1 shadow-xl">
              <img src="/math/page-numeros.webp" alt="" className="block w-full rounded-sm" />
            </div>
            <div className="absolute left-[36%] top-[2px] w-[25%] -rotate-1 rounded-md border-[4px] border-white bg-white p-1 shadow-xl">
              <img src="/math/page-adicao.webp" alt="" className="block w-full rounded-sm" />
            </div>
            <div className="absolute right-[14%] top-[18px] w-[25%] rotate-6 rounded-md border-[4px] border-white bg-white p-1 shadow-xl">
              <img src="/math/page-medidas.webp" alt="" className="block w-full rounded-sm" />
            </div>
            <div className="absolute left-[8%] top-[95px] w-[25%] -rotate-5 rounded-md border-[4px] border-white bg-white p-1 shadow-xl">
              <img src="/math/page-adicao.webp" alt="" className="block w-full rounded-sm" />
            </div>
            <div className="absolute right-[4%] top-[105px] w-[25%] rotate-7 rounded-md border-[4px] border-white bg-white p-1 shadow-xl">
              <img src="/math/page-numeros.webp" alt="" className="block w-full rounded-sm" />
            </div>

            <div className="absolute left-1/2 top-[76px] z-20 w-[34%] -translate-x-1/2 rotate-[-2deg]">
              <ProductCover />
            </div>

            <div className="absolute right-[1%] top-[42px] z-30 max-w-[140px] rotate-[3deg] rounded-xl border-2 border-[#f0b434] bg-[#fff0a8] px-3 py-3 text-center shadow-lg">
              <p className="text-[9px] font-black leading-tight text-[#173b63]">
                DESAFIOS REAIS
                <br />
                APRENDIZADO DE VERDADE
                <br />
                DIVERSÃO GARANTIDA!
              </p>
            </div>

            <PixelKid className="absolute bottom-0 left-[13%] z-30 scale-[.9]" />
            <div className="absolute bottom-[2px] left-1/2 z-30 h-[78px] w-[90px] -translate-x-1/2 rounded-[8px] border-[5px] border-[#5a321b] bg-[#c16f21] shadow-[inset_0_9px_0_#e58d32,inset_0_-8px_0_#914718,0_14px_18px_-10px_rgba(15,23,42,.65)]">
              <div className="absolute inset-x-0 top-[30px] h-[5px] bg-[#5a321b]" />
              <div className="absolute left-1/2 top-[25px] h-8 w-4 -translate-x-1/2 rounded-sm border-2 border-[#bdc2c8] bg-[#e6eaee]" />
              <div className="absolute -top-7 left-1/2 h-9 w-9 -translate-x-1/2 rotate-45 bg-[#3ddcf0] shadow-[inset_5px_5px_0_rgba(255,255,255,.45),inset_-5px_-5px_0_#0d89a5]" />
            </div>
            <PixelKid className="absolute bottom-0 right-[7%] z-30 scale-[.72]" girl />

            <div className="absolute bottom-[55px] right-[-1%] z-30 rotate-1 rounded-md border-[3px] border-[#71461f] bg-[#a86b34] px-3 py-3 text-center shadow-lg">
              <p className="text-[9px] font-black leading-tight text-white">
                MATEMÁTICA
                <br />
                TAMBÉM PODE
                <br />
                SER DIVERTIDA!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="amostras" className="bg-gradient-to-b from-[#f5fbff] to-[#eaf7ff] py-7 sm:py-9">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-[24px] font-black text-[#143c65] sm:text-[28px]">Veja como são as atividades por dentro</h2>
            <p className="mt-1 text-[10px] font-semibold text-slate-600">
              Páginas reais do material. Atividades criativas, com o universo de blocos que as crianças adoram.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {pageSamples.map((sample) => (
              <article key={sample.label} className="group">
                <div className="mb-1.5 text-center">
                  <span className="rounded-full bg-[#d9efff] px-3 py-1 text-[8px] font-black text-[#1e70aa]">{sample.label}</span>
                </div>
                <div className="rounded-[12px] bg-white p-2 shadow-[0_12px_22px_-16px_rgba(15,23,42,.6)] ring-1 ring-slate-200">
                  <div className="overflow-hidden rounded-[7px] border border-[#e7dcc5] bg-[#fffdf6]">
                    <div className="border-b border-[#f0e4d2] px-2 py-1.5 text-center">
                      <p className="text-[7px] font-black text-[#203c5d]">{sample.title}</p>
                    </div>
                    <img src={sample.src} alt={sample.title} className="aspect-[.72] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-[#fffaf0]">
        <div className="mx-auto grid max-w-[1140px] lg:grid-cols-[.78fr_1.22fr]">
          <div className="relative min-h-[270px] overflow-hidden bg-[#f2efe6]">
            <img src="/math/child-study.webp" alt="Criança fazendo atividades de matemática" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute left-5 top-5 max-w-[120px] -rotate-3 text-[14px] font-bold leading-tight text-[#183b62]">
              Ele aprende
              <br />
              se divertindo!
              <span className="ml-1 inline-block text-[#d54b58]">↘</span>
            </div>
          </div>

          <div className="relative px-5 py-7 sm:px-8">
            <PixelKid className="pointer-events-none absolute -right-1 -top-8 hidden scale-[.7] md:block" />
            <div className="absolute right-5 top-4 hidden max-w-[115px] rotate-3 rounded-xl border border-[#f0c13a] bg-[#fff4b8] p-3 text-center text-[9px] font-black text-[#173b63] md:block">
              APRENDER
              <br />
              TAMBÉM É
              <br />
              CONSTRUIR
              <br />
              GRANDES SONHOS!
            </div>

            <h2 className="max-w-[470px] text-[26px] font-black leading-tight text-[#153c66] sm:text-[30px]">
              Simples de baixar,
              <br />
              imprimir e transformar
              <br />
              a rotina de estudos
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["1", "Baixe o PDF", "e tenha acesso imediato"],
                ["2", "Imprima", "quando quiser, quantas vezes quiser"],
                ["3", "Entregue", "para a criança e acompanhe"],
                ["4", "Veja a matemática", "se tornar uma experiência positiva"],
              ].map(([n, title, desc]) => (
                <div key={n} className="rounded-xl bg-white p-3 shadow-[0_8px_18px_-14px_rgba(15,23,42,.4)]">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-[#20b453] text-[12px] font-black text-white shadow-[0_3px_0_#12833d]">
                    {n}
                  </div>
                  <p className="mt-2 text-[10px] font-black text-[#173b63]">{title}</p>
                  <p className="mt-1 text-[8px] font-medium leading-snug text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-7">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <h2 className="text-center text-[24px] font-black text-[#153c66]">Esse material é ideal para:</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {audience.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="rounded-xl bg-white px-3 py-4 text-center shadow-[0_9px_20px_-15px_rgba(15,23,42,.5)] ring-1 ring-slate-100">
                  <Icon className="mx-auto h-8 w-8 text-[#1168a8]" />
                  <p className="mt-2 text-[9px] font-black leading-tight text-[#173b63]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0b4f84] via-[#0a6297] to-[#084776] py-8 text-white">
        <div
          className="absolute inset-0 opacity-[.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.75) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.75) 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <PixelTree className="pointer-events-none absolute right-0 bottom-[-14px] scale-[1.2]" />
        <div className="relative mx-auto grid max-w-[1140px] items-center gap-5 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr_.65fr]">
          <h2 className="text-[27px] font-black leading-[1.02]">
            Mais do que
            <br />
            atividades, é uma nova
            <br />
            forma de se relacionar
            <br />
            com a matemática.
          </h2>

          <ul className="space-y-1.5 text-[10px] font-semibold">
            {[
              "Aumenta o interesse da criança",
              "Desenvolve raciocínio lógico",
              "Trabalha diversas habilidades",
              "Atividades ilustradas e envolventes",
              "Pronto para imprimir e usar",
              "Organizado por ano escolar",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#50da64]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="relative hidden h-[120px] lg:block">
            <PixelKid className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 scale-[.82]" />
            <div className="absolute left-2 top-2 h-10 w-10 rotate-45 bg-[#ffd43d] shadow-[0_0_22px_rgba(255,212,61,.75),inset_5px_5px_0_rgba(255,255,255,.42)]" />
            <p className="absolute right-[-8px] top-0 rotate-2 text-right text-[12px] font-black leading-tight text-[#fff2b7]">
              PEQUENOS
              <br />
              DESAFIOS,
              <br />
              GRANDES
              <br />
              CONQUISTAS!
            </p>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="bg-[#fffaf0] py-7">
        <div className="mx-auto max-w-[1050px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-[24px] font-black text-[#153c66]">O que as mães estão dizendo</h2>
            <p className="mt-1 text-[9px] font-semibold text-slate-500">Mensagens reais de quem já está usando o material.</p>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <Testimonial name="Fernanda">
              Meu filho amou! Ele que sempre reclamava de matemática, agora pede para fazer as atividades do Mundo dos Blocos. 😍
            </Testimonial>
            <Testimonial name="Camila">
              Estou usando nas férias e está sendo perfeito. As atividades são lindas e bem pensadas. Dá pra ver que foi feito com muito carinho.
            </Testimonial>
            <Testimonial name="Juliana">
              Comprei e já imprimi. Ele fez sem reclamar e ainda pediu mais! Vale muito a pena!
            </Testimonial>
          </div>
        </div>
      </section>

      <section id="recebe" className="bg-[#fffaf0] pb-7">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-[24px] font-black text-[#153c66]">Tudo o que você vai receber</h2>
            <p className="mt-1 text-[9px] font-semibold text-slate-500">Material completo, organizado e pronto para usar.</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {receives.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl bg-white p-4 text-center shadow-[0_8px_18px_-14px_rgba(15,23,42,.5)] ring-1 ring-slate-100">
                  <Icon className="mx-auto h-8 w-8 text-[#176ca7]" />
                  <p className="mt-2 text-[9px] font-black text-[#173b63]">{item.title}</p>
                  <p className="mt-0.5 text-[8px] font-bold text-slate-500">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#fff7e7] to-[#fff1d7] py-7">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-[24px] font-black text-[#153c66]">E não para por aí... (Plano Completo)</h2>
            <p className="mt-1 text-[9px] font-semibold text-slate-500">Além do material principal, você também recebe:</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {extras.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-3 text-center shadow-[0_8px_18px_-14px_rgba(15,23,42,.5)]">
                <img src={item.src} alt="" className="mx-auto h-[58px] w-[50px] rounded border-2 border-white object-cover object-top shadow-md" />
                <p className="mt-2 text-[8px] font-black leading-tight text-[#173b63]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="relative overflow-hidden bg-gradient-to-b from-[#e8f7ff] to-[#dff2ff] py-7">
        <PixelTree className="pointer-events-none absolute -left-5 bottom-[-10px]" />
        <PixelTree className="pointer-events-none absolute right-0 bottom-[-12px]" />
        <div className="relative mx-auto max-w-[1050px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-[24px] font-black text-[#153c66]">Escolha a melhor opção para você</h2>
            <p className="mt-1 text-[8px] font-semibold text-slate-500">Ambos os planos dão acesso ao material principal. O plano completo inclui os extras exclusivos.</p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[.8fr_1fr_.52fr] lg:items-center">
            <div className="hidden lg:block">
              <div className="mx-auto w-[145px] rotate-[-4deg] rounded-2xl border border-[#9fd7eb] bg-[#d9f5ff] p-4 text-center text-[10px] font-black leading-tight text-[#173b63] shadow-md">
                INVISTA
                <br />
                NA EDUCAÇÃO
                <br />
                HOJE, CONSTRÓI
                <br />
                UM FUTURO
                <br />
                EXTRAORDINÁRIO!
              </div>
              <PixelKid className="mx-auto mt-[-6px] scale-[.76]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-[18px] border-2 border-[#b9d9ec] bg-white p-4 shadow-[0_16px_28px_-20px_rgba(15,23,42,.55)]">
                <p className="text-center text-[10px] font-black uppercase text-[#246b9f]">PLANO ESSENCIAL</p>
                <div className="mx-auto mt-3 w-[92px]">
                  <ProductCover compact />
                </div>
                <ul className="mt-3 space-y-1 text-[8px] font-semibold text-slate-700">
                  {[
                    "+ de 150 atividades",
                    "Organizado do 1º ao 5º ano",
                    "Gabarito completo",
                    "Instruções de uso",
                    "Acesso imediato",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#20b453]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-center text-[9px] font-bold text-slate-500">Pagamento único</p>
                <p className="text-center text-[29px] font-black text-[#153c66]">
                  <span className="text-[12px]">R$</span> 17,90
                </p>
                <button
                  disabled={!checkoutReady}
                  className="mt-3 w-full rounded-full bg-[#17ad39] px-4 py-2.5 text-[9px] font-black text-white shadow-[0_4px_0_#087e2a] disabled:cursor-not-allowed disabled:opacity-100"
                >
                  QUERO O PLANO ESSENCIAL
                </button>
              </article>

              <article className="relative rounded-[18px] border-[3px] border-[#19c84b] bg-gradient-to-b from-[#0d6a9f] via-[#0b5d91] to-[#083d68] p-4 text-white shadow-[0_22px_40px_-20px_rgba(3,66,105,.8)]">
                <div className="absolute right-3 top-0 -translate-y-1/2 rounded-full bg-[#20c74f] px-3 py-1 text-[8px] font-black text-white">Mais escolhido</div>
                <p className="text-center text-[10px] font-black uppercase">PLANO COMPLETO</p>
                <div className="mx-auto mt-3 w-[92px]">
                  <ProductCover compact />
                </div>
                <ul className="mt-3 space-y-1 text-[8px] font-semibold text-blue-50">
                  {[
                    "Tudo do Plano Essencial",
                    "Caderno de Tabuada",
                    "Probleminhas Extras",
                    "Mapa de Progresso",
                    "Cartões de Recompensas",
                    "Certificado de Conquistas",
                    "Guia para Responsáveis",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#52e36d]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-center text-[9px] font-bold text-blue-100">Pagamento único</p>
                <p className="text-center text-[29px] font-black text-[#41e65e]">
                  <span className="text-[12px]">R$</span> 27,90
                </p>
                <button
                  disabled={!checkoutReady}
                  className="mt-3 w-full rounded-full border border-[#66ef7c] bg-[#18ad3a] px-4 py-2.5 text-[9px] font-black text-white shadow-[0_4px_0_#087e2a] disabled:cursor-not-allowed disabled:opacity-100"
                >
                  QUERO O PLANO COMPLETO
                </button>
              </article>
            </div>

            <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
              {[
                [ShieldCheck, "Compra segura"],
                [Download, "Acesso imediato"],
                [Award, "7 dias de garantia"],
              ].map(([IconValue, label]) => {
                const Icon = IconValue as typeof ShieldCheck;
                return (
                  <div key={String(label)} className="flex items-center gap-2 rounded-xl bg-white/70 p-2.5 text-[8px] font-black text-[#173b63]">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 border-[#103e65] bg-[#8ee9ff]">
                      <Icon className="h-4 w-4 text-[#103e65]" />
                    </div>
                    <span>{String(label)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative overflow-hidden bg-[#fffaf0] py-7">
        <PixelKid className="pointer-events-none absolute -bottom-7 right-[7%] hidden scale-[.8] md:block" girl />
        <div className="mx-auto max-w-[930px] px-4 sm:px-6">
          <h2 className="text-center text-[24px] font-black text-[#153c66]">Perguntas frequentes</h2>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-lg border border-slate-200 bg-white px-4 py-2.5 shadow-[0_6px_14px_-12px_rgba(15,23,42,.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[9px] font-black text-[#173b63]">
                  {question}
                  <span className="text-[#2c78ad] transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-2 pr-4 text-[9px] leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#bfe0f4] bg-gradient-to-r from-[#e5f5ff] via-[#d7efff] to-[#e7f7ff] py-5">
        <PixelTree className="pointer-events-none absolute -left-6 bottom-[-18px] scale-[.82]" />
        <PixelTree className="pointer-events-none absolute right-0 bottom-[-18px] scale-[.82]" />
        <div className="relative mx-auto flex max-w-[1030px] flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-full border-[3px] border-[#5b9bc8] bg-[#0f68ad] text-[25px] font-black text-white shadow-[0_6px_0_#0c4f85]">8</div>
            <div>
              <h3 className="text-[21px] font-black leading-tight text-[#153c66]">
                Garantia de 7 dias
                <br />
                Risco zero para você!
              </h3>
              <p className="mt-1 max-w-[410px] text-[8px] font-semibold text-slate-600">
                Se por qualquer motivo você não ficar satisfeito, é só pedir o reembolso em até 7 dias. Sem burocracia.
              </p>
            </div>
          </div>
          <a
            href="#planos"
            className="inline-flex items-center gap-2 rounded-full bg-[#14ad38] px-6 py-3 text-[9px] font-black text-white shadow-[0_4px_0_#087e2a]"
          >
            QUERO GARANTIR AGORA <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-gradient-to-b from-[#dff3ff] to-[#cfeaf8] py-6">
        <PixelTree className="pointer-events-none absolute -left-3 bottom-[-14px]" />
        <PixelTree className="pointer-events-none absolute right-0 bottom-[-14px]" />
        <div className="relative mx-auto grid max-w-[1000px] gap-4 px-4 sm:px-6 md:grid-cols-[.8fr_1.4fr_1fr] md:items-center">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <div className="grid h-10 w-10 place-items-center rounded-lg border-2 border-[#70410f] bg-[#f0a122]">
              <Blocks className="h-5 w-5 text-[#153c66]" />
            </div>
            <div>
              <p className="text-[8px] font-black uppercase text-[#17679d]">Missões Matemáticas</p>
              <p className="text-[15px] font-black text-[#ef9d00]">MUNDO DOS BLOCOS</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[9px] font-black text-[#173b63]">Missões Matemáticas no Mundo dos Blocos</p>
            <p className="mt-1 text-[8px] font-semibold text-slate-600">Aprender hoje. Construir um futuro incrível amanhã.</p>
          </div>

          <div className="text-center text-[8px] font-semibold text-slate-600 md:text-right">
            <p>Política de Privacidade &nbsp;|&nbsp; Termos de Uso &nbsp;|&nbsp; Suporte</p>
            <p className="mt-2">© 2026 Mundo dos Blocos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Matematica;
