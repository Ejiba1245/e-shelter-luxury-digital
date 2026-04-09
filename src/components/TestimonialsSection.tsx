import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Chief Adewale Ogunbanjo",
    role: "Homeowner, Lekki",
    text: "Just E-Shelter exceeded every expectation. The attention to detail and quality of craftsmanship in our 6-bedroom mansion is absolutely world-class. They delivered on time and on budget.",
  },
  {
    name: "Mrs. Chioma Eze",
    role: "Property Investor",
    text: "Working with Just E-Shelter on our estate development was seamless. Their professionalism, transparency, and commitment to quality set them apart from every other builder in Lagos.",
  },
  {
    name: "Engr. Tunde Bakare",
    role: "CEO, Apex Holdings",
    text: "From the architectural design to the final handover, Just E-Shelter delivered a commercial space that rivals anything you'd find in Dubai. Truly premium construction.",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="testimonials" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm uppercase tracking-widest text-gold">Testimonials</span>
          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Our <span className="text-gradient-gold">Clients</span> Say
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative rounded border border-border bg-card p-8 transition-all duration-500 hover:border-gold/30 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
            >
              <Quote className="mb-4 text-gold/20" size={32} />
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm leading-relaxed text-secondary-foreground">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold font-heading text-sm font-bold text-primary-foreground">
                  {t.name.split(" ").slice(-1)[0][0]}
                </div>
                <div>
                  <div className="font-heading text-sm font-semibold">{t.name}</div>
                  <div className="font-body text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
