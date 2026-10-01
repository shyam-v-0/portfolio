import { FaCode, FaPaintBrush, FaServer, FaDatabase, FaRobot, FaTools } from "react-icons/fa";
import { skills } from "../data";
import SectionHeading from "./SectionHeading";

const icons = {
  Languages: FaCode,
  Frontend: FaPaintBrush,
  "Backend & APIs": FaServer,
  Database: FaDatabase,
  "AI Concepts": FaRobot,
  "Tools & Platforms": FaTools,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900/40 border-y border-slate-800/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Tech Stack"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s) => {
            const Icon = icons[s.category] || FaCode;
            return (
              <div
                key={s.category}
                className="card-glow bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <Icon className="text-sky-400 text-xl" />
                </div>
                <h3 className="text-white font-semibold mb-3">{s.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-full hover:border-sky-500/50 hover:text-sky-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
