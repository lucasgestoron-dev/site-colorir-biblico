const Footer = () => {
  return (
    <footer className="py-16 bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container">
        <div className="text-center">
          {/* MUDANÇA: Removi o "font-fredoka". Agora a fonte será a padrão, mais séria. */}
          <h3 className="text-white font-bold text-xl mb-4">
            Desenhos Bíblicos para Colorir
          </h3>
          
          <p className="text-sm max-w-sm mx-auto mb-6 opacity-80 leading-relaxed">
            Transformando o tempo em família através da fé e da criatividade.
          </p>

          <div className="w-16 h-1 border-t-2 border-primary/30 mx-auto mb-6"></div>

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
