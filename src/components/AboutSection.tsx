import aboutBg from "@/assets/about-bg.jpg";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team Members" },
];

const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32" ref={ref}>
      <div className="ankara-pattern absolute inset-0 opacity-20" />
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className={`relative overflow-hidden rounded ${isInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <img
              src={aboutBg}
              alt="Luxury home at dusk"
              className="h-[400px] w-full object-cover lg:h-[500px]"
              loading="lazy"
              width={1920}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-gold" />
                <span className="font-heading text-sm uppercase tracking-widest text-gold">Since 2012</span>
                <div className="h-px flex-1 bg-gradient-gold" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={isInView ? "animate-slide-in-right" : "opacity-0"}>
            <span className="font-heading text-sm uppercase tracking-widest text-gold">About Us</span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Crafting <span className="text-gradient-gold">Exceptional</span> Spaces
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground lg:text-lg">
              Just E-Shelter Nig Ltd delivers exceptional residential and commercial spaces 
              with uncompromising quality, innovation, and attention to detail across Lagos. 
              We transform visions into architectural masterpieces that stand the test of time.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground lg:text-lg">
              From concept to completion, our dedicated team of architects, engineers, 
              and craftsmen ensure every project reflects the highest standards of luxury 
              construction in Nigeria.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-heading text-2xl font-bold text-gold lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-body text-xs uppercase tracking-wider text-muted-foreground">
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
