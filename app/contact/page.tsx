import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Rick Barretto",
  description: "Contact Rick Barretto for speaking, partnerships, advisory, or media inquiries.",
};

const types = ["CyberHope AI / PrecognitionOS", "The LAN Network", "Speaking / Advisory", "Media / Press", "Investment Inquiry", "Hope Training Academy", "General"];

export default function Contact() {
  return (
    <>
      <Nav active="/contact" />
      <main>
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-5">Contact</h1>
            <p className="font-sans text-lg text-sky-100 leading-relaxed">
              For speaking, partnerships, advisory, or media inquiries. For CyberHope AI and
              PrecognitionOS product or investor details, visit{" "}
              <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer"
                className="text-sky-300 hover:text-sky-200 underline underline-offset-4">
                CyberHopeAI.com
              </a>.
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-5" action="mailto:rick@cyberhopeai.com" method="get">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Name *</label>
                  <input type="text" name="name" required placeholder="Your full name"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 text-sm focus:border-blue-900 outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Email *</label>
                  <input type="email" name="email" required placeholder="your@email.com"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 text-sm focus:border-blue-900 outline-none transition" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Organization</label>
                <input type="text" name="org" placeholder="Company or organization"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 text-sm focus:border-blue-900 outline-none transition" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Inquiry Type</label>
                <select name="type" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 text-sm focus:border-blue-900 outline-none transition">
                  <option value="">Select type</option>
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Message *</label>
                <textarea name="message" required rows={5} placeholder="Tell us how we can help..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 text-sm focus:border-blue-900 outline-none transition resize-none" />
              </div>
              <button type="submit"
                className="w-full px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold text-sm hover:bg-blue-800 transition">
                Send Message →
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
