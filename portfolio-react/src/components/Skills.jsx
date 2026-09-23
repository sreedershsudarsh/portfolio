import { useEffect, useRef } from 'react'

const GROUPS = [
  {
    title: 'Frontend',
    skills: [
      { label: 'React.js', pct: 92 },
      { label: 'TypeScript', pct: 85 },
      { label: 'JavaScript', pct: 90 },
      { label: 'Tailwind CSS', pct: 88 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { label: 'Redux', pct: 80 },
      { label: 'REST APIs', pct: 87 },
      { label: 'Git', pct: 83 },
    ],
  },
]

function SkillBar({ label, pct }) {
  const fillRef = useRef(null)

  useEffect(() => {
    const el = fillRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.width = pct + '%'
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [pct])

  return (
    <div className="flex items-center gap-4">
      <div className="text-[.8rem] text-textsec min-w-[108px] font-medium">{label}</div>
      <div className="flex-1 h-[5px] bg-surface2 rounded-full overflow-hidden">
        <div
          ref={fillRef}
          className="h-full rounded-full transition-[width] duration-[1200ms] ease-out"
          style={{ width: 0, background: 'linear-gradient(90deg, #166534, #22c55e)' }}
        />
      </div>
      <div className="text-[.72rem] text-dim min-w-[36px] text-right font-medium">{pct}%</div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,6vw,4rem)]">
      <div className="max-w-[860px] mx-auto">
        <p className="reveal text-[.72rem] font-semibold tracking-[.2em] text-accentlite uppercase mb-3">Proficiency</p>
        <h2 className="reveal d1 font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-text">Skills</h2>
        <div className="reveal d2 w-11 h-[3px] bg-accent rounded-sm my-5" />
        {GROUPS.map((g, i) => (
          <div key={g.title} className={`reveal d${i + 2} mb-10`}>
            <div className="font-display font-bold text-[.88rem] text-accent mb-4 tracking-wide uppercase">{g.title}</div>
            <div className="flex flex-col gap-3.5">
              {g.skills.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
