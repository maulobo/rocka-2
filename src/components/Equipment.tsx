import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { EASE, fadeUp } from "../lib/animations";

import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";
import hero4 from "../assets/hero/hero4.png";
import piletaImg from "../assets/pileta.png";
import piletaAgitacionImg from "../assets/pileta-agitacion.png";

// ── Datos ──────────────────────────────────────────────────────────────────────
const equipmentData = [
  {
    groupKey: "groupPiletas",
    items: [
      {
        name: "Pileta de Agitación de Lodo",
        nameEn: "Mud Agitation Tank",
        cap: "70 m³",
        specs: [
          { k: "Sistema", v: "3 Moto-reductores 10HP c/u" },
          { k: "Soporte", v: "Sobre patines" },
          { k: "Tecnología", v: "SIPCO Houston" },
        ],
        cert: "SIPCO",
        image: piletaAgitacionImg,
      },
      {
        name: "Pileta de Acumulación",
        nameEn: "Accumulation Tank",
        cap: "70 m³",
        specs: [
          { k: "Fluidos", v: "Agua / Lodo" },
          { k: "Soporte", v: "Sobre patines" },
          { k: "Certificación", v: "Estanqueidad ✓" },
        ],
        cert: "EST",
        image: piletaImg,
      },
      {
        name: "Pileta de Acumulación",
        nameEn: "Accumulation Tank",
        cap: "80 m³",
        specs: [
          { k: "Fluidos", v: "Agua / Lodo" },
          { k: "Soporte", v: "Sobre patines" },
          { k: "Certificación", v: "Estanqueidad ✓" },
        ],
        cert: "EST",
        image: hero1,
      },
    ],
  },
  {
    groupKey: "groupBombas",
    items: [
      {
        name: "Bomba de Agua 8x6",
        nameEn: "Water Pump 8x6",
        cap: "100 HP",
        specs: [
          { k: "Modelo", v: "8x6x14" },
          { k: "Aplicación", v: "Transferencia de líquidos" },
        ],
        cert: null,
        image: hero2,
      },
      {
        name: "Bomba de Agua 4x3",
        nameEn: "Water Pump 4x3",
        cap: "25 HP",
        specs: [
          { k: "Modelo", v: "4x3x13" },
          { k: "Aplicación", v: "Transferencia de líquidos" },
        ],
        cert: null,
        image: hero3,
      },
    ],
  },
  {
    groupKey: "groupCisternas",
    items: [
      {
        name: "Cisterna de Gasoil",
        nameEn: "Fuel Cistern",
        cap: "20 m³",
        specs: [{ k: "Fluido", v: "Gasoil" }],
        cert: null,
        image: hero4,
      },
      {
        name: "Cisterna de Gasoil",
        nameEn: "Fuel Cistern",
        cap: "10 m³",
        specs: [{ k: "Fluido", v: "Gasoil" }],
        cert: null,
        image: hero1,
      },
      {
        name: "Cisterna de Gasoil",
        nameEn: "Fuel Cistern",
        cap: "5 m³",
        specs: [{ k: "Fluido", v: "Gasoil" }],
        cert: null,
        image: hero2,
      },
      {
        name: "Cisterna de Agua",
        nameEn: "Water Cistern",
        cap: "3.500 lts",
        specs: [{ k: "Fluido", v: "Agua" }],
        cert: null,
        image: hero3,
      },
    ],
  },
  {
    groupKey: "groupTanques",
    items: [
      {
        name: "Tanque de Agua 3×9",
        nameEn: "Water Tank 3×9",
        cap: "3 × 9 m",
        specs: [{ k: "Dimensiones", v: "3 × 9 metros" }],
        cert: null,
        image: hero4,
      },
      {
        name: "Tanque de Agua 3×12",
        nameEn: "Water Tank 3×12",
        cap: "3 × 12 m",
        specs: [{ k: "Dimensiones", v: "3 × 12 metros" }],
        cert: null,
        image: piletaImg,
      },
    ],
  },
  {
    groupKey: "groupTableros",
    items: [
      {
        name: "Tablero Eléctrico Antiexplosivo",
        nameEn: "Explosion-Proof Electrical Panel",
        cap: null,
        specs: [
          { k: "Tipo", v: "Antiexplosivo" },
          { k: "Aplicación", v: "Zonas de riesgo Oil & Gas" },
        ],
        cert: null,
        image: piletaAgitacionImg,
      },
    ],
  },
];

// Flatten con campo category
const allEquipment = equipmentData.flatMap((group) =>
  group.items.map((item) => ({ ...item, category: group.groupKey }))
);

type FlatItem = (typeof allEquipment)[0];

const CATEGORIES = [
  "groupPiletas",
  "groupBombas",
  "groupCisternas",
  "groupTanques",
  "groupTableros",
] as const;

// ── Card ───────────────────────────────────────────────────────────────────────
function EquipCard({
  item,
  lang,
  sipcoLabel,
  estLabel,
}: {
  item: FlatItem;
  lang: string;
  sipcoLabel: string;
  estLabel: string;
}) {
  const name = lang === "en" ? item.nameEn : item.name;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="group relative bg-[#13161D] border border-[#1A1F28] hover:border-[#9D031A] transition-colors duration-300 flex flex-col rounded-sm overflow-hidden"
    >
      {/* Imagen */}
      <div className="h-44 w-full bg-[#0A0D12] flex items-center justify-center p-6 border-b border-[#1A1F28]">
        <img
          src={item.image}
          alt={name}
          className="h-full w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5">
        <h4 className="text-white text-sm font-black uppercase tracking-[0.06em] leading-snug mb-2">
          {name}
        </h4>

        {item.cap && (
          <div className="font-mono text-[#9D031A] text-2xl font-bold leading-none mb-4">
            {item.cap}
          </div>
        )}

        {item.specs.length > 0 && (
          <div className="mt-auto space-y-2.5 pt-3 border-t border-[#1A1F28]">
            {item.specs.map((spec, si) => (
              <div
                key={si}
                className="flex items-baseline justify-between gap-3"
              >
                <span className="text-[#5A6575] text-[10px] uppercase tracking-widest font-bold shrink-0">
                  {spec.k}
                </span>
                <span className="font-mono text-[#C0CAD4] text-[11px] text-right">
                  {spec.v}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Badge Certificación */}
      {item.cert && (
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white bg-[#0F215A]/90 border border-[#0F215A] px-2 py-1 rounded-sm shadow-md">
            {item.cert === "SIPCO" ? sipcoLabel : estLabel}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// ── Sidebar filter button ──────────────────────────────────────────────────────
function SidebarFilter({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 text-left transition-colors duration-150 group ${
        active
          ? "bg-[#9D031A]/10 border-l-2 border-[#9D031A] text-white"
          : "border-l-2 border-transparent text-[#5A6575] hover:text-[#C0CAD4] hover:border-[#2A2F38]"
      }`}
    >
      <span className="text-[11px] font-black uppercase tracking-[0.12em] leading-none">
        {label}
      </span>
      <span
        className={`font-mono text-[10px] shrink-0 ml-2 ${
          active ? "text-[#9D031A]" : "text-[#3A4050]"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

// ── Mobile chip ────────────────────────────────────────────────────────────────
function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] border transition-colors duration-150 ${
        active
          ? "bg-[#9D031A] border-[#9D031A] text-white"
          : "bg-transparent border-[#2A2F38] text-[#5A6575] hover:border-[#9D031A] hover:text-white"
      }`}
    >
      {label}
      <span className={`font-mono ${active ? "text-white/70" : "text-[#3A4050]"}`}>
        {count}
      </span>
    </button>
  );
}

// ── Componente principal ───────────────────────────────────────────────────────
export default function Equipment() {
  const { t, lang } = useLanguage();
  const e = t.equipment;
  const [activeCategory, setActiveCategory] = useState("all");

  const getLabel = (key: string) => e[key as keyof typeof e] as string;
  const getCatCount = (key: string) =>
    allEquipment.filter((item) => item.category === key).length;

  const filtered =
    activeCategory === "all"
      ? allEquipment
      : allEquipment.filter((item) => item.category === activeCategory);

  const allLabel = lang === "es" ? "TODOS" : "ALL";
  const filterByLabel = lang === "es" ? "Filtrar por" : "Filter by";
  const unitsLabel = lang === "es" ? "equipos" : "units";

  return (
    <section id="alquiler" className="bg-[#0E1016] text-[#E8ECF0] relative">
      {/* ── HERO ── */}
      <div className="relative min-h-screen flex flex-col justify-center border-b border-[#1C2028] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-0.75 hazard-stripe opacity-40" />
        <motion.div
          className="absolute left-0 top-0 w-0.75 bg-[#9D031A] opacity-40"
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.2, ease: EASE }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-20">
          <motion.div
            className="section-label mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {e.overline}
          </motion.div>

          <div className="mb-12">
            {[e.title, e.titleHighlight].map((line, li) => (
              <div key={li} className="overflow-hidden mb-[-0.06em] last:mb-0">
                <motion.h1
                  className={`title-primary ${li === 1 ? "text-[#9D031A]" : ""}`}
                  initial={{ y: "105%", skewX: -1, opacity: 0 }}
                  animate={{ y: "0%", skewX: 0, opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0.1 + li * 0.1, ease: EASE }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            className="text-base md:text-lg text-[#C0C8D4] max-w-2xl leading-relaxed font-medium mb-14"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          >
            {e.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap border-t border-[#1C2028]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          >
            {[
              { v: "12", l: lang === "es" ? "Equipos Disponibles" : "Available Units" },
              { v: "5", l: lang === "es" ? "Categorías" : "Categories" },
              { v: "2013", l: lang === "es" ? "En Operación Desde" : "Operating Since" },
              { v: "100%", l: lang === "es" ? "Flota Propia" : "Own Fleet" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col px-6 py-5 border-r border-[#1C2028] last:border-r-0 first:pl-0"
              >
                <span className="text-2xl font-black text-[#9D031A] leading-none">
                  {stat.v}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#555] mt-1">
                  {stat.l}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── CATÁLOGO ── */}
      <div className="bg-[#0A0D12] py-16">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">

          {/* Mobile chips */}
          <div
            className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
            <Chip
              label={allLabel}
              count={allEquipment.length}
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            />
            {CATEGORIES.map((cat) => (
              <Chip
                key={cat}
                label={getLabel(cat)}
                count={getCatCount(cat)}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          <div className="flex gap-10">
            {/* Sidebar desktop */}
            <aside className="hidden lg:flex flex-col w-48 shrink-0 sticky top-28 self-start">
              <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#9D031A] mb-5">
                {filterByLabel}
              </p>
              <div className="space-y-0.5">
                <SidebarFilter
                  label={allLabel}
                  count={allEquipment.length}
                  active={activeCategory === "all"}
                  onClick={() => setActiveCategory("all")}
                />
                {CATEGORIES.map((cat) => (
                  <SidebarFilter
                    key={cat}
                    label={getLabel(cat)}
                    count={getCatCount(cat)}
                    active={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                  />
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-[#1A1F28]">
                <span className="font-mono text-[#9D031A] text-2xl font-bold leading-none">
                  {filtered.length}
                </span>
                <span className="text-[#4A5568] text-[10px] uppercase tracking-[0.15em] ml-2">
                  {unitsLabel}
                </span>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="popLayout">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((item, idx) => (
                    <EquipCard
                      key={`${item.category}-${item.name}-${item.cap}-${idx}`}
                      item={item}
                      lang={lang}
                      sipcoLabel={e.sipco as string}
                      estLabel={e.estanqueidad as string}
                    />
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-8 md:px-16 lg:px-20 py-12 mt-12 border-t border-[#1A1F28]">
          <div>
            <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#9D031A] mb-2">
              {lang === "es" ? "Consultas" : "Inquiries"}
            </p>
            <p className="text-sm text-[#4A5568] max-w-lg leading-relaxed">
              {lang === "es"
                ? "¿Necesitás alguno de estos equipos? Consultanos disponibilidad y condiciones de alquiler."
                : "Need any of this equipment? Contact us to check availability and rental terms."}
            </p>
          </div>
          <Link
            to="/consulta"
            className="shrink-0 bg-[#9D031A] text-white px-8 py-3.5 uppercase tracking-[0.12em] hover:bg-[#B3041F] transition text-[12px] pulse-glow font-black italic"
          >
            {e.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
