import { socialLinks } from '../data/socialLinks'

export default function Footer() {
  return (
    <footer className="bg-text border-t border-white/10 py-10 px-[clamp(1rem,6vw,4rem)] flex items-center justify-between flex-wrap gap-6">
      <div>
        <div className="font-display font-extrabold text-base text-white">Sreedersh Sudarsh</div>
        <div className="text-[.7rem] text-white/45 mt-1">Software Developer · Drummer · Mentalist</div>
      </div>
      <div className="flex gap-2.5">
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener" title="WhatsApp" className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-white/55 no-underline hover:border-[#25d366] hover:text-[#25d366] hover:-translate-y-1 transition-all">💬</a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener" title="Instagram" className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-white/55 no-underline hover:border-[#e1306c] hover:text-[#e1306c] hover:-translate-y-1 transition-all">📸</a>
        <a href={socialLinks.github} target="_blank" rel="noopener" title="GitHub" className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-white/55 no-underline hover:border-accentlite hover:text-accentlite hover:-translate-y-1 transition-all">🐙</a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener" title="LinkedIn" className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-white/55 no-underline hover:border-accentlite hover:text-accentlite hover:-translate-y-1 transition-all">💼</a>
      </div>
      <div className="text-[.68rem] text-white/35">© 2026 Sreedersh Sudarsh. All rights reserved.</div>
    </footer>
  )
}
