import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { EASE, fadeUp, skewReveal, scaleIn, stagger } from "../lib/animations";

export default function WhyRolcka() {
  const { t } = useLanguage();
  const w = t.whyRolcka;

  return (
    <section className="border-b border-[#1C2028] py-24 md:py-32 relative overflow-hidden bg-[#0E1016]">
      <div className="absolute top-0 left-0 w-full h-[3px] hazard-stripe opacity-20" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">

        {/* Overline */}
        <motion.div
          className="section-label mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {w.overline}
        </motion.div>

        {/* Headline — staggered line reveal */}
        <motion.div
          className="mb-12 md:mb-16"
          variants={stagger(0, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {w.headlineLines.map((line, li) => (
            <div key={li} className="overflow-hidden mb-[-0.1em] last:mb-0">
              <motion.div
                className="title-primary"
                style={{ color: li === 1 ? "#9D031A" : "#E8ECF0" }}
                variants={skewReveal}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-[#C8C8D4] max-w-2xl mb-14 leading-relaxed font-medium"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        >
          {w.subtitle}
        </motion.p>

        {/* Hazard stripe — draws from left */}
        <motion.div
          className="hazard-stripe h-[3px] opacity-20 mb-14"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: EASE }}
        />

        {/* Pillar cards — staggered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          variants={stagger(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {w.pillars.map((p, i) => (
            <motion.div
              key={i}
              className={`border border-[#1C2028] p-8 md:p-10 lg:p-12 relative overflow-hidden group hover:bg-[#121620] transition-colors duration-300 ${
                i < 2 ? "md:border-r-0" : ""
              }`}
              variants={fadeUp}
            >
              {/* Top accent — hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#9D031A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Side bar — grows on scroll */}
              <motion.div
                className="absolute left-0 top-0 w-[2px] bg-[#9D031A] opacity-25"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.4 + i * 0.15, ease: EASE }}
              />

              {/* Ghost number */}
              <div className="absolute -bottom-2 -right-1 text-[7rem] leading-none pointer-events-none select-none opacity-[0.035] font-black text-[#9D031A]">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                {/* Tag — scales in */}
                <motion.span
                  className="text-[9px] uppercase tracking-[0.2em] text-[#9D031A] border border-[#9D031A]/30 px-2 py-1 inline-block mb-5 font-bold"
                  variants={scaleIn}
                >
                  {p.tag}
                </motion.span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight group-hover:text-[#9D031A] transition-colors duration-300 font-black uppercase tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-[#C8C8D4] leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
