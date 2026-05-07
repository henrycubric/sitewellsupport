import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Design tokens
const C = {
  primary:   "#B05F73",
  secondary: "#94D2BD",
  tertiary:  "#E9D8A6",
  neutral:   "#1F2937",
  bg:        "#0E1A24",
  surface:   "#132030",
  card:      "#1A2C3D",
  border:    "rgba(148,210,189,0.12)",
  text:      "#F0EDE8",
  muted:     "#7A8F9E",
};

const TAG = ({ children }: { children: React.ReactNode }) => (
  <p className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: C.secondary }}>
    <span className="w-4 h-px" style={{ background: C.secondary }} />
    {children}
  </p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-extrabold tracking-tight mb-10 leading-tight" style={{ fontFamily: "var(--font-epilogue)", color: C.text }}>
    {children}
  </h2>
);

export default function Home() {
  return (
    <main style={{ background: C.bg, color: C.text }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-16">
        <ContainerScroll
          titleComponent={
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase mb-6" style={{ color: C.secondary }}>
                <span className="w-6 h-px" style={{ background: C.secondary }} />
                Vancouver Web Developers
              </span>
              <h1 className="font-extrabold tracking-tight leading-none text-[clamp(2.5rem,6vw,5.5rem)]" style={{ fontFamily: "var(--font-epilogue)", color: C.text }}>
                Websites that get your
                <br />
                <span style={{ color: C.primary }}>business found.</span>
              </h1>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: C.muted }}>
                Clean, fast sites for Vancouver businesses — starting at $250. No fluff, no contracts, just results.
              </p>
              <div className="flex gap-3 justify-center mt-6 flex-wrap">
                <a href="#pricing" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-90" style={{ background: C.primary, color: "#fff" }}>
                  See Pricing →
                </a>
                <a href="#how" className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors hover:opacity-80" style={{ border: `1px solid ${C.border}`, color: C.text }}>
                  How it works
                </a>
              </div>
            </div>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80"
            alt="Website dashboard preview"
            width={1400}
            height={720}
            className="mx-auto rounded-2xl object-cover h-full object-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* ── STATS ── */}
      <section className="py-8 border-y" style={{ background: C.surface, borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-20">
          {[
            { num: "$250+", label: "Starting price" },
            { num: "5–7",   label: "Days to launch" },
            { num: "100%",  label: "Local Vancouver team" },
            { num: "0",     label: "Monthly contracts" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-epilogue)", color: C.secondary }}>{s.num}</div>
              <div className="text-xs mt-1 tracking-wide" style={{ color: C.muted }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden py-4 border-b" style={{ background: C.surface, borderColor: C.border }}>
        <div className="flex gap-12 w-max animate-marquee">
          {[..."Mobile Mechanics,Pressure Washing,Home Cleaners,Lawn Care,Dog Walkers,Personal Trainers,Auto Detailers,Contractors,Photographers,Food Trucks".split(","),
            ..."Mobile Mechanics,Pressure Washing,Home Cleaners,Lawn Care,Dog Walkers,Personal Trainers,Auto Detailers,Contractors,Photographers,Food Trucks".split(",")
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-xs font-medium tracking-[0.1em] uppercase whitespace-nowrap" style={{ color: C.muted }}>
              <span style={{ color: C.tertiary }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-28 px-6" style={{ background: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <TAG>Process</TAG>
          <H2>Simple. Fast. Done right.</H2>
          <div className="grid md:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: C.border, border: `1px solid ${C.border}` }}>
            {[
              { n: "01", title: "Tell us about your business", body: "A quick call or message. We learn what you do, who your customers are, and what the site needs to accomplish." },
              { n: "02", title: "We build your site in days",  body: "We write the copy, design the pages, and build from scratch — optimized for Google and ready for mobile." },
              { n: "03", title: "Launch and get leads",        body: "We hand you the keys. Your site is live, Google Business Profile is set up, and customers can find you." },
            ].map((step) => (
              <div key={step.n} className="p-8 transition-colors" style={{ background: C.card }}>
                <div className="text-5xl font-extrabold mb-5" style={{ fontFamily: "var(--font-epilogue)", color: `${C.secondary}20` }}>{step.n}</div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-epilogue)", color: C.text }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLINE CARD ── */}
      <section className="py-20 px-6" style={{ background: C.surface }}>
        <div className="max-w-5xl mx-auto">
          <TAG>Experience</TAG>
          <H2>Built to make an impression.</H2>
          <Card className="w-full h-[500px] relative overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}` }}>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={300} />
            <div className="flex h-full">
              <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "var(--font-epilogue)", color: C.text }}>
                  Interactive &<br />
                  <span style={{ color: C.secondary }}>Modern Design</span>
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: C.muted }}>
                  Every site we build is crafted to capture attention, work on any device, and convert visitors into customers.
                </p>
                <a href="#contact" className="mt-6 inline-flex w-fit items-center gap-2 font-semibold px-5 py-2.5 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: C.primary, color: "#fff" }}>
                  Start your project →
                </a>
              </div>
              <div className="flex-1 relative hidden md:block">
                <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 px-6" style={{ background: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <TAG>Services</TAG>
          <H2>Everything your business needs online</H2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "🖥️", title: "Starter Website",       desc: "Clean, professional single-page site with your services, contact info, and a form.",                           price: "From $250" },
              { icon: "📄", title: "Multi-Page Site",        desc: "Home, About, Services, and Contact pages — ideal for businesses with multiple offerings.",                    price: "From $400" },
              { icon: "📍", title: "Google Business Setup",  desc: "We set up and optimize your Google Business Profile so you show up in local search.",                        price: "$75 add-on" },
              { icon: "🔍", title: "Local SEO",              desc: "Content written with the keywords your customers actually search — rank higher over time without ads.",       price: "Included in all plans" },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl p-7 hover:-translate-y-1 transition-all" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-epilogue)", color: C.text }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: C.muted }}>{s.desc}</p>
                <span className="font-bold text-sm" style={{ color: C.secondary }}>{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-28 px-6" style={{ background: C.surface }}>
        <div className="max-w-5xl mx-auto">
          <TAG>Pricing</TAG>
          <H2>No surprises. One flat price.</H2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { tier: "Starter",      price: "$250", period: "one-time, CAD", desc: "Get online fast with a professional single-page website.",                              features: ["1-page website","Mobile responsive","Contact form","Basic SEO setup","2 rounds of revisions","Delivered in 5–7 days"],          featured: false },
              { tier: "Professional", price: "$450", period: "one-time, CAD", desc: "A full website with multiple pages and everything you need to rank.",                   features: ["Up to 5 pages","Mobile responsive","Contact form + booking","Full local SEO","Google Business setup","3 rounds of revisions","Delivered in 7–10 days"], featured: true  },
              { tier: "Custom",       price: "Talk", period: "custom quote",  desc: "E-commerce, booking systems, custom features — we'll scope it together.",              features: ["Unlimited pages","E-commerce optional","Online booking system","Custom design","Priority delivery","Ongoing support available"],    featured: false },
            ].map((plan) => (
              <div key={plan.tier} className="relative rounded-2xl p-7 hover:-translate-y-1 transition-all" style={{ background: C.card, border: `1px solid ${plan.featured ? C.primary : C.border}` }}>
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: C.primary, color: "#fff" }}>Most Popular</span>
                )}
                <div className="text-xs uppercase tracking-widest mb-3" style={{ color: C.muted }}>{plan.tier}</div>
                <div className="text-5xl font-extrabold tracking-tight mb-1" style={{ fontFamily: "var(--font-epilogue)", color: C.text }}>
                  {plan.price === "Talk" ? <span className="text-3xl">Let&apos;s talk</span> : <><sup className="text-xl">$</sup>{plan.price.replace("$", "")}</>}
                </div>
                <div className="text-xs mb-4" style={{ color: C.muted }}>{plan.period}</div>
                <p className="text-sm mb-6" style={{ color: C.muted }}>{plan.desc}</p>
                <ul className="space-y-2 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm pb-2 border-b" style={{ color: C.muted, borderColor: C.border }}>
                      <span className="font-bold text-xs" style={{ color: C.secondary }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block text-center py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                  style={plan.featured ? { background: C.primary, color: "#fff" } : { border: `1px solid ${C.border}`, color: C.text }}>
                  {plan.tier === "Custom" ? "Contact Us" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 px-6" style={{ background: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <TAG>Reviews</TAG>
          <H2>Local businesses love their new sites</H2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { quote: "I was only on Craigslist before. Now I get 3–4 calls a week from Google. The site paid for itself in the first month.",           name: "Marco K.", biz: "Mobile Mechanic, Burnaby",  init: "MK" },
              { quote: "They built the whole thing in a week and it looks better than companies that have been around for years. Worth every dollar.",     name: "Sarah R.", biz: "House Cleaner, Vancouver",  init: "SR" },
              { quote: "My customers can finally book online and I don't have to reply to every text manually. Game changer for my lawn care business.", name: "Tyler N.", biz: "Lawn Care, Surrey",          init: "TN" },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl p-7 transition-colors" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                <div className="tracking-widest text-sm mb-4" style={{ color: C.tertiary }}>★★★★★</div>
                <p className="text-sm italic leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: C.secondary, color: C.neutral, fontFamily: "var(--font-epilogue)" }}>{t.init}</div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: C.muted }}>{t.biz}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6 relative overflow-hidden" style={{ background: C.surface }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: `${C.primary}15` }} />
        </div>
        <div className="max-w-xl mx-auto relative">
          <TAG>Get Started</TAG>
          <h2 className="text-4xl font-extrabold tracking-tight text-center mb-3" style={{ fontFamily: "var(--font-epilogue)" }}>
            Ready to get found on Google?
          </h2>
          <p className="text-center mb-10" style={{ color: C.muted }}>Tell us about your business and we&rsquo;ll get back within 24 hours.</p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
