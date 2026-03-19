import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyRolcka from "../components/WhyRolcka";
import Technology from "../components/Technology";
import ScrollTicker from "../components/ScrollTicker";
import Clients from "../components/Clients";
import ConsultaTeaser from "../components/ConsultaTeaser";
import CTABanner from "../components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollTicker />
      <Services />
      <WhyRolcka />
      <Technology />
      <ScrollTicker />
      <Clients />
      <ConsultaTeaser />
      <CTABanner />
    </>
  );
}
