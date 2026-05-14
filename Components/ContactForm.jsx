"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@nasirnawaz.dev";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields before sending.");
      return;
    }

    const subject = `Project inquiry from ${form.name}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("Your message is ready to send via email.");
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8">
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-slate-200" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-200" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-200" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
            placeholder="Tell me about your project needs"
          />
        </div>

        {status ? <p className="text-sm text-cyan-300">{status}</p> : null}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:shadow-xl hover:shadow-cyan-500/20"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
