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

  const inputCls = "w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors";
  const inputStyle = {
    background: "#eff4ff",
    border: "1px solid rgba(0,70,85,0.15)",
    color: "#121c2a",
  };
  const inputFocusStyle = { borderColor: "#005F73" };
  const labelCls = "block text-[10px] tracking-[0.1em] uppercase mb-1.5 font-bold";
  const labelStyle = { color: "#6f797c" };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls} style={labelStyle}>Your Name *</label>
          <input
            type="text" name="name" placeholder="Jane Smith" required
            className={inputCls} style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, { borderColor: "rgba(0,70,85,0.15)" })}
          />
        </div>
        <div>
          <label className={labelCls} style={labelStyle}>Email *</label>
          <input
            type="email" name="email" placeholder="jane@yourbiz.com" required
            className={inputCls} style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, { borderColor: "rgba(0,70,85,0.15)" })}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls} style={labelStyle}>Phone</label>
          <input
            type="tel" name="phone" placeholder="604-555-1234"
            className={inputCls} style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, { borderColor: "rgba(0,70,85,0.15)" })}
          />
        </div>
        <div>
          <label className={labelCls} style={labelStyle}>What do you need?</label>
          <select
            name="service" className={`${inputCls} cursor-pointer`} style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, { borderColor: "rgba(0,70,85,0.15)" })}
          >
            <option value="">Select a service</option>
            <option value="Starter Website ($250)">Starter Website — $250</option>
            <option value="Multi-Page Site ($400+)">Multi-Page Site — $400+</option>
            <option value="Professional Package ($450)">Professional Package — $450</option>
            <option value="Google Business Setup">Google Business Setup</option>
            <option value="Custom / Not sure">Custom / Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls} style={labelStyle}>Tell us about your business *</label>
        <textarea
          name="message" rows={4} required
          placeholder="I run a pressure washing business in Surrey and need a website..."
          className={`${inputCls} resize-y`} style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, { borderColor: "rgba(0,70,85,0.15)" })}
        />
      </div>

      {msg && (
        <div className="px-4 py-3 rounded-lg text-sm" style={
          status === "success"
            ? { background: "rgba(0,95,115,0.08)", border: "1px solid rgba(0,95,115,0.25)", color: "#004655" }
            : { background: "rgba(186,26,26,0.08)", border: "1px solid rgba(186,26,26,0.25)", color: "#ba1a1a" }
        }>
          {msg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-semibold py-3.5 rounded-full text-base text-white transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "#005F73" }}
      >
        {status === "loading" ? "Sending…" : "Send My Request →"}
      </button>
      <p className="text-center text-xs" style={{ color: "#6f797c" }}>
        Or email us at{" "}
        <a href="mailto:support@sitewell.info" style={{ color: "#005F73" }}>
          support@sitewell.info
        </a>
      </p>
    </form>
  );
}
