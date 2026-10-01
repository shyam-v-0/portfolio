import { useState } from "react";
import { navLinks, profile } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
            SV
          </span>
          <span className="font-bold text-white tracking-wide">
            SHYAM<span className="text-sky-400">.DEV</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-slate-300 hover:text-sky-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 text-2xl px-2"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-3 text-sm">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate-200 hover:text-sky-400 py-1"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="block text-center bg-sky-500 text-slate-950 font-semibold px-4 py-2 rounded-lg"
            >
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
