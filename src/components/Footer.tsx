import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

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
            <div className="flex items-center gap-3">
              <img src={logo} alt="Just e-Shelter Construction Limited" className="h-12 w-12 rounded-md object-cover ring-1 ring-gold/30" />
              <div className="leading-tight">
                <div className="font-heading text-base font-extrabold">Just <span className="text-gradient-gold">e-Shelter</span></div>
                <div className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Construction Limited</div>
              </div>
            </div>
            <p className="mt-5 font-body text-sm leading-relaxed text-muted-foreground">
              A Lagos-based construction company building premium residential, estate, and
              commercial developments to international standards.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: MessageCircle, href: "https://wa.me/2348063109568", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                   className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-gold/40 hover:bg-gold/10 hover:text-gold">
                  <Icon size={15} />
                </a>
              ))}
            </div>
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
