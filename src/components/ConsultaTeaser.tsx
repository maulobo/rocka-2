import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE, fadeUp, stagger } from "../lib/animations";

const equipos = [
  {
    tipo: "piletas",
    label: "Piletas",
    sub: "Acumulacion · Agitacion · Ensayo",
    num: "01",
  },
];

export default function ConsultaTeaser() {
  return (
    <section className="bg-[#0E1016] border-t border-[#1C2028] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[3px] hazard-stripe opacity-20" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — headline */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <motion.div
              className="section-label"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              Solicitud de equipo
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                className="title-primary leading-[0.88]"
                initial={{ y: "105%", skewX: -2, opacity: 0 }}
                whileInView={{ y: 0, skewX: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                PEDIDO
                <br />
                <span className="text-[#9D031A]">A MEDIDA</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-sm md:text-base text-[#8A95A5] leading-relaxed max-w-sm"
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

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
            >
              <Link
                to="/consulta"
                className="inline-flex items-center gap-4 group mt-2"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#9D031A] group-hover:tracking-[0.3em] transition-all duration-500">
                  Ver formulario
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 stroke-[2.5] stroke-[#9D031A] group-hover:translate-x-1.5 transition-transform duration-300"
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

          {/* Right — equipment cards */}
          <motion.div
            className="flex flex-col"
            variants={stagger(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {equipos.map((eq, i) => (
              <motion.div key={eq.tipo} variants={fadeUp}>
                <Link
                  to={`/consulta?tipo=${eq.tipo}`}
                  className={`group flex items-center justify-between px-8 py-7 border-b border-[#1C2028] hover:bg-[#0A0D12] transition-all duration-300 relative overflow-hidden ${
                    i === 0 ? "border-t border-[#1C2028]" : ""
                  }`}
                >
                  {/* Hover accent line */}
                  <div className="absolute left-0 top-0 w-[3px] h-0 bg-[#9D031A] group-hover:h-full transition-all duration-300" />

                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-mono text-[#333] group-hover:text-[#9D031A] transition-colors duration-300">
                      {eq.num}
                    </span>
                    <div>
                      <div className="text-lg md:text-xl font-black uppercase tracking-tight text-[#C0C8D4] group-hover:text-white transition-colors duration-300">
                        {eq.label}
                      </div>
                      <div className="text-[9px] uppercase tracking-[0.18em] text-[#3A4455] group-hover:text-[#5A6575] transition-colors duration-300 mt-0.5">
                        {eq.sub}
                      </div>
                    </div>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 stroke-[2] stroke-[#333] group-hover:stroke-[#9D031A] group-hover:translate-x-1 transition-all duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-7-7 7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}

            {/* Bottom note */}
            <motion.div
              className="pt-6 px-2"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#333] leading-relaxed">
                Alquiler · Compra · Fabricacion a medida
                <br />
                Respuesta en menos de 24 hs hábiles
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
