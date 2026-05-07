import { SplineScene } from "@/components/ui/splite";
import ContactForm from "@/components/ContactForm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const C = {
  primary:  "#B05F73",
  secondary:"#94D2BD",
  tertiary: "#E9D8A6",
  neutral:  "#1F2937",
  bg:       "#0E1A24",
  surface:  "#132030",
  card:     "#1A2C3D",
  border:   "rgba(148,210,189,0.12)",
  text:     "#F0EDE8",
  muted:    "#7A8F9E",
};

export default function Home() {
  return (
    <main style={{ background: C.bg, color: C.text, overflowX: "hidden" }}>
      <Nav />

      {/* ── HERO: full-screen Spline + centred overlay ── */}
      <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
        {/* dark gradient so text is readable */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,26,36,0.55) 0%, rgba(14,26,36,0.3) 50%, rgba(14,26,36,0.75) 100%)" }} />
        {/* centred text overlay */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <p style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.secondary, marginBottom: "20px" }}>
            <span style={{ width: "24px", height: "1px", background: C.secondary }} />
            Vancouver Web Developers
            <span style={{ width: "24px", height: "1px", background: C.secondary }} />
          </p>
          <h1 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800, fontSize: "clamp(2.6rem, 6vw, 5.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: C.text, maxWidth: "800px", margin: "0 0 20px" }}>
            Websites that get your<br />
            <span style={{ color: C.primary }}>business found.</span>
          </h1>
          <p style={{ color: C.muted, fontSize: "1.1rem", lineHeight: 1.6, maxWidth: "440px", margin: "0 0 32px" }}>
            Clean, fast sites for Vancouver businesses — starting at $250.<br />No fluff, no contracts, just results.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#pricing" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: C.primary, color: "#fff", fontWeight: 700, fontSize: "0.95rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
              See Pricing →
            </a>
            <a href="#how" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: `1px solid rgba(240,237,232,0.25)`, color: C.text, fontSize: "0.95rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.05)" }}>
              How it works
            </a>
          </div>
        </div>
        {/* bottom fade into next section */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: `linear-gradient(to bottom, transparent, ${C.bg})` }} />
      </section>

      {/* ── STATS ── */}
      <section style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "40px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px 80px" }}>
          {[
            { num: "$250+", label: "Starting price" },
            { num: "5–7",   label: "Days to launch" },
            { num: "100%",  label: "Local Vancouver team" },
            { num: "0",     label: "Monthly contracts" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800, fontSize: "2rem", color: C.secondary }}>{s.num}</div>
              <div style={{ fontSize: "0.75rem", marginTop: "4px", color: C.muted, letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ overflow: "hidden", padding: "16px 0", borderBottom: `1px solid ${C.border}`, background: C.surface }}>
        <div className="animate-marquee" style={{ display: "flex", gap: "48px", width: "max-content" }}>
          {[..."Mobile Mechanics,Pressure Washing,Home Cleaners,Lawn Care,Dog Walkers,Personal Trainers,Auto Detailers,Contractors,Photographers,Food Trucks".split(","),
            ..."Mobile Mechanics,Pressure Washing,Home Cleaners,Lawn Care,Dog Walkers,Personal Trainers,Auto Detailers,Contractors,Photographers,Food Trucks".split(",")
          ].map((item, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap", color: C.muted }}>
              <span style={{ color: C.tertiary }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: "112px 24px", background: C.bg }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.secondary, marginBottom: "12px" }}>
            <span style={{ width: "16px", height: "1px", background: C.secondary }} />Process<span style={{ width: "16px", height: "1px", background: C.secondary }} />
          </p>
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: C.text, marginBottom: "48px", letterSpacing: "-0.02em" }}>Simple. Fast. Done right.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: C.border, borderRadius: "16px", overflow: "hidden", border: `1px solid ${C.border}` }}>
            {[
              { n: "01", title: "Tell us about your business", body: "A quick call or message. We learn what you do, who your customers are, and what the site needs to accomplish." },
              { n: "02", title: "We build your site in days",  body: "We write the copy, design the pages, and build from scratch — optimized for Google and ready for mobile." },
              { n: "03", title: "Launch and get leads",        body: "We hand you the keys. Your site is live, Google Business Profile is set up, and customers can find you." },
            ].map((step) => (
              <div key={step.n} style={{ padding: "40px 32px", background: C.card, textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800, fontSize: "3.5rem", color: `${C.secondary}18`, marginBottom: "20px" }}>{step.n}</div>
                <h3 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 700, fontSize: "1rem", color: C.text, marginBottom: "10px" }}>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: C.muted }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "112px 24px", background: C.surface }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.secondary, marginBottom: "12px" }}>
            <span style={{ width: "16px", height: "1px", background: C.secondary }} />Services<span style={{ width: "16px", height: "1px", background: C.secondary }} />
          </p>
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: C.text, marginBottom: "48px", letterSpacing: "-0.02em" }}>Everything your business needs online</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", textAlign: "left" }}>
            {[
              { icon: "🖥️", title: "Starter Website",      desc: "Clean, professional single-page site with your services, contact info, and a form.",                     price: "From $250" },
              { icon: "📄", title: "Multi-Page Site",       desc: "Home, About, Services, and Contact pages — ideal for businesses with multiple offerings.",              price: "From $400" },
              { icon: "📍", title: "Google Business Setup", desc: "We set up and optimize your Google Business Profile so you show up in local search.",                   price: "$75 add-on" },
              { icon: "🔍", title: "Local SEO",             desc: "Content written with the keywords your customers actually search — rank higher over time without ads.", price: "Included in all plans" },
            ].map((s) => (
              <div key={s.title} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: "16px", padding: "28px" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "12px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 700, fontSize: "1rem", color: C.text, marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: C.muted, marginBottom: "12px" }}>{s.desc}</p>
                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: C.secondary }}>{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "112px 24px", background: C.bg }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.secondary, marginBottom: "12px" }}>
            <span style={{ width: "16px", height: "1px", background: C.secondary }} />Pricing<span style={{ width: "16px", height: "1px", background: C.secondary }} />
          </p>
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: C.text, marginBottom: "48px", letterSpacing: "-0.02em" }}>No surprises. One flat price.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", textAlign: "left" }}>
            {[
              { tier: "Starter",      price: "$250", period: "one-time, CAD", desc: "Get online fast with a professional single-page website.",                         features: ["1-page website","Mobile responsive","Contact form","Basic SEO setup","2 rounds of revisions","Delivered in 5–7 days"],          featured: false },
              { tier: "Professional", price: "$450", period: "one-time, CAD", desc: "A full website with multiple pages and everything you need to rank.",              features: ["Up to 5 pages","Mobile responsive","Contact form + booking","Full local SEO","Google Business setup","3 rounds of revisions","Delivered in 7–10 days"], featured: true  },
              { tier: "Custom",       price: "Talk", period: "custom quote",  desc: "E-commerce, booking systems, custom features — we'll scope it together.",         features: ["Unlimited pages","E-commerce optional","Online booking system","Custom design","Priority delivery","Ongoing support available"],    featured: false },
            ].map((plan) => (
              <div key={plan.tier} style={{ position: "relative", background: C.card, border: `1px solid ${plan.featured ? C.primary : C.border}`, borderRadius: "16px", padding: "28px" }}>
                {plan.featured && (
                  <span style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: C.primary, color: "#fff", padding: "4px 12px", borderRadius: "999px" }}>Most Popular</span>
                )}
                <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: C.muted, marginBottom: "10px" }}>{plan.tier}</div>
                <div style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800, fontSize: plan.price === "Talk" ? "2rem" : "3rem", color: C.text, letterSpacing: "-0.03em", marginBottom: "4px" }}>
                  {plan.price === "Talk" ? "Let's talk" : plan.price}
                </div>
                <div style={{ fontSize: "0.75rem", color: C.muted, marginBottom: "16px" }}>{plan.period}</div>
                <p style={{ fontSize: "0.875rem", color: C.muted, marginBottom: "24px", lineHeight: 1.6 }}>{plan.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: C.muted, paddingBottom: "8px", borderBottom: `1px solid ${C.border}` }}>
                      <span style={{ fontWeight: 700, fontSize: "0.75rem", color: C.secondary }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", padding: "10px", borderRadius: "12px", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none", ...(plan.featured ? { background: C.primary, color: "#fff" } : { border: `1px solid ${C.border}`, color: C.text }) }}>
                  {plan.tier === "Custom" ? "Contact Us" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "112px 24px", background: C.surface }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.secondary, marginBottom: "12px" }}>
            <span style={{ width: "16px", height: "1px", background: C.secondary }} />Reviews<span style={{ width: "16px", height: "1px", background: C.secondary }} />
          </p>
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: C.text, marginBottom: "48px", letterSpacing: "-0.02em" }}>Local businesses love their new sites</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", textAlign: "left" }}>
            {[
              { quote: "I was only on Craigslist before. Now I get 3–4 calls a week from Google. The site paid for itself in the first month.",           name: "Marco K.", biz: "Mobile Mechanic, Burnaby",  init: "MK" },
              { quote: "They built the whole thing in a week and it looks better than companies that have been around for years. Worth every dollar.",     name: "Sarah R.", biz: "House Cleaner, Vancouver",  init: "SR" },
              { quote: "My customers can finally book online and I don't have to reply to every text manually. Game changer for my lawn care business.", name: "Tyler N.", biz: "Lawn Care, Surrey",          init: "TN" },
            ].map((t) => (
              <div key={t.name} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: "16px", padding: "28px" }}>
                <div style={{ letterSpacing: "0.15em", fontSize: "0.85rem", marginBottom: "16px", color: C.tertiary }}>★★★★★</div>
                <p style={{ fontSize: "0.875rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: "20px", color: C.text }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: C.secondary, color: C.neutral, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0, fontFamily: "var(--font-epilogue)" }}>{t.init}</div>
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
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: `${C.primary}12`, filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <p style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.secondary, marginBottom: "12px" }}>
            <span style={{ width: "16px", height: "1px", background: C.secondary }} />Get Started<span style={{ width: "16px", height: "1px", background: C.secondary }} />
          </p>
          <h2 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: C.text, marginBottom: "12px", letterSpacing: "-0.02em" }}>
            Ready to get found on Google?
          </h2>
          <p style={{ color: C.muted, marginBottom: "40px", lineHeight: 1.6 }}>Tell us about your business and we&rsquo;ll get back within 24 hours.</p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
