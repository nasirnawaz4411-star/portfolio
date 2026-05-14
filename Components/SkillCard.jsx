export default function SkillCard({ icon: Icon, title }) {
  return (
    <div className="glass-card group flex items-center gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}
