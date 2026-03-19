import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { EASE } from "../lib/animations";

export default function BombasCisternas() {
  const { t, lang } = useLanguage();
  const b = t.bombas;

  return (
    <section
      id="bombas"
      className="bg-[#F8F9FA] text-[#0A0D12] py-24 md:py-32 relative border-b border-[#E5E7EB]"
    >
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        {/* ── Header Clean Industrial ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-[#E5E7EB] pb-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-8 bg-[#9D031A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9D031A]">
                {b.overline}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0A0D12] leading-[1.05]"
            >
              {b.title} <span className="text-[#0F215A]">{b.titleLine2}</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="text-sm md:text-base text-[#5A6575] leading-relaxed max-w-md md:text-right"
          >
            {b.subtitle}
          </motion.p>
        </div>

        {/* ── Minimal Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {b.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: EASE }}
              className="group bg-white border border-[#E5E7EB] hover:border-[#0F215A] hover:shadow-2xl hover:shadow-[#0F215A]/10 p-8 md:p-12 transition-all duration-400 relative overflow-hidden flex flex-col"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#0F215A] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#5A6575] bg-[#F8F9FA] px-3 py-1.5 border border-[#E5E7EB] group-hover:text-[#0F215A] group-hover:border-[#0F215A]/30 transition-colors">
                  {item.tag}
                </span>
                <span className="text-[3.5rem] leading-none font-black text-[#F4F5F7] group-hover:text-[#0F215A]/10 transition-colors duration-500 pointer-events-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0A0D12] mb-4 group-hover:text-[#0F215A] transition-colors duration-300">
                {item.title}
              </h4>

              <p className="text-[#5A6575] leading-relaxed text-sm md:text-base flex-1 shrink-0">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Minimal CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="bg-[#0A0D12] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 md:p-14"
        >
          <div>
            <div className="text-[10px] text-[#0F215A] uppercase tracking-[0.2em] mb-4 font-bold flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#0F215A] shrink-0" />
              {lang === "es" ? "Contacto Comercial" : "Sales Department"}
            </div>
            <p className="text-lg md:text-xl font-medium max-w-xl leading-relaxed text-[#E8ECF0]">
              {lang === "es"
                ? "¿Necesitás equipos para tu operación? Consultá disponibilidad de flota y tarifas."
                : "Need equipment for your operation? Contact us for fleet availability and rates."}
            </p>
          </div>
          <Link
            to="/contacto"
            className="whitespace-nowrap shrink-0 border border-[#1A1F28] bg-[#13161D] text-white hover:border-[#0F215A] hover:bg-[#0F215A] px-8 py-4.5 uppercase tracking-[0.15em] text-[11px] font-bold transition-all duration-300 flex items-center gap-3"
          >
            <span>{lang === "es" ? "Contactar Ahora" : "Contact Now"}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 stroke-[2.5] stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7 7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
