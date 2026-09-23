const CARDS = [
  { icon: '⌨️', title: 'Software Developer', sub: 'Technopark, Kerala' },
  { icon: '🥁', title: 'Drummer', sub: 'Rhythm & Performance' },
  { icon: '🧠', title: 'Mentalist', sub: 'Mind & Mystery' },
  { icon: '📍', title: 'Trivandrum, Kerala', sub: 'India' },
]

export default function About() {
  return (
    <section id="about" className="bg-surface py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,6vw,4rem)]">
      <div className="grid md:grid-cols-2 gap-16 max-w-[1100px] mx-auto items-center">
        <div className="reveal">
          <p className="text-[.72rem] font-semibold tracking-[.2em] text-accentlite uppercase mb-3">Who I Am</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.08] text-text">
            Three passions,
            <br />
            one person.
          </h2>
          <div className="w-11 h-[3px] bg-accent rounded-sm my-5" />
          <p className="text-dim leading-[1.8] mb-4 text-[.95rem]">
            I'm Sreedersh Sudarsh, a Software Developer based in Technopark, Kerala. I build thoughtful digital
            products using modern web technologies — and when I'm not at a keyboard, I'm behind a drum kit or
            reading minds.
          </p>
          <p className="text-dim leading-[1.8] mb-4 text-[.95rem]">
            My three worlds of technology, music and mentalism all share the same core: deep focus, pattern
            recognition and the satisfaction of making something that works perfectly.
          </p>
        </div>
        <div className="reveal d2 grid grid-cols-2 gap-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-white border-[1.5px] border-border rounded-xl p-5 text-center shadow-sm2 hover:border-accent hover:-translate-y-1 hover:shadow-md2 transition-all"
            >
              <div className="text-[1.7rem] mb-2">{c.icon}</div>
              <div className="font-display font-bold text-sm text-text">{c.title}</div>
              <div className="text-[.74rem] text-dim mt-1">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
