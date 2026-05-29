import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/proj-estate-finished.jpeg";
import project2 from "@/assets/proj-apartments-finished.jpeg";
import project3 from "@/assets/proj-commercial-wip.jpeg";
import project4 from "@/assets/proj-villa-scaffold.jpeg";
import project5 from "@/assets/proj-duplex-wip.jpeg";
import project6 from "@/assets/proj-estate-wip.jpeg";
import project7 from "@/assets/proj-frame-wip.jpeg";

const filters = ["All", "Residential", "Estates", "Commercial"];

const projects = [
  { img: project1, title: "Twin Luxury Residence", location: "Ajah, Lagos", year: "2025", category: "Residential", desc: "Completed twin-block luxury residence delivered to handover standard with premium finishing." },
  { img: project2, title: "Marina View Apartments", location: "Lekki, Lagos", year: "2024", category: "Estates", desc: "Multi-storey residential apartment block finished in signature blue & white corporate palette." },
  { img: project3, title: "Commercial Mixed-Use", location: "Lekki-Epe Corridor", year: "2025", category: "Commercial", desc: "Large-scale 4-storey commercial complex currently topping out with structural roofing in progress." },
  { img: project4, title: "Contemporary Duplex", location: "Ajah, Lagos", year: "2025", category: "Residential", desc: "Bespoke 5-bedroom contemporary duplex with rooftop terrace, in advanced finishing stage." },
  { img: project5, title: "Modern Townhouse", location: "Sangotedo, Lagos", year: "2025", category: "Residential", desc: "Three-storey modern townhouse under structural completion with custom façade detailing." },
  { img: project6, title: "Gated Estate Development", location: "Ibeju-Lekki", year: "2025", category: "Estates", desc: "Multi-unit gated estate development with concurrent block-work and roofing across all units." },
  { img: project7, title: "Terrace Block Project", location: "Ajah, Lagos", year: "2024", category: "Estates", desc: "Premium terrace block at decking stage — engineered structural frame for long-term integrity." },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const { ref, isInView } = useInView();
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.2em] text-gold">Portfolio</span>
          <h2 className="mt-6 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="mt-4 font-body text-base text-secondary-foreground lg:text-lg">
            Explore our portfolio of premium residential and commercial developments.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-lg px-6 py-2.5 font-heading text-sm uppercase tracking-wider transition-all duration-300 ${
                active === f
                  ? "bg-gradient-gold text-primary-foreground shadow-lg shadow-gold/20"
                  : "border border-border bg-card text-muted-foreground hover:border-gold/30 hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-xl ${isInView ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
                
                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-heading text-xs uppercase tracking-[0.2em] text-gold">{project.category} · {project.year}</span>
                  <h3 className="mt-2 font-heading text-xl font-bold">{project.title}</h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">{project.location}</p>
                  <p className="mt-2 font-body text-sm text-secondary-foreground">{project.desc}</p>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Always visible title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-5 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-heading text-sm font-bold">{project.title}</h3>
                <p className="font-body text-xs text-muted-foreground">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
