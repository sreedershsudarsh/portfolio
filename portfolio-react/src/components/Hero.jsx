import { socialLinks } from "../data/socialLinks";

const SOCIALS = [
  {
    key: "wa",
    href: socialLinks.whatsapp,
    icon: "/assets/images/whatsapp.png",
    tip: "",
    size: "w-7 h-7",
    hover:
      "hover:border-[#25d366] hover:text-[#25d366] hover:shadow-[0_6px_20px_rgba(37,211,102,.3)]",
  },
  {
    key: "ig",
    href: socialLinks.instagram,
    icon: "/assets/images/instagram.png",
    tip: "",
    size: "w-6 h-6",
    hover:
      "hover:border-[#e1306c] hover:text-[#e1306c] hover:shadow-[0_6px_20px_rgba(225,48,108,.3)]",
  },
  {
    key: "eg",
    href: socialLinks.email,
    icon: "/assets/images/email.png",
    tip: "",
    size: "w-7 h-7",
    hover:
      "hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_6px_20px_rgba(3,105,161,0.2)]",
  },
  {
    key: "gh",
    href: socialLinks.github,
    icon: "/assets/images/github.png",
    tip: "",
    size: "w-6 h-6",
    hover: "hover:border-accent hover:text-accent hover:shadow-green",
  },
  {
    key: "li",
    href: socialLinks.linkedin,
    icon: "/assets/images/linkedin.png",
    tip: "",
    size: "w-6 h-6",
    hover:
      "hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_6px_20px_rgba(3,105,161,0.2)]",
  },
  {
    key: "ph",
    href: socialLinks.phone,
    icon: "/assets/images/phone.png",
    tip: "",
    size: "w-6 h-6",
    hover:
      "hover:border-[#25d366] hover:text-[#25d366] hover:shadow-[0_6px_20px_rgba(37,211,102,.3)]",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-[linear-gradient(150deg,#fff_0%,#f0faf4_50%,#fff_100%)]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(22,163,74,.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 80% 50%, rgba(22,197,94,.12) 0%, transparent 70%)",
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-center w-full max-w-[1160px] mx-auto relative z-10 px-4 md:px-0">
        <div>
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[.16em] uppercase text-accent mb-6 animate-fadeIn [animation-delay:.2s]">
            <span className="block w-6 h-0.5 bg-accent rounded-sm" />
            Technopark, Kerala, India
          </div>
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.4rem)] font-extrabold leading-[1.02] text-text animate-slideUp [animation-delay:.35s]">
            Sreedersh
            <br />
            <span className="text-accent">Sudarsh</span>
          </h1>
          <p className="text-[clamp(.95rem,2vw,1.08rem)] text-dim mt-5 mb-4 animate-slideUp [animation-delay:.5s]">
            Software Developer @ Technopark
          </p>
          <div className="flex gap-2.5 flex-wrap mb-6 animate-slideUp [animation-delay:.6s]">
            <span className="border-[1.5px] border-borderdark rounded-full px-4 py-1.5 text-xs font-medium text-accent bg-accentbg">
              ⌨️ Software Developer
            </span>
            <span className="border-[1.5px] border-borderdark rounded-full px-4 py-1.5 text-xs font-medium text-accent bg-accentbg">
              🥁 Drummer
            </span>
            <span className="border-[1.5px] border-borderdark rounded-full px-4 py-1.5 text-xs font-medium text-accent bg-accentbg">
              🧠 Mentalist
            </span>
          </div>
          <p className="text-[clamp(.9rem,1.5vw,.98rem)] text-dim max-w-[44ch] leading-[1.75] animate-slideUp [animation-delay:.7s]">
            Building digital experiences with technology, creativity and
            curiosity.
          </p>
          <div className="flex gap-4 flex-wrap mt-8 animate-slideUp [animation-delay:.85s]">
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg bg-accent text-white font-semibold text-sm no-underline inline-flex items-center gap-2 shadow-green hover:bg-accentmid hover:-translate-y-0.5 transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-lg border-[1.5px] border-borderdark text-accent font-semibold text-sm no-underline inline-flex items-center gap-2 bg-white hover:border-accent hover:bg-accentbg hover:-translate-y-0.5 transition-all"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-3 mt-9 animate-slideUp [animation-delay:1s]">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener"
                title={s.tip}
                className={`group relative w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center text-dim no-underline bg-white transition-all hover:-translate-y-1 ${s.hover}`}
              >
                <span className="flex items-center justify-center">
                  <img
                    src={s.icon}
                    alt={s.tip}
                    className={`${s.size} object-contain`}
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-center animate-fadeIn [animation-delay:.6s]">
          <div
            className="w-[clamp(200px,28vw,300px)] h-[clamp(200px,28vw,300px)] rounded-full border-[1.5px] border-white flex items-center justify-center relative shadow-md2 animate-orbPulse"
            style={{
              background:
                "radial-gradient(circle at 38% 38%, #dcfce7, #fff 70%)",
            }}
          >
            <div className="absolute -inset-5 rounded-full border-[1.5px] border-dashed border-borderdark animate-[spin_10s_linear_infinite_reverse]">
              <div className="absolute w-[9px] h-[9px] rounded-full bg-accent top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#22c55e]" />

              <div className="absolute w-[9px] h-[9px] rounded-full bg-accent top-1/2 right-0 translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#22c55e]" />
            </div>

            <div className="absolute -inset-11 rounded-full border-[1.5px] border-dashed border-borderdark animate-[spin_14s_linear_infinite_reverse]">
              <div className="absolute w-[9px] h-[9px] rounded-full bg-accent top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#22c55e]" />

              <div className="absolute w-[9px] h-[9px] rounded-full bg-accent bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-[0_0_8px_#22c55e]" />
            </div>

            <div className="w-[68%] h-[68%] rounded-full bg-[rgb(153_145_132/100%)] border-[6px] border-accent flex items-center justify-center shadow-sm2 overflow-hidden">
              <img
                src="/assets/images/pic.png"
                alt="Profile"
                className="w-full h-full object-cover scale-[3.7] md:translate-y-[200px] lg:translate-y-[260px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
