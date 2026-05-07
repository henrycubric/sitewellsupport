import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-[#f0f0ee]">
      <Nav />

      {/* HERO with ContainerScroll */}
      <section className="pt-16">
        <ContainerScroll
          titleComponent={
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-[#7CFF6B] text-xs font-medium tracking-[0.12em] uppercase mb-6">
                <span className="w-6 h-px bg-[#7CFF6B]" />
                Vancouver Web Developers
              </span>
              <h1
                className="font-extrabold tracking-tight leading-none text-[clamp(2.5rem,6vw,5.5rem)]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Websites that get your
                <br />
                <span className="text-[#7CFF6B]">business found.</span>
              </h1>
              <p className="mt-4 text-[#888880] text-lg max-w-lg mx-auto">
                Clean, fast sites for Vancouver businesses — starting at $250.
                No fluff, no contracts, just results.
              </p>
              <div className="flex gap-3 justify-center mt-6">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 bg-[#7CFF6B] text-black font-medium px-6 py-3 rounded-full hover:bg-[#B8FF4F] transition-colors"
                >
                  See Pricing →
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 border border-white/10 text-white px-6 py-3 rounded-full hover:border-white/25 transition-colors"
                >
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

      {/* STATS */}
      <section className="border-y border-white/7 bg-[#111] py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-20">
          {[
            { num: "$250+", label: "Starting price" },
            { num: "5–7", label: "Days to launch" },
            { num: "100%", label: "Local Vancouver team" },
            { num: "0", label: "Monthly contracts" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-extrabold text-[#7CFF6B]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {s.num}
              </div>
              <div className="text-xs text-[#888880] mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-white/7 bg-[#111] py-4">
        <div className="flex gap-12 w-max animate-marquee">
          {[
            "Mobile Mechanics","Pressure Washing","Home Cleaners","Lawn Care",
            "Dog Walkers","Personal Trainers","Auto Detailers","Contractors",
            "Photographers","Food Trucks",
            "Mobile Mechanics","Pressure Washing","Home Cleaners","Lawn Care",
            "Dog Walkers","Personal Trainers","Auto Detailers","Contractors",
            "Photographers","Food Trucks",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-[#888880] text-xs font-medium tracking-[0.1em] uppercase whitespace-nowrap">
              <span className="text-[#7CFF6B]">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#7CFF6B] text-xs font-medium tracking-[0.14em] uppercase flex items-center gap-2 mb-3">
            <span className="w-4 h-px bg-[#7CFF6B]" /> Process
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight mb-12" style={{ fontFamily: "var(--font-syne)" }}>
            Simple. Fast. Done right.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/7 border border-white/7 rounded-2xl overflow-hidden">
            {[
              { n: "01", title: "Tell us about your business", body: "A quick call or message. We learn what you do, who your customers are, and what the site needs to accomplish." },
              { n: "02", title: "We build your site in days", body: "We write the copy, design the pages, and build from scratch — optimized for Google and ready for mobile." },
              { n: "03", title: "Launch and start getting leads", body: "We hand you the keys. Your site is live, Google Business Profile is set up, and customers can find you." },
            ].map((step) => (
              <div key={step.n} className="bg-[#161616] p-8 hover:bg-[#1a1a1a] transition-colors">
                <div className="text-5xl font-extrabold text-[#7CFF6B]/12 mb-5" style={{ fontFamily: "var(--font-syne)" }}>{step.n}</div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-syne)" }}>{step.title}</h3>
                <p className="text-sm text-[#888880] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLINE 3D HERO CARD */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#7CFF6B] text-xs font-medium tracking-[0.14em] uppercase flex items-center gap-2 mb-3">
            <span className="w-4 h-px bg-[#7CFF6B]" /> Experience
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight mb-10" style={{ fontFamily: "var(--font-syne)" }}>
            Built to make an impression.
          </h2>
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-white/10">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={300} />
            <div className="flex h-full">
              <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
                  Interactive &<br />
                  <span className="text-[#7CFF6B]">Modern Design</span>
                </h3>
                <p className="mt-4 text-neutral-400 max-w-xs text-sm leading-relaxed">
                  Every site we build is crafted to capture attention, work on any device, and convert visitors into customers.
                </p>
                <a href="#contact" className="mt-6 inline-flex w-fit items-center gap-2 bg-[#7CFF6B] text-black font-medium px-5 py-2.5 rounded-full text-sm hover:bg-[#B8FF4F] transition-colors">
                  Start your project →
                </a>
              </div>
              <div className="flex-1 relative hidden md:block">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#7CFF6B] text-xs font-medium tracking-[0.14em] uppercase flex items-center gap-2 mb-3">
            <span className="w-4 h-px bg-[#7CFF6B]" /> Services
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight mb-10" style={{ fontFamily: "var(--font-syne)" }}>
            Everything your business needs online
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "🖥️", title: "Starter Website", desc: "Clean, professional single-page site with your services, contact info, and a form.", price: "From $250" },
              { icon: "📄", title: "Multi-Page Site", desc: "Home, About, Services, and Contact pages — ideal for businesses with multiple offerings.", price: "From $400" },
              { icon: "📍", title: "Google Business Setup", desc: "We set up and optimize your Google Business Profile so you show up in local search.", price: "$75 add-on" },
              { icon: "🔍", title: "Local SEO", desc: "Content written with the keywords your customers actually search — rank higher over time.", price: "Included in all plans" },
            ].map((s) => (
              <div key={s.title} className="bg-[#161616] border border-white/7 rounded-2xl p-7 hover:border-[#7CFF6B]/20 hover:-translate-y-1 transition-all">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-syne)" }}>{s.title}</h3>
                <p className="text-sm text-[#888880] leading-relaxed mb-3">{s.desc}</p>
                <span className="text-[#7CFF6B] font-bold text-sm">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#7CFF6B] text-xs font-medium tracking-[0.14em] uppercase flex items-center gap-2 mb-3">
            <span className="w-4 h-px bg-[#7CFF6B]" /> Pricing
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight mb-10" style={{ fontFamily: "var(--font-syne)" }}>
            No surprises. One flat price.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                tier: "Starter", price: "$250", period: "one-time, CAD",
                desc: "Get online fast with a professional single-page website.",
                features: ["1-page website","Mobile responsive","Contact form","Basic SEO setup","2 rounds of revisions","Delivered in 5–7 days"],
                featured: false,
              },
              {
                tier: "Professional", price: "$450", period: "one-time, CAD",
                desc: "A full website with multiple pages and everything you need to rank.",
                features: ["Up to 5 pages","Mobile responsive","Contact form + booking","Full local SEO","Google Business setup","3 rounds of revisions","Delivered in 7–10 days"],
                featured: true,
              },
              {
                tier: "Custom", price: "Talk", period: "custom quote",
                desc: "E-commerce, booking systems, custom features — we'll scope it together.",
                features: ["Unlimited pages","E-commerce optional","Online booking system","Custom design","Priority delivery","Ongoing support available"],
                featured: false,
              },
            ].map((plan) => (
              <div key={plan.tier} className={`relative rounded-2xl p-7 border transition-all hover:-translate-y-1 ${plan.featured ? "border-[#7CFF6B] bg-[#161616]" : "border-white/7 bg-[#161616]"}`}>
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7CFF6B] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">Most Popular</span>
                )}
                <div className="text-xs text-[#888880] uppercase tracking-widest mb-3">{plan.tier}</div>
                <div className="text-5xl font-extrabold tracking-tight mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                  {plan.price === "Talk" ? <span className="text-3xl">Let's talk</span> : <><sup className="text-xl">$</sup>{plan.price.replace("$","")}</>}
                </div>
                <div className="text-xs text-[#888880] mb-4">{plan.period}</div>
                <p className="text-sm text-[#888880] mb-6">{plan.desc}</p>
                <ul className="space-y-2 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#888880] border-b border-white/5 pb-2">
                      <span className="text-[#7CFF6B] font-bold text-xs">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-2.5 rounded-xl text-sm font-medium transition-colors ${plan.featured ? "bg-[#7CFF6B] text-black hover:bg-[#B8FF4F]" : "border border-white/10 text-white hover:bg-white/5"}`}>
                  {plan.tier === "Custom" ? "Contact Us" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#7CFF6B] text-xs font-medium tracking-[0.14em] uppercase flex items-center gap-2 mb-3">
            <span className="w-4 h-px bg-[#7CFF6B]" /> Reviews
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight mb-10" style={{ fontFamily: "var(--font-syne)" }}>
            Local businesses love their new sites
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { quote: "I was only on Craigslist before. Now I get 3–4 calls a week from Google. The site paid for itself in the first month.", name: "Marco K.", biz: "Mobile Mechanic, Burnaby", init: "MK" },
              { quote: "They built the whole thing in a week and it looks better than companies that have been around for years. Worth every dollar.", name: "Sarah R.", biz: "House Cleaner, Vancouver", init: "SR" },
              { quote: "My customers can finally book online and I don't have to reply to every text manually. Game changer for my lawn care business.", name: "Tyler N.", biz: "Lawn Care, Surrey", init: "TN" },
            ].map((t) => (
              <div key={t.name} className="bg-[#161616] border border-white/7 rounded-2xl p-7 hover:border-[#7CFF6B]/15 transition-colors">
                <div className="text-[#7CFF6B] tracking-widest text-sm mb-4">★★★★★</div>
                <p className="text-sm italic leading-relaxed mb-5 text-[#f0f0ee]">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#7CFF6B] flex items-center justify-center text-black text-xs font-bold shrink-0" style={{ fontFamily: "var(--font-syne)" }}>{t.init}</div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-[#888880]">{t.biz}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-gradient-to-br from-[#0d150c] via-[#0a0a0a] to-[#0f140d] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#7CFF6B]/8 blur-[120px]" />
        </div>
        <div className="max-w-xl mx-auto relative">
          <p className="text-[#7CFF6B] text-xs font-medium tracking-[0.14em] uppercase flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-px bg-[#7CFF6B]" /> Get Started
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-center mb-3" style={{ fontFamily: "var(--font-syne)" }}>
            Ready to get found on Google?
          </h2>
          <p className="text-center text-[#888880] mb-10">Tell us about your business and we&rsquo;ll get back within 24 hours.</p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
