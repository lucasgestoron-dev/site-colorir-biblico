import { MissingAsset } from './MissingAsset';

export function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 top-auto h-32 opacity-20 pointer-events-none">
        <MissingAsset name="footer-scenery.png" className="w-full h-full" />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <MissingAsset name="hero-logo-mundo-blocos.png" className="w-16 h-16" />
          <div>
            <strong className="block text-xl font-fredoka text-sky-900">MUNDO DOS BLOCOS</strong>
            <span className="text-xs text-slate-500">Aprender hoje. Construir um futuro incrível amanhã.</span>
          </div>
        </div>

        <div className="text-right text-xs text-slate-500">
          <div className="flex gap-4 justify-end mb-2 font-semibold">
            <a href="#" className="hover:text-sky-900">Política de Privacidade</a>
            <a href="#" className="hover:text-sky-900">Termos de Uso</a>
            <a href="#" className="hover:text-sky-900">Suporte</a>
          </div>
          <p>© 2026 Mundo dos Blocos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
