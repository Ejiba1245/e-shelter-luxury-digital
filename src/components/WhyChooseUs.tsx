import { Shield, Clock, Users, Heart, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reasons = [
  { icon: Award, title: "Premium Materials", desc: "Only the finest local and imported materials for lasting quality." },
  { icon: Clock, title: "Timely Delivery", desc: "Rigorous project management ensures on-time handover, every time." },
  { icon: Users, title: "Expert Team", desc: "Seasoned architects, engineers, and craftsmen with decades of experience." },
  { icon: Heart, title: "Client-Centric", desc: "Your vision drives every decision from design through to completion." },
  { icon: Shield, title: "Quality Assurance", desc: "Multi-stage inspections and certifications at every construction phase." },
];

const WhyChooseUs = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-card/50 section-padding" ref={ref}>
      <div className="ankara-pattern absolute inset-0 opacity-10" />
      <div className="container relative mx-auto px-4">
        <div className="section-header">
          <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.2em] text-gold">Why Us</span>
          <h2 className="mt-6 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-gradient-gold">Just E-Shelter</span>
          </h2>
          <p className="mt-4 font-body text-base text-secondary-foreground lg:text-lg">
            Trusted by clients across Lagos for premium construction excellence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-gold/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/5 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-gold/20">
                <r.icon size={28} />
              </div>
              <h3 className="mt-5 font-heading text-base font-bold">{r.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
