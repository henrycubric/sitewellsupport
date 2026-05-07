"use client";
import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "https://your-backend-url.com";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const body = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMsg(data.message || "Thanks! We'll be in touch within 24 hours.");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (err: any) {
      setStatus("error");
      setMsg(err.message);
    }
  }

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#7CFF6B]/40 transition-colors placeholder:text-white/30";
  const labelCls = "block text-[10px] tracking-[0.1em] uppercase text-[#888880] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Your Name *</label>
          <input type="text" name="name" placeholder="Jane Smith" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input type="email" name="email" placeholder="jane@yourbiz.com" required className={inputCls} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Phone</label>
          <input type="tel" name="phone" placeholder="604-555-1234" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>What do you need?</label>
          <select name="service" className={`${inputCls} cursor-pointer`}>
            <option value="" className="bg-[#161616]">Select a service</option>
            <option value="Starter Website ($250)" className="bg-[#161616]">Starter Website — $250</option>
            <option value="Multi-Page Site ($400+)" className="bg-[#161616]">Multi-Page Site — $400+</option>
            <option value="Professional Package ($450)" className="bg-[#161616]">Professional Package — $450</option>
            <option value="Google Business Setup" className="bg-[#161616]">Google Business Setup</option>
            <option value="Custom / Not sure" className="bg-[#161616]">Custom / Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls}>Tell us about your business *</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="I run a pressure washing business in Surrey and need a website..."
          className={`${inputCls} resize-y`}
        />
      </div>

      {msg && (
        <div className={`px-4 py-3 rounded-xl text-sm ${status === "success" ? "bg-[#7CFF6B]/10 border border-[#7CFF6B]/30 text-[#7CFF6B]" : "bg-red-500/10 border border-red-500/30 text-red-400"}`}>
          {msg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#7CFF6B] text-black font-medium py-3.5 rounded-full text-base hover:bg-[#B8FF4F] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send My Request →"}
      </button>
      <p className="text-center text-xs text-[#888880]">
        Or email us at{" "}
        <a href="mailto:support@sitewell.info" className="text-[#7CFF6B]">
          support@sitewell.info
        </a>
      </p>
    </form>
  );
}
