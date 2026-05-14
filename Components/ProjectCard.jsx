export default function ProjectCard({ title, description, stack, github, demo }) {
  return (
    <article className="glass-card group p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-300">Featured</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">
        {stack.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}
