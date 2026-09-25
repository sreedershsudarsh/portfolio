const JOBS = [
  {
    co: "Current Employer · Technopark",
    role: "Software Developer",
    dur: "2024 – Present",
    desc: "Building and maintaining scalable web applications using React.js and TypeScript. Designing and developing reusable, dynamic components to create efficient and scalable user interfaces. Collaborating with cross-functional teams to deliver high-quality digital products.",
    tags: ["React.js", "TypeScript", "Zustand", "REST API", "Tailwind", "Git"],
  },
  {
    co: "Previous Role",
    role: "Frontend Developer",
    dur: "2023 – 2024",
    desc: "Developed responsive user interfaces and component libraries. Optimized application performance and improved user experience across multiple products.",
    tags: ["React.js", "Next.js", "JavaScript", "Redux", "CSS3", "Git"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-surface py-[clamp(3rem,5vw,6rem)] px-[clamp(1rem,6vw,4rem)]"
    >
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal text-[.72rem] font-semibold tracking-[.2em] text-accentlite uppercase mb-3">
          Career
        </p>
        <h2 className="reveal d1 font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-text">
          Experience
        </h2>
        <div className="reveal d2 w-11 h-[3px] bg-accent rounded-sm my-5" />
        <div className="max-w-[700px] mx-auto relative">
          <div className="absolute left-5 top-0 bottom-0 w-[1.5px] bg-border" />
          {JOBS.map((j, i) => (
            <div
              key={j.role}
              className={`reveal ${i > 0 ? "d2" : ""} relative pl-[58px] pb-12`}
            >
              <div className="absolute left-3 top-1 w-[18px] h-[18px] rounded-full border-[2.5px] border-accent bg-white shadow-sm2">
                <div className="absolute inset-[3px] rounded-full bg-accent" />
              </div>
              <div className="text-[.7rem] font-bold tracking-[.12em] text-accentlite uppercase mb-1">
                {j.co}
              </div>
              <div className="font-display font-bold text-[1.12rem] text-text">
                {j.role}
              </div>
              <div className="text-[.76rem] text-dim my-1.5 mb-3">{j.dur}</div>
              <div className="text-[.85rem] text-dim leading-[1.75]">
                {j.desc}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {j.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[.66rem] font-semibold px-2.5 py-1 rounded-full bg-accentbg text-accent border border-borderdark"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
