import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
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

  const inputClasses = "w-full rounded-xl border border-border bg-card/80 px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-gold/50 focus:ring-2 focus:ring-gold/10";

  return (
    <section id="contact" className="relative bg-card/50 section-padding" ref={ref}>
      <div className="ankara-pattern absolute inset-0 opacity-10" />
      <div className="container relative mx-auto px-4">
        <div className="section-header">
          <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.2em] text-gold">Contact</span>
          <h2 className="mt-6 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="mt-4 font-body text-base text-secondary-foreground lg:text-lg">
            Ready to build your dream home? Let's discuss your project.
          </p>
        </div>

        <div className={`mt-16 grid gap-12 lg:grid-cols-2 ${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h3 className="font-heading text-lg font-bold">Send Us a Message</h3>
            <p className="mt-2 font-body text-sm text-muted-foreground">Fill out the form and we'll respond within 24 hours.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input type="text" placeholder="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} />
                <input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} />
              </div>
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClasses} />
              <textarea placeholder="Tell us about your project..." rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClasses} resize-none`} />
              <button type="submit" className="group bg-gradient-gold w-full inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.01]">
                Send Message via WhatsApp
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            {[
              { icon: MapPin, title: "Address", content: "Plot 8, Road 2, Gate 3, Happy Land Estate,\nOko-Ado Bus Stop, Ajah, Lagos, Nigeria" },
              { icon: Phone, title: "Phone", content: "0806 310 9568", href: "tel:08063109568" },
              { icon: Mail, title: "Email", content: "info@justeshelter.com", href: "mailto:info@justeshelter.com" },
            ].map((item) => (
              <div key={item.title} className="group flex items-start gap-5 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block font-body text-sm text-secondary-foreground transition-colors hover:text-gold whitespace-pre-line">
                      {item.content}
                    </a>
                  ) : (
                    <p className="mt-1 font-body text-sm text-secondary-foreground whitespace-pre-line">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.5!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDAuMCJOIDPCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="220"
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
