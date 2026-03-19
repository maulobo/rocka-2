import { useEffect } from "react";
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";
import { EASE, fadeUp, stagger } from "../lib/animations";
import CTABanner from "../components/CTABanner";

import logoTSB from "../assets/logos/Rolcka web -_Cliente - TSB white.png";
import logoTGS from "../assets/logos/Rolcka web -_Cliente - TGS white.png";
import logoTerra from "../assets/logos/Rolcka web -_Cliente - Terra white.png";
import logoProdEng from "../assets/logos/Rolcka web -_Cliente - ProdEng white.png";
import logoTreater from "../assets/logos/Rolcka web -_Cliente - Treater white.png";
import logoDipar from "../assets/logos/Rolcka web -_Cliente -  DIPAR white.png";
import logoSLGroup from "../assets/logos/Rolcka web -_Cliente - SL Group white.png";
import logoCCI from "../assets/logos/Rolcka web -_Cliente - CC white.png";
import logoExpro from "../assets/logos/Rolcka web -_Cliente - Expro white.png";
import logoTecnagen from "../assets/logos/Rolcka web -_Cliente - Tecnagen white.png";

// ── Clientes ──────────────────────────────────────────────────────────────────
type Client = { name: string; logo?: string; sector?: string };

const CLIENTS: Client[] = [
  { name: "TSB", logo: logoTSB, sector: "Oil & Gas Services" },
  { name: "TGS", logo: logoTGS, sector: "Transporte de Gas" },
  { name: "INGENIERÍA TERRA", logo: logoTerra, sector: "Ingeniería Industrial" },
  { name: "PRODENG", logo: logoProdEng, sector: "Production Engineering" },
  { name: "TREATER", logo: logoTreater, sector: "Oil & Gas Services" },
  { name: "DIPAR", logo: logoDipar, sector: "Industrial" },
  { name: "SL GROUP", logo: logoSLGroup, sector: "Oil & Gas" },
  { name: "CCI OIL SERVICES", logo: logoCCI, sector: "Oil & Gas Services" },
  { name: "EXPRO", logo: logoExpro, sector: "Oil & Gas" },
  { name: "TECNAGEN", logo: logoTecnagen, sector: "Tecnología" },
  { name: "MARBAR", sector: "Oil & Gas" },
  { name: "RAKIDUAMN", sector: "Servicios" },
  { name: "OPS", sector: "Oil & Gas Services" },
  { name: "HALLIBURTON", sector: "Oilfield Services" },
  { name: "HIDROFRAC", sector: "Hidráulica Industrial" },
  { name: "YPF", sector: "Operadora" },
  { name: "PLUSPETROL", sector: "Operadora" },
  { name: "PAMPA ENERGÍA", sector: "Energía" },
  { name: "TECPETROL", sector: "Operadora" },
];

// ── Testimonios ───────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "Trabajamos con Rolcka en proyectos de perforación en la Cuenca Neuquina y siempre cumplieron en tiempo y forma. La calidad de los equipos y la respuesta ante imprevistos operativos fue excelente.",
    quoteEn:
      "We worked with Rolcka on drilling projects in the Neuquén Basin and they always delivered on time. Equipment quality and response to operational issues were excellent.",
    name: "Operaciones",
    company: "TSB",
    logo: logoTSB,
  },
  {
    quote:
      "Las piletas de acumulación que nos fabricaron superaron nuestras expectativas en resistencia y practicidad. El equipo técnico de Rolcka entiende los requerimientos de campo a la perfección.",
    quoteEn:
      "The accumulation tanks they built for us exceeded our expectations in both durability and practicality. Rolcka's technical team understands field requirements perfectly.",
    name: "Compras y Logística",
    company: "PRODENG",
    logo: logoProdEng,
  },
  {
    quote:
      "Confiamos en Rolcka para el alquiler de equipos críticos en nuestras operaciones de flowback. Disponibilidad inmediata, certificaciones en regla y soporte técnico permanente.",
    quoteEn:
      "We rely on Rolcka for critical equipment rental in our flowback operations. Immediate availability, proper certifications, and permanent technical support.",
    name: "Gerencia Técnica",
    company: "SL GROUP",
    logo: logoSLGroup,
  },
  {
    quote:
      "La metalúrgica propia de Rolcka nos permite recibir equipos a medida en plazos que otros proveedores simplemente no pueden cumplir. Una empresa que trabaja con los tiempos del sector.",
    quoteEn:
      "Rolcka's own metalworking plant allows us to receive custom equipment within lead times that other suppliers simply can't match. A company that works at industry pace.",
    name: "Área de Proyectos",
    company: "INGENIERÍA TERRA",
    logo: logoTerra,
  },
];

// ── Operadoras (sin contrato formal) ─────────────────────────────────────────
const OPERATORS = ["YPF", "PLUSPETROL", "PAMPA ENERGÍA", "TECPETROL"];

export default function ClientesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lang } = useLanguage();

  const clientsLabel = lang === "es" ? "Clientes" : "Clients";
  const heroTitle = lang === "es" ? "CONFÍAN EN" : "THEY TRUST";
  const heroHighlight = lang === "es" ? "ROLCKA" : "ROLCKA";
  const heroSub =
    lang === "es"
      ? "Más de 18 empresas de la industria Oil & Gas confían en nuestros equipos y servicios para operar en la Cuenca Neuquina."
      : "Over 18 Oil & Gas companies trust our equipment and services for their operations in the Neuquén Basin.";

  const clientsSection = lang === "es" ? "Empresas que nos eligen" : "Companies that choose us";
  const operatorsLabel = lang === "es" ? "Operadoras de Referencia" : "Reference Operators";
  const operatorsSub =
    lang === "es"
      ? "Equipos Rolcka presentes en operaciones de estas compañías a través de nuestros clientes directos."
      : "Rolcka equipment present in operations of these companies through our direct clients.";
  const testimonialsLabel = lang === "es" ? "Lo que dicen nuestros clientes" : "What our clients say";

  return (
    <div className="pt-24 bg-[#0E1016] text-[#E8ECF0]">

      {/* ── HERO ── */}
      <div className="relative min-h-[60vh] flex flex-col justify-center border-b border-[#1C2028] overflow-hidden">
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
            {clientsLabel}
          </motion.div>

          <div className="mb-10">
            {[heroTitle, heroHighlight].map((line, li) => (
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
            {heroSub}
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap border-t border-[#1C2028]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          >
            {[
              { v: "18+", l: lang === "es" ? "Clientes Activos" : "Active Clients" },
              { v: "10+", l: lang === "es" ? "Años en Operación" : "Years Operating" },
              { v: "3", l: lang === "es" ? "Misiones Internacionales" : "Intl. Missions" },
              { v: "100%", l: lang === "es" ? "Satisfacción Operativa" : "Operational Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col px-6 py-5 border-r border-[#1C2028] last:border-r-0 first:pl-0">
                <span className="text-2xl font-black text-[#9D031A] leading-none">{stat.v}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#555] mt-1">{stat.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── GRID DE CLIENTES ── */}
      <div className="bg-[#0A0D12] py-20 border-b border-[#1C2028]">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">

          <motion.div
            className="section-label mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {clientsSection}
          </motion.div>
          <motion.div
            className="w-8 h-[2px] bg-[#9D031A] mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          />

          {/* Logo grid — solo los que tienen logo */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px border border-[#1A1F28]"
            variants={stagger(0.06, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {CLIENTS.filter((c) => c.logo).map((client) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                className="group bg-[#0E1016] border border-[#1A1F28] p-8 flex flex-col items-center justify-center gap-3 aspect-[4/3] hover:bg-[#13161D] hover:border-[#9D031A]/30 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 w-auto object-contain opacity-50 group-hover:opacity-90 transition-all duration-300 grayscale group-hover:grayscale-0"
                  draggable={false}
                />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#3A4050] group-hover:text-[#5A6575] transition-colors text-center">
                  {client.sector}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Clientes sin logo — badges */}
          <div className="mt-8 flex flex-wrap gap-2">
            {CLIENTS.filter((c) => !c.logo && !OPERATORS.includes(c.name)).map((client) => (
              <span
                key={client.name}
                className="border border-[#1A1F28] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#3A4050] hover:text-[#777] hover:border-[#2A2F38] transition-colors"
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── OPERADORAS DE REFERENCIA ── */}
      <div className="py-16 border-b border-[#1C2028]">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="md:w-72 shrink-0">
              <div className="section-label mb-3">{operatorsLabel}</div>
              <p className="text-[#4A5568] text-sm leading-relaxed">{operatorsSub}</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              {OPERATORS.map((op) => (
                <div
                  key={op}
                  className="border border-[#1A1F28] px-5 py-3 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#9D031A] rounded-full opacity-60" />
                  <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#5A6575]">
                    {op}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TESTIMONIOS ── */}
      <div className="bg-[#0A0D12] py-20 border-b border-[#1C2028]">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <motion.div
                className="section-label mb-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                {testimonialsLabel}
              </motion.div>
              <motion.div
                className="w-8 h-[2px] bg-[#9D031A]"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
              />
            </div>
            <p className="text-[#3A4050] text-[10px] font-mono uppercase tracking-[0.2em]">
              {lang === "es" ? "Experiencias reales de operación" : "Real operational experiences"}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            variants={stagger(0.1, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative bg-[#0E1016] border border-[#1A1F28] hover:border-[#9D031A]/40 transition-all duration-300 group overflow-hidden flex flex-col"
              >
                {/* Acento top rojo */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#9D031A] to-transparent" />

                <div className="p-7 md:p-9 flex flex-col gap-5 flex-1">
                  {/* Header: estrellas + badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <svg key={si} viewBox="0 0 20 20" fill="#9D031A" className="w-4 h-4">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0F215A] border border-[#0F215A]/30 bg-[#0F215A]/5 px-2 py-1">
                      {lang === "es" ? "Cliente verificado" : "Verified client"}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-[#C0CAD4] text-sm md:text-[0.92rem] leading-[1.75] flex-1 font-medium relative">
                    <span className="absolute -top-2 -left-1 text-[#9D031A] text-5xl font-serif leading-none opacity-20 select-none">"</span>
                    <span className="relative z-10">{lang === "en" ? t.quoteEn : t.quote}</span>
                  </blockquote>

                  {/* Footer: avatar iniciales + nombre + logo */}
                  <div className="flex items-center justify-between gap-4 pt-5 border-t border-[#1A1F28]">
                    <div className="flex items-center gap-3">
                      {/* Avatar con iniciales */}
                      <div className="w-9 h-9 rounded-full bg-[#9D031A]/10 border border-[#9D031A]/20 flex items-center justify-center shrink-0">
                        <span className="text-[#9D031A] text-[10px] font-black">
                          {t.company.slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white text-[11px] font-black uppercase tracking-[0.1em] leading-none">
                          {t.name}
                        </p>
                        <p className="text-[#9D031A] text-[10px] font-mono uppercase tracking-[0.18em] mt-1 leading-none">
                          {t.company}
                        </p>
                      </div>
                    </div>
                    {t.logo && (
                      <img
                        src={t.logo}
                        alt={t.company}
                        className="h-7 w-auto object-contain opacity-25 group-hover:opacity-55 transition-opacity duration-300 grayscale"
                        draggable={false}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
