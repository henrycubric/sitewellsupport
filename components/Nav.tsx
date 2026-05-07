"use client";
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b backdrop-blur-xl" style={{ background: "rgba(14,26,36,0.90)", borderColor: "rgba(148,210,189,0.12)" }}>
      <a href="#" className="font-extrabold text-xl tracking-tight" style={{ fontFamily: "var(--font-epilogue)", color: "#F0EDE8" }}>
        SiteWell<span style={{ color: "#94D2BD" }}>.info</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 list-none">
        {["How", "Services", "Pricing"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-sm transition-colors hover:opacity-100" style={{ color: "#7A8F9E" }}>
              {item === "How" ? "Process" : item}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="text-sm font-semibold px-5 py-2 rounded-full transition-opacity hover:opacity-90" style={{ background: "#B05F73", color: "#fff" }}>
            Get a Site →
          </a>
        </li>
      </ul>
    </nav>
  );
}
