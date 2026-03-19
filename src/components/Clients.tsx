import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { EASE, fadeUp, skewReveal, stagger } from "../lib/animations";

export default function Clients() {
  const { t } = useLanguage();
  const c = t.clients;

  return (
    <section
      id="empresa"
      className="border-b border-[#D4DCE8] py-24 md:py-32 relative overflow-hidden bg-[#F9F9F9] text-[#0E1016]"
    >

      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">

        {/* ── HEADER ── */}
        <div className="mb-16 md:mb-20">
          <motion.div
            className="section-label mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {c.overline}
          </motion.div>

          {/* Parent triggers, children inherit via variants */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20"
            variants={stagger(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Title skew reveal */}
            <div className="overflow-hidden shrink-0">
              <motion.h2
                className="title-primary"
                variants={skewReveal}
              >
                {c.title}
              </motion.h2>
            </div>

            {/* Lead */}
            <motion.p
              className="text-lg md:text-xl text-[#555] leading-relaxed max-w-2xl pt-1 font-medium"
              variants={fadeUp}
            >
              {c.lead}
            </motion.p>
          </motion.div>
        </div>

        {/* ── HAZARD DIVIDER — draws from left ── */}
        <motion.div
          className="hazard-stripe h-[3px] opacity-20 mb-16"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: EASE }}
        />

        {/* ── MISIÓN / VISIÓN — staggered ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          variants={stagger(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* MISIÓN */}
          <motion.div
            className="border border-[#D4DCE8] p-10 md:p-14 group hover:border-[#9D031A]/50 transition-colors duration-500 relative overflow-hidden"
            variants={fadeUp}
          >
            {/* Accent bar — draws on scroll */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-[#9D031A] opacity-30"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
            />
            <div className="section-label mb-5 font-bold">{c.misionLabel}</div>
            <p className="text-base text-[#666] leading-[1.8] group-hover:text-[#444] transition-colors duration-500 font-medium">
              {c.mision}
            </p>
          </motion.div>

          {/* VISIÓN */}
          <motion.div
            className="border border-[#D4DCE8] border-l-0 p-10 md:p-14 group hover:border-[#0F215A]/50 transition-colors duration-500 relative overflow-hidden"
            variants={fadeUp}
          >
            {/* Accent bar — draws on scroll */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-[#0F215A] opacity-30"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
            />
            <div className="section-label mb-5 font-bold">{c.visionLabel}</div>
            <p className="text-base text-[#666] leading-[1.8] group-hover:text-[#444] transition-colors duration-500 font-medium">
              {c.vision}
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
