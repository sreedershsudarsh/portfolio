const TECH = [
  { icon: '⚛️', name: 'React.js' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '🟡', name: 'JavaScript' },
  { icon: '🔄', name: 'Redux' },
  { icon: '🌐', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '💨', name: 'Tailwind' },
  { icon: '🔌', name: 'REST APIs' },
  { icon: '🐙', name: 'Git' },
  { icon: '📦', name: 'Node.js' },
]

export default function Developer() {
  return (
    <section id="developer" className="bg-white py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,6vw,4rem)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal flex justify-between items-start flex-wrap gap-8 mb-12">
          <div>
            <p className="text-[.72rem] font-semibold tracking-[.2em] text-accentlite uppercase mb-3">What I Build</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-text">Software Developer</h2>
            <div className="w-11 h-[3px] bg-accent rounded-sm my-5" />
          </div>
          <div className="flex items-center gap-2 text-accent text-[.83rem] font-medium px-4 py-2 bg-accentbg rounded-full border border-borderdark">
            📍 Technopark, Kerala, India
          </div>
        </div>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(105px,1fr))' }}>
          {TECH.map((t, i) => (
            <div
              key={t.name}
              className={`reveal d${(i % 3) + 1} bg-white border-[1.5px] border-border rounded-xl px-3 py-4 text-center shadow-sm2 hover:border-accent hover:-translate-y-1 hover:scale-[1.04] hover:shadow-green transition-all`}
            >
              <div className="text-[1.9rem] mb-2">{t.icon}</div>
              <div className="text-[.7rem] font-semibold text-accent tracking-wide">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
