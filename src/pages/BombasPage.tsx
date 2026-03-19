import { useEffect } from "react";
import BombasCisternas from "../components/BombasCisternas";
import CTABanner from "../components/CTABanner";

export default function BombasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <BombasCisternas />
      <CTABanner />
    </div>
  );
}
