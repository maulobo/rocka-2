import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { EASE, fadeUp, skewReveal, slideInRight, stagger } from "../lib/animations";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";
import hero4 from "../assets/hero/hero4.png";
import piletaImg from "../assets/pileta.png";

const SERVICE_PHOTOS = [hero2, piletaImg, hero3, hero4, hero1];

const MotionLink = motion(Link);

export default function Services() {
  const { t } = useLanguage();
  const { items } = t.services;

  return (
    <section
      id="servicios"
      className="w-full flex flex-col justify-center bg-[#F9F9F9] text-[#0E1016] relative overflow-hidden py-24 md:py-32 font-display"
    >

      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 flex flex-col justify-center z-10">

        {/* ── HEADER ── */}
        <div className="mb-14 md:mb-20 pb-12 border-b border-[#D4DCE8]">
          <motion.div
            className="section-label mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {t.services.overline}
          </motion.div>

          {/* Title — word-by-word skew reveal */}
          <motion.div
            className="mb-10"
            variants={stagger(0, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t.services.title.split(" ").map((word, wi) => (
              <div key={wi} className="overflow-hidden mb-[-0.15em] last:mb-0">
                <motion.h2
                  className="title-primary"
                  style={{ color: wi === 1 ? "#9D031A" : "#0E1016" }}
                  variants={skewReveal}
                >
                  {word}
                </motion.h2>
              </div>
            ))}
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-[#555] max-w-2xl leading-relaxed font-medium"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          >
            {t.services.subtitle}
            <Link
              to="/servicios"
              className="text-[#9D031A] font-black italic ml-2 inline-block hover:underline uppercase text-[0.85rem] tracking-tighter"
            >
              {t.services.learnMore}
            </Link>
          </motion.p>
        </div>

        {/* ── SERVICE ROWS — staggered ── */}
        <motion.div
          className="flex flex-col"
          variants={stagger(0.25, 0.18)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.02 }}
        >
          {items.map((s, i) => (
            <MotionLink
              key={s.num}
              to={s.path}
              className="group relative flex flex-col md:grid md:grid-cols-12 md:items-center gap-8 py-12 md:py-20 border-b border-[#D4DCE8] transition-all duration-500 hover:bg-white/40 px-6 md:px-4 overflow-hidden"
              variants={slideInRight}
            >
              {/* Background Number */}
              <div className="absolute left-[-1rem] top-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] font-black text-[#0E1016]/[0.02] pointer-events-none group-hover:text-[#9D031A]/[0.04] transition-colors duration-700 italic select-none">
                {s.num}
              </div>

              {/* Title & Tag */}
              <div className="relative z-10 md:col-span-5 flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#9D031A]/60 group-hover:text-[#9D031A] mb-3 italic transition-colors">
                  {s.tag}
                </span>
                <h3 className="text-2xl md:text-4xl lg:text-[2.5rem] font-black uppercase italic leading-[1.1] tracking-tighter group-hover:translate-x-3 transition-transform duration-500">
                  {s.title}
                </h3>
              </div>

              {/* Description */}
              <div className="relative z-10 md:col-span-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[11px] font-bold text-[#9D031A] uppercase tracking-[0.2em] mb-3 italic">
                  {s.hook}
                </p>
                <p className="text-sm text-[#444] leading-relaxed max-w-sm">{s.desc}</p>
              </div>

              {/* Indicator */}
              <div className="relative z-10 md:col-span-3 flex items-center justify-between md:justify-end gap-6 self-end md:self-center mt-8 md:mt-0">
                <div className="flex flex-col items-end text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#999] opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-pre-line leading-relaxed">
                    {s.detail.replace(/ · /g, "\n")}
                  </span>
                </div>
                <div className="w-14 h-14 rounded-full border border-[#D4DCE8] flex items-center justify-center group-hover:bg-[#9D031A] group-hover:border-[#9D031A] group-hover:scale-110 transition-all duration-500 ease-out">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[3] stroke-[#0F215A] group-hover:stroke-white transition-colors">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Diagonal photo */}
              <div
                className="absolute right-0 top-0 h-full w-[32%] pointer-events-none hidden md:block"
                style={{ clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              >
                <img
                  src={SERVICE_PHOTOS[i % SERVICE_PHOTOS.length]}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover brightness-50 saturate-50 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#F9F9F9] via-[#F9F9F9]/50 to-transparent" />
              </div>

              {/* Hover line */}
              <div className="absolute left-0 top-0 w-0 h-full bg-white/20 group-hover:w-full transition-all duration-700 ease-in-out pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] hazard-stripe-thin opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
            </MotionLink>
          ))}
        </motion.div>

        {/* Mobile link */}
        <motion.div
          className="mt-6 md:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            to="/servicios"
            className="text-sm text-[#9D031A] uppercase tracking-[0.1em] flex items-center gap-2 font-black italic"
          >
            {t.services.learnMore}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
