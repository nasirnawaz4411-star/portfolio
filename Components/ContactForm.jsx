"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiCheck, FiAlertCircle } from "react-icons/fi";

export default function ContactForm() {
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageType, setMessageType] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!form.from_name || !form.from_email || !form.message) {
      setStatus("Please fill in all fields before sending.");
      setMessageType("error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.from_email)) {
      setStatus("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setStatus("");
    setMessageType("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
          reply_to: form.from_email,
        }
      );

      setStatus("✓ Message sent successfully! I'll get back to you soon.");
      setMessageType("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("✗ Failed to send message. Please try again or contact via WhatsApp.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="glass-card p-8">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-slate-200" htmlFor="from_name">
              Name
            </label>
            <input
              id="from_name"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              disabled={loading}
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10 disabled:opacity-50"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-200" htmlFor="from_email">
              Email
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              value={form.from_email}
              onChange={handleChange}
              disabled={loading}
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10 disabled:opacity-50"
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
              disabled={loading}
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10 disabled:opacity-50"
              placeholder="Tell me about your project needs"
            />
          </div>

          {status && (
            <div
              className={`flex items-start gap-3 rounded-2xl p-4 ${
                messageType === "success"
                  ? "bg-green-500/10 text-green-300"
                  : "bg-red-500/10 text-red-300"
              }`}
            >
              {messageType === "success" ? (
                <FiCheck className="mt-1 h-5 w-5 flex-shrink-0" />
              ) : (
                <FiAlertCircle className="mt-1 h-5 w-5 flex-shrink-0" />
              )}
              <p className="text-sm">{status}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
              loading
                ? "bg-slate-600 text-slate-300 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:scale-[1.01] hover:shadow-xl hover:shadow-cyan-500/20"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923472044645"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 rounded-full bg-green-500/10 border border-green-500/30 px-6 py-3 text-sm font-semibold text-green-300 transition hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.98 1.503 9.879 9.879 0 007.346 15.876 9.865 9.865 0 005.516-1.726l5.441 1.425-1.449-5.391c1.125-1.98 1.771-4.281 1.771-6.734a9.877 9.877 0 00-14.645-8.547z" />
        </svg>
        Chat on WhatsApp
      </a>
    </div>
  );
}
