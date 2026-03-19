import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5492993323446"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-[9998] w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
      style={{ borderRadius: 0 }}
    >
      <MessageCircle size={24} className="text-white" />
      {/* Tooltip */}
      <span
        className="absolute right-16 bg-[#0E1016] border border-[#1C2028] text-[#E8ECF0] px-3 py-2 text-[10px] uppercase tracking-[0.15em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        WhatsApp
      </span>
    </a>
  );
}
