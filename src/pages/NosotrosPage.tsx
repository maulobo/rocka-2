import { motion } from "framer-motion";
import About from "../components/About";
import Clients from "../components/Clients";
import CTABanner from "../components/CTABanner";
import { EASE, fadeUp } from "../lib/animations";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";
import hero4 from "../assets/hero/hero4.png";
import piletaImg from "../assets/pileta.png";
import piletaAgitacionImg from "../assets/pileta-agitacion.png";

const galleryItems = [
  { src: hero1, alt: "Operaciones en campo", featured: true },
  { src: hero2, alt: "Equipamiento industrial" },
  { src: piletaImg, alt: "Pileta de almacenamiento" },
  { src: hero3, alt: "Instalaciones Rolcka" },
  { src: hero4, alt: "Trabajos de fabricación" },
  { src: piletaAgitacionImg, alt: "Pileta de agitación" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* HISTORY + MISSION + VISION */}
      <About />

      {/* GALLERY */}
      <section className="border-b border-[#1C2028] py-20 md:py-28 px-8 md:px-16 lg:px-20 bg-[#0E1016]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            className="section-label mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            — Instalaciones
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="overflow-hidden">
              <motion.h2
                className="title-primary"
                initial={{ y: "105%", skewX: -2, opacity: 0 }}
                whileInView={{ y: "0%", skewX: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              >
                CAMPO & TALLER
              </motion.h2>
            </div>
            <motion.p
              className="text-base text-[#C0C8D4] leading-relaxed max-w-sm md:text-right"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            >
              Equipos, instalaciones y el trabajo real detrás de cada proyecto en campo.
            </motion.p>
          </div>

          {/* Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
            style={{ gridTemplateRows: "repeat(3, 220px)" }}
          >
            {/* Featured — big */}
            <motion.div
              className="col-span-2 row-span-2 overflow-hidden group relative"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <img
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0E1016]/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Small images — right column rows 1 & 2 + bottom row */}
            {galleryItems.slice(1).map((item, i) => (
              <motion.div
                key={i}
                className="overflow-hidden group relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.08 * (i + 1), ease: EASE }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0E1016]/25 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CLIENTS */}
      <Clients />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
