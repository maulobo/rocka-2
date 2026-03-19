import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import NosotrosPage from "./pages/NosotrosPage";
import ContactPage from "./pages/ContactPage";
import AlquilerPage from "./pages/AlquilerPage";
import FabricacionPage from "./pages/FabricacionPage";
import ArenadoPage from "./pages/ArenadoPage";
import PipingPage from "./pages/PipingPage";
import ClientesPage from "./pages/ClientesPage";
import ConsultaPage from "./pages/ConsultaPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#1C1F27] text-[#E8ECF0] noise-overlay">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/servicios/alquiler" element={<AlquilerPage />} />
              <Route path="/servicios/fabricacion" element={<FabricacionPage />} />
              <Route path="/servicios/arenado" element={<ArenadoPage />} />
              <Route path="/servicios/piping" element={<PipingPage />} />
<Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/clientes" element={<ClientesPage />} />
              <Route path="/consulta" element={<ConsultaPage />} />
              {/* EN aliases */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<NosotrosPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/clients" element={<ClientesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
