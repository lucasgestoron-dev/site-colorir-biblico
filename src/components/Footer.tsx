const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Colorir Bíblico. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Produto digital • Entrega imediata por e-mail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
