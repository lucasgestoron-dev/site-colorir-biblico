import { useEffect } from "react";

type TreeProps = { x: number; y: number; scale?: number };
type KidProps = { x: number; y: number; scale?: number; girl?: boolean; pose?: "normal" | "thumb" | "gem" };

const Tree = ({ x, y, scale = 1 }: TreeProps) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <rect x="23" y="54" width="18" height="48" rx="2" fill="#9a612d" />
    <rect x="29" y="54" width="6" height="48" fill="#6f421f" opacity=".85" />
    <rect x="0" y="22" width="36" height="34" rx="3" fill="#57aa32" />
    <rect x="24" y="10" width="40" height="40" rx="3" fill="#63b63a" />
    <rect x="10" y="0" width="38" height="38" rx="3" fill="#77c74b" />
    <rect x="7" y="25" width="9" height="9" fill="#8cdb57" opacity=".75" />
    <rect x="47" y="15" width="9" height="9" fill="#438f29" opacity=".65" />
    <rect x="27" y="3" width="10" height="8" fill="#a5e468" opacity=".6" />
  </g>
);

const Kid = ({ x, y, scale = 1, girl = false, pose = "normal" }: KidProps) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    {girl && <path d="M20 30 C5 42 3 86 18 111 L83 111 C96 78 92 42 80 29 Z" fill="#863d27" />}
    <rect x="18" y="13" width="68" height="66" rx="9" fill="#d98f5b" />
    <rect x="14" y="5" width="76" height="25" rx="7" fill={girl ? "#7f3b24" : "#5a331f"} />
    <rect x="12" y="23" width="20" height="42" rx="4" fill={girl ? "#7f3b24" : "#5a331f"} />
    <rect x="72" y="22" width="20" height="38" rx="4" fill={girl ? "#7f3b24" : "#5a331f"} />
    <rect x="36" y="38" width="14" height="14" rx="2" fill="#fff" />
    <rect x="58" y="38" width="14" height="14" rx="2" fill="#fff" />
    <rect x="40" y="42" width="8" height="8" fill="#1f4053" />
    <rect x="60" y="42" width="8" height="8" fill="#1f4053" />
    <rect x="45" y="61" width="24" height="5" rx="2" fill="#7c3a2e" />
    <rect x="22" y="76" width="62" height="67" rx="11" fill="#2182b8" />
    <rect x="22" y="76" width="62" height="12" fill="#2f9acb" />
    <rect x="18" y="135" width="25" height="13" fill="#293f58" />
    <rect x="63" y="135" width="25" height="13" fill="#293f58" />
    {pose === "thumb" ? (
      <>
        <rect x="78" y="84" width="18" height="50" rx="8" fill="#d98f5b" transform="rotate(-20 78 84)" />
        <rect x="86" y="70" width="13" height="28" rx="6" fill="#d98f5b" transform="rotate(8 86 70)" />
      </>
    ) : pose === "gem" ? (
      <>
        <rect x="79" y="83" width="18" height="48" rx="8" fill="#d98f5b" transform="rotate(-21 79 83)" />
        <polygon points="92,70 105,78 101,94 91,103 80,94 77,79" fill="#36d9ef" stroke="#0d8098" strokeWidth="3" />
        <path d="M80 80 L104 80 M91 71 L91 101" stroke="#d9fbff" strokeWidth="2" opacity=".75" />
      </>
    ) : (
      <>
        <rect x="3" y="82" width="18" height="50" rx="8" fill="#d98f5b" transform="rotate(17 3 82)" />
        <rect x="82" y="82" width="18" height="50" rx="8" fill="#d98f5b" transform="rotate(-17 82 82)" />
      </>
    )}
  </g>
);

const Workbook = ({ x, y, w, h, rotate = 0, src }: { x: number; y: number; w: number; h: number; rotate?: number; src: string }) => (
  <g transform={`rotate(${rotate} ${x + w / 2} ${y + h / 2})`}>
    <rect x={x - 4} y={y - 4} width={w + 8} height={h + 8} rx="5" fill="#fff" stroke="#dedede" strokeWidth="1.5" />
    <image href={src} x={x} y={y} width={w} height={h} preserveAspectRatio="xMidYMid slice" />
  </g>
);

const MiniCover = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <rect x="0" y="0" width="94" height="112" rx="8" fill="#116aa4" stroke="#fff" strokeWidth="3" />
    <rect x="7" y="8" width="80" height="15" rx="7" fill="#f2b314" />
    <text x="47" y="19" textAnchor="middle" fontSize="8" fontWeight="900" fill="#15486e">MISSÕES MATEMÁTICAS</text>
    <text x="47" y="48" textAnchor="middle" fontSize="18" fontWeight="900" fill="#ffd21f" stroke="#0a3c68" strokeWidth="1.2" paintOrder="stroke">
      MUNDO DOS
    </text>
    <text x="47" y="68" textAnchor="middle" fontSize="21" fontWeight="900" fill="#ffd21f" stroke="#0a3c68" strokeWidth="1.2" paintOrder="stroke">
      BLOCOS
    </text>
    <rect x="13" y="79" width="68" height="20" rx="4" fill="#0c4f7e" opacity=".9" />
    <rect x="20" y="84" width="11" height="11" rx="2" fill="#48ad42" />
    <rect x="34" y="82" width="14" height="14" rx="2" fill="#f49d24" />
    <rect x="51" y="83" width="12" height="12" rx="2" fill="#34d3e8" />
    <rect x="66" y="85" width="10" height="10" rx="2" fill="#7d58c5" />
  </g>
);

const BlocoDosMundos = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = "Missões Matemáticas — Mundo dos Blocos";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main
      style={{
        background: "#eef8ff",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        fontFamily: "Fredoka, system-ui, sans-serif",
      }}
    >
      <svg
        viewBox="0 0 740 2048"
        width="100%"
        role="img"
        aria-label="Landing page Missões Matemáticas Mundo dos Blocos"
        style={{ display: "block", width: "100%", height: "auto", background: "#fffaf0" }}
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7ad3f7" />
            <stop offset="63%" stopColor="#48b7e9" />
            <stop offset="100%" stopColor="#2c91cf" />
          </linearGradient>
          <linearGradient id="lightBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7fcff" />
            <stop offset="100%" stopColor="#e8f7ff" />
          </linearGradient>
          <linearGradient id="cream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fffdf6" />
            <stop offset="100%" stopColor="#fff8e8" />
          </linearGradient>
          <linearGradient id="deepBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0c4d82" />
            <stop offset="55%" stopColor="#0a679b" />
            <stop offset="100%" stopColor="#07416d" />
          </linearGradient>
          <linearGradient id="plansBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8f8ff" />
            <stop offset="100%" stopColor="#dff2ff" />
          </linearGradient>
          <linearGradient id="completePlan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d6d9f" />
            <stop offset="100%" stopColor="#073f6b" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#18364a" floodOpacity=".28" />
          </filter>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#18364a" floodOpacity=".15" />
          </filter>
        </defs>

        {/* HERO */}
        <rect x="0" y="0" width="740" height="366" fill="url(#sky)" />
        <circle cx="68" cy="32" r="26" fill="#fff" opacity=".25" />
        <circle cx="103" cy="28" r="20" fill="#fff" opacity=".22" />
        <circle cx="646" cy="40" r="30" fill="#fff" opacity=".22" />
        <circle cx="610" cy="36" r="22" fill="#fff" opacity=".22" />
        <rect x="0" y="318" width="740" height="48" fill="#68be45" />
        <rect x="0" y="348" width="740" height="18" fill="#7b542b" />
        <rect x="0" y="348" width="740" height="6" fill="#4e942e" />

        <Tree x={-12} y={66} scale={1.25} />
        <Tree x={-10} y={203} scale={1.05} />
        <Tree x={665} y={42} scale={1.3} />
        <Tree x={640} y={228} scale={.95} />

        <g transform="translate(652 123)">
          <rect x="18" y="0" width="46" height="126" fill="#9ba0a3" stroke="#61676c" strokeWidth="4" />
          <rect x="4" y="-15" width="74" height="20" fill="#7a7e83" stroke="#5d6267" strokeWidth="3" />
          <rect x="29" y="28" width="24" height="30" fill="#305f8c" />
          <rect x="29" y="77" width="24" height="34" fill="#305f8c" />
          <polygon points="16,-15 41,-48 66,-15" fill="#2389cb" />
          <rect x="31" y="-60" width="20" height="18" fill="#d3a135" />
        </g>

        {/* top nav */}
        <rect x="0" y="0" width="740" height="43" fill="#ffffff" opacity=".22" />
        <g transform="translate(88 7)">
          <rect x="0" y="2" width="29" height="29" rx="5" fill="#f49b24" stroke="#5b3b14" strokeWidth="2" />
          <rect x="6" y="8" width="8" height="8" fill="#55b145" />
          <rect x="15" y="5" width="8" height="8" fill="#30c9dc" />
          <rect x="14" y="15" width="8" height="8" fill="#7864c8" />
          <text x="37" y="12" fontSize="8" fontWeight="900" fill="#174d77">MUNDO DOS</text>
          <text x="37" y="24" fontSize="11" fontWeight="900" fill="#f0a400">BLOCOS</text>
        </g>
        <text x="207" y="25" fontSize="6.5" fontWeight="800" fill="#e7a900">Início</text>
        <text x="245" y="25" fontSize="6.5" fontWeight="800" fill="#173b63">Como funciona</text>
        <text x="326" y="25" fontSize="6.5" fontWeight="800" fill="#173b63">O que vai receber</text>
        <text x="417" y="25" fontSize="6.5" fontWeight="800" fill="#173b63">Depoimentos</text>
        <text x="486" y="25" fontSize="6.5" fontWeight="800" fill="#173b63">Perguntas frequentes</text>
        <rect x="589" y="10" width="104" height="23" rx="12" fill="#12aa38" stroke="#77e08a" strokeWidth="1.5" filter="url(#softShadow)" />
        <text x="641" y="25" textAnchor="middle" fontSize="6.7" fontWeight="900" fill="#fff">QUERO GARANTIR AGORA →</text>

        {/* hero copy */}
        <rect x="108" y="56" width="167" height="27" rx="8" fill="#0d66a5" stroke="#0b4f83" strokeWidth="2" filter="url(#softShadow)" />
        <text x="191.5" y="74" textAnchor="middle" fontSize="11.5" fontWeight="900" fill="#ffd62b">• MISSÕES MATEMÁTICAS •</text>
        <text x="84" y="112" fontSize="31" fontWeight="900" fill="#0a3e6c">MUNDO DOS</text>
        <text x="87" y="108" fontSize="31" fontWeight="900" fill="#ffd21e" stroke="#0a3e6c" strokeWidth="2.2" paintOrder="stroke">MUNDO DOS</text>
        <text x="76" y="150" fontSize="44" fontWeight="900" fill="#0a3e6c">BLOCOS</text>
        <text x="79" y="145" fontSize="44" fontWeight="900" fill="#ffd21e" stroke="#0a3e6c" strokeWidth="2.6" paintOrder="stroke">BLOCOS</text>
        <rect x="74" y="158" width="247" height="43" rx="9" fill="#115e9a" filter="url(#softShadow)" />
        <text x="197" y="176" textAnchor="middle" fontSize="12" fontWeight="900" fill="#fff">Mais de 150 atividades de matemática</text>
        <text x="197" y="190" textAnchor="middle" fontSize="11" fontWeight="900" fill="#fff">para o 1º ao 5º ano</text>
        <text x="197" y="212" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#eaf8ff">Aprender matemática pode ser uma grande aventura!</text>

        {[
          [70, "+150", "atividades", "🧮"],
          [137, "1º ao 5º", "ano", "🎒"],
          [204, "PDF", "para imprimir", "📄"],
          [271, "Sem tela", "e sem complicação", "⏱"],
        ].map(([x, a, b, icon]) => (
          <g key={String(a)} transform={`translate(${x} 223)`}>
            <rect x="0" y="0" width="59" height="57" rx="8" fill="#fff" stroke="#d8e8ef" filter="url(#softShadow)" />
            <text x="29.5" y="18" textAnchor="middle" fontSize="12">{icon}</text>
            <text x="29.5" y="34" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#174c78">{a}</text>
            <text x="29.5" y="46" textAnchor="middle" fontSize="6.7" fontWeight="800" fill="#53697c">{b}</text>
          </g>
        ))}

        <rect x="73" y="291" width="236" height="36" rx="18" fill="#13ad38" stroke="#91ed9e" strokeWidth="2" filter="url(#shadow)" />
        <text x="191" y="313" textAnchor="middle" fontSize="9.5" fontWeight="900" fill="#fff">QUERO GARANTIR AGORA →</text>
        <text x="79" y="344" fontSize="6.4" fontWeight="700" fill="#fff">● Compra segura</text>
        <text x="158" y="344" fontSize="6.4" fontWeight="700" fill="#fff">● Acesso imediato</text>
        <text x="244" y="344" fontSize="6.4" fontWeight="700" fill="#fff">● 7 dias de garantia</text>

        {/* Hero art */}
        <Workbook x={392} y={54} w={76} h={104} rotate={-8} src="/math/page-numeros.webp" />
        <Workbook x={445} y={47} w={78} h={106} rotate={-2} src="/math/page-adicao.webp" />
        <Workbook x={506} y={57} w={75} h={102} rotate={7} src="/math/page-medidas.webp" />
        <Workbook x={565} y={88} w={72} h={97} rotate={8} src="/math/page-adicao.webp" />
        <Workbook x={360} y={95} w={74} h={101} rotate={-7} src="/math/page-medidas.webp" />

        <g transform="translate(568 74) rotate(4)">
          <rect x="0" y="0" width="114" height="69" rx="8" fill="#fff0a9" stroke="#e4b338" strokeWidth="1.5" filter="url(#softShadow)" />
          <text x="57" y="20" textAnchor="middle" fontSize="8.2" fontWeight="900" fill="#173b63">DESAFIOS REAIS</text>
          <text x="57" y="34" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#173b63">APRENDIZADO DE VERDADE</text>
          <text x="57" y="49" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#173b63">DIVERSÃO GARANTIDA!</text>
        </g>

        <g transform="translate(437 139)">
          <MiniCover x={0} y={0} scale={1.25} />
          <rect x="7" y="-10" width="104" height="17" rx="8" fill="#e9b313" />
          <text x="59" y="2" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#174c78">MISSÕES MATEMÁTICAS</text>
        </g>

        <Kid x={338} y={214} scale={.9} />
        <Kid x={555} y={225} scale={.73} girl />

        <g transform="translate(457 273)">
          <rect x="0" y="0" width="92" height="58" rx="5" fill="#ba6720" stroke="#5b351a" strokeWidth="4" />
          <rect x="0" y="10" width="92" height="14" fill="#db8c34" />
          <rect x="0" y="29" width="92" height="5" fill="#5b351a" />
          <rect x="40" y="23" width="14" height="22" rx="2" fill="#e7ebef" stroke="#9da7af" strokeWidth="2" />
          <polygon points="42,-19 57,-6 53,11 42,22 31,11 27,-6" fill="#33d7ee" stroke="#0a849f" strokeWidth="3" />
          <path d="M29 -4 L55 -4 M42 -18 L42 20" stroke="#dffcff" strokeWidth="2" opacity=".8" />
        </g>

        <g transform="translate(616 224)">
          <rect x="0" y="0" width="92" height="79" fill="#9d632f" stroke="#623c1d" strokeWidth="4" filter="url(#softShadow)" />
          <text x="46" y="24" textAnchor="middle" fontSize="9.2" fontWeight="900" fill="#fff7d9">MATEMÁTICA</text>
          <text x="46" y="40" textAnchor="middle" fontSize="9.2" fontWeight="900" fill="#fff7d9">TAMBÉM PODE</text>
          <text x="46" y="56" textAnchor="middle" fontSize="9.2" fontWeight="900" fill="#fff7d9">SER DIVERTIDA!</text>
        </g>

        {/* SAMPLE SECTION */}
        <rect x="0" y="366" width="740" height="255" fill="url(#lightBlue)" />
        <text x="370" y="398" textAnchor="middle" fontSize="20" fontWeight="900" fill="#123f69">Veja como são as atividades por dentro</text>
        <text x="370" y="416" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#586d7d">
          Páginas reais do material. Atividades criativas, com o universo de blocos que as crianças adoram.
        </text>

        {[
          [39, "CONTAGEM", "/math/page-numeros.webp", "QUANTOS BLOCOS?"],
          [151, "SOMA E SUBTRAÇÃO", "/math/page-adicao.webp", "SOMANDO RECURSOS"],
          [263, "PROBLEMAS", "/math/page-medidas.webp", "DESAFIO DO CONSTRUTOR"],
          [375, "FRAÇÕES", "/math/page-numeros.webp", "FRAÇÕES NO MUNDO"],
          [487, "MEDIDAS", "/math/page-medidas.webp", "MEDINDO CONSTRUÇÕES"],
          [599, "DESAFIOS LÓGICOS", "/math/page-adicao.webp", "LABIRINTO DOS BLOCOS"],
        ].map(([x, label, src, title]) => (
          <g key={String(label)} transform={`translate(${x} 437)`}>
            <rect x="10" y="0" width="82" height="16" rx="8" fill="#d8efff" />
            <text x="51" y="11" textAnchor="middle" fontSize="6.2" fontWeight="900" fill="#1d6fa8">{label}</text>
            <rect x="0" y="18" width="103" height="160" rx="8" fill="#fff" filter="url(#softShadow)" />
            <rect x="6" y="24" width="91" height="21" rx="4" fill="#fff8e8" stroke="#e6d8bf" />
            <text x="51" y="38" textAnchor="middle" fontSize="5.9" fontWeight="900" fill="#203d5d">{title}</text>
            <image href={String(src)} x="7" y="47" width="89" height="123" preserveAspectRatio="xMidYMid slice" />
          </g>
        ))}
        <circle cx="25" cy="527" r="13" fill="#fff" stroke="#a9d9f4" strokeWidth="1.5" />
        <text x="25" y="532" textAnchor="middle" fontSize="15" fontWeight="900" fill="#1878b8">‹</text>
        <circle cx="715" cy="527" r="13" fill="#1273b4" />
        <text x="715" y="532" textAnchor="middle" fontSize="15" fontWeight="900" fill="#fff">›</text>

        {/* HOW IT WORKS */}
        <rect x="0" y="621" width="740" height="190" fill="url(#cream)" />
        <image href="/math/child-study.webp" x="0" y="621" width="300" height="190" preserveAspectRatio="xMidYMid slice" />
        <text x="18" y="654" fontSize="14" fontWeight="700" fill="#173b63">Ele aprende</text>
        <text x="18" y="672" fontSize="14" fontWeight="700" fill="#173b63">se divertindo!</text>
        <text x="105" y="672" fontSize="16" fontWeight="900" fill="#d34154">↘</text>
        <text x="320" y="660" fontSize="22" fontWeight="900" fill="#143c66">Simples de baixar,</text>
        <text x="320" y="684" fontSize="22" fontWeight="900" fill="#143c66">imprimir e transformar</text>
        <text x="320" y="708" fontSize="22" fontWeight="900" fill="#143c66">a rotina de estudos</text>
        <Kid x={555} y={620} scale={.62} pose="gem" />
        <g transform="translate(631 635) rotate(4)">
          <rect x="0" y="0" width="91" height="65" rx="12" fill="#fff2ac" stroke="#e8c84a" />
          <text x="45.5" y="17" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#173b63">APRENDER</text>
          <text x="45.5" y="29" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#173b63">TAMBÉM É</text>
          <text x="45.5" y="41" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#173b63">CONSTRUIR</text>
          <text x="45.5" y="53" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#173b63">GRANDES SONHOS!</text>
        </g>

        {[
          [318, "1", "Baixe o PDF", "e tenha acesso\nimediato"],
          [414, "2", "Imprima", "quando quiser,\nquantas vezes quiser"],
          [510, "3", "Entregue", "para a criança\ne acompanhe"],
          [606, "4", "Veja a matemática", "se tornar uma\nexperiência positiva"],
        ].map(([x, n, title, desc]) => {
          const lines = String(desc).split("\n");
          return (
            <g key={String(n)} transform={`translate(${x} 725)`}>
              <rect x="0" y="0" width="86" height="75" rx="8" fill="#fff" filter="url(#softShadow)" />
              <circle cx="14" cy="15" r="10" fill="#1fb552" />
              <text x="14" y="19" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">{n}</text>
              <text x="8" y="36" fontSize="8.3" fontWeight="900" fill="#173b63">{title}</text>
              <text x="8" y="51" fontSize="6.3" fontWeight="700" fill="#637587">
                <tspan x="8" dy="0">{lines[0]}</tspan>
                {lines[1] && <tspan x="8" dy="9">{lines[1]}</tspan>}
              </text>
            </g>
          );
        })}

        {/* AUDIENCE */}
        <rect x="0" y="811" width="740" height="126" fill="#fffaf0" />
        <text x="370" y="837" textAnchor="middle" fontSize="18" fontWeight="900" fill="#143c66">Esse material é ideal para:</text>
        {[
          [37, "🏠", "Pais que querem", "reforço em casa"],
          [152, "🎒", "Crianças que", "resistem à matemática"],
          [267, "🎮", "Crianças que gostam", "do universo de blocos"],
          [382, "📊", "Professores e", "apoio escolar"],
          [497, "🗓️", "Férias e", "momentos livres"],
          [612, "❤️", "Famílias que buscam", "aprendizado leve"],
        ].map(([x, icon, a, b]) => (
          <g key={String(a)} transform={`translate(${x} 852)`}>
            <rect x="0" y="0" width="91" height="68" rx="8" fill="#fff" filter="url(#softShadow)" />
            <text x="45.5" y="25" textAnchor="middle" fontSize="21">{icon}</text>
            <text x="45.5" y="43" textAnchor="middle" fontSize="6.4" fontWeight="900" fill="#173b63">{a}</text>
            <text x="45.5" y="53" textAnchor="middle" fontSize="6.4" fontWeight="900" fill="#173b63">{b}</text>
          </g>
        ))}

        {/* BLUE BENEFIT BAND */}
        <rect x="0" y="937" width="740" height="151" fill="url(#deepBlue)" />
        <text x="40" y="973" fontSize="23" fontWeight="900" fill="#fff">Mais do que</text>
        <text x="40" y="998" fontSize="23" fontWeight="900" fill="#fff">atividades, é uma nova</text>
        <text x="40" y="1023" fontSize="23" fontWeight="900" fill="#fff">forma de se relacionar</text>
        <text x="40" y="1048" fontSize="23" fontWeight="900" fill="#fff">com a matemática.</text>

        {[
          [962, "Aumenta o interesse da criança"],
          [981, "Desenvolve raciocínio lógico"],
          [1000, "Trabalha diversas habilidades"],
          [1019, "Atividades ilustradas e envolventes"],
          [1038, "Pronto para imprimir e usar"],
          [1057, "Organizado por ano escolar"],
        ].map(([y, t]) => (
          <g key={String(t)}>
            <circle cx="297" cy={Number(y) - 3} r="6" fill="#39d65b" />
            <text x="297" y={Number(y)} textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">✓</text>
            <text x="309" y={Number(y)} fontSize="8.5" fontWeight="700" fill="#eaf8ff">{t}</text>
          </g>
        ))}

        <Tree x={652} y={1006} scale={.92} />
        <Kid x={504} y={945} scale={.9} pose="gem" />
        <polygon points="511,971 527,982 522,1001 510,1013 497,1000 495,982" fill="#ffd94b" stroke="#e0aa14" strokeWidth="2.5" />
        <path d="M498 984 L525 984 M511 973 L511 1010" stroke="#fff7bd" strokeWidth="2" opacity=".8" />
        <text x="647" y="968" fontSize="12" fontWeight="900" fill="#fff1b4">PEQUENOS</text>
        <text x="647" y="984" fontSize="12" fontWeight="900" fill="#fff1b4">DESAFIOS,</text>
        <text x="647" y="1000" fontSize="12" fontWeight="900" fill="#fff1b4">GRANDES</text>
        <text x="647" y="1016" fontSize="12" fontWeight="900" fill="#fff1b4">CONQUISTAS!</text>

        {/* TESTIMONIALS */}
        <rect x="0" y="1088" width="740" height="160" fill="#fffaf0" />
        <text x="370" y="1119" textAnchor="middle" fontSize="18" fontWeight="900" fill="#143c66">O que as mães estão dizendo</text>
        <text x="370" y="1135" textAnchor="middle" fontSize="7" fontWeight="700" fill="#657687">Mensagens reais de quem já está usando o material.</text>

        {[
          [64, "Fernanda", "Meu filho amou! Ele que sempre", "reclamava de matemática, agora", "pede para fazer as atividades", "do Mundo dos Blocos. 😍", "10:24"],
          [278, "Camila", "Estou usando nas férias e está", "sendo perfeito. As atividades são", "lindas e bem pensadas. Dá pra ver", "que foi feito com muito carinho.", "19:37"],
          [492, "Juliana", "Comprei e já imprimi. Ele fez", "sem reclamar e ainda pediu mais!", "Vale muito a pena!", "", "19:37"],
        ].map(([x, name, l1, l2, l3, l4, time], idx) => (
          <g key={String(name)} transform={`translate(${x} 1150)`}>
            <rect x="0" y="0" width="186" height="82" rx="10" fill="#effbf3" stroke="#cbead6" filter="url(#softShadow)" />
            <circle cx="21" cy="19" r="13" fill={idx === 1 ? "#56a6c9" : "#d99865"} />
            <circle cx="21" cy="18" r="8" fill="#73432d" />
            <text x="42" y="18" fontSize="7.5" fontWeight="900" fill="#173b63">{name}</text>
            <text x="169" y="18" fontSize="9" fill="#20b865">◉</text>
            <text x="42" y="36" fontSize="7" fontWeight="650" fill="#354b5d">{l1}</text>
            <text x="42" y="49" fontSize="7" fontWeight="650" fill="#354b5d">{l2}</text>
            <text x="42" y="62" fontSize="7" fontWeight="650" fill="#354b5d">{l3}</text>
            <text x="42" y="75" fontSize="7" fontWeight="650" fill="#354b5d">{l4}</text>
            <text x="166" y="75" textAnchor="end" fontSize="5.5" fill="#82919d">{time}</text>
          </g>
        ))}

        {/* RECEIVE */}
        <rect x="0" y="1248" width="740" height="145" fill="#fffaf0" />
        <text x="370" y="1276" textAnchor="middle" fontSize="18" fontWeight="900" fill="#143c66">Tudo o que você vai receber</text>
        <text x="370" y="1291" textAnchor="middle" fontSize="7" fontWeight="700" fill="#657687">Material completo, organizado e pronto para usar.</text>
        {[
          [42, "🧮", "PDF principal", "+ de 150 atividades"],
          [154, "🎁", "Organizado do", "1º ao 5º ano"],
          [266, "📝", "Gabarito completo", ""],
          [378, "📋", "Instruções de uso", ""],
          [490, "💻", "Acesso imediato", ""],
          [602, "🖨️", "Para imprimir", "quando quiser"],
        ].map(([x, icon, title, sub]) => (
          <g key={String(title)} transform={`translate(${x} 1306)`}>
            <rect x="0" y="0" width="96" height="70" rx="8" fill="#fff" filter="url(#softShadow)" />
            <text x="48" y="26" textAnchor="middle" fontSize="19">{icon}</text>
            <text x="48" y="45" textAnchor="middle" fontSize="6.6" fontWeight="900" fill="#173b63">{title}</text>
            <text x="48" y="56" textAnchor="middle" fontSize="6.2" fontWeight="800" fill="#587083">{sub}</text>
          </g>
        ))}

        {/* EXTRAS */}
        <rect x="0" y="1393" width="740" height="158" fill="#fff3df" />
        <text x="370" y="1422" textAnchor="middle" fontSize="17" fontWeight="900" fill="#143c66">E não para por aí... (Plano Completo)</text>
        <text x="370" y="1438" textAnchor="middle" fontSize="7" fontWeight="700" fill="#657687">Além do material principal, você também recebe:</text>
        {[
          [45, "/math/page-adicao.webp", "Caderno de", "Tabuada Ilustrado"],
          [157, "/math/page-numeros.webp", "Probleminhas", "Extras"],
          [269, "/math/page-medidas.webp", "Mapa de", "Progresso"],
          [381, "/math/page-adicao.webp", "Cartões de", "Recompensas"],
          [493, "/math/page-numeros.webp", "Certificado de", "Conquistas"],
          [605, "/math/page-medidas.webp", "Guia para", "Responsáveis"],
        ].map(([x, src, a, b]) => (
          <g key={String(a) + String(x)} transform={`translate(${x} 1450)`}>
            <rect x="0" y="0" width="91" height="84" rx="8" fill="#fff" filter="url(#softShadow)" />
            <image href={String(src)} x="24" y="8" width="43" height="43" preserveAspectRatio="xMidYMid slice" />
            <text x="45.5" y="66" textAnchor="middle" fontSize="6.3" fontWeight="900" fill="#173b63">{a}</text>
            <text x="45.5" y="76" textAnchor="middle" fontSize="6.3" fontWeight="900" fill="#173b63">{b}</text>
          </g>
        ))}

        {/* PLANS */}
        <rect id="planos" x="0" y="1551" width="740" height="260" fill="url(#plansBg)" />
        <text x="370" y="1579" textAnchor="middle" fontSize="18" fontWeight="900" fill="#143c66">Escolha a melhor opção para você</text>
        <text x="370" y="1594" textAnchor="middle" fontSize="6.6" fontWeight="700" fill="#657687">Ambos os planos dão acesso ao material principal. O plano completo inclui os extras exclusivos.</text>
        <Tree x={0} y={1718} scale={.9} />
        <Tree x={675} y={1722} scale={.9} />

        <g transform="translate(25 1606) rotate(-3)">
          <rect x="0" y="0" width="115" height="93" rx="14" fill="#d9f4ff" stroke="#a5dced" />
          <text x="58" y="22" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#173b63">INVESTIR</text>
          <text x="58" y="36" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#173b63">NA EDUCAÇÃO</text>
          <text x="58" y="50" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#173b63">HOJE, CONSTRÓI</text>
          <text x="58" y="64" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#173b63">UM FUTURO</text>
          <text x="58" y="78" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#173b63">EXTRAORDINÁRIO!</text>
        </g>
        <Kid x={48} y={1683} scale={.9} pose="thumb" />

        <g transform="translate(181 1609)">
          <rect x="0" y="0" width="183" height="184" rx="10" fill="#fff" stroke="#b8dbea" strokeWidth="2" filter="url(#softShadow)" />
          <text x="91.5" y="21" textAnchor="middle" fontSize="8" fontWeight="900" fill="#205f8f">PLANO ESSENCIAL</text>
          <MiniCover x={19} y={35} scale={.53} />
          {["+ de 150 atividades", "Organizado do 1º ao 5º ano", "Gabarito completo", "Instruções de uso", "Acesso imediato"].map((t, i) => (
            <g key={t}>
              <text x="82" y={47 + i * 15} fontSize="7.2" fontWeight="750" fill="#3e5364">✓</text>
              <text x="92" y={47 + i * 15} fontSize="6.2" fontWeight="750" fill="#3e5364">{t}</text>
            </g>
          ))}
          <text x="91.5" y="142" textAnchor="middle" fontSize="8" fontWeight="800" fill="#667786">Pagamento único</text>
          <text x="91.5" y="166" textAnchor="middle" fontSize="25" fontWeight="900" fill="#143c66">R$ 17,90</text>
          <rect x="17" y="170" width="149" height="28" rx="14" fill="#13ad38" stroke="#77e389" />
          <text x="91.5" y="188" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#fff">QUERO O PLANO ESSENCIAL</text>
        </g>

        <g transform="translate(370 1597)">
          <rect x="0" y="0" width="192" height="203" rx="10" fill="url(#completePlan)" stroke="#1ed353" strokeWidth="3" filter="url(#shadow)" />
          <rect x="104" y="-8" width="78" height="18" rx="9" fill="#22c54b" />
          <text x="143" y="4" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">Mais escolhido</text>
          <text x="96" y="24" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#fff">PLANO COMPLETO</text>
          <MiniCover x={16} y={39} scale={.55} />
          {["Tudo do Plano Essencial", "Caderno de Tabuada", "Probleminhas Extras", "Mapa de Progresso", "Cartões de Recompensas", "Certificado de Conquistas", "Guia para Responsáveis"].map((t, i) => (
            <g key={t}>
              <text x="82" y={49 + i * 15} fontSize="7.2" fontWeight="900" fill="#4ff06c">✓</text>
              <text x="92" y={49 + i * 15} fontSize="6" fontWeight="750" fill="#eefaff">{t}</text>
            </g>
          ))}
          <text x="96" y="160" textAnchor="middle" fontSize="8" fontWeight="800" fill="#cdefff">Pagamento único</text>
          <text x="96" y="185" textAnchor="middle" fontSize="26" fontWeight="900" fill="#44e65e">R$ 27,90</text>
          <rect x="16" y="188" width="160" height="29" rx="15" fill="#13ad38" stroke="#78ed8c" />
          <text x="96" y="206" textAnchor="middle" fontSize="6.6" fontWeight="900" fill="#fff">QUERO O PLANO COMPLETO</text>
        </g>

        {[
          [590, 1632, "🛡️", "Compra segura"],
          [590, 1684, "⬇️", "Acesso imediato"],
          [590, 1736, "⏱️", "7 dias de garantia"],
        ].map(([x, y, icon, text]) => (
          <g key={String(text)} transform={`translate(${x} ${y})`}>
            <rect x="0" y="0" width="36" height="36" rx="7" fill="#8ae8ff" stroke="#164b70" strokeWidth="2" />
            <text x="18" y="24" textAnchor="middle" fontSize="17">{icon}</text>
            <text x="46" y="23" fontSize="8.5" fontWeight="900" fill="#173b63">{text}</text>
          </g>
        ))}

        {/* FAQ */}
        <rect x="0" y="1811" width="740" height="125" fill="#fffaf0" />
        <text x="370" y="1840" textAnchor="middle" fontSize="18" fontWeight="900" fill="#143c66">Perguntas frequentes</text>
        {[
          [105, 1853, "Como recebo o material?"],
          [105, 1881, "Posso imprimir quantas vezes quiser?"],
          [105, 1909, "Serve para qual idade?"],
          [340, 1853, "O material é físico?"],
          [340, 1881, "Como funciona a garantia?"],
          [340, 1909, "E se eu tiver dúvidas?"],
        ].map(([x, y, q]) => (
          <g key={String(q)}>
            <rect x={Number(x)} y={Number(y)} width="220" height="22" rx="7" fill="#fff" stroke="#e2e9ee" filter="url(#softShadow)" />
            <text x={Number(x) + 12} y={Number(y) + 14} fontSize="6.6" fontWeight="800" fill="#36536a">{q}</text>
            <text x={Number(x) + 206} y={Number(y) + 14} fontSize="9" fontWeight="900" fill="#3979a8">⌄</text>
          </g>
        ))}
        <Kid x={553} y={1818} scale={.75} girl />
        <g transform="translate(632 1823) rotate(5)">
          <rect x="0" y="0" width="94" height="55" rx="10" fill="#fff0ae" stroke="#e5c64f" />
          <text x="47" y="17" textAnchor="middle" fontSize="6.8" fontWeight="900" fill="#173b63">AINDA COM</text>
          <text x="47" y="29" textAnchor="middle" fontSize="6.8" fontWeight="900" fill="#173b63">DÚVIDAS? ESTAMOS</text>
          <text x="47" y="41" textAnchor="middle" fontSize="6.8" fontWeight="900" fill="#173b63">AQUI PARA AJUDAR!</text>
        </g>

        {/* GUARANTEE */}
        <rect x="0" y="1936" width="740" height="66" fill="#dff3ff" />
        <circle cx="71" cy="1968" r="24" fill="#1269ae" stroke="#71b9e4" strokeWidth="3" />
        <text x="71" y="1978" textAnchor="middle" fontSize="28" fontWeight="900" fill="#fff">8</text>
        <text x="112" y="1961" fontSize="17" fontWeight="900" fill="#143c66">Garantia de 7 dias</text>
        <text x="112" y="1981" fontSize="17" fontWeight="900" fill="#143c66">Risco zero para você!</text>
        <text x="276" y="1965" fontSize="6.5" fontWeight="700" fill="#53697b">Se por qualquer motivo você não ficar satisfeito, é só pedir o reembolso</text>
        <text x="276" y="1977" fontSize="6.5" fontWeight="700" fill="#53697b">em até 7 dias. Sem burocracia.</text>
        <rect x="548" y="1951" width="153" height="34" rx="17" fill="#13ad38" stroke="#7ce98d" strokeWidth="2" filter="url(#softShadow)" />
        <text x="624.5" y="1972" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#fff">QUERO GARANTIR AGORA →</text>

        {/* FOOTER */}
        <rect x="0" y="2002" width="740" height="46" fill="#d7effb" />
        <Tree x={0} y={1980} scale={.68} />
        <Tree x={686} y={1980} scale={.68} />
        <g transform="translate(82 2009)">
          <text x="0" y="9" fontSize="8" fontWeight="900" fill="#176a9d">MUNDO DOS</text>
          <text x="0" y="22" fontSize="12" fontWeight="900" fill="#e59a00">BLOCOS</text>
        </g>
        <text x="167" y="2019" fontSize="6.5" fontWeight="900" fill="#173b63">Missões Matemáticas no Mundo dos Blocos</text>
        <text x="167" y="2032" fontSize="6" fontWeight="700" fill="#5d7080">Aprender hoje. Construir um futuro incrível amanhã.</text>
        <text x="498" y="2019" fontSize="5.8" fontWeight="700" fill="#53697b">Política de Privacidade  |  Termos de Uso  |  Suporte</text>
        <text x="511" y="2032" fontSize="5.8" fontWeight="700" fill="#53697b">© 2026 Mundo dos Blocos. Todos os direitos reservados.</text>

        {/* clickable CTA overlays, invisible */}
        <a href="#planos" aria-label="Ir para os planos">
          <rect x="73" y="291" width="236" height="36" rx="18" fill="transparent" />
        </a>
        <a href="#planos" aria-label="Ir para os planos">
          <rect x="589" y="10" width="104" height="23" rx="12" fill="transparent" />
        </a>
        <a href="#planos" aria-label="Ir para os planos">
          <rect x="548" y="1951" width="153" height="34" rx="17" fill="transparent" />
        </a>
      </svg>
    </main>
  );
};

export default BlocoDosMundos;
