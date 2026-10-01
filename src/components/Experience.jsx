import { FaBriefcase } from "react-icons/fa";
import { experience } from "../data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Career" title="Experience" subtitle="Where I've worked and what I shipped." />
        <div className="space-y-6">
          {experience.map((e) => (
            <article
              key={e.company}
              className="card-glow bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-2xl p-7 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex gap-3">
                  <span className="w-11 h-11 shrink-0 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                    <FaBriefcase className="text-sky-400" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{e.role}</h3>
                    <p className="text-sky-400 font-medium mt-1">{e.company}</p>
                  </div>
                </div>
                <span className="text-xs bg-sky-500/10 text-sky-300 border border-sky-500/20 px-3 py-1.5 rounded-full">
                  Internship
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-slate-300 text-[15px] leading-relaxed">
                {e.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-sky-400 mt-0.5">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {e.tech.map((t) => (
                  <span key={t} className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
