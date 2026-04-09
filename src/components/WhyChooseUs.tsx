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
    <section className="relative bg-secondary/30 py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm uppercase tracking-widest text-gold">Why Us</span>
          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-gradient-gold">Just E-Shelter</span>
          </h2>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`flex w-full flex-col items-center text-center sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/20 bg-gold/5 text-gold">
                <r.icon size={28} />
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold">{r.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
