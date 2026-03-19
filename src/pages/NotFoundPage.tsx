import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0E1016] flex flex-col items-center justify-center text-center px-8">
      <div className="text-[8rem] md:text-[12rem] font-black text-[#9D031A]/10 leading-none select-none">
        404
      </div>
      <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#E8ECF0] -mt-8">
        PÁGINA NO ENCONTRADA
      </h1>
      <p className="text-sm text-[#8A95A5] mt-4 mb-10">
        La URL que buscás no existe o fue removida.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-3 bg-[#9D031A] text-white px-8 py-3.5 uppercase tracking-[0.15em] text-xs font-black hover:bg-[#B3041F] transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
