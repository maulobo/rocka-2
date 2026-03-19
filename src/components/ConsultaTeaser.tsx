import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE, fadeUp } from "../lib/animations";

export default function ConsultaTeaser() {
  return (
    <section className="bg-[#9D031A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Overline */}
          <motion.div
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            Solicitud de equipo
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="title-primary leading-[0.88]"
            style={{ color: "#ffffff" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
          >
            PEDIDO
            <br />
            A MEDIDA
          </motion.h2>

          {/* Body copy */}
          <motion.p
            className="text-sm md:text-base leading-relaxed max-w-md"
            style={{ color: "rgba(255,255,255,0.75)" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          >
            Completá el formulario con las especificaciones del equipo que
            necesitás. Te respondemos con disponibilidad, condiciones y
            tiempos de entrega.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
          >
            {/* Hover wrapper — isolated from scroll-in animation */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ transition: "transform 0.2s ease", willChange: "transform" }}
            >
              <Link
                to="/consulta"
                className="inline-block bg-white text-[#9D031A] font-black uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#f0f0f0] transition-colors duration-200"
              >
                SOLICITÁ TU EQUIPO →
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
