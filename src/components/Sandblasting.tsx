import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Sandblasting() {
  const { t, lang } = useLanguage();
  const s = t.sandblasting;

  return (
    <section
      id="arenado"
      className="border-b border-[#1C2028] py-20 md:py-28 lg:py-36 flex justify-center relative overflow-hidden grid-bg"
    >
      <div className="w-full max-w-7xl px-8 md:px-16 lg:px-20 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-14">
          <div>
            <div className="section-label mb-6">{s.overline}</div>
            <h2 className="title-primary">
              {s.title}
              <br />
              <span className="text-[#9D031A]">{s.titleLine2}</span>
            </h2>
          </div>
          <div className="flex items-end text-[#C8C8D4] font-medium">
            <p className="text-base md:text-lg leading-relaxed">{s.subtitle}</p>
          </div>
        </div>

        <div className="hazard-stripe h-[3px] w-full opacity-30 mb-12" />

        {/* 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-14">
          {s.items.map((item, i) => (
            <div
              key={i}
              className="border border-[#1C2028] p-8 md:p-10 hover:border-[#9D031A] transition-all duration-300 card-lift group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-[2px] h-full bg-[#9D031A] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Ghost number */}
              <div className="absolute bottom-2 right-3 text-[5rem] leading-none text-[#9D031A] opacity-[0.04] pointer-events-none font-black">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <div className="section-label mb-5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#9D031A] border border-[#9D031A]/30 px-2 py-1 font-bold">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-2xl md:text-3xl mb-4 group-hover:text-[#9D031A] transition-colors font-black uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-[#C8C8D4] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border border-[#1C2028] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-[10px] text-[#9D031A] uppercase tracking-[0.2em] mb-2 font-bold">
              CONTACTO
            </div>
            <p className="text-base text-[#E8ECF0]">
              {lang === "es"
                ? "¿Necesitás arenado o pintura para tus equipos? Consultanos."
                : "Need sandblasting or painting for your equipment? Contact us."}
            </p>
          </div>
          <Link
            to="/contacto"
            className="flex-shrink-0 bg-[#9D031A] text-[#0E1016] px-8 py-4 uppercase tracking-[0.12em] hover:bg-[#B3041F] transition text-[12px] pulse-glow font-black italic"
          >
            {t.cta.options[0].action}
          </Link>
        </div>
      </div>
    </section>
  );
}
