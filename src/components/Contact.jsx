import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { profile } from "../data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const cards = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: FaEnvelope, iconClass: "text-sky-400" },
    { label: "Phone", value: profile.phone, href: profile.phoneLink, Icon: FaPhoneAlt, iconClass: "text-emerald-400" },
    { label: "WhatsApp", value: "Chat instantly", href: profile.whatsapp, Icon: FaWhatsapp, iconClass: "text-green-400" },
    { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, Icon: FaLinkedin, iconClass: "text-[#0A9BD8]" },
    { label: "GitHub", value: profile.githubLabel, href: profile.github, Icon: FaGithub, iconClass: "text-white" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900/40 border-t border-slate-800/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-2xl p-7 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-300 mb-1.5">Your Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-300 mb-1.5">Your Email</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-300 mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Hi Shyam, I'd like to talk about..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500 resize-y"
              />
            </div>
            {error && <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">{error}</p>}
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-3 rounded-xl transition-colors"
            >
              Send via Email
            </button>
          </form>

          {/* Direct contact cards */}
          <div className="space-y-4">
            {cards.map(({ label, value, href, Icon, iconClass }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-glow flex items-center gap-4 bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-2xl px-5 py-4"
              >
                <span className="w-11 h-11 shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">
                  <Icon className={iconClass} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-slate-400">{label}</span>
                  <span className="block text-white font-medium text-sm break-all">{value}</span>
                </span>
                <span className="text-sky-400 text-xl shrink-0">→</span>
              </a>
            ))}
            <div className="bg-gradient-to-r from-sky-500/15 to-indigo-500/15 border border-sky-500/20 rounded-2xl px-6 py-5 text-sm text-slate-300 backdrop-blur-sm">
              📍 Based in <span className="text-white font-medium">{profile.location}</span> — open to internships,
              junior roles and freelance frontend work.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
