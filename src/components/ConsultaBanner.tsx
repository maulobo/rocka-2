import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE, fadeUp } from "../lib/animations";

interface Props {
  tipo?: "piletas" | "bombas" | "cisternas";
}

export default function ConsultaBanner({ tipo }: Props) {
  const href = tipo ? `/consulta?tipo=${tipo}` : "/consulta";

  return (
    <section className="bg-[#090B0F] border-t border-b border-[#1C2028] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] hazard-stripe opacity-30" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

          <motion.div
            className="flex flex-col gap-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="section-label">Consulta personalizada</div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#E8ECF0] leading-tight">
              HACE TU PEDIDO <span className="text-[#9D031A]">A MEDIDA</span>
            </h2>
            <p className="text-sm text-[#8A95A5] max-w-lg leading-relaxed">
              Completá el formulario con las especificaciones del equipo que
              necesitás. Alquiler, compra o fabricacion. Te respondemos en
              menos de 24 hs hábiles.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="shrink-0"
          >
            <Link
              to={href}
              className="inline-flex items-center gap-4 bg-[#9D031A] text-white px-10 py-4 uppercase tracking-[0.15em] text-xs font-black hover:bg-[#B3041F] transition-all duration-300 pulse-glow group"
            >
              Solicitar equipo
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 stroke-[2.5] stroke-white group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
