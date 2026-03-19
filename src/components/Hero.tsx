import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LogoAnimado from "./LogoAnimado";
import { EASE, fadeUp } from "../lib/animations";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";
import hero4 from "../assets/hero/hero4.png";

type Phase = "black" | "drawing" | "fadingOut" | "done";
type WipingLevel = "initial" | "step0" | "step1";

const WIPE_DUR = 1.3;
const WIPE_EASE = [0.85, 0, 0.15, 1];

export default function Hero() {
  const { t, lang } = useLanguage();
  const [phase, setPhase] = useState<Phase>("black");
  const [wipingLevel, setWipingLevel] = useState<WipingLevel>("initial");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const isDone = phase === "done";
  // En desktop, sincronizar con el inicio del wipe. En mobile, con isDone.
  const textVisible = isDesktop ? wipingLevel !== "initial" : isDone;

  // Ref para evitar stale closure en event handlers
  const wipingLevelRef = useRef(wipingLevel);
  useEffect(() => { wipingLevelRef.current = wipingLevel; }, [wipingLevel]);

  // Manejo Resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fase 1: Logo Draw
  useEffect(() => {
    const timer = setTimeout(() => setPhase("drawing"), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDrawingComplete = () => {
    setTimeout(() => {
      setPhase("fadingOut");
      setTimeout(() => {
        setPhase("done");
        setTimeout(() => setWipingLevel("step0"), 50); // Gatillar el Wipe Init
      }, 900);
    }, 300);
  };

  // ── Intercepcion Scroll/Wheel para Desk ─────────────────────────────
  useEffect(() => {
    if (!isDesktop || phase !== "done") return;

    let cooldown = false;
    let startY = 0;

    const handleWheel = (e: WheelEvent) => {
      const atTop = window.scrollY <= 10;
      const wl = wipingLevelRef.current;

      if (wl === "step0") {
        e.preventDefault(); // bloquear siempre en step0
        if (e.deltaY > 0 && !cooldown) { // baja → disparar wipe
          cooldown = true;
          setWipingLevel("step1");
          setTimeout(() => { cooldown = false; }, WIPE_DUR * 1000 + 300);
        }
      } else if (wl === "step1") {
        if (e.deltaY < 0 && atTop) { // sube al tope → deshacer wipe
          e.preventDefault();
          if (!cooldown) {
            cooldown = true;
            setWipingLevel("step0");
            setTimeout(() => { cooldown = false; }, WIPE_DUR * 1000 + 300);
          }
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = startY - e.touches[0].clientY;
      const atTop = window.scrollY <= 10;
      const wl = wipingLevelRef.current;

      if (wl === "step0") {
        e.preventDefault();
        if (deltaY > 20 && !cooldown) {
          cooldown = true;
          setWipingLevel("step1");
          setTimeout(() => { cooldown = false; }, WIPE_DUR * 1000 + 300);
        }
      } else if (wl === "step1") {
        if (deltaY < -20 && atTop) {
          e.preventDefault();
          if (!cooldown) {
            cooldown = true;
            setWipingLevel("step0");
            setTimeout(() => { cooldown = false; }, WIPE_DUR * 1000 + 300);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDesktop, phase]); // sin wipingLevel — se lee via ref

  // ── Bloqueo de scroll hasta que termine la animación del wipe ───────
  useEffect(() => {
    if (!isDesktop || phase !== "done") return;

    // Siempre bloqueamos. Si pasamos a step1, esperamos que termine el wipe antes de liberar.
    document.body.style.overflow = "hidden";

    if (wipingLevel === "step1") {
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
      }, Math.round(WIPE_DUR * 1000) + 200);
      return () => { clearTimeout(timer); document.body.style.overflow = ""; };
    }

    return () => { document.body.style.overflow = ""; };
  }, [isDesktop, phase, wipingLevel]);

  // ── Bloques de Contenido Reutilizables ──────────────────────────────
  const services = t.services.items.slice(0, 3);
  const stripPhotos = [hero2, hero3, hero4];

  const LeftContent = (
    <div className="w-full lg:w-[42vw] shrink-0 h-full flex flex-col justify-center px-10 md:px-16 lg:px-20 relative text-left box-border">
      <div className="absolute left-0 top-0 bottom-0 w-1 hazard-stripe opacity-20 pointer-events-none" />
      <motion.div
        className="section-label mb-8"
        initial="hidden"
        animate={textVisible ? "show" : "hidden"}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
      >
        {t.hero.overline}
      </motion.div>
      <div className="mb-10">
        {[t.hero.line1, t.hero.line2, t.hero.line3].map((line, i) => (
          <div key={i} className="overflow-hidden mb-[-0.05em] last:mb-0">
            <motion.span
              className={`title-primary block ${i === 1 ? "text-[#9D031A]" : ""}`}
              initial={{ y: "105%", skewX: -2, opacity: 0 }}
              animate={textVisible ? { y: "0%", skewX: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: EASE }}
            >
              {line}
            </motion.span>
          </div>
        ))}
      </div>
      <motion.p
        className="text-sm md:text-base text-[#888] leading-relaxed max-w-sm mb-10 font-medium"
        initial="hidden"
        animate={textVisible ? "show" : "hidden"}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
      >
        {t.hero.subtitle}
      </motion.p>
      <motion.div
        className="flex flex-wrap gap-4"
        initial="hidden"
        animate={textVisible ? "show" : "hidden"}
        variants={fadeUp}
        transition={{ delay: 0.65, ease: EASE }}
      >
        <Link to="/contacto" className="bg-[#9D031A] text-white px-8 py-4 uppercase tracking-[0.15em] hover:bg-[#B3041F] transition text-sm pulse-glow font-black italic">
          {t.hero.ctaQuote}
        </Link>
        <Link to="/servicios" className="border border-[#0F215A] text-[#0F215A] px-8 py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#0F215A] hover:text-white transition font-bold">
          {t.hero.ctaServices}
        </Link>
      </motion.div>
      <motion.div
        className="flex gap-8 mt-14 pt-8 border-t border-[#1C2028]"
        initial="hidden"
        animate={textVisible ? "show" : "hidden"}
        variants={fadeUp}
        transition={{ delay: 0.8, ease: EASE }}
      >
        {[
          { label: t.hero.since, value: "2013" },
          { label: t.hero.base, value: "Neuquén" },
          { label: t.hero.zone, value: "Cuenca" },
        ].map((item) => (
          <div key={item.label}>
            <div className="text-[9px] text-[#555] uppercase tracking-[0.2em] mb-1 font-bold">{item.label}</div>
            <div className="text-sm text-[#C0C8D4] font-black uppercase">{item.value}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );

  const RightContent = (
    <div className="w-full lg:w-[42vw] shrink-0 h-full flex flex-col justify-center px-10 md:px-16 lg:px-20 relative text-left box-border">
      <div className="absolute right-0 top-0 bottom-0 w-1 hazard-stripe opacity-20 pointer-events-none" />
      <div className="section-label mb-8 tracking-[0.25em] text-[#9D031A]">
        {lang === "es" ? "Visión Corporativa" : "Corporate Vision"}
      </div>
      <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-none">
        {lang === "es" ? "CALIDAD" : "PREMIUM"} <br />
        <span className="text-[#0F215A]">{lang === "es" ? "CERTIFICADA" : "QUALITY"}</span>
      </h2>
      <p className="text-sm md:text-base text-[#888] leading-relaxed max-w-sm mb-10 font-medium">
        {lang === "es"
          ? "Aportamos ingeniería, eficiencia y capacidad de respuesta. Diseñamos soluciones metálicas que impulsan operativamente cada proyecto en la cuenca bajo estándares internacionales."
          : "We deliver engineering, efficiency, and responsiveness. Designing robust metal solutions that drive every operation in the basin matching international tech standards."}
      </p>
      <div>
        <Link to="/nosotros" className="border border-[#0F215A] text-[#0F215A] px-8 py-4 uppercase tracking-[0.15em] hover:bg-[#0F215A] hover:text-[#0E1016] transition font-black text-[12px] inline-block w-fit">
          {lang === "es" ? "Conocé Más" : "Learn More"}
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {phase !== "done" && (
        <div className="fixed inset-0 bg-[#1C1F27] z-[9999]" style={{ opacity: phase === "fadingOut" ? 0 : 1, transition: phase === "fadingOut" ? "opacity 900ms ease-in-out" : "none" }}>
          {phase === "drawing" && <div className="absolute inset-0 pointer-events-none"><LogoAnimado onComplete={handleDrawingComplete} /></div>}
          {(phase === "drawing" || phase === "fadingOut") && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
              <span className="text-[8px] text-[#2A2A2A] uppercase tracking-[0.35em] font-bold" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>ROLCKA SRL</span>
            </div>
          )}
        </div>
      )}

      <section id="hero" className="relative flex flex-col border-b border-[#1C2028]">
        <div className="absolute top-0 left-0 w-full h-[3px] hazard-stripe opacity-40 z-50 pointer-events-none" />

        {/* ── MOBILE LAYOUT ── */}
        {!isDesktop && (
          <div className="flex flex-col">
            <div className="bg-[#0E1016] py-28 relative z-10 border-b-[3px] border-white">
              {LeftContent}
            </div>
            <div className="relative w-full min-h-[60vw]">
              <img src={hero1} alt="Rolcka" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0E1016]/80 via-transparent to-transparent" />
            </div>
            <div className="bg-[#050608] py-24 relative z-10 border-t-[3px] border-white">
              {RightContent}
            </div>
          </div>
        )}

        {/* ── DESKTOP LAYOUT ── */}
        {isDesktop && (
          <div className="relative w-full h-screen overflow-hidden">
            {/* Fondo Oscuro / Fallback */}
            <div className="absolute inset-0 bg-[#0E1016] z-0" />

            {/* Imagen Principal */}
            <div className="absolute inset-0 z-10">
              <img src={hero1} alt="Rolcka" className="w-full h-full object-cover" style={{ filter: "brightness(0.65) saturate(0.85)" }} />
              <div className="absolute inset-0 bg-linear-to-r from-[#0E1016]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0E1016]/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 right-10 z-10 hidden lg:block">
                <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  NEUQUÉN · ARGENTINA
                </span>
              </div>
            </div>

            {/* PANEL IZQUIERDO */}
            <motion.div
              className={`absolute top-0 left-0 h-full bg-[#0E1016] z-20 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.15)] ${wipingLevel === "step1" ? "" : "border-r-[4px] border-white"}`}
              initial={{ width: "100%" }}
              animate={{ width: wipingLevel === "initial" ? "100%" : wipingLevel === "step0" ? "42%" : "0%" }}
              transition={{ duration: WIPE_DUR, ease: WIPE_EASE }}
            >
              {LeftContent}
            </motion.div>

            {/* PANEL DERECHO */}
            <motion.div
              className={`absolute top-0 right-0 h-full bg-[#0A0D12] z-20 overflow-hidden text-white flex shadow-[-10px_0_20px_rgba(0,0,0,0.8)] ${wipingLevel === "step0" ? "" : "border-l-[4px] border-white"}`}
              initial={{ width: "0%" }}
              animate={{ width: wipingLevel === "step1" ? "42%" : "0%" }}
              transition={{ duration: WIPE_DUR, ease: WIPE_EASE }}
            >
              {RightContent}
            </motion.div>
          </div>
        )}

        {/* ── SECCIÓN INFERIOR 3 FOTOS ── */}
        <div className="relative z-30 grid grid-cols-1 sm:grid-cols-3 border-t-[4px] border-white">
          {services.map((svc, i) => (
            <Link key={i} to={svc.path} className="relative overflow-hidden group border-b-4 sm:border-b-0 sm:border-r-4 border-white last:border-r-0" style={{ aspectRatio: "4 / 3" }}>
              <img src={stripPhotos[i]} alt={svc.title} className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                <span className="text-[9px] text-[#9D031A] uppercase tracking-[0.25em] font-bold mb-2">{svc.tag}</span>
                <h3 className="text-xl md:text-2xl font-black uppercase leading-tight text-white mb-2">{svc.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed line-clamp-2 font-medium">{svc.hook}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>

      </section>
    </>
  );
}
