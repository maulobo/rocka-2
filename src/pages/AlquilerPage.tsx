import { useEffect } from "react";
import Equipment from "../components/Equipment";
import ConsultaBanner from "../components/ConsultaBanner";
import CTABanner from "../components/CTABanner";

export default function AlquilerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Equipment />
      <ConsultaBanner />
      <CTABanner />
    </div>
  );
}
