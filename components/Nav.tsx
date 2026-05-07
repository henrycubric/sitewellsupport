"use client";
export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b backdrop-blur-xl"
      style={{ background: "rgba(248,249,255,0.92)", borderColor: "rgba(0,70,85,0.10)" }}
    >
      <a href="#" className="font-bold text-xl tracking-tight" style={{ fontFamily: "var(--font-epilogue)", color: "#004655" }}>
        SiteWell<span style={{ color: "#005F73" }}>.info</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 list-none">
        {["Process", "Services", "Pricing"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-opacity hover:opacity-100"
              style={{ color: "#6f797c" }}
            >
              {item}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ background: "#005F73" }}
          >
            Get a Site →
          </a>
        </li>
      </ul>
    </nav>
  );
}
