const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container text-center">
        <h2 className="text-white font-bold text-xl mb-3">Colorir Bíblico</h2>
        <p className="text-sm max-w-md mx-auto mb-6 text-slate-400">
          30 desenhos bíblicos em PDF para imprimir e colorir com as crianças.
        </p>
        <p className="text-xs font-medium uppercase tracking-wider">
          © {new Date().getFullYear()} Desenhos Infantis. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-3 text-slate-500">Produto digital • Nenhum item físico será enviado</p>
      </div>
    </footer>
  );
};

export default Footer;
