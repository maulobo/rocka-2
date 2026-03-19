import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="border-t border-[#1C2028]">
      {/* Top hazard bar */}
      <div className="hazard-stripe h-[3px] w-full opacity-20" />

      <div className="py-12 md:py-16 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="text-3xl tracking-tighter hover:text-[#9D031A] transition block mb-2 font-black italic"
              >
                ROLCKA SRL
              </Link>
              <div className="text-[10px] text-[#444] tracking-[0.2em] font-bold uppercase">
                OIL & GAS — PARQUE INDUSTRIAL NEUQUÉN
              </div>
              <div className="mt-4 hazard-stripe h-[2px] w-16 opacity-50" />
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { to: "/servicios", label: f.services },
                { to: "/nosotros", label: f.about },
                { to: "/nosotros#clientes", label: f.clients },
                { to: "/contacto", label: f.contact },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#BBB] hover:text-[#9D031A] transition uppercase tracking-[0.15em] font-bold text-[0.8rem]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact quick */}
            <div className="space-y-1">
              <a
                href="tel:+5492993323446"
                className="block text-[#444] hover:text-[#9D031A] transition text-[11px] font-bold tracking-tight"
              >
                +54 9 299 332-3446
              </a>
              <a
                href="mailto:info@rolcka.com"
                className="block text-[#444] hover:text-[#9D031A] transition text-[11px] font-bold tracking-tight"
              >
                info@rolcka.com
              </a>
              <a
                href="https://www.rolcka.com"
                className="block text-[#444] hover:text-[#9D031A] transition text-[11px] font-bold tracking-tight"
              >
                WWW.ROLCKA.COM
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-[#1C2028] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-[10px] text-[#333] font-bold uppercase tracking-[0.12em]">
              {f.rights} · {f.location}
            </div>
            <div className="text-[10px] text-[#333] tracking-[0.15em] font-black italic uppercase">
              ISO 9001 · 14001 · 45001 — EN PROCESO
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
