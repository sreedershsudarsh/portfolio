import { socialLinks } from '../data/socialLinks'

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,6vw,4rem)]">
      <div className="max-w-[680px] mx-auto text-center">
        <p className="reveal text-[.72rem] font-semibold tracking-[.2em] text-accentlite uppercase mb-3">Get In Touch</p>
        <h2 className="reveal d1 font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-text">Contact</h2>
        <div className="reveal d2 w-11 h-[3px] bg-accent rounded-sm mx-auto my-5" />
        <p className="reveal d2 text-dim text-[.95rem] mb-10 leading-[1.75]">
          Whether it's a project, a collaboration, a performance or just a conversation — reach out. I'm always open
          to interesting ideas.
        </p>
        <div className="reveal d3 grid gap-4 mb-10" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))' }}>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener"
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-[#25d366] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(37,211,102,.15)] transition-all"
          >
            <div className="text-2xl mb-2">💬</div>
            <div className="text-[.74rem] font-bold text-text">WhatsApp</div>
            <div className="text-[.68rem] text-dim mt-1">+91 8921544076</div>
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener"
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-[#e1306c] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(225,48,108,.12)] transition-all"
          >
            <div className="text-2xl mb-2">📸</div>
            <div className="text-[.74rem] font-bold text-text">Instagram</div>
            <div className="text-[.68rem] text-dim mt-1">@made_by_zr</div>
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-accent hover:-translate-y-1 hover:shadow-md2 transition-all"
          >
            <div className="text-2xl mb-2">✉️</div>
            <div className="text-[.74rem] font-bold text-text">Email</div>
            <div className="text-[.68rem] text-dim mt-1">sreedershsudarsh704</div>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener"
            className="bg-white border-[1.5px] border-border rounded-xl p-5 no-underline block shadow-sm2 hover:border-accent hover:-translate-y-1 hover:shadow-md2 transition-all"
          >
            <div className="text-2xl mb-2">💼</div>
            <div className="text-[.74rem] font-bold text-text">LinkedIn</div>
            <div className="text-[.68rem] text-dim mt-1">Sreedersh Sudarsh</div>
          </a>
        </div>
        <div className="reveal d4 flex justify-center gap-3">
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener" title="WhatsApp" className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-[#25d366] hover:text-[#25d366] hover:-translate-y-1 transition-all">💬</a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener" title="Instagram" className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-[#e1306c] hover:text-[#e1306c] hover:-translate-y-1 transition-all">📸</a>
          <a href={socialLinks.github} target="_blank" rel="noopener" title="GitHub" className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-accent hover:text-accent hover:-translate-y-1 transition-all">🐙</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener" title="LinkedIn" className="w-[42px] h-[42px] rounded-[9px] border-[1.5px] border-border flex items-center justify-center bg-white hover:border-accent hover:text-accent hover:-translate-y-1 transition-all">💼</a>
        </div>
      </div>
    </section>
  )
}
