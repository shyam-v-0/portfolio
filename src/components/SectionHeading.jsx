export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="text-slate-400 mt-3">{subtitle}</p>}
      <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto mt-5" />
    </div>
  );
}
