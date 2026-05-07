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

  const inputCls = "w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:opacity-30";
  const inputStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(148,210,189,0.15)", color: "#F0EDE8" };
  const labelCls = "block text-[10px] tracking-[0.1em] uppercase mb-1.5";
  const labelStyle = { color: "#7A8F9E" };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls} style={labelStyle}>Your Name *</label>
          <input type="text" name="name" placeholder="Jane Smith" required className={inputCls} style={inputStyle} />
        </div>
        <div>
          <label className={labelCls} style={labelStyle}>Email *</label>
          <input type="email" name="email" placeholder="jane@yourbiz.com" required className={inputCls} style={inputStyle} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls} style={labelStyle}>Phone</label>
          <input type="tel" name="phone" placeholder="604-555-1234" className={inputCls} style={inputStyle} />
        </div>
        <div>
          <label className={labelCls} style={labelStyle}>What do you need?</label>
          <select name="service" className={`${inputCls} cursor-pointer`} style={inputStyle}>
            <option value="" style={{ background: "#1A2C3D" }}>Select a service</option>
            <option value="Starter Website ($250)" style={{ background: "#1A2C3D" }}>Starter Website — $250</option>
            <option value="Multi-Page Site ($400+)" style={{ background: "#1A2C3D" }}>Multi-Page Site — $400+</option>
            <option value="Professional Package ($450)" style={{ background: "#1A2C3D" }}>Professional Package — $450</option>
            <option value="Google Business Setup" style={{ background: "#1A2C3D" }}>Google Business Setup</option>
            <option value="Custom / Not sure" style={{ background: "#1A2C3D" }}>Custom / Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls} style={labelStyle}>Tell us about your business *</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="I run a pressure washing business in Surrey and need a website..."
          className={`${inputCls} resize-y`}
          style={inputStyle}
        />
      </div>

      {msg && (
        <div className="px-4 py-3 rounded-xl text-sm" style={
          status === "success"
            ? { background: "rgba(148,210,189,0.1)", border: "1px solid rgba(148,210,189,0.3)", color: "#94D2BD" }
            : { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }
        }>
          {msg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-semibold py-3.5 rounded-full text-base transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "#B05F73", color: "#fff" }}
      >
        {status === "loading" ? "Sending…" : "Send My Request →"}
      </button>
      <p className="text-center text-xs" style={{ color: "#7A8F9E" }}>
        Or email us at{" "}
        <a href="mailto:support@sitewell.info" style={{ color: "#94D2BD" }}>
          support@sitewell.info
        </a>
      </p>
    </form>
  );
}
