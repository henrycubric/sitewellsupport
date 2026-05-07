export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ background: "#132030", borderColor: "rgba(148,210,189,0.12)" }}>
      <span className="font-extrabold text-lg" style={{ fontFamily: "var(--font-epilogue)", color: "#F0EDE8" }}>
        SiteWell<span style={{ color: "#94D2BD" }}>.info</span>
      </span>
      <ul className="flex flex-wrap gap-6 list-none">
        {["Process", "Services", "Pricing", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-sm transition-colors hover:opacity-100" style={{ color: "#7A8F9E" }}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <span className="text-xs" style={{ color: "#7A8F9E" }}>© 2026 SiteWell.info — Vancouver, BC</span>
    </footer>
  );
}
