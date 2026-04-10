import { useInView } from "@/hooks/useInView";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="relative overflow-hidden section-padding" ref={ref}>
      <div className="ankara-pattern absolute inset-0 opacity-20" />
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
      
      <div className={`container relative mx-auto px-4 ${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
        <div className="mx-auto max-w-4xl rounded-2xl border border-gold/20 bg-card p-12 text-center sm:p-16 lg:p-20">
          <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.2em] text-gold">Start Your Project</span>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Ready to Build Your{" "}
            <span className="text-gradient-gold">Dream Home?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-secondary-foreground lg:text-lg">
            Let's bring your vision to life. Schedule a free consultation with our team 
            and take the first step towards your dream property.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="#contact"
              className="group bg-gradient-gold inline-flex items-center gap-3 rounded-lg px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.02]"
            >
              Schedule Consultation
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:08063109568"
              className="group inline-flex items-center gap-3 rounded-lg border border-gold/30 bg-gold/5 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:scale-[1.02]"
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
