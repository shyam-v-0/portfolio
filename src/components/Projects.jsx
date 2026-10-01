import { FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900/40 border-y border-slate-800/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          subtitle="Built with React.js, Material UI, Tailwind CSS and React Router."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-glow flex flex-col bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <FaRocket className="text-sky-400" />
                </span>
                <span className="text-[11px] text-slate-400 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">
                  {p.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-4">{p.title}</h3>
              <p className="text-sky-400 text-sm font-medium">{p.subtitle}</p>
              <ul className="text-sm text-slate-400 mt-3 space-y-2 leading-relaxed flex-1">
                {p.description.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-sky-500">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-[11px] bg-slate-800 text-sky-300 border border-slate-700 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-lg border border-slate-700 transition-colors"
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>
                {p.live && p.live !== "#" ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 py-2.5 rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-slate-800/60 text-slate-500 py-2.5 rounded-lg border border-slate-800 cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="text-center text-xs text-slate-500 mt-6">
          * Portfolio Website is live at shyam-v.netlify.app — other Live demos coming soon.
        </p>
      </div>
    </section>
  );
}
