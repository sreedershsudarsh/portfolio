import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-3.5 transition-all duration-600 ${
        hidden ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'
      }`}
    >
      <div className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold text-accent tracking-tight overflow-hidden">
        <span className="block animate-slideUp [animation-delay:.2s]">Sreedersh Sudarsh</span>
      </div>
      <div className="text-[.82rem] text-dim tracking-[.16em] uppercase animate-fadeIn [animation-delay:.7s]">
        Software Developer · Drummer · Mentalist
      </div>
      <div className="w-40 h-0.5 bg-border rounded-full overflow-hidden mt-1.5">
        <div className="h-full bg-accentlite w-full origin-left animate-[loadBar_1.4s_cubic-bezier(.22,1,.36,1)_.3s_both]" />
      </div>
      <style>{`@keyframes loadBar { from { width: 0 } to { width: 100% } }`}</style>
    </div>
  )
}
