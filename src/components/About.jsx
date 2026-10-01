import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { profile } from "../data";
import SectionHeading from "./SectionHeading";

export default function About() {
  const info = [
    { Icon: FaMapMarkerAlt, label: "Location", value: profile.location, iconClass: "text-red-400" },
    { Icon: FaEnvelope, label: "Email", value: profile.email, iconClass: "text-sky-400" },
    { Icon: FaPhoneAlt, label: "Phone", value: profile.phone, iconClass: "text-emerald-400" },
    { Icon: FaGlobe, label: "Portfolio Live", value: profile.portfolioLabel, iconClass: "text-sky-300", href: profile.portfolioUrl },
    { Icon: FaLinkedin, label: "LinkedIn", value: profile.linkedinLabel, iconClass: "text-[#0A9BD8]" },
    { Icon: FaGithub, label: "GitHub", value: profile.githubLabel, iconClass: "text-white" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About Me" title="Professional Summary" />
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-2xl p-7 leading-relaxed text-slate-300">
            <p>{profile.summary}</p>
            <p className="mt-4 text-slate-400">
              Currently focused on <span className="text-sky-400 font-medium">React.js + Tailwind CSS</span> frontends,
              clean reusable components, React Router navigation, and learning how to add{" "}
              <span className="text-sky-400 font-medium">AI / RAG</span> superpowers to real apps.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#experience" className="text-sm bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-700 transition-colors">
                My Experience →
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm border border-[#0A66C2]/40 text-sky-300 hover:bg-[#0A66C2]/15 px-4 py-2 rounded-lg transition-colors">
                <FaLinkedin className="text-[#0A9BD8] text-base" />
                LinkedIn Profile
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors">
                <FaGithub className="text-base" />
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="md:col-span-2 bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-2xl p-7">
            <h3 className="text-white font-semibold mb-4">Quick Info</h3>
            <ul className="space-y-3 text-sm">
              {info.map(({ Icon, label, value, iconClass, href }) => {
                const inner = (
                  <>
                    <span className="w-8 h-8 shrink-0 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center">
                      <Icon className={iconClass} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-slate-400 text-xs">{label}</span>
                      <span className="block text-slate-100 break-all">{value}</span>
                    </span>
                  </>
                );
                return href ? (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-slate-800/60 border border-slate-800 rounded-xl px-4 py-3 hover:border-sky-500/40 transition-colors">
                      {inner}
                    </a>
                  </li>
                ) : (
                  <li key={label} className="flex items-center gap-3 bg-slate-800/60 border border-slate-800 rounded-xl px-4 py-3">
                    {inner}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
