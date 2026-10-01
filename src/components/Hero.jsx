import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="grid-bg pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities • Chennai
          </span>
          <p className="text-sky-400 font-medium mb-2">Hi, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_25px_rgba(56,189,248,0.25)]">
            {profile.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mt-3">
            <span className="text-gradient">{profile.role}</span>
          </h2>
          <p className="text-sky-300/90 font-medium mt-1">{profile.tagline}</p>
          <p className="text-slate-400 mt-5 leading-relaxed max-w-xl">
            I build responsive, user-friendly web apps with React.js, Tailwind CSS,
            Node.js, FastAPI & MongoDB — now exploring AI-powered experiences with RAG.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="border border-slate-700 hover:border-sky-500/60 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-900/80 backdrop-blur-sm transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Proper brand icons */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon-btn gap-2 text-sm bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-slate-200 px-4 py-2.5 rounded-xl hover:text-white"
            >
              <FaGithub className="text-xl" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-btn gap-2 text-sm bg-[#0A66C2]/15 backdrop-blur-sm border border-[#0A66C2]/40 text-sky-300 px-4 py-2.5 rounded-xl hover:text-sky-200"
            >
              <FaLinkedin className="text-xl text-[#0A9BD8]" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="icon-btn gap-2 text-sm bg-slate-900/80 border border-slate-700 text-slate-300 px-4 py-2.5 rounded-xl"
            >
              <FaEnvelope className="text-sky-400" />
              <span className="hidden lg:inline max-w-[220px] truncate">{profile.email}</span>
            </a>
            <a
              href={profile.phoneLink}
              aria-label="Phone"
              className="icon-btn gap-2 text-sm bg-slate-900/80 border border-slate-700 text-slate-300 px-4 py-2.5 rounded-xl"
            >
              <FaPhoneAlt className="text-emerald-400 text-sm" />
              <span className="hidden lg:inline">{profile.phone}</span>
            </a>
          </div>
        </div>

        {/* Right — 3D tilt avatar card */}
        <div className="flex justify-center md:justify-end" style={{ perspective: "1000px" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/25 to-indigo-600/25 rounded-3xl blur-2xl" />
            <div className="tilt-3d relative bg-slate-900/85 backdrop-blur-md border border-slate-700/70 rounded-3xl p-8 w-72 sm:w-80 text-center animate-float shadow-2xl shadow-sky-500/10">
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-4xl font-extrabold text-white shadow-lg shadow-sky-500/30 ring-4 ring-sky-500/20">
                SV
              </div>
              <h3 className="text-white font-bold text-lg mt-5">Shyam V</h3>
              <p className="text-sky-400 text-sm font-medium">Full Stack Developer</p>
              <div className="grid grid-cols-3 gap-2 mt-6 text-center">
                {[
                  ["3+", "Projects"],
                  ["6+", "Tech Stack"],
                  ["1", "Internship"],
                ].map(([n, l]) => (
                  <div key={l} className="bg-slate-800/70 rounded-xl py-3 border border-slate-700/50">
                    <div className="text-white font-bold">{n}</div>
                    <div className="text-[11px] text-slate-400">{l}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {["React.js", "Tailwind", "Node.js", "MongoDB", "FastAPI"].map((t) => (
                  <span key={t} className="text-[11px] bg-slate-800 text-sky-300 px-2.5 py-1 rounded-full border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-3 mt-6">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="icon-btn w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-white text-xl">
                  <FaGithub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="icon-btn w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-xl">
                  <FaLinkedin className="text-[#0A9BD8]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
