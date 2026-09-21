import { MissingAsset } from './MissingAsset';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo will be replaced by the asset later, or a simple placeholder */}
          <MissingAsset name="hero-logo-mundo-blocos.png" className="w-12 h-12" />
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-fredoka font-semibold text-slate-800">
          <a href="#" className="text-yellow-600">Início</a>
          <a href="#como">Como funciona</a>
          <a href="#receber">O que vai receber</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">Perguntas frequentes</a>
        </nav>
        <a href="#planos" className="bg-green-600 text-white px-6 py-2 rounded-full font-fredoka font-semibold shadow-[0_4px_0_#15803d]">
          QUERO GARANTIR AGORA →
        </a>
      </div>
    </header>
  );
}
