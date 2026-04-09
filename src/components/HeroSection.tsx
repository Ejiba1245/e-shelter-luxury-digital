import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury modern home at golden hour in Lagos"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/80 via-charcoal-deep/60 to-charcoal-deep/90" />
      </div>

      {/* Ankara pattern overlay */}
      <div className="ankara-pattern absolute inset-0 opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Gold line */}
          <div className="mx-auto mb-8 h-px w-20 bg-gradient-gold opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }} />
          
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight opacity-0 animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Building Tomorrow's{" "}
            <span className="text-gradient-gold">Legacy</span> Today
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-up sm:text-lg md:text-xl" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Premium Homes & Estates | Just E-Shelter Nig Ltd — Ajah, Lagos
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up sm:flex-row" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <a
              href="#projects"
              className="bg-gradient-gold rounded px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              View Our Projects
            </a>
            <a
              href="#contact"
              className="rounded border border-gold/30 px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
