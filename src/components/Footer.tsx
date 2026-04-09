const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-gradient-gold font-heading text-lg font-bold tracking-wider">
              JUST E-SHELTER NIG LTD
            </span>
            <p className="mt-1 font-body text-xs text-muted-foreground">
              Premium Construction & Real Estate Development
            </p>
          </div>
          <div className="flex gap-6">
            {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-gold"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Just E-Shelter Nig Ltd. All rights reserved. | Ajah, Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
