import { useLanguage } from "../context/LanguageContext";

export default function Technology() {
  const { t } = useLanguage();
  const tech = t.technology;

  return (
    <section
      id="tecnologia"
      className="border-b border-[#1C2028] py-28 md:py-36 lg:py-44 flex justify-center relative overflow-hidden"
    >
      <div className="w-full max-w-7xl px-8 md:px-16 lg:px-20 relative z-10">
        <div className="section-label mb-6">{tech.overline}</div>
        <h2 className="title-primary mb-16 md:mb-20">
          {tech.title}{" "}
          <span className="text-[#9D031A]">{tech.titleHighlight}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="border border-[#1C2028] p-10 md:p-14 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-full h-[3px] hazard-stripe opacity-20" />
            <div className="section-label mb-6">{tech.partner}</div>
            <h3 className="text-5xl md:text-6xl mb-6 font-black uppercase tracking-tighter leading-none">
              {tech.sipcotitle}
              <br />
              <span className="text-[#0F215A]">{tech.sipcohighlight}</span>
            </h3>
            <p className="text-base text-[#AAA] leading-relaxed">
              {tech.sipcoDesc}
            </p>
          </div>

          <div className="border border-[#1C2028] md:border-l-0 p-10 md:p-14 lg:p-16 section-deep-blue relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              {[
                { label: tech.funcLabel, value: tech.funcValue },
                { label: tech.appLabel, value: tech.appValue },
                { label: tech.sysLabel, value: tech.sysValue },
              ].map((row, i) => (
                <div key={i}>
                  <div className="text-[10px] text-[#BBB] uppercase tracking-[0.2em] mb-2 font-bold">
                    {row.label}
                  </div>
                  <div className="text-xl font-black uppercase italic tracking-tight">
                    {row.value}
                  </div>
                </div>
              ))}
              <div className="border-t border-[#1C2028] pt-6">
                <div className="text-[10px] text-[#0F215A] tracking-[0.2em] font-bold">
                  {tech.partnerTag}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
