import { useEffect, useRef } from "react";
// @ts-ignore
import RolckaLogo from "./svglogo";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

interface Props {
  onComplete?: () => void;
}

export default function LogoAnimado({ onComplete }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const svg = container.querySelector("svg");
    if (!svg) return;

    const paths = Array.from(svg.querySelectorAll("path")) as SVGPathElement[];
    const lengths = paths.map((p) => p.getTotalLength());

    // ── Initial state: invisible stroke, no fill ──────────────────────────
    paths.forEach((path, i) => {
      const len = lengths[i];
      path.style.fill = "none";
      path.style.stroke = "white";
      path.style.strokeWidth = "5";
      path.style.strokeLinecap = "round";
      path.style.strokeLinejoin = "round";
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
      path.style.filter = "drop-shadow(0 0 6px rgba(255,255,255,0.4))";
    });

    const TOTAL = paths.length;        // 9 paths
    const PATH_DUR = 900;              // ms each path takes to draw
    const STAGGER = 120;               // ms between each path start
    const TOTAL_DUR = PATH_DUR + STAGGER * (TOTAL - 1);
    const FILL_DUR = 600;              // ms for white fill to fade in

    let rafId: number;
    let phase: "drawing" | "filling" = "drawing";
    let fillStart = 0;
    const drawStart = performance.now();

    const tick = (now: number) => {
      if (phase === "drawing") {
        const elapsed = now - drawStart;

        paths.forEach((path, i) => {
          const pathElapsed = Math.max(0, elapsed - i * STAGGER);
          const progress = Math.min(pathElapsed / PATH_DUR, 1);
          const eased = easeOutCubic(progress);
          path.style.strokeDashoffset = String(lengths[i] * (1 - eased));
        });

        if (elapsed >= TOTAL_DUR) {
          phase = "filling";
          fillStart = now;
        }

        rafId = requestAnimationFrame(tick);
      } else {
        // ── Fill phase: fade in white, fade out stroke ────────────────────
        const elapsed = now - fillStart;
        const progress = Math.min(elapsed / FILL_DUR, 1);
        const eased = easeOutCubic(progress);

        paths.forEach((path) => {
          const isBlue = path.classList.contains("blue");
          path.style.fill = isBlue
            ? `rgba(37,99,235,${eased})`
            : `rgba(204,34,34,${eased})`;
          path.style.strokeOpacity = String(1 - eased);
        });

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          // Done
          onComplete?.();
        }
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-[#0E1016] flex items-center justify-center"
    >
      <RolckaLogo
        fill="none"
        style={{ width: "min(55vw, 520px)" }}
      />
    </div>
  );
}
