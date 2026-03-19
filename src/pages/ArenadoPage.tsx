import { useEffect } from "react";
import Sandblasting from "../components/Sandblasting";
import CTABanner from "../components/CTABanner";

export default function ArenadoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Sandblasting />
      <CTABanner />
    </div>
  );
}
