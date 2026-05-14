export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}
