import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import rolckaLogo from "../assets/logo-1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { t, lang, toggleLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isServicesActive =
    location.pathname.startsWith("/servicios") ||
    location.pathname.startsWith("/services");

  const otherLinks = [
    { to: "/nosotros", label: t.nav.about },
    { to: "/clientes", label: t.nav.clients },
    { to: "/contacto", label: t.nav.contact },
  ];

  const isActive = (to: string) =>
    to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(to.split("#")[0]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0E1016]/98 shadow-[0_1px_0_#1C2028]"
            : "bg-[#0E1016]/95"
        } backdrop-blur-md`}
      >
        <div className="hazard-stripe h-[3px] w-full opacity-50" />
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={rolckaLogo}
              alt="Rolcka"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-8 uppercase tracking-widest text-[11px] text-[#C8C8D4] font-bold">
            {/* Home Link */}
            <Link
              to="/"
              className={`hover:text-[#9D031A] transition relative group flex items-center gap-1 ${
                isActive("/") ? "text-[#9D031A]" : ""
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Services dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/servicios"
                className={`hover:text-[#9D031A] transition relative group flex items-center gap-1 ${
                  isServicesActive ? "text-[#9D031A]" : ""
                }`}
              >
                {t.nav.services}
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {/* Dropdown panel — wrapper starts at top-full with pt-2 to bridge the gap */}
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 min-w-67.5 z-50">
                  <div className="bg-[#0E1016] border border-[#1C2028] shadow-xl relative">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#9D031A]" />
                    {t.nav.servicesDropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        onClick={() => setServicesOpen(false)}
                        className="block px-6 py-4 text-[11px] text-[#AAA] hover:text-[#9D031A] hover:bg-[#121620] border-b border-[#1C2028] last:border-b-0 transition-colors tracking-[0.12em] font-bold"
                      >
                        <span className="text-[#9D031A] mr-2">→</span>
                        {item.label.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other nav links */}
            {otherLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-[#9D031A] transition relative group ${
                  isActive(link.to) ? "text-[#9D031A]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Lang + Mobile */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="hidden md:flex items-center gap-2 border border-[#252B35] hover:border-[#9D031A] px-3 py-2 transition-colors group"
              title={`Switch to ${lang === "es" ? "English" : "Español"}`}
            >
              <span className="text-base leading-none">
                {lang === "es" ? "🇦🇷" : "🇺🇸"}
              </span>
              <span className="text-[10px] text-[#BBB] group-hover:text-[#9D031A] uppercase tracking-[0.15em] transition-colors font-bold">
                {lang === "es" ? "ES" : "EN"}
              </span>
            </button>

            {/* CTA Button */}
            <Link
              to="/contacto"
              className="hidden lg:inline-flex bg-[#9D031A] text-[#0E1016] px-5 py-2.5 uppercase tracking-[0.1em] hover:bg-[#B3041F] transition text-[12px] pulse-glow font-black italic"
            >
              {t.nav.contact}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden bg-[#9D031A] text-[#0E1016] p-2"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <div className="border-b border-[#1C2028]" />
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0E1016] z-40 pt-20 md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-0 p-6">
            {/* Home Link */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`hover:text-[#9D031A] py-5 border-b border-[#1C2028] flex items-center gap-4 uppercase tracking-[0.1em] transition text-[1.2rem] font-black italic ${
                isActive("/") ? "text-[#9D031A]" : ""
              }`}
            >
              <span className="text-[#9D031A] text-xs font-bold">01</span>
              {t.nav.home}
            </Link>

            {/* Services with mobile accordion */}
            <div className="border-b border-[#1C2028]">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between py-5 uppercase tracking-[0.1em] transition text-[1.2rem] font-black italic ${
                  isServicesActive ? "text-[#9D031A]" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#9D031A] text-xs font-bold">02</span>
                  {t.nav.services}
                </div>
                <ChevronDown
                  size={16}
                  className={`text-[#BBB] transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 pl-10 flex flex-col gap-0">
                  {t.nav.servicesDropdown.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="py-3 text-[#C8C8D4] hover:text-[#9D031A] text-sm uppercase tracking-[0.1em] transition border-b border-[#1C2028] last:border-b-0 font-bold"
                    >
                      <span className="text-[#9D031A] mr-2">→</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-[#9D031A] py-5 border-b border-[#1C2028] flex items-center gap-4 uppercase tracking-[0.1em] transition text-[1.2rem] font-black italic ${
                  isActive(link.to) ? "text-[#9D031A]" : ""
                }`}
              >
                <span className="text-[#9D031A] text-xs font-bold">
                  {String(i + 3).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            ))}

            {/* Lang toggle mobile */}
            <button
              onClick={() => {
                toggleLang();
                setMenuOpen(false);
              }}
              className="mt-6 flex items-center gap-4 py-5 border-b border-[#1C2028] uppercase tracking-[0.1em] text-[#BBB] hover:text-[#9D031A] transition text-[1.2rem] font-black italic"
            >
              <span className="text-xl leading-none">
                {lang === "es" ? "🇺🇸" : "🇦🇷"}
              </span>
              {lang === "es" ? "English" : "Español"}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
