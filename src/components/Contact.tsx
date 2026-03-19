import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section
      id="contacto"
      className="relative border-t border-[#252B35] py-28 md:py-36 lg:py-44 flex justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl px-8 md:px-16 lg:px-20">
        <div className="section-label mb-4">
          {c.overline}
        </div>
        <h2
          className="text-6xl md:text-7xl mb-16"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {c.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* LEFT: CONTACT FORM */}
          <div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder={c.namePh}
                className="bg-[#1C2028] border border-[#252B35] px-6 py-4 text-sm placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all duration-200"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}
              />
              <input
                type="email"
                placeholder={c.emailPh}
                className="bg-[#1C2028] border border-[#252B35] px-6 py-4 text-sm placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all duration-200"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}
              />
              <input
                type="text"
                placeholder={c.companyPh}
                className="bg-[#1C2028] border border-[#252B35] px-6 py-4 text-sm placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all duration-200"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}
              />

              {/* Service selector */}
              <select
                defaultValue=""
                className="bg-[#1C2028] border border-[#252B35] px-6 py-4 text-sm focus:outline-none focus:border-[#9D031A] text-[#BBB] transition-all duration-200 appearance-none cursor-pointer hover:border-[#9D031A]"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}
              >
                <option value="" disabled>
                  {c.serviceLabel}
                </option>
                {c.serviceOptions.map((opt, i) => (
                  <option key={i} value={opt} className="text-[#E8ECF0] bg-[#1C2028]">
                    {opt}
                  </option>
                ))}
              </select>

              <textarea
                placeholder={c.messagePh}
                rows={5}
                className="bg-[#1C2028] border border-[#252B35] px-6 py-4 text-sm placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all duration-200 resize-none"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}
              />
              <button
                type="submit"
                className="bg-[#9D031A] text-[#0E1016] px-10 py-4 uppercase tracking-[0.15em] hover:bg-[#B3041F] transition-all duration-300 hover:scale-[1.02] pulse-glow"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", letterSpacing: "0.15em" }}
              >
                {c.submitBtn}
              </button>
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="flex flex-col justify-between py-4">
            <div>
              <h3
                className="text-3xl md:text-4xl mb-8"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {c.infoTitle}
              </h3>
              <div className="space-y-6">
                {/* Location */}
                <div className="border-l-[3px] border-[#9D031A] pl-4">
                  <div className="section-label mb-1">{c.locLabel}</div>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
                    {c.locValue}
                  </p>
                  <p className="text-sm text-[#C8C8D4]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {c.locSub}
                  </p>
                </div>

                {/* Phones */}
                <div className="border-l-[3px] border-[#9D031A] pl-4">
                  <div className="section-label mb-1">{c.phonesLabel}</div>
                  <a
                    href="tel:+5492993323446"
                    className="hover:text-[#9D031A] block transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}
                  >
                    +54 9 299 332-3446
                  </a>
                </div>

                {/* Email */}
                <div className="border-l-[3px] border-[#9D031A] pl-4">
                  <div className="section-label mb-1">{c.emailLabel}</div>
                  {["administracion@rolcka.com", "info@rolcka.com", "rolckasrl@gmail.com"].map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="hover:text-[#9D031A] block text-sm transition-colors"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {email}
                    </a>
                  ))}
                </div>

                {/* Web */}
                <div className="border-l-[3px] border-[#9D031A] pl-4">
                  <div className="section-label mb-1">{c.webLabel}</div>
                  <a
                    href="https://www.rolcka.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#9D031A] transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}
                  >
                    www.rolcka.com
                  </a>
                </div>
              </div>
            </div>

            {/* Technical footer */}
            <div className="border-t border-[#252B35] pt-8 mt-8">
              <div
                className="text-xs uppercase text-[#333] space-y-1"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em" }}
              >
                <div>ROLCKA SRL</div>
                <div>PARQUE INDUSTRIAL NQN</div>
                <div>{c.statusLine}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
