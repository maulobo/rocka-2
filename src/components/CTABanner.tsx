import { motion } from "framer-motion";
import { FileText, Phone, MapPin, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { EASE, fadeUp, skewReveal, scaleIn, stagger } from "../lib/animations";

const icons = {
  form: FileText,
  pdf: Download,
  phone: Phone,
  visit: MapPin,
};

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[#1C2028] py-24 md:py-32 relative overflow-hidden bg-[#0E1016]">
      <div className="absolute top-0 left-0 w-full h-[3px] hazard-stripe opacity-20" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            className="section-label mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {t.cta.overline}
          </motion.div>

          {/* Title skew reveal */}
          <div className="overflow-hidden">
            <motion.h2
              className="title-primary mb-6"
              variants={skewReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              {t.cta.title}
            </motion.h2>
          </div>

          <motion.p
            className="text-sm md:text-base text-[#C8C8D4] max-w-lg mx-auto font-medium"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            {t.cta.subtitle}
          </motion.p>
        </div>

        {/* ── 4 CTA CARDS — staggered ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger(0.15, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t.cta.options.map((option, i) => {
            const Icon = icons[option.icon as keyof typeof icons];
            const isWA = option.icon === "phone";
            const isBlue = i % 2 === 1;
            const accent = isBlue ? "#0F215A" : "#9D031A";

            return (
              <motion.a
                key={i}
                href={option.href}
                target={isWA ? "_blank" : undefined}
                rel={isWA ? "noopener noreferrer" : undefined}
                className="group border border-[#1C2028] p-8 md:p-10 flex flex-col justify-between min-h-[300px] hover:bg-[#121620] transition-colors duration-300 relative overflow-hidden"
                variants={fadeUp}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {/* Hover top accent */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: accent }}
                />

                <div className="relative z-10">
                  {/* Icon — scales in */}
                  <motion.div className="mb-6" variants={scaleIn}>
                    <div
                      className="w-12 h-12 border border-[#252B35] flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                    >
                      <Icon size={20} className="text-[#BBB] group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl mb-3 text-[#E8ECF0] leading-tight font-black uppercase">
                    {option.label}
                  </h3>
                  <p className="text-sm text-[#C8C8D4] leading-relaxed">{option.desc}</p>
                </div>

                {/* Action */}
                <div className="relative z-10 mt-8 pt-4 border-t border-[#1C2028]">
                  <span className="text-xs text-[#BBB] tracking-[0.2em] uppercase font-bold group-hover:tracking-[0.3em] transition-all duration-500">
                    {option.action}
                  </span>
                </div>

                {/* Corner fill on hover */}
                <div
                  className="absolute bottom-0 right-0 w-0 h-0 group-hover:w-20 group-hover:h-20 transition-all duration-500 opacity-10 rounded-tl-full"
                  style={{ backgroundColor: accent }}
                />
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
