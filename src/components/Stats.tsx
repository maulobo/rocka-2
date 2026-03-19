import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
  start,
}: {
  target: number;
  suffix: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const startVal = target > 100 ? target - 50 : 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-b border-[#1C2028] py-24 md:py-32 relative overflow-hidden section-deep-blue"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <div className="section-label mb-6">{t.stats.overline}</div>
            <h2 className="title-primary">{t.stats.title}</h2>
          </div>
          {/* International badge */}
          <div className="mt-8 md:mt-0 border border-[#0F215A]/40 bg-[#0F215A]/5 p-5 max-w-xs pulse-glow-blue">
            <div className="section-label mb-2" style={{ color: "#0F215A" }}>
              {t.stats.intlLabel}
            </div>
            <div className="text-base text-[#E8ECF0] font-bold uppercase tracking-tight">
              {t.stats.intlMissions}
            </div>
          </div>
        </div>

        {/* Hazard divider */}
        <div className="hazard-stripe h-[3px] w-full opacity-20 mb-12" />

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {t.stats.items.map((item, i) => (
            <div
              key={i}
              className={`p-8 md:p-10 lg:p-12 border-[#1C2028] ${
                i < 3
                  ? "border-b md:border-b-0 md:border-r border-b"
                  : "border-b md:border-b-0"
              } ${i === 0 || i === 2 ? "border-r md:border-r" : ""} group relative overflow-hidden`}
              style={{ borderWidth: "1px" }}
            >
              {/* Ghost number */}
              <div
                className="absolute -bottom-4 -right-2 text-[6rem] font-black leading-none pointer-events-none select-none opacity-[0.04]"
                style={{ color: "#9D031A" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <div className="text-5xl md:text-6xl lg:text-7xl text-[#9D031A] mb-3 leading-none font-black italic">
                  <AnimatedCounter
                    target={item.value}
                    suffix={item.suffix}
                    start={started}
                  />
                </div>
                <div className="text-xs text-[#C8C8D4] uppercase tracking-[0.15em] font-bold">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
