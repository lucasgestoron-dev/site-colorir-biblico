import React from 'react';

export function GuaranteeReal() {
  return (
    <section
      id="garantia"
      className="w-[1480px] h-[170px] relative overflow-hidden bg-[#eef7ff] flex items-start justify-center pt-[20px] select-none"
    >
      {/* Main Pill Container */}
      <div className="w-[1380px] h-[110px] bg-white/95 backdrop-blur-md rounded-full px-8 py-3 shadow-[0_8px_24px_rgba(13,43,86,0.06)] border border-sky-100 flex items-center justify-between z-10">
        
        {/* Left: Shield & Title */}
        <div className="flex items-center gap-5">
          {/* Blue Guarantee Shield with 7 */}
          <div className="w-[66px] h-[72px] flex-shrink-0 relative flex items-center justify-center filter drop-shadow-[0_4px_8px_rgba(0,102,255,0.25)]">
            <svg
              viewBox="0 0 100 115"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e88e5" />
                  <stop offset="50%" stopColor="#1565c0" />
                  <stop offset="100%" stopColor="#0d47a1" />
                </linearGradient>
                <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#64b5f6" />
                  <stop offset="100%" stopColor="#1565c0" />
                </linearGradient>
              </defs>
              {/* Outer Shield */}
              <path
                d="M50 3 L92 20 C92 70, 50 110, 50 110 C50 110, 8 70, 8 20 Z"
                fill="url(#shieldGrad)"
                stroke="url(#shieldBorder)"
                strokeWidth="4"
              />
              {/* Inner Shield Accent */}
              <path
                d="M50 10 L85 24 C85 66, 50 101, 50 101 C50 101, 15 66, 15 24 Z"
                fill="none"
                stroke="#90caf9"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              {/* Number 7 */}
              <text
                x="50"
                y="74"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="50"
                fontFamily="Impact, Arial Black, sans-serif"
                fontWeight="900"
                style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))' }}
              >
                7
              </text>
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <h3 className="text-[#0d2b56] font-black text-[22px] leading-tight tracking-tight">
              Garantia de 7 dias
            </h3>
            <span className="text-[#0d2b56] font-extrabold text-[16px] leading-tight">
              Risco zero para você!
            </span>
          </div>
        </div>

        {/* Middle: Description */}
        <p className="text-[#3b587a] font-semibold text-[13.5px] max-w-[480px] leading-snug">
          Se por qualquer motivo você não ficar satisfeito, é só pedir o reembolso em até 7 dias. Sem burocracia.
        </p>

        {/* Right: CTA Button */}
        <a
          href="https://pay.wiapy.com/ORKyP3WCMd"
          className="bg-[#18bd37] hover:bg-[#15a330] text-white font-black text-[13.5px] px-8 py-3.5 rounded-full shadow-[0_4px_0_#108328] tracking-wide transition active:translate-y-[2px] flex items-center gap-2 whitespace-nowrap"
        >
          QUERO GARANTIR AGORA →
        </a>

      </div>
    </section>
  );
}
