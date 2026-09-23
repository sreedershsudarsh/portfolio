import { useRef } from 'react'

const PARTICLES = [
  { size: 6, left: '20%', top: '30%', delay: '0s' },
  { size: 4, left: '70%', top: '60%', delay: '1.5s' },
  { size: 5, left: '50%', top: '80%', delay: '.8s' },
  { size: 3, left: '85%', top: '20%', delay: '2.2s' },
  { size: 6, left: '10%', top: '70%', delay: '3s' },
]

const POWERS = [
  { icon: '🔮', label: 'Cold Reading' },
  { icon: '🧠', label: 'Psychology' },
  { icon: '👁️', label: 'Observation' },
  { icon: '🃏', label: 'Prediction' },
]

export default function Mentalist() {
  const imgWrapRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = imgWrapRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%')
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%')
  }

  return (
    <section id="mentalist" className="bg-white py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,6vw,4rem)] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 65% at 60% 50%, rgba(22,163,74,.06) 0%, transparent 70%)' }}
      />
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="text-[.72rem] font-semibold tracking-[.2em] text-accentlite uppercase mb-3">Beyond Perception</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-text">The Mentalist</h2>
            <div className="w-11 h-[3px] bg-accent rounded-sm my-5" />
            <p className="text-dim leading-[1.8] text-[.95rem] mb-4">
              Mentalism is the art of understanding how people think, predict decisions and influence perception —
              using psychology, observation and pattern recognition rather than tricks.
            </p>
            <p className="text-dim leading-[1.8] text-[.95rem] mb-4">
              The same skills that make a good mentalist make a good developer: curiosity about how systems work,
              reading subtle signals and finding solutions others haven't considered yet.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {POWERS.map((p) => (
                <div
                  key={p.label}
                  className="bg-cardalt border-[1.5px] border-border rounded-lg p-3.5 text-[.82rem] text-textsec flex items-center gap-2.5 hover:border-accent hover:shadow-sm2 transition-all"
                >
                  <span className="text-lg">{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
          <div
            ref={imgWrapRef}
            onMouseMove={handleMouseMove}
            className="reveal-right relative rounded-[18px] overflow-hidden aspect-[4/5] border-[1.5px] border-border shadow-lg2 cursor-crosshair group"
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
              {PARTICLES.map((p, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-accent animate-floatGlow"
                  style={{ width: p.size, height: p.size, left: p.left, top: p.top, animationDelay: p.delay }}
                />
              ))}
            </div>
            <div
              className="absolute inset-0 pointer-events-none transition-[background] duration-75"
              style={{ background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(22,163,74,.16), transparent 55%)' }}
            />
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80"
              alt="Mentalist — mind and mystery"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
