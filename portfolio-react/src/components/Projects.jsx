const PROJECTS = [
  {
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    alt: 'Web application project',
    name: 'Project One',
    desc: 'A modern web application built with React and TypeScript, featuring real-time data and a clean interface.',
    tags: ['React', 'TypeScript', 'REST API'],
  },
  {
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
    alt: 'Analytics dashboard project',
    name: 'Project Two',
    desc: 'An analytics dashboard with interactive charts, responsive design and optimized performance.',
    tags: ['Redux', 'Tailwind', 'Charts'],
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    alt: 'Platform project',
    name: 'Project Three',
    desc: 'A full-featured platform integrating multiple APIs with a seamless user experience.',
    tags: ['JavaScript', 'Node.js', 'Git'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,6vw,4rem)]">
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal text-[.72rem] font-semibold tracking-[.2em] text-accentlite uppercase mb-3">What I've Built</p>
        <h2 className="reveal d1 font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-text">Projects</h2>
        <div className="reveal d2 w-11 h-[3px] bg-accent rounded-sm my-5" />
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))' }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className={`reveal d${i + 1} group bg-white border-[1.5px] border-border rounded-2xl overflow-hidden shadow-sm2 hover:border-accent hover:-translate-y-2 hover:shadow-lg2 transition-all`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img src={p.img} alt={p.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-[rgba(15,23,42,.55)] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="px-4 py-2 rounded-md bg-accent text-white text-xs font-bold no-underline hover:scale-105 hover:bg-accentmid transition-transform">Live</a>
                  <a href="#" className="px-4 py-2 rounded-md border-[1.5px] border-white text-white text-xs font-bold no-underline hover:bg-white/15 transition-colors">GitHub</a>
                </div>
              </div>
              <div className="p-5">
                <div className="font-display font-bold text-base text-text mb-1.5">{p.name}</div>
                <div className="text-[.82rem] text-dim leading-[1.6] mb-3.5">{p.desc}</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[.66rem] font-semibold px-2.5 py-1 rounded-full bg-accentbg text-accent border border-borderdark">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
