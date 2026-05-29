import aboutBg from "@/assets/team-builder.jpeg";
import aboutSecondary from "@/assets/proj-estate-finished.jpeg";
import { useInView } from "@/hooks/useInView";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team Members" },
];

const highlights = [
  "Premium imported & local materials",
  "Award-winning architectural designs",
  "Transparent pricing & timelines",
  "Full turnkey project delivery",
];

const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative overflow-hidden section-padding" ref={ref}>
      <div className="ankara-pattern absolute inset-0 opacity-15" />
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <div className={`relative ${isInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={aboutBg}
                alt="Just e-Shelter builder on site in Lagos"
                className="h-[450px] w-full object-cover object-top lg:h-[560px]"
                loading="lazy"
                width={1920}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            </div>
            {/* Inset secondary image */}
            <div className="absolute -bottom-10 -left-6 hidden h-48 w-56 overflow-hidden rounded-xl border-4 border-background shadow-2xl sm:block">
              <img src={aboutSecondary} alt="Completed Just e-Shelter estate" className="h-full w-full object-cover" loading="lazy" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-xl border border-gold/20 bg-card p-6 shadow-2xl sm:right-6">
              <div className="text-center">
                <div className="font-heading text-4xl font-extrabold text-gold">12+</div>
                <div className="mt-1 font-body text-xs uppercase tracking-widest text-muted-foreground">Years of<br />Excellence</div>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-xl border-l-2 border-t-2 border-gold/20" />
          </div>

          {/* Text */}
          <div className={isInView ? "animate-slide-in-right" : "opacity-0"}>
            <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.2em] text-gold">About The Company</span>
            <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Engineering <span className="text-gradient-gold">Excellence</span>, Built In Lagos.
            </h2>
            <p className="mt-6 font-body text-base leading-[1.8] text-secondary-foreground lg:text-lg">
              Just e-Shelter Construction Limited is a Lagos-based construction firm building
              residential estates, bespoke homes, and commercial developments to international
              standards. Led by certified builders and registered with the Lagos State Chapter
              of the Builders' Association, we combine field expertise with disciplined project
              management to deliver structures that endure.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-gold" />
                  <span className="font-body text-sm text-secondary-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-card/50 p-4 text-center transition-all duration-300 hover:border-gold/30 hover:bg-card">
                  <div className="font-heading text-2xl font-extrabold text-gold lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-body text-[11px] uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
