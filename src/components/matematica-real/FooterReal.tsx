import React from 'react';

export function FooterReal() {
  return (
    <footer
      className="w-[1480px] h-[146px] relative overflow-hidden select-none flex flex-col justify-center"
      style={{
        backgroundImage: 'url(/matematica/assets/hero/hero-bg.jpg)',
        backgroundPosition: 'center 82%',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Seamless fade from the Guarantee background into the footer artwork */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef7ff] via-[#eef7ff]/78 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[42px] bg-gradient-to-b from-[#eef7ff] via-[#eef7ff]/92 to-transparent pointer-events-none" />

      {/* Main Content Container */}
      <div className="w-[1380px] mx-auto flex items-center justify-between z-10 px-4">
        
        {/* Left: Brand Logo & Slogan */}
        <div className="flex items-center gap-4">
          <img
            src="/matematica/assets/hero/hero-brand-logo.png"
            alt="Mundo dos Blocos"
            className="h-[46px] w-auto object-contain drop-shadow-sm"
          />
          <div className="flex flex-col justify-center">
            <span className="text-[#0d2b56] font-black text-[14.5px] leading-tight tracking-tight">
              Missões Matemáticas no Mundo dos Blocos
            </span>
            <span className="text-[#3b5b82] font-bold text-[12px] leading-tight mt-0.5">
              Aprender hoje. Construir um futuro incrível amanhã.
            </span>
          </div>
        </div>

        {/* Right: Legal Links & Copyright */}
        <div className="flex flex-col items-end justify-center">
          {/* Legal Links */}
          <div className="flex items-center gap-2 text-[#0d2b56] font-extrabold text-[12.5px]">
            {/* TODO: Substituir href="#" pela rota real de Política de Privacidade quando criada */}
            <a href="#" className="hover:underline transition-colors">
              Política de Privacidade
            </a>
            <span className="text-[#7292b3] font-normal">|</span>
            {/* TODO: Substituir href="#" pela rota real de Termos de Uso quando criada */}
            <a href="#" className="hover:underline transition-colors">
              Termos de Uso
            </a>
            <span className="text-[#7292b3] font-normal">|</span>
            {/* TODO: Substituir href="#" pelo link ou modal real de Suporte quando disponível */}
            <a href="#" className="hover:underline transition-colors">
              Suporte
            </a>
          </div>

          {/* Copyright Notice */}
          <p className="text-[#48688e] font-bold text-[11px] mt-1 tracking-tight">
            © 2026 Mundo dos Blocos. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
