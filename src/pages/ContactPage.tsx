import { Link } from "react-router-dom";
import { FileText, Phone, MapPin, Download, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const icons = {
  form: FileText,
  pdf: Download,
  phone: Phone,
  visit: MapPin,
};

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;
  const cta = t.cta;

  return (
    <>
      {/* PAGE HERO */}
      <section className="border-b border-[#1C2028] pt-32 pb-20 px-8 md:px-16 lg:px-20 relative overflow-hidden grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="section-label mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-[#9D031A] transition">
              HOME
            </Link>
            <span className="text-[#333]">→</span>
            <span className="text-[#9D031A]">
              {t.nav.contact.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="section-label mb-4">{c.overline}</div>
              <h1 className="title-primary leading-[0.9]">{c.title}</h1>
            </div>
            <div>
              <p className="text-base md:text-lg text-[#AAA] leading-relaxed mb-6">
                {cta.subtitle}
              </p>
              {/* Quick action: WA */}
              <a
                href="https://wa.me/5492993323446"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 uppercase tracking-[0.1em] text-sm hover:bg-[#1ebe5d] transition font-black italic"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-12 hazard-stripe h-[3px] w-full opacity-30" />
        </div>
      </section>

      {/* 4 CTA OPTIONS */}
      <section className="border-b border-[#1C2028] py-12 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {cta.options.map((option, i) => {
              const Icon = icons[option.icon as keyof typeof icons];
              const isWA = option.icon === "phone";
              return (
                <a
                  key={i}
                  href={option.href}
                  target={isWA ? "_blank" : undefined}
                  rel={isWA ? "noopener noreferrer" : undefined}
                  className={`group border border-[#1C2028] p-8 flex flex-col justify-between min-h-[200px] hover:border-[#9D031A] hover:bg-[#121620] transition-all duration-300 relative overflow-hidden ${
                    i < 3 ? "md:border-r-0" : ""
                  }`}
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#9D031A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-5">
                      <div className="w-10 h-10 border border-[#252B35] group-hover:border-[#9D031A] flex items-center justify-center transition-colors">
                        <Icon
                          size={18}
                          className="text-[#BBB] group-hover:text-[#9D031A] transition-colors"
                        />
                      </div>
                      <div className="section-label text-[#333] group-hover:text-[#9D031A] transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <h3 className="text-2xl mb-2 group-hover:text-[#9D031A] transition-colors font-black uppercase tracking-tight">
                      {option.label}
                    </h3>
                    <p className="text-xs text-[#C8C8D4] leading-relaxed">
                      {option.desc}
                    </p>
                  </div>
                  <div className="relative z-10 mt-6 pt-3 border-t border-[#1C2028] group-hover:border-[#9D031A]/30 transition-colors">
                    <span className="text-xs text-[#BBB] group-hover:text-[#9D031A] tracking-[0.15em] uppercase transition-colors font-bold">
                      {option.action}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-28 md:py-36 px-8 md:px-16 lg:px-20 flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* FORM */}
            <div>
              <div className="section-label mb-4">{cta.options[0].label}</div>
              <h2 className="text-4xl md:text-5xl mb-10 font-black uppercase tracking-tight">
                {cta.options[0].action.replace(" →", "")}
              </h2>

              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={c.namePh}
                    className="bg-[#1C2028] border border-[#252B35] px-5 py-4 text-sm placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all font-bold"
                    style={{ fontSize: "0.8rem" }}
                  />
                  <input
                    type="email"
                    placeholder={c.emailPh}
                    className="bg-[#1C2028] border border-[#252B35] px-5 py-4 text-sm placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all font-bold"
                    style={{ fontSize: "0.8rem" }}
                  />
                </div>
                <input
                  type="text"
                  placeholder={c.companyPh}
                  className="bg-[#1C2028] border border-[#252B35] px-5 py-4 text-[0.8rem] font-bold placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all"
                />
                <select
                  defaultValue=""
                  className="bg-[#1C2028] border border-[#252B35] px-5 py-4 text-[0.8rem] font-bold focus:outline-none focus:border-[#9D031A] text-[#BBB] transition-all appearance-none cursor-pointer hover:border-[#9D031A]"
                >
                  <option value="" disabled>
                    {c.serviceLabel}
                  </option>
                  {c.serviceOptions.map((opt, i) => (
                    <option
                      key={i}
                      value={opt}
                      className="text-[#E8ECF0] bg-[#1C2028]"
                    >
                      {opt}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder={c.messagePh}
                  rows={6}
                  className="bg-[#1C2028] border border-[#252B35] px-5 py-4 text-sm placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all resize-none font-bold"
                  style={{ fontSize: "0.8rem" }}
                />
                <button
                  type="submit"
                  className="bg-[#9D031A] text-[#0E1016] px-10 py-4 uppercase tracking-[0.15em] hover:bg-[#B3041F] transition-all hover:scale-[1.02] pulse-glow font-black italic text-[1.2rem]"
                >
                  {c.submitBtn}
                </button>
              </form>
            </div>

            {/* INFO */}
            <div className="flex flex-col justify-between py-4">
              <div>
                <h3 className="text-3xl md:text-4xl mb-8 font-black uppercase tracking-tight">
                  {c.infoTitle}
                </h3>
                <div className="space-y-6">
                  <div className="border-l-[3px] border-[#9D031A] pl-4">
                    <div className="section-label mb-1">{c.locLabel}</div>
                    <p className="font-black italic text-[1.05rem] uppercase">
                      {c.locValue}
                    </p>
                    <p className="text-sm text-[#C8C8D4]">{c.locSub}</p>
                  </div>
                  <div className="border-l-[3px] border-[#9D031A] pl-4">
                    <div className="section-label mb-1">{c.phonesLabel}</div>
                    {["+54 9 299 332-3446", "+54 9 299 536-1704"].map(
                      (phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s|-/g, "")}`}
                          className="hover:text-[#9D031A] block transition-colors font-black italic text-[1.05rem]"
                        >
                          {phone}
                        </a>
                      ),
                    )}
                  </div>
                  <div className="border-l-[3px] border-[#9D031A] pl-4">
                    <div className="section-label mb-1">{c.emailLabel}</div>
                    {[
                      "administracion@rolcka.com",
                      "info@rolcka.com",
                      "rolckasrl@gmail.com",
                    ].map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="hover:text-[#9D031A] block text-sm transition-colors font-bold uppercase tracking-tight"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                  <div className="border-l-[3px] border-[#9D031A] pl-4">
                    <div className="section-label mb-1">{c.webLabel}</div>
                    <a
                      href="https://www.rolcka.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#9D031A] transition-colors font-black italic text-[1.05rem]"
                    >
                      www.rolcka.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#252B35] pt-8 mt-8">
                <div className="text-[10px] uppercase text-[#333] space-y-1 font-bold tracking-[0.15em]">
                  <div>ROLCKA SRL</div>
                  <div>PARQUE INDUSTRIAL NQN</div>
                  <div>{c.statusLine}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
