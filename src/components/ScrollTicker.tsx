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

type Client =
  | { name: string; logo: string }
  | { name: string; logo?: undefined };

const CLIENTS: Client[] = [
  { name: "TSB", logo: logoTSB },
  { name: "TGS", logo: logoTGS },
  { name: "INGENIERÍA TERRA", logo: logoTerra },
  { name: "PRODENG", logo: logoProdEng },
  { name: "TREATER", logo: logoTreater },
  { name: "DIPAR", logo: logoDipar },
  { name: "SL GROUP", logo: logoSLGroup },
  { name: "CCI OIL SERVICES", logo: logoCCI },
  { name: "EXPRO", logo: logoExpro },
  { name: "TECNAGEN", logo: logoTecnagen },
  { name: "MARBAR" },
  { name: "RAKIDUAMN" },
  { name: "OPS" },
  { name: "HALLIBURTON" },
  { name: "HIDROFRAC" },
  { name: "YPF" },
  { name: "PLUSPETROL" },
  { name: "PAMPA ENERGÍA" },
];

// Triplicamos para loop continuo
const ITEMS = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function ScrollTicker() {
  return (
    <div className="overflow-hidden relative bg-[#0A0D12] border-y border-[#1C2028]">
      {/* Label fijo izquierda */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center px-6 border-r border-[#1C2028]">
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#9D031A] whitespace-nowrap">
          Clientes
        </span>
      </div>

      {/* Fade sobre el label */}
      <div
        className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #0A0D12 55%, transparent)",
        }}
      />
      {/* Fade derecha */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(-90deg, #0A0D12 30%, transparent)",
        }}
      />

      <div
        className="flex items-center whitespace-nowrap py-6"
        style={{
          animation: "ticker 55s linear infinite",
          width: "max-content",
        }}
      >
        {ITEMS.map((client, i) => (
          <div key={i} className="flex items-center">
            {client.logo ? (
              <div className="px-10 flex items-center justify-center h-20">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                  draggable={false}
                />
              </div>
            ) : (
              <span className="px-10 text-[#3A4050] uppercase tracking-[0.25em] hover:text-[#777] transition-colors cursor-default font-black italic text-[0.7rem]">
                {client.name}
              </span>
            )}
            <span className="text-[#9D031A] opacity-15 text-[0.35rem]">◆</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
