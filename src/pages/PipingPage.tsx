import { useEffect } from "react";
import Piping from "../components/Piping";
import CTABanner from "../components/CTABanner";

export default function PipingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Piping />
      <CTABanner />
    </div>
  );
}
