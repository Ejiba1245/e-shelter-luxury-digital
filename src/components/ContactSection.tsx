import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ContactSection = () => {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hello Just E-Shelter,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/2348063109568?text=${whatsappMsg}`, "_blank");
  };

  return (
    <section id="contact" className="relative bg-secondary/30 py-24 lg:py-32" ref={ref}>
      <div className="ankara-pattern absolute inset-0 opacity-15" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm uppercase tracking-widest text-gold">Contact</span>
          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="mt-4 font-body text-muted-foreground">
            Ready to build your dream home? Let's discuss your project.
          </p>
        </div>

        <div className={`mt-16 grid gap-12 lg:grid-cols-2 ${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-gold"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-gold"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-gold"
            />
            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-gold"
            />
            <button
              type="submit"
              className="bg-gradient-gold w-full rounded px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Message via WhatsApp
            </button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gold/10 text-gold">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider">Address</h4>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  Plot 8, Road 2, Gate 3, Happy Land Estate,<br />
                  Oko-Ado Bus Stop, Ajah, Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gold/10 text-gold">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider">Phone</h4>
                <a href="tel:08063109568" className="mt-1 block font-body text-sm text-muted-foreground transition-colors hover:text-gold">
                  0806 310 9568
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gold/10 text-gold">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider">Email</h4>
                <a href="mailto:info@justeshelter.com" className="mt-1 block font-body text-sm text-muted-foreground transition-colors hover:text-gold">
                  info@justeshelter.com
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.5!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDAuMCJOIDPCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="200"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                loading="lazy"
                title="Just E-Shelter location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
