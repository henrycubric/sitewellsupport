import ContactForm from "@/components/ContactForm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const C = {
  primary:     "#005F73",
  primaryDark: "#004655",
  secondary:   "#94D2BD",
  secondaryBg: "#aeedd7",
  tertiary:    "#E9D8A6",
  bg:          "#f8f9ff",
  surface:     "#eff4ff",
  card:        "#ffffff",
  border:      "rgba(0,70,85,0.10)",
  text:        "#121c2a",
  muted:       "#6f797c",
};

const shadow = "0 2px 16px rgba(0,70,85,0.06), 0 1px 4px rgba(0,70,85,0.04)";
const shadowHover = "0 8px 32px rgba(0,70,85,0.10), 0 2px 8px rgba(0,70,85,0.06)";

function SectionLabel({ text }: { text: string }) {
  return (
    <p style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.primary, marginBottom: "12px" }}>
      <span style={{ width: "16px", height: "1px", background: C.primary }} />
      {text}
      <span style={{ width: "16px", height: "1px", background: C.primary }} />
    </p>
  );
}

export default function Home() {
  return (
    <main style={{ background: C.bg, color: C.text, overflowX: "hidden" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 24px 80px", overflow: "hidden" }}>
        {/* Ambient teal glow — top right */}
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: "640px", height: "640px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,95,115,0.07) 0%, transparent 68%)", pointerEvents: "none" }} />
        {/* Ambient mint glow — bottom left */}
        <div style={{ position: "absolute", bottom: "-80px", left: "-160px", width: "560px", height: "560px", borderRadius: "50%", background: "radial-gradient(circle, rgba(148,210,189,0.12) 0%, transparent 68%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          {/* Eyebrow */}
          <p style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.primary, marginBottom: "28px" }}>
            <span style={{ width: "28px", height: "1.5px", background: C.primary }} />
            Vancouver Web Developers
            <span style={{ width: "28px", height: "1.5px", background: C.primary }} />
          </p>

          {/* Headline */}
          <h1 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 700, fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: C.text, maxWidth: "800px", margin: "0 0 24px" }}>
            Websites that get your<br />
            <span style={{ color: C.primary }}>business found.</span>
          </h1>

          {/* Sub */}
          <p style={{ color: C.muted, fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "460px", margin: "0 0 40px" }}>
            Clean, fast sites for Vancouver businesses — starting at $250. No fluff, no contracts, just results.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#pricing" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: C.primary, color: "#fff", fontWeight: 600, fontSize: "0.95rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
              See Pricing →
            </a>
            <a href="#how" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: `1.5px solid rgba(0,70,85,0.20)`, color: C.primaryDark, fontSize: "0.95rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
              How it works
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 80px", marginTop: "72px", paddingTop: "48px", borderTop: `1px solid ${C.border}` }}>
            {[
              { num: "$250+", label: "Starting price" },
              { num: "5–7",   label: "Days to launch" },
              { num: "100%",  label: "Local Vancouver team" },
              { num: "0",     label: "Monthly contracts" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-epilogue)", fontWeight: 700, fontSize: "2rem", color: C.primaryDark }}>{s.num}</div>
                <div style={{ fontSize: "0.75rem", marginTop: "4px", color: C.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ overflow: "hidden", padding: "18px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.surface }}>
        <div className="animate-marquee" style={{ display: "flex", gap: "48px", width: "max-content" }}>
          {[
            ..."Mobile Mechanics,Pressure Washing,Home Cleaners,Lawn Care,Dog Walkers,Personal Trainers,Auto Detailers,Contractors,Photographers,Food Trucks".split(","),
            ..."Mobile Mechanics,Pressure Washing,Home Cleaners,Lawn Care,Dog Walkers,Personal Trainers,Auto Detailers,Contractors,Photographers,Food Trucks".split(","),
          ].map((item, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap", color: C.muted }}>
              <span style={{ color: C.primary, fontSize: "0.55rem" }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: "112px 24px", background: C.bg }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel text="Process" />
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 600, fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: C.text, marginBottom: "56px", letterSpacing: "-0.02em" }}>
            Simple. Fast. Done right.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { n: "01", title: "Tell us about your business", body: "A quick call or message. We learn what you do, who your customers are, and what the site needs to accomplish." },
              { n: "02", title: "We build your site in days",  body: "We write the copy, design the pages, and build from scratch — optimized for Google and ready for mobile." },
              { n: "03", title: "Launch and get leads",        body: "We hand you the keys. Your site is live, Google Business Profile is set up, and customers can find you." },
            ].map((step) => (
              <div key={step.n} style={{ padding: "40px 32px", background: C.card, borderRadius: "16px", textAlign: "left", boxShadow: shadow }}>
                <div style={{ fontFamily: "var(--font-epilogue)", fontWeight: 700, fontSize: "3.5rem", color: "rgba(0,95,115,0.10)", marginBottom: "20px", lineHeight: 1 }}>{step.n}</div>
                <h3 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 600, fontSize: "1.05rem", color: C.text, marginBottom: "10px" }}>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: C.muted }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "112px 24px", background: C.surface }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel text="Services" />
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 600, fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: C.text, marginBottom: "56px", letterSpacing: "-0.02em" }}>
            Everything your business needs online
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", textAlign: "left" }}>
            {[
              { icon: "🖥️", title: "Starter Website",      desc: "Clean, professional single-page site with your services, contact info, and a form.",                     price: "From $250" },
              { icon: "📄", title: "Multi-Page Site",       desc: "Home, About, Services, and Contact pages — ideal for businesses with multiple offerings.",              price: "From $400" },
              { icon: "📍", title: "Google Business Setup", desc: "We set up and optimize your Google Business Profile so you show up in local search.",                   price: "$75 add-on" },
              { icon: "🔍", title: "Local SEO",             desc: "Content written with the keywords your customers actually search — rank higher over time without ads.", price: "Included in all plans" },
            ].map((s) => (
              <div key={s.title} style={{ background: C.card, borderRadius: "16px", padding: "32px", boxShadow: shadow }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "16px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 600, fontSize: "1.05rem", color: C.text, marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: C.muted, marginBottom: "16px" }}>{s.desc}</p>
                <span style={{ display: "inline-block", fontWeight: 700, fontSize: "0.8rem", color: C.primaryDark, background: C.secondaryBg, padding: "4px 12px", borderRadius: "999px" }}>{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "112px 24px", background: C.bg }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel text="Pricing" />
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 600, fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: C.text, marginBottom: "56px", letterSpacing: "-0.02em" }}>
            No surprises. One flat price.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", textAlign: "left" }}>
            {[
              { tier: "Starter",      price: "$250", period: "one-time, CAD", desc: "Get online fast with a professional single-page website.",                         features: ["1-page website","Mobile responsive","Contact form","Basic SEO setup","2 rounds of revisions","Delivered in 5–7 days"],          featured: false },
              { tier: "Professional", price: "$450", period: "one-time, CAD", desc: "A full website with multiple pages and everything you need to rank.",              features: ["Up to 5 pages","Mobile responsive","Contact form + booking","Full local SEO","Google Business setup","3 rounds of revisions","Delivered in 7–10 days"], featured: true  },
              { tier: "Custom",       price: "Talk", period: "custom quote",  desc: "E-commerce, booking systems, custom features — we'll scope it together.",         features: ["Unlimited pages","E-commerce optional","Online booking system","Custom design","Priority delivery","Ongoing support available"],    featured: false },
            ].map((plan) => (
              <div key={plan.tier} style={{ position: "relative", background: C.card, border: plan.featured ? `2px solid ${C.primary}` : `1px solid ${C.border}`, borderRadius: "16px", padding: "32px", boxShadow: plan.featured ? shadowHover : shadow }}>
                {plan.featured && (
                  <span style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: C.primary, color: "#fff", padding: "4px 14px", borderRadius: "999px" }}>Most Popular</span>
                )}
                <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: C.muted, marginBottom: "12px" }}>{plan.tier}</div>
                <div style={{ fontFamily: "var(--font-epilogue)", fontWeight: 700, fontSize: plan.price === "Talk" ? "2rem" : "3rem", color: C.text, letterSpacing: "-0.03em", marginBottom: "4px" }}>
                  {plan.price === "Talk" ? "Let's talk" : plan.price}
                </div>
                <div style={{ fontSize: "0.75rem", color: C.muted, marginBottom: "16px" }}>{plan.period}</div>
                <p style={{ fontSize: "0.875rem", color: C.muted, marginBottom: "24px", lineHeight: 1.65 }}>{plan.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "0" }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: C.muted, padding: "9px 0", borderBottom: `1px solid ${C.border}` }}>
                      <span style={{ fontWeight: 700, fontSize: "0.75rem", color: C.primary, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", padding: "11px", borderRadius: "10px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", ...(plan.featured ? { background: C.primary, color: "#fff" } : { border: `1.5px solid rgba(0,70,85,0.20)`, color: C.primaryDark }) }}>
                  {plan.tier === "Custom" ? "Contact Us" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "112px 24px", background: C.surface }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel text="Reviews" />
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 600, fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: C.text, marginBottom: "56px", letterSpacing: "-0.02em" }}>
            Local businesses love their new sites
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", textAlign: "left" }}>
            {[
              { quote: "I was only on Craigslist before. Now I get 3–4 calls a week from Google. The site paid for itself in the first month.",           name: "Marco K.", biz: "Mobile Mechanic, Burnaby",  init: "MK" },
              { quote: "They built the whole thing in a week and it looks better than companies that have been around for years. Worth every dollar.",     name: "Sarah R.", biz: "House Cleaner, Vancouver",  init: "SR" },
              { quote: "My customers can finally book online and I don't have to reply to every text manually. Game changer for my lawn care business.", name: "Tyler N.", biz: "Lawn Care, Surrey",          init: "TN" },
            ].map((t) => (
              <div key={t.name} style={{ background: C.card, borderRadius: "16px", padding: "32px", boxShadow: shadow }}>
                <div style={{ letterSpacing: "0.12em", fontSize: "0.85rem", marginBottom: "16px", color: C.primary }}>★★★★★</div>
                <p style={{ fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.75, marginBottom: "24px", color: C.text }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: C.secondaryBg, color: C.primaryDark, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0, fontFamily: "var(--font-epilogue)" }}>{t.init}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: C.text }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: C.muted }}>{t.biz}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "112px 24px", background: C.bg, position: "relative", overflow: "hidden" }}>
        {/* Soft teal glow centre */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,95,115,0.06) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <SectionLabel text="Get Started" />
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 600, fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: C.text, marginBottom: "12px", letterSpacing: "-0.02em" }}>
            Ready to get found on Google?
          </h2>
          <p style={{ color: C.muted, marginBottom: "40px", lineHeight: 1.7 }}>
            Tell us about your business and we&rsquo;ll get back within 24 hours.
          </p>
          <div style={{ background: C.card, borderRadius: "20px", padding: "40px", boxShadow: shadow }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
