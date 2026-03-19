import { useEffect } from "react";
import Fabrication from "../components/Fabrication";
import ConsultaBanner from "../components/ConsultaBanner";
import CTABanner from "../components/CTABanner";

export default function FabricacionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Fabrication />
      <ConsultaBanner tipo="piletas" />
      <CTABanner />
    </div>
  );
}
