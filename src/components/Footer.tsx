const Footer = () => {
  return (
    // Mantendo o bg-slate-900 que trouxe o "chão" e o profissionalismo para o site
    <footer className="py-16 bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container">
        <div className="text-center">
          {/* NOME CORRIGIDO AQUI */}
          <h3 className="text-white font-bold text-xl mb-4 font-fredoka">
            Desenhos Bíblicos para Colorir
          </h3>
          
          <p className="text-sm max-w-sm mx-auto mb-6 opacity-80 leading-relaxed">
            Transformando o tempo em família através da fé e da criatividade.
          </p>

          <div className="w-16 h-1 border-t-2 border-primary/30 mx-auto mb-6"></div>

          {/* NOME CORRIGIDO NO COPYRIGHT TAMBÉM */}
          <p className="text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Desenhos Bíblicos para Colorir. Todos os direitos reservados.
          </p>
          
          <p className="text-[10px] mt-4 opacity-50 uppercase tracking-tighter">
            Produto Digital • Entrega via E-mail • Compra 100% Segura
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
