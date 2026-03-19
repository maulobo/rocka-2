import { useLanguage } from "../context/LanguageContext";

export default function Credentials() {
  const { t } = useLanguage();
  const certs = t.about.certs;

  return (
    <section className="border-b border-[#E5E5E5] bg-[#EEF2F8] py-20 md:py-28 flex justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[3px] hazard-stripe opacity-15" />

      <div className="w-full max-w-7xl px-8 md:px-16 lg:px-20 relative z-10">
        <div className="section-label mb-6">{t.about.certsLabel}</div>
        <h2 className="text-6xl md:text-7xl lg:text-8xl mb-12 md:mb-16 text-[#0E1016] font-extrabold tracking-tighter">
          {t.about.certsTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {certs.map((cert, i) => (
            <div
              key={i}
              className={`border p-8 md:p-10 text-center transition-all duration-300 flex flex-col justify-center min-h-[180px] card-lift relative overflow-hidden ${
                cert.active
                  ? "border-[#0F215A]/40 bg-white hover:border-[#0F215A]"
                  : "border-[#E5E5E5] bg-white hover:border-[#9D031A]"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-[3px] hazard-stripe opacity-10" />

              {/* Status badge */}
              <div
                className={`text-[8px] uppercase tracking-[0.15em] mb-3 ${
                  cert.active ? "text-[#9D031A]" : "text-[#aaa]"
                }`}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {cert.active ? "● ACTIVO" : "○ EN PROCESO"}
              </div>

              <div
                className="text-2xl md:text-3xl text-[#0E1016] mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {cert.title}
              </div>
              <div
                className="text-[10px] text-[#BBB] uppercase tracking-[0.12em] mb-3"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {cert.desc}
              </div>
              <div
                className={`text-[9px] tracking-[0.1em] uppercase ${
                  cert.active ? "text-[#9D031A]" : "text-[#aaa]"
                }`}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {cert.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
