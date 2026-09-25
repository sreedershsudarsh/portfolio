import { socialLinks } from "../data/socialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-surface py-[clamp(3rem,5vw,6rem)] px-[clamp(1rem,6vw,4rem)]"
    >
      <div className="max-w-[980px] mx-auto text-center">
        <p className="reveal text-[.72rem] font-semibold tracking-[.2em] text-accentlite uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="reveal d1 font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-text">
          Contact
        </h2>
        <div className="reveal d2 w-11 h-[3px] bg-accent rounded-sm mx-auto my-5" />
        <p className="reveal d2 text-dim text-[.95rem] mb-10 leading-[1.75]">
          Whether it's a project, a collaboration, a performance or just a
          conversation — reach out. I'm always open to interesting ideas.
        </p>
   <div
  className="reveal d3 grid gap-4 mb-10"
  style={{
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  }}
>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener"
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-[#25d366] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(37,211,102,.15)] transition-all"
          >
            <div className="mb-2 flex items-center justify-center">
              <img
                src="/assets/images/whatsapp.png"
                alt=""
                className="w-9 h-9 object-contain"
              />
            </div>{" "}
            <div className="text-[.74rem] font-bold text-text">WhatsApp</div>
            <div className="text-[.68rem] text-dim mt-1">+91 xxxxxxxx_76</div>
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener"
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-[#e1306c] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(225,48,108,.12)] transition-all"
          >
            <div className="mb-2 flex items-center justify-center">
              <img
                src="/assets/images/instagram.png"
                alt=""
                className="w-8 h-8 object-contain"
              />
            </div>{" "}
            <div className="text-[.74rem] font-bold text-text">Instagram</div>
            <div className="text-[.68rem] text-dim mt-1">xxxxx_zr</div>
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-accent hover:-translate-y-1 hover:shadow-md2 transition-all"
          >
            <div className="mb-2 flex items-center justify-center">
              <img
                src="/assets/images/email.png"
                alt=""
                className="w-9 h-9 object-contain"
              />
            </div>{" "}
            <div className="text-[.74rem] font-bold text-text">Email</div>
            <div className="text-[.68rem] text-dim mt-1">xxxxxx_@gmail.com</div>
          </a>
          <a
            href={`mailto:${socialLinks.github}`}
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-accent hover:-translate-y-1 hover:shadow-md2 transition-all"
          >
            <div className="mb-2 flex items-center justify-center">
              <img
                src="/assets/images/github.png"
                alt=""
                className="w-6 h-6 object-contain"
              />
            </div>{" "}
            <div className="text-[.74rem] font-bold text-text">Email</div>
            <div className="text-[.68rem] text-dim mt-1">xxxxxx_@gmail.com</div>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener"
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-accent hover:-translate-y-1 hover:shadow-md2 transition-all"
          >
            <div className="mb-2 flex items-center justify-center">
              <img
                src="/assets/images/linkedin.png"
                alt=""
                className="w-7 h-7 object-contain"
              />
            </div>
            <div className="text-[.74rem] font-bold text-text">LinkedIn</div>
            <div className="text-[.68rem] text-dim mt-1">s_xxxxxxx_h</div>
          </a>
          <a
            href={socialLinks.phone}
            target="_blank"
            rel="noopener"
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-accent hover:-translate-y-1 hover:shadow-md2 transition-all"
          >
            <div className="mb-2 flex items-center justify-center">
              <img
                src="/assets/images/phone.png"
                alt=""
                className="w-7 h-7 object-contain"
              />
            </div>
            <div className="text-[.74rem] font-bold text-text">Phone</div>
            <div className="text-[.68rem] text-dim mt-1">+91 xxxxxxxx_76</div>
          </a>
        </div>
        <div className="reveal d4 flex justify-center gap-3">
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener"
            title="WhatsApp"
            className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-[#25d366] hover:text-[#25d366] hover:-translate-y-1 transition-all"
          >
            <img
              src="/assets/images/whatsapp.png"
              alt=""
              className="w-6 h-6 object-contain"
            />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener"
            title="Instagram"
            className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-[#e1306c] hover:text-[#e1306c] hover:-translate-y-1 transition-all"
          >
            <img
              src="/assets/images/instagram.png"
              alt=""
              className="w-5 h-5 object-contain"
            />
          </a>
          <a
            href={socialLinks.email}
            target="_blank"
            rel="noopener"
            title="email"
            className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-accent hover:text-accent hover:-translate-y-1 transition-all"
          >
            <img
              src="/assets/images/email.png"
              alt=""
              className="w-6 h-6 object-contain"
            />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener"
            title="GitHub"
            className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-accent hover:text-accent hover:-translate-y-1 transition-all"
          >
            <img
              src="/assets/images/github.png"
              alt=""
              className="w-5 h-5 object-contain"
            />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener"
            title="LinkedIn"
            className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-accent hover:text-accent hover:-translate-y-1 transition-all"
          >
            <img
              src="/assets/images/linkedin.png"
              alt=""
              className="w-4 h-4 object-contain"
            />
          </a>
          <a
            href={socialLinks.phone}
            target="_blank"
            rel="noopener"
            title="phone"
            className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-accent hover:text-accent hover:-translate-y-1 transition-all"
          >
            <img
              src="/assets/images/phone.png"
              alt=""
              className="w-4 h-4 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
