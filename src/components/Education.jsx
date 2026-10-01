import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { education } from "../data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Learning" title="Education & Certifications" />
        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((e) => (
            <div
              key={e.title}
              className="card-glow bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex justify-between gap-3 items-start">
                <h3 className="font-bold text-white leading-snug flex gap-2">
                  <FaGraduationCap className="text-sky-400 mt-1 shrink-0" />
                  <span>{e.title}</span>
                </h3>
                <span className="shrink-0 text-[11px] text-sky-300 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full">
                  {e.date}
                </span>
              </div>
              <p className="text-slate-300 text-sm mt-2 italic ml-7">{e.school}</p>
              <p className="text-slate-500 text-sm mt-1 ml-7 inline-flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-slate-500 text-xs" /> {e.place}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
