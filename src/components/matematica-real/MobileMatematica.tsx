import React, { useState } from "react";

const activityCards = [
  ["CONTAGEM", "/matematica/atividade-1.webp", "Atividade de Contagem"],
  ["SOMA E SUBTRAÇÃO", "/matematica/atividade-2.webp", "Atividade de Soma e Subtração"],
  ["PROBLEMAS", "/matematica/atividade-3.webp", "Atividade de Problemas"],
  ["FRAÇÕES", "/matematica/atividade-4.webp", "Atividade de Frações"],
  ["MEDIDAS", "/matematica/atividade-5.webp", "Atividade de Medidas"],
  ["DESAFIOS LÓGICOS", "/matematica/atividade-6.webp", "Atividade de Desafios Lógicos"],
];

const audienceCards = [
  ["audience-home.png", "Pais que querem", "reforço em casa"],
  ["audience-backpack.png", "Crianças que", "resistem à matemática"],
  ["audience-controller.png", "Crianças que gostam", "do universo de blocos"],
  ["audience-chart.png", "Professores e", "apoio escolar"],
  ["audience-calendar.png", "Férias e", "momentos livres"],
  ["audience-heart.png", "Famílias que buscam", "aprendizado leve e significativo"],
];

const includedCards = [
  ["included-pdf-icon.png", "PDF principal", "+ de 150 atividades"],
  ["included-organized-icon.png", "Organizado do", "1º ao 5º ano"],
  ["included-answer-key-icon.png", "Gabarito completo", ""],
  ["included-instructions-icon.png", "Instruções de uso", ""],
  ["included-access-icon.png", "Acesso imediato", ""],
  ["included-print-icon.png", "Para imprimir", "quando quiser"],
];

const bonusCards = [
  ["bonus-tabuada-cover.png", "Caderno de", "Tabuada Ilustrado"],
  ["bonus-probleminhas-cover.png", "Probleminhas", "Extras"],
  ["bonus-progresso-cover.png", "Mapa de", "Progresso"],
  ["bonus-recompensas-cover.png", "Cartões de", "Recompensas"],
  ["bonus-certificado-cover.png", "Certificado de", "Conquistas"],
  ["bonus-guia-cover.png", "Guia para", "Responsáveis"],
];

const faqs = [
  ["Como recebo o material?", "Após a confirmação do pagamento, você recebe acesso ao material digital para baixar."],
  ["Posso imprimir quantas vezes quiser?", "Sim. Depois de baixar o material, você pode imprimir novamente sempre que precisar para uso pessoal."],
  ["Serve para qual idade?", "O material foi organizado para crianças do 1º ao 5º ano, respeitando diferentes níveis de aprendizagem."],
  ["O material é físico?", "Não. O produto é digital e entregue em formato PDF para baixar e imprimir."],
  ["Como funciona a garantia?", "Você tem 7 dias de garantia. Se decidir que o material não é para você, pode solicitar o reembolso dentro desse prazo."],
  ["E se eu tiver dúvidas?", "Você pode entrar em contato pelo canal de suporte informado após a compra."],
];

const essentialItems = [
  "+ de 150 atividades",
  "Organizado do 1º ao 5º ano",
  "Gabarito completo",
  "Instruções de uso",
  "Acesso imediato",
];

const completeItems = [
  "Tudo do Plano Essencial",
  "Caderno de Tabuada",
  "Probleminhas Extras",
  "Mapa de Progresso",
  "Cartões de Recompensas",
  "Certificado de Conquistas",
  "Guia para Responsáveis",
];

const MobileSectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mm-section-title">{children}</h2>
);

export function MobileMatematica() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="mm-page">
      <section className="mm-hero">
        <header className="mm-header">
          <img src="/matematica/assets/hero/hero-brand-logo.png" alt="Mundo dos Blocos" />
          <a href="#mobile-planos">QUERO GARANTIR →</a>
        </header>

        <div className="mm-hero-copy">
          <div className="mm-kicker">• MISSÕES MATEMÁTICAS •</div>
          <img className="mm-title-image" src="/matematica/assets/hero/hero-title-mundo-dos-blocos.png" alt="Mundo dos Blocos" />
          <div className="mm-offer">Mais de 150 atividades de matemática<br />para o 1º ao 5º ano</div>
          <p>Aprender matemática pode ser uma grande aventura!</p>
        </div>

        <div className="mm-product-stage">
          <img className="mm-product" src="/matematica/assets/hero/hero-composition.png" alt="Livro e atividades Mundo dos Blocos" />
          <img className="mm-note" src="/matematica/assets/hero/hero-note.png" alt="Desafios reais, aprendizado de verdade, diversão garantida" />
        </div>

        <div className="mm-hero-facts">
          <div><span>📝</span><strong>+150<br />atividades</strong></div>
          <div><span>📦</span><strong>1º ao 5º<br />ano</strong></div>
          <div><span>🖨️</span><strong>PDF para<br />imprimir</strong></div>
          <div><span>⏱️</span><strong>Sem telas e sem<br />complicação</strong></div>
        </div>

        <a className="mm-primary-button" href="#mobile-planos">QUERO GARANTIR AGORA →</a>
        <div className="mm-trust-row"><span>🔒 Compra segura</span><span>⚡ Acesso imediato</span><span>ⓘ 7 dias de garantia</span></div>
      </section>

      <section className="mm-activities">
        <MobileSectionTitle>Veja como são as atividades por dentro</MobileSectionTitle>
        <p className="mm-section-subtitle">Páginas reais do material. Atividades criativas, com o universo de blocos que as crianças adoram.</p>
        <div className="mm-activity-track" aria-label="Exemplos de atividades">
          {activityCards.map(([tag, src, alt]) => (
            <article className="mm-activity-card" key={tag}>
              <span>{tag}</span>
              <img src={src} alt={alt} loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section id="mobile-como" className="mm-how">
        <div className="mm-how-photo" role="img" aria-label="Criança realizando as atividades Mundo dos Blocos" />
        <div className="mm-how-content">
          <MobileSectionTitle>Simples de baixar, imprimir e transformar a rotina de estudos</MobileSectionTitle>
          <div className="mm-step-grid">
            <article><b>1</b><img src="/matematica/assets/included/included-pdf-icon.png" alt="" /><strong>Baixe o PDF</strong><span>e tenha acesso imediato</span></article>
            <article><b>2</b><img src="/matematica/assets/included/included-print-icon.png" alt="" /><strong>Imprima</strong><span>quando quiser, quantas vezes quiser</span></article>
            <article><b>3</b><img src="/matematica/assets/pricing/pricing-left-character.png" alt="" /><strong>Entregue</strong><span>para a criança e acompanhe</span></article>
            <article><b>4</b><img src="/matematica/assets/audience/audience-chart.png" alt="" /><strong>Veja a matemática</strong><span>se tornar uma experiência positiva</span></article>
          </div>
        </div>
      </section>

      <section className="mm-audience">
        <MobileSectionTitle>Esse material é ideal para:</MobileSectionTitle>
        <div className="mm-two-column-grid">
          {audienceCards.map(([icon, line1, line2]) => (
            <article className="mm-small-card" key={icon}>
              <img src={`/matematica/assets/audience/${icon}`} alt="" loading="lazy" />
              <strong>{line1}<br />{line2}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="mm-benefits">
        <MobileSectionTitle>Mais do que atividades, é uma nova forma de se relacionar com a matemática.</MobileSectionTitle>
        <ul>
          {["Aumenta o interesse da criança", "Desenvolve raciocínio lógico", "Trabalha diversas habilidades", "Atividades ilustradas e envolventes", "Pronto para imprimir e usar", "Organizado por ano escolar"].map(item => <li key={item}><i>✓</i>{item}</li>)}
        </ul>
        <div className="mm-benefit-art">
          <img src="/matematica/assets/benefits/benefits-character-reference.png" alt="Personagem Mundo dos Blocos" loading="lazy" />
          <img src="/matematica/assets/benefits/benefits-slogan-reference.png" alt="Pequenos desafios, grandes conquistas!" loading="lazy" />
        </div>
      </section>

      <section id="mobile-receber" className="mm-included">
        <MobileSectionTitle>Tudo o que você vai receber</MobileSectionTitle>
        <p className="mm-section-subtitle">Material completo, organizado e pronto para usar.</p>
        <div className="mm-two-column-grid">
          {includedCards.map(([icon, title, subtitle]) => (
            <article className="mm-small-card" key={icon}>
              <img src={`/matematica/assets/included/${icon}`} alt="" loading="lazy" />
              <strong>{title}</strong>{subtitle && <span>{subtitle}</span>}
            </article>
          ))}
        </div>
      </section>

      <section className="mm-bonuses">
        <MobileSectionTitle>E não para por aí... <em>(Plano Completo)</em></MobileSectionTitle>
        <p className="mm-section-subtitle">Além do material principal, você também recebe:</p>
        <div className="mm-two-column-grid">
          {bonusCards.map(([icon, line1, line2]) => (
            <article className="mm-bonus-card" key={icon}>
              <img src={`/matematica/assets/bonuses/${icon}`} alt={`${line1} ${line2}`} loading="lazy" />
              <strong>{line1}<br />{line2}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="mobile-planos" className="mm-pricing">
        <MobileSectionTitle>Escolha a melhor opção para você</MobileSectionTitle>
        <p className="mm-section-subtitle">Ambos os planos dão acesso ao material principal. O plano completo inclui os extras exclusivos.</p>
        <div className="mm-pricing-message">INVESTIR NA EDUCAÇÃO<br />HOJE, CONSTRÓI<br />UM FUTURO<br />EXTRAORDINÁRIO!</div>
        <img className="mm-pricing-character" src="/matematica/assets/pricing/pricing-left-character.png" alt="Personagem Mundo dos Blocos" loading="lazy" />

        <article className="mm-plan-card mm-plan-essential">
          <h3>PLANO ESSENCIAL</h3>
          <div className="mm-plan-content">
            <img src="/matematica/assets/pricing/pricing-essential-cover.png" alt="Plano Essencial" />
            <ul>{essentialItems.map(item => <li key={item}><i>✓</i>{item}</li>)}</ul>
          </div>
          <div className="mm-price">R$ 17,90</div>
          <a href="https://pay.wiapy.com/uP3mnvnQ-x">QUERO O PLANO ESSENCIAL</a>
        </article>

        <article className="mm-plan-card mm-plan-complete">
          <div className="mm-popular">MAIS ESCOLHIDO</div>
          <h3>PLANO COMPLETO</h3>
          <div className="mm-plan-content">
            <img src="/matematica/assets/pricing/pricing-complete-cover.png" alt="Plano Completo" />
            <ul>{completeItems.map(item => <li key={item}><i>✓</i>{item}</li>)}</ul>
          </div>
          <div className="mm-price">R$ 27,90</div>
          <a href="https://pay.wiapy.com/ORKyP3WCMd">QUERO O PLANO COMPLETO</a>
        </article>

        <div className="mm-pricing-trust">
          {[["pricing-secure-icon.png", "Compra segura"], ["pricing-access-icon.png", "Acesso imediato"], ["pricing-guarantee-icon.png", "7 dias de garantia"]].map(([icon, label]) => (
            <div key={icon}><img src={`/matematica/assets/pricing/${icon}`} alt="" /><strong>{label}</strong></div>
          ))}
        </div>
      </section>

      <section id="mobile-faq" className="mm-faq">
        <MobileSectionTitle>Perguntas frequentes</MobileSectionTitle>
        <div className="mm-faq-list">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFaq === index;
            return (
              <article className={isOpen ? "open" : ""} key={question}>
                <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                  <span>{question}</span><b>⌄</b>
                </button>
                {isOpen && <p>{answer}</p>}
              </article>
            );
          })}
        </div>
        <div className="mm-faq-character">
          <span>AINDA COM DÚVIDAS?<br />ESTAMOS AQUI PARA AJUDAR!</span>
          <img src="/matematica/assets/pricing/pricing-left-character.png" alt="Personagem com dúvidas" loading="lazy" />
        </div>
      </section>

      <section className="mm-guarantee">
        <div className="mm-shield">7</div>
        <h3>Garantia de 7 dias</h3>
        <strong>Risco zero para você!</strong>
        <p>Se por qualquer motivo você não ficar satisfeito, é só pedir o reembolso em até 7 dias. Sem burocracia.</p>
        <a href="https://pay.wiapy.com/ORKyP3WCMd">QUERO GARANTIR AGORA →</a>
      </section>

      <footer className="mm-footer">
        <img src="/matematica/assets/hero/hero-brand-logo.png" alt="Mundo dos Blocos" />
        <strong>Missões Matemáticas no Mundo dos Blocos</strong>
        <span>Aprender hoje. Construir um futuro incrível amanhã.</span>
        <nav><a href="#">Política de Privacidade</a><a href="#">Termos de Uso</a><a href="#">Suporte</a></nav>
        <small>© 2026 Mundo dos Blocos. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}
