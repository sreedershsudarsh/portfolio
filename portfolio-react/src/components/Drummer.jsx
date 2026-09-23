const BARS = [
  { h: 14, delay: '0s' },
  { h: 28, delay: '.1s' },
  { h: 20, delay: '.2s' },
  { h: 38, delay: '.15s' },
  { h: 18, delay: '.3s' },
  { h: 32, delay: '.05s' },
  { h: 22, delay: '.25s' },
  { h: 12, delay: '.35s' },
]

export default function Drummer() {
  return (
    <section
      id="drummer"
      className="py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,6vw,4rem)] relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0faf4 0%, #fff 50%, #e8f5ee 100%)' }}
    >
      <div className="grid md:grid-cols-2 gap-16 max-w-[1100px] mx-auto items-center">
        <div className="reveal-left">
          <div className="rounded-[18px] overflow-hidden aspect-[4/5] border-[1.5px] border-border shadow-lg2">
            <img
              src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&q=80"
              alt="Drummer performing live"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex items-end gap-1 h-11 mt-6">
            {BARS.map((b, i) => (
              <div
                key={i}
                className="w-1 bg-accent rounded-sm opacity-70 animate-wave"
                style={{ height: b.h, animationDelay: b.delay }}
              />
            ))}
          </div>
        </div>
        <div className="reveal-right">
          <p className="text-[.72rem] font-semibold tracking-[.2em] text-accentlite uppercase mb-3">Beyond the Screen</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-text">The Drummer</h2>
          <div className="w-11 h-[3px] bg-accent rounded-sm my-5" />
          <p className="text-dim leading-[1.8] text-[.95rem] mb-4">
            Rhythm is another form of logic. Behind the drum kit, I find the same focus and pattern-recognition
            that drives my work as a developer — just expressed through sound and time.
          </p>
          <p className="text-dim leading-[1.8] text-[.95rem] mb-4">
            Drumming keeps me grounded. It's a discipline that demands full presence, precise timing and the
            ability to hold a groove while others build around it.
          </p>
          <div className="flex gap-10 mt-7">
            <div>
              <div className="font-display text-[2.1rem] font-extrabold text-accent leading-none">8+</div>
              <div className="text-[.72rem] text-dim mt-1 font-medium">Years Playing</div>
            </div>
            <div>
              <div className="font-display text-[2.1rem] font-extrabold text-accent leading-none">Live</div>
              <div className="text-[.72rem] text-dim mt-1 font-medium">Stage Performer</div>
            </div>
            <div>
              <div className="font-display text-[2.1rem] font-extrabold text-accent leading-none">🥁</div>
              <div className="text-[.72rem] text-dim mt-1 font-medium">Percussion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
