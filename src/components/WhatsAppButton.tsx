import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2348063109568?text=Hello%20Just%20E-Shelter%2C%20I%27m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-foreground" style={{ color: "#fff" }} />
    </a>
  );
};

export default WhatsAppButton;
