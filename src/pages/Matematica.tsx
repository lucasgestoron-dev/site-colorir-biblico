import { useEffect, useState } from "react";
import {
  Award,
  Backpack,
  BarChart3,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Gamepad2,
  Heart,
  Home,
  Laptop,
  LockKeyhole,
  Printer,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import "../matematica.css";

const activityPages = [
  { label: "CONTAGEM", image: "/matematica/atividade-1.webp" },
  { label: "SOMA E SUBTRAÇÃO", image: "/matematica/atividade-2.webp" },
  { label: "PROBLEMAS", image: "/matematica/atividade-3.webp" },
  { label: "SEQUÊNCIAS", image: "/matematica/atividade-4.webp" },
  { label: "MEDIDAS", image: "/matematica/atividade-5.webp" },
  { label: "DESAFIOS LÓGICOS", image: "/matematica/atividade-6.webp" },
];

const audience = [
  { icon: Home, text: "Pais que querem reforço em casa" },
  { icon: Backpack, text: "Crianças que resistem à matemática" },
  { icon: Gamepad2, text: "Crianças que gostam do universo de blocos" },
  { icon: BarChart3, text: "Professores e apoio escolar" },
  { icon: CalendarDays, text: "Férias e momentos livres" },
  { icon: Heart, text: "Famílias que buscam aprendizado leve" },
];

const deliveries = [
  { icon: BookOpen, title: "PDF principal", text: "+ de 150 atividades" },
  { icon: Backpack, title: "Organizado", text: "do 1º ao 5º ano" },
  { icon: Check, title: "Gabarito", text: "completo" },
  { icon: Award, title: "Instruções", text: "de uso" },
  { icon: Laptop, title: "Acesso", text: "imediato" },
  { icon: Printer, title: "Imprima", text: "quando quiser" },
];

const faqs = [
  ["Como recebo o material?", "Após a confirmação da compra, o acesso ao PDF é liberado para download."],
  ["O material é físico?", "Não. É um arquivo digital em PDF, pronto para você imprimir em casa ou na gráfica."],
  ["Posso imprimir quantas vezes quiser?", "Sim. Você pode imprimir novamente sempre que precisar para uso pessoal."],
  ["Como funciona a garantia?", "Você tem 7 dias para conhecer o material e solicitar o reembolso, caso não seja o que esperava."],
  ["Serve para qual idade?", "As atividades são organizadas do 1º ao 5º ano, com progressão de dificuldade."],
  ["E se eu tiver dúvidas?", "Você poderá entrar em contato pelo canal de suporte informado após a compra."],
];

const essentialCheckout = import.meta.env.VITE_MATH_ESSENTIAL_CHECKOUT || "#planos";
const completeCheckout = import.meta.env.VITE_MATH_COMPLETE_CHECKOUT || "#planos";

function CubeLogo() {
  return (
    <div className="math-logo" aria-label="Mundo dos Blocos">
      <span className="math-logo-cube"><span>+</span></span>
      <span><small>MISSÕES MATEMÁTICAS</small><strong>MUNDO DOS BLOCOS</strong></span>
    </div>
  );
}

function PrimaryButton({ children, href = "#planos", small = false }: { children: React.ReactNode; href?: string; small?: boolean }) {
  return <a className={`math-button${small ? " math-button-small" : ""}`} href={href}>{children}<span>→</span></a>;
}

function ProductBook({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-book${compact ? " compact" : ""}`}>
      <div className="book-spine" />
      <div className="book-cover">
        <span className="book-kicker">MISSÕES MATEMÁTICAS</span>
        <strong>MUNDO DOS<br />BLOCOS</strong>
        <small>+ DE 150 ATIVIDADES</small>
        <div className="book-scene">
          <img src="/matematica/chest.webp" alt="" />
          <img src="/matematica/crystal.webp" alt="" />
          <img src="/matematica/grass.webp" alt="" />
        </div>
        <span className="book-years">DO 1º AO 5º ANO</span>
      </div>
    </div>
  );
}

function Mathematics() {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const visible = Array.from({ length: 6 }, (_, index) => activityPages[(slide + index) % activityPages.length]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Missões Matemáticas | Mundo dos Blocos";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="math-page">
      <header className="math-header">
        <div className="math-container math-header-inner">
          <CubeLogo />
          <nav aria-label="Navegação da página">
            <a href="#inicio">Início</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#receber">O que vai receber</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#duvidas">Perguntas frequentes</a>
          </nav>
          <PrimaryButton small>QUERO GARANTIR AGORA</PrimaryButton>
        </div>
      </header>

      <main>
        <section className="math-hero" id="inicio">
          <img className="math-hero-bg" src="/matematica/hero-mundo-blocos.webp" alt="Cenário de aventura no mundo dos blocos" />
          <div className="math-hero-shade" />
          <div className="math-container math-hero-content">
            <div className="hero-copy">
              <span className="hero-kicker">• MISSÕES MATEMÁTICAS •</span>
              <h1>MUNDO DOS<br /><span>BLOCOS</span></h1>
              <p className="hero-offer">Mais de 150 atividades de matemática<br />para o 1º ao 5º ano</p>
              <p className="hero-subtitle">Aprender matemática pode ser uma grande aventura!</p>
              <div className="hero-facts">
                <div><Sparkles /><strong>+150</strong><span>atividades</span></div>
                <div><Award /><strong>1º ao 5º</strong><span>ano</span></div>
                <div><Download /><strong>PDF</strong><span>para imprimir</span></div>
                <div><Gamepad2 /><strong>Sem tédio</strong><span>e sem complicação</span></div>
              </div>
              <PrimaryButton>QUERO GARANTIR AGORA</PrimaryButton>
              <div className="hero-trust"><span><LockKeyhole />Compra segura</span><span><Download />Acesso imediato</span><span><ShieldCheck />7 dias de garantia</span></div>
            </div>
            <div className="hero-product" aria-hidden="true">
              <div className="paper-fan">
                <img src="/matematica/atividade-1.png" alt="" />
                <img src="/matematica/atividade-2.png" alt="" />
                <img src="/matematica/atividade-3.png" alt="" />
              </div>
              <ProductBook />
            </div>
            <div className="hero-sign">DESAFIOS REAIS<br /><strong>APRENDIZADO DE VERDADE</strong><br />DIVERSÃO GARANTIDA!</div>
          </div>
        </section>

        <section className="inside-section math-section" id="atividades">
          <div className="math-container">
            <div className="section-heading">
              <h2>Veja como são as atividades por dentro</h2>
              <p>Páginas reais do material. Atividades criativas, com o universo de blocos que as crianças adoram.</p>
            </div>
            <div className="activity-carousel">
              <button onClick={() => setSlide((slide + activityPages.length - 1) % activityPages.length)} aria-label="Atividades anteriores"><ChevronLeft /></button>
              <div className="activity-grid">
                {visible.map((page, index) => (
                  <article className="activity-preview" key={`${page.label}-${index}`}>
                    <span>{page.label}</span>
                    <img src={page.image} alt={`Exemplo de atividade de ${page.label.toLowerCase()}`} />
                  </article>
                ))}
              </div>
              <button onClick={() => setSlide((slide + 1) % activityPages.length)} aria-label="Próximas atividades"><ChevronRight /></button>
            </div>
          </div>
        </section>

        <section className="how-section" id="como-funciona">
          <div className="how-photo">
            <img src="/matematica/crianca-atividades.webp" alt="Criança fazendo as atividades de matemática" />
            <span>Ele aprende<br />se divertindo!</span>
          </div>
          <div className="how-content">
            <div className="how-title-row">
              <h2>Simples de baixar,<br />imprimir e transformar<br />a rotina de estudos</h2>
              <div className="speech-note">APRENDER TAMBÉM É<br /><strong>CONSTRUIR GRANDES SONHOS!</strong></div>
            </div>
            <div className="steps-grid">
              {[
                ["Baixe o PDF", "e tenha acesso imediato"],
                ["Imprima", "quando quiser, quantas vezes quiser"],
                ["Entregue", "para a criança e acompanhe"],
                ["Veja a matemática", "se tornar uma experiência positiva"],
              ].map(([title, text], index) => <div className="step" key={title}><b>{index + 1}</b><strong>{title}</strong><span>{text}</span></div>)}
            </div>
          </div>
        </section>

        <section className="audience-section math-section">
          <div className="math-container">
            <div className="section-heading"><h2>Esse material é ideal para:</h2></div>
            <div className="audience-grid">
              {audience.map(({ icon: Icon, text }) => <div className="audience-card" key={text}><Icon /><strong>{text}</strong></div>)}
            </div>
          </div>
        </section>

        <section className="benefit-band">
          <div className="math-container benefit-inner">
            <h2>Mais do que atividades, é uma nova forma de se relacionar com a matemática.</h2>
            <ul>
              {[
                "Aumenta o interesse da criança",
                "Desenvolve raciocínio lógico",
                "Trabalha diversas habilidades",
                "Atividades ilustradas e envolventes",
                "Pronto para imprimir e usar",
                "Organizado por ano escolar",
              ].map((item) => <li key={item}><Check />{item}</li>)}
            </ul>
            <div className="benefit-art"><img src="/matematica/crystal.webp" alt="Cristal em blocos" /><span>PEQUENOS<br />DESAFIOS,<br /><strong>GRANDES<br />CONQUISTAS!</strong></span></div>
          </div>
        </section>

        <section className="testimonials-section math-section" id="depoimentos">
          <div className="math-container">
            <div className="section-heading"><h2>O que as mães estão dizendo</h2><p>Mensagens de quem já está usando o material.</p></div>
            <div className="messages-grid">
              {[
                ["Fernanda", "Meu filho amou! Ele que sempre reclamava de matemática, agora pede para fazer as atividades do Mundo dos Blocos. 😍", "10:34"],
                ["Camila", "Estou usando nas férias e está sendo perfeito. As atividades são lindas e bem pensadas. Dá pra ver que foi feito com muito carinho. 💙", "14:51"],
                ["Juliana", "Comprei e já imprimi. Ele fez sem reclamar e ainda pediu mais! Vale muito a pena!", "19:31"],
              ].map(([name, text, time], index) => (
                <article className="message-card" key={name}>
                  <div className={`message-avatar avatar-${index + 1}`}>{name[0]}</div>
                  <div><strong>{name}<span>✓✓</span></strong><p>{text}</p><small>{time}</small></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="delivery-section math-section" id="receber">
          <div className="math-container">
            <div className="section-heading"><h2>Tudo o que você vai receber</h2><p>Material completo, organizado e pronto para usar.</p></div>
            <div className="delivery-grid">
              {deliveries.map(({ icon: Icon, title, text }) => <div className="delivery-card" key={title}><Icon /><strong>{title}</strong><span>{text}</span></div>)}
            </div>
          </div>
        </section>

        <section className="bonus-section math-section">
          <div className="math-container">
            <div className="section-heading"><h2>E não para por aí... <span>(Plano Completo)</span></h2><p>Além do material principal, você também recebe:</p></div>
            <div className="bonus-grid">
              {[
                ["Caderno de Tabuada Ilustrada", "atividade-1.webp"],
                ["Probleminhas Extras", "atividade-2.webp"],
                ["Mapa de Progresso", "atividade-3.webp"],
                ["Cartões de Recompensas", "atividade-4.webp"],
                ["Certificado de Conquistas", "atividade-5.webp"],
                ["Guia para Responsáveis", "atividade-6.webp"],
              ].map(([title, image]) => <div className="bonus-card" key={title}><img src={`/matematica/${image}`} alt="" /><strong>{title}</strong></div>)}
            </div>
          </div>
        </section>

        <section className="pricing-section math-section" id="planos">
          <div className="math-container">
            <div className="section-heading"><h2>Escolha a melhor opção para você</h2><p>Ambos os planos dão acesso ao material principal. O plano completo inclui os extras exclusivos.</p></div>
            <div className="pricing-layout">
              <div className="pricing-side-note">INVESTIR<br />NA EDUCAÇÃO<br />HOJE, CONSTRÓI<br />UM FUTURO<br /><strong>EXTRAORDINÁRIO!</strong></div>
              <div className="price-card essential">
                <span className="plan-name">PLANO ESSENCIAL</span>
                <div className="price-product"><ProductBook compact /></div>
                <ul><li><Check />+ de 150 atividades</li><li><Check />Organizado do 1º ao 5º ano</li><li><Check />Gabarito completo</li><li><Check />Instruções de uso</li><li><Check />Acesso imediato</li></ul>
                <span className="price">R$ <strong>17,90</strong></span>
                <a href={essentialCheckout} className="math-button price-button">QUERO O PLANO ESSENCIAL</a>
              </div>
              <div className="price-card complete">
                <span className="popular">Mais escolhido</span>
                <span className="plan-name">PLANO COMPLETO</span>
                <div className="price-product"><ProductBook compact /></div>
                <ul><li><Check />Tudo do Plano Essencial</li><li><Check />Caderno de Tabuada</li><li><Check />Probleminhas Extras</li><li><Check />Mapa de Progresso</li><li><Check />Cartões de Recompensas</li><li><Check />Certificado de Conquistas</li><li><Check />Guia para Responsáveis</li></ul>
                <span className="price">R$ <strong>27,90</strong></span>
                <a href={completeCheckout} className="math-button price-button">QUERO O PLANO COMPLETO</a>
              </div>
              <div className="pricing-trust"><span><LockKeyhole />Compra segura</span><span><Download />Acesso imediato</span><span><ShieldCheck />7 dias de garantia</span></div>
            </div>
          </div>
        </section>

        <section className="faq-section math-section" id="duvidas">
          <div className="math-container">
            <div className="section-heading"><h2>Perguntas frequentes</h2></div>
            <div className="faq-layout">
              <div className="faq-grid">
                {faqs.map(([question, answer], index) => (
                  <button className={`faq-item${openFaq === index ? " open" : ""}`} key={question} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{question}<ChevronDown /></span><p>{answer}</p>
                  </button>
                ))}
              </div>
              <div className="faq-character"><div className="pixel-head">?</div><span>AINDA COM<br />DÚVIDAS? ESTAMOS<br /><strong>AQUI PARA AJUDAR!</strong></span></div>
            </div>
          </div>
        </section>

        <section className="guarantee-section">
          <div className="math-container guarantee-inner">
            <div className="guarantee-shield"><ShieldCheck /><strong>7</strong></div>
            <div><h2>Garantia de 7 dias<br />Risco zero para você!</h2><p>Se por qualquer motivo você não ficar satisfeito, é só pedir o reembolso em até 7 dias. Sem burocracia.</p></div>
            <PrimaryButton>QUERO GARANTIR AGORA</PrimaryButton>
          </div>
        </section>
      </main>

      <footer className="math-footer">
        <div className="math-container footer-inner">
          <CubeLogo />
          <p><strong>Missões Matemáticas Mundo dos Blocos</strong><br />Aprender hoje. Construir um futuro incrível amanhã.</p>
          <div><a href="#">Política de Privacidade</a><a href="#">Termos de Uso</a><a href="#">Suporte</a><small>© 2026 Mundo dos Blocos. Todos os direitos reservados.</small></div>
        </div>
      </footer>
    </div>
  );
}

export default Mathematics;