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
  Printer,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

const benefits = [
  {
    icon: Gamepad2,
    title: "Menos resistência para começar",
    text: "O universo de blocos entra como ponte visual para deixar a atividade mais convidativa antes mesmo da primeira conta.",
  },
  {
    icon: Brain,
    title: "Progressão por ano escolar",
    text: "Os desafios avançam do 1º ao 5º ano, com números, operações, multiplicação, divisão, frações, medidas, lógica e situações do cotidiano.",
  },
  {
    icon: Printer,
    title: "Imprima só o que precisar",
    text: "Material em PDF A4 para usar em casa, no reforço ou como atividade complementar, sem depender de tela durante a resolução.",
  },
];

const faqs = [
  {
    q: "É um produto físico?",
    a: "Não. O material é digital e será entregue em PDF para você imprimir as páginas que quiser usar.",
  },
  {
    q: "Para quais anos escolares serve?",
    a: "O projeto foi organizado para o 1º ao 5º ano do Ensino Fundamental, com atividades separadas por nível de dificuldade.",
  },
  {
    q: "Preciso imprimir tudo de uma vez?",
    a: "Não. Você pode escolher o ano, a missão ou a página que deseja trabalhar e imprimir somente aquela parte.",
  },
  {
    q: "Vem com gabarito?",
    a: "Sim. A versão principal do material prevê gabarito para facilitar a conferência das atividades.",
  },
  {
    q: "O material é um jogo digital?",
    a: "Não. É um conjunto de atividades matemáticas para imprimir, com identidade visual inspirada em um universo de construção por blocos.",
  },
  {
    q: "O checkout já está disponível?",
    a: "Esta é uma prévia da página de vendas. O produto e o checkout ainda estão em finalização antes do teste comercial.",
  },
];

const WorksheetMock = ({
  title,
  accent,
  problems,
}: {
  title: string;
  accent: string;
  problems: string[];
}) => (
  <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_60px_-34px_rgba(15,23,42,.55)]">
    <div className="bg-[#123f80] px-4 py-3 text-white">
      <div className="flex items-center gap-2">
        <div className={`h-7 w-7 rounded-md ${accent} shadow-inner`} />
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.18em] text-blue-100">Missão matemática</p>
          <p className="font-black leading-tight">{title}</p>
        </div>
      </div>
    </div>
    <div className="grid gap-2 p-3">
      {problems.map((problem, index) => (
        <div key={problem} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className={`grid h-6 w-6 place-items-center rounded-md ${accent} text-xs font-black text-white`}>{index + 1}</span>
            <span className="text-xs font-black uppercase tracking-wide text-slate-500">Desafio</span>
          </div>
          <p className="text-sm font-bold text-slate-800">{problem}</p>
          <div className="mt-3 h-px w-2/3 bg-slate-300" />
        </div>
      ))}
    </div>
  </div>
);

const Matematica = () => {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Missões Matemáticas no Mundo dos Blocos | Atividades para Imprimir";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const oldDescription = meta?.content;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Atividades de matemática para imprimir do 1º ao 5º ano, organizadas em missões no universo dos blocos.";

    return () => {
      document.title = oldTitle;
      if (meta && oldDescription !== undefined) meta.content = oldDescription;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 font-black text-[#123f80]">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#123f80] text-white shadow-sm">
              <Blocks className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline">Missões Matemáticas</span>
            <span className="sm:hidden">Mundo dos Blocos</span>
          </a>
          <nav className="flex items-center gap-4 text-sm font-bold text-slate-600">
            <a href="#material" className="hover:text-[#123f80]">Material</a>
            <a href="#oferta" className="rounded-xl bg-emerald-500 px-4 py-2 text-white shadow-sm hover:bg-emerald-600">Ver oferta</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="relative overflow-hidden bg-[#0d2f63] py-16 md:py-24">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-[4rem] bg-emerald-400/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-[4rem] bg-orange-400/20 blur-3xl" />

          <div className="container relative">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
              <div className="text-center lg:text-left">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-white/10 px-4 py-2 text-sm font-black text-blue-50 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-yellow-300" />
                  Matemática com cara de missão
                </div>
                <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
                  Transforme a matemática em uma <span className="text-yellow-300">aventura no Mundo dos Blocos</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 lg:mx-0">
                  Atividades para imprimir que usam o interesse pelo universo de construção e exploração como ponte para praticar matemática com mais vontade de começar.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {["150 atividades principais", "1º ao 5º ano", "PDF A4 + gabarito"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-bold text-white ring-1 ring-white/15">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" /> {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <a href="#material" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-7 py-4 text-lg font-black text-slate-950 shadow-[0_8px_0_#ca8a04] transition hover:translate-y-1 hover:shadow-[0_4px_0_#ca8a04]">
                    VER AS ATIVIDADES <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href="#oferta" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur hover:bg-white/15">
                    Ver versões e preços
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-4 rotate-2 rounded-[2.4rem] bg-emerald-400/20" />
                <div className="relative rounded-[2.2rem] border border-white/20 bg-white p-3 shadow-2xl">
                  <div className="rounded-[1.6rem] bg-slate-100 p-4 sm:p-5">
                    <div className="mb-3 flex items-center justify-between rounded-2xl bg-[#123f80] px-4 py-3 text-white">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500 shadow-inner">
                          <Calculator className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-blue-100">Mundo dos Blocos</p>
                          <p className="font-black">Aventura das Operações</p>
                        </div>
                      </div>
                      <span className="text-2xl font-black">03</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-blue-200 bg-white p-4">
                        <p className="text-xs font-black uppercase text-orange-600">Missão 11</p>
                        <p className="mt-1 font-black text-slate-800">O bloco escondido</p>
                        <div className="mt-4 space-y-3 text-lg font-black text-slate-700">
                          <p>4 + ___ = 9</p>
                          <p>___ + 3 = 8</p>
                          <p>10 + ___ = 15</p>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-blue-200 bg-white p-4">
                        <p className="text-xs font-black uppercase text-emerald-600">Missão 12</p>
                        <p className="mt-1 font-black text-slate-800">Cristais retirados</p>
                        <div className="mt-4 grid grid-cols-5 gap-2">
                          {Array.from({ length: 15 }).map((_, i) => (
                            <span key={i} className="aspect-square rounded-md border-2 border-cyan-600 bg-cyan-300 shadow-inner" />
                          ))}
                        </div>
                        <p className="mt-4 text-sm font-bold text-slate-600">Retire 5. Sobram: ______</p>
                      </div>
                    </div>
                    <div className="mt-3 rounded-2xl bg-yellow-100 px-4 py-3 text-center text-sm font-black text-amber-900">
                      MISSÃO CONCLUÍDA! ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-8">
          <div className="container">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div><p className="text-3xl font-black text-[#123f80]">150</p><p className="text-sm font-bold text-slate-500">atividades principais</p></div>
              <div><p className="text-3xl font-black text-[#123f80]">5 anos</p><p className="text-sm font-bold text-slate-500">do 1º ao 5º ano</p></div>
              <div><p className="text-3xl font-black text-[#123f80]">A4</p><p className="text-sm font-bold text-slate-500">pronto para imprimir</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-black uppercase tracking-[.2em] text-orange-600">O problema não é só a conta</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Às vezes a criança trava antes mesmo de tentar.</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Quando a atividade parece sempre igual, começar já vira uma disputa. A proposta aqui é mudar a apresentação: manter a matemática de verdade, mas colocar os desafios dentro de um universo visual que desperta curiosidade.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#123f80]"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="material" className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-black uppercase tracking-[.2em] text-emerald-600">Por dentro do material</span>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Cada página funciona como uma pequena missão.</h2>
              <p className="mt-5 text-lg text-slate-600">Vários desafios por página, espaço para responder e uma identidade consistente para cada família de conteúdo.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
              <WorksheetMock title="Números e valor posicional" accent="bg-blue-500" problems={["245 = centenas, dezenas e unidades", "Complete a trilha: 300, __, 500", "Organize os códigos do menor para o maior"]} />
              <WorksheetMock title="Multiplicação e divisão" accent="bg-red-500" problems={["4 × 8 = ____", "36 ÷ 6 = ____ cristais", "6 fileiras com 8 mudas: total = ____"]} />
              <WorksheetMock title="Medidas, dados e lógica" accent="bg-emerald-600" problems={["Calcule o tempo da missão", "Leia a tabela da expedição", "Descubra a regra da sequência"]} />
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Números e sequências", "Operações", "Multiplicação e divisão", "Frações", "Medidas e geometria", "Matemática do cotidiano", "Dados e gráficos", "Lógica e problemas"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="text-sm font-black uppercase tracking-[.2em] text-purple-600">Como usar</span>
                <h2 className="mt-3 text-3xl font-black md:text-5xl">Escolheu a missão. Imprimiu. Começou.</h2>
                <div className="mt-8 space-y-5">
                  {[
                    ["1", "Escolha o ano", "Vá direto para o nível escolar da criança e selecione o conteúdo que deseja praticar."],
                    ["2", "Imprima a página", "Use papel A4 comum e imprima somente as atividades que fizerem sentido naquele momento."],
                    ["3", "Resolva as missões", "A criança pratica a matemática no papel e você pode conferir o resultado com o gabarito."],
                  ].map(([number, title, text]) => (
                    <div key={number} className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#123f80] text-lg font-black text-white">{number}</span>
                      <div><h3 className="text-lg font-black">{title}</h3><p className="mt-1 text-slate-600">{text}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#123f80] p-7 text-white shadow-xl md:p-9">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5"><BookOpen className="h-7 w-7 text-yellow-300" /><p className="mt-4 text-3xl font-black">30</p><p className="text-blue-100">atividades por ano</p></div>
                  <div className="rounded-2xl bg-white/10 p-5"><Calculator className="h-7 w-7 text-emerald-300" /><p className="mt-4 text-3xl font-black">150</p><p className="text-blue-100">atividades no conjunto</p></div>
                  <div className="rounded-2xl bg-white/10 p-5"><FileText className="h-7 w-7 text-orange-300" /><p className="mt-4 text-3xl font-black">PDF</p><p className="text-blue-100">arquivo digital A4</p></div>
                  <div className="rounded-2xl bg-white/10 p-5"><Trophy className="h-7 w-7 text-purple-300" /><p className="mt-4 text-3xl font-black">5</p><p className="text-blue-100">níveis escolares</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="bg-[#0d2f63] py-16 md:py-24 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-black uppercase tracking-[.2em] text-yellow-300">Oferta planejada</span>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Escolha a versão que faz sentido para sua família.</h2>
              <p className="mt-5 text-blue-100">Esta página é uma prévia. Os botões de checkout serão ativados quando o material final estiver fechado.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              <article className="rounded-[2rem] border border-white/15 bg-white p-7 text-slate-900 shadow-2xl">
                <p className="font-black uppercase tracking-widest text-[#123f80]">Essencial</p>
                <div className="mt-3 flex items-end gap-2"><span className="text-sm font-bold text-slate-500">R$</span><span className="text-5xl font-black">17,90</span></div>
                <p className="mt-2 text-sm font-semibold text-slate-500">pagamento único</p>
                <ul className="mt-6 space-y-3">
                  {["150 atividades principais", "1º ao 5º ano", "PDF organizado para impressão", "Gabarito das atividades"].map((item) => (
                    <li key={item} className="flex gap-3 font-semibold text-slate-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> {item}</li>
                  ))}
                </ul>
                <button disabled className="mt-7 w-full cursor-not-allowed rounded-2xl bg-slate-200 px-5 py-4 font-black text-slate-500">CHECKOUT EM CONFIGURAÇÃO</button>
              </article>

              <article className="relative rounded-[2rem] border-4 border-yellow-300 bg-white p-7 text-slate-900 shadow-2xl">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-300 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950">Versão completa</span>
                <p className="font-black uppercase tracking-widest text-purple-700">Completo</p>
                <div className="mt-3 flex items-end gap-2"><span className="text-sm font-bold text-slate-500">R$</span><span className="text-5xl font-black">27,90</span></div>
                <p className="mt-2 text-sm font-semibold text-slate-500">pagamento único</p>
                <ul className="mt-6 space-y-3">
                  {["Tudo da versão Essencial", "Materiais extras de apoio", "Recursos de progresso e recompensa", "Bônus em finalização"].map((item) => (
                    <li key={item} className="flex gap-3 font-semibold text-slate-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> {item}</li>
                  ))}
                </ul>
                <button disabled className="mt-7 w-full cursor-not-allowed rounded-2xl bg-yellow-300 px-5 py-4 font-black text-slate-800">CHECKOUT EM CONFIGURAÇÃO</button>
              </article>
            </div>

            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-4 text-sm text-blue-100">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Produto digital</span>
              <span className="inline-flex items-center gap-2"><Printer className="h-4 w-4 text-yellow-300" /> Imprima quando quiser</span>
              <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-orange-300" /> Acesso em PDF</span>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black md:text-4xl">Dúvidas frequentes</h2>
              <p className="mt-3 text-slate-600">O essencial para entender a proposta antes do lançamento.</p>
            </div>
            <div className="mx-auto mt-9 grid max-w-5xl gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-black text-slate-900">{faq.q}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 py-8 text-center text-sm text-slate-400">
        <div className="container">
          <p className="font-bold text-slate-300">Missões Matemáticas no Mundo dos Blocos</p>
          <p className="mt-1">Material digital infantil para imprimir • desenhosinfantis.shop</p>
        </div>
      </footer>
    </div>
  );
};

export default Matematica;
