import { useEffect } from "react";
import ConsultaWizard from "../components/ConsultaWizard";

export default function ConsultaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-[#0E1016] min-h-screen">
      <ConsultaWizard />
    </div>
  );
}
