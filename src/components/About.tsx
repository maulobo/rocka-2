import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EASE, fadeUp } from "../lib/animations";
import piletaImg from "../assets/pileta.png";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const cards = [
    { label: a.historyLabel, text: a.historyText, accent: false },
    { label: a.missionLabel, text: `"${a.missionText}"`, accent: true },
    { label: a.visionLabel, text: a.visionText, accent: false },
  ];

  return (
    <section ref={containerRef} className="bg-[#0E1016]">
      {/* ── HEADER — mismo estilo que Fabricación ── */}
      <div className="relative border-b border-[#1C2028] py-28 md:py-40 overflow-hidden">
        <img
          src={piletaImg}
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover brightness-[0.12] saturate-0 scale-105"
        />
        <div className="absolute inset-0 bg-[#0E1016]/60" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-0.75 hazard-stripe opacity-40" />

        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20"
        >
          <motion.div
            className="section-label mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {a.overline}
          </motion.div>

          <div className="mb-12">
            {[a.title, a.titleHighlight].map((line, li) => (
              <div key={li} className="overflow-hidden mb-[-0.06em] last:mb-0">
                <motion.h1
                  className={`title-primary ${li === 1 ? "text-[#9D031A]" : ""}`}
                  initial={{ y: "105%", skewX: -2, opacity: 0 }}
                  animate={{ y: "0%", skewX: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.15 + li * 0.12, ease: EASE }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            className="text-base md:text-lg text-[#C0C8D4] leading-relaxed font-medium max-w-2xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          >
            {a.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* ── OVERLAPPING CARDS ── */}
      <div className="relative px-6 md:px-12 lg:px-20 pt-24 pb-32 border-b border-[#1C2028]">
        {/* Section label */}
        <motion.div
          className="section-label mb-16 md:mb-24 max-w-7xl mx-auto"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          — Empresa
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={`relative z-[${10 + i * 10}] bg-[#0E1016] border border-[#1C2028] p-10 md:p-14
                ${i === 0 ? "ml-0 mr-auto md:max-w-[80%]" : ""}
                ${i === 1 ? "ml-auto mr-0 md:max-w-[80%] -mt-10 md:-mt-16" : ""}
                ${i === 2 ? "ml-0 mr-auto md:max-w-[80%] -mt-10 md:-mt-16" : ""}
              `}
              initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -0.8 : 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
              style={{ boxShadow: "0 8px 60px rgba(0,0,0,0.5)" }}
            >
              {/* Top accent line */}
              {card.accent && (
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#9D031A]" />
              )}

              {/* Label */}
              <motion.div
                className="section-label mb-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {card.label}
              </motion.div>

              {/* Text — word by word reveal */}
              <motion.p
                className={`text-lg md:text-xl leading-relaxed font-light ${card.accent ? "text-[#E8ECF0] italic" : "text-[#C0C8D4]"}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              >
                {card.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
