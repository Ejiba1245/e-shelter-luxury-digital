import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Luxury Residential",
  "Estate Development",
  "Interior Fit-Out",
  "Project Management",
  "Renovation",
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-gradient-gold font-heading text-xl font-extrabold tracking-wider">
              JUST E-SHELTER
            </span>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              Premium construction and real estate development company delivering exceptional 
              spaces across Lagos, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">Quick Links</h4>
            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">Services</h4>
            <div className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <span key={service} className="font-body text-sm text-muted-foreground">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">Contact</h4>
            <div className="mt-5 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span className="font-body text-sm text-muted-foreground">
                  Plot 8, Road 2, Happy Land Estate, Ajah, Lagos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold" />
                <a href="tel:08063109568" className="font-body text-sm text-muted-foreground transition-colors hover:text-gold">
                  0806 310 9568
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold" />
                <a href="mailto:info@justeshelter.com" className="font-body text-sm text-muted-foreground transition-colors hover:text-gold">
                  info@justeshelter.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Just E-Shelter Nig Ltd. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Premium Construction · Ajah, Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
