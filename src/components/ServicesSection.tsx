import { Home, Ruler, Building2, Paintbrush, ClipboardCheck, Hammer } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Home,
    title: "Luxury Residential Construction",
    desc: "Premium homes built with the finest materials and unmatched craftsmanship for discerning homeowners.",
  },
  {
    icon: Ruler,
    title: "Bespoke Home Design & Build",
    desc: "Custom architectural designs tailored to your vision, lifestyle, and taste — from concept to keys.",
  },
  {
    icon: Building2,
    title: "Estate Development",
    desc: "Master-planned communities and gated estates that set the standard for modern living in Lagos.",
  },
  {
    icon: Paintbrush,
    title: "Interior Fit-Out & Finishing",
    desc: "Exquisite interior finishes that transform spaces into works of art with premium fixtures and materials.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management & Turnkey",
    desc: "End-to-end project delivery with precision timelines, transparent budgets, and zero compromises.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Breathe new life into existing structures with modern upgrades that elevate both form and function.",
  },
];

const ServicesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="relative bg-secondary/30 py-24 lg:py-32" ref={ref}>
      <div className="ankara-pattern absolute inset-0 opacity-15" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm uppercase tracking-widest text-gold">Our Services</span>
          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Signature <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="mt-4 font-body text-muted-foreground">
            Comprehensive construction and real estate solutions delivered with excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded border border-border bg-card p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
                <service.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
