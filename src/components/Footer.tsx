const Footer = () => {
  return (
    // MUDANÇA: bg-card alterado para bg-orange-50 e border-border para border-orange-100
    // MUDANÇA: py-8 aumentado para py-12 para dar um acabamento mais premium e menos "apertado"
    <footer className="py-12 bg-orange-50 border-t border-orange-100">
      <div className="container">
        <div className="text-center">
          <p className="text-muted-foreground text-sm font-medium">
            © {new Date().getFullYear()} Colorir Bíblico. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2 italic">
            Produto digital • Entrega imediata por e-mail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
