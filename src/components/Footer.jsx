import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { profile, navLinks } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/85 backdrop-blur-md px-4 sm:px-6 py-10 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
            SV
          </span>
          <div>
            <div className="font-bold text-white text-sm">SHYAM V — Full Stack Developer</div>
            <div className="text-xs text-slate-500">React.js • Tailwind CSS • HTML5 • CSS3</div>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-sky-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <a href={`mailto:${profile.email}`} aria-label="Email" title="Email" className="icon-btn w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-lg">
            <FaEnvelope className="text-sky-400" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="icon-btn w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-white text-xl">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="icon-btn w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-xl">
            <FaLinkedin className="text-[#0A9BD8]" />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp" className="icon-btn w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-lg">
            <FaWhatsapp className="text-green-400" />
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-slate-600 mt-8">
        © {new Date().getFullYear()} Shyam V • Built with HTML5, CSS3, Tailwind CSS & React.js • Chennai, India
      </p>
    </footer>
  );
}
