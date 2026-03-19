import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { EASE, fadeUp } from "../lib/animations";

import piletaImg from "../assets/pileta.png";
import piletaAgitacionImg from "../assets/pileta-agitacion.png";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";

type FabGroup = { tag: string; title: string; desc: string; specs?: string[] };

// Definimos un arreglo constante de imágenes a mano para darle variedad, o usamos null
const GROUP_PHOTOS: string[] = [piletaAgitacionImg, piletaImg, hero1, hero2];

export default function Fabrication() {
  const { t, lang } = useLanguage();
  const f = t.fabrication;

  return (
    <section id="fabricacion" className="bg-[#0E1016] text-[#E8ECF0] relative">
      {/* ── BANNER HERO ── */}
      <div className="relative border-b border-[#1C2028] py-28 md:py-40 overflow-hidden">
        {/* Usamos una de las fotos para el fondo del banner, e.g. hero1 */}
        <img
          src={hero1}
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover brightness-[0.15] saturate-0 scale-105"
        />
        <div className="absolute inset-0 bg-[#0E1016]/70" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[3px] hazard-stripe opacity-40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
          <motion.div
            className="section-label mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {f.overline}
          </motion.div>

          <div className="mb-12">
            {[f.title, f.titleLine2].map((line, li) => (
              <div key={li} className="overflow-hidden mb-[-0.06em] last:mb-0">
                <motion.h1
                  className={`title-primary ${li === 1 ? "text-[#9D031A]" : ""}`}
                  initial={{ y: "105%", skewX: -2, opacity: 0 }}
                  animate={{ y: "0%", skewX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + li * 0.12,
                    ease: EASE,
                  }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-4xl mb-16"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          >
            <p className="text-base md:text-lg text-[#C0C8D4] leading-relaxed font-medium">
              {f.subtitle}
            </p>
            <div className="border border-[#9D031A]/30 bg-[#0A0D12]/80 px-5 py-4 inline-block self-start backdrop-blur-sm">
              <div className="text-[9px] text-[#9D031A] uppercase tracking-[0.2em] mb-1 font-bold">
                {f.qualityLabel}
              </div>
              <div className="text-sm text-[#C0C8D4] leading-relaxed">
                {f.qualityDesc}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap border-t border-[#1C2028] pt-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          >
            {[
              "Planta Industrial Propia",
              "Soldadores Certificados",
              "Fabricación a Medida",
              "Desde 2013",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 pr-8 pb-4 mr-8 border-r border-[#1C2028] last:border-r-0 last:mr-0 last:pr-0"
              >
                <div className="w-1.5 h-1.5 bg-[#9D031A] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C0C8D4]">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── SECCIONES DE PRODUCTOS (MODERN GRID) ── */}
      <div className="relative bg-[#050608] py-24 pb-32">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1F28] pb-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
                {lang === "es" ? "Catálogo de" : "Our"}{" "}
                <span className="text-[#9D031A]">
                  {lang === "es" ? "Fabricación" : "Catalog"}
                </span>
              </h2>
              <p className="text-[#8A95A5] text-sm md:text-base max-w-xl">
                {lang === "es"
                  ? "Explorá nuestras divisiones de fabricación. Desde piletas hasta estructuras de alto tonelaje."
                  : "Explore our manufacturing divisions. From tanks to heavy-duty structures."}
              </p>
            </div>
            <div className="hidden md:block text-[#0F215A] font-mono text-sm tracking-widest uppercase">
              [{f.groups.length} {lang === "es" ? "DIVISIONES" : "DIVISIONS"}]
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {f.groups.map((groupRaw, idx) => {
              const group = groupRaw as FabGroup;
              const imageSrc = GROUP_PHOTOS[idx % GROUP_PHOTOS.length];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: EASE }}
                  className="group relative bg-[#0A0D12] border border-[#1A1F28] hover:border-[#9D031A] transition-colors duration-500 flex flex-col overflow-hidden rounded-sm shadow-2xl"
                >
                  {/* Imagen (Arriba) */}
                  <div className="relative w-full h-[320px] md:h-[400px] bg-[#0E1016] border-b border-[#1A1F28] flex items-center justify-center p-8 overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-20 transition-opacity duration-500 group-hover:opacity-40" />

                    <span className="absolute top-6 right-6 text-[10px] font-mono tracking-[0.25em] text-[#9D031A] uppercase z-20">
                      SYS — {String(idx + 1).padStart(2, "0")}
                    </span>

                    <img
                      src={imageSrc}
                      alt={group.title}
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Contenido (Abajo) */}
                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <div className="mb-6">
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#5A6575]">
                        {group.tag}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-2 group-hover:text-[#9D031A] transition-colors duration-300">
                        {group.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-[#8A95A5] leading-relaxed mb-8 flex-1">
                      {group.desc}
                    </p>

                    {group.specs && group.specs.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-10 border-t border-[#1A1F28] pt-8">
                        {group.specs.map((spec, si) => (
                          <div key={si} className="flex items-start gap-3">
                            <span className="text-[#0F215A] mt-[1px] text-lg leading-none">
                              +
                            </span>
                            <span className="text-[11px] uppercase tracking-[0.08em] font-medium text-[#C0CAD4] leading-snug">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-4">
                      <Link
                        to="/consulta?tipo=piletas"
                        className="inline-flex items-center gap-3 border border-[#1A1F28] bg-[#0E1016] px-6 py-3.5 hover:border-[#9D031A] hover:bg-[#9D031A] transition-all duration-300 group/btn w-full justify-center sm:justify-start sm:w-auto"
                      >
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white transition-colors">
                          {t.nav.contact}
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-4 h-4 stroke-[2.5] stroke-white group-hover/btn:translate-x-1 transition-transform"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14m-7-7 7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
