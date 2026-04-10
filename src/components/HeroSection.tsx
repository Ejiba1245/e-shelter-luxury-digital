import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury modern home at golden hour in Lagos"
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      {/* Ankara pattern overlay */}
      <div className="ankara-pattern absolute inset-0 opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-5 py-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gold">Premium Real Estate & Luxury Living</span>
          </div>

          <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight opacity-0 animate-fade-up sm:text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Building Tomorrow's{" "}
            <span className="text-gradient-gold">Legacy</span>
            <br className="hidden sm:block" />
            {" "}Today
          </h1>

          <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-secondary-foreground opacity-0 animate-fade-up sm:text-xl" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            We craft exceptional homes and estates with uncompromising quality,
            innovative design, and meticulous attention to detail across Lagos.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up sm:flex-row sm:gap-5" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <a
              href="#projects"
              className="group bg-gradient-gold inline-flex items-center gap-3 rounded-lg px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.02]"
            >
              View Our Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-lg border border-gold/30 bg-gold/5 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:scale-[1.02]"
            >
              <Play size={14} className="fill-gold" />
              Get a Free Quote
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-8 opacity-0 animate-fade-up sm:gap-12" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            {[
              { value: "150+", label: "Projects Built" },
              { value: "12+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl font-bold text-gold sm:text-3xl">{stat.value}</div>
                <div className="mt-1 font-body text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
