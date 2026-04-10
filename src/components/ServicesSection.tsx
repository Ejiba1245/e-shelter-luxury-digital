import { Home, Ruler, Building2, Paintbrush, ClipboardCheck, Hammer } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Home,
    title: "Luxury Residential Construction",
    desc: "Premium homes built with the finest materials and unmatched craftsmanship for discerning homeowners.",
    number: "01",
  },
  {
    icon: Ruler,
    title: "Bespoke Home Design & Build",
    desc: "Custom architectural designs tailored to your vision, lifestyle, and taste — from concept to keys.",
    number: "02",
  },
  {
    icon: Building2,
    title: "Estate Development",
    desc: "Master-planned communities and gated estates that set the standard for modern living in Lagos.",
    number: "03",
  },
  {
    icon: Paintbrush,
    title: "Interior Fit-Out & Finishing",
    desc: "Exquisite interior finishes that transform spaces into works of art with premium fixtures and materials.",
    number: "04",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management & Turnkey",
    desc: "End-to-end project delivery with precision timelines, transparent budgets, and zero compromises.",
    number: "05",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Breathe new life into existing structures with modern upgrades that elevate both form and function.",
    number: "06",
  },
];

const ServicesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="relative bg-card/50 section-padding" ref={ref}>
      <div className="ankara-pattern absolute inset-0 opacity-10" />
      <div className="container relative mx-auto px-4">
        <div className="section-header">
          <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.2em] text-gold">Our Services</span>
          <h2 className="mt-6 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Signature <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="mt-4 font-body text-base text-secondary-foreground lg:text-lg">
            Comprehensive construction and real estate solutions delivered with excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 hover:-translate-y-1 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-heading text-5xl font-extrabold text-border/50 transition-colors duration-500 group-hover:text-gold/10">{service.number}</span>
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-gold/20">
                  <service.icon size={26} />
                </div>
                <h3 className="font-heading text-lg font-bold">{service.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
              
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-gold transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
