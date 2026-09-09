const Header = () => {
  return (
    <header className="py-4 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-border/60">
      <div className="container flex items-center justify-between gap-4">
        <a href="#top" className="text-xl md:text-2xl font-bold text-primary" aria-label="Voltar ao início">
          ✨ Colorir Bíblico
        </a>
        <a
          href="#samples"
          className="text-sm md:text-base font-bold text-slate-700 hover:text-primary transition-colors"
        >
          Ver o material
        </a>
      </div>
    </header>
  );
};

export default Header;
