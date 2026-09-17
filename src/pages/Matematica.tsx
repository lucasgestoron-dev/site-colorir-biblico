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

const PixelChest = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-20 w-24 drop-shadow-xl ${className}`} aria-hidden="true">
    <div className="absolute left-1 top-3 h-14 w-[88px] rounded-[8px] border-[5px] border-[#5b321b] bg-[#bd6a20] shadow-[inset_0_7px_0_#df8c34,inset_0_-7px_0_#8f4818]" />
    <div className="absolute left-1 top-8 h-[5px] w-[88px] bg-[#5b321b]" />
    <div className="absolute left-[43px] top-[29px] h-7 w-4 rounded-sm border-2 border-[#b8bec7] bg-[#e7ebef] shadow-[inset_0_-5px_0_#8f98a4]" />
  </div>
);

const PixelPortal = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-28 w-20 drop-shadow-xl ${className}`} aria-hidden="true">
    <div className="absolute inset-0 rounded-md border-[9px] border-[#222037] bg-[#30125d] shadow-[inset_0_0_0_4px_#6f34a9]" />
    <div className="absolute inset-[14px] overflow-hidden rounded-sm bg-gradient-to-br from-fuchsia-400 via-violet-600 to-purple-950">
      <div className="absolute -left-2 top-3 h-3 w-10 rotate-45 bg-fuchsia-300/60" />
      <div className="absolute left-1 top-12 h-3 w-12 -rotate-45 bg-violet-300/50" />
    </div>
    <span className="absolute -left-1 top-8 h-2 w-2 bg-fuchsia-500" />
    <span className="absolute -right-1 bottom-5 h-2 w-2 bg-fuchsia-500" />
  </div>
);

const PixelGem = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-16 w-14 drop-shadow-lg ${className}`} aria-hidden="true">
    <div
      className="absolute inset-0 bg-cyan-300 shadow-[inset_8px_0_0_#ecfeff,inset_-8px_0_0_#0891b2,inset_0_-8px_0_#0e7490]"
      style={{ clipPath: "polygon(50% 0, 88% 25%, 78% 78%, 50% 100%, 22% 78%, 12% 25%)" }}
    />
    <div className="absolute left-[22px] top-3 h-8 w-2 rotate-12 bg-white/70" />
  </div>
);

const PixelCraft = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-20 w-20 drop-shadow-xl ${className}`} aria-hidden="true">
    <div className="absolute inset-1 rounded-md border-[5px] border-[#5a2d16] bg-[#9a4f21] shadow-[inset_0_10px_0_#cd6d2d,inset_0_-9px_0_#713516]" />
    <div className="absolute left-3 right-3 top-3 h-8 rounded-sm border-4 border-[#5a2d16] bg-[#d37430]" />
    <div className="absolute left-3 top-6 h-1 w-12 bg-[#5a2d16]" />
    <div className="absolute left-7 top-3 h-8 w-1 bg-[#5a2d16]" />
    <div className="absolute left-11 top-3 h-8 w-1 bg-[#5a2d16]" />
  </div>
);

const PixelMarket = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-24 w-28 drop-shadow-xl ${className}`} aria-hidden="true">
    <div className="absolute bottom-1 left-3 h-12 w-20 rounded-sm border-4 border-[#72401f] bg-[#b66b31]" />
    <div className="absolute left-1 top-4 h-7 w-[104px] skew-x-[-8deg] rounded-sm border-4 border-[#72401f] bg-[repeating-linear-gradient(90deg,#fff_0_16px,#f28b38_16px_32px)]" />
    <div className="absolute bottom-7 left-6 h-7 w-12 rounded-md bg-[#7aa342] shadow-[inset_0_-5px_0_#4c7028]" />
    <div className="absolute bottom-11 left-9 h-3 w-3 rounded-full bg-white" />
    <div className="absolute bottom-11 left-12 h-3 w-3 rounded-full bg-yellow-300" />
  </div>
);

const Cubes = ({ className = "" }: { className?: string }) => (
  <div className={`grid grid-cols-3 gap-1 ${className}`} aria-hidden="true">
    {Array.from({ length: 9 }).map((_, index) => (
      <span
        key={index}
        className="h-5 w-5 rounded-[3px] border border-slate-500/40 bg-gradient-to-br from-slate-300 to-slate-500 shadow-[inset_2px_2px_0_rgba(255,255,255,.5)]"
      />
    ))}
  </div>
);

const MiniSheet = ({
  title,
  subtitle,
  accent,
  number,
  className = "",
}: {
  title: string;
  subtitle: string;
  accent: string;
  number: string;
  className?: string;
}) => (
  <div className={`overflow-hidden rounded-[18px] border-[5px] border-white bg-white shadow-[0_22px_45px_-20px_rgba(15,23,42,.55)] ${className}`}>
    <div className="flex items-center gap-3 bg-[#184b8e] px-3 py-3 text-white">
      <div className={`grid h-10 w-10 place-items-center rounded-lg ${accent} text-lg font-black shadow-inner`}>▦</div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[9px] font-black uppercase tracking-[.12em] text-blue-100">Missões Matemáticas</p>
        <p className="truncate text-sm font-black leading-tight">{title}</p>
      </div>
      <span className="text-lg font-black">{number}</span>
    </div>
    <div className="grid grid-cols-2 gap-2 p-2.5">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="min-h-[70px] rounded-lg border border-slate-200 bg-white p-2">
          <div className="mb-2 flex items-center gap-1.5">
            <span className={`h-4 w-4 rounded ${accent}`} />
            <span className="h-2 w-12 rounded-full bg-slate-300" />
          </div>
          <div className="space-y-1.5">
            <span className="block h-1.5 w-full rounded bg-slate-200" />
            <span className="block h-1.5 w-4/5 rounded bg-slate-200" />
            <div className="mt-2 flex gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-slate-400" />
              <span className="h-3 w-3 rounded-sm bg-slate-400" />
              <span className="h-3 w-3 rounded-sm bg-slate-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mx-2.5 mb-2.5 rounded-lg bg-[#edf5f6] px-3 py-2 text-center text-[9px] font-black uppercase tracking-wide text-[#3e7684]">
      {subtitle}
    </div>
  </div>
);

const BigWorksheet = ({
  title,
  tag,
  color,
  children,
}: {
  title: string;
  tag: string;
  color: string;
  children: React.ReactNode;
}) => (
  <div className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-2.5 shadow-[0_20px_55px_-30px_rgba(15,23,42,.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-28px_rgba(15,23,42,.45)]">
    <div className="overflow-hidden rounded-[1.2rem] border border-blue-100 bg-white">
      <div className="flex items-center gap-3 bg-[#194d91] px-4 py-3 text-white">
        <span className={`grid h-10 w-10 place-items-center rounded-lg ${color} font-black`}>▦</span>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.14em] text-blue-100">{tag}</p>
          <p className="font-black leading-tight">{title}</p>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  </div>
);

const useCards = [
  {
    label: "Para quem trava na hora da lição",
    text: "Use uma missão curta para começar sem transformar o estudo em uma batalha longa.",
    icon: Gamepad2,
    tone: "bg-orange-50 border-orange-100 text-orange-700",
  },
  {
    label: "Para reforçar um conteúdo",
    text: "Escolha o tema que a criança está estudando e imprima só as páginas daquele assunto.",
    icon: Brain,
    tone: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    label: "Para estudar sem tela",
    text: "PDF A4 para usar com lápis, borracha e uma mesa — sem depender do celular na hora de resolver.",
    icon: Printer,
    tone: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    label: "Para acompanhar a evolução",
    text: "Atividades separadas por ano escolar facilitam escolher um nível coerente e avançar aos poucos.",
    icon: Trophy,
    tone: "bg-violet-50 border-violet-100 text-violet-700",
  },
];

const faqs = [
  ["É um jogo digital?", "Não. É um material em PDF para imprimir. A estética do universo dos blocos entra como ponte visual para deixar a matemática mais convidativa."],
  ["Para quais anos serve?", "O material principal está organizado do 1º ao 5º ano do Ensino Fundamental, com 30 atividades principais por ano."],
  ["Preciso imprimir tudo?", "Não. Você pode escolher o ano, o conteúdo e a página que deseja trabalhar e imprimir somente o necessário."],
  ["Vem com gabarito?", "Sim. O projeto inclui gabarito derivado das respostas do próprio material para facilitar a conferência."],
  ["É possível usar em reforço escolar?", "Sim. A organização por tema e ano permite selecionar atividades pontuais para casa, reforço ou acompanhamento."],
  ["O checkout já está ativo?", "Ainda não. Esta é a página em desenvolvimento enquanto o material final e os extras da oferta são concluídos."],
];

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
    meta.content = "150 atividades de matemática para imprimir do 1º ao 5º ano, com identidade visual do Mundo dos Blocos e gabarito.";
    return () => {
      document.title = oldTitle;
      if (meta && oldDescription !== undefined) meta.content = oldDescription;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7fbff] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/95 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5 font-black text-[#174985]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#287ec2] text-white shadow-[0_4px_0_#155b98]">
              <Blocks className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block text-sm sm:text-base">Mundo dos Blocos</span>
              <span className="block text-[10px] font-bold uppercase tracking-[.14em] text-slate-400">Missões Matemáticas</span>
            </span>
          </a>
          <a href="#planos" className="rounded-xl bg-green-500 px-4 py-2.5 text-sm font-black text-white shadow-[0_4px_0_#15803d] transition hover:translate-y-0.5 hover:shadow-[0_2px_0_#15803d]">
            VER OFERTA
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#2d95d4] via-[#318dc9] to-[#2d80ba] pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="absolute inset-0 opacity-[.13]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)", backgroundSize: "34px 34px" }} />
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-yellow-300/25 blur-3xl" />
          <div className="absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
          <PixelChest className="absolute left-[5%] top-24 hidden -rotate-6 lg:block" />
          <PixelPortal className="absolute right-[5%] top-32 hidden rotate-6 lg:block" />
          <PixelGem className="absolute right-[14%] bottom-16 hidden rotate-12 md:block" />

          <div className="container relative">
            <div className="mx-auto max-w-5xl text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[.14em] shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-yellow-200" /> Material digital para imprimir
              </span>
              <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[.98] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                150 missões de matemática para seu filho <span className="text-yellow-200">aprender no Mundo dos Blocos</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-relaxed text-blue-50 sm:text-lg md:text-xl">
                Do 1º ao 5º ano, com atividades visuais, progressivas e prontas para imprimir — para transformar a hora da matemática em uma experiência muito mais convidativa.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-2.5">
                {["30 atividades por ano", "1º ao 5º ano", "PDF A4", "Gabarito incluído"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#19558e] shadow-md">
                    <CheckCircle2 className="h-4 w-4 text-green-500" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto mt-10 h-[430px] max-w-5xl sm:h-[510px] md:h-[600px]">
              <MiniSheet title="Números e Valor Posicional" subtitle="Torres, trilhas e ordem dos blocos" accent="bg-blue-500" number="13" className="absolute left-[4%] top-14 w-[44%] -rotate-6 sm:left-[8%] md:w-[38%]" />
              <MiniSheet title="Multiplicação e Divisão" subtitle="Tabuadas, grupos e cristais" accent="bg-red-500" number="15" className="absolute right-[4%] top-14 w-[44%] rotate-6 sm:right-[8%] md:w-[38%]" />
              <div className="absolute left-1/2 top-0 z-20 w-[48%] -translate-x-1/2 sm:w-[42%] md:w-[36%]">
                <div className="rounded-[2rem] border-[6px] border-white bg-gradient-to-b from-[#1d5fa7] to-[#123c73] p-4 shadow-[0_30px_60px_-20px_rgba(4,34,72,.6)]">
                  <div className="rounded-[1.5rem] border border-white/15 bg-[#207fbd] p-4 text-center text-white">
                    <div className="mx-auto flex justify-center gap-2">
                      <PixelCraft className="scale-75" />
                      <PixelGem className="mt-4 scale-75" />
                    </div>
                    <p className="mt-1 text-xs font-black uppercase tracking-[.18em] text-yellow-200">Missões Matemáticas</p>
                    <h2 className="mt-2 text-2xl font-black leading-none sm:text-3xl md:text-4xl">MUNDO DOS BLOCOS</h2>
                    <p className="mt-3 text-sm font-bold text-blue-50">150 atividades • 1º ao 5º ano</p>
                    <div className="mx-auto mt-4 grid max-w-[250px] grid-cols-5 gap-1.5">
                      {Array.from({ length: 20 }).map((_, index) => (
                        <span key={index} className={`aspect-square rounded-[3px] border border-white/25 ${index % 4 === 0 ? "bg-emerald-400" : index % 3 === 0 ? "bg-orange-400" : "bg-slate-300"}`} />
                      ))}
                    </div>
                    <p className="mt-4 rounded-xl bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-wide">Aprender • resolver • avançar</p>
                  </div>
                </div>
              </div>
              <PixelMarket className="absolute bottom-4 left-[8%] z-30 hidden rotate-[-6deg] sm:block" />
              <PixelChest className="absolute bottom-8 right-[9%] z-30 hidden rotate-6 sm:block" />
            </div>

            <div className="relative mx-auto -mt-6 max-w-3xl rounded-[1.7rem] border border-white/30 bg-white p-5 text-center shadow-[0_18px_45px_-20px_rgba(5,37,77,.55)] sm:p-7">
              <p className="text-lg font-black text-slate-900 sm:text-2xl">A matemática continua sendo matemática.</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">O que muda é a forma como a criança encontra o exercício: com missões, blocos, cristais, mapas, construções e desafios que tornam a página mais interessante antes mesmo da primeira conta.</p>
              <a href="#amostras" className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-black text-white shadow-[0_5px_0_#15803d] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_#15803d]">
                QUERO VER AS ATIVIDADES <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="amostras" className="bg-[#f4f9fd] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-[#246ba7]">Veja por dentro</span>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">Atividades com cara de material que a criança quer abrir.</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">A identidade visual não é enfeite solto: os elementos do Mundo dos Blocos aparecem dentro dos próprios exercícios, sem tirar a clareza pedagógica.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2">
              <BigWorksheet title="Números e valor posicional" tag="Missão 01" color="bg-blue-500">
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-700">Complete as trilhas e descubra os códigos.</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-3"><b>300</b><span className="h-px w-10 bg-slate-400" /><b>500</b><span className="h-px w-10 bg-slate-400" /><b>700</b></div>
                      <div className="flex items-center gap-2"><Cubes /><span className="ml-2 text-sm font-black text-slate-600">ordene os blocos</span></div>
                    </div>
                  </div>
                  <PixelPortal className="scale-75" />
                </div>
              </BigWorksheet>

              <BigWorksheet title="Multiplicação e divisão" tag="Missão 03" color="bg-red-500">
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="space-y-4 text-lg font-black text-slate-800">
                    <p>4 × 6 = <span className="inline-block w-16 border-b border-slate-400" /></p>
                    <p>36 ÷ 6 = <span className="inline-block w-16 border-b border-slate-400" /></p>
                    <p>7 × 3 = <span className="inline-block w-16 border-b border-slate-400" /></p>
                  </div>
                  <PixelCraft className="scale-90" />
                </div>
              </BigWorksheet>

              <BigWorksheet title="Frações e geometria" tag="Missão 04" color="bg-violet-500">
                <p className="text-sm font-bold text-slate-700">Divida, observe e descubra a fração indicada.</p>
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => <span key={item} className={`aspect-square rounded-md border-2 border-violet-300 ${item < 5 ? "bg-violet-300" : "bg-white"}`} />)}
                </div>
                <p className="mt-4 font-black text-slate-700">Fração: ____ / ____</p>
              </BigWorksheet>

              <BigWorksheet title="Cotidiano, dados e lógica" tag="Missão 06" color="bg-pink-500">
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-700">Mercado da vila</p>
                    <div className="mt-4 space-y-3 text-sm font-black text-slate-800">
                      <p>espada R$ 35 + escudo R$ 28 = R$ ____</p>
                      <p>pago com R$ 100 → troco R$ ____</p>
                      <p className="text-pink-700">Depois, leia tabela e gráfico.</p>
                    </div>
                  </div>
                  <PixelMarket className="scale-75" />
                </div>
              </BigWorksheet>
            </div>

            <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-[1.5rem] border border-blue-100 bg-white p-5 text-center shadow-sm sm:flex-row sm:text-left">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-100 text-[#246ba7]"><BookOpen className="h-6 w-6" /></div>
              <p className="text-slate-600"><strong className="text-slate-900">São 150 atividades principais.</strong> O material é organizado em blocos temáticos, com vários exercícios resolvíveis distribuídos pelas páginas.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-black uppercase tracking-[.18em] text-orange-600">Feito para caber na rotina</span>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Use do jeito que seu filho precisa hoje.</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {useCards.map(({ label, text, icon: Icon, tone }) => (
                <article key={label} className={`rounded-[1.5rem] border p-5 ${tone}`}>
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/80 shadow-sm"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 text-lg font-black text-slate-900">{label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#e8f5ff] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[.14em] text-[#246ba7] shadow-sm"><MessageCircle className="h-4 w-4" /> Como isso entra na vida real</span>
                <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">A seção de prova social vai parecer conversa de verdade — não card corporativo.</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">Enquanto ainda não existem avaliações reais, deixei abaixo uma prévia visual de como essa parte pode funcionar. Antes de anunciar, as mensagens ilustrativas devem ser substituídas por depoimentos reais.</p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#e7f3df] p-4 shadow-[0_24px_60px_-35px_rgba(15,23,42,.45)] sm:p-6">
                <div className="mb-4 flex items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-green-100 text-green-700 font-black">M</div>
                  <div><p className="font-black text-slate-900">Exemplos de uso</p><p className="text-xs text-slate-500">Prévia da seção • não são avaliações reais</p></div>
                </div>
                <div className="space-y-3">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-sm">“Meu filho gosta muito desse universo. Eu usaria uma missão curta depois da tarefa da escola, principalmente nos dias em que ele já está sem paciência.”</div>
                  <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-[#d7f7c5] p-4 text-sm leading-relaxed text-slate-700 shadow-sm">“Dá para escolher só a parte que ele está vendo na escola e imprimir. Isso é o que mais me ajudaria.”</div>
                  <div className="max-w-[86%] rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-sm">“Eu usaria no reforço porque visualmente não parece uma folha de exercício comum.”</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#123d70] py-14 text-white md:py-20">
          <PixelPortal className="absolute -left-4 bottom-3 hidden rotate-[-8deg] opacity-70 md:block" />
          <PixelGem className="absolute right-10 top-8 hidden rotate-12 opacity-80 md:block" />
          <div className="container relative text-center">
            <span className="inline-flex rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase tracking-[.14em]">Menos cara de lição comum</span>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">Use o interesse pelo Mundo dos Blocos como porta de entrada para praticar matemática de verdade.</h2>
            <a href="#planos" className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-4 text-lg font-black text-white shadow-[0_6px_0_#15803d] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_#15803d]">VER O QUE VEM NO MATERIAL <ArrowRight className="h-5 w-5" /></a>
          </div>
        </section>

        <section className="bg-[#f8fbfd] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-black uppercase tracking-[.18em] text-emerald-600">Tudo organizado para você</span>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Um material pronto para escolher, imprimir e usar.</h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl items-center gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -left-6 top-16 rotate-[-8deg]"><PixelChest /></div>
                <div className="absolute -right-6 bottom-16 rotate-6"><PixelGem /></div>
                <div className="relative rounded-[2rem] bg-gradient-to-b from-[#318dcc] to-[#15487f] p-5 text-center text-white shadow-[0_28px_65px_-30px_rgba(15,23,42,.6)]">
                  <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5">
                    <PixelCraft className="mx-auto" />
                    <p className="mt-3 text-xs font-black uppercase tracking-[.16em] text-yellow-200">Missões Matemáticas</p>
                    <h3 className="mt-2 text-3xl font-black leading-none">MUNDO DOS BLOCOS</h3>
                    <p className="mt-3 text-sm font-bold text-blue-100">1º ao 5º ano</p>
                    <div className="mt-5 rounded-xl bg-white p-4 text-left text-sm font-black text-slate-800">
                      <p>✓ 150 atividades principais</p><p className="mt-2">✓ PDF em tamanho A4</p><p className="mt-2">✓ Organização por ano e tema</p><p className="mt-2">✓ Gabarito para conferência</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {["Números e sequências", "Adição e subtração", "Multiplicação e divisão", "Frações e proporcionalidade", "Medidas e geometria", "Matemática do cotidiano", "Dados, padrões e lógica", "Problemas contextualizados"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white font-black ${["bg-blue-500","bg-orange-500","bg-red-500","bg-violet-500","bg-emerald-500","bg-yellow-500","bg-pink-500","bg-cyan-600"][index]}`}>{index + 1}</span>
                    <span className="font-black text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-red-600">Escolha sua versão</span>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">Comece com o essencial ou leve a experiência completa.</h2>
              <p className="mt-4 text-lg text-slate-600">Os botões permanecem desativados enquanto o material final e o checkout são concluídos.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              <article className="relative rounded-[2rem] border-2 border-blue-100 bg-[#f8fbff] p-7 shadow-[0_22px_50px_-30px_rgba(15,23,42,.35)]">
                <div className="flex items-center justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-[.14em] text-[#2877b4]">Plano básico</p><h3 className="mt-1 text-3xl font-black">Essencial</h3></div><PixelChest className="scale-75" /></div>
                <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                  {["150 atividades principais", "1º ao 5º ano", "30 atividades por ano", "PDF A4 para imprimir", "Gabarito", "Organização por temas"].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /> {item}</li>)}
                </ul>
                <div className="mt-8 border-t border-slate-200 pt-6"><p className="text-sm font-bold text-slate-500">Pagamento único</p><p className="mt-1 text-5xl font-black text-slate-900"><span className="text-xl align-top">R$</span>17,90</p></div>
                <button disabled={!checkoutReady} className="mt-6 w-full rounded-xl bg-green-500 px-5 py-4 font-black text-white shadow-[0_5px_0_#15803d] disabled:cursor-not-allowed disabled:opacity-70">EM CONFIGURAÇÃO</button>
              </article>

              <article className="relative overflow-hidden rounded-[2rem] border-4 border-emerald-400 bg-gradient-to-b from-[#174a82] to-[#0e315a] p-7 text-white shadow-[0_28px_65px_-28px_rgba(15,67,115,.6)]">
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-emerald-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-950">Mais completo</div>
                <div className="flex items-center justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-[.14em] text-emerald-300">Plano completo</p><h3 className="mt-1 text-3xl font-black">Experiência Completa</h3></div><PixelPortal className="scale-75" /></div>
                <ul className="mt-6 space-y-3 text-sm font-semibold text-blue-50">
                  {["Tudo do plano Essencial", "Tabuada temática", "Pacote extra de problemas", "Mapa de progresso", "Cartões de recompensa", "Certificados", "Guia rápido para pais"].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" /> {item}</li>)}
                </ul>
                <p className="mt-5 rounded-xl border border-yellow-300/20 bg-yellow-300/10 px-3 py-2 text-xs font-bold text-yellow-100">Extras em finalização antes da abertura do checkout.</p>
                <div className="mt-6 border-t border-white/15 pt-6"><p className="text-sm font-bold text-blue-200">Pagamento único</p><p className="mt-1 text-5xl font-black"><span className="text-xl align-top">R$</span>27,90</p></div>
                <button disabled={!checkoutReady} className="mt-6 w-full rounded-xl bg-green-500 px-5 py-4 font-black text-white shadow-[0_5px_0_#15803d] disabled:cursor-not-allowed disabled:opacity-80">EM CONFIGURAÇÃO</button>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#edf8ff] py-12 md:py-16">
          <div className="container">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[2rem] border border-blue-100 bg-white p-7 text-center shadow-sm sm:flex-row sm:text-left md:p-9">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-blue-100 text-[#2676b5]"><ShieldCheck className="h-8 w-8" /></div>
              <div><p className="text-sm font-black uppercase tracking-[.14em] text-[#2676b5]">Garantia planejada para a oferta</p><h2 className="mt-1 text-2xl font-black text-slate-900">7 dias para conhecer o material com tranquilidade.</h2><p className="mt-2 leading-relaxed text-slate-600">A política final será apresentada no checkout e nesta página antes da campanha entrar no ar.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center"><span className="text-xs font-black uppercase tracking-[.18em] text-[#2676b5]">Perguntas frequentes</span><h2 className="mt-3 text-3xl font-black md:text-5xl">Antes de escolher, tire suas dúvidas.</h2></div>
            <div className="mx-auto mt-9 max-w-3xl space-y-3">
              {faqs.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-slate-200 bg-[#f8fbfd] p-5 open:bg-white open:shadow-sm">
                  <summary className="cursor-pointer list-none font-black text-slate-900">{q}<span className="float-right text-[#2676b5] transition group-open:rotate-45">+</span></summary>
                  <p className="mt-3 pr-7 leading-relaxed text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#10263f] py-9 text-center text-sm text-slate-300">
        <div className="container">
          <div className="mb-3 flex items-center justify-center gap-2 font-black text-white"><Blocks className="h-5 w-5" /> Missões Matemáticas no Mundo dos Blocos</div>
          <p>Produto digital para imprimir • desenhosinfantis.shop</p>
          <p className="mt-2 text-xs text-slate-500">Página em desenvolvimento. Informações finais de checkout e extras serão confirmadas antes da campanha.</p>
        </div>
      </footer>
    </div>
  );
};

export default Matematica;
