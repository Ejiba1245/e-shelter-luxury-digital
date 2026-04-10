import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Chief Adewale Ogunbanjo",
    role: "Homeowner, Lekki",
    text: "Just E-Shelter exceeded every expectation. The attention to detail and quality of craftsmanship in our 6-bedroom mansion is absolutely world-class. They delivered on time and on budget.",
    initials: "AO",
  },
  {
    name: "Mrs. Chioma Eze",
    role: "Property Investor",
    text: "Working with Just E-Shelter on our estate development was seamless. Their professionalism, transparency, and commitment to quality set them apart from every other builder in Lagos.",
    initials: "CE",
  },
  {
    name: "Engr. Tunde Bakare",
    role: "CEO, Apex Holdings",
    text: "From the architectural design to the final handover, Just E-Shelter delivered a commercial space that rivals anything you'd find in Dubai. Truly premium construction.",
    initials: "TB",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.2em] text-gold">Testimonials</span>
          <h2 className="mt-6 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            What Our <span className="text-gradient-gold">Clients</span> Say
          </h2>
          <p className="mt-4 font-body text-base text-secondary-foreground lg:text-lg">
            Trusted by discerning homeowners and investors across Lagos.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-gold/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/5 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
            >
              {/* Quote bg */}
              <Quote className="absolute -top-2 -right-2 text-gold/5" size={80} />
              
              <div className="relative">
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={15} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-sm leading-[1.8] text-secondary-foreground">
                  "{t.text}"
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold font-heading text-sm font-bold text-primary-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-heading text-sm font-bold">{t.name}</div>
                    <div className="font-body text-xs text-muted-foreground">{t.role}</div>
                  </div>
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
