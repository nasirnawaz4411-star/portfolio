export default function ServiceCard({ title, description }) {
  return (
    <article className="glass-card p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-300 leading-7">{description}</p>
    </article>
  );
}
