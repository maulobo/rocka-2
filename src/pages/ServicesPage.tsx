import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import CTABanner from "../components/CTABanner";

export default function ServicesPage() {
  const { t } = useLanguage();
  const { items } = t.services;

  return (
    <>
      {/* PAGE HERO */}
      <section className="border-b border-[#1C2028] pt-32 pb-20 px-8 md:px-16 lg:px-20 relative overflow-hidden grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="section-label mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-[#9D031A] transition">
              HOME
            </Link>
            <span className="text-[#333]">→</span>
            <span className="text-[#9D031A]">
              {t.nav.services.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="section-label mb-4">{t.services.overline}</div>
              <h1 className="title-primary leading-[0.9]">
                {t.services.title}
              </h1>
            </div>
            <div>
              <p className="text-base md:text-lg text-[#AAA] leading-relaxed mb-8">
                {t.services.subtitle}
              </p>
              {/* Quick jump */}
              <div className="flex flex-wrap gap-3">
                {items.map((s) => (
                  <Link
                    key={s.num}
                    to={s.path}
                    className="border border-[#252B35] hover:border-[#9D031A] hover:text-[#9D031A] px-4 py-2 text-[11px] uppercase tracking-[0.12em] transition-colors font-bold"
                  >
                    {s.tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 hazard-stripe h-[3px] w-full opacity-30" />
        </div>
      </section>

      {/* 3 SERVICE UNITS — intro cards */}
      {items.map((s, idx) => (
        <section
          key={s.num}
          className={`border-b border-[#1C2028] py-16 md:py-20 px-8 md:px-16 lg:px-20 flex justify-center relative overflow-hidden ${
            idx % 2 === 1 ? "bg-[#121620]" : ""
          }`}
        >
          {idx % 2 === 0 && (
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          )}

          <div className="max-w-7xl w-full relative z-10">
            <div className="grid grid-cols-1 gap-10 md:gap-14">
              <div>
                <div className="mb-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#9D031A] border border-[#9D031A]/30 px-2 py-1 inline-block font-bold">
                    {s.tag}
                  </span>
                </div>
                <div className="section-label mb-3">{s.hook}</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-black uppercase tracking-tight">
                  {s.title}
                </h2>
                <p className="text-base md:text-lg text-[#C8C8D4] leading-relaxed mb-8 max-w-3xl">
                  {s.desc}
                </p>
                <div className="hazard-stripe h-[2px] w-full opacity-20 mb-6" />
                <div className="text-[10px] text-[#BBB] uppercase tracking-[0.2em] mb-8 font-bold">
                  {s.detail}
                </div>
                <Link
                  to={s.path}
                  className="inline-block border border-[#0F215A] text-[#0F215A] px-8 py-3 text-sm uppercase tracking-[0.15em] hover:bg-[#0F215A] hover:text-[#E8ECF0] transition pulse-glow-blue font-black italic"
                >
                  {t.services.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <CTABanner />
    </>
  );
}
